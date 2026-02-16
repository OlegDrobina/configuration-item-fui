define("UsrTempExternalAccessMiniPageFunctions", ["@creatio-devkit/common"], function (sdk) {
	return {
		addTempExternalAccessListFiltration: async function(request) {
			const ctx = request.$context;
			const customerId = await ctx.UsrCustomerIdValue;
			const filters = new sdk.FilterGroup();
			filters.addSchemaColumnFilterWithParameter(
				sdk.ComparisonType.Equal,
				"UsrCustomerId",
				customerId
			);
			ctx.DataGrid_immds9e_CustomerId_Filter = filters;
		},

		processOpenExternalAccess: async function(request) {
			const ctx = request.$context;
			await this.showActionStartedNotification(ctx);
			const rightService = new sdk.RightsService();
			const canUseExternalAccess = await rightService.getCanExecuteOperation("CanUseExternalAccess");
			if (canUseExternalAccess) {
				const clickedRow = await request.$initialEvent.row;
				const accessId = clickedRow.attributes.DataGrid_immds9eDS_UsrAccessId;		
				const tokenValue = await this.requestTemporaryAccessToken(accessId);
				if (!tokenValue) {
					const messageText = "Access token wasn\'t received. Action is cancelled.";
					await this.showErrorMessage(messageText);
				} else {
					await this.executeProcessExternalAccessOpen(request, tokenValue);
				}
			} else {
				const messageText = "Current user cannot use external access. Please contact your system administrator.";
				await this.showErrorMessage(messageText);
			}
		},

		requestTemporaryAccessToken: async function(accessId) {
			try {
				const httpClientService = new sdk.HttpClientService();
				const endpoint = `${Terrasoft.workspaceBaseUrl}/rest/TempAccessService/GetAccessToken`;
				const requestBody = {
					accessId: accessId
				};
				const response = await httpClientService.post(endpoint, requestBody);
				const tokenValue = response.body.result;
				return tokenValue;
			} catch (exception) {
				return;
			}
		},

		executeProcessExternalAccessOpen: async function(request, tokenValue) {
			const normalizedRequest = await this.normalizeRequestValues(request);
			const internalAccessLogged = await this.internalLogExternalAccessRequest(normalizedRequest);
			if (internalAccessLogged && internalAccessLogged.success) {
				await this.openExternalAccess(normalizedRequest, tokenValue);
				await this.closeExternalAccessMiniPage(request);
			}
		},

		normalizeRequestValues: async function(request) {
			const clickedRow = await request.$initialEvent.row;
			const clickedRowAttributes = clickedRow.attributes;
			const customerId = await request.$context.UsrCustomerIdValue;
			const normalizedRequest = {
				accessId: clickedRowAttributes.DataGrid_immds9eDS_UsrAccessId,
				websiteUrl: clickedRowAttributes.DataGrid_immds9eDS_UsrUrl,
				customerId: customerId,
				description: clickedRowAttributes.DataGrid_immds9eDS_UsrDescription
			};
			return normalizedRequest;
		},

		internalLogExternalAccessRequest: async function(request) {
			const { accessId, websiteUrl, customerId, description } = request;
			const externalAccessRequestLogModel = await sdk.Model.create("ExternalAccessRequestLog");
			const insertRequestBody = {
				"ExternalAccessId": accessId,
				"ExternalAccessDescription": description,
				"CustomerId": customerId,
				"Url": websiteUrl
			};
			try {
				const result = await externalAccessRequestLogModel.insert(insertRequestBody);
				return result;
			} catch (exception) {
				await this.showErrorMessage(exception.message);
			}
		},

		openExternalAccess: async function(request, tokenValue) {
			const { websiteUrl } = request;
			const redirectUrl = `${websiteUrl}/Login/ExternalAccessLogin.aspx#access_token=${tokenValue}`;
			const newTab = window.open(redirectUrl);
			newTab.focus();
		},

		closeExternalAccessMiniPage: async function(request) {
			const closeExternalAccessMiniPageRequest = {
				type: "crt.ClosePageRequest",
				$context: request.$context
			};
			await sdk.HandlerChainService.instance.process(closeExternalAccessMiniPageRequest);
		},

		showActionStartedNotification: async function(context) {
			await context.executeRequest({
				type: "crt.NotificationRequest",
				$context: context,
				message: "Action started",
				duration: 1000,
			});
		},

		showErrorMessage: async function(messageText) {
			const dialogService = new sdk.DialogService();
			const result = await dialogService.open({
				message: messageText,
				actions: [
					{
						key: "Yes",
						config: {
							color: "primary",
							caption: "OK",
						}
					},
				]
			});
		}
	};
});
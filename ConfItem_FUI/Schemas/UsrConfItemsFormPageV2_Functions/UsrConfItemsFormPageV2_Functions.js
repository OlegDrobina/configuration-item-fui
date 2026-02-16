define("UsrConfItemsFormPageV2_Functions", [
  "@creatio-devkit/common",
], function (sdk) {
  return {
    /*
			Logic of the "Site Purpose" and "Regular Update" fields
		*/

    initSysOperations: async function (request) {
      const ctx = request.$context;
      const rightService = new sdk.RightsService();
      const canEditConfItem = await rightService.getCanExecuteOperation(
        "CanEditConfigurationItem",
      );
      ctx.IsSitePurposeReadOnly = !canEditConfItem;
      ctx.IsCIRegularUpdateReadOnly = !canEditConfItem;
      console.log(ctx.IsSitePurposeReadOnly);
    },

    /*
			Logic of the external access modal page
		*/

    processOpenTempExternalAccessMiniPage: async function (request) {
      const ctx = request.$context;
      const customerId = await ctx.ConfItemDS_Subscription_irgozji;
      if (!customerId || !customerId?.displayValue) {
        await this.showSubscriptionEmptyErrorMessage();
        return;
      }
      const handlerChain = sdk.HandlerChainService.instance;
      handlerChain.process({
        type: "crt.OpenPageRequest",
        schemaName: "UsrTempExternalAccessMiniPage",
        parameters: {
          UsrCustomerIdValue: customerId.displayValue,
        },
        $context: null,
      });
    },

    showSubscriptionEmptyErrorMessage: async function () {
      const dialogService = new sdk.DialogService();
      const result = await dialogService.open({
        message: "Current website\'s subscription is empty",
        actions: [
          {
            key: "Yes",
            config: {
              color: "primary",
              caption: "OK",
            },
          },
        ],
      });
      return;
    },

    initTeamCityOperations: async function (request) {
      const ctx = request.$context;
      await this.checkCanUseTeamCityActions(ctx);
    },

    checkCanUseTeamCityActions: async function (ctx) {
      const operationName =
        Terrasoft.CurrentUser.userType === Terrasoft.UserType.GENERAL
          ? "SupportCanRunTeamCityAction"
          : "SupportCanRunTeamCityActionFromPortal";
      const rightService = new sdk.RightsService();
      const canRunTeamCityAction =
        await rightService.getCanExecuteOperation(operationName);
      /*
				Done so below since the WebsiteServicesButton (in the UsrConfItemsFormPageV2) and buttons in Freedom UI
				operate with the "disabled" property only
			*/
      ctx.CanTriggerTeamCityActions = !canRunTeamCityAction;
      if (canRunTeamCityAction) {
        const configurationItemId = await ctx.Id;
        ctx.TeamCityOperationsCollection =
          await this.requestTeamCityOperationsList(configurationItemId);
      }
    },

    mapTeamCityActionsVisibility: async function (request) {
      const ctx = request.$context;
      const operationsList = await ctx.TeamCityOperationsCollection;
      if (Array.isArray(operationsList)) {
        ctx.IsBackupClientDatabaseMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Backup client database",
        );
        ctx.IsCreateDemoSiteMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Create demo site",
        );
        ctx.IsCreateDemoSiteCopyMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Create demo site copy",
        );
        ctx.IsCreateWebsiteCopyMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Create website copy",
        );
        ctx.IsDiagnosticsInformationMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Diagnostics information",
        );
        ctx.IsFlushRedisMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Flush redis",
        );
        ctx.IsGetDatabaseAccessMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Get database access",
        );
        ctx.IsGetDumpMemoryMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Get dump memory",
        );
        ctx.IsGetTheLogsMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Get the logs",
        );
        ctx.IsInstallPackagesMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Install packages",
        );
        ctx.IsMoveDemoSiteMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Move demo site",
        );
        ctx.IsPasswordResetMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Password reset",
        );
        ctx.IsRegistrationInRemoteAccessOnSiteMenuItemVisible =
          operationsList.some(
            (item) => item?.Name === "Registration in Remote access OnSite",
          );
        ctx.IsRestartSiteMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Restart site",
        );
        ctx.IsWebsiteRelicensingMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Website relicensing",
        );
        ctx.IsWebsiteRelicensingNoRedisFlushMenuItemVisible =
          operationsList.some(
            (item) => item?.Name === "Website relicensing (no Redis flush)",
          );
        ctx.IsWebisteVersionUpdateMenuItemVisible = operationsList.some(
          (item) => item?.Name === "Website version update",
        );
      }
    },

    openTeamCityActionsPolicy: async function () {
      window.open(
        "https://creatio.atlassian.net/wiki/spaces/TS/pages/2353138060/Performing+actions+on+the+Cloud+platform",
        "_blank",
      );
    },

    prepareRunTeamCityAction: async function (request) {
      const ctx = request.$context;
      const confItemId = await ctx.Id;
      const actionName = await request.actionName;
      const availableTeamCityActions = await ctx.TeamCityOperationsCollection;
      const neededAction = availableTeamCityActions.find(
        (item) => item.Name === actionName,
      );
      const { ProcessCaption, MiniPageSchemaName } = neededAction;
      if (neededAction.MiniPageSchemaName) {
        neededAction.MiniPageSchemaName === "CloudCopyDemoSiteMiniPage"
          ? await this.processOpenMiniPageRequest(
              ctx,
              "UsrCloudCopyDemoSiteMiniPageFUI",
            )
          : await this.processOpenMiniPageRequest(
              ctx,
              "UsrCloudMoveDemoSiteMiniPageFUI",
            );
      } else {
        const actionConfig = {
          ProcessCaption: ProcessCaption,
          confItemId: confItemId,
          request: request,
        };
        const result =
          await this.triggerCorrespondentBusinessProcess(actionConfig);
        if (!result.success) {
          await this.showNotificationMessage(
            ctx,
            "Action completed with an error.",
          );
        }
      }
    },

    processOpenMiniPageRequest: async function (context, miniPageSchemaName) {
      const confItemId = await context.Id;
      const handlerChain = sdk.HandlerChainService.instance;
      await handlerChain.process({
        type: "crt.OpenPageRequest",
        schemaName: miniPageSchemaName,
        $context: context,
        parameters: {
          UsrConfItem: confItemId,
        },
      });
    },

    triggerCorrespondentBusinessProcess: async function (config) {
      const { ProcessCaption, confItemId, request } = config;
      await this.showNotificationMessage(request.$context, "Action started");
      const handlerChain = sdk.HandlerChainService.instance;
      return await handlerChain.process({
        type: "crt.RunBusinessProcessRequest",
        processName: ProcessCaption,
        processParameters: {
          CaseId: null,
          ConfItemId: confItemId,
        },
        $context: request.$context,
      });
    },

    showNotificationMessage: async function (context, messageText) {
      await context.executeRequest({
        type: "crt.NotificationRequest",
        $context: context,
        message: messageText,
        duration: 2000,
      });
    },

    requestTeamCityOperationsList: async function (confItemId) {
      try {
        const httpClientService = new sdk.HttpClientService();
        const endpoint = `${Terrasoft.workspaceBaseUrl}/rest/SupportTeamCityService/GetOperationList`;
        const requestBody = {
          confItemId: confItemId,
        };
        const response = await httpClientService.post(endpoint, requestBody);
        const operationsList =
          response.body.GetOperationListResult?.OperationsList;
        return operationsList;
      } catch (exception) {
        return;
      }
    },

    /*
			Logic of the maintenance list
		*/

    fillInCurrentStartTimeColumn: async function (request) {
      const listRecords = await request.$context["GridDetail_mj2gcng"];
      const timeZoneOffset = Terrasoft.SysValue.CURRENT_USER_TIMEZONE_OFFSET;
      const millisecondsToAdd = timeZoneOffset * 6e4;
      for (const record of listRecords) {
        const startTimeUTC = await record["GridDetail_mj2gcngDS_StartTime"];
        if (startTimeUTC) {
          const currentStartTime = await this.processReceivedTime(
            startTimeUTC,
            millisecondsToAdd,
          );
          record["GridDetail_mj2gcngDS_CurrentStartTime"] = currentStartTime;
        }
      }
    },

    fillInCurrentEndTimeColumn: async function (request) {
      const listRecords = await request.$context["GridDetail_mj2gcng"];
      const timeZoneOffset = Terrasoft.SysValue.CURRENT_USER_TIMEZONE_OFFSET;
      const millisecondsToAdd = timeZoneOffset * 6e4;
      for (const record of listRecords) {
        const endTimeUTC = await record["GridDetail_mj2gcngDS_EndTime"];
        if (endTimeUTC) {
          const currentEndTime = await this.processReceivedTime(
            endTimeUTC,
            millisecondsToAdd,
          );
          record["GridDetail_mj2gcngDS_CurrentEndTime"] = currentEndTime;
        }
      }
    },

    processReceivedTime: async function (receivedTime, timeToAdd) {
      return new Date(receivedTime.getTime() + timeToAdd);
    },
  };
});

define("UsrPage_lutc6wn_Functions", ["@creatio-devkit/common"], function (sdk) {
	return {
		insertContactAccount: async function(request) {
			const ctx = request.$context;
			const TYPE_CONTACT = "B2AAD5DF-AF5C-425B-AC2C-2F13D8810A71";
			const TYPE_ACCOUNT = "350D6FD7-C84C-43C0-BEC6-40116CBB9D2B";
			const contactId = await ctx.ConfItemUserDS_Contact_4s6dh90;
			const accountId = await ctx.ConfItemUserDS_Account_n2j2c6y;
			const confItemId = await ctx.ConfItemMasterRecordId;
			const checkAccountExistsConfig = {
				accountId: accountId,
				confItemId: confItemId,
				TYPE_ACCOUNT: TYPE_ACCOUNT
			};
			const checkContactExistsConfig = {
				contactId: contactId,
				confItemId: confItemId,
				TYPE_CONTACT: TYPE_CONTACT
			};
			const accountExists = await this.checkAccountExists(checkAccountExistsConfig);
			const contactExists = await this.checkContactExists(checkContactExistsConfig);
			const confItemUserModel = await sdk.Model.create("ConfItemUser");
			if (accountId && !accountExists) {
				await confItemUserModel.insert(
					{
						Account: accountId,
						Type: TYPE_ACCOUNT,
						ConfItem: confItemId
					}
				);
			}
			if (contactId && !contactExists) {
				await confItemUserModel.insert(
					{
						Contact: contactId,
						Type: TYPE_CONTACT,
						ConfItem: confItemId
					}
				);
			}
			await this.closeModalPageOnSave(ctx);
		},

		checkContactExists: async function(config) {
			const { contactId, confItemId, TYPE_CONTACT } = config;
			const confItemUserModel = await sdk.Model.create("ConfItemUser");
			const modelAttributes = ["Id"];
			const filters = new sdk.FilterGroup();
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Contact", contactId);
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "ConfItem", confItemId);
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Type", TYPE_CONTACT);
			const contacts = await confItemUserModel.load({
				attributes: modelAttributes,
				parameters: [
					{
						type: sdk.ModelParameterType.Filter,
						value: filters
					}
				]
			});
			return contacts.length !== 0;
		},

		checkAccountExists: async function(config) {
			const { accountId, confItemId, TYPE_ACCOUNT } = config;
			const confItemUserModel = await sdk.Model.create("ConfItemUser");
			const modelAttributes = ["Id"];
			const filters = new sdk.FilterGroup();
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Account", accountId);
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "ConfItem", confItemId);
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Type", TYPE_ACCOUNT);
			const accounts = await confItemUserModel.load({
				attributes: modelAttributes,
				parameters: [
					{
						type: sdk.ModelParameterType.Filter,
						value: filters
					}
				]
			});
			return accounts.length !== 0;
		},

		closeModalPageOnSave: async function (context) {
			const handlerChain = sdk.HandlerChainService.instance;
			await handlerChain.process({
				type: "crt.CancelRecordChangesRequest",
				$context: context,
			});
			await context.executeRequest({
				type: "crt.NotificationRequest",
				$context: context,
				message: "Data successfully saved",
				duration: 2000,
			});
			await handlerChain.process({
				type: "crt.ClosePageRequest",
				$context: context,
			});
		},
	};
});
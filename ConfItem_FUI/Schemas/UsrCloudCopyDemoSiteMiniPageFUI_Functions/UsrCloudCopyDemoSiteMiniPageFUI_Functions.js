define("UsrCloudCopyDemoSiteMiniPageFUI_Functions", ["@creatio-devkit/common"], function (sdk) {
	return {
		setActionValues: async function(request) {
			const ctx = request.$context;
			const confItem = await ctx.PageParameters_UsrLookupParameter1_92k3aa8;
			if (!confItem) {
				await this.clearDataCenterAndBlockTypeInfo(ctx);
				return;
			}
			const parentConfItem = await this.getInfoOnParentConfItem(confItem);
			if (parentConfItem) {
				const currentAndTargetDataCenters = await this.getInfoOnCurrentAndTargetDataCenters(parentConfItem);
				if (currentAndTargetDataCenters) {
					await this.setInfoOnCurrentAndTargetDataCenters(currentAndTargetDataCenters, ctx);
				}
			}
			await this.setSourceServerBlockType(ctx, confItem);
		},

		checkEnvironmentType: async function(request) {
			const ctx = request.$context;
			const confItem = await ctx.PageParameters_UsrLookupParameter1_92k3aa8;
			if (confItem) {
				const confItemModel = await sdk.Model.create("ConfItem");
				const confItemModelAttributes = ["Id"];
				const filters = new sdk.FilterGroup();
				await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Id", confItem);
				await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "SitePurpose.Code", "demo");
				const confItemModelFilters = [{
					type: sdk.ModelParameterType.Filter,
					value: filters
				}];
				const confItemsModelRecords = await confItemModel.load({
					attributes: confItemModelAttributes,
					parameters: confItemModelFilters
				});
				ctx.IsEnvironmentTypeCorrect = confItemsModelRecords.length > 0;
			}
		},

		clearDataCenterAndBlockTypeInfo: async function(context) {
			context.PageParameters_UsrLookupParameter1_ej6o1aj = null;
			context.PageParameters_UsrLookupParameter1_9fnta6a = null;
			context.PageParameters_UsrLookupParameter1_ni8n11m = null;
		},

		getInfoOnParentConfItem: async function(confItem) {
			const confItemModel = await sdk.Model.create("ConfItem");
			const confItemModelAttributes = ["Id", "Name"];
			const filters = new sdk.FilterGroup();
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "[ConfItem:ParentConfItem:Id].[ConfItem:ParentConfItem:Id].Id", confItem);
			const confItemModelFilters = [{
				type: sdk.ModelParameterType.Filter,
				value: filters
			}];
			const parentConfItemsModelRecords = await confItemModel.load({
				attributes: confItemModelAttributes,
				parameters: confItemModelFilters
			});
			const resultInfoOnParentConfItem = parentConfItemsModelRecords.length > 0 ?
				parentConfItemsModelRecords[0] :
				false;
			return resultInfoOnParentConfItem;
		},

		getInfoOnCurrentAndTargetDataCenters: async function(parentConfItem) {
			const workDataCenterModel = await sdk.Model.create("WorkDataCenter");
			const workDataCenterModelAttributes = ["Id"];
			const filters = new sdk.FilterGroup();
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Code", parentConfItem.Name);
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Demo", 1);
			const workDataCenterModelFilters = [{
				type: sdk.ModelParameterType.Filter,
				value: filters
			}];
			const workDataCenterModelRecords = await workDataCenterModel.load({
				attributes: workDataCenterModelAttributes,
				parameters: workDataCenterModelFilters
			});
			const resultInfoOnCurrentAndTargetDataCenters = workDataCenterModelRecords.length > 0 ? 
				workDataCenterModelRecords[0] :
				false;
			return resultInfoOnCurrentAndTargetDataCenters;
		},

		setInfoOnCurrentAndTargetDataCenters: async function(currentAndTargetDataCenters, context) {
			context.PageParameters_UsrLookupParameter1_ej6o1aj = currentAndTargetDataCenters.Id;
			context.PageParameters_UsrLookupParameter1_9fnta6a = currentAndTargetDataCenters.Id;
		},

		setSourceServerBlockType: async function(context, confItem) {
			const confItemModel = await sdk.Model.create("ConfItem");
			const confItemModelAttributes = ["Id", "ServerBlockType"];
			const filters = new sdk.FilterGroup();
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "[ConfItem:ParentConfItem:Id].Id", confItem);
			const confItemModelFilters = [{
				type: sdk.ModelParameterType.Filter,
				value: filters
			}];
			const parentConfItemsModelRecords = await confItemModel.load({
				attributes: confItemModelAttributes,
				parameters: confItemModelFilters
			});
			if (parentConfItemsModelRecords.length > 0) {
				context.PageParameters_UsrLookupParameter1_ni8n11m = parentConfItemsModelRecords[0].ServerBlockType;
			}
		},

		getDestinationDataCenterFilter: async function(request) {
			const filter = new sdk.FilterGroup();
			await filter.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Demo", 1);
			request.parameters.push({ type: "filter", value: filter.toJson() });
		},

		getDestinationServerBlockTypeFilter: async function(request) {
			const destinationDataCenterCode = await request.$context.PageParameters_UsrLookupParameter1_9fnta6a.Code;
			const filters = new sdk.FilterGroup();
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Exists, "[CloudDemoSiteMovingMap:DestinationServerBlockType:Id].Id");
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "[ConfItem:ServerBlockType:Id].ParentConfItem.Name", destinationDataCenterCode);
			request.parameters.push({ type: "filter", value: filters.toJson() });
		}
	};
});
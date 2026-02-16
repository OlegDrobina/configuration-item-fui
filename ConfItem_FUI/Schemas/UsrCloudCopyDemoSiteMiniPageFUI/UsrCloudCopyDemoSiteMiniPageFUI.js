define("UsrCloudCopyDemoSiteMiniPageFUI", /**SCHEMA_DEPS*/["UsrCloudCopyDemoSiteMiniPageFUI_Functions"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(pageFunctions)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "PageTitle"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "Label_luqh8e2",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_luqh8e2_caption)#)#",
					"labelType": "large-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0A8DF1",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_UsrConfItem",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_92k3aa8",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_92k3aa8",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"valueDetails": null,
					"mode": "List"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_UsrSourceDataCenter",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_ej6o1aj",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_ej6o1aj",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"valueDetails": null,
					"mode": "List"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_UsrSourceServerBlockType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_ni8n11m",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_ni8n11m",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"valueDetails": null,
					"mode": "List"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_UsrDestinationDataCenter",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_9fnta6a",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_9fnta6a",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"mode": "List"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_UsrDestinationServerBlockType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_yifhyhy",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_yifhyhy",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"mode": "List"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_UsrNewSiteName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PageParameters_UsrTextParameter1_1rkr9xu",
					"control": "$PageParameters_UsrTextParameter1_1rkr9xu",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"IsEnvironmentTypeCorrect": {
						"modelConfig": {}
					},
					"PageParameters_UsrLookupParameter1_92k3aa8": {
						"modelConfig": {
							"path": "PageParameters.UsrConfItem"
						}
					},
					"PageParameters_UsrLookupParameter1_92k3aa8_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PageParameters_UsrLookupParameter1_ej6o1aj": {
						"modelConfig": {
							"path": "PageParameters.UsrSourceDataCenter"
						}
					},
					"PageParameters_UsrLookupParameter1_ej6o1aj_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PageParameters_UsrLookupParameter1_ni8n11m": {
						"modelConfig": {
							"path": "PageParameters.UsrSourceServerBlockType"
						}
					},
					"PageParameters_UsrLookupParameter1_ni8n11m_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PageParameters_UsrLookupParameter1_9fnta6a": {
						"modelConfig": {
							"path": "PageParameters.UsrDestinationDataCenter"
						}
					},
					"PageParameters_UsrLookupParameter1_9fnta6a_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PageParameters_UsrLookupParameter1_yifhyhy": {
						"modelConfig": {
							"path": "PageParameters.UsrDestinationServerBlockType"
						}
					},
					"PageParameters_UsrLookupParameter1_yifhyhy_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PageParameters_UsrTextParameter1_1rkr9xu": {
						"modelConfig": {
							"path": "PageParameters.UsrNewSiteName"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"HeaderCaption"
				],
				"values": {
					"modelConfig": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if (request.attributeName == "PageParameters_UsrLookupParameter1_92k3aa8") {
						await pageFunctions.setActionValues(request);
						await pageFunctions.checkEnvironmentType(request);
					}
					return await next?.handle(request);
				}
			},
			{
				request: "crt.LoadDataRequest",
				handler: async (request, next) => {
					if (request.dataSourceName == "PageParameters_UsrLookupParameter1_9fnta6a_List_DS") {
						await pageFunctions.getDestinationDataCenterFilter(request);
					} else if (request.dataSourceName == "PageParameters_UsrLookupParameter1_yifhyhy_List_DS") {
						await pageFunctions.getDestinationServerBlockTypeFilter(request);
					}
					return await next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
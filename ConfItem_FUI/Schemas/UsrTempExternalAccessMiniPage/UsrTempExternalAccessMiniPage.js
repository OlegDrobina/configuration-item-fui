define("UsrTempExternalAccessMiniPage", /**SCHEMA_DEPS*/["UsrTempExternalAccessMiniPageFunctions", "css!UsrTempExternalAccessMiniPageCSS"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(pageFunctions)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"labelType": "headline-4",
					"labelColor": "#181818",
					"labelBackgroundColor": "#FFEDE9",
					"labelTextAlign": "center",
					"visible": true,
					"headingLevel": "label"
				}
			},
			{
				"operation": "move",
				"name": "PageTitle",
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "FooterContainer"
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"caption": "#ResourceString(CancelButton_caption)#",
					"color": "primary",
					"size": "large",
					"iconPosition": "only-text",
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"clickMode": "default"
				}
			},
			{
				"operation": "move",
				"name": "CancelButton",
				"parentName": "GridContainer_4x22f8n",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "SaveButton"
			},
			{
				"operation": "insert",
				"name": "Label_xgl1e3e",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_xgl1e3e_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
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
				"name": "TemporaryExternalAccessDataGrid",
				"values": {
					"rowDoubleClick": {
						"request": "usr.ProcessOpenExternalAccess"
					},
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 6
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"header": {
							"visible": true
						},
						"columns": {
							"dragAndDrop": false,
							"resizing": true,
							"sorting": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_immds9e",
					"activeRow": "$DataGrid_immds9e_ActiveRow",
					"selectionState": "$DataGrid_immds9e_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_immds9e_SelectionState"
					},
					"primaryColumnName": "DataGrid_immds9eDS_Id",
					"columns": [
						{
							"id": "dd81470e-f835-82e1-9ca7-6bcf8aa88741",
							"code": "DataGrid_immds9eDS_UsrUrl",
							"caption": "#ResourceString(DataGrid_immds9eDS_UsrUrl)#",
							"dataValueType": 30,
							"width": 258.99305725097656
						},
						{
							"id": "0c429cbb-14d7-21a2-eb49-c1a3807a2941",
							"code": "DataGrid_immds9eDS_UsrDescription",
							"caption": "#ResourceString(DataGrid_immds9eDS_UsrDescription)#",
							"dataValueType": 29,
							"width": 405.00001525878906
						},
						{
							"id": "9cc1c46d-c615-717d-d91c-8c2f5c8b40eb",
							"code": "DataGrid_immds9eDS_UsrExpirationDate",
							"caption": "#ResourceString(DataGrid_immds9eDS_UsrExpirationDate)#",
							"dataValueType": 28,
							"width": 190.00001525878906
						},
						{
							"id": "2197c24d-c851-207f-ba1e-1acdd9edca1a",
							"code": "DataGrid_immds9eDS_UsrIsSystemOpearationsRestricted",
							"caption": "#ResourceString(DataGrid_immds9eDS_UsrIsSystemOpearationsRestricted)#",
							"dataValueType": 12,
							"width": 192.98611450195312
						},
						{
							"id": "a69b402f-acc3-cd8a-76c8-4003542d0ed4",
							"code": "DataGrid_immds9eDS_UsrIsDataIsolationEnabled",
							"caption": "#ResourceString(DataGrid_immds9eDS_UsrIsDataIsolationEnabled)#",
							"dataValueType": 12,
							"width": 182.00001525878906
						}
					],
					"placeholder": false,
					"bulkActions": [],
					"visible": true,
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_immds9e_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_immds9eDS",
							"filters": "$DataGrid_immds9e | crt.ToCollectionFilters : 'DataGrid_immds9e' : $DataGrid_immds9e_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_immds9e_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "TemporaryExternalAccessDataGrid",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_immds9e_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_immds9eDS",
							"filters": "$DataGrid_immds9e | crt.ToCollectionFilters : 'DataGrid_immds9e' : $DataGrid_immds9e_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_immds9e_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_immds9e_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_immds9e_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "TemporaryExternalAccessDataGrid",
							"filters": "$DataGrid_immds9e | crt.ToCollectionFilters : 'DataGrid_immds9e' : $DataGrid_immds9e_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_immds9e_SelectionState"
						}
					}
				},
				"parentName": "TemporaryExternalAccessDataGrid",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_immds9e_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_immds9eDS",
							"selectionState": "$DataGrid_immds9e_SelectionState"
						}
					}
				},
				"parentName": "TemporaryExternalAccessDataGrid",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_immds9e_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_immds9eDS",
							"filters": "$DataGrid_immds9e | crt.ToCollectionFilters : 'DataGrid_immds9e' : $DataGrid_immds9e_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_immds9e_SelectionState"
						}
					}
				},
				"parentName": "TemporaryExternalAccessDataGrid",
				"propertyName": "bulkActions",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_4x22f8n",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_immds9e_CustomerId_Filter": {},
					"UsrCustomerIdValue": {
						"modelConfig": {
							"path": "PageParameters.UsrCustomerIdValue"
						}
					},
					"DataGrid_immds9e": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_immds9eDS",
							"pagingConfig": {
								"rowCount": 30,
								"rowsLimit": 10
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_immds9e_CustomerId_Filter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_immds9eDS_UsrUrl": {
									"modelConfig": {
										"path": "DataGrid_immds9eDS.UsrUrl"
									}
								},
								"DataGrid_immds9eDS_UsrDescription": {
									"modelConfig": {
										"path": "DataGrid_immds9eDS.UsrDescription"
									}
								},
								"DataGrid_immds9eDS_UsrExpirationDate": {
									"modelConfig": {
										"path": "DataGrid_immds9eDS.UsrExpirationDate"
									}
								},
								"DataGrid_immds9eDS_UsrIsSystemOpearationsRestricted": {
									"modelConfig": {
										"path": "DataGrid_immds9eDS.UsrIsSystemOpearationsRestricted"
									}
								},
								"DataGrid_immds9eDS_UsrIsDataIsolationEnabled": {
									"modelConfig": {
										"path": "DataGrid_immds9eDS.UsrIsDataIsolationEnabled"
									}
								},
								"DataGrid_immds9eDS_UsrAccessId": {
									"modelConfig": {
										"path": "DataGrid_immds9eDS.UsrAccessId"
									}
								},
								"DataGrid_immds9eDS_Id": {
									"modelConfig": {
										"path": "DataGrid_immds9eDS.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"DataGrid_immds9eDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "UsrTempExternalAccess",
								"attributes": {
									"UsrUrl": {
										"path": "UsrUrl"
									},
									"UsrDescription": {
										"path": "UsrDescription"
									},
									"UsrExpirationDate": {
										"path": "UsrExpirationDate"
									},
									"UsrIsSystemOpearationsRestricted": {
										"path": "UsrIsSystemOpearationsRestricted"
									},
									"UsrIsDataIsolationEnabled": {
										"path": "UsrIsDataIsolationEnabled"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				"request": "crt.HandleViewModelAttributeChangeRequest",
				"handler": async (request, next) => {
					if (request.attributeName === "UsrCustomerIdValue" && request.value) {
						await pageFunctions.addTempExternalAccessListFiltration(request);
					}
					return await next?.handle(request);
				}
			},
			{
				"request": "usr.ProcessOpenExternalAccess",
				"handler": async (request, next) => {
					await pageFunctions.processOpenExternalAccess(request);
					return await next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
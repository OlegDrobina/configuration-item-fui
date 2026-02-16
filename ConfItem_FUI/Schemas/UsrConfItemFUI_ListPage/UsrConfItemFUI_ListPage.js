define("UsrConfItemFUI_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"size": "large"
				}
			},
			{
				"operation": "remove",
				"name": "DataImportButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ImportFromExcel"
			},
			{
				"operation": "remove",
				"name": "OpenLandingDesigner"
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"sourceSchemaName": "ConfItemFolder",
					"rootSchemaName": "ConfItem"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 1,
							"width": 127
						},
						{
							"id": "fc47bd0d-a2ab-f3a2-392d-b86a772f75ad",
							"code": "PDS_CustomerID",
							"caption": "#ResourceString(PDS_CustomerID)#",
							"dataValueType": 27,
							"width": 180.00001525878906
						},
						{
							"id": "facceb59-89d2-d824-b6fb-e2388fa82d76",
							"code": "PDS_DBSizeMB",
							"caption": "#ResourceString(PDS_DBSizeMB)#",
							"dataValueType": 4,
							"width": 151.98611450195312
						},
						{
							"id": "5a5b5df4-bfa4-5af6-5d78-76eba94ecc2a",
							"code": "PDS_Status",
							"caption": "#ResourceString(PDS_Status)#",
							"dataValueType": 10,
							"width": 106.00000762939453
						},
						{
							"id": "1f52220e-b378-e91a-25e4-6cbbe05aa34a",
							"code": "PDS_BPMPkg",
							"caption": "#ResourceString(PDS_BPMPkg)#",
							"dataValueType": 10,
							"width": 289.9895935058594
						},
						{
							"id": "0aa47c16-f95c-b9c9-f7db-f5f9f0d8ba4c",
							"code": "PDS_Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10,
							"width": 162.00001525878906
						},
						{
							"id": "3e10d7b6-34d8-cc39-62d2-b137cf77c222",
							"code": "PDS_AccountDwTechnicalAdvisor",
							"caption": "#ResourceString(PDS_AccountDwTechnicalAdvisor)#",
							"dataValueType": 10,
							"width": 172.00001525878906
						},
						{
							"id": "af5c7a4b-775c-9018-2ae5-10844651c0ce",
							"code": "PDS_AccountCsm",
							"caption": "#ResourceString(PDS_AccountCsm)#",
							"dataValueType": 10,
							"width": 117.00001525878906
						},
						{
							"id": "26671b5d-d1db-af5a-d4c0-cadd752585db",
							"code": "PDS_CIRegularUpdate",
							"caption": "#ResourceString(PDS_CIRegularUpdate)#",
							"dataValueType": 12,
							"width": 140.9826431274414
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": false
						},
						"editable": {
							"enable": false,
							"floatingEditPanel": false,
							"itemsCreation": false
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "ConfItem",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			},
			{
				"operation": "insert",
				"name": "QuickFilter_rg4fb4o",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_rg4fb4o_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "a8471d3f-9a60-4c28-89c2-24750004aca8",
								"checkedState": true
							}
						],
						"entitySchemaName": "ConfigItemType",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_rg4fb4o_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Type"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_rg4fb4o_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_jt4wy64",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_jt4wy64_config_caption)#",
						"hint": "",
						"defaultValue": true,
						"approachState": true
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_jt4wy64_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"a64296fa-69d9-4797-8352-111dca233604": {
																"filterType": 4,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "Status"
																},
																"isAggregative": false,
																"dataValueType": 10,
																"referenceSchemaName": "ConfigItemStatus",
																"rightExpressions": [
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "In Use",
																				"Id": "5c5067de-cbb3-4cba-bdb0-ed59249d0ed5",
																				"value": "5c5067de-cbb3-4cba-bdb0-ed59249d0ed5",
																				"displayValue": "In Use"
																			}
																		}
																	}
																]
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "ConfItem"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"approachState": true
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_jt4wy64_Value"
						]
					},
					"filterType": "custom"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_CustomerID": {
						"modelConfig": {
							"path": "PDS.CustomerID"
						}
					},
					"PDS_DBSizeMB": {
						"modelConfig": {
							"path": "PDS.DBSizeMB"
						}
					},
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_BPMPkg": {
						"modelConfig": {
							"path": "PDS.BPMPkg"
						}
					},
					"PDS_Account": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"PDS_AccountDwTechnicalAdvisor": {
						"modelConfig": {
							"path": "PDS.AccountDwTechnicalAdvisor"
						}
					},
					"PDS_AccountCsm": {
						"modelConfig": {
							"path": "PDS.AccountCsm"
						}
					},
					"PDS_CIRegularUpdate": {
						"modelConfig": {
							"path": "PDS.CIRegularUpdate"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_rg4fb4o_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_jt4wy64_Items",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "ConfItem",
					"attributes": {
						"Name": {
							"path": "Name"
						},
						"CustomerID": {
							"path": "CustomerID"
						},
						"DBSizeMB": {
							"path": "DBSizeMB"
						},
						"Status": {
							"path": "Status"
						},
						"BPMPkg": {
							"path": "BPMPkg"
						},
						"Account": {
							"path": "Account"
						},
						"AccountDwTechnicalAdvisor": {
							"type": "ForwardReference",
							"path": "Account.DwTechnicalAdvisor"
						},
						"AccountCsm": {
							"type": "ForwardReference",
							"path": "Account.Csm"
						},
						"CIRegularUpdate": {
							"path": "CIRegularUpdate"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
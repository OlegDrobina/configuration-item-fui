define("UsrPage_lutc6wn", /**SCHEMA_DEPS*/["UsrPage_lutc6wn_Functions"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(pageFunctions)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "TitleContainer"
			},
			{
				"operation": "remove",
				"name": "PageTitle"
			},
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"gap": {
						"columnGap": "extra-small",
						"rowGap": "none"
					},
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "Label_ixxl5lc",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_ixxl5lc_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabPanel_q96t5lb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 4
					},
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "auto",
					"fitContent": true,
					"visible": true,
					"stretch": true,
					"selectedTab": {
						"value": "TabContainer_wiu6ja1"
					},
					"allowToggleClose": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_wiu6ja1",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_wiu6ja1_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_q96t5lb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_wnlgeen",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
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
				"parentName": "TabContainer_wiu6ja1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_fd2tt95",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemUserDS_Contact_4s6dh90",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemUserDS_Contact_4s6dh90",
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wnlgeen",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_ew3lyfm",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ew3lyfm_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_fd2tt95",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_b4v96yb",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_b4v96yb_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_q96t5lb",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_46m0nyx",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemUserDS_Account_n2j2c6y",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemUserDS_Account_n2j2c6y"
				},
				"parentName": "TabContainer_b4v96yb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_8wyc7bl",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8wyc7bl_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_46m0nyx",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"clicked": {
						"request": "TASaveRecordRequest"
					}
				}
			}
			
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ConfItemUserDS_Contact_4s6dh90": {
						"modelConfig": {
							"path": "ConfItemUserDS.Contact"
						}
					},
					"ConfItemUserDS_Contact_4s6dh90_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"ConfItemUserDS_Account_n2j2c6y": {
						"modelConfig": {
							"path": "ConfItemUserDS.Account"
						}
					},
					"ConfItemUserDS_Account_n2j2c6y_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"ConfItemMasterRecordId": {
						"modelConfig": {
							"path": "ConfItemUserDS.ConfItem"
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
					"dataSources": {
						"ConfItemUserDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "ConfItemUser",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false,
								"attributes": {}
							}
						}
					},
					"primaryDataSourceName": "ConfItemUserDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "TASaveRecordRequest",
				handler: async (request, next) => {
					await pageFunctions.insertContactAccount(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
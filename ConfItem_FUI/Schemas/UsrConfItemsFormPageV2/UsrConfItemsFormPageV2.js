define("UsrConfItemsFormPageV2", /**SCHEMA_DEPS*/["UsrConfItemsFormPageV2_Functions", "css!UsrConfItemsFormPageV2CSS"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(pageFunctions)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "SideContainer",
				"values": {
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true,
					"icon": null
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
			},
			{
				"operation": "insert",
				"name": "ActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToolsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ShowAccessListMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ShowAccessListMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.OpenTempExternalAccessMiniPage"
					}
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebsiteServicesButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WebsiteServicesButton_caption)#",
					"color": "accent",
					"disabled": "$CanTriggerTeamCityActions",
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToolsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TeamCityActionsPolicyMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(TeamCityActionsPolicyMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.OpenTeamCityActionsPolicy"
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TeamCityActionsSeparatorMenuItem",
				"values": {
					"type": "crt.MenuDivider"
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BackupClientDatabaseMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(BackupClientDatabaseMenuItem_caption)#",
					"visible": "$IsBackupClientDatabaseMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Backup client database"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CreateDemoSiteMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateDemoSiteMenuItem_caption)#",
					"visible": "$IsCreateDemoSiteMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Create demo site"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CreateDemoSiteCopyMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateDemoSiteCopyMenuItem_caption)#",
					"visible": "$IsCreateDemoSiteCopyMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Create demo site copy"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CreateWebsiteCopyMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateWebsiteCopyMenuItem_caption)#",
					"visible": "$IsCreateWebsiteCopyMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Create website copy"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DiagnosticsInformationMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DiagnosticsInformationMenuItem_caption)#",
					"visible": "$IsDiagnosticsInformationMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Diagnostics information"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "FlushRedisMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(FlushRedisMenuItem_caption)#",
					"visible": "$IsFlushRedisMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Flush redis"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GetDatabaseAccessMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GetDatabaseAccessMenuItem_caption)#",
					"visible": "$IsGetDatabaseAccessMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Get database access"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GetDumpMemoryMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GetDumpMemoryMenuItem_caption)#",
					"visible": "$IsGetDumpMemoryMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Get dump memory"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "GetTheLogsMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GetTheLogsMenuItem_caption)#",
					"visible": "$IsGetTheLogsMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Get the logs"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "InstallPackagesMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InstallPackagesMenuItem_caption)#",
					"visible": "$IsInstallPackagesMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Install packages"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "MoveDemoSiteMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MoveDemoSiteMenuItem_caption)#",
					"visible": "$IsMoveDemoSiteMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Move demo site"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "PasswordResetMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(PasswordResetMenuItem_caption)#",
					"visible": "$IsPasswordResetMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Password reset"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "RegistrationInRemoteAccessOnSiteMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RegistrationInRemoteAccessOnSiteMenuItem_caption)#",
					"visible": "$IsRegistrationInRemoteAccessOnSiteMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Registration in Remote access OnSite"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "RestartSiteMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RestartSiteMenuItem_caption)#",
					"visible": "$IsRestartSiteMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Restart site"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "WebsiteRelicensingMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(WebsiteRelicensingMenuItem_caption)#",
					"visible": "$IsWebsiteRelicensingMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Website relicensing"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "WebsiteRelicensingNoRedisFlushMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(WebsiteRelicensingNoRedisFlushMenuItem_caption)#",
					"visible": "$IsWebsiteRelicensingNoRedisFlushMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Website relicensing (no Redis flush)"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "WebisteVersionUpdateMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(WebisteVersionUpdateMenuItem_caption)#",
					"visible": "$IsWebisteVersionUpdateMenuItemVisible",
					"clicked": {
						"request": "usr.RunTeamCityAction",
						"params": {
							"actionName": "Website version update"
						}
					}
				},
				"parentName": "WebsiteServicesButton",
				"propertyName": "menuItems",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "Input_x0hlamv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.ConfItemDS_Name_0dmvt38",
					"control": "$ConfItemDS_Name_0dmvt38",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_yqwswea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_SitePurpose_sgs65qv",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_SitePurpose_sgs65qv",
					"mode": "List",
					"visible": true,
					"readonly": "$IsSitePurposeReadOnly",
					"placeholder": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_8en6r0l",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8en6r0l_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_yqwswea",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_i3g2ewl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_Status_rxwn5ss",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_Status_rxwn5ss",
					"mode": "List"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_a1unxks",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_a1unxks_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_i3g2ewl",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_iatyts1",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"layoutConfig": {
						"basis": "fit-content"
					},
					"color": "primary",
					"borderRadius": "medium",
					"items": [],
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_7gnaazc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_Account_g35ywjt",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_Account_g35ywjt"
				},
				"parentName": "GridContainer_iatyts1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_mj4fsj6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mj4fsj6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_7gnaazc",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_shiyxfp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_Subscription_irgozji",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_Subscription_irgozji"
				},
				"parentName": "GridContainer_iatyts1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_kbv1ff2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_kbv1ff2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_shiyxfp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_6ojlfm5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.ConfItemDS_DueDate_v438725",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$ConfItemDS_DueDate_v438725"
				},
				"parentName": "GridContainer_iatyts1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_2ozagn9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_BpmonlineLcz_ei2cpdw",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_BpmonlineLcz_ei2cpdw",
					"mode": "List"
				},
				"parentName": "GridContainer_iatyts1",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_5qwttam",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5qwttam_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2ozagn9",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_qya6mdu",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "extra-small",
						"right": "extra-small",
						"bottom": "extra-small",
						"left": "extra-small"
					},
					"color": "primary",
					"borderRadius": "extra-small",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_wow9hjz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_wow9hjz_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_wow9hjz_Data",
								"schemaName": "ConfItem",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "ConfItem"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "DBSizeMB"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "ConfItemDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_wow9hjz_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "light-blue",
							"border": {
								"hidden": true
							}
						},
						"theme": "without-fill",
						"hideTitle": false
					},
					"visible": true
				},
				"parentName": "GridContainer_qya6mdu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_0bhlte1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_0bhlte1_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_0bhlte1_Data",
								"schemaName": "ConfItem",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "ConfItem"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "S3BucketSize"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "ConfItemDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_0bhlte1_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "light-blue",
							"border": {
								"hidden": true
							}
						},
						"theme": "without-fill",
						"hideTitle": false
					},
					"visible": true
				},
				"parentName": "GridContainer_qya6mdu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_pjq4ra4",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_pjq4ra4_caption)#)#",
					"labelType": "headline-1-small",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_uzmi1pm",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "extra-small",
						"rowGap": "extra-small"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "extra-small",
						"right": "extra-small",
						"bottom": "extra-small",
						"left": "extra-small"
					},
					"color": "primary",
					"borderRadius": "extra-small",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_aqzmx30",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_BPMPkg_sjhq087",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "left",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_BPMPkg_sjhq087",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_uzmi1pm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_odbaftf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_odbaftf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_aqzmx30",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_nan219p",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.ConfItemDS_CIRegularUpdate_p6ujplh",
					"ariaLabel": "",
					"labelPosition": "left",
					"tooltip": "",
					"control": "$ConfItemDS_CIRegularUpdate_p6ujplh",
					"visible": true,
					"readonly": "$IsCIRegularUpdateReadOnly",
					"placeholder": ""
				},
				"parentName": "GridContainer_uzmi1pm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_6nj7g7c",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_ParentConfItem_a7wsat0",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_ParentConfItem_a7wsat0"
				},
				"parentName": "GridContainer_uzmi1pm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_0raiiua",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_0raiiua_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_6nj7g7c",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_izxs6n9",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_BpmonlineBuildDBMS_tvdnks1",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_BpmonlineBuildDBMS_tvdnks1",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"mode": "List"
				},
				"parentName": "GridContainer_uzmi1pm",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_fnrpluz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fnrpluz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_izxs6n9",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_mqv8g3b",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.ConfItemDS_HasS3_a5zn3iu",
					"ariaLabel": "",
					"labelPosition": "left",
					"tooltip": "",
					"control": "$ConfItemDS_HasS3_a5zn3iu",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_uzmi1pm",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_b5bl8mj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_UsrBackupStrategy_txrz9pl",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_UsrBackupStrategy_txrz9pl",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_uzmi1pm",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_i27rzy2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_i27rzy2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_b5bl8mj",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_njfztzv",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_uzmi1pm",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Checkbox_l3t260f",
				"values": {
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.ConfItemDS_IsWebfarm_u4bsgg5",
					"ariaLabel": "",
					"labelPosition": "left",
					"tooltip": "",
					"control": "$ConfItemDS_IsWebfarm_u4bsgg5",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "FlexContainer_njfztzv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_1spbdfj",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.ConfItemDS_UsrDBClouster_2ksfq1k",
					"ariaLabel": "",
					"labelPosition": "left",
					"tooltip": "",
					"control": "$ConfItemDS_UsrDBClouster_2ksfq1k",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_uzmi1pm",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ComboBox_o6e1s89",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_UsrWebServer_460knj4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_UsrWebServer_460knj4",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_uzmi1pm",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "addRecord_gfynk0h",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gfynk0h_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_o6e1s89",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_uwozbi6",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ConfItemDS_UsrDBServer_g9u5ckj",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ConfItemDS_UsrDBServer_g9u5ckj",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_uzmi1pm",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "addRecord_tv9mock",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tv9mock_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_uwozbi6",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_35s4ub3",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "extra-small",
						"rowGap": "extra-small"
					},
					"items": [],
					"fitContent": true,
					"visible": false,
					"color": "primary",
					"borderRadius": "extra-small",
					"padding": {
						"top": "extra-small",
						"right": "extra-small",
						"bottom": "extra-small",
						"left": "extra-small"
					},
					"alignItems": "stretch"
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_y3y0n17",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": true,
							"floatingEditPanel": true,
							"itemsCreation": true
						}
					},
					"items": "$DataGrid_y3y0n17",
					"primaryColumnName": "DataGrid_y3y0n17DS_Id",
					"columns": [
						{
							"id": "743fc67e-ea25-3e9f-36d3-a0c34409531d",
							"code": "DataGrid_y3y0n17DS_Name",
							"caption": "#ResourceString(DataGrid_y3y0n17DS_Name)#",
							"dataValueType": 28,
							"width": 359
						},
						{
							"id": "e8958b3a-89f4-01df-827e-cf47a3c4a46e",
							"code": "DataGrid_y3y0n17DS_UsrWebServerPurpose",
							"caption": "#ResourceString(DataGrid_y3y0n17DS_UsrWebServerPurpose)#",
							"dataValueType": 10,
							"width": 200
						}
					],
					"placeholder": false,
					"visible": false,
					"fitContent": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 4
					}
				},
				"parentName": "GridContainer_35s4ub3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_vygsqse",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": true,
							"floatingEditPanel": false,
							"itemsCreation": true
						}
					},
					"items": "$DataGrid_vygsqse",
					"primaryColumnName": "DataGrid_vygsqseDS_Id",
					"columns": [
						{
							"id": "55f551ca-7e00-6a97-fde0-33bc2696618e",
							"code": "DataGrid_vygsqseDS_Name",
							"caption": "#ResourceString(DataGrid_vygsqseDS_Name)#",
							"dataValueType": 28
						}
					],
					"visible": false,
					"fitContent": true,
					"placeholder": false,
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_35s4ub3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_hcn8qen",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_hcn8qen_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ll05mcw",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_hcn8qen",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_s4kraws",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ll05mcw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_pxc7cpl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_pxc7cpl_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "ConfItemUser",
							"defaultValues": [
								{
									"attributeName": "ConfItem",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_s4kraws",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ozdqfiw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ozdqfiw_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"refreshDataConfig": {
								"mode": "RefreshSpecific",
								"targetDataSourceNames": [
									"GridDetail_obdvn2yDS",
									"DataGrid_jfymv4fDS"
								]
							}
						}
					},
					"clickMode": "default",
					"visible": true
				},
				"parentName": "FlexContainer_s4kraws",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_2bqctoj",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "extra-small",
						"rowGap": "extra-small"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "#CCEDFC",
					"borderRadius": "extra-small",
					"padding": {
						"top": "extra-small",
						"right": "extra-small",
						"bottom": "extra-small",
						"left": "extra-small"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_hcn8qen",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_jfymv4f",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_jfymv4f",
					"primaryColumnName": "DataGrid_jfymv4fDS_Id",
					"columns": [
						{
							"id": "061de490-71ce-c194-1a2f-5bc2d4a9607f",
							"code": "DataGrid_jfymv4fDS_Contact",
							"caption": "#ResourceString(DataGrid_jfymv4fDS_Contact)#",
							"dataValueType": 10,
							"width": 163
						},
						{
							"id": "a8c7c74b-b2f1-c8aa-64f5-4dd6f3d12996",
							"code": "DataGrid_jfymv4fDS_ContactEmail",
							"caption": "#ResourceString(DataGrid_jfymv4fDS_ContactEmail)#",
							"dataValueType": 45,
							"width": 260
						},
						{
							"id": "6b0fd887-3b00-21cc-86b3-12d1ff4a99c3",
							"code": "DataGrid_jfymv4fDS_ContactAccount",
							"caption": "#ResourceString(DataGrid_jfymv4fDS_ContactAccount)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_2bqctoj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_obdvn2y",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_obdvn2y",
					"selectionState": "$GridDetail_obdvn2y_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_obdvn2y_SelectionState"
					},
					"primaryColumnName": "GridDetail_obdvn2yDS_Id",
					"columns": [
						{
							"id": "5f099ddf-a513-c818-a082-85b916b44f6b",
							"code": "GridDetail_obdvn2yDS_Account",
							"caption": "#ResourceString(GridDetail_obdvn2yDS_Account)#",
							"dataValueType": 10,
							"width": 231
						},
						{
							"id": "b7ca63ad-19b8-b58d-bee1-1bb3435f1007",
							"code": "GridDetail_obdvn2yDS_AccountType",
							"caption": "#ResourceString(GridDetail_obdvn2yDS_AccountType)#",
							"dataValueType": 10,
							"width": 149
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_2bqctoj",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_obdvn2y_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_obdvn2yDS",
							"filters": "$GridDetail_obdvn2y | crt.ToCollectionFilters : 'GridDetail_obdvn2y' : $GridDetail_obdvn2y_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_obdvn2y_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_obdvn2y",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_obdvn2y_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_obdvn2yDS",
							"filters": "$GridDetail_obdvn2y | crt.ToCollectionFilters : 'GridDetail_obdvn2y' : $GridDetail_obdvn2y_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_obdvn2y_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_obdvn2y_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_obdvn2y_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_jfymv4f",
							"filters": "$GridDetail_obdvn2y | crt.ToCollectionFilters : 'GridDetail_obdvn2y' : $GridDetail_obdvn2y_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_obdvn2y_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_obdvn2y",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_obdvn2y_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_obdvn2yDS",
							"selectionState": "$GridDetail_obdvn2y_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_obdvn2y",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_obdvn2y_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_obdvn2yDS",
							"filters": "$GridDetail_obdvn2y | crt.ToCollectionFilters : 'GridDetail_obdvn2y' : $GridDetail_obdvn2y_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_obdvn2y_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_obdvn2y",
				"propertyName": "bulkActions",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_lb03rx7",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_lb03rx7_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_5n82xm0",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_lb03rx7",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lj3nyte",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_5n82xm0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_jb4aof0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_jb4aof0_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "SiteTechnologicalPeriod"
						}
					}
				},
				"parentName": "FlexContainer_lj3nyte",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_03pb98k",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_03pb98k_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_mj2gcngDS"
						}
					}
				},
				"parentName": "FlexContainer_lj3nyte",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_eu2poa3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_eu2poa3_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_lj3nyte",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_76m3uqz",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_76m3uqz_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_mj2gcng"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_eu2poa3",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_hjuyswr",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_hjuyswr_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SiteTechnologicalPeriod"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_eu2poa3",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_lapyj8j",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				"parentName": "ExpansionPanel_lb03rx7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_mj2gcng",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"columns": {
							"sorting": false
						}
					},
					"items": "$GridDetail_mj2gcng",
					"primaryColumnName": "GridDetail_mj2gcngDS_Id",
					"columns": [
						{
							"id": "48a064b6-1e91-2b90-0a06-cc099dd67f90",
							"code": "GridDetail_mj2gcngDS_DayOfWeek",
							"caption": "#ResourceString(GridDetail_mj2gcngDS_DayOfWeek)#",
							"dataValueType": 10,
							"width": 188
						},
						{
							"id": "d95cabda-0eee-1fae-00d7-99a6e51488a2",
							"code": "GridDetail_mj2gcngDS_StartTime",
							"caption": "#ResourceString(GridDetail_mj2gcngDS_StartTime)#",
							"dataValueType": 9,
							"width": 199
						},
						{
							"id": "0ec0edfe-fa1f-23c5-9f97-120d4e7c4e48",
							"code": "GridDetail_mj2gcngDS_EndTime",
							"caption": "#ResourceString(GridDetail_mj2gcngDS_EndTime)#",
							"dataValueType": 9,
							"width": 190
						},
						{
							"id": "51fbcbc4-7cdc-a9cd-a110-0c2628b64eb1",
							"code": "GridDetail_mj2gcngDS_CurrentStartTime",
							"caption": "#ResourceString(GridDetail_mj2gcngDS_CurrentStartTime)#",
							"dataValueType": 9,
							"columnType": "tools",
							"width": 190
						},
						{
							"id": "11493d7e-8877-4f63-a6b7-8215e302a27c",
							"code": "GridDetail_mj2gcngDS_CurrentEndTime",
							"caption": "#ResourceString(GridDetail_mj2gcngDS_CurrentEndTime)#",
							"dataValueType": 9,
							"columnType": "tools",
							"width": 190
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_lapyj8j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_heenplx",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_heenplx_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_r4wkwdj",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_r4wkwdj_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_heenplx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_c7krvhn",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_r4wkwdj",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rd141d4",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_c7krvhn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_xwa3yig",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_xwa3yig_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "InternalRequest"
						}
					}
				},
				"parentName": "FlexContainer_rd141d4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_l3lg553",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_l3lg553_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_amvae0vDS"
						}
					}
				},
				"parentName": "FlexContainer_rd141d4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_asbjvwo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_asbjvwo_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_rd141d4",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_jmu309p",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_jmu309p_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_amvae0v"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_asbjvwo",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_6k4nmhu",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_6k4nmhu_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "InternalRequest"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_asbjvwo",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ce6bfda",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ce6bfda_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_ce6bfda_GridDetail_amvae0v",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_amvae0v"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_ce6bfda_SearchValue",
							"GridDetailSearchFilter_ce6bfda_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_rd141d4",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_6gep8te",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_r4wkwdj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_amvae0v",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"floatingEditPanel": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_amvae0v",
					"primaryColumnName": "GridDetail_amvae0vDS_Id",
					"columns": [
						{
							"id": "bac49efe-60c8-8f9b-d69d-05bd859efe97",
							"code": "GridDetail_amvae0vDS_Number",
							"caption": "#ResourceString(GridDetail_amvae0vDS_Number)#",
							"dataValueType": 1,
							"width": 141
						},
						{
							"id": "9f691070-35a4-46cf-7c5e-e1686b39345d",
							"code": "GridDetail_amvae0vDS_Requester",
							"caption": "#ResourceString(GridDetail_amvae0vDS_Requester)#",
							"dataValueType": 10,
							"width": 128
						},
						{
							"id": "cd8b318b-15e8-0a96-5f69-1d9523f5cdc3",
							"code": "GridDetail_amvae0vDS_Description",
							"caption": "#ResourceString(GridDetail_amvae0vDS_Description)#",
							"dataValueType": 29,
							"width": 361
						},
						{
							"id": "2f2c1a6c-4e5b-5370-09c9-5c4c273aa0ed",
							"code": "GridDetail_amvae0vDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_amvae0vDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "975acb4d-551d-fe87-4023-c0610b1f0aed",
							"code": "GridDetail_amvae0vDS_Status",
							"caption": "#ResourceString(GridDetail_amvae0vDS_Status)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_6gep8te",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_vf5ci33",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_vf5ci33_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_heenplx",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_qeleq9a",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_vf5ci33",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_b546eok",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_qeleq9a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_g8f1e78",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_g8f1e78_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_gvfj8xsDS"
						}
					}
				},
				"parentName": "FlexContainer_b546eok",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_5en5yte",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_5en5yte_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_b546eok",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_9fwahve",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_9fwahve_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_gvfj8xs"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_5en5yte",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_uqz9q7g",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_uqz9q7g_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "WorkTeamCityLog"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_5en5yte",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_c17ibjf",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_c17ibjf_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_c17ibjf_GridDetail_gvfj8xs",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_gvfj8xs"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_c17ibjf_SearchValue",
							"GridDetailSearchFilter_c17ibjf_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_b546eok",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_7auhlmc",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_vf5ci33",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gvfj8xs",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"floatingEditPanel": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_gvfj8xs",
					"primaryColumnName": "GridDetail_gvfj8xsDS_Id",
					"columns": [
						{
							"id": "33d08d69-fbd4-9146-973d-9279274b399a",
							"code": "GridDetail_gvfj8xsDS_StartDate",
							"caption": "#ResourceString(GridDetail_gvfj8xsDS_StartDate)#",
							"dataValueType": 7,
							"width": 164
						},
						{
							"id": "98236517-97a8-3907-3309-536812284cda",
							"code": "GridDetail_gvfj8xsDS_EndDate",
							"caption": "#ResourceString(GridDetail_gvfj8xsDS_EndDate)#",
							"dataValueType": 7,
							"width": 170
						},
						{
							"id": "d71d220f-debd-d246-8faa-3a302e4200b3",
							"code": "GridDetail_gvfj8xsDS_Status",
							"caption": "#ResourceString(GridDetail_gvfj8xsDS_Status)#",
							"dataValueType": 10,
							"width": 132
						},
						{
							"id": "40e55102-903b-93b6-6876-d58f02104309",
							"code": "GridDetail_gvfj8xsDS_Owner",
							"caption": "#ResourceString(GridDetail_gvfj8xsDS_Owner)#",
							"dataValueType": 10,
							"width": 156
						},
						{
							"id": "1d4450d1-dde1-bfbd-5c14-205c78c68c64",
							"code": "GridDetail_gvfj8xsDS_Case",
							"caption": "#ResourceString(GridDetail_gvfj8xsDS_Case)#",
							"dataValueType": 10,
							"width": 167
						},
						{
							"id": "2c04173c-dbe0-b40a-31c7-b18571c10874",
							"code": "GridDetail_gvfj8xsDS_TeamCityLink",
							"caption": "#ResourceString(GridDetail_gvfj8xsDS_TeamCityLink)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_7auhlmc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_5cobamm",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_5cobamm_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_heenplx",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_rppwdc7",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_5cobamm",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_wsg6r24",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_rppwdc7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_qnabl3b",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_qnabl3b_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_cgds785DS"
						}
					}
				},
				"parentName": "FlexContainer_wsg6r24",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_u0m8hdy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_u0m8hdy_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_wsg6r24",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_crkoh2b",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_crkoh2b_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_cgds785"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_u0m8hdy",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_1k2s2n9",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_1k2s2n9_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Case"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_u0m8hdy",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_3nkgn1d",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_3nkgn1d_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_3nkgn1d_GridDetail_cgds785",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_cgds785"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_3nkgn1d_SearchValue",
							"GridDetailSearchFilter_3nkgn1d_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_wsg6r24",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_d7ws1j3",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_5cobamm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_cgds785",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"floatingEditPanel": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_cgds785",
					"primaryColumnName": "GridDetail_cgds785DS_Id",
					"columns": [
						{
							"id": "6c80d8f1-3caf-bc28-eb82-6fc81ae9972c",
							"code": "GridDetail_cgds785DS_Number",
							"caption": "#ResourceString(GridDetail_cgds785DS_Number)#",
							"dataValueType": 27,
							"width": 141
						},
						{
							"id": "b569edc7-7b29-3709-e7a3-bf014adb0c72",
							"code": "GridDetail_cgds785DS_Status",
							"caption": "#ResourceString(GridDetail_cgds785DS_Status)#",
							"dataValueType": 10,
							"width": 125
						},
						{
							"id": "e4c4b2a4-1a14-d99f-774d-905fbaed3185",
							"code": "GridDetail_cgds785DS_SupportLevel",
							"caption": "#ResourceString(GridDetail_cgds785DS_SupportLevel)#",
							"dataValueType": 10,
							"width": 153
						},
						{
							"id": "49b9b8dd-2b90-2fb2-a9bc-1873bda67b4a",
							"code": "GridDetail_cgds785DS_Account",
							"caption": "#ResourceString(GridDetail_cgds785DS_Account)#",
							"dataValueType": 10,
							"width": 155
						},
						{
							"id": "347f5eba-7148-0ad9-1915-61d544ae42f9",
							"code": "GridDetail_cgds785DS_Subject",
							"caption": "#ResourceString(GridDetail_cgds785DS_Subject)#",
							"dataValueType": 30,
							"width": 254
						},
						{
							"id": "d00d6852-2ac8-c6cb-8528-aaf82de6e976",
							"code": "GridDetail_cgds785DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_cgds785DS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_d7ws1j3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_t9vd95e",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_t9vd95e_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_lgh20nk",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_lgh20nk_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_t9vd95e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_89sekcx",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_lgh20nk",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d5eaag2",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_89sekcx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_3d72o9l",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_3d72o9l_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_lc938nvDS"
						}
					}
				},
				"parentName": "FlexContainer_d5eaag2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_y6v77gz",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_y6v77gz_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_d5eaag2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_xmkg9js",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_xmkg9js_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_lc938nv"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_y6v77gz",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_w46pkir",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_w46pkir_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "ConfItemUpdateHistory"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_y6v77gz",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_onc5fth",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_onc5fth_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_onc5fth_GridDetail_lc938nv",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_lc938nv"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_onc5fth_SearchValue",
							"GridDetailSearchFilter_onc5fth_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_d5eaag2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_p05mozd",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_lgh20nk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_lc938nv",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"floatingEditPanel": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_lc938nv",
					"primaryColumnName": "GridDetail_lc938nvDS_Id",
					"columns": [
						{
							"id": "74f5cf9d-b001-ca6c-04a6-5f09eb8d426d",
							"code": "GridDetail_lc938nvDS_Name",
							"caption": "#ResourceString(GridDetail_lc938nvDS_Name)#",
							"dataValueType": 27
						},
						{
							"id": "566a4a33-fc40-7da3-b9a1-b1c930968ec3",
							"code": "GridDetail_lc938nvDS_Link",
							"caption": "#ResourceString(GridDetail_lc938nvDS_Link)#",
							"dataValueType": 29
						},
						{
							"id": "ffb55ea6-9368-9935-c192-dae030b473b4",
							"code": "GridDetail_lc938nvDS_DateTimeStamp",
							"caption": "#ResourceString(GridDetail_lc938nvDS_DateTimeStamp)#",
							"dataValueType": 7
						},
						{
							"id": "b7ad75e2-aa53-54ca-1f2f-b162643f696d",
							"code": "GridDetail_lc938nvDS_UpdateResult",
							"caption": "#ResourceString(GridDetail_lc938nvDS_UpdateResult)#",
							"dataValueType": 10
						},
						{
							"id": "29d299e3-e0ad-21ff-1001-fa2261771ee3",
							"code": "GridDetail_lc938nvDS_InstallPackage",
							"caption": "#ResourceString(GridDetail_lc938nvDS_InstallPackage)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_p05mozd",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"IsSitePurposeReadOnly": {},
					"IsCIRegularUpdateReadOnly": {},
					"CanTriggerTeamCityActions": {
						"modelConfig": {}
					},
					"TeamCityOperationsCollection": {},
					"IsBackupClientDatabaseMenuItemVisible": {
						"modelConfig": {}
					},
					"IsCreateDemoSiteMenuItemVisible": {
						"modelConfig": {}
					},
					"IsCreateDemoSiteCopyMenuItemVisible": {
						"modelConfig": {}
					},
					"IsCreateWebsiteCopyMenuItemVisible": {
						"modelConfig": {}
					},
					"IsDiagnosticsInformationMenuItemVisible": {
						"modelConfig": {}
					},
					"IsFlushRedisMenuItemVisible": {
						"modelConfig": {}
					},
					"IsGetDatabaseAccessMenuItemVisible": {
						"modelConfig": {}
					},
					"IsGetDumpMemoryMenuItemVisible": {
						"modelConfig": {}
					},
					"IsGetTheLogsMenuItemVisible": {
						"modelConfig": {}
					},
					"IsInstallPackagesMenuItemVisible": {
						"modelConfig": {}
					},
					"IsMoveDemoSiteMenuItemVisible": {
						"modelConfig": {}
					},
					"IsPasswordResetMenuItemVisible": {
						"modelConfig": {}
					},
					"IsRegistrationInRemoteAccessOnSiteMenuItemVisible": {
						"modelConfig": {}
					},
					"IsRestartSiteMenuItemVisible": {
						"modelConfig": {}
					},
					"IsWebsiteRelicensingMenuItemVisible": {
						"modelConfig": {}
					},
					"IsWebsiteRelicensingNoRedisFlushMenuItemVisible": {
						"modelConfig": {}
					},
					"IsWebisteVersionUpdateMenuItemVisible": {
						"modelConfig": {}
					},
					"ConfItemDS_Name_0dmvt38": {
						"modelConfig": {
							"path": "ConfItemDS.Name"
						}
					},
					"ConfItemDS_Status_rxwn5ss": {
						"modelConfig": {
							"path": "ConfItemDS.Status"
						}
					},
					"ConfItemDS_Status_rxwn5ss_List": {
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
					"ConfItemDS_SitePurpose_sgs65qv": {
						"modelConfig": {
							"path": "ConfItemDS.SitePurpose"
						}
					},
					"ConfItemDS_SitePurpose_sgs65qv_List": {
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
					"ConfItemDS_BpmonlineBuildDBMS_tvdnks1": {
						"modelConfig": {
							"path": "ConfItemDS.BpmonlineBuildDBMS"
						}
					},
					"ConfItemDS_BpmonlineBuildDBMS_tvdnks1_List": {
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
					"ConfItemDS_ParentConfItem_a7wsat0": {
						"modelConfig": {
							"path": "ConfItemDS.ParentConfItem"
						}
					},
					"ConfItemDS_ParentConfItem_a7wsat0_List": {
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
					"ConfItemDS_Account_g35ywjt": {
						"modelConfig": {
							"path": "ConfItemDS.Account"
						}
					},
					"ConfItemDS_Account_g35ywjt_List": {
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
					"ConfItemDS_Subscription_irgozji": {
						"modelConfig": {
							"path": "ConfItemDS.Subscription"
						}
					},
					"ConfItemDS_Subscription_irgozji_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Number",
										"direction": "asc"
									}
								]
							}
						}
					},
					"ConfItemDS_DueDate_v438725": {
						"modelConfig": {
							"path": "ConfItemDS.DueDate"
						}
					},
					"ConfItemDS_BpmonlineLcz_ei2cpdw": {
						"modelConfig": {
							"path": "ConfItemDS.BpmonlineLcz"
						}
					},
					"ConfItemDS_BpmonlineLcz_ei2cpdw_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Code",
										"direction": "asc"
									}
								]
							}
						}
					},
					"ConfItemDS_CIRegularUpdate_p6ujplh": {
						"modelConfig": {
							"path": "ConfItemDS.CIRegularUpdate"
						}
					},
					"ConfItemDS_HasS3_a5zn3iu": {
						"modelConfig": {
							"path": "ConfItemDS.HasS3"
						}
					},
					"ConfItemDS_BPMPkg_sjhq087": {
						"modelConfig": {
							"path": "ConfItemDS.BPMPkg"
						}
					},
					"ConfItemDS_BPMPkg_sjhq087_List": {
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
					"GridDetail_obdvn2y": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_obdvn2yDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_obdvn2y_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Account"
									}
								]
							},
							"pagingConfig": {
								"rowCount": 30,
								"rowsLimit": null
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_obdvn2yDS_Account": {
									"modelConfig": {
										"path": "GridDetail_obdvn2yDS.Account"
									}
								},
								"GridDetail_obdvn2yDS_AccountType": {
									"modelConfig": {
										"path": "GridDetail_obdvn2yDS.AccountType"
									}
								},
								"GridDetail_obdvn2yDS_Id": {
									"modelConfig": {
										"path": "GridDetail_obdvn2yDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_jfymv4f": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_jfymv4fDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_jfymv4f_PredefinedFilter"
								}
							],
							"pagingConfig": {
								"rowCount": 30,
								"rowsLimit": null
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_jfymv4fDS_Contact": {
									"modelConfig": {
										"path": "DataGrid_jfymv4fDS.Contact"
									}
								},
								"DataGrid_jfymv4fDS_ContactEmail": {
									"modelConfig": {
										"path": "DataGrid_jfymv4fDS.ContactEmail"
									}
								},
								"DataGrid_jfymv4fDS_ContactAccount": {
									"modelConfig": {
										"path": "DataGrid_jfymv4fDS.ContactAccount"
									}
								},
								"DataGrid_jfymv4fDS_Id": {
									"modelConfig": {
										"path": "DataGrid_jfymv4fDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_jfymv4f_PredefinedFilter": {
						"value": {
							"items": {
								"9e9a331d-d2c3-486d-b8b7-00161043f867": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "Type"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ServiceObjectType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Contact",
													"Id": "b2aad5df-af5c-425b-ac2c-2f13d8810a71",
													"value": "b2aad5df-af5c-425b-ac2c-2f13d8810a71",
													"displayValue": "Contact"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "ConfItemUser"
						}
					},
					"GridDetail_obdvn2y_PredefinedFilter": {
						"value": {
							"items": {
								"18a67a66-2095-4439-aa05-f28ed93e6a70": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "Type"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ServiceObjectType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Account",
													"Id": "350d6fd7-c84c-43c0-bec6-40116cbb9d2b",
													"value": "350d6fd7-c84c-43c0-bec6-40116cbb9d2b",
													"displayValue": "Account"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "ConfItemUser"
						}
					},
					"GridDetail_mj2gcng": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_mj2gcngDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_mj2gcng_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"columnName": "DayOfWeek.Number",
										"direction": "asc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_mj2gcngDS_DayOfWeek": {
									"modelConfig": {
										"path": "GridDetail_mj2gcngDS.DayOfWeek"
									}
								},
								"GridDetail_mj2gcngDS_StartTime": {
									"modelConfig": {
										"path": "GridDetail_mj2gcngDS.StartTime"
									}
								},
								"GridDetail_mj2gcngDS_EndTime": {
									"modelConfig": {
										"path": "GridDetail_mj2gcngDS.EndTime"
									}
								},
								"GridDetail_mj2gcngDS_Id": {
									"modelConfig": {
										"path": "GridDetail_mj2gcngDS.Id"
									}
								},
								"GridDetail_mj2gcngDS_CurrentStartTime": {
									"value": null,
									"modelConfig": {
										"path": ""
									}
								},
								"GridDetail_mj2gcngDS_CurrentEndTime": {
									"value": null,
									"modelConfig": {
										"path": ""
									}
								}
							}
						}
					},
					"GridDetail_mj2gcng_PredefinedFilter": {
						"value": null
					},
					"ConfItemDS_UsrDBClouster_2ksfq1k": {
						"modelConfig": {
							"path": "ConfItemDS.UsrDBClouster"
						}
					},
					"ConfItemDS_UsrBackupStrategy_txrz9pl": {
						"modelConfig": {
							"path": "ConfItemDS.UsrBackupStrategy"
						}
					},
					"ConfItemDS_UsrBackupStrategy_txrz9pl_List": {
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
					"DataGrid_y3y0n17": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_y3y0n17DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_y3y0n17_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "Name"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_y3y0n17DS_Name": {
									"modelConfig": {
										"path": "DataGrid_y3y0n17DS.UsrName"
									}
								},
								"DataGrid_y3y0n17DS_UsrWebServerPurpose": {
									"modelConfig": {
										"path": "DataGrid_y3y0n17DS.UsrWebServerPurpose"
									}
								},
								"DataGrid_y3y0n17DS_Id": {
									"modelConfig": {
										"path": "DataGrid_y3y0n17DS.Id"
									}
								}
							}
						}
					},
					"ConfItemDS_UsrWebServer_460knj4": {
						"modelConfig": {
							"path": "ConfItemDS.UsrWebServer"
						}
					},
					"ConfItemDS_UsrWebServer_460knj4_List": {
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
					"DataGrid_y3y0n17_PredefinedFilter": {
						"value": null
					},
					"ConfItemDS_UsrDBServer_g9u5ckj": {
						"modelConfig": {
							"path": "ConfItemDS.UsrDBServer"
						}
					},
					"ConfItemDS_UsrDBServer_g9u5ckj_List": {
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
					"DataGrid_vygsqse": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_vygsqseDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_vygsqse_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_vygsqseDS_Name": {
									"modelConfig": {
										"path": "DataGrid_vygsqseDS.UsrName"
									}
								},
								"DataGrid_vygsqseDS_Id": {
									"modelConfig": {
										"path": "DataGrid_vygsqseDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_vygsqse_PredefinedFilter": {
						"value": null
					},
					"GridDetail_cgds785": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_cgds785DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_3nkgn1d_GridDetail_cgds785",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_cgds785_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_cgds785DS_Number": {
									"modelConfig": {
										"path": "GridDetail_cgds785DS.Number"
									}
								},
								"GridDetail_cgds785DS_Status": {
									"modelConfig": {
										"path": "GridDetail_cgds785DS.Status"
									}
								},
								"GridDetail_cgds785DS_SupportLevel": {
									"modelConfig": {
										"path": "GridDetail_cgds785DS.SupportLevel"
									}
								},
								"GridDetail_cgds785DS_Account": {
									"modelConfig": {
										"path": "GridDetail_cgds785DS.Account"
									}
								},
								"GridDetail_cgds785DS_Subject": {
									"modelConfig": {
										"path": "GridDetail_cgds785DS.Subject"
									}
								},
								"GridDetail_cgds785DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_cgds785DS.CreatedOn"
									}
								},
								"GridDetail_cgds785DS_Id": {
									"modelConfig": {
										"path": "GridDetail_cgds785DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_cgds785_PredefinedFilter": {
						"value": null
					},
					"GridDetail_gvfj8xs": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_gvfj8xsDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_c17ibjf_GridDetail_gvfj8xs",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_gvfj8xs_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_gvfj8xsDS_StartDate": {
									"modelConfig": {
										"path": "GridDetail_gvfj8xsDS.StartDate"
									}
								},
								"GridDetail_gvfj8xsDS_EndDate": {
									"modelConfig": {
										"path": "GridDetail_gvfj8xsDS.EndDate"
									}
								},
								"GridDetail_gvfj8xsDS_Status": {
									"modelConfig": {
										"path": "GridDetail_gvfj8xsDS.Status"
									}
								},
								"GridDetail_gvfj8xsDS_Owner": {
									"modelConfig": {
										"path": "GridDetail_gvfj8xsDS.Owner"
									}
								},
								"GridDetail_gvfj8xsDS_Case": {
									"modelConfig": {
										"path": "GridDetail_gvfj8xsDS.Case"
									}
								},
								"GridDetail_gvfj8xsDS_TeamCityLink": {
									"modelConfig": {
										"path": "GridDetail_gvfj8xsDS.TeamCityLink"
									}
								},
								"GridDetail_gvfj8xsDS_Id": {
									"modelConfig": {
										"path": "GridDetail_gvfj8xsDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_gvfj8xs_PredefinedFilter": {
						"value": null
					},
					"GridDetail_amvae0v": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_amvae0vDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_ce6bfda_GridDetail_amvae0v",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_amvae0v_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_amvae0vDS_Number": {
									"modelConfig": {
										"path": "GridDetail_amvae0vDS.Number"
									}
								},
								"GridDetail_amvae0vDS_Requester": {
									"modelConfig": {
										"path": "GridDetail_amvae0vDS.Requester"
									}
								},
								"GridDetail_amvae0vDS_Description": {
									"modelConfig": {
										"path": "GridDetail_amvae0vDS.Description"
									}
								},
								"GridDetail_amvae0vDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_amvae0vDS.CreatedOn"
									}
								},
								"GridDetail_amvae0vDS_Status": {
									"modelConfig": {
										"path": "GridDetail_amvae0vDS.Status"
									}
								},
								"GridDetail_amvae0vDS_Id": {
									"modelConfig": {
										"path": "GridDetail_amvae0vDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_amvae0v_PredefinedFilter": {
						"value": null
					},
					"GridDetail_lc938nv": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_lc938nvDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_onc5fth_GridDetail_lc938nv",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_lc938nv_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_lc938nvDS_Name": {
									"modelConfig": {
										"path": "GridDetail_lc938nvDS.Name"
									}
								},
								"GridDetail_lc938nvDS_Link": {
									"modelConfig": {
										"path": "GridDetail_lc938nvDS.Link"
									}
								},
								"GridDetail_lc938nvDS_DateTimeStamp": {
									"modelConfig": {
										"path": "GridDetail_lc938nvDS.DateTimeStamp"
									}
								},
								"GridDetail_lc938nvDS_UpdateResult": {
									"modelConfig": {
										"path": "GridDetail_lc938nvDS.UpdateResult"
									}
								},
								"GridDetail_lc938nvDS_InstallPackage": {
									"modelConfig": {
										"path": "GridDetail_lc938nvDS.InstallPackage"
									}
								},
								"GridDetail_lc938nvDS_Id": {
									"modelConfig": {
										"path": "GridDetail_lc938nvDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_lc938nv_PredefinedFilter": {
						"value": null
					},
					"ConfItemDS_IsWebfarm_u4bsgg5": {
						"modelConfig": {
							"path": "ConfItemDS.IsWebfarm"
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
					"primaryDataSourceName": "ConfItemDS",
					"dependencies": {
						"DataGrid_jfymv4fDS": [
							{
								"attributePath": "ConfItem",
								"relationPath": "ConfItemDS.Id"
							}
						],
						"GridDetail_obdvn2yDS": [
							{
								"attributePath": "ConfItem",
								"relationPath": "ConfItemDS.Id"
							}
						],
						"GridDetail_mj2gcngDS": [
							{
								"attributePath": "ConfItem",
								"relationPath": "ConfItemDS.Id"
							}
						],
						"DataGrid_y3y0n17DS": [
							{
								"attributePath": "UsrConfItem",
								"relationPath": "ConfItemDS.Id"
							}
						],
						"DataGrid_vygsqseDS": [
							{
								"attributePath": "UsrConfItem",
								"relationPath": "ConfItemDS.Id"
							}
						],
						"GridDetail_cgds785DS": [
							{
								"attributePath": "ConfItem",
								"relationPath": "ConfItemDS.Id"
							}
						],
						"GridDetail_gvfj8xsDS": [
							{
								"attributePath": "ConfItem",
								"relationPath": "ConfItemDS.Id"
							}
						],
						"GridDetail_amvae0vDS": [
							{
								"attributePath": "ConfItem",
								"relationPath": "ConfItemDS.Id"
							}
						],
						"GridDetail_lc938nvDS": [
							{
								"attributePath": "ConfItem",
								"relationPath": "ConfItemDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"ConfItemDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "ConfItem",
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
					},
					"GridDetail_obdvn2yDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ConfItemUser",
							"attributes": {
								"Account": {
									"path": "Account"
								},
								"AccountType": {
									"type": "ForwardReference",
									"path": "Account.Type"
								}
							}
						}
					},
					"DataGrid_jfymv4fDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ConfItemUser",
							"attributes": {
								"Contact": {
									"path": "Contact"
								},
								"ContactEmail": {
									"type": "ForwardReference",
									"path": "Contact.Email"
								},
								"ContactAccount": {
									"type": "ForwardReference",
									"path": "Contact.Account"
								}
							}
						}
					},
					"GridDetail_mj2gcngDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SiteTechnologicalPeriod",
							"attributes": {
								"DayOfWeek": {
									"path": "DayOfWeek"
								},
								"StartTime": {
									"path": "StartTime"
								},
								"EndTime": {
									"path": "EndTime"
								}
							}
						}
					},
					"DataGrid_y3y0n17DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrWebServers",
							"attributes": {
								"Name": {
									"path": "UsrName"
								},
								"UsrWebServerPurpose": {
									"path": "UsrWebServerPurpose"
								}
							}
						}
					},
					"DataGrid_vygsqseDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrDBServers",
							"attributes": {
								"Name": {
									"path": "UsrName"
								}
							}
						}
					},
					"GridDetail_cgds785DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Case",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Status": {
									"path": "Status"
								},
								"SupportLevel": {
									"path": "SupportLevel"
								},
								"Account": {
									"path": "Account"
								},
								"Subject": {
									"path": "Subject"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					},
					"GridDetail_gvfj8xsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "WorkTeamCityLog",
							"attributes": {
								"StartDate": {
									"path": "StartDate"
								},
								"EndDate": {
									"path": "EndDate"
								},
								"Status": {
									"path": "Status"
								},
								"Owner": {
									"path": "Owner"
								},
								"Case": {
									"path": "Case"
								},
								"TeamCityLink": {
									"path": "TeamCityLink"
								}
							}
						}
					},
					"GridDetail_amvae0vDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "InternalRequest",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Requester": {
									"path": "Requester"
								},
								"Description": {
									"path": "Description"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Status": {
									"path": "Status"
								}
							}
						}
					},
					"GridDetail_lc938nvDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ConfItemUpdateHistory",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"Link": {
									"path": "Link"
								},
								"DateTimeStamp": {
									"path": "DateTimeStamp"
								},
								"UpdateResult": {
									"path": "UpdateResult"
								},
								"InstallPackage": {
									"path": "InstallPackage"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.OpenTempExternalAccessMiniPage",
				handler: async(request, next) => {
					await pageFunctions.processOpenTempExternalAccessMiniPage(request);
				}
			},
			{
				request: "crt.HandleViewModelInitRequest",
				handler: async (request, next) => {
					await pageFunctions.initSysOperations(request);
					return await next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if (request.attributeName == "Id" && request.value) {
						await pageFunctions.initTeamCityOperations(request);
					} else if (request.attributeName == "TeamCityOperationsCollection" && request.value) {
						await pageFunctions.mapTeamCityActionsVisibility(request);
					} else if (request.attributeName == "GridDetail_mj2gcng") {
						await pageFunctions.fillInCurrentStartTimeColumn(request);
						await pageFunctions.fillInCurrentEndTimeColumn(request);
					}
					return await next?.handle(request);
				}
			},
			{
				request: "usr.OpenTeamCityActionsPolicy",
				handler: async(request, next) => {
					await pageFunctions.openTeamCityActionsPolicy();
				}
			},
			{
				request: "usr.RunTeamCityAction",
				handler: async(request, next) => {
					await pageFunctions.prepareRunTeamCityAction(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
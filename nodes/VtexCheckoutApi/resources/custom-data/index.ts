import type { INodeProperties } from 'n8n-workflow';

export const customDataDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					]
				}
			},
			"options": [
				{
					"name": "Set Multiple Custom Field Values",
					"value": "Set Multiple Custom Field Values",
					"action": "Set multiple custom field values",
					"description": "Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) request. The values of these custom fields can then be updated by this request.\n\r\n\rTo do that, you need to inform the ID of the app you created with the configuration API (`appId`).\n\r\n\rIn the body of the request, for each field created in this app (`appFieldName`) you will inform a value (`appFieldValue`).\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/customData/{{$parameter[\"appId\"]}}"
						}
					}
				},
				{
					"name": "Removesinglecustomfieldvalue",
					"value": "Removesinglecustomfieldvalue",
					"action": "Remove single custom field value",
					"description": "Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can be removed by this request.\n\r\n\rTo do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).\n\r\n\rYou also need to iform the specific field created in this app (identified by the `appFieldName` parameter, also passed through the URL) whose value you want to remove.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/customData/{{$parameter[\"appId\"]}}/{{$parameter[\"appFieldName\"]}}"
						}
					}
				},
				{
					"name": "Set Single Custom Field Value",
					"value": "Set Single Custom Field Value",
					"action": "Set single custom field value",
					"description": "Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can then be updated by this request.\n\r\n\rTo do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).\n\r\n\rIn the body of the request, you will inform the new value (`appFieldValue`, passed through the body) of the specific field created in this app (identified by the `appFieldName` parameter, passed through the URL).\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/customData/{{$parameter[\"appId\"]}}/{{$parameter[\"appFieldName\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /api/checkout/pub/orderForm/{orderFormId}/customData/{appId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Multiple Custom Field Values"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm that will receive the new custom field values.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Multiple Custom Field Values"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Multiple Custom Field Values"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Multiple Custom Field Values"
					]
				}
			}
		},
		{
			"displayName": "App Id",
			"name": "appId",
			"required": true,
			"description": "ID of the app created with the configuration API.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Multiple Custom Field Values"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/checkout/pub/orderForm/{orderFormId}/customData/{appId}/{appFieldName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Removesinglecustomfieldvalue"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Removesinglecustomfieldvalue"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Removesinglecustomfieldvalue"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "The ID of the orderForm from which you want to remove the custom field value.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Removesinglecustomfieldvalue"
					]
				}
			}
		},
		{
			"displayName": "App Id",
			"name": "appId",
			"required": true,
			"description": "ID of the app created through the Update orderForm Configuration endpoint.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Removesinglecustomfieldvalue"
					]
				}
			}
		},
		{
			"displayName": "App Field Name",
			"name": "appFieldName",
			"required": true,
			"description": "Name of the app's field created through the Update orderForm Configuration endpoint and which will be deleted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Removesinglecustomfieldvalue"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/checkout/pub/orderForm/{orderFormId}/customData/{appId}/{appFieldName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Single Custom Field Value"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "The ID of the orderForm whose custom field's value you want to change.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Single Custom Field Value"
					]
				}
			}
		},
		{
			"displayName": "App Id",
			"name": "appId",
			"required": true,
			"description": "ID of the app created through the Update orderForm Configuration endpoint.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Single Custom Field Value"
					]
				}
			}
		},
		{
			"displayName": "App Field Name",
			"name": "appFieldName",
			"required": true,
			"description": "Name of the app's field created through the Update orderForm Configuration endpoint.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Single Custom Field Value"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Single Custom Field Value"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Single Custom Field Value"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "",
			"description": "The value you want to set to the specified field.",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Data"
					],
					"operation": [
						"Set Single Custom Field Value"
					]
				}
			}
		},
];

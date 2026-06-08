import type { INodeProperties } from 'n8n-workflow';

export const configurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Clearorder Form Messages",
					"value": "Clearorder Form Messages",
					"action": "Clear orderForm messages",
					"description": "This request removes all messages from the `messages` field of the orderForm , leaving it empty.\r\n\r\nYou must send an empty JSON in the body of the request.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\r\n\r\n**Important**: **Request Body** must always be sent with empty value \"{ }\" in this endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/messages/clear"
						}
					}
				},
				{
					"name": "Getorder Formconfiguration",
					"value": "Getorder Formconfiguration",
					"action": "Get orderForm configuration",
					"description": "Retrieves the settings that are currently applied to every orderForm in the account.\n\r\n\rThese settings are defined by the request [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).\n\r\n\rAlways use this request to retrieve the current configuration before performing an update. By doing so you ensure that you are modifying only the properties you want.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/checkout/pvt/configuration/orderForm"
						}
					}
				},
				{
					"name": "Updateorder Formconfiguration",
					"value": "Updateorder Formconfiguration",
					"action": "Update orderForm configuration",
					"description": "Determines settings that will apply to every orderForm in the account.\n\r\n\rFor example, if you create an app using this request, every orderForm of this account will have the custom fields created though it.\n\r\n\r**Important**: always retrieve the current configuration before performing an update to ensure that you are modifying only the properties you want. Otherwise, old values can be overwritten. To retrieve the current configuration, use the request [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pvt/configuration/orderForm"
						}
					}
				},
				{
					"name": "Get Window To Change Seller",
					"value": "Get Window To Change Seller",
					"action": "Get window to change seller",
					"description": "Retrieves a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.\n\r\n\rThe default period for this window is of 2 days, but it can be configured by the request Update window to change seller.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/checkout/pvt/configuration/window-to-change-seller"
						}
					}
				},
				{
					"name": "Update Window To Change Seller",
					"value": "Update Window To Change Seller",
					"action": "Update window to change seller",
					"description": "Updates a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.\n\r\n\rIt is possible to check the current window using the request Get window to change seller.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pvt/configuration/window-to-change-seller"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/messages/clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Clearorder Form Messages"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm corresponding to the cart whose messages you want to remove.",
			"default": "ede846222cd44046ba6c638442c3505a",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Clearorder Form Messages"
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
						"Configuration"
					],
					"operation": [
						"Clearorder Form Messages"
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
						"Configuration"
					],
					"operation": [
						"Clearorder Form Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /api/checkout/pvt/configuration/orderForm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Getorder Formconfiguration"
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
						"Configuration"
					],
					"operation": [
						"Getorder Formconfiguration"
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
						"Configuration"
					],
					"operation": [
						"Getorder Formconfiguration"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Getorder Formconfiguration"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Getorder Formconfiguration"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pvt/configuration/orderForm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
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
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
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
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Allow Manual Price",
			"name": "allowManualPrice",
			"type": "boolean",
			"default": true,
			"description": "Allows the editing of SKU prices right in the cart.",
			"routing": {
				"send": {
					"property": "allowManualPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Allow Multiple Deliveries",
			"name": "allowMultipleDeliveries",
			"type": "boolean",
			"default": true,
			"description": "On the same purchase, allows the selection of items from multiple delivery channels.",
			"routing": {
				"send": {
					"property": "allowMultipleDeliveries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Apps",
			"name": "apps",
			"type": "json",
			"default": "[\n  {\n    \"fields\": [\n      \"birthdayField\"\n    ],\n    \"id\": \"birthdayApp\",\n    \"major\": 1\n  }\n]",
			"description": "Array of objects containing Apps configuration information.",
			"routing": {
				"send": {
					"property": "apps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Decimal Digits Precision",
			"name": "decimalDigitsPrecision",
			"type": "number",
			"default": 0,
			"description": "Number of price digits.",
			"routing": {
				"send": {
					"property": "decimalDigitsPrecision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"displayName": "Mask First Purchase Data",
			"name": "maskFirstPurchaseData",
			"type": "boolean",
			"default": true,
			"description": "Allows, on a first purchase, masking client's data. It could be useful when a shared cart is used and the client doesn't want to share its data.",
			"routing": {
				"send": {
					"property": "maskFirstPurchaseData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"displayName": "Max Number Of White Label Sellers",
			"name": "maxNumberOfWhiteLabelSellers",
			"type": "number",
			"default": 0,
			"description": "Allows the input of a limit of white label sellers involved on the cart.",
			"routing": {
				"send": {
					"property": "maxNumberOfWhiteLabelSellers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Minimum Quantity Accumulated For Items",
			"name": "minimumQuantityAccumulatedForItems",
			"type": "number",
			"default": 0,
			"description": "Minimum SKU quantity by cart.",
			"routing": {
				"send": {
					"property": "minimumQuantityAccumulatedForItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Minimum Value Accumulated",
			"name": "minimumValueAccumulated",
			"type": "number",
			"default": 0,
			"description": "Minimum cart value.",
			"routing": {
				"send": {
					"property": "minimumValueAccumulated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payment Configuration",
			"name": "paymentConfiguration",
			"type": "json",
			"default": "{\n  \"allowInstallmentsMerge\": false,\n  \"requiresAuthenticationForPreAuthorizedPaymentOption\": false\n}",
			"description": "Payment Configuration object",
			"routing": {
				"send": {
					"property": "paymentConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"displayName": "Payment System To Check First Installment",
			"name": "paymentSystemToCheckFirstInstallment",
			"type": "string",
			"default": "6",
			"description": "If you want to apply a first installment discount to a particular payment system, set this field to that payment system's ID. Learn more: [Configuring a discount for orders prepaid in full](https://help.vtex.com/en/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt).",
			"routing": {
				"send": {
					"property": "paymentSystemToCheckFirstInstallment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"displayName": "Recaptcha Validation",
			"name": "recaptchaValidation",
			"type": "string",
			"default": "vtexCriteria",
			"description": "Configures reCAPTCHA validation for the account, defining in which situations the shopper will be prompted to validate a purchase with reCAPTCHA. Learn more about [reCAPTCHA validation for VTEX stores](https://help.vtex.com/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP)\n\r\n\rPossible values are:\n\r- `\"never\"`: no purchases are validated with reCAPTCHA.\n\r- `\"always\"`: every purchase is validated with reCAPTCHA.\n\r- `\"vtexCriteria\"`: only some purchases are validated with reCAPTCHA in order to minimize friction and improve shopping experience. VTEX’s algorithm determines which sessions are trustworthy and which should be validated with reCAPTCHA. This is the recommended option.",
			"routing": {
				"send": {
					"property": "recaptchaValidation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tax Configuration",
			"name": "taxConfiguration",
			"type": "json",
			"default": "{}",
			"description": "External tax service configuration.",
			"routing": {
				"send": {
					"property": "taxConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Updateorder Formconfiguration"
					]
				}
			}
		},
		{
			"displayName": "GET /api/checkout/pvt/configuration/window-to-change-seller",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Get Window To Change Seller"
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
						"Configuration"
					],
					"operation": [
						"Get Window To Change Seller"
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
						"Configuration"
					],
					"operation": [
						"Get Window To Change Seller"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Get Window To Change Seller"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Get Window To Change Seller"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pvt/configuration/window-to-change-seller",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Update Window To Change Seller"
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
						"Configuration"
					],
					"operation": [
						"Update Window To Change Seller"
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
						"Configuration"
					],
					"operation": [
						"Update Window To Change Seller"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Waiting Time",
			"name": "waitingTime",
			"type": "number",
			"default": 0,
			"description": "Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order.",
			"routing": {
				"send": {
					"property": "waitingTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Update Window To Change Seller"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Update Window To Change Seller"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"Update Window To Change Seller"
					]
				}
			}
		},
];

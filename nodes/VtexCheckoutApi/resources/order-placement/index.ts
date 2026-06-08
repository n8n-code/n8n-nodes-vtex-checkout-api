import type { INodeProperties } from 'n8n-workflow';

export const orderPlacementDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					]
				}
			},
			"options": [
				{
					"name": "Process Order",
					"value": "Process Order",
					"action": "Process order",
					"description": "Order processing callback request, which is made after an order's payment is approved.\n\r\n\r> This request has to be made until five minutes after the [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders) or [Place order from existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction) request has been made, or else, the order will not be processed.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/gatewayCallback/{{$parameter[\"orderGroup\"]}}"
						}
					}
				},
				{
					"name": "Place Order From Existing Order Form",
					"value": "Place Order From Existing Order Form",
					"action": "Place order from an existing cart",
					"description": "This endpoint places an order from an existing `orderForm` object, meaning an existing cart.\n\r\n\rAfter the creation of an order with this request, you have five minutes to send payment information and then request payment processing.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/transaction"
						}
					}
				},
				{
					"name": "Place Order",
					"value": "Place Order",
					"action": "Place order",
					"description": "Places order without having any prior cart information. This means all information on items, client, payment and shipping must be sent in the body.\r\n\r\n>⚠️ The authentication of this endpoint is required if you are creating an order with an item that has an attachment that creates a Subscription. For more information, access [Subscriptions API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/checkout/pub/orders"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/checkout/pub/gatewayCallback/{orderGroup}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Process Order"
					]
				}
			}
		},
		{
			"displayName": "Order Group",
			"name": "orderGroup",
			"required": true,
			"description": "Order group. It is the part of the `orderId` that comes before the `-`. For example, the `orderGroup` of the order `123456789-01` is `123456789`.",
			"default": "123456789",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Process Order"
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
						"Order Placement"
					],
					"operation": [
						"Process Order"
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
						"Order Placement"
					],
					"operation": [
						"Process Order"
					]
				}
			}
		},
		{
			"displayName": "Cookie",
			"name": "Cookie",
			"required": true,
			"description": "VTEX Chekout cookie associated with a specific order. Use the `Vtex_CHKO_Auth` and the `CheckoutDataAccess` cookies returned by the [Place order](https://developers.vtex.com/vtex-rest-api/reference/order-placement-1#placeorder) or [Place order from existing cart](https://developers.vtex.com/vtex-rest-api/reference/order-placement-1#placeorderfromexistingorderform) API requests, like a browser would.",
			"default": "Vtex_CHKO_Auth=0e/RpYIEZu19BuwXB4tZ7eIGu9HT8vdUAHWQDHDpxMc=; CheckoutDataAccess=0e/PoiTEZu19BuwXB4tZ7eIGu9HT8vdUAHWQDHDpxMc=",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Process Order"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/transaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order From Existing Order Form"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the `orderForm` corresponding to the cart from which to place the order.",
			"default": "ede846222cd44046ba6c638442c3505a",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order From Existing Order Form"
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
						"Order Placement"
					],
					"operation": [
						"Place Order From Existing Order Form"
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
						"Order Placement"
					],
					"operation": [
						"Place Order From Existing Order Form"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interest Value",
			"name": "interestValue",
			"type": "number",
			"default": 0,
			"description": "Interest rate to be used in case it applies.",
			"routing": {
				"send": {
					"property": "interestValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order From Existing Order Form"
					]
				}
			}
		},
		{
			"displayName": "Optin News Letter",
			"name": "optinNewsLetter",
			"type": "boolean",
			"default": false,
			"description": "True if the shopper opted to receive the newsletter.",
			"routing": {
				"send": {
					"property": "optinNewsLetter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order From Existing Order Form"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reference Id",
			"name": "referenceId",
			"type": "string",
			"default": "41a22925298a4ddca95318131a25b000",
			"description": "ID of the `orderForm` corresponding to the cart from which to place the order. This is the same as the `orderFormId` parameter.",
			"routing": {
				"send": {
					"property": "referenceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order From Existing Order Form"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reference Value",
			"name": "referenceValue",
			"type": "number",
			"default": 6800,
			"description": "Reference value of the order for calculating interest if that is the case. Can be equal to the total value and does not separate cents. For example, $24.99 is represented `2499`.",
			"routing": {
				"send": {
					"property": "referenceValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order From Existing Order Form"
					]
				}
			}
		},
		{
			"displayName": "Save Personal Data",
			"name": "savePersonalData",
			"type": "boolean",
			"default": false,
			"description": "`true` if the shopper's data provided during checkout should be saved for future reference.",
			"routing": {
				"send": {
					"property": "savePersonalData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order From Existing Order Form"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 6800,
			"description": "Total value of the order without separating cents. For example, $24.99 is represented `2499`.",
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
						"Order Placement"
					],
					"operation": [
						"Place Order From Existing Order Form"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/checkout/pub/orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order"
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
						"Order Placement"
					],
					"operation": [
						"Place Order"
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
						"Order Placement"
					],
					"operation": [
						"Place Order"
					]
				}
			}
		},
		{
			"displayName": "Sc",
			"name": "sc",
			"description": "Trade Policy (Sales Channel) identification. This query can be used to create an order for a specific sales channel.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "sc",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Profile Data",
			"name": "clientProfileData",
			"type": "json",
			"default": "{\n  \"corporateDocument\": \"12345678000100\",\n  \"corporateName\": \"company-name\",\n  \"corporatePhone\": \"+551100988887777\",\n  \"document\": \"123456789\",\n  \"documentType\": \"cpf\",\n  \"email\": \"customer@examplemail.com\",\n  \"firstName\": \"first-name\",\n  \"isCorporate\": false,\n  \"lastName\": \"last-name\",\n  \"phone\": \"+55110988887777\",\n  \"stateInscription\": \"12345678\",\n  \"tradeName\": \"trade-name\"\n}",
			"description": "Customer's profile information. The `email` functions as a customer's ID.\n\r\n\rFor customers already in your database, sending only the email address is enough to register the order to the shopper’s existing account.\n\r\n\r> If the shopper exists in you database but is not logged in, sending other profile information along with the email will cause the platform to fail placing the order. This happens because this action is interpreted as an attempt to edit profile data, which is not possible unless the customer is logged in to the store.",
			"routing": {
				"send": {
					"property": "clientProfileData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Items",
			"name": "items",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"123456789\",\n    \"quantity\": 1,\n    \"seller\": \"1\"\n  }\n]",
			"description": "Array of objects containing information on each of the order's items.",
			"routing": {
				"send": {
					"property": "items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order"
					]
				}
			}
		},
		{
			"displayName": "Marketing Data",
			"name": "marketingData",
			"type": "json",
			"default": "{\n  \"coupon\": \"free-shipping\",\n  \"utmCampaign\": \"Black friday\",\n  \"utmMedium\": \"CPC\",\n  \"utmSource\": \"Facebook\",\n  \"utmiCampaign\": \"utmi_campaign-exmaple\",\n  \"utmiPage\": \"utmi_page-example\",\n  \"utmiPart\": \"utmi_part-exmaple\"\n}",
			"routing": {
				"send": {
					"property": "marketingData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order"
					]
				}
			}
		},
		{
			"displayName": "Open Text Field",
			"name": "openTextField",
			"type": "string",
			"default": "open-text-example",
			"description": "Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)",
			"routing": {
				"send": {
					"property": "openTextField",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payment Data",
			"name": "paymentData",
			"type": "json",
			"default": "{\n  \"giftCardMessages\": [\n    \"message-example\"\n  ],\n  \"giftCards\": [\n    {\n      \"balance\": 500,\n      \"id\": \"1390324156495k195pmab4rall3di\",\n      \"inUse\": true,\n      \"isSpecialCard\": false,\n      \"name\": \"name-example\",\n      \"redemptionCode\": \"HYUO-TEZZ-QFFT-HTFR\",\n      \"value\": 500\n    }\n  ],\n  \"paymentSystems\": [\n    {\n      \"description\": \"description-example\",\n      \"groupName\": \"creditCardPaymentGroup\",\n      \"id\": 2,\n      \"isCustom\": false,\n      \"name\": \"Visa\",\n      \"requiresDocument\": false,\n      \"selected\": false,\n      \"stringId\": \"12345abc\",\n      \"template\": \"creditCardPaymentGroup-template\",\n      \"validator\": {\n        \"cardCodeMask\": \"999\",\n        \"cardCodeRegex\": \"[^0-9]\",\n        \"mask\": \"9999 9999 9999 9999\",\n        \"regex\": \"^4\",\n        \"weights\": [\n          2,\n          1,\n          2,\n          1,\n          2,\n          1,\n          2,\n          1,\n          2,\n          1,\n          2,\n          1,\n          2,\n          1,\n          2,\n          1,\n          2,\n          1,\n          2\n        ]\n      }\n    }\n  ],\n  \"payments\": [\n    {\n      \"accountId\": \"accountID-example\",\n      \"bin\": \"2\",\n      \"installments\": 2,\n      \"paymentSystem\": \"12\",\n      \"referenceValue\": 16175,\n      \"value\": 16175\n    }\n  ],\n  \"updateStatus\": \"updated\"\n}",
			"description": "Payment infomation.",
			"routing": {
				"send": {
					"property": "paymentData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order"
					]
				}
			}
		},
		{
			"displayName": "Sales Associate Data",
			"name": "salesAssociateData",
			"type": "json",
			"default": "{\n  \"salesAssociateId\": \"seller123\"\n}",
			"description": "Sales Associate information.",
			"routing": {
				"send": {
					"property": "salesAssociateData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shipping Data",
			"name": "shippingData",
			"type": "json",
			"default": "{\n  \"address\": {\n    \"addressId\": \"Home\",\n    \"addressType\": \"residential\",\n    \"city\": \"Rio de Janeiro\",\n    \"complement\": \"3rd floor\",\n    \"country\": \"BRA\",\n    \"geoCoordinates\": [\n      -47.924747467041016,\n      -15.832582473754883\n    ],\n    \"neighborhood\": \"Botafogo\",\n    \"number\": \"300\",\n    \"postalCode\": \"12345-000\",\n    \"receiverName\": \"receiver-name\",\n    \"reference\": \"Grey building\",\n    \"state\": \"Rio de Janeiro\",\n    \"street\": \"Praia de Botafogo\"\n  },\n  \"logisticsInfo\": [\n    {\n      \"deliveryWindow\": {\n        \"endDateUtc\": \"2021-07-13T23:59:59+00:00\",\n        \"lisPrice\": 0,\n        \"price\": 0,\n        \"startDateUtc\": \"2021-07-13T00:00:00+00:00\",\n        \"tax\": 0\n      },\n      \"itemIndex\": 0,\n      \"lockTTL\": \"8d\",\n      \"price\": 1099,\n      \"selectedSla\": \"Express\",\n      \"shippingEstimate\": \"7d\"\n    }\n  ],\n  \"updateStatus\": \"updated\"\n}",
			"description": "Shipping information.",
			"routing": {
				"send": {
					"property": "shippingData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Placement"
					],
					"operation": [
						"Place Order"
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
						"Order Placement"
					],
					"operation": [
						"Place Order"
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
						"Order Placement"
					],
					"operation": [
						"Place Order"
					]
				}
			}
		},
];

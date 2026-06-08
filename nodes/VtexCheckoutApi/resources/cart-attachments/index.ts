import type { INodeProperties } from 'n8n-workflow';

export const cartAttachmentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					]
				}
			},
			"options": [
				{
					"name": "Add Client Preferences",
					"value": "Add Client Preferences",
					"action": "Add client preferences",
					"description": "Use this request to include client preferences information to a given shopping cart.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/attachments/clientPreferencesData"
						}
					}
				},
				{
					"name": "Add Client Profile",
					"value": "Add Client Profile",
					"action": "Add client profile",
					"description": "Use this request to include client profile information to a given shopping cart.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.\r\n\r\n>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/attachments/clientProfileData"
						}
					}
				},
				{
					"name": "Add Marketing Data",
					"value": "Add Marketing Data",
					"action": "Add marketing data",
					"description": "Use this request to include marketing information to a given shopping cart.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/attachments/marketingData"
						}
					}
				},
				{
					"name": "Add Merchant Context Data",
					"value": "Add Merchant Context Data",
					"action": "Add merchant context data",
					"description": "This endpoint is used for the merchant to add to the cart any relevant information that is related to the context of a specific order.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/attachments/merchantContextData"
						}
					}
				},
				{
					"name": "Add Payment Data",
					"value": "Add Payment Data",
					"action": "Add payment data",
					"description": "Use this request to include payment information to a given shopping cart. The payment information attachment in the shopping cart does not determine the final order payment method in itself. However, it allows tha platform to update any relevant information that may be impacted by the payment method.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/attachments/paymentData"
						}
					}
				},
				{
					"name": "Add Shipping Address",
					"value": "Add Shipping Address",
					"action": "Add shipping address and select delivery option",
					"description": "Use this request to include shipping information and/or selected delivery option to a given shopping cart.\r\n\r\nTo add shipping addresses send the `selectedAddresses` array. For delivery option use the `logisticsInfo` array.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 12 seconds.\r\n\r\n>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/attachments/shippingData"
						}
					}
				},
				{
					"name": "Get Client Profile By Email",
					"value": "Get Client Profile By Email",
					"action": "Get client profile by email",
					"description": "Retrieve a client's profile information by providing an email address.\n\r\n\rIf the response body fields are empty, the following situations may have occurred:\n\r\n\r1. There is no client registered with the email address provided in your store, or;\n\r2. Client profile is invalid or incomplete. For more information, see [SmartCheckout - Customer information automatic fill-in](https://help.vtex.com/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan).\r\n\r\n>⚠️ The authentication of this endpoint can change depending on the customer context. If you are consulting information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/checkout/pub/profiles"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/attachments/clientPreferencesData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Preferences"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Client Preferences"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Client Preferences"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm that will receive client profile information.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Preferences"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"type": "string",
			"default": "EN",
			"description": "Locale chosen by the shopper. Determines website language.",
			"routing": {
				"send": {
					"property": "locale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Preferences"
					]
				}
			}
		},
		{
			"displayName": "Optin News Letter",
			"name": "optinNewsLetter",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the shopper opted in to receive the store's news letter.",
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
						"Cart Attachments"
					],
					"operation": [
						"Add Client Preferences"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/attachments/clientProfileData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm that will receive client profile information.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"displayName": "Corporate Document",
			"name": "corporateDocument",
			"type": "string",
			"default": "12345678000100",
			"description": "Corporate document, if the customer is a legal entity.",
			"routing": {
				"send": {
					"property": "corporateDocument",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"displayName": "Corporate Name",
			"name": "corporateName",
			"type": "string",
			"default": "company-name",
			"description": "Company name, if the customer is a legal entity.",
			"routing": {
				"send": {
					"property": "corporateName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"displayName": "Corporate Phone",
			"name": "corporatePhone",
			"type": "string",
			"default": "+551100988887777",
			"description": "Corporate phone number, if the customer is a legal entity.",
			"routing": {
				"send": {
					"property": "corporatePhone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "123456789",
			"description": "Document number informed by the customer.",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Document Type",
			"name": "documentType",
			"type": "string",
			"default": "cpf",
			"description": "Type of the document informed by the customer.",
			"routing": {
				"send": {
					"property": "documentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "customer@examplemail.com",
			"description": "Customer's email address.",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "first-name",
			"description": "Customer's first name.",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"displayName": "Is Corporate",
			"name": "isCorporate",
			"type": "boolean",
			"default": false,
			"description": "`true` if the customer is a legal entity.",
			"routing": {
				"send": {
					"property": "isCorporate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "last-name",
			"description": "Customer's last name.",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "+55110988887777",
			"description": "Customer's phone number.",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"displayName": "State Inscription",
			"name": "stateInscription",
			"type": "string",
			"default": "12345678",
			"description": "State inscription, if the customer is a legal entity.",
			"routing": {
				"send": {
					"property": "stateInscription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"displayName": "Trade Name",
			"name": "tradeName",
			"type": "string",
			"default": "trade-name",
			"description": "Trade name, if the customer is a legal entity.",
			"routing": {
				"send": {
					"property": "tradeName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Client Profile"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/attachments/marketingData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm that will receive client profile information.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
					]
				}
			}
		},
		{
			"displayName": "Coupon",
			"name": "coupon",
			"type": "string",
			"default": "free-shipping",
			"description": "Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.",
			"routing": {
				"send": {
					"property": "coupon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
					]
				}
			}
		},
		{
			"displayName": "Marketing Tags",
			"name": "marketingTags",
			"type": "json",
			"default": "[\n  \"tag1\",\n  \"tag2\"\n]",
			"description": "Marketing tags.",
			"routing": {
				"send": {
					"property": "marketingTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
					]
				}
			}
		},
		{
			"displayName": "Utm Campaign",
			"name": "utmCampaign",
			"type": "string",
			"default": "Black friday",
			"description": "UTM campaign",
			"routing": {
				"send": {
					"property": "utmCampaign",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
					]
				}
			}
		},
		{
			"displayName": "Utm Medium",
			"name": "utmMedium",
			"type": "string",
			"default": "CPC",
			"description": "UTM medium.",
			"routing": {
				"send": {
					"property": "utmMedium",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
					]
				}
			}
		},
		{
			"displayName": "Utm Source",
			"name": "utmSource",
			"type": "string",
			"default": "Facebook",
			"description": "UTM source.",
			"routing": {
				"send": {
					"property": "utmSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
					]
				}
			}
		},
		{
			"displayName": "Utmi Campaign",
			"name": "utmiCampaign",
			"type": "string",
			"default": "utmi_campaign-exmaple",
			"description": "utmi_campaign (internal utm)",
			"routing": {
				"send": {
					"property": "utmiCampaign",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
					]
				}
			}
		},
		{
			"displayName": "Utmi Page",
			"name": "utmiPage",
			"type": "string",
			"default": "utmi_page-example",
			"description": "utmi_page (internal utm)",
			"routing": {
				"send": {
					"property": "utmiPage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
					]
				}
			}
		},
		{
			"displayName": "Utmi Part",
			"name": "utmiPart",
			"type": "string",
			"default": "utmi_part-exmaple",
			"description": "utmi_part (internal utm)",
			"routing": {
				"send": {
					"property": "utmiPart",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Marketing Data"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/attachments/merchantContextData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Merchant Context Data"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Merchant Context Data"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Merchant Context Data"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm that will receive the relevant information added by the merchant.",
			"default": "29154e27383145cc8ce1f7a1df0d99c4",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Merchant Context Data"
					]
				}
			}
		},
		{
			"required": true,
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
						"Cart Attachments"
					],
					"operation": [
						"Add Merchant Context Data"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/attachments/paymentData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Payment Data"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Payment Data"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Payment Data"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm that will receive client profile information.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Payment Data"
					]
				}
			}
		},
		{
			"displayName": "Payments",
			"name": "payments",
			"type": "json",
			"default": "[\n  {\n    \"group\": \"bankInvoicePaymentGroup\",\n    \"hasDefaultBillingAddress\": false,\n    \"installments\": 1,\n    \"installmentsInterestRate\": 0,\n    \"installmentsValue\": 1,\n    \"paymentSystem\": 1,\n    \"paymentSystemName\": \"Boleto Bancário\",\n    \"referenceValue\": 100,\n    \"value\": 100\n  }\n]",
			"description": "Array with information on each payment chosen by the shopper.",
			"routing": {
				"send": {
					"property": "payments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Payment Data"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/attachments/shippingData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Shipping Address"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Shipping Address"
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
						"Cart Attachments"
					],
					"operation": [
						"Add Shipping Address"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm that will receive client profile information.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Shipping Address"
					]
				}
			}
		},
		{
			"displayName": "Clear Address If Postal Code Not Found",
			"name": "clearAddressIfPostalCodeNotFound",
			"type": "boolean",
			"default": false,
			"description": "This field should be sent as `false` to prevent the address information from being filled in automatically based on the `postalCode` information.",
			"routing": {
				"send": {
					"property": "clearAddressIfPostalCodeNotFound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Shipping Address"
					]
				}
			}
		},
		{
			"displayName": "Logistics Info",
			"name": "logisticsInfo",
			"type": "json",
			"default": "[\n  {\n    \"itemIndex\": 0,\n    \"selectedDeliveryChannel\": \"delivery\",\n    \"selectedSla\": \"normal\"\n  }\n]",
			"description": "Array with logistics information on each item of the `items` array in the `orderForm`.",
			"routing": {
				"send": {
					"property": "logisticsInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Shipping Address"
					]
				}
			}
		},
		{
			"displayName": "Selected Addresses",
			"name": "selectedAddresses",
			"type": "json",
			"default": "[\n  {\n    \"addressType\": \"residential\",\n    \"city\": \"Rio de Janeiro\",\n    \"complement\": \"3rd floor\",\n    \"country\": \"BRA\",\n    \"geoCoordinates\": [\n      -47.924747467041016,\n      -15.832582473754883\n    ],\n    \"neighborhood\": \"Botafogo\",\n    \"number\": \"300\",\n    \"postalCode\": \"12345-000\",\n    \"receiverName\": \"receiver-name\",\n    \"reference\": \"Grey building\",\n    \"state\": \"RJ\",\n    \"street\": \"Praia de Botafogo\"\n  }\n]",
			"description": "List of objects with addresses information.",
			"routing": {
				"send": {
					"property": "selectedAddresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Add Shipping Address"
					]
				}
			}
		},
		{
			"displayName": "GET /api/checkout/pub/profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Get Client Profile By Email"
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
						"Cart Attachments"
					],
					"operation": [
						"Get Client Profile By Email"
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
						"Cart Attachments"
					],
					"operation": [
						"Get Client Profile By Email"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Client's email address to be searched.",
			"default": "clark.kent@examplemail.com",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cart Attachments"
					],
					"operation": [
						"Get Client Profile By Email"
					]
				}
			}
		},
];

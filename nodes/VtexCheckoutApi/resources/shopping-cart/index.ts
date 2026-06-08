import type { INodeProperties } from 'n8n-workflow';

export const shoppingCartDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					]
				}
			},
			"options": [
				{
					"name": "Create A New Cart",
					"value": "Create A New Cart",
					"action": "Get current or create a new cart",
					"description": "You can use this request to get your current shopping cart information (`orderFormId`) or to create a new cart.\r\n\r\n**Important**: To create a new empty shopping cart you need to send this request with the query param `forceNewCart=true`.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` obtained in response is the identification code of the newly created cart.\n\r\n\r> This request has a time out of 45 seconds.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/checkout/pub/orderForm"
						}
					}
				},
				{
					"name": "Get Cart Information By Id",
					"value": "Get Cart Information By Id",
					"action": "Get cart information by ID",
					"description": "Use this request to get all information associated to a given shopping  cart.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 45 seconds.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}"
						}
					}
				},
				{
					"name": "Add Coupons",
					"value": "Add Coupons",
					"action": "Add coupons to the cart",
					"description": "Use this request to add coupons to a given shopping cart.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/coupons"
						}
					}
				},
				{
					"name": "Get Cart Installments",
					"value": "Get Cart Installments",
					"action": "Cart installments",
					"description": "Retrieves possible amount of installments and respective values for a given cart with a given payment method.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\rThis endpoint can be used to get the installment options for only one payment method at a time.\n\r\n\rThis endpoint should be called only after the selected `orderForm` already has a `paymentData`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/installments"
						}
					}
				},
				{
					"name": "Items",
					"value": "Items",
					"action": "Add cart items",
					"description": "Use this request to add a new item to the shopping cart.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 45 seconds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/items"
						}
					}
				},
				{
					"name": "Remove All Items",
					"value": "Remove All Items",
					"action": "Remove all items",
					"description": "This request removes all items from a given cart, leaving it empty.\r\n\r\nYou must send an empty JSON in the body of the request.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\r\n\r\n**Important**: **Request Body** must always be sent with empty value \"{ }\" in this endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/items/removeAll"
						}
					}
				},
				{
					"name": "Items Update",
					"value": "Items Update",
					"action": "Update cart items",
					"description": "You can use this request to:\n\r\n\r1. Change the quantity of one or more items in a specific cart.\n\r2. Remove an item from the cart (by sending the `quantity` value = `0` in the request body).\r\n\r\n**Important**: To remove all items from the cart at the same time, use the [Remove all items](https://developers.vtex.com/vtex-rest-api/reference/removeallitems) endpoint.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\r> This request has a time out of 45 seconds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/items/update"
						}
					}
				},
				{
					"name": "Price Change",
					"value": "Price Change",
					"action": "Change price",
					"description": "This request changes the price of an SKU in a cart. You can also perform type of bulk price change with the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#itemsupdate)\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\n\r\n\rYou need to inform which cart you are referring to, by sending its `orderFormId`; and what is the item whose price you want to change, by sending its `itemIndex`.\n\r\n\rYou also need to pass the new price value in the body.\n\r\n\rRemember that, to use this endpoint, the feature of *manual price* must be active. To check if it's active, use the [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration) endpoint. To make it active, use the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) endpoint, making the `allowManualPrice` field `true`.\n\r\n\r> Whenever you use this request to change the price of an item, all items in that cart with the same SKU are affected by this change. This applies even to items that share the SKU but have been separated into different objects in the `items` array due to customizations or attachments, for example.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/items/{{$parameter[\"itemIndex\"]}}/price"
						}
					}
				},
				{
					"name": "Ignore Profile Data",
					"value": "Ignore Profile Data",
					"action": "Ignore profile data",
					"description": "When a shopper provides an email address at Checkout, the platform tries to retrieve existing profile information for that email and add it to the shopping cart information. Use this request if you want to change this behavior for a given cart, meaning profile information will not be included in the order automattically.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.\r\n\r\nNote that this request will only work if you have not sent the `clientProfileData` to the cart yet. Sending it to a cart that already has a `clientProfileData` should return a status `403 Forbidden` error, with an `Access denied` message.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/checkout/pub/orderForm/{{$parameter[\"orderFormId\"]}}/profile"
						}
					}
				},
				{
					"name": "Cart Simulation",
					"value": "Cart Simulation",
					"action": "Cart simulation",
					"description": "This endpoint is used to simulate a cart in VTEX Checkout.\r\n\r\nIt receives an **SKU ID**, the **quantity** of items in the cart and the ID of the **Seller**.\r\n\r\nIt sends back all information about the cart, such as the selling price of each item, rates and benefits data, payment and logistics info.\r\n\r\nThis is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.\r\n\r\n**Important**: The fields (`sku id`, `quantity`, `seller`, `country`, `postalCode` and `geoCoordinates`) are just examples of content that you can simulate in your cart. You can add more fields to the request as per your need. Access the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) guide to check the available fields.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/checkout/pub/orderForms/simulation"
						}
					}
				},
				{
					"name": "Removeallpersonaldata",
					"value": "Removeallpersonaldata",
					"action": "Remove all personal data",
					"description": "This call removes all user information, making a cart anonymous while leaving the items.\r\n\r\nThe [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information about it. Hence, the `orderFormId` is the identification code of a given cart.\r\n\r\nThis call works by creating a new orderForm, setting a new cookie, and returning a redirect 302 to the cart URL (`/checkout/#/orderform`).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/checkout/changeToAnonymousUser/{{$parameter[\"orderFormId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/checkout/pub/orderForm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Create A New Cart"
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
						"Shopping Cart"
					],
					"operation": [
						"Create A New Cart"
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
						"Shopping Cart"
					],
					"operation": [
						"Create A New Cart"
					]
				}
			}
		},
		{
			"displayName": "Force New Cart",
			"name": "forceNewCart",
			"description": "Use this query parameter to create a new empty shopping cart.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "forceNewCart",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Create A New Cart"
					]
				}
			}
		},
		{
			"displayName": "GET /api/checkout/pub/orderForm/{orderFormId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Get Cart Information By Id"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm corresponding to the cart whose information you want to retrieve.",
			"default": "ede846222cd44046ba6c638442c3505a",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Get Cart Information By Id"
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
						"Shopping Cart"
					],
					"operation": [
						"Get Cart Information By Id"
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
						"Shopping Cart"
					],
					"operation": [
						"Get Cart Information By Id"
					]
				}
			}
		},
		{
			"displayName": "Refresh Outdated Data",
			"name": "refreshOutdatedData",
			"description": "It is possible to use the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/cart-update#itemsupdate) so as to allow outdated information in the `orderForm`, which may improve performance in some cases. To guarantee that all cart information is updated, send this request with this parameter as `true`. We recommend doing this in the final stages of the shopping experience, starting from the checkout page.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "refreshOutdatedData",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Get Cart Information By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/coupons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Add Coupons"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm that will receive coupon information.",
			"default": "ede846222cd44046ba6c638442c3505a",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Add Coupons"
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
						"Shopping Cart"
					],
					"operation": [
						"Add Coupons"
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
						"Shopping Cart"
					],
					"operation": [
						"Add Coupons"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "freeshipping",
			"description": "Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Add Coupons"
					]
				}
			}
		},
		{
			"displayName": "GET /api/checkout/pub/orderForm/{orderFormId}/installments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Get Cart Installments"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the `orderForm` to be consulted for installments.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Get Cart Installments"
					]
				}
			}
		},
		{
			"displayName": "Payment System",
			"name": "paymentSystem",
			"required": true,
			"description": "ID of the payment method to be consulted for installments.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "paymentSystem",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Get Cart Installments"
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
						"Shopping Cart"
					],
					"operation": [
						"Get Cart Installments"
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
						"Shopping Cart"
					],
					"operation": [
						"Get Cart Installments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Items"
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
						"Shopping Cart"
					],
					"operation": [
						"Items"
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
						"Shopping Cart"
					],
					"operation": [
						"Items"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm corresponding to the cart in which the new item will be added.",
			"default": "ede846222cd44046ba6c638442c3505a",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Items"
					]
				}
			}
		},
		{
			"displayName": "Allowed Outdated Data",
			"name": "allowedOutdatedData",
			"description": "In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance.\n\r\n\rThis array accepts strings and currently the only possible value is `”paymentData”`.",
			"default": "[\n  \"paymentData\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowedOutdatedData",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Items"
					]
				}
			}
		},
		{
			"displayName": "Order Items",
			"name": "orderItems",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"2005\",\n    \"index\": 0,\n    \"price\": 1099,\n    \"quantity\": 3,\n    \"seller\": \"1\"\n  }\n]",
			"description": "Array containing the cart items. Each object inside this array corresponds to a different item.",
			"routing": {
				"send": {
					"property": "orderItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Items"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/items/removeAll",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Remove All Items"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm corresponding to the cart whose items you want to remove.",
			"default": "ede846222cd44046ba6c638442c3505a",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Remove All Items"
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
						"Shopping Cart"
					],
					"operation": [
						"Remove All Items"
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
						"Shopping Cart"
					],
					"operation": [
						"Remove All Items"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForm/{orderFormId}/items/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Items Update"
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
						"Shopping Cart"
					],
					"operation": [
						"Items Update"
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
						"Shopping Cart"
					],
					"operation": [
						"Items Update"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the `orderForm` corresponding to the cart whose items you want to update.",
			"default": "ede846222cd44046ba6c638442c3505a",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Items Update"
					]
				}
			}
		},
		{
			"displayName": "Allowed Outdated Data",
			"name": "allowedOutdatedData",
			"description": "In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance.\n\r\n\rThis array accepts strings and currently the only possible value is `”paymentData”`.",
			"default": "[\n  \"paymentData\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowedOutdatedData",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Items Update"
					]
				}
			}
		},
		{
			"displayName": "Order Items",
			"name": "orderItems",
			"type": "json",
			"default": "[\n  {\n    \"index\": 0,\n    \"quantity\": 3\n  }\n]",
			"description": "Array containing the cart items. Each object inside this array corresponds to a different item.",
			"routing": {
				"send": {
					"property": "orderItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Items Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/checkout/pub/orderForm/{orderFormId}/items/{itemIndex}/price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Price Change"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm corresponding to the cart whose items will have the price changed.",
			"default": "ede846222cd44046ba6c638442c3505a",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Price Change"
					]
				}
			}
		},
		{
			"displayName": "Item Index",
			"name": "itemIndex",
			"required": true,
			"description": "The index of the item in the cart. Each cart item is identified by an index, starting in 0.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Price Change"
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
						"Shopping Cart"
					],
					"operation": [
						"Price Change"
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
						"Shopping Cart"
					],
					"operation": [
						"Price Change"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Price",
			"name": "price",
			"type": "number",
			"default": 0,
			"description": "The new price of the item.",
			"routing": {
				"send": {
					"property": "price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Price Change"
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
						"Shopping Cart"
					],
					"operation": [
						"Price Change"
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
						"Shopping Cart"
					],
					"operation": [
						"Price Change"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/checkout/pub/orderForm/{orderFormId}/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Ignore Profile Data"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm corresponding to the cart whose items will have the price changed.",
			"default": "ede846222cd44046ba6c638442c3505a",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Ignore Profile Data"
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
						"Shopping Cart"
					],
					"operation": [
						"Ignore Profile Data"
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
						"Shopping Cart"
					],
					"operation": [
						"Ignore Profile Data"
					]
				}
			}
		},
		{
			"displayName": "Ignore Profile Data",
			"name": "ignoreProfileData",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether profile data should be ignored.",
			"routing": {
				"send": {
					"property": "ignoreProfileData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Ignore Profile Data"
					]
				}
			}
		},
		{
			"displayName": "POST /api/checkout/pub/orderForms/simulation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Cart Simulation"
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
						"Shopping Cart"
					],
					"operation": [
						"Cart Simulation"
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
						"Shopping Cart"
					],
					"operation": [
						"Cart Simulation"
					]
				}
			}
		},
		{
			"displayName": "Rnb Behavior",
			"name": "RnbBehavior",
			"description": "This parameter defines which promotions apply to the simulation. Use `0` for simulations at cart stage, which means all promotions apply. In case of window simulation use `1`, which indicates promotions that apply nominal discounts over the total purchase value shouldn't be considered on the simulation.\n\r\n\rNote that if this not sent, the parameter is `1`.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "RnbBehavior",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Cart Simulation"
					]
				}
			}
		},
		{
			"displayName": "Sc",
			"name": "sc",
			"description": "Trade Policy (Sales Channel) identification.",
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
						"Shopping Cart"
					],
					"operation": [
						"Cart Simulation"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "BRA",
			"description": "Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values.",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Cart Simulation"
					]
				}
			}
		},
		{
			"displayName": "Geo Coordinates",
			"name": "geoCoordinates",
			"type": "json",
			"default": "[\n  -47.924747467041016,\n  -15.832582473754883\n]",
			"description": "Array containing two floats with geocoordinates, first longitude, then latitude.",
			"routing": {
				"send": {
					"property": "geoCoordinates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Cart Simulation"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "items",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"1\",\n    \"quantity\": 1,\n    \"seller\": \"1\"\n  }\n]",
			"description": "Array containing information about the SKUs inside the cart to be simulated.",
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
						"Shopping Cart"
					],
					"operation": [
						"Cart Simulation"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postalCode",
			"type": "string",
			"default": "12345-000",
			"description": "Postal code.",
			"routing": {
				"send": {
					"property": "postalCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Cart Simulation"
					]
				}
			}
		},
		{
			"displayName": "GET /checkout/changeToAnonymousUser/{orderFormId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Removeallpersonaldata"
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
						"Shopping Cart"
					],
					"operation": [
						"Removeallpersonaldata"
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
						"Shopping Cart"
					],
					"operation": [
						"Removeallpersonaldata"
					]
				}
			}
		},
		{
			"displayName": "Order Form Id",
			"name": "orderFormId",
			"required": true,
			"description": "ID of the orderForm corresponding to the cart whose user's personal data you want to remove.",
			"default": "ede846222cd44046ba6c638442c3505a",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shopping Cart"
					],
					"operation": [
						"Removeallpersonaldata"
					]
				}
			}
		},
];

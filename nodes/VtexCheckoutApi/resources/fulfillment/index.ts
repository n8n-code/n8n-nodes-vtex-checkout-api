import type { INodeProperties } from 'n8n-workflow';

export const fulfillmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Fulfillment"
					]
				}
			},
			"options": [
				{
					"name": "List Pickup Ppoints By Location",
					"value": "List Pickup Ppoints By Location",
					"action": "List pickup points by location",
					"description": "Retrieves information on pickup points close to a given location determined by geocoordinates or postal code.\n\r\n\rThe pickup points returned are not necessarily all active ones. Make sure to validate the information consumed by integrations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/checkout/pub/pickup-points"
						}
					}
				},
				{
					"name": "Get Address By Postal Code",
					"value": "Get Address By Postal Code",
					"action": "Get address by postal code",
					"description": "Retrieves address information for a given postal code and country.\r\n\r\nThis request can be used to implement auto complete functionality when a customer needs to fill in an address.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/checkout/pub/postal-code/{{$parameter[\"countryCode\"]}}/{{$parameter[\"postalCode\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/checkout/pub/pickup-points",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fulfillment"
					],
					"operation": [
						"List Pickup Ppoints By Location"
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
						"Fulfillment"
					],
					"operation": [
						"List Pickup Ppoints By Location"
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
						"Fulfillment"
					],
					"operation": [
						"List Pickup Ppoints By Location"
					]
				}
			}
		},
		{
			"displayName": "Geo Coordinates",
			"name": "geoCoordinates",
			"description": "Geocoordinates (first longitude, then latitude) around which to search for pickup points. If you use this type of search, do not pass postal and country codes.",
			"default": "[\n  -47.924747467041016,\n  -15.832582473754883\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "geoCoordinates",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fulfillment"
					],
					"operation": [
						"List Pickup Ppoints By Location"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postalCode",
			"description": "Postal code around which to search for pickup points. If you use this type of search, make sure to pass a `countryCode` and do not pass `geoCoordinates`.",
			"default": "1234000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "postalCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fulfillment"
					],
					"operation": [
						"List Pickup Ppoints By Location"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "countryCode",
			"description": "Three letter country code refering to the `postalCode` field. Pass the country code only if you are searching pickup points by postal code.",
			"default": "BRA",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "countryCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fulfillment"
					],
					"operation": [
						"List Pickup Ppoints By Location"
					]
				}
			}
		},
		{
			"displayName": "GET /api/checkout/pub/postal-code/{countryCode}/{postalCode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fulfillment"
					],
					"operation": [
						"Get Address By Postal Code"
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
						"Fulfillment"
					],
					"operation": [
						"Get Address By Postal Code"
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
						"Fulfillment"
					],
					"operation": [
						"Get Address By Postal Code"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "countryCode",
			"required": true,
			"description": "Three letter country code refering to the `postalCode` field.",
			"default": "BRA",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Fulfillment"
					],
					"operation": [
						"Get Address By Postal Code"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postalCode",
			"required": true,
			"description": "Postal code.",
			"default": "1234000",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Fulfillment"
					],
					"operation": [
						"Get Address By Postal Code"
					]
				}
			}
		},
];

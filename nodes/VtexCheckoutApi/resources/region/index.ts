import type { INodeProperties } from 'n8n-workflow';

export const regionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					]
				}
			},
			"options": [
				{
					"name": "Get Sellers By Region",
					"value": "Get Sellers By Region",
					"action": "Get sellers by region or address",
					"description": "Retrieve a list of sellers that cater to a specific region or address, according to your set up of our [regionalization feature](https://help.vtex.com/en/tutorial/setting-up-price-and-availability-of-skus-by-region--12ne58BmvYsYuGsimmugoc#). Learn more about [Region v2](https://developers.vtex.com/vtex-developer-docs/changelog/region-v2).\n\r\n\rTo access the list of sellers, you must choose one of the following methods:\n\r\n\r1. Send the identification of the list of sellers (`regionId`) as a path parameter through the URL. Or;\n\r2. Send the `country` (3-digit ISO code) and at least one of the two values (`postal Code` or `geo Coordinates`) as query parameters through the URL. For this method, it is also allowed to send both values (`postalCode` or `geoCoordinates`) in the same request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/checkout/pub/regions/{{$parameter[\"regionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/checkout/pub/regions/{regionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					],
					"operation": [
						"Get Sellers By Region"
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
						"Region"
					],
					"operation": [
						"Get Sellers By Region"
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
						"Region"
					],
					"operation": [
						"Get Sellers By Region"
					]
				}
			}
		},
		{
			"displayName": "Region Id",
			"name": "regionId",
			"required": true,
			"description": "ID of the region corresponding to the shopper's location.",
			"default": "v2.1BB18CE648B5111D0933734ED83EC783",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					],
					"operation": [
						"Get Sellers By Region"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"required": true,
			"description": "Three letter country code refering to the `postalCode` field.",
			"default": "BRA",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Region"
					],
					"operation": [
						"Get Sellers By Region"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postalCode",
			"description": "Postal code corresponding to the shopper's location.",
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
						"Region"
					],
					"operation": [
						"Get Sellers By Region"
					]
				}
			}
		},
		{
			"displayName": "Geo Coordinates",
			"name": "geoCoordinates",
			"description": "Geocoordinates (first longitude, semicolon, then latitude) corresponding to the shopper's location.",
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
						"Region"
					],
					"operation": [
						"Get Sellers By Region"
					]
				}
			}
		},
];

import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { shoppingCartDescription } from './resources/shopping-cart';
import { cartAttachmentsDescription } from './resources/cart-attachments';
import { customDataDescription } from './resources/custom-data';
import { configurationDescription } from './resources/configuration';
import { fulfillmentDescription } from './resources/fulfillment';
import { orderPlacementDescription } from './resources/order-placement';
import { regionDescription } from './resources/region';

export class VtexCheckoutApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vtex-checkout-api',
		name: 'N8nDevVtexCheckoutApi',
		icon: { light: 'file:./vtex-checkout-api.svg', dark: 'file:./vtex-checkout-api.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: '>ℹ️ Check the new Checkout onboarding guide. We created this guide to improve the onboarding experience for developers at VTEX. I..',
		defaults: { name: 'vtex-checkout-api' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVtexCheckoutApiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Shopping Cart",
					"value": "Shopping Cart",
					"description": ""
				},
				{
					"name": "Cart Attachments",
					"value": "Cart Attachments",
					"description": ""
				},
				{
					"name": "Custom Data",
					"value": "Custom Data",
					"description": ""
				},
				{
					"name": "Configuration",
					"value": "Configuration",
					"description": ""
				},
				{
					"name": "Fulfillment",
					"value": "Fulfillment",
					"description": ""
				},
				{
					"name": "Order Placement",
					"value": "Order Placement",
					"description": ""
				},
				{
					"name": "Region",
					"value": "Region",
					"description": ""
				}
			],
			"default": ""
		},
		...shoppingCartDescription,
		...cartAttachmentsDescription,
		...customDataDescription,
		...configurationDescription,
		...fulfillmentDescription,
		...orderPlacementDescription,
		...regionDescription
		],
	};
}

# Lab - Product FAQ Project Setup

**Prerequisites**

For this setup lab, you will need the following.

* A Catalyst storefront
* A [Postman](https://www.postman.com/) account

**In this lab, you will:**

* Set up the prerequisite metafield data required by the Product FAQs feature


## The Project - Product Frequently Asked Questions

In these exercises, you'll be progressively building a Frequently Asked Questions (FAQ). Such a feature would provide a systematic way to present customers with the answers to frequently asked questions on a product-by-product basis - functionality that's particularly useful for highly custom or highly technical products.

Using **metafields**, you'll attach FAQ records to a product, then utilize custom GraphQL and built-in components to present them on the product detail page in an unobtrusive way.

![Product FAQs in action](https://storage.googleapis.com/bigcommerce-production-dev-center/learning-edu/catalyst-core/product-faqs.png)

## Step 1: Set Up Environment

[Metafields](https://developer.bigcommerce.com/docs/rest-catalog/products/metafields) are custom key/value pairs that can be assigned to various entities in BigCommerce, including products, allowing you a free-form method to express any arbitrary data that doesn't fit into the schema of BigCommerce's native fields. You'll be inserting metafields to represent "frequently asked question" (FAQ) records on a product.

Adding or updating metafields requires the use of the BigCommerce REST Management API, so you'll be utilizing Postman in this section to build the appropriate requests. In a real-world scenario in which non-technical users need the ability to edit these FAQs, you would likely develop a small companion app to manage them, or else install an app from the BigCommerce marketplace to enable a UI interface for metafields in general.

Each metafield has an assigned **namespace**, and when querying such fields using the GraphQL Storefront API, a namespace argument must be specified. You'll create separate metafields for each FAQ, but all with a common namespace for a given locale (for example, "FAQ|en"). The string value of each metafield will be a JSON representation of a question and its answer.

For this section of the project setup, you'll be using **Postman**.

1. In your BigCommerce store control panel, **create** a new &quot;V3/V3 API token&quot; account in Settings > &quot;Store-level API accounts&quot; with the following scopes.

| Scope | Permission |
| --- | --- |
| Products | modify |

2. Securely **store** the access token for your API account.
3. **Create** a new Postman environment with the following variables.

| Variable Name | Value |
| --- | --- |
| `v3_token` | The access token of your store-level V2/V3 API account |
| `store_hash` | Your store hash |

4. **Create** a Postman collection and give it an appropriate name, such as "Catalyst Product FAQs".

## Step 2: Import Collection

Import the [Catalyst Core Labs collection](../Catalyst%20Core%20Labs.postman_collection.json)

## Step 3: Create Metafield Requests

1. **Choose** a product that is available on your Catalyst storefront and **record** its numerical ID. This can be found in the URL of your control panel when editing the product, where the URL path is in the pattern `/products/edit/{id}`.
2. **Enter** the product ID for the `:product_id` path variable of the "Create EN Metafield 1" request.
3. **Run** "Create EN Metafield 1" and verify that all tests pass.
4. **Repeat** steps 2-3 with the remaining "Create Metafield" requests to create three metafields each for two separate locales.

Feel free to change the details of the FAQs or locales in the request bodies.

## Step 4: Get FAQ Metafields

Run the "Get FAQ Metafields" request after entering the `:product_id` path variable to verify your metafield data.

Try filtering with the `namespace` query param to view the metafields for a particular locale.

import importAsString from "@reactioncommerce/api-utils/importAsString.js";

const schema = importAsString('./schema.graphql');
const updateShop = importAsString("./updateShop.graphql");

export default [schema, updateShop]; 
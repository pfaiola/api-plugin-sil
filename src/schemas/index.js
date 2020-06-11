import importAsString from "@reactioncommerce/api-utils/importAsString.js";

const schema = importAsString('./schema.graphql');
const updateStorefront = importAsString("./updateStorefront.graphql");

export default [schema, updateStorefront]; 
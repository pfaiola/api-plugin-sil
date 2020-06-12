import { decodeMediaRecordOpaqueId, decodeShopOpaqueId } from "../../xforms/id.js";

/**
 * @name Mutation/updateShop
 * @method
 * @memberof Shop/GraphQL
 * @summary resolver for the updateShop GraphQL mutation
 * @param {Object} _ - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {String} input.description - The shop's description
 * @param {Array} input.addressBook - The shop's physical address
 * @param {Boolean} input.allowGuestCheckout - Allow user to checkout without creating an account
 * @param {String} input.brandAssets - A media record id to use as the shop's brand asset
 * @param {Array} input.emails - The shop's primary email address
 * @param {String} input.keywords - The shop's keywords
 * @param {Object} arts.input.name - The shop's name
 * @param {Object} arts.input.shopLogoUrls - An object containing the shop logo urls to update
 * @param {String} input.slug - The shop's slug
 * @param {Object} args.input.storefrontUrls - An object containing storefront url locations
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object>} UpdateShopPayload
 */
export default async function updateStorefront(_, { input }, context) {
  const {
    clientMutationId = null,
    shopId: opaqueShopId,
    ...passThroughInput
  } = input;
  const shopId = decodeShopOpaqueId(opaqueShopId);

  // Decode brand asset media record id
  if (passThroughInput.brandAssets) {
    passThroughInput.brandAssets = decodeMediaRecordOpaqueId(passThroughInput.brandAssets);
  }

  const updateStorefont = await context.mutations.updateStorefront(context, {
    ...passThroughInput,
    shopId
  });

  return {
    shop: updateStorefont,
    clientMutationId
  };
}

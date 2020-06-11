import pkg from "../package.json";
import schemas from './schemas/index.js';
import mutations from './mutations/index.js';
import { ShopHours } from './simpleSchemas.js';

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Sell it Live",
    name: "sil",
    version: pkg.version,
    graphQL: {
      schemas
    }, 
    mutations,
    shop: {
      shopNo: "shopNo",
      shopHours: ["shopHours"]
    },
    simpleSchemas: {
      ShopHours
    }
  });
}

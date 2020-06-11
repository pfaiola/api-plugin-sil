import SimpleSchema from "simpl-schema";
/**
 * @name ShopHours
 * @memberof Schemas
 * @type {SimpleSchema}
 * @property {String} day required
 * @property {String} start required
 * @property {String} end required
 */
export const ShopHours = new SimpleSchema({
    day: {
      type: String
    },
    start: {
      type: String
    }, 
    end: {
      type: String
    }
  });

  
const schemaExtension = {
    "shopNo": {
        type: String,
        optional: true
    },
    "shopHours": {
        type: Array,
        optional: true
    },
    "shopHours.$": {
        type: ShopHours
    }
}

'use strict';
const axios = require('axios');
const neighborhood = require('../controllers/neighborhood');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    create: async(data, route)=>{
        return await strapi.query(route).create(data);
    }
};
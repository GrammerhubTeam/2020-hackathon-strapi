'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    populate: async (ctx)=>{
        const defaultHood = {
            "Name": "Suspicious Of Strangers",
            "City": "Boca Raton",
            "State": "FL",
            "OrgName": "NeighborhoodWatch",
            "houses": ["1432 W. Elm St.", "1325 W. Elm St.", "1200 E. Elm St.", "304 Briar Ave."]
        }
        const defaultStory = {
            "photoLink": "https://storage.cloud.google.com/goats-hackathon-2020/IMG_20200317_121038108_HDR.jpg?authuser=1",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        }
        const hood = await strapi.services.neighborhood.create(defaultHood, 'neighborhood')
        const story = await strapi.services.neighborhood.create(defaultStory, 'stories')
        return {hood, story}
    }
};

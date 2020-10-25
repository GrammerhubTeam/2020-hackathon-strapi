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
        const defaultStory1 = {
            "photoLink": "https://storage.cloud.google.com/goats-hackathon-2020/pumps.jpeg?authuser=0",
            "text": "Orange carved faces light up the night. Their eerie faces shrine bright. Somewhere near is a curved utensil used to scoop our their inners. And there is your next clue. ",
            "name": "Orange Pumpkin",
        }

        const defaultStory2 = {
            "photoLink": "https://storage.cloud.google.com/goats-hackathon-2020/bats.jpeg?authuser=0",
            "text": "They say that bats come out at night but don't become overcome with fright! A bat hangs somewhere and  your next clue is there",
            "name": "Bats",
        }

        const defaultStory3 = {
            "photoLink": "https://storage.cloud.google.com/goats-hackathon-2020/brew.jpg?authuser=0",
            "text": "Out of the dark and under a tree, look for the witch's stew. And don't be afraid of guts and goo. For in that stew is your next clue.",
            "name": "Witchs' Brew",
        }
        const hood = await strapi.services.neighborhood.create(defaultHood, 'neighborhood')
        const story1 = await strapi.services.neighborhood.create(defaultStory1, 'stories')
        const story2 = await strapi.services.neighborhood.create(defaultStory2, 'stories')
        const story3 = await strapi.services.neighborhood.create(defaultStory3, 'stories')
        return {hood, story1, story2, story3}
    }
};

'use strict';

const fixturesDatastore = require('../datastore/fixtures-datastore')
class FixturesService {

    async listAllFixtures(prevId, callback){
        await fixturesDatastore.listAllFixtures(prevId, (error, data)=>{
            if(error) return callback(error)
            return callback(null,data)
        });
    };
}
module.exports = new FixturesService();
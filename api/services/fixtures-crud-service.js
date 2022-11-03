'use strict';
const fixturesCrudDatastore = require('../datastore/fixtures-crud-datastore');
const errorMessages = require('../errors/error-messages');
const errorCodes = require('../errors/error-codes');
const utils = require('../utils/utils');

class FixturesCrudService{

    async createNewFixture(args, callback){
        await fixturesCrudDatastore.createNewFixture(args, (error, data)=>{
            if(error) return callback(error)
            return callback(null,data)
        });
    };

    async deleteExistingFixture(args,callback) {
        await fixturesCrudDatastore.deleteExistingFixture(args, (error, data)=>{
            if(error) return callback(error)
            return callback(null,data)
        });
    };

    async updateExistingFixture(args,callback) {
        await fixturesCrudDatastore.updateExistingFixture(args, (error, data)=>{
            if(error) return callback(error)
            return callback(null,data)
        });
    };
}
module.exports = new FixturesCrudService();
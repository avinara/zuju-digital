'use strict'

const errorCodes = require('../errors/error-codes');
const errorMessages = require('../errors/error-messages');
const utils = require('../utils/utils')
const constants = require('../constants/constants')

class FixturesDatastore {

    async listAllFixtures(prevId,callback) {
        let query = `SELECT id, team_1, team_2, home_team, fixture_time, status, result FROM fixtures ORDER BY id LIMIT ${config.MAX_FIXTURE_LIMIT} OFFSET ${prevId};`;
        dbConn.query(query,(error, result) => {
            if (error) {
                let errorObj = utils.createNewError(errorCodes.FailedToFetchDataFromDatabaseCode,
                    errorMessages.FailedToFetchDataFromDatabaseMessage);
                return callback(errorObj)
            }
            return callback(null, result);
        }) ;
    }
}   
module.exports = new FixturesDatastore()
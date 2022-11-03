'use strict'

const errorCodes = require('../errors/error-codes');
const errorMessages = require('../errors/error-messages');
const utils = require('../utils/utils')


class FixturesCalendarDatastore {

    async listAllMatchDays(callback) {
        let query = `SELECT distinct fixture_time FROM fixtures ORDER BY fixture_time ASC`;
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
module.exports = new FixturesCalendarDatastore()
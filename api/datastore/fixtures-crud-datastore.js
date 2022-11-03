'use strict'

const errorCodes = require('../errors/error-codes');
const errorMessages = require('../errors/error-messages');
const utils = require('../utils/utils')
const constants = require('../constants/constants')


class FixturesCrudDatastore {

    async createNewFixture(args,callback) {
        let query = 'insert into fixtures (tournament_id,team_1, team_2, home_team,fixture_time) values (?,?,?,?,?) ;';
        let sqlParams = [args.tournament_id,args.team_1,args.team_2,args.home_team,args.fixture_time];
        dbConn.query(query,sqlParams, (error, result) => {
            if (error) {
                let errorObj = utils.createNewError(errorCodes.FailedToInsertIntoDatabaseCode,errorMessages.FailedToInsertIntoDatabaseMessage)
                return callback(errorObj)
            }
            return callback(null, "Successfully inserted the fixture into the DB");
        }) ;
    }

    async updateExistingFixture(args,callback) {
        let setQuery = [];
        if (args.fixture_time) {
            setQuery.push(`fixture_time = '${args.fixture_time}'`)
        } 
        if (args.team_1) {
            setQuery.push(`team_1 = '${args.team_1}'`)
        } 
        if (args.team_2) {
            setQuery.push(`team_2 = '${args.team_2}'`)
        } 
        if (args.home_team) {
            setQuery.push(`home_team = '${args.home_team}'`)
        } 
        if (args.team_1_score) {
            setQuery.push(`team_1_score = ${args.team_1_score}`)
        } 
        if (args.team_2_score) {
            setQuery.push(`team_2_score = ${args.team_2_score}`)
        } 
        if (args.result) {
            setQuery.push(`result = '${args.result}'`)
        } 
        if (args.status) {
            setQuery.push(`status = '${args.status}'`)
        } 
        let setQueryString = setQuery.join(",")
        let query = `UPDATE fixtures SET ${setQueryString} WHERE id = ? AND tournament_id = ?;`;
        console.log(query);
        let sqlParams = [args.id,args.tournament_id];
        dbConn.query(query,sqlParams, (error, result) => {
            if (error) {
                let errorObj = utils.createNewError(errorCodes.FailedToUpdateTheEntryInDatabaseCode,errorMessages.FailedToUpdateTheEntryInDatabaseMessage, error)
                return callback(errorObj)
            }
            return callback(null, "Successfully updated the fixture into the DB");
        }) ;
    }

    async deleteExistingFixture(args,callback) {
        let query = `UPDATE fixtures SET status = '${constants.REMOVED}' WHERE id = ? AND tournament_id = ?;`;
        let sqlParams = [args.id,args.tournament_id];
        dbConn.query(query,sqlParams, (error, result) => {
            if (error) {
                let errorObj = utils.createNewError(errorCodes.FailedToUpdateTheEntryInDatabaseCode,errorMessages.FailedToUpdateTheEntryInDatabaseMessage,error)
                return callback(errorObj)
            }
            return callback(null, "Successfully removed the fixture");
        }) ;
    }
}   
module.exports = new FixturesCrudDatastore()
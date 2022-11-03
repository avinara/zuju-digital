'use strict';
const fixturesCrudService = require('../services/fixtures-crud-service')
const utils = require('../utils/utils')

class FixturesCrudController {

    /*
    Request Structure:
    {
        "tournament_id": 1,
        "team_1": "Liverpool",
        "team_2": "PSG",
        "home_team": "Liverpool",
        "fixture_time": "2022-12-25 14:00:00"
    }
    */
    async createNewFixture(req, res) {
        let args = req.body;
        await fixturesCrudService.createNewFixture(args, (error,result) => {
            if (error) {
                return res.status(400).json(utils.createNewErrorResponse(error));
            }
            return res.status(200).json(utils.createNewSuccessResponse(result));
        });
    }

    /*
    Request Structure:
    {
        "tournament_id": 1,
        "fixture_id": 3
    }
    */
    async deleteExistingFixture(req, res) {
        let args = req.body
        await fixturesCrudService.deleteExistingFixture(args, (error,result) => {
            if (error) {
                return res.status(400).json(utils.createNewErrorResponse(error));
            }
            return res.status(200).json(utils.createNewSuccessResponse(result));
        });
    };

    async updateExistingFixture(req, res) {
        let args = req.body
        await fixturesCrudService.updateExistingFixture(args, (error,result) => {
            if (error) {
                return res.status(400).json(utils.createNewErrorResponse(error));
            }
            return res.status(200).json(utils.createNewSuccessResponse(result));
        });
    };

    async updateFixtureScore(req, res) {
        let args = req.body
        await fixturesCrudService.updateFixtureScore(args, (error,result) => {
            if (error) {
                return res.status(400).json(utils.createNewErrorResponse(error));
            }
            return res.status(200).json(utils.createNewSuccessResponse(result));
        });
    }
}
module.exports = new FixturesCrudController();
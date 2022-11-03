'use strict';
const fixturesService = require('../services/fixtures-service')
const utils = require('../utils/utils')
class FixturesController {

    async listAllFixtures(req, res) {
        let prevId;
        if (req.query.previous_id) {
            prevId = req.query.previous_id;
        } else {
            prevId = config.DEFAULT_PREVIOUS_ID
        }
        await fixturesService.listAllFixtures(prevId, (error,result) => {
            if (error) {
                return res.status(400).json(utils.createNewErrorResponse(error));
            }
            return res.status(200).json(utils.createNewSuccessResponse(result));
        });
    };
}
module.exports = new FixturesController();
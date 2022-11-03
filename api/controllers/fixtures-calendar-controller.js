'use strict';

const fixturesCalendarService = require("../services/fixtures-calendar-service");
const utils = require("../utils/utils");

class FixturesCalendarController {

    async listAllMatchDays(req, res) {
        await fixturesCalendarService.listAllMatchDays((error,result) => {
            if (error) {
                return res.status(400).json(utils.createNewErrorResponse(error));
            }
            return res.status(200).json(utils.createNewSuccessResponse());
        });
    };
        
}
module.exports = new FixturesCalendarController();
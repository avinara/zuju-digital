'use strict';
const fixturesCrudController = require('../controllers/fixtures-crud-controller');
const fixturesController = require('../controllers/fixtures-controller');
const fixturesCalendarController = require('../controllers/fixtures-calendar-controller');

module.exports = function(app) {


    const PATHS = {
        basePath: '/v1/fixtures'
    }

    app.post(`${PATHS.basePath}/create`, function(req, res){
        fixturesCrudController.createNewFixture(req, res)
    });     

    app.post(`${PATHS.basePath}/delete`, function(req, res){
        fixturesCrudController.deleteExistingFixture(req, res)
    });     

    app.post(`${PATHS.basePath}/update`, function(req, res){
        fixturesCrudController.updateExistingFixture(req, res)
    });     

    app.get(`${PATHS.basePath}/list`, function(req, res){
        fixturesController.listAllFixtures(req, res)
    });     

    app.get(`${PATHS.basePath}/list/all/match_days`, function(req, res){
        fixturesCalendarController.listAllMatchDays(req, res)
    });     

};




'use strict';

const fixturesCalendarDatastore = require("../datastore/fixtures-calendar-datastore");

class FixturesCalendarService {

    async listAllMatchDays(callback){
        let result = []
        await fixturesCalendarDatastore.listAllMatchDays((error, data)=>{
            if(error) return callback(error)
            data.forEach((item) => {
                let date = item.fixture_time.toISOString().split('T')[0]
                result.push({   
                        day:date.split('-')[2],
                        month: date.split('-')[1],
                        year:date.split('-')[0]
                    });
                })
            return callback(null,result)
        });
    };
}
module.exports = new FixturesCalendarService();

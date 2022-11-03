const fixtureCalenderService = require('./fixtures-calendar-service')
const fixturesCalendarDatastore = require("../datastore/fixtures-calendar-datastore");

describe('fixtureCalenderService', () => {

    test('test listAllMatchDays', () => {
        const mockCallback = jest.fn()
        jest.mock('./fixtures-calendar-service', () => ({
            listAllMatchDays: jest.fn((callback) => callback(null))
          }));
        const spy = jest.spyOn(fixturesCalendarDatastore, 'listAllMatchDays');
        spy.mockReturnValue();
        expect(fixtureCalenderService.listAllMatchDays(mockCallback)).toBe({});  // Success!
        spy.mockRestore();
    });
});

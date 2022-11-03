const utils = require('./utils')

describe('utils', () => {
    let errorObj = {
        error_code: 400001,
        error_message: 'Error, Failed to insert data into DB  > []'
    }
    test('test createNewError', () => {
        expect(utils.createNewError(400001, 'Error, Failed to insert data into DB  > ')).toStrictEqual(errorObj);
    });

    let errorResponse =  {
        code: -1,
        error_object: errorObj
    }
    test('test createNewErrorResponse', () => {
        expect(utils.createNewErrorResponse(errorObj)).toStrictEqual(errorResponse);
    });

    result = "Successfully updated the fixture into the DB"
    let successResponse =  {
        code: 0,
        result: result
    }
    test('test createNewSuccessResponse', () => {
        expect(utils.createNewSuccessResponse(result)).toStrictEqual(successResponse);
    });
})
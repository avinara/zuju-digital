'use strict'

class Utils {
    createNewError(code,message,...metadata) {
        return {
            error_code: code,
            error_message: message + JSON.stringify(metadata)
        }
    }

    createNewSuccessResponse(result) {
        return {
            code: 0,
            result: result
        }
    }

    createNewErrorResponse(error) {
        return {
            code: -1,
            error_message: error
        }
    }
}

module.exports = new Utils()
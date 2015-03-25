var utilities = (function() {
    'use strict';

    return {
        addReponseToResults: function(results, response) {
            results.push({
                url: response.req._headers.host,
                //name: response.headers.server,
                statusCode: response.statusCode
            });
        }
    }

})();

module.exports = utilities;

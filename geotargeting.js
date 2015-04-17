var baseUrlApiGeotargeting = 'http://maps.googleapis.com/maps/api/geocode/json';
var request = require('request');

var geotargeting = function (options, callbackFunction) {
    var requestParams = {
        latlng: options.latlng,
        language: 'EN',
        sensor: false
    };

    request({ url: baseUrlApiGeotargeting, qs: requestParams }, callbackFunction);
};

module.exports = geotargeting;
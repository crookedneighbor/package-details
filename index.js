'use strict';

var superagent = require('superagent');
var REGISTRY_URL = 'https://registry.npmjs.org/';

module.exports = function packageDetails(pkgName) {
  return superagent.get(REGISTRY_URL + pkgName).then(function (res) {
    return res.body;
  });
};

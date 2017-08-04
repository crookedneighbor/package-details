'use strict';

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var superagent = require('superagent');
var packageDetails = require('../');

chai.use(require('sinon-chai'));

describe('packageDetails', function () {
  beforeEach(function () {
    this.sandbox = sinon.sandbox.create();

    this.sandbox.stub(superagent, 'get').resolves({body: {name: 'pkg', version: '1.2.3'}});
  });

  afterEach(function () {
    this.sandbox.restore();
  });

  it('requests the npm registry', function () {
    return packageDetails('pkg').then(function (res) {
      expect(superagent.get).to.be.calledOnce;
      expect(superagent.get).to.be.calledWith('https://registry.npmjs.org/pkg');
    });
  });

  it('returns package data', function () {
    return packageDetails('pkg').then(function (res) {
      expect(res.name).to.equal('pkg');
      expect(res.version).to.equal('1.2.3');
    });
  });
});

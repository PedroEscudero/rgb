'use strict';

var expect = require('chai').expect;
var RGBTransformer = require('../index');

describe('#RGBTransformer', function() {

    it('should  transform to White', function() {
        var result = RGBTransformer(255, 255, 255);
        expect(result).to.equal('FFFFFF');
    });

    it('should  transform to FFFFFFF with B over 255', function() {
        var result = RGBTransformer(255, 255, 555);
        expect(result).to.equal('FFFFFF');
    });

    it('should  transform to Black', function() {
        var result = RGBTransformer(0, 0, 0);
        expect(result).to.equal('000000');
    });

    it('should  transform to FFFFFFF', function() {
        var result = RGBTransformer(255, 255, 555);
        expect(result).to.equal('FFFFFF');
    });

    it('should  transform to FFFFFFF with G over 255', function() {
        var result = RGBTransformer(255, 500, 555);
        expect(result).to.equal('FFFFFF');
    });

    it('should  transform to FFFFFFF with R over 255', function() {
        var result = RGBTransformer(500, 255, 555);
        expect(result).to.equal('FFFFFF');
    });

    it('should  transform Yellow', function() {
        var result = RGBTransformer(255, 255, 0);
        expect(result).to.equal('FFFF00');
    });

    it('should  transform Cyan', function() {
        var result = RGBTransformer(0, 255, 255);
        expect(result).to.equal('00FFFF');
    });

    it('should  transform Magenta', function() {
        var result = RGBTransformer(255, 0, 255);
        expect(result).to.equal('FF00FF');
    });

    it('should  transform Silver', function() {
        var result = RGBTransformer(192, 192, 192);
        expect(result).to.equal('C0C0C0');
    });

    it('should  transform Green', function() {
        var result = RGBTransformer(0, 128, 0);
        expect(result).to.equal('008000');
    });

    it('should  transform Black with negative', function() {
        var result = RGBTransformer(-3, -4, -5);
        expect(result).to.equal('000000');
    });

});

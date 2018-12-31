'use strict';

/**
 * Transforms RGB decimal numbers to its hexadecimal value
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {string}
 */
module.exports = function(r, g, b) {
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
};

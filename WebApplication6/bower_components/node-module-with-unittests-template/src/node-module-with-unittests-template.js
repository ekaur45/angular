/**
 * @copyright Copyright (c) 2015, All Rights Reserved.
 * @licence [Apache-2.0]{http://www.apache.org/licenses/LICENSE-2.0}
 * @author Baris Yuksel <baris@projectagama.com>
 *
 * @file Entry Point to Node-Module-With-Unittests-Template
 *       Replace it with your own code.
 */

exports = module.exports = NodeModuleWithUnittestsTemplate;

// Bring in dummy.js
var Dummy = require('./dummy.js');

/**
 * Constructs a new empty object.
 *
 * @constructor
 */
function NodeModuleWithUnittestsTemplate() {
  this.dummyClass = new Dummy();
}

/**
 * Simple function.
 *
 * @returns {string} returns what sayHello() returns from Dummy.js.
 */
NodeModuleWithUnittestsTemplate.prototype.hello = function() {
  return this.dummyClass.sayhello();
};

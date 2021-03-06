/*istanbul ignore next*/"use strict";

exports.__esModule = true;
exports.runtimeProperty = runtimeProperty;
/*istanbul ignore next*/exports.isReference = isReference;

var /*istanbul ignore next*/_babelTypes = require("babel-types");

/*istanbul ignore next*/
var t = _interopRequireWildcard(_babelTypes);

/*istanbul ignore next*/
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function runtimeProperty(name, regeneratorIdentifier) {
  return t.memberExpression(regeneratorIdentifier || t.identifier("regeneratorRuntime"), t.identifier(name), false);
} /**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
   * additional grant of patent rights can be found in the PATENTS file in
   * the same directory.
   */

function isReference(path) {
  return path.isReferenced() || path.parentPath.isAssignmentExpression({ left: path.node });
}

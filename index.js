var R = require("ramda");
var featureCollection = require("@turf/helpers").featureCollection;
var elementParser = require("./parsers/element");

var changesetParser = R.pipe(
  R.prop(["elements"]),
  (array) => array.map(elementParser),
  R.flatten,
  featureCollection
);

changesetParser.elementParser = elementParser;
module.exports = changesetParser;

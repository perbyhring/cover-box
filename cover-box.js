var coverBox = function(childX, childY) {

  var childFormat = childX / childY;

  return function(parentX, parentY) {

    var parentFormat = parentX / parentY,
        width, height;

    if (parentFormat > childFormat) {
      width = parentX;
      height = parentX / childFormat;
    } else {
      width = parentY * childFormat;
      height = parentY;
    }

    return [width, height];
  };
};

module.exports = coverBox;

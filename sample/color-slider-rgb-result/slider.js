var getStepColor = function (colorA, colorB, value) {
  return colorA.map(function (color, i) {
      return (color + value * (colorB[i] - color)) & 255;
  });
};

var gradient = document.querySelector("#gradient");
var preview = document.querySelector("#preview");

var background = window.getComputedStyle(gradient).getPropertyValue("background");

var colorStops = [];
var matchColorStops = /,\s*(\w+)\s+(\d+)%/g;
var match;

var humanToHex = {
  "mediumaquamarine": [102, 221, 170],
  "goldenrod": [218, 165, 32],
  "tomato": [255, 99, 71]
};

while (match = matchColorStops.exec(background)) {
  // If colour is *human-readable*, then
  // substitute it for a RGB value.
  if (humanToHex[match[1]]) {
      match[1] = humanToHex[match[1]];
  }
  colorStops.push({
      percentage: match[2],
      color: match[1]
  });
}

gradient.addEventListener("mousemove", function (event) {

  var x = event.pageX - gradient.offsetTop;
  var y = event.pageY - gradient.offsetLeft;
  var percentage = (x / this.offsetWidth) * 100;

  var i;
  for (i = 0; i < colorStops.length; i++) {
      if (colorStops[i].percentage > percentage) {
          break;
      };
  }

  var lowerIndex = i == 1 ? 0 : i - 1;
  var upperIndex = lowerIndex + 1;
  var value = x / (gradient.offsetWidth / (colorStops.length - 1)) % 1;

  color = getStepColor(colorStops[lowerIndex].color, colorStops[upperIndex].color, value);

  preview.style.backgroundColor = "rgb(" + color.join() + ")";
  preview.textContent = preview.style.backgroundColor;

});
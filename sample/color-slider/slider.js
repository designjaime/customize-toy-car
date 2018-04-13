(function() {
  // Helper function
  var update_handle_track_pos;

  update_handle_track_pos = function(slider, ui_handle_pos) {
    var handle_track_xoffset, slider_range_inverse_width;
    handle_track_xoffset = -((ui_handle_pos / 100) * slider.clientWidth);

    $(slider).find(".handle-track").css("left", handle_track_xoffset);
    slider_range_inverse_width = (100 - ui_handle_pos) + "%";

    return $(slider).find(".slider-range-inverse").css("width", slider_range_inverse_width);
  };

  // Init slider
  $("#js-slider").slider({
    range: "min",
    max: 100,
    value: 50,
    create: function(event, ui) {
      var slider;
      slider = $(event.target);
      
      // Append the slider handle with a center dot and it's own track
      slider.find('.ui-slider-handle').append('<span class="dot"><span class="handle-track"></span></span>');
      
      // Append the slider with an inverse range
      slider.prepend('<div class="slider-range-inverse"></div>');
      
      // Set initial dimensions
      slider.find(".handle-track").css("width", event.target.clientWidth);
      
      // Set initial position for tracks
      return update_handle_track_pos(event.target, $(this).slider("value"));
    },
    slide: function(event, ui) {
      showColorFromSlider(event, ui.value);
      // Update position of tracks
      return update_handle_track_pos(event.target, ui.value);
    }
  });

}).call(this);

var getStepColor = function (colorA, colorB, value) {
  return colorA.map(function (color, i) {
      return (color + value * (colorB[i] - color)) & 255;
  });
};

var gradient = document.querySelector("#js-slider");
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

var showColorFromSlider = function (event, percentage) {
  var i;
  for (i = 0; i < colorStops.length; i++) {
      if (colorStops[i].percentage >= percentage) {
          break;
      };
  }

  var lowerIndex = i <= 1 ? 0 : i - 1;
  var upperIndex = lowerIndex + 1;
  var numOfColorBlock = (colorStops.length - 1);
  var value = (percentage % (100 / numOfColorBlock)) * numOfColorBlock / 100;

  color = getStepColor(colorStops[lowerIndex].color, colorStops[upperIndex].color, value);

  preview.style.backgroundColor = "rgb(" + color.join() + ")";
  preview.textContent = preview.style.backgroundColor;
};
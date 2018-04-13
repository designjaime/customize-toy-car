// (function() {
//   // Helper function
//   var update_handle_track_pos;

//   update_handle_track_pos = function(slider, ui_handle_pos) {
//     var handle_track_xoffset, slider_range_inverse_width;
//     handle_track_xoffset = -((ui_handle_pos / 100) * slider.clientWidth);
//     $(slider).find(".handle-track").css("left", handle_track_xoffset);
//     slider_range_inverse_width = (100 - ui_handle_pos) + "%";
//     return $(slider).find(".slider-range-inverse").css("width", slider_range_inverse_width);
//   };

//   // Init slider
//   $("#js-slider").slider({
//     range: "min",
//     max: 100,
//     value: 50,
//     create: function(event, ui) {
//       var slider;
//       slider = $(event.target);
      
//       // Append the slider handle with a center dot and it's own track
//       slider.find('.ui-slider-handle').append('<span class="dot"><span class="handle-track"></span></span>');
      
//       // Append the slider with an inverse range
//       slider.prepend('<div class="slider-range-inverse"></div>');
      
//       // Set initial dimensions
//       slider.find(".handle-track").css("width", event.target.clientWidth);
      
//       // Set initial position for tracks
//       return update_handle_track_pos(event.target, $(this).slider("value"));
//     },
//     slide: function(event, ui) {
//       // Update position of tracks
//       return update_handle_track_pos(event.target, ui.value);
//     }
//   });

// }).call(this);

var gradient = [
    [
        0,
        [255,0,0]
    ],
    [
        28,
        [0,128,0]
    ],
    [
        72,
        [0,0,255]
    ],
    [
        100,
        [255,0,0]
    ]
];

var sliderWidth = 800;

$( "#slider" ).slider({
    min: 1,
    slide: function( event, ui ) {
        
        var colorRange = []
        $.each(gradient, function( index, value ) {
            if(ui.value<=value[0]) {
                colorRange = [index-1,index]
                return false;
            }
        });
        
        //Get the two closest colors
        var firstcolor = gradient[colorRange[0]][1];
        var secondcolor = gradient[colorRange[1]][1];
        
        //Calculate ratio between the two closest colors
        var firstcolor_x = sliderWidth*(gradient[colorRange[0]][0]/100);
        var secondcolor_x = sliderWidth*(gradient[colorRange[1]][0]/100)-firstcolor_x;
        var slider_x = sliderWidth*(ui.value/100)-firstcolor_x;
        var ratio = slider_x/secondcolor_x
        
        //Get the color with pickHex(thx, less.js's mix function!)
        var result = pickHex( secondcolor,firstcolor, ratio );
                       
        $('#result').css("background-color", 'rgb('+result.join()+')');
        
    }
});

function pickHex(color1, color2, weight) {
    var p = weight;
    var w = p * 2 - 1;
    var w1 = (w/1+1) / 2;
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
    return rgb;
}
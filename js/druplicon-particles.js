(function ($) {
  $(document).ready(function () {

    $.getScript('/sites/all/themes/da_vinci/js/plugins/interactive-particles.js', function () {
//Icono de drupal hecho particulas.
      var drupliconMapData = [
        {"x": 152, "y": 15, "color": "#5993AC"},
        {"x": 185, "y": 37, "color": "#5993AC"},
        {"x": 207, "y": 53, "color": "#5993AC"},
        {"x": 188, "y": 47, "color": "#5993AC"},
        {"x": 185, "y": 64, "color": "#5993AC"},
        {"x": 163, "y": 59, "color": "#5993AC"},
        {"x": 137, "y": 70, "color": "#5993AC"},
        {"x": 143, "y": 59, "color": "#66AECF"},
        {"x": 115, "y": 59, "color": "#5993AC"},
        {"x": 108, "y": 55, "color": "#5993AC"},
        {"x": 86, "y": 66, "color": "#5993AC"},
        {"x": 112, "y": 70, "color": "#5993AC"},
        {"x": 93, "y": 81, "color": "#5993AC"},
        {"x": 119, "y": 92, "color": "#5993AC"},
        {"x": 130, "y": 84, "color": "#5993AC"},
        {"x": 152, "y": 86, "color": "#5993AC"},
        {"x": 168, "y": 79, "color": "#66AECF"},
        {"x": 149, "y": 117, "color": "#66AECF"},
        {"x": 196, "y": 86, "color": "#5993AC"},
        {"x": 199, "y": 75, "color": "#5993AC"},
        {"x": 212, "y": 70, "color": "#5993AC"},
        {"x": 223, "y": 62, "color": "#66AECF"},
        {"x": 195, "y": 59, "color": "#66AECF"},
        {"x": 84, "y": 124, "color": "#66AECF"},
        {"x": 234, "y": 77, "color": "#5993AC"},
        {"x": 215, "y": 84, "color": "#5993AC"},
        {"x": 188, "y": 88, "color": "#5993AC"},
        {"x": 166, "y": 99, "color": "#5993AC"},
        {"x": 144, "y": 99, "color": "#5993AC"},
        {"x": 123, "y": 109, "color": "#5993AC"},
        {"x": 108, "y": 95, "color": "#5993AC"},
        {"x": 86, "y": 103, "color": "#5993AC"},
        {"x": 66, "y": 88, "color": "#5993AC"},
        {"x": 75, "y": 77, "color": "#5993AC"},
        {"x": 55, "y": 97, "color": "#5993AC"},
        {"x": 68, "y": 117, "color": "#5993AC"},
        {"x": 93, "y": 120, "color": "#5993AC"},
        {"x": 104, "y": 111, "color": "#5993AC"},
        {"x": 130, "y": 129, "color": "#5993AC"},
        {"x": 157, "y": 125, "color": "#5993AC"},
        {"x": 174, "y": 117, "color": "#5993AC"},
        {"x": 188, "y": 122, "color": "#5993AC"},
        {"x": 196, "y": 109, "color": "#5993AC"},
        {"x": 207, "y": 111, "color": "#5993AC"},
        {"x": 223, "y": 103, "color": "#5993AC"},
        {"x": 246, "y": 99, "color": "#5993AC"},
        {"x": 234, "y": 88, "color": "#5993AC"},
        {"x": 259, "y": 99, "color": "#5993AC"},
        {"x": 248, "y": 114, "color": "#5993AC"},
        {"x": 267, "y": 114, "color": "#5993AC"},
        {"x": 278, "y": 125, "color": "#66AECF"},
        {"x": 234, "y": 114, "color": "#66AECF"},
        {"x": 270, "y": 140, "color": "#5993AC"},
        {"x": 281, "y": 144, "color": "#5993AC"},
        {"x": 256, "y": 147, "color": "#5993AC"},
        {"x": 229, "y": 131, "color": "#66AECF"},
        {"x": 201, "y": 133, "color": "#5993AC"},
        {"x": 223, "y": 140, "color": "#5993AC"},
        {"x": 215, "y": 159, "color": "#5993AC"},
        {"x": 248, "y": 86, "color": "#66AECF"},
        {"x": 257, "y": 124, "color": "#5993AC"},
        {"x": 226, "y": 162, "color": "#5993AC"},
        {"x": 248, "y": 162, "color": "#5993AC"},
        {"x": 152, "y": 33, "color": "#5993AC"},
        {"x": 210, "y": 128, "color": "#5993AC"},
        {"x": 149, "y": 66, "color": "#5993AC"},
        {"x": 123, "y": 57, "color": "#5993AC"},
        {"x": 157, "y": 106, "color": "#5993AC"},
        {"x": 209, "y": 100, "color": "#66AECF"},
        {"x": 206, "y": 144, "color": "#66AECF"},
        {"x": 289, "y": 159, "color": "#5993AC"},
        {"x": 262, "y": 162, "color": "#5993AC"},
        {"x": 234, "y": 173, "color": "#5993AC"},
        {"x": 207, "y": 170, "color": "#66AECF"},
        {"x": 188, "y": 166, "color": "#5993AC"},
        {"x": 204, "y": 188, "color": "#66AECF"},
        {"x": 223, "y": 177, "color": "#5993AC"},
        {"x": 248, "y": 173, "color": "#66AECF"},
        {"x": 278, "y": 177, "color": "#5993AC"},
        {"x": 289, "y": 177, "color": "#5993AC"},
        {"x": 288, "y": 192, "color": "#66AECF"},
        {"x": 194, "y": 155, "color": "#5993AC"},
        {"x": 185, "y": 135, "color": "#5993AC"},
        {"x": 175, "y": 131, "color": "#66AECF"},
        {"x": 129, "y": 102, "color": "#66AECF"},
        {"x": 103, "y": 68, "color": "#66AECF"},
        {"x": 50, "y": 109, "color": "#5993AC"},
        {"x": 68, "y": 142, "color": "#5993AC"},
        {"x": 183, "y": 147, "color": "#5993AC"},
        {"x": 152, "y": 147, "color": "#5993AC"},
        {"x": 144, "y": 140, "color": "#5993AC"},
        {"x": 168, "y": 166, "color": "#5993AC"},
        {"x": 149, "y": 157, "color": "#5993AC"},
        {"x": 126, "y": 157, "color": "#5993AC"},
        {"x": 119, "y": 146, "color": "#66AECF"},
        {"x": 112, "y": 131, "color": "#5993AC"},
        {"x": 97, "y": 140, "color": "#5993AC"},
        {"x": 64, "y": 135, "color": "#66AECF"},
        {"x": 50, "y": 120, "color": "#5993AC"},
        {"x": 71, "y": 103, "color": "#5993AC"},
        {"x": 44, "y": 122, "color": "#5993AC"},
        {"x": 32, "y": 140, "color": "#5993AC"},
        {"x": 50, "y": 146, "color": "#5993AC"},
        {"x": 71, "y": 155, "color": "#5993AC"},
        {"x": 84, "y": 147, "color": "#5993AC"},
        {"x": 97, "y": 157, "color": "#5993AC"},
        {"x": 108, "y": 159, "color": "#5993AC"},
        {"x": 143, "y": 28, "color": "#66AECF"},
        {"x": 135, "y": 146, "color": "#5993AC"},
        {"x": 90, "y": 181, "color": "#5993AC"},
        {"x": 60, "y": 192, "color": "#5993AC"},
        {"x": 27, "y": 191, "color": "#5993AC"},
        {"x": 32, "y": 222, "color": "#5993AC"},
        {"x": 38, "y": 233, "color": "#5993AC"},
        {"x": 46, "y": 218, "color": "#5993AC"},
        {"x": 27, "y": 155, "color": "#5993AC"},
        {"x": 57, "y": 168, "color": "#5993AC"},
        {"x": 86, "y": 162, "color": "#66AECF"},
        {"x": 104, "y": 173, "color": "#5993AC"},
        {"x": 123, "y": 173, "color": "#66AECF"},
        {"x": 141, "y": 168, "color": "#5993AC"},
        {"x": 157, "y": 179, "color": "#5993AC"},
        {"x": 175, "y": 188, "color": "#5993AC"},
        {"x": 183, "y": 180, "color": "#66AECF"},
        {"x": 199, "y": 180, "color": "#5993AC"},
        {"x": 196, "y": 199, "color": "#5993AC"},
        {"x": 185, "y": 195, "color": "#5993AC"},
        {"x": 205, "y": 206, "color": "#5993AC"},
        {"x": 221, "y": 203, "color": "#5993AC"},
        {"x": 227, "y": 195, "color": "#5993AC"},
        {"x": 207, "y": 238, "color": "#66AECF"},
        {"x": 196, "y": 245, "color": "#5993AC"},
        {"x": 185, "y": 249, "color": "#5993AC"},
        {"x": 157, "y": 264, "color": "#5993AC"},
        {"x": 137, "y": 271, "color": "#5993AC"},
        {"x": 174, "y": 280, "color": "#5993AC"},
        {"x": 186, "y": 268, "color": "#5993AC"},
        {"x": 229, "y": 291, "color": "#5993AC"},
        {"x": 213, "y": 282, "color": "#5993AC"},
        {"x": 194, "y": 293, "color": "#5993AC"},
        {"x": 207, "y": 298, "color": "#5993AC"},
        {"x": 210, "y": 298, "color": "#66AECF"},
        {"x": 188, "y": 304, "color": "#5993AC"},
        {"x": 152, "y": 309, "color": "#5993AC"},
        {"x": 165, "y": 307, "color": "#5993AC"},
        {"x": 126, "y": 302, "color": "#66AECF"},
        {"x": 135, "y": 293, "color": "#5993AC"},
        {"x": 126, "y": 282, "color": "#5993AC"},
        {"x": 119, "y": 273, "color": "#5993AC"},
        {"x": 97, "y": 287, "color": "#5993AC"},
        {"x": 86, "y": 296, "color": "#5993AC"},
        {"x": 86, "y": 268, "color": "#5993AC"},
        {"x": 77, "y": 256, "color": "#5993AC"},
        {"x": 66, "y": 229, "color": "#5993AC"},
        {"x": 75, "y": 201, "color": "#5993AC"},
        {"x": 79, "y": 195, "color": "#66AECF"},
        {"x": 240, "y": 190, "color": "#5993AC"},
        {"x": 256, "y": 184, "color": "#5993AC"},
        {"x": 71, "y": 170, "color": "#5993AC"},
        {"x": 44, "y": 184, "color": "#5993AC"},
        {"x": 38, "y": 201, "color": "#5993AC"},
        {"x": 46, "y": 159, "color": "#5993AC"},
        {"x": 34, "y": 157, "color": "#5993AC"},
        {"x": 38, "y": 131, "color": "#5993AC"},
        {"x": 39, "y": 114, "color": "#66AECF"},
        {"x": 177, "y": 59, "color": "#5993AC"},
        {"x": 124, "y": 73, "color": "#5993AC"},
        {"x": 256, "y": 273, "color": "#66AECF"},
        {"x": 27, "y": 170, "color": "#66AECF"},
        {"x": 256, "y": 251, "color": "#CAE6ED"},
        {"x": 277, "y": 226, "color": "#CAE6ED"},
        {"x": 226, "y": 232, "color": "#CAE6ED"},
        {"x": 234, "y": 219, "color": "#CAE6ED"},
        {"x": 256, "y": 230, "color": "#CAE6ED"},
        {"x": 268, "y": 215, "color": "#CAE6ED"},
        {"x": 277, "y": 201, "color": "#CAE6ED"},
        {"x": 251, "y": 208, "color": "#CAE6ED"},
        {"x": 153, "y": 197, "color": "#CAE6ED"},
        {"x": 135, "y": 192, "color": "#CAE6ED"},
        {"x": 126, "y": 214, "color": "#CAE6ED"},
        {"x": 123, "y": 241, "color": "#CAE6ED"},
        {"x": 115, "y": 197, "color": "#CAE6ED"},
        {"x": 104, "y": 203, "color": "#CAE6ED"},
        {"x": 151, "y": 215, "color": "#CAE6ED"},
        {"x": 164, "y": 208, "color": "#CAE6ED"},
        {"x": 186, "y": 219, "color": "#CAE6ED"},
        {"x": 175, "y": 226, "color": "#CAE6ED"},
        {"x": 142, "y": 226, "color": "#CAE6ED"},
        {"x": 93, "y": 218, "color": "#CAE6ED"},
        {"x": 129, "y": 229, "color": "#CAE6ED"},
        {"x": 104, "y": 230, "color": "#CAE6ED"},
        {"x": 89, "y": 240, "color": "#CAE6ED"},
        {"x": 106, "y": 248, "color": "#CAE6ED"},
        {"x": 137, "y": 249, "color": "#CAE6ED"},
        {"x": 156, "y": 238, "color": "#CAE6ED"},
        {"x": 146, "y": 0, "color": "#5993AC"},
        {"x": 52, "y": 256, "color": "#5993AC"},
        {"x": 166, "y": 26, "color": "#66AECF"},
        {"x": 152, "y": 44, "color": "#5993AC"},
        {"x": 130, "y": 42, "color": "#5993AC"},
        {"x": 166, "y": 46, "color": "#5993AC"},
        {"x": 152, "y": 282, "color": "#5993AC"},
        {"x": 199, "y": 264, "color": "#66AECF"},
        {"x": 207, "y": 256, "color": "#5993AC"},
        {"x": 221, "y": 268, "color": "#5993AC"},
        {"x": 227, "y": 253, "color": "#66AECF"},
        {"x": 238, "y": 262, "color": "#5993AC"},
        {"x": 246, "y": 280, "color": "#5993AC"},
        {"x": 177, "y": 296, "color": "#5993AC"},
        {"x": 141, "y": 307, "color": "#5993AC"},
        {"x": 104, "y": 273, "color": "#66AECF"},
        {"x": 68, "y": 276, "color": "#66AECF"},
        {"x": 162, "y": 144, "color": "#66AECF"},
        {"x": 248, "y": 136, "color": "#66AECF"},
        {"x": 112, "y": 296, "color": "#5993AC"},
        {"x": 104, "y": 300, "color": "#5993AC"},
        {"x": 90, "y": 278, "color": "#5993AC"},
        {"x": 68, "y": 245, "color": "#5993AC"},
        {"x": 63, "y": 267, "color": "#66AECF"},
        {"x": 52, "y": 238, "color": "#66AECF"},
        {"x": 68, "y": 218, "color": "#5993AC"},
        {"x": 66, "y": 211, "color": "#5993AC"}
      ];

      $('.druplicon').interactiveParticles(drupliconMapData, {
        'initVelJitter': 100,
        'springHome': 0.06,
        'dragBase': 0.88,
        'dragIncrease': 0.4,
        'repultionForce': 10,
        'repultionDist': 180,
        'animationPauseTimeout': 8000,
        'circleSize': 16,
        'colors': ['#5993AC', '#66AECF']
      });

    });

  });

})(jQuery);

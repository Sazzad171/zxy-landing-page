// active fullpage
$('#fullpage').fullpage({
  sectionsColor: ['#fff', '#fff', '#fff', 'whitesmoke'],
  anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
  menu: '#menu',
  navigation: true,
  continuousVertical: true,
  afterLoad: function (origin, destination, direction, trigger) {

    // remove animation before start
    $(".section h1").removeClass("animate__slideInUp");
    $(".section h1").removeClass("animate__slideOutUp");
    $(".section .details").removeClass("animate__zoomIn");
    $(".section .details").removeClass("animate__zoomOut");
    $(".section .details").removeClass("animate__slideOutUp");
    $(".section .btn-area").removeClass("animate__slideInDown");
    $(".section .btn-area").removeClass("animate__slideOutUp");
    $(".section .btn-area").removeClass("animate__slideInUp");
    $(".section .ring-img-row").removeClass("animate__slideInUp");
    $(".section .ring-img-row").removeClass("animate__slideOutUp");
    $(".section .cer-imgs").removeClass("animate__zoomIn");
    $(".section .cer-imgs").removeClass("animate__slideOutUp");

    $(".section .row").addClass("d-none");

    // animate after load
    switch (destination) {
      case 1:

        setTimeout(() => {
          $("#section0 .row").removeClass("d-none");

          $("#section0 h1").addClass("animate__slideInUp");
          $("#section0 .details").addClass("animate__zoomIn");
          $("#section0 .btn-area").addClass("animate__slideInDown");
          $("#section0 .ring-img-row").addClass("animate__slideInUp");
        }, 1400);

        // onclick next prev arrow
        $(".previous-slide-arrow").attr("href", "#4thpage");
        $(".next-slide-arrow").attr("href", "#secondPage");
        
      break

      case 2:
        setTimeout(() => {
          $("#section1 .row").removeClass("d-none");

          $("#section1 h1").addClass("animate__slideInUp");
          $("#section1 .details").addClass("animate__zoomIn");
          $("#section1 .btn-area").addClass("animate__slideInDown");
        }, 1400);

        // onclick next prev arrow
        $(".previous-slide-arrow").attr("href", "#firstPage");
        $(".next-slide-arrow").attr("href", "#3rdPage");
        
      break

      case 3:
        setTimeout(() => {
          $("#section2 .row").removeClass("d-none");

          $("#section2 h1").addClass("animate__slideInUp");
          $("#section2 .details").addClass("animate__slideInUp");
          $("#section2 .btn-area").addClass("animate__slideInUp");
        }, 1400);

        // onclick next prev arrow
        $(".previous-slide-arrow").attr("href", "#secondPage");
        $(".next-slide-arrow").attr("href", "#4thpage");
        
      break

      case 4:
        setTimeout(() => {
          $("#section3 .row").removeClass("d-none");

          $("#section3 h1").addClass("animate__slideInUp");
          $("#section3 .details").addClass("animate__zoomIn");
          $("#section3 .btn-area").addClass("animate__slideInDown");
          $("#section3 .cer-imgs").addClass("animate__zoomIn");
        }, 1400);

        // onclick next prev arrow
        $(".previous-slide-arrow").attr("href", "#3rdPage");
        $(".next-slide-arrow").attr("href", "#firstPage");
        
      break

      default:
    }

  },
  onLeave: function (origin, destination, direction, trigger) {

    // remove animation before start
    $(".section h1").removeClass("animate__slideInUp");
    $(".section h1").removeClass("animate__slideOutUp");
    $(".section .details").removeClass("animate__zoomIn");
    $(".section .details").removeClass("animate__slideOutUp");
    $(".section .details").removeClass("animate__slideInUp");
    $(".section .btn-area").removeClass("animate__slideInDown");
    $(".section .btn-area").removeClass("animate__slideOutUp");
    $(".section .btn-area").removeClass("animate__slideInUp");
    $(".section .ring-img-row").removeClass("animate__slideInUp");
    $(".section .ring-img-row").removeClass("animate__slideOutDown");
    $(".section .cer-imgs").removeClass("animate__zoomIn");
    $(".section .cer-imgs").removeClass("animate__slideOutUp");

    // animate before load
    switch (origin) {
      case 1:
        $("#section0 .row").removeClass("d-none");

        $("#section0 h1").addClass("animate__slideOutUp");
        $("#section0 .details").addClass("animate__slideOutUp");
        $("#section0 .btn-area").addClass("animate__slideOutUp");
        $("#section0 .ring-img-row").addClass("animate__slideOutUp");

        // hide this section after animate
        setTimeout(() => {
          $("#section0 .row").addClass("d-none");
        }, 900);

        // show overlay color
        setTimeout(() => {
          $(".first-slide-onleave").addClass("overlay-color-show");
        }, 150);
        setTimeout(() => {
          $(".section").addClass("bg-none");
        }, 400);
        setTimeout(() => {
          $(".section").removeClass("bg-none");
        }, 1400);
        setTimeout(() => {
          $(".first-slide-onleave").removeClass("overlay-color-show");
        }, 1800);

      break

      case 2:
        $("#section1 h1").addClass("animate__slideOutUp");
        $("#section1 .details").addClass("animate__slideOutUp");
        $("#section1 .btn-area").addClass("animate__slideOutUp");

        // show overlay color
        setTimeout(() => {
          $(".second-slide-onleave").addClass("overlay-color-show");
        }, 150);
        setTimeout(() => {
          $(".section").addClass("bg-none");
        }, 400);
        setTimeout(() => {
          $(".section").removeClass("bg-none");
        }, 1400);
        setTimeout(() => {
          $(".second-slide-onleave").removeClass("overlay-color-show");
        }, 1800);
      break

      case 3:
        $("#section2 h1").addClass("animate__slideOutUp");
        $("#section2 .details").addClass("animate__slideOutUp");
        $("#section2 .btn-area").addClass("animate__slideOutUp");

        // show overlay color
        setTimeout(() => {
          $(".third-slide-onleave").addClass("overlay-color-show");
        }, 150);
        setTimeout(() => {
          $(".section").addClass("bg-none");
        }, 400);
        setTimeout(() => {
          $(".section").removeClass("bg-none");
        }, 1400);
        setTimeout(() => {
          $(".third-slide-onleave").removeClass("overlay-color-show");
        }, 1800);
      break

      case 4:
        $("#section3 h1").addClass("animate__slideOutUp");
        $("#section3 .details").addClass("animate__slideOutUp");
        $("#section3 .btn-area").addClass("animate__slideOutUp");
        $("#section3 .cer-imgs").addClass("animate__slideOutUp");

        // show overlay color
        setTimeout(() => {
          $(".fourth-slide-onleave").addClass("overlay-color-show");
        }, 150);
        setTimeout(() => {
          $(".section").addClass("bg-none");
        }, 400);
        setTimeout(() => {
          $(".section").removeClass("bg-none");
        }, 1400);
        setTimeout(() => {
          $(".fourth-slide-onleave").removeClass("overlay-color-show");
        }, 1800);
      break

      default:
    }

  },
});


// active menu
// window.addEventListener("wheel", myFunction);

// // my function when scroll
// function myFunction() {
//   var url = document.URL;

//   var lastPartOfURL = url.substr(url.lastIndexOf('#') + 1);

//   console.log(lastPartOfURL);

// }
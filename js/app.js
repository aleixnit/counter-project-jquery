let counter = 0;

$(document).ready(function () {
  console.log("DOM cargado! Implementa tu solución a partir de esta línea.");

  $(".prevBtn").click(function () {
    counter--;
    $("#counter").text(counter);
    coloresCounter();
  });

  $(".nextBtn").click(function () {
    counter++;
    $("#counter").text(counter);
    coloresCounter();
  });

  function coloresCounter() {
    if (counter === 0) {
      $("#counter").removeClass("positivo");
      $("#counter").removeClass("negativo");
    } else if (counter > 0) {
      $("#counter").addClass("positivo");
    } else {
      $("#counter").addClass("negativo");
    }
  }
});

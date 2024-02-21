$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
  
    envelope.click(function() {
      openEnvelope();
    });
    btn_open.click(function() {
      openEnvelope();
    });
    btn_reset.click(function() {
      closeEnvelope();
    });
  
    function openEnvelope() {
      envelope.addClass("open").removeClass("close");
      $(".images").fadeIn(); // Mostrar las imágenes cuando se abra el sobre
    }
  
    function closeEnvelope() {
      envelope.addClass("close").removeClass("open");
      $(".images").fadeOut(); // Ocultar las imágenes cuando se cierre el sobre
    }
  });
  
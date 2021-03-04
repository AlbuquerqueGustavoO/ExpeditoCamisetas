$(function() {
    $('#idNavbar').click(function(){
        $('.colapseGenerico').toggle();
    });

    $(".zoom_05").elevateZoom({
        zoomType				: "lens",
        lensShape : "round",
        lensSize    : 100
      });
      
    $("#carouselExampleCaptions").carousel('pause');
});
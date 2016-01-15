//New accordion
$('.toggle').click(function(e) {
  	e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
//end new accordion


//start carrousel
$(document).ready(function () {
   $("#waterwheel-carousel").waterwheelCarousel({
       autoPlay : 1500,
       horizonOffset: -50,
       horizonOffsetMultiplier: 1,
       linkHandling: 2,
       separation: 200,
       activeClassName: "carousel-center",
       opacityMultiplier: 1,
       edgeFadeEnabled: true
   });
});
//end of carrousel

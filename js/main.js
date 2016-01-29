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
       horizonOffset: -20,
       horizonOffsetMultiplier: 1,
       linkHandling: 2,
       separation: 150,
       activeClassName: "carousel-center",
       opacityMultiplier: 1,
       edgeFadeEnabled: true









   });
});
//end of carrousel


//reservation manip dom pour afficher tarif prévisionel


var nbPlace= document.getElementById("bla");
// this.form.elements['selectbasic'].options[this.form.elements['selectbasic'].selectedIndex].value;

var result =nbPlace * 5;

nbPlace.textContent= "result"  ;

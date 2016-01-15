//Menu accordéon
// $(document).ready(function(){
// 	$("#accordian h3").click(function(){
//
// 		//slide up all the link lists
// 		$("#accordian ul ul").slideUp();
// 		//slide down the link list below the h3 clicked - only if its closed
// 		if(!$(this).next().is(":visible"))
// 		{
// 			$(this).next().slideDown();
// 		}
// 	})
// })
//Fin menu accordéon

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


// mise en place datetimepicker

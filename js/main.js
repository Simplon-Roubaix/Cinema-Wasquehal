//Menu accordéon
$(document).ready(function(){
	$("#accordian h3").click(function(){
		
		//slide up all the link lists
		$("#accordian ul ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})
})
//Fin menu accordéon
$('#formulaire').quickselect({
		activeButtonClass: 'btn-primary active',
		breakOutAll: true,
		buttonClass: 'btn btn-default',
		selectDefaultText: 'Other',
		wrapperClass: 'btn-group'
	});

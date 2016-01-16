function showUsersInfo(){
  $.getJSON( "js/films.json", function( film ) {
    // Iteration sur les films

    console.log(film);
      $.each( film, function( key, donnee ) {

         // Iteration sur les data d'un film
            // $("<div>" + key + "</div>").appendTo( "#vue" );
            $.each( donnee, function( pkey, pdonnee ) {
              // $("<div>" + pkey + " = " + value + "</div>").appendTo( "#vue" );
              // Mon code:
                    if (pkey=="poster_path"){
                                 $('#aff_film1').attr('src',pdonnee);
                                // $('#film1').text("CROCODILE ATTACK!");
                    }
                    if (pkey=="title"){
                                 $('#title1').text(pdonnee);
                    }
                    if (pkey=="overview"){
                                 $('#overview1').text(pdonnee);
                    }
                    if (pkey=="video"){
                                 $('#video1').attr('src',pdonnee);
                    }
             });
            // $("<div>___</div>").appendTo( "#vue" );
      });
  });
}

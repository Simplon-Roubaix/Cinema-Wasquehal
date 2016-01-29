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
              switch (pkey) {
                case "poster_path" :
                        $('#aff_film1').attr('src',pdonnee);
                        break;
                case "title":
                        $('#title1').text(pdonnee);
                        $('#aff_film1').attr({alt: 'affiche du film '+pdonnee, title: 'affiche du film '+pdonnee, height: '600px;'});
                        break;
                case "overview":
                        $('#overview1').text(pdonnee);
                        break;
                case "video":
                        $('#video1').attr('src',pdonnee);
                        break;
                default:
                        break;
              }
                    // if (pkey=="poster_path"){
                    //               $('#aff_film1').attr('src',pdonnee);
                    //             //  $('#aff_film1').attr({src: pdonnee, heigth: '800px'});
                    //             // $('#film1').text("CROCODILE ATTACK!");
                    // }
                    // if (pkey=="title"){
                    //              $('#title1').text(pdonnee);
                    //              $('#aff_film1').attr({alt: 'affiche du film '+pdonnee, title: 'affiche du film '+pdonnee});
                    // }
                    // if (pkey=="overview"){
                    //              $('#overview1').text(pdonnee);
                    // }
                    // if (pkey=="video"){
                    //              $('#video1').attr('src',pdonnee);
                    // }
             });
            // $("<div>___</div>").appendTo( "#vue" );
      });
  });
}

function showUsersInfo(){
  $.getJSON( "js/films.json", function( film ) {
    // Iteration sur les films

    console.log(film);
      $.each( film, function( key, donnee ) {
          var ident = key;
          console.log(key);
         // Iteration sur les data d'un film
            $.each( donnee, function( pkey, pdonnee ) {
              // $("<div>" + pkey + " = " + value + "</div>").appendTo( "#vue" );
              // Mon code:
              console.log(key)
              switch (pkey) {
                case "poster_path" :
                        $('#aff_'+key).attr('src',pdonnee);
                        break;
                case "title":
                        $('#title_'+key).text(pdonnee);
                        $('#aff_'+key).attr({alt: 'affiche du film '+pdonnee, title: 'affiche du film '+pdonnee, height: '600px;'});
                        break;
                case "overview":
                        $('#overview_'+key).text(pdonnee);
                        break;
                case "video":
                        $('#video_'+key).attr('src',pdonnee);
                        break;
                default:
                        break;
              }
             });
            // $("<div>___</div>").appendTo( "#vue" );
      });
  });
}

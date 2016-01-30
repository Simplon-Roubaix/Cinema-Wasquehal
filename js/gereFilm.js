document.addEventListener("DOMContentLoaded", function(event) {


  $.getJSON( "js/films.json", function( film ) {
    // Iteration sur les films
      $.each( film, function( key, donnee ) {
          var ident = key;
             // Iteration sur les data d'un film
             // ex : key = title et donnee = "nom du film"
            $.each( donnee, function( pkey, pdonnee ) {
              // $("<div>" + pkey + " = " + value + "</div>").appendTo( "#vue" );
              // Mon code:
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
});

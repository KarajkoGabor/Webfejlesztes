(function() {

          var artist;

          artist = (function(){

            function artist(){}

            //artist.key="";

            artist.getInfo = function(name, callback) {
            var url;
            url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+name+"&api_key=dd5a33741258754e14204cbe9c9bdf1d&format=json";
            return $.ajax({
              type : 'GET',
              dataType: "json",
              url: url,
              data: null,
              success: callback,
              crossDomain: true
            });
            };

             return artist;
      })();

        window.artist = artist;

        }).call(this);
(function() {

          var lastFm

          lastFm = (function(){

            function lastFm(){}

            //artist.key="";

            lastFm.getInfo = function(name, callback) {
            var url;
            url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Metallica&api_key=dd5a33741258754e14204cbe9c9bdf1d&format=json";
            return $.ajax({
              type : 'GET',
              dataType: "json",
              url: url,
              success: callback,
              crossDomain: true
            });
            };

             return lastFm;
      })();

        window.lastFm = lastFm;

        }).call(this);
/* index.htmlben volt
  var cache = new LastFMCache();


  var lastfm = new LastFM({
    apiKey    : 'dd5a33741258754e14204cbe9c9bdf1d',
    apiSecret : 'aa459d1ebf42efdf95eeadb7ca3f1863',
  });


  lastfm.artist.getInfo({
    artist: 'Metallica',
    api_key:'dd5a33741258754e14204cbe9c9bdf1d'
    }, {success: function(data){
      var url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Metallica&api_key=dd5a33741258754e14204cbe9c9bdf1d&format=json"
      $.getJSON(url,function(json){
        $("#searchOutput").append(json);
        $.each(json.artist, function(i,artist_tag){

        });

      });



  }, error: function(code, message){

    alert(code);
    $("#searchOutput").html("Nem sikerült");
  }});*/


    (function(){
            "use strict";
            var lastFm;
            lastFm  = (function(){
                    function lastFm(){}
     
                    lastFm.getInfo = function(artist, callback){
                            return $.ajax({
                                    type: 'GET',
                                    dataType: 'json',
                                    url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Metallica&api_key=dd5a33741258754e14204cbe9c9bdf1d&format=json',                                    crossDomain: true
                            });
                    };
     
                    return lastFm;
            })();
     
            window.lastFm = lastFm;
    }).call(this);

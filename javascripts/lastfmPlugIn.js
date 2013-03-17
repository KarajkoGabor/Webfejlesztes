//You need an anonymous function to wrap around your function to avoid conflict
(function($){
 
    //Attach this new method to jQuery
    $.fn.extend({
         
        //This is where you write your plugin's name
        myLastFmAutoComplete: function(options) {

            var defaults = {
                target : 'results',
                minLength : 3,
                targetHandler : "displayData",
            };

            var options = $.extend(defaults,options);
 
                $(this).keyup(function(){
                    if(3<=$(this).val().length){
                    searchArtist($(this).val());
                    }
                });

            function searchArtist(searchable){
                    $.ajax({
                        type : 'GET',
                        dataType : 'json',
                        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.search&limit=3&artist='+searchable+'&api_key=dd5a33741258754e14204cbe9c9bdf1d&format=json', 
                        crossDomain: true,
                        success : function(data){ displayData(data); }
                    });
            }

            //Iterate over the current set of matched elements
            /*return this.each(function() {

                var o = options;
                var artist = o.target;
                var e = o.targetHandler;

                            $.ajax({
                                    type: 'GET',
                                    dataType: 'json',
                                    url: 'http://ws.audioscrobbler.com/2.0/?method=artist.search&limit=3&artist='+artist+'&api_key=dd5a33741258754e14204cbe9c9bdf1d&format=json', 
                                    crossDomain: true,
                                    success: function(data) {
                                         if(data) {
                                            if(window.console) {console.log('Completed!');}
                                            console.log(data);
                                            displayData(data,e);
                                        }
                                    }
                            });
                
            });*/

            function displayData(data,e) {

                        $('#'+options['target']).html('');
                        $.each(data.results.artistmatches.artist, function(i, val){
                        var div = document.createElement('div');
                        div.setAttribute("class", "match");
                        div.style.backgroundImage = "url('" + val.image[1]['#text'] + "')";

                        var a = document.createElement('a');
                        a.href = val.url;
                        a.target = "_blank";
                        a.innerHTML = val.name;

                        div.appendChild(a);
                        $('#'+options['target']).append(div);
                        });
          }
          return this;
        }
        
    });
     
//pass jQuery to the function,
//So that we will able to use any valid Javascript variable name
//to replace "$" SIGN. But, we'll stick to $ (I like dollar sign: ) )      
})(jQuery);
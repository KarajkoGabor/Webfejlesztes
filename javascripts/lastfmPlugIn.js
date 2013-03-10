//You need an anonymous function to wrap around your function to avoid conflict
(function($){
 
    //Attach this new method to jQuery
    $.fn.extend({
         
        //This is where you write your plugin's name
        myLastFmAutoComplete: function(options) {

            var defaults = {
                target = null,
                minLength = 3,
                targetHandler = null,
            };

            var options = $.extend(defaults,options);
 
            //Iterate over the current set of matched elements
            return this.each(function() {

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
                                            _displayData(data,e);
                                        }
                                    }
                            });
                


                //code to be inserted here
             
            });

            function _displayData(data,e) {

                     var $e = $(e);

                     //var markup = options.tpl;

                     //get target container
                     var out = (e),
                         //get items
                         items = data.results.artistmatches.artist.name,

                         //get number of items
                         //n = items.length,

                         //init output is empty
                         output = '',

                         //create an element ul with id specified
                         ul = $("<ul/>");


                         //loop through items and build the output
                         for(var i=0;i<n;i++) {
                            var li = document.createElement('li');
                            li.id = i;
                            li.innerHTML = items[i];
                            ul.append(li);
                         }


                         //append to the container target
                         $e.append(ul);
          };
        }
    });
     
//pass jQuery to the function,
//So that we will able to use any valid Javascript variable name
//to replace "$" SIGN. But, we'll stick to $ (I like dollar sign: ) )      
})(jQuery);
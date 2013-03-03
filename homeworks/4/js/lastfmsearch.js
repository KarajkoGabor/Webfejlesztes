$(function() {

	/* Create a cache object */
	var cache = new LastFMCache();

	/* Create a LastFM object */
	var lastfm = new LastFM({
		apiKey    : 'dd5a33741258754e14204cbe9c9bdf1d',
		apiSecret : 'aa459d1ebf42efdf95eeadb7ca3f1863',
		cache     : cache
	});

	/* Load some artist info. */
	lastfm.artist.getInfo({artist: 'Foo Fighters'}, {success: function(data){
		/* Use data. */
	}, error: function(code, message){
		/* Show error message. */
	}});

	$('#searchInput').autocomplete({
  		target: $('#searchOutput'), 
  		targetHandler: function(data){},

	});

});
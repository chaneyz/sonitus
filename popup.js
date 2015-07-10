SC.initialize({
	client_id: '3d1746839998bc4e91044f6d1c5421cd'
});

$(document).ready(function() {
	SC.stream("/tracks/293", function(sound){
  		sound.play();
	});

	var routerConfig = {
		routes: {
			'': 'menu',
			'menu': 'menu',
			'playlist': 'playlist'
		},

		menu: function() {
			console.log('menu test');
			$('.page').hide();
			$('#playlist').hide();
			$('#menu').show();
		},

		playlist: function() {
			console.log('test 2');
			$('.page').hide();
			$('#menu').hide();
			$('#playlist').show();
		},
	}
	
	var app = Backbone.Router.extend(routerConfig);

	var myRouter = new app();
	Backbone.history.start();
});


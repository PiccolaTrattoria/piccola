 var userFeed = new Instafeed({
        get: 'user',
        userId: '575314096',
        accessToken: '575314096.ba4c844.2fe22c446b204cd0b76991348fc3670e',
 		resolution: 'thumbnail',
 		limit: '16',
 		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
     });
     userFeed.run();
 var userFeed = new Instafeed({
         get: 'user',
         userId: '3107725209',
         clientId: '1e35a2d87bdb4edd87788bdbbdfc278b',
 		resolution: 'thumbnail',
 		limit: '16',
 		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
     });
     userFeed.run();
 var userFeed = new Instafeed({
         get: 'user',
         userId: '575314096',
         clientId: '4829a8fff1844e56a493538524786771',
 		resolution: 'thumbnail',
 		limit: '16',
 		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
     });
     userFeed.run();
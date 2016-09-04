 var userFeed = new Instafeed({
         get: 'user',
         userId: '575314096',
         clientId: '0df35003f2cb401180a91ec3d9de8c42',
 		resolution: 'thumbnail',
 		limit: '16',
 		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
     });
     userFeed.run();
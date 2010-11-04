$(document).ready(function(){
//  var prefix = '/public/folio/';
  var prefix = 'http://static.itsabt.me/folio/';
//      pprefix = '/public/images/plrd/',
//      qprefix = '/public/images/paper/',
//      tprefix = '/public/images/thmb/',
//      rprefix = '/public/images/rnd/';
      
  var folio = {
    "name": "uttara's folio",
    "ngroups": 12,
    "pgroups": {
      "group1": {
        "title" : "Himachal Pradesh Tourism",
        "thumb" : "uttara_0023c7bb731e639888bc5803ce67b9c583a69c95383e8c5a99b292af.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_0023c7bb731e639888bc5803ce67b9c583a69c95383e8c5a99b292af.png",
    "http://static.itsabt.me/folio/uttara_fcaa74946c749a9bed13f2bb24558d9c7e8836980ce37f45883eba8c.png"
        ]
      },
      "group2": {
        "title" : "Archies - Friendship's Day",
        "thumb" : "uttara_13cb1da3244857c131cde472c6617258a2eb7a584b2e35fbe43467b5.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_13cb1da3244857c131cde472c6617258a2eb7a584b2e35fbe43467b5.png",
    "http://static.itsabt.me/folio/uttara_33dab40e7122efdbff5f2e12b3600822314cd407d369f897179cb8fb.png",
    "http://static.itsabt.me/folio/uttara_1764a2a926a368844448da5d9eee35ce60b86d6968470f144a472d14.png"
        ]
      },
      "group3": {
        "title" : "Pathways World School",
        "thumb" : "uttara_9bce41c69ccb62382165af39c20874b30e967d0587cc29ed6814731b.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_9bce41c69ccb62382165af39c20874b30e967d0587cc29ed6814731b.png",
    "http://static.itsabt.me/folio/uttara_31b232c8aa62019c6eb8852d7bd1dfc6560477d39d0827c14e216461.png",
    "http://static.itsabt.me/folio/uttara_d0c0f90ea144d13c0d6f270dcf6fe095a3d6b92c80d1459a3d330c9b.png",
    "http://static.itsabt.me/folio/uttara_47aea208d47e5650f4372eb4428e3bbd5a989ec98da93d2b4118a646.png",
    "http://static.itsabt.me/folio/uttara_f992e816765b9e7adbe33e1883b8c28fbf5bfcd04b0abe6addb99f8f.png"
        ]
      },
      "group4": {
        "title" : "Park IT",
        "thumb" : "uttara_4c5d2f63e9fb47951e9e616237521b7f2f63bb4cb27821c852c97eba.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_4c5d2f63e9fb47951e9e616237521b7f2f63bb4cb27821c852c97eba.png",
    "http://static.itsabt.me/folio/uttara_d42b0b2e93abd252026ab3b3459be1556597c817973ee20d3b6fe724.png",
    "http://static.itsabt.me/folio/uttara_970f19e8773f580f32c497629d6e458977349534b44614a20a7e608a.png"
        ]
      },
      "group5": {
        "title" : "Archies - Mother's Day",
        "thumb" : "uttara_0b5457d6bc503e7be1cf06b7299657251b06f1ee3f684c6b26de7954.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_0b5457d6bc503e7be1cf06b7299657251b06f1ee3f684c6b26de7954.png",
    "http://static.itsabt.me/folio/uttara_ab004921d152824e393154608f6fbab36ebdd1236ef6fdd586d3a9d1.png"
        ]
      },
      "group6": {
        "title" : "Park IT",
        "thumb" : "uttara_5e43567df51b307e69de1f5b7291459e844447ce5f6a3bb5a6cea166.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_5e43567df51b307e69de1f5b7291459e844447ce5f6a3bb5a6cea166.png",
    "http://static.itsabt.me/folio/uttara_72f3e64aff94ec8a91899cd2291816973198c3fb0a356a1ce9573bea.png"
        ]
      },
      "group7": {
        "title" : "Starkey Hearing Aids",
        "thumb" : "uttara_5a16bd246eb1c14f33b7feeaea0b57dcb004cc2820a13869cf8c3638.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_5a16bd246eb1c14f33b7feeaea0b57dcb004cc2820a13869cf8c3638.png",
    "http://static.itsabt.me/folio/uttara_8a34403f9d7d4579c75583ae9da99058cfe39ed62f129a5ba7d605c4.png"
        ]
      },
      "group8": {
        "title" : "Archies Dual Ad",
        "thumb" : "uttara_9fcfbb191e71a03f4650e11e84ce68fa1a4fef3ddb5ab1b6f141d061.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_9fcfbb191e71a03f4650e11e84ce68fa1a4fef3ddb5ab1b6f141d061.png",
    "http://static.itsabt.me/folio/uttara_118b96bb7e53c9c962faa283b0cd30605a04f723670bc9e70a60bf83.png"
        ]
      },
      "group9": {
        "title" : "Pathways World School",
        "thumb" : "uttara_41915a43ddb032a9bc0ef1102f0dff299ced4eeb8aac7743f045e1fb.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_41915a43ddb032a9bc0ef1102f0dff299ced4eeb8aac7743f045e1fb.png"
        ]
      },
      "group10": {
        "title" : "Pathways World School",
        "thumb" : "uttara_4fcc460c68114827ad396d45f926ec7c96c8330abf7541f3b393d613.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_4fcc460c68114827ad396d45f926ec7c96c8330abf7541f3b393d613.png",
    "http://static.itsabt.me/folio/uttara_8f604cd961c3c34402c184f830e76861f458706916ed20ccaf9358cb.png"
        ]
      },
      "group11": {
        "title" : "Planet HollyWood",
        "thumb" : "uttara_6d0ed5a61ea8f5b0b9f98d6f6746540b9f7a1f66b0e9c776d7a94025.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_6d0ed5a61ea8f5b0b9f98d6f6746540b9f7a1f66b0e9c776d7a94025.png",
    "http://static.itsabt.me/folio/uttara_50227ce9d88010f6e2c8e9b999d1ec0f4db489cf35bcc8690bfe0b80.png",
    "http://static.itsabt.me/folio/uttara_c2692827cbd957701bb6400841b1cd2a8a27f3718bd6d10201b3ce71.png",
    "http://static.itsabt.me/folio/uttara_c88cef3a8a6bb453258e952b24be2e463264e1928e747698b8055331.png"
        ]
      },
      "group12": {
        "title" : "Boyz N Girls",
        "thumb" : "uttara_4c76918ee653840e4ec5a194ecaf9a2e933b85d6562dfeb1e988c032.png",
        "width" : "200",
        "height" : "150",
        "images" : [
    "http://static.itsabt.me/folio/uttara_4c76918ee653840e4ec5a194ecaf9a2e933b85d6562dfeb1e988c032.png"
        ]
      }
    }
  };
  
  for (var i = 1; i <= folio.ngroups; i++) {
    var group = "group" + i;
    var prj = folio.pgroups[group];
    var images = prj.images;
    var project = $("div.work ul li.hide").clone();
    
    for (var j = 1; j <= prj.images.length; j++) {
      var img = prj.images[i];
      var gr = $("a.tmp", project).clone();
      gr.attr("src", img);
      gr.attr("rel", group);
      gr.removeClass("tmp").appendTo(project);
    }
    $("a.tmp", project).remove();
    $("img", project).attr("src", prefix + prj.thumb);
    $("a.thumb", project).attr("rel", group);
    $("a.thumb", project).attr("title", prj.title);
    
    project.removeClass("hide").appendTo("div.work ul");
  }
  
  $('a.thumb').tipsy({ live: true, gravity: 'n' });
  
  $("a.thumb[rel=group1]").click(function(){
    var images = [
      "http://static.itsabt.me/folio/uttara_0023c7bb731e639888bc5803ce67b9c583a69c95383e8c5a99b292af.png",
      "http://static.itsabt.me/folio/uttara_fcaa74946c749a9bed13f2bb24558d9c7e8836980ce37f45883eba8c.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'inside',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Himachal Pradesh Tourism - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });
  $("a.thumb[rel=group2]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_13cb1da3244857c131cde472c6617258a2eb7a584b2e35fbe43467b5.png",
    "http://static.itsabt.me/folio/uttara_33dab40e7122efdbff5f2e12b3600822314cd407d369f897179cb8fb.png",
    "http://static.itsabt.me/folio/uttara_1764a2a926a368844448da5d9eee35ce60b86d6968470f144a472d14.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Archies - Friendship’s Day - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });

  $("a.thumb[rel=group3]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_9bce41c69ccb62382165af39c20874b30e967d0587cc29ed6814731b.png",
    "http://static.itsabt.me/folio/uttara_31b232c8aa62019c6eb8852d7bd1dfc6560477d39d0827c14e216461.png",
    "http://static.itsabt.me/folio/uttara_d0c0f90ea144d13c0d6f270dcf6fe095a3d6b92c80d1459a3d330c9b.png",
    "http://static.itsabt.me/folio/uttara_47aea208d47e5650f4372eb4428e3bbd5a989ec98da93d2b4118a646.png",
    "http://static.itsabt.me/folio/uttara_f992e816765b9e7adbe33e1883b8c28fbf5bfcd04b0abe6addb99f8f.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Pathways World School - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });

  $("a.thumb[rel=group4]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_4c5d2f63e9fb47951e9e616237521b7f2f63bb4cb27821c852c97eba.png",
    "http://static.itsabt.me/folio/uttara_d42b0b2e93abd252026ab3b3459be1556597c817973ee20d3b6fe724.png",
    "http://static.itsabt.me/folio/uttara_970f19e8773f580f32c497629d6e458977349534b44614a20a7e608a.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Park IT - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });

  $("a.thumb[rel=group5]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_0b5457d6bc503e7be1cf06b7299657251b06f1ee3f684c6b26de7954.png",
    "http://static.itsabt.me/folio/uttara_ab004921d152824e393154608f6fbab36ebdd1236ef6fdd586d3a9d1.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Archies - Mother’s Day - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });

  $("a.thumb[rel=group6]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_5e43567df51b307e69de1f5b7291459e844447ce5f6a3bb5a6cea166.png",
    "http://static.itsabt.me/folio/uttara_72f3e64aff94ec8a91899cd2291816973198c3fb0a356a1ce9573bea.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Park IT - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });

  $("a.thumb[rel=group7]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_5a16bd246eb1c14f33b7feeaea0b57dcb004cc2820a13869cf8c3638.png",
    "http://static.itsabt.me/folio/uttara_8a34403f9d7d4579c75583ae9da99058cfe39ed62f129a5ba7d605c4.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Starkey Hearing Aids - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });

  $("a.thumb[rel=group8]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_9fcfbb191e71a03f4650e11e84ce68fa1a4fef3ddb5ab1b6f141d061.png",
    "http://static.itsabt.me/folio/uttara_118b96bb7e53c9c962faa283b0cd30605a04f723670bc9e70a60bf83.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Archies Dual Ad - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });

  $("a.thumb[rel=group9]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_41915a43ddb032a9bc0ef1102f0dff299ced4eeb8aac7743f045e1fb.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Pathways World School - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });

  $("a.thumb[rel=group10]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_4fcc460c68114827ad396d45f926ec7c96c8330abf7541f3b393d613.png",
    "http://static.itsabt.me/folio/uttara_8f604cd961c3c34402c184f830e76861f458706916ed20ccaf9358cb.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Pathways World School - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });

  $("a.thumb[rel=group11]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_6d0ed5a61ea8f5b0b9f98d6f6746540b9f7a1f66b0e9c776d7a94025.png",
    "http://static.itsabt.me/folio/uttara_50227ce9d88010f6e2c8e9b999d1ec0f4db489cf35bcc8690bfe0b80.png",
    "http://static.itsabt.me/folio/uttara_c2692827cbd957701bb6400841b1cd2a8a27f3718bd6d10201b3ce71.png",
    "http://static.itsabt.me/folio/uttara_c88cef3a8a6bb453258e952b24be2e463264e1928e747698b8055331.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Planet Hollywood - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });

  $("a.thumb[rel=group12]").click(function(){
    var images = [
    "http://static.itsabt.me/folio/uttara_4c76918ee653840e4ec5a194ecaf9a2e933b85d6562dfeb1e988c032.png"
    ];
    $.fancybox(images, {
      'padding'     : 0,
      'type'        : 'image',
      'speedIn'     : 600, 
      'speedOut'    : 200, 
      'overlayShow' : true,
//      'titlePosition'   : 'over',
      'titleFormat': function(title, currentArray, currentIndex, currentOpts){
        return '<span id="fancybox-title-over">Boyz N Girls - ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
      }
    });
  });
});

function ImageExist(url)
{
  var img = new Image();
  img.src = url;
  return img.height != 0;
}

$('#tokenfield').tokenfield({
  autocomplete: {
    //source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
    //  delay: 100
  },
  showAutocompleteOnFocus: true
});

$.ajax({
  url : '/discover/location',
  type : 'GET',
  // dataType : 'html',
  success : function(code_html, statut){
    //console.log("toktok");
    //console.log(code_html);
    //console.log(code_html.mine);
    var k = 0;
    for(var j= 0; j < code_html.length - 1; j++)
    {
      if(code_html[j].email == code_html[code_html.length - 1].mine)
      {
        k = j;
      }
    }
    //console.log("petit_peter");
    //console.log(typeof(code_html[k]));
    //console.log(code_html[k]);
    var sexuality;
    var sex;
    if(code_html[k].sexuality)
    {
      if(code_html[k].sexuality == "")
      {
        sexuality = "Bisexual";
      }
      else {
        sexuality = code_html[k].sexuality;
      }
    }
    else {
      sexuality = "Bisexual";
    }
    if(code_html[k].sex)
    {
      if(code_html[k].sex == "")
      {
        sex = "";
      }
      else {
        sex = code_html[k].sex;
      }
    }
    else {
      sex = "";
    }
    //console.log("grapin");
    //console.log(code_html);
    for(var i= 0; i < code_html.length - 1; i++)
    {

      //  //console.log(ImageExist("/"+code_html[i].email+"/photo1.png"));
      // if(ImageExist("/"+code_html[i].email+"/photo1.png") == true)
      // {
      // //console.log(code_html);
      // //console.log(code_html[i].email);
      // //console.log('DETER');
      // //console.log(code_html[code_html.length - 1]);
      // //console.log('DETER2');
      // //console.log(code_html[i].email);
      // //console.log(code_html[code_html.length - 1]);
      //console.log("tonnerre1");
      //console.log(code_html[i]);
      //console.log($("#age_from").val());
      //console.log($("#age_to").val());
      //console.log($("#popularity_from").val());
      //console.log($("#popularity_to").val());
      //console.log($("#tags").val());
      //console.log($("#location").val());
      //console.log("tonnerre2");
      //console.log(code_html[k].block);
      //console.log(code_html[i].email);
      //console.log(code_html[k].block.indexOf(code_html[i].email));
      var sexuality2;
      var sex2;
      if(code_html[i].sexuality)
      {
        if(code_html[i].sexuality == "")
        {
          sexuality2 = "Bisexual";
        }
        else {
          sexuality2 = code_html[i].sexuality;
        }
      }
      else {
        sexuality2 = "Bisexual";
      }
      if(code_html[i].sex)
      {
        if(code_html[i].sex == "")
        {
          sex2 = "";
        }
        else {
          sex2 = code_html[i].sex;
        }
      }
      else {
        sex2 = "";
      }
      //console.log("tka");
      //console.log(sex2);
      //console.log(sexuality);
      if(sexuality == "Bisexual" || sexuality == "open-minded")
      {
        //console.log("tinder");
        if(code_html[i].email != code_html[code_html.length - 1].mine && code_html[k].block.indexOf(code_html[i].email) == -1)
        {
          $('#main2').append('<div class="col-lg-3 col-md-6"><div class="widget widget-shadow"><div class="widget-header bg-green-600 padding-30 white"><a class="avatar avatar-100" onclick="mini_profil(`'+code_html[i].email+'`);" img-bordered bg-white pull-left margin-right-20" href="javascript:void(0)"><img style="width : 40px; height : 40px;" alt="" src= "/'+code_html[i].email+'/photo1.png"></a><div class="vertical-align height-100 text-truncate"><div class="vertical-align-middle"><div class="font-size-20 margin-bottom-5 text-truncate">'+code_html[i].firstname+' '+code_html[i].surname+'</div><div class="font-size-20 margin-bottom-5 text-truncate">Age : '+code_html[i].age+'</div><div class="font-size-20 margin-bottom-5 text-truncate">popularity : '+code_html[i].popularity+'</div></div></div></div></div></div>');
        }
      }
      else if (sexuality == "Straight" && (sex == "woman" || sex == "")) {
        if((sex2 == "man" || sex2 == "") && code_html[i].email != code_html[code_html.length - 1].mine && code_html[k].block.indexOf(code_html[i].email) == -1)
        {
          $('#main2').append('<div class="col-lg-3 col-md-6"><div class="widget widget-shadow"><div class="widget-header bg-green-600 padding-30 white"><a class="avatar avatar-100" onclick="mini_profil(`'+code_html[i].email+'`);" img-bordered bg-white pull-left margin-right-20" href="javascript:void(0)"><img style="width : 40px; height : 40px;" alt="" src= "/'+code_html[i].email+'/photo1.png"></a><div class="vertical-align height-100 text-truncate"><div class="vertical-align-middle"><div class="font-size-20 margin-bottom-5 text-truncate">'+code_html[i].firstname+' '+code_html[i].surname+'</div><div class="font-size-20 margin-bottom-5 text-truncate">Age : '+code_html[i].age+'</div><div class="font-size-20 margin-bottom-5 text-truncate">popularity : '+code_html[i].popularity+'</div></div></div></div></div></div>');
        }
      }
      else if (sexuality == "Straight" && (sex == "man" || sex == "")) {
        if((sex2 == "woman" || sex2 == "") && code_html[i].email != code_html[code_html.length - 1].mine && code_html[k].block.indexOf(code_html[i].email) == -1)
        {
          $('#main2').append('<div class="col-lg-3 col-md-6"><div class="widget widget-shadow"><div class="widget-header bg-green-600 padding-30 white"><a class="avatar avatar-100" onclick="mini_profil(`'+code_html[i].email+'`);" img-bordered bg-white pull-left margin-right-20" href="javascript:void(0)"><img style="width : 40px; height : 40px;" alt="" src= "/'+code_html[i].email+'/photo1.png"></a><div class="vertical-align height-100 text-truncate"><div class="vertical-align-middle"><div class="font-size-20 margin-bottom-5 text-truncate">'+code_html[i].firstname+' '+code_html[i].surname+'</div><div class="font-size-20 margin-bottom-5 text-truncate">Age : '+code_html[i].age+'</div><div class="font-size-20 margin-bottom-5 text-truncate">popularity : '+code_html[i].popularity+'</div></div></div></div></div></div>');
        }
      }
      else if (sexuality == "Gay" && (sex == "man" || sex == "")) {
        if((sex2 == "man" || sex2 == "") && code_html[i].email != code_html[code_html.length - 1].mine && code_html[k].block.indexOf(code_html[i].email) == -1)
        {
          $('#main2').append('<div class="col-lg-3 col-md-6"><div class="widget widget-shadow"><div class="widget-header bg-green-600 padding-30 white"><a class="avatar avatar-100" onclick="mini_profil(`'+code_html[i].email+'`);" img-bordered bg-white pull-left margin-right-20" href="javascript:void(0)"><img style="width : 40px; height : 40px;" alt="" src= "/'+code_html[i].email+'/photo1.png"></a><div class="vertical-align height-100 text-truncate"><div class="vertical-align-middle"><div class="font-size-20 margin-bottom-5 text-truncate">'+code_html[i].firstname+' '+code_html[i].surname+'</div><div class="font-size-20 margin-bottom-5 text-truncate">Age : '+code_html[i].age+'</div><div class="font-size-20 margin-bottom-5 text-truncate">popularity : '+code_html[i].popularity+'</div></div></div></div></div></div>');
        }
      }
      else if (sexuality == "Gay" && (sex == "woman" || sex == "")) {
        if((sex2 == "woman" || sex2 == "") && code_html[i].email != code_html[code_html.length - 1].mine && code_html[k].block.indexOf(code_html[i].email) == -1)
        {
          $('#main2').append('<div class="col-lg-3 col-md-6"><div class="widget widget-shadow"><div class="widget-header bg-green-600 padding-30 white"><a class="avatar avatar-100" onclick="mini_profil(`'+code_html[i].email+'`);" img-bordered bg-white pull-left margin-right-20" href="javascript:void(0)"><img style="width : 40px; height : 40px;" alt="" src= "/'+code_html[i].email+'/photo1.png"></a><div class="vertical-align height-100 text-truncate"><div class="vertical-align-middle"><div class="font-size-20 margin-bottom-5 text-truncate">'+code_html[i].firstname+' '+code_html[i].surname+'</div><div class="font-size-20 margin-bottom-5 text-truncate">Age : '+code_html[i].age+'</div><div class="font-size-20 margin-bottom-5 text-truncate">popularity : '+code_html[i].popularity+'</div></div></div></div></div></div>');
        }
      }


    }
  },
  error : function(resultat, statut, erreur){
    //console.log("pierromoutarde");
  },
});

function filter(code_html){
  //console.log("toktok");
  //console.log(code_html);
  //console.log(code_html.mine);
  var k = 0;
  for(var j= 0; j < code_html.length - 1; j++)
  {
    if(code_html[j].email == code_html[code_html.length - 1].mine)
    {
      k = j;
    }
  }
  //console.log("grand_peter");
  //console.log(typeof(code_html[k]));
  //console.log(code_html[k].sexuality);
  var sexuality;
  var sex;
  if(code_html[k].sexuality)
  {
    if(code_html[k].sexuality == "")
    {
      sexuality = "Bisexual";
    }
    else {
      sexuality = code_html[k].sexuality;
    }
  }
  else {
    sexuality = "Bisexual";
  }
  if(code_html[k].sex)
  {
    if(code_html[k].sex == "")
    {
      sex = "";
    }
    else {
      sex = code_html[k].sex;
    }
  }
  else {
    sex = "";
  }
  var j = 0;
  var tokenfield = $("#tokenfield").val();
  //console.log("ti-bag");
  //console.log(tokenfield);
  var table2 = [];
  if(tokenfield)
  {
    var table2 = tokenfield.split(",");
    var table3 = [];
    //console.log("2");
    while(j < code_html.length)
    {
      table3[j] = 0;
      j++;
    }
    j = 0;
    //console.log("3");
    while (j < table2.length)
    {
      var L = 0;
      while(L < code_html.length)
      {
        if(code_html[L].tokenfield && code_html[L].tokenfield.indexOf(table2[j].trim()) >= 0)
        {
          table3[L] = table3[L] + 1;
        }
        L++;
      }
      j++;
    }
    i = 0;
    //console.log("jardinno");
    //console.log(table3);
    //console.log("4");
    while(i < code_html.length)
    {
      code_html[i]["ponderation"] = table3[i];
      i++;
    }
  }
  var ponderation = $("#tags").val();
  //console.log("titeuf");
  //console.log(ponderation);
  if(ponderation == "")
  {
    ponderation = 0;
  }
  else if (isNaN(ponderation) == 'true') {
    ponderation = 0;
  }
  //console.log("terre,lune,mars");
  //console.log(code_html);
  for(var i= 0; i < code_html.length - 1; i++)
  {
    var age_from;
    var age_to;
    var popularity_from;
    var popularity_to;
    var tags;
    var location;

    //console.log("tonnerre1");
    if($("#age_from").val())
    {
      age_from = $("#age_from").val();
      ////console.log($("#age_from").val());
    }
    else {
      age_from = -10000000;
    }
    if($("#age_to").val())
    {
      age_to = $("#age_to").val();
      ////console.log($("#age_from").val());
    }
    else {
      age_to = 1000000000;
    }
    if($("#popularity_from").val())
    {
      popularity_from = $("#popularity_from").val();
      ////console.log($("#age_from").val());
    }
    else {
      popularity_from = -1000000000;
    }
    if($("#popularity_to").val())
    {
      popularity_to = $("#popularity_to").val();
      ////console.log($("#age_to").val());
    }
    else {
      popularity_to = 100000000000;
    }
    if($("#tags").val())
    {
      tags = $("#tags").val();
      ////console.log($("#age_to").val());
    }
    else {
      tags = 100000000000;
    }
    if($("#location").val() == 0)
    {
      location = 50000000;
      ////console.log($("#age_to").val());
    }
    else if ($("#location").val() == 1) {
      location = 50000;
    }
    else if ($("#location").val() == 2) {
      location = 100000;
    }
    else if ($("#location").val() == 3) {
      location = 500000;
    }
    //console.log($("#tags").val());
    //console.log($("#location").val());
    //console.log("tonnerre2");
    //console.log(code_html[i].distance);
    //console.log(location);
    //console.log($("#location").val());
    var sexuality2;
    var sex2;
    if(code_html[i].sexuality)
    {
      if(code_html[i].sexuality == "")
      {
        sexuality2 = "Bisexual";
      }
      else {
        sexuality2 = code_html[i].sexuality;
      }
    }
    else {
      sexuality2 = "Bisexual";
    }
    if(code_html[i].sex)
    {
      if(code_html[i].sex == "")
      {
        sex2 = "";
      }
      else {
        sex2 = code_html[i].sex;
      }
    }
    else {
      sex2 = "";
    }
    //console.log("terrebrune");
    //console.log(sexuality);
    //console.log(code_html[i].ponderation);
    //console.log(table2.length);
    var ponderation = code_html[i].ponderation;
    if (!code_html[i].ponderation)
    {
      ponderation = 0;
    }
    if(sexuality == "Bisexual" || sexuality == "open-minded")
    {
    //  code_html[i].ponderation ==
      if( ponderation == table2.length && code_html[i].email != code_html[code_html.length - 1].mine && code_html[i].distance < location && code_html[i].age > age_from && code_html[i].age < age_to && code_html[k].block.indexOf(code_html[i].email) == -1 && code_html[i].popularity > popularity_from && code_html[i].popularity < popularity_to)
      {
        $('#main2').append('<div class="col-lg-3 col-md-6"><div class="widget widget-shadow"><div class="widget-header bg-green-600 padding-30 white"><a class="avatar avatar-100" onclick="mini_profil(`'+code_html[i].email+'`);" img-bordered bg-white pull-left margin-right-20" href="javascript:void(0)"><img style="width : 40px; height : 40px;" alt="" src= "/'+code_html[i].email+'/photo1.png" alt=""></a><div class="vertical-align height-100 text-truncate"><div class="vertical-align-middle"><div class="font-size-20 margin-bottom-5 text-truncate">'+code_html[i].firstname+' '+code_html[i].surname+'</div><div class="font-size-20 margin-bottom-5 text-truncate">Age : '+code_html[i].age+'</div><div class="font-size-20 margin-bottom-5 text-truncate">popularity : '+code_html[i].popularity+'</div></div></div></div></div></div>');
      }
    }
    else if (sexuality == "Straight" && (sex == "woman" || sex == "")) {
      if(ponderation == table2.length && (sex2 == "man" || sex2 == "") && code_html[i].email != code_html[code_html.length - 1].mine && code_html[i].distance < location && code_html[i].age > age_from && code_html[i].age < age_to && code_html[k].block.indexOf(code_html[i].email) == -1 && code_html[i].popularity > popularity_from && code_html[i].popularity < popularity_to)
      {
        $('#main2').append('<div class="col-lg-3 col-md-6"><div class="widget widget-shadow"><div class="widget-header bg-green-600 padding-30 white"><a class="avatar avatar-100" onclick="mini_profil(`'+code_html[i].email+'`);" img-bordered bg-white pull-left margin-right-20" href="javascript:void(0)"><img style="width : 40px; height : 40px;" alt="" src= "/'+code_html[i].email+'/photo1.png" alt=""></a><div class="vertical-align height-100 text-truncate"><div class="vertical-align-middle"><div class="font-size-20 margin-bottom-5 text-truncate">'+code_html[i].firstname+' '+code_html[i].surname+'</div><div class="font-size-20 margin-bottom-5 text-truncate">Age : '+code_html[i].age+'</div><div class="font-size-20 margin-bottom-5 text-truncate">popularity : '+code_html[i].popularity+'</div></div></div></div></div></div>');
      }
    }
    else if (sexuality == "Straight" && (sex == "man" || sex == "")) {
      if(ponderation == table2.length && (sex2 == "woman" || sex2 == "") && code_html[i].email != code_html[code_html.length - 1].mine && code_html[i].distance < location && code_html[i].age > age_from && code_html[i].age < age_to && code_html[k].block.indexOf(code_html[i].email) == -1 && code_html[i].popularity > popularity_from && code_html[i].popularity < popularity_to)
      {
        $('#main2').append('<div class="col-lg-3 col-md-6"><div class="widget widget-shadow"><div class="widget-header bg-green-600 padding-30 white"><a class="avatar avatar-100" onclick="mini_profil(`'+code_html[i].email+'`);" img-bordered bg-white pull-left margin-right-20" href="javascript:void(0)"><img style="width : 40px; height : 40px;" alt="" src= "/'+code_html[i].email+'/photo1.png" alt=""></a><div class="vertical-align height-100 text-truncate"><div class="vertical-align-middle"><div class="font-size-20 margin-bottom-5 text-truncate">'+code_html[i].firstname+' '+code_html[i].surname+'</div><div class="font-size-20 margin-bottom-5 text-truncate">Age : '+code_html[i].age+'</div><div class="font-size-20 margin-bottom-5 text-truncate">popularity : '+code_html[i].popularity+'</div></div></div></div></div></div>');
      }
    }
    else if (sexuality == "Gay" && (sex == "man" || sex == "")) {
      if(ponderation == table2.length && (sex2 == "man" || sex2 == "") && code_html[i].email != code_html[code_html.length - 1].mine && code_html[i].distance < location && code_html[i].age > age_from && code_html[i].age < age_to && code_html[k].block.indexOf(code_html[i].email) == -1 && code_html[i].popularity > popularity_from && code_html[i].popularity < popularity_to)
      {
        $('#main2').append('<div class="col-lg-3 col-md-6"><div class="widget widget-shadow"><div class="widget-header bg-green-600 padding-30 white"><a class="avatar avatar-100" onclick="mini_profil(`'+code_html[i].email+'`);" img-bordered bg-white pull-left margin-right-20" href="javascript:void(0)"><img style="width : 40px; height : 40px;" alt="" src= "/'+code_html[i].email+'/photo1.png" alt=""></a><div class="vertical-align height-100 text-truncate"><div class="vertical-align-middle"><div class="font-size-20 margin-bottom-5 text-truncate">'+code_html[i].firstname+' '+code_html[i].surname+'</div><div class="font-size-20 margin-bottom-5 text-truncate">Age : '+code_html[i].age+'</div><div class="font-size-20 margin-bottom-5 text-truncate">popularity : '+code_html[i].popularity+'</div></div></div></div></div></div>');
      }
    }
    else if (sexuality == "Gay" && (sex == "woman" || sex == "")) {
      if(ponderation == table2.length && (sex2 == "woman" || sex2 == "") && code_html[i].email != code_html[code_html.length - 1].mine && code_html[i].distance < location && code_html[i].age > age_from && code_html[i].age < age_to && code_html[k].block.indexOf(code_html[i].email) == -1 && code_html[i].popularity > popularity_from && code_html[i].popularity < popularity_to)
      {
        $('#main2').append('<div class="col-lg-3 col-md-6"><div class="widget widget-shadow"><div class="widget-header bg-green-600 padding-30 white"><a class="avatar avatar-100" onclick="mini_profil(`'+code_html[i].email+'`);" img-bordered bg-white pull-left margin-right-20" href="javascript:void(0)"><img style="width : 40px; height : 40px;" alt="" src= "/'+code_html[i].email+'/photo1.png" alt=""></a><div class="vertical-align height-100 text-truncate"><div class="vertical-align-middle"><div class="font-size-20 margin-bottom-5 text-truncate">'+code_html[i].firstname+' '+code_html[i].surname+'</div><div class="font-size-20 margin-bottom-5 text-truncate">Age : '+code_html[i].age+'</div><div class="font-size-20 margin-bottom-5 text-truncate">popularity : '+code_html[i].popularity+'</div></div></div></div></div></div>');
      }
    }

  }


}
//
$("#submit").click(function(){
  //console.log("titi");
  //console.log($("#sort").val());
  if($("#sort").val() == 0){
    $.ajax({
      url : '/discover/location',
      type : 'GET',
      // dataType : 'html',
      success : function(code_html, statut){
        $("#main2").empty();
        filter(code_html);
      }
    })
  }
  else if($("#sort").val() == 1){
    $.ajax({
      url : '/discover/tags',
      type : 'GET',
      // dataType : 'html',
      success : function(code_html, statut){
        $("#main2").empty();
        filter(code_html);
      }
    })
  }
  else if ($("#sort").val() == 2){
    $.ajax({
      url : '/discover/popularity',
      type : 'GET',
      // dataType : 'html',
      success : function(code_html, statut){
        $("#main2").empty();
        filter(code_html);
      }
    })
  }
  else if ($("#sort").val() == 3){
    $.ajax({
      url : '/discover/age',
      type : 'GET',
      // dataType : 'html',
      success : function(code_html, statut){
        $("#main2").empty();
        filter(code_html);
      }
    })
  }
})



function Chat(email){
  $("#main").empty();
  // $.get("/user_profil", function(data) {
  //   $("#main").append(data);
  $.ajax({
    url : "/chat",
    type : 'GET',
    data : {'email' : email},
    success : function(code_html, statut){
      //console.log("requin");
      //console.log(code_html);
      //console.log("requin2");
      $("#main").append(code_html);
      ////console.log(code_html);
    }
  })
}

function mini_profil(email){
  //alert(email);
  $("#main").empty();
  // $.get("/user_profil", function(data) {
  //   $("#main").append(data);
  $.ajax({
    url : "/user_profil",
    type : 'GET',
    data : {'email' : email},
    success : function(code_html, statut){
      //console.log("pigeon");
      //console.log(code_html);
      //console.log("pigeon2");
      $("#main").append(code_html);
      ////console.log(code_html);
    }
  })
  // });
}
function like(email){

  $.ajax({
    url : '/discover/like_someone',
    type : 'GET',
    data : {'email' : email},
    success : function(code_html, statut){
      //console.log("toktok");
      //console.log(code_html);
    }
  })


}
// $("#site-navbar-collapse").click(function(){
//   alert();
// });

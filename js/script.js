$(document).ready(function(){
  $("#content").css({
    "background":"url(http://images.thesurge.com/app/uploads/2015/11/junk-food.jpg)",
    "background-size":"cover",
    "width":"100%",
    "height": "100vh"
  });
  $("#content").append("<header></header>");
  $("#content").append('<div id="main-section"></div>');
  $("header").append("<h1>Carlos's RESTRAANT</h1>");
  $("#main-section").append('<h1>This is an awesome restraant...</h1>');
  $("#main-section").append('<p>...aaand this site has been made entirely from javascript/jQuery. <br> Really, it\'s a big fat pain in the neck doing it this way, but I suppose it\'s good practice working with js/jquery... which is what I\'m working toward anyway.</p> <p>I know the site is ugly as all get out.. but I don\'t much care as long as it works.</p><p>Isn\'t that header a pleasant shade of purple though?</p>');
  $("header").css({
    "background-color":"#94d",
    "height":"100px",
    "width":"100%"
  });
  $("header h1").css({
    "width":"450px",
    "margin-top":"0",
    "margin":"auto",
    "padding-top":"30px",
    "text-align":"center"
  });
  $("#main-section").css({
    "background-color":"rgba(200,200,200,.6)",
    "border-radius":"10px",
    "margin":"auto",
    "padding":"0 70px 10px 70px",
    "text-align":"center",
    "width":"70%"
  });
});

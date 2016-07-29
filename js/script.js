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
  $("#main-section").append('<nav></nav>');
    $("nav").append('<div class="tabs selected-tab" id="home">home</div>');
    $("nav").append('<div class="tabs" id="menu">menu</div>');
    $("nav").append('<div class="tabs" id="contact">contact</div>');
  $("#main-section").append('<section></section>')
  loadContent("home")

  $(".tabs").click(function(){
    loadContent(this.innerHTML)
    $(".selected-tab").removeClass("selected-tab");
    $(this).addClass("selected-tab");
    //wouldn't have to do this if I had the styling in an actual css file.. but since I'm doing the whole dang thing in js, gotta change the backgrounds here.
    $(".tabs").css({
      "background-color":"rgba(100,100,100,.8)"
    });
    $(".selected-tab").css({
      "background-color":"rgba(200,200,200,.6)",
    });
  });
});

function loadContent(selector){
  $("section").empty()
  if (selector == "home") {
    $("section").append('<h1>This is an awesome restraant...</h1>');
    $("section").append('<p>...aaand this site has been made entirely from javascript/jQuery. <br> Really, it\'s a big fat pain in the neck doing it this way, but I suppose it\'s good practice working with js/jquery... which is what I\'m working toward anyway.</p> <p>I know the site is ugly as all get out.. but I don\'t much care as long as it works.</p><p>Isn\'t that header a pleasant shade of purple though?</p> <h3>really though.. there is nothing inside the htmlfile.. and there isn\'t a css file at all besides the reset.  Kinda proud of that, even if the site does look pretty lame</h3>);
  } else if (selector == "menu") {
    $("section").append('<h1>restrAAnt Menu:</h1>');
    $("section").append('<h3>tacos</h3> <h3>burgers</h3> <h3>pizza</h3> <h3>other stuff that\'ll kill ya</h3>');
  } else if (selector == "contact") {
    $("section").append('<h1>Contact the reSTRAaANT</h1>');
    $("section").append('<h2>Phone: 555-5555</h2>');
  }
  loadStyling();
};

function loadStyling(){
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
    "margin-top": "40px",
    "padding":"0 70px 10px 70px",
    "text-align":"center",
    "width":"70%"
  });
  $("nav").css({
    "position":"relative",
    "top":"-39px"
  });
  $(".tabs").css({
    "background-color":"rgba(100,100,100,.8)",
    "border-top-left-radius":"10px",
    "border-top-right-radius":"10px",
    "display":"inline-block",
    "margin":"10px 5px 0px 5px",
    "padding":"5px 10px 5px 14px"
  });
  $(".selected-tab").css({
    "background-color":"rgba(200,200,200,.6)",
  });
};

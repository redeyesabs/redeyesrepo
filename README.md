<!DOCTYPE html>
<html lang="en">
<head>
  <title>RED EYES</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
       <script src="resources/js/jquery.min.js"></script>
   <script src="resources/js/bootstrap.min.js"></script>
   <link rel="stylesheet" href="resources/css/bootstrap.min.css"> 
   
     <script data-require="angular.js@~1.3.15" data-semver="1.3.15" src="https://code.angularjs.org/1.3.15/angular.js"></script>
  <script data-require="angular-route@1.3.15" data-semver="1.3.15" src="https://code.angularjs.org/1.3.15/angular-route.js"></script>
  <script src="resources/js/script.js"></script>
  <!-- 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> -->
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;} 
    }
	#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #555;
}
  </style>
</head>
<body ng-app="single-page-app">

<nav class="navbar navbar-inverse" >
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#"><img src="resources/images/redeyeslogo.png" style="margin: -15px;padding-right:20px"></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#/">Home</a></li>
        <li><a href="#javafx">JavaFX</a></li>
        <li><a href="automation">Automation</a></li>
        <li><a href="#">Google Assistant</a></li>
		<li><a href="#/about">About</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- <div class="container-fluid text-center" style="padding-top: 10px;">    
  <div class="row content">
    <div class="col-sm-10 text-left"> 
		<div class="well" id="hellodiv">
			<h3>#1 JAVAFX HELLOWORLD APPLICATION FOR BEGINNERS</h3>
			<iframe width="100%" height="300px" 
			src="https://www.youtube.com/embed/decWs7TqWdg" 
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<p>Make hello world application in javafx with netbeans IDE.
			<br>
			<a href="https://github.com/redeyesabs/redeyesrepo/blob/javafx/HelloWorldJavaFX.rar">Download source code from </a>
			</p>
		</div>
		<div class="well" id="logindiv">
			<h3>#2 JAVAFX LOGIN PAGE USING SCENEBUILDER</h3>
			<iframe width="100%" height="300px" 
			src="https://www.youtube.com/embed/d2wBneWSDfM" 
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<p>Design login page in javafx with scenebuilder.Download source code from 
			<br>
			<a href="https://github.com/redeyesabs/redeyesrepo/blob/javafx/JavaFXLoginApplication.rar">Download source code from </a>
			</p>
		</div>
		<div class="well" id="hackerdiv">
			<h3>#3 JAVAFX HACKER CONSOLE</h3>
			<iframe width="100%" height="300px" 
			src="https://www.youtube.com/embed/FECw1GHmaOk" 
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<p>Design a hacker console application using javafx customized components
			<br>
			<a href="https://github.com/redeyesabs/redeyesrepo/blob/javafx/TransparentStage.rar">Download source code from </a>
			</p>
		</div>
		<div class="well" id="cruddiv">
			<h3>#4 JAVAFX CRUD WITH DERBY DATABASE-CREATE READ UPDATE DELETE</h3>
			<iframe width="100%" height="300px" 
			src="https://www.youtube.com/embed/hHF8Q_TnACM" 
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<p>Create a simple application in javaFX along with derby database
			<br>
			<a href="https://github.com/redeyesabs/redeyesrepo/blob/javafx/JavaFXDERBYCRUDApplication.rar">Download source code from </a>
			</p>
		</div>
		<div class="well" id="springdiv">
			<h3>#5 JAVAFX CRUD WITH SPRING+HIBERNATE+DERBY</h3>
			<iframe width="100%" height="300px" 
			src="https://www.youtube.com/embed/hHF8Q_TnACM" 
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<p>Create a simple javafx crud application with spring hibernate along with derby database.
			<br>
			<a href="https://github.com/redeyesabs/redeyesrepo/blob/javafx/JavaFXSpringHibernateExample.rar">Download source code from </a>
			</p>
		</div>
      <hr>
    </div>
    <div class="col-sm-2 sidenav">
		<p><a href="index.html#hellodiv">JAVAFX HELLOWORLD APPLICATION FOR BEGINNERS</a></p>
		<p><a href="index.html#logindiv">JAVAFX LOGIN PAGE USING SCENEBUILDER</a></p>
		<p><a href="index.html#hackerdiv">JAVAFX HACKER CONSOLE</a></p>
		<p><a href="index.html#cruddiv">JAVAFX CRUD WITH DERBY DATABASE-CREATE READ UPDATE DELETE</a></p>
		<p><a href="index.html#springdiv">JAVAFX CRUD WITH SPRING+HIBERNATE+DERBY</a></p>
    </div>
  </div>
</div> -->
<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
<div ng-view=""></div>
<footer class="container-fluid text-center">
  <p>www.redeyes.com &#169; 2020</p>
</footer>

</body>
<script>
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>
</html>

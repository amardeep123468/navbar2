import React from 'react'
import CSS from './App.css'

function App() {

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
   

  return (
    <>
    <div class="topnav" id="myTopnav">
  <a href="#home" class="active"> Home </a>
  <a href="https://www.zeebiz.com/topics/it-companies" target={'_blank'}> News </a>
  <a href="#contact"> Contact </a>

  <a href="#about"> About </a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<h1> Hello... My name is <a class='amardeep' href='https://www.linkedin.com/in/amardeep-singh-chauhan-9920741b7/' target={'_blank'}>Amardeep</a> Singh Chauhan</h1>

</>
  )
}

export default App;
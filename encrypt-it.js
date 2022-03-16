/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
     let val= document.getElementById('encrypt-it');
     val.addEventListener('click',handleClick);
     let reset=document.getElementById('reset');
     reset.addEventListener('click',resetPage)

  }

  function handleClick() {
    let inputVal=document.getElementById("input-text");
    let option=document.getElementById("cipher-type");
    let selected=option.options[option.selectedIndex].value;
    if(document.getElementById("12pt").checked){
        document.getElementById("result").style.fontSize = "12pt";
      }
      else if (document.getElementById("24pt").checked) {
        document.getElementById("result").style.fontSize = "24pt";
      }

     
    if (selected=="shift") {
      console.log("CipherShift");
      let resultCifer=encryptCifer(inputVal);
      if(document.getElementById("all-caps").checked){
        resultCifer=resultCifer.toUpperCase();
      } 
      document.getElementById("result").textContent=resultCifer;
    }else {
      console.log("Random Shift");
      let resultCifer=randomCifer(inputVal);
      if(document.getElementById("all-caps").checked){
        resultCifer=resultCifer.toUpperCase();  
      } 
      document.getElementById("result").textContent=resultCifer;
    }
      
  }

  function encryptCifer(text) {
    let val = text.value.toLowerCase();
    console.log("input vale" + val);
    let result="";
    for (let i =0 ;i<val.length;i++) {
      if(val[i] <'a' || val[i] > 'z') {
        result+=val[i];
      } else if (val[i]=='z'){
        result+='a';
      } else {
        let letter= val.charCodeAt(i);
        let resultLetter=String.fromCharCode(letter + 1);
        result+=resultLetter;
      }

    }
    return result;

  }

  function  randomCifer(text) {
    let val = text.value.toLowerCase();
    console.log("input vale" + val);
    let result="";
    for (let i =0 ;i<val.length;i++) {
      if(val[i] <'a' || val[i] > 'z') {
        result+=val[i];
      } else if (val[i]=='z'){
        result+='a';
      } else {
        let letter= val.charCodeAt(i);
        let resultLetter=String.fromCharCode(letter + Math.floor(Math.random() *27));
        result+=resultLetter;
      }

    }
    return result;



  }
  function resetPage() {
    let text=document.getElementById("input-text")
    text.value="";
  }


  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();

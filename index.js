// Your code goes here
/*document.addEventListener("DOMContentloaded", function(){
    console.log("the content has loaded");
});
console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );*/

  /*document.addEventListener("DOMContentLoaded", (e)=>{
    let b= document.querySelector("#text")
    b.document.innertext="THIS IS REALLY COOL"
  });*/
  document.addEventListener("DOMContentLoaded", function (event) {
    // Get the paragraph element by its ID and update its text content
    document.getElementById("text").textContent = "This is really cool!";
  });
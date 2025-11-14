window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.querySelector("#myBox");
  let myCylinder = document.querySelector("#myCylinder");
  //Task 3: Create a variable for the cylinder.  Get the element from the HTML


  myBox.addEventListener("mouseenter",function(){
    myBox.setAttribute("height",2);
  })
  //Task 4: Add another event to set the height of myBox back to 1 when the mouse is no longer on myBox
  myBox.addEventListener("mouseleave",function(){
    myBox.setAttribute("height",1);
  })

  //Task 5: Make  the the cylinder disappear when you click on it.  Set opacity to zero
  myCylinder.addEventListener("click",function(){
    myCylinder.setAttribute("opacity",0);
  })
})

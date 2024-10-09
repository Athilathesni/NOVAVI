document.addEventListener('mousemove', (event) => {
    const circle = document.querySelector('.circle');

    // Get cursor position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Move the circle to follow the mouse cursor
    circle.style.left = `${mouseX - 25}px`;  // Adjust for half the width
    circle.style.top = `${mouseY - 25}px`;   // Adjust for half the height
});
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
















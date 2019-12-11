var button = document.getElementById("toggle");
var inner = document.getElementById("inner");
var counter = document.getElementById("counter");
var count = 0;

var timer;
var isBeat = false;

counter.textContent = count;

button.addEventListener("click", function() {
  // console.log(button.className);
  if(button.className !== "active"){
    button.setAttribute("class", "active");
    button.textContent = "Stop Timer";
    
    timer = setInterval(countTimer, 500);
  } else {
    clearInterval(timer);

    count = 0;
    counter.textContent = count;

    button.textContent = "Start Timer";
    button.setAttribute("class", "");
  }
});

function countTimer() {
  
  // console.log(count);
  if (isBeat) {
    count++;
    counter.textContent = count;

    isBeat = false;
  } else {
    isBeat = true;
  }

  setSize();
}

function setSize() {
  let start="5em";
  let size = "10em"

  inner.style.width = (isBeat) ? start: size;
  inner.style.height = (isBeat) ? start : "9.5em";

  console.log(inner.style.width);
}
    let i = 0;
    let txt = document.querySelector("h2").textContent; /* The text */
    document.querySelector("h2").textContent = " ";
    var speed = 80; /* The speed/duration of the effect in milliseconds */
    
    function typeWriter() {
        if (i < txt.length) {
          document.querySelector("h2").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
    
      typeWriter();

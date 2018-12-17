function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function myAlert() 
    {
    alert("Hello, you have been alerted.")
    }

function addDomElement()
    {
    var domObject = document.createElement("div");
    domObject.id = "userDiv";
    domObject.innerText = "You did this!";
    document.body.append(domObject);    
    }

function inverseTop()
    {
        var inverse;
        if (inverse = document.getElementById("topBox"))
        {
            inverse.id = "topBoxInverse";
        }
         else if (inverse = document.getElementById("topBoxInverse")) 
        {
            inverse.id = "topBox";
        }
    }

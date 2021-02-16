function calculate()
            {
                p = document.getElementById("p").value;
                n = document.getElementById("n").value;
                r = document.getElementById("r").value;
                result = document.getElementById("result");
               if(p<=0){
                alert("Please enter the positive value");
                p.focus();
                return false;
          }
                
                result.innerHTML = "The interest is " + (p*n*r/100);
   
            }
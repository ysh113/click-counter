//create a function. Whenever the button gets clicked number goes up. 


function click(){
    let click = document.getElementById("button")
    let counter = document.getElementById("counterNumber")
   
    click.addEventListener("click", function(){
        ++counter.innerText
        //  setTimeout(() => {                                      To make the screen flash set the 0's to whatever desired number. Lower the quicker the flash
        //     document.body.style.backgroundColor = "black"
          
        //   }, 0);
        //  setTimeout(() => {
        //     document.body.style.backgroundColor = "white"
        //  }, 0);
    })
       
    }
        

           
           
        
           
            
    
    
    

    


click()
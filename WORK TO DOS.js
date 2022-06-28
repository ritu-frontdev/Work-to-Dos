function btn(){
    var a = document.getElementById("tex1")
    var b = document.getElementById("lis1")
    var c = document.createElement("li")
    c.textContent = a.value
    p = document.createElement("i")
    p.classList.add("fa-solid", "fa-xmark")
    p.style.position = "fixed"
    p.style.right = "27%"
    c.appendChild(p)
    b.appendChild(c)
    a.value = '';
    }
    
    // var x = document.querySelector("i>li")        
    document.addEventListener("click", function(e){
        console.log(e.target.tagName)
        console.log(e.target.parentElement.tagName)
        if(e.target.tagName == "I" && e.target.parentElement.tagName == "LI"){
            console.log("yes")
            e.target.parentElement.remove()
                   }    
        
    })
    


let c = document.getElementById("count");
console.log(c);
function inc(){
    let privious = c.textContent;
    let update = parseInt(privious)+1;
    c.textContent = update;

    if (update > 0){
        c.style.color = "green";
    }
    else if (update < 0){
        c.style.color = "red";
    }
    else{
        c.style.color = "black";
    }
}

function res(){
     let update = 0;
    c.textContent = update;
    c.style.color = "black";
}


function dec(){
    let privious = c.textContent;
    let update = parseInt(privious)-1;
    c.textContent = update;
    c.style.color = "black";
}


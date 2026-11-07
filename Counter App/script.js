let c = document.getElementById("count");
console.log(c);
function inc(){
    let privious = c.textContent;
    let update = parseInt(privious)+1;
    c.textContent = update;
}

function res(){
     let update = 0;
    c.textContent = update;
}

function dec(){
    let privious = c.textContent;
    let update = parseInt(privious)-1;
    c.textContent = update;
}
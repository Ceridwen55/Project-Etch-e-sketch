const body = document.body;

let padre = document.querySelector(".dad");
padre.style.display = "flex";
padre.style.alignItems = "center";
padre.style.justifyContent = "center";
padre.style.paddingTop = "175px";




let madre = document.querySelector(".mother");
madre.style.display = "flex";
madre.style.flexWrap ="wrap";
madre.style.justifyContent = "center";
madre.style.alignItems = "center";
madre.style.gap = "7.5px";
madre.style.width = "950px";
madre.style.height = "800px";


// GRID
let div1 = "";
let div = div1;




    for (i = 0; i < 256; i++)
{
    div1 = document.createElement("div");
    div1.style.display = "flex";
    div1.classList.add('cell');
    div1.style.margin = "0px";
    div1.style.width = "50px";
    div1.style.height = "50px";
    div1.style.backgroundColor = "grey";
    div1.addEventListener('mouseenter', sketch);
    madre.appendChild(div1);
    
}





function sketch (event)
{   
    
    let randomColor = "";
    let letters = ['#ff0000', '#00ff00', '#0000ff'];


    randomColor = letters[Math.floor(Math.random()* 3)];
        
    let change = event.target.style.backgroundColor = randomColor;
    return change
    
       
}
// BUTTON
const butwrap = document.querySelector(".butwrap");
butwrap.style.display = "flex";
butwrap.style.alignItems = "center"
butwrap.style.justifyContent = "center";
butwrap.style.marginBottom = "-60px";


const resBut = document.querySelector("button");
resBut.style.border = "bold";
resBut.style.fontStyle = "bold";
resBut.style.fontSize = "15px";
resBut.style.width = "100px";
resBut.style.height = "100px";
resBut.style.alignItems = "top";

function reset (event)
{   
    
    let res = document.querySelectorAll(".cell");
  return  res.forEach(cell =>{cell.style.backgroundColor = "grey";});   
}


resBut.addEventListener('click',reset);
const body = document.body;


let senior = document.querySelector(".gramp");
senior.style.display = "flex";
senior.style.justifyContent = "center";
senior.style.alignItems = "center";
senior.style.paddingTop = "-150px";
senior.style.backgroundColor = "ivory";




let padre = document.querySelector(".dad");
padre.style.display = "flex";
padre.style.flexDirection = "column";
padre.style.gap ="50px";
padre.style.alignItems = "center";
padre.style.justifyContent = "space-between";
padre.style.paddingTop = "75px";
padre.style.backgroundColor = "orange";
padre.style.paddingBottom = "200px";
padre.style.marginTop = "50px";
padre.style.border = "dashed";
padre.style.borderRadius = "78px";
padre.style.boxShadow = "inset 15px 15px 15px yellow"

padre.style.width ="1200px";
padre.style.height = "900px";




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



const resBut = document.querySelector("button");
resBut.style.border = "dotted";
resBut.style.borderRadius = "10px";
resBut.style.fontFamily ="fantasy";
resBut.style.fontStyle = "italic";
resBut.style.boxShadow = "5px 5px 5px silver";
resBut.style.fontSize = "35px";
resBut.style.fontWeight = "bold";
resBut.style.width = "200px";
resBut.style.height = "auto";
resBut.style.alignItems = "top";

function reset (event)
{   
    
    let res = document.querySelectorAll(".cell");
  return  res.forEach(cell =>{cell.style.backgroundColor = "grey";});   
}

resBut.addEventListener('click',reset);


// BY
let nama = document.createElement("p");

nama.textContent = "Etch-e-Sketch by Zulkan";
nama.style.fontFamily = "fantasy"
nama.style.color = "white";
nama.style.fontStyle = "italic";
nama.style.fontWeight = "bold";
nama.style.textShadow = " 10px 10px 10px black";
nama.style.fontSize = "45px";
nama.style.marginTop = "80px";
padre.appendChild(nama);




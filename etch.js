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


let div1 = "";
let div = div1;

for (i = 0; i < 256; i++)
{
div1 = document.createElement("div");
div1.style.display = "flex";
div1.style.margin = "0px";
div1.style.width = "50px";
div1.style.height = "50px";
div1.style.backgroundColor = "grey";
function sketch (event)
{   let randomColor = "";
    let letters = ['#ff0000', '#00ff00', '#0000ff'];
    for (j = 0; j < 3; j++)
    {

        randomColor = letters[Math.floor(Math.random() * 3)];
        return event.target.style.backgroundColor = randomColor; 

    }
    
}
div1.addEventListener('mouseenter', sketch);
madre.appendChild(div1);

}






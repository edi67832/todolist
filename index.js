var list = document.getElementById("lista");
var input = document.getElementById("text-casuta");

let tasks = 0;

function creeazaSarcina()
{
    var text = input.value;

    var p = document.createElement("p");
    p.className = "casuta";
    p.style.fontSize = "250%";
    p.style.fontFamily = "Arial";
    p.style.color = "grey";
    p.style.display = "block";
    list.appendChild(p);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.style.transform = "scale(2.2)";
    checkbox.style.marginLeft = "40px";
    checkbox.style.marginTop = "25px";
    p.appendChild(checkbox);

    var textbox = document.createElement("span");
    textbox.style.marginLeft = "50px";
    textbox.style.alignContent = "center";
    textbox.innerText = text;
    textbox.style.fontFamily = "Arial";
    textbox.style.fontSize = "30px";
    textbox.style.color = "grey";
    p.appendChild(textbox);

    input.value = "";
    document.getElementById("elemente").innerHTML = tasks + " elemente ramase";
}

list.addEventListener('click', (e) =>{
    if(e.target.classList.contains("checkbox"))
    {
        if(e.target.classList.contains("checked"))
        {
            e.target.nextElementSibling.style.textDecoration = "revert";
            e.target.nextElementSibling.classList.remove("checked");
            e.target.classList.remove("checked");
        }

        else
        {
            e.target.nextElementSibling.style.textDecoration = "line-through";
            e.target.nextElementSibling.classList.add("checked");
            e.target.classList.add("checked");
        }
    }
});

let listaElemente = list.getElementsByTagName("p");

document.addEventListener('click', (e) => {
    if(e.target.classList.contains("active"))
    {
        for(var i = 0; i < tasks; i++)
        {
            if(listaElemente[i].firstChild.classList.contains("checked"))
                listaElemente[i].style.display = "none";
        }
    }
    else if(e.target.classList.contains("completed"))
    {
        for(var i = 0; i < tasks; i++)
        {
            if(!(listaElemente[i].firstChild.classList.contains("checked")))
                listaElemente[i].style.display = "none";
        }
    }
    else if(e.target.classList.contains("all"))
    {
        for(var i = 0; i < tasks; i++)
            listaElemente[i].style.display = "block";
    }
});

input.addEventListener("keypress", function(event){
    var text = input.value;
    if(event.key == "Enter" && text != "")
    {
        creeazaSarcina();
        tasks++;
        document.getElementById("elemente").innerHTML = tasks + " elemente ramase";
    }
})
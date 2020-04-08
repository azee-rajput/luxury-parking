var path
var active;


function parking(src, element){
    let checked = document.getElementById("lights").checked;
    let lights;
    if(element!==undefined){
        element.classList.add("activeLink");
        if(active!==undefined){
            active.classList.remove("activeLink");
            active.className = active.className.replace(/\bmystyle\b/g, "");
        }
        active = element;
    }
    if(checked){
        lights = "Light-yes";
    }else{
        lights = "Light-no";
    }
    path = src;
    document.getElementById("parkingImage").src = "images/"+lights+src;
}

function lights(){
    if(path===undefined){
        path = "/L/l_frame.jpg";
    }
    parking(path, undefined)
}

function hide(){
    let sidebarsCheck = document.getElementById("hide").checked;
    if(sidebarsCheck){
        for (let el of document.querySelectorAll('.sidebars')) el.style.display = 'none';
    }else{
        for (let el of document.querySelectorAll('.sidebars')) el.style.display = 'flex';
    }
}
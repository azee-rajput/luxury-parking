var path



function parking(src){
    let checked = document.getElementById("lights").checked;
    let lights;
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
    parking(path)
}

function hide(){
    let sidebarsCheck = document.getElementById("hide").checked;
    // let sidebars = document.getElementsByClassName("sidebars")
    // console.log(sidebars.style.display)

    // for (let el of document.querySelectorAll('.sidebars')) el.style.visibility = 'hidden';
    if(sidebarsCheck){
        for (let el of document.querySelectorAll('.sidebars')) el.style.display = 'none';
    }else{
        for (let el of document.querySelectorAll('.sidebars')) el.style.display = 'flex';
    }
}
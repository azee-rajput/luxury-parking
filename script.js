var path
var active;
var size;
var large = true;

const typeLM = [
    "No Walls",
    "Sliding Gate with Frame",
    "Sliding Gate without Frame",
    "Wall of Vertical Shades"
]

const typeS = [
    "No Walls",
    "Wall of Vertical Shades 1",
    "Wall of Vertical Shades 2"
]

function radio(val){
    if(size!==val){
        if(path !== "frame.jpg"){
            path="frame.jpg"
        }
    }

    size = val

    if(path===undefined){
        path = "frame.jpg";
    }

    if(size==='/S/s_'){
        large = false
        document.getElementById("linkHeading").innerHTML = "Small Parking"
        document.getElementById("link1").innerHTML = typeS[0]
        document.getElementById("link1").addEventListener("click", function(){parking("frame.jpg",this)}, false);

        document.getElementById("link2").innerHTML = typeS[1]
        document.getElementById("link2").addEventListener("click", function(){parking("v_1.jpg",this)}, false);

        document.getElementById("link3").innerHTML = typeS[2]
        document.getElementById("link3").addEventListener("click", function(){parking("v_2.jpg",this)}, false);

        document.getElementById("link4").style.display = "none"
    }else{
        if(size==='/L/l_'){
            document.getElementById("linkHeading").innerHTML = "Large Parking"
            large = true
        }else{
            document.getElementById("linkHeading").innerHTML = "Medium Parking"
            large = false
        }
        document.getElementById("link4").style.display = "block"

        document.getElementById("link1").innerHTML = typeLM[0]
        document.getElementById("link1").addEventListener("click", function(){parking("frame.jpg",this)}, false);

        document.getElementById("link2").innerHTML = typeLM[1]
        document.getElementById("link2").addEventListener("click", function(){parking("h_frame.jpg",this)}, false);

        document.getElementById("link3").innerHTML = typeLM[2]
        document.getElementById("link3").addEventListener("click", function(){parking("h_no_frame.jpg",this)}, false);

        document.getElementById("link4").innerHTML = typeLM[3]
        document.getElementById("link4").addEventListener("click", ()=>{parking("v.jpg",this)}, false);
    }
    parking(path, undefined)
}


function parking(src, element){
    let checked = document.getElementById("lights").checked;
    let lights;
    if(src.indexOf("/HD/") > -1){
        document.getElementById("parkingImage").src = src;
        return null;
    }
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
    // size = document.querySelector('input[name="size"]:checked').value
    if(size===undefined){
        size="/L/l_"
    }
    
    path = src;
    document.getElementById("parkingImage").src = "images/"+lights+size+src;
    if(large){
        document.getElementById("parkingImage").style.height = "auto"
        document.getElementById("parkingImage").style.width = "100%"
    }else{
        document.getElementById("parkingImage").style.width = "100%"
        document.getElementById("parkingImage").style.height = "auto"
    }
}

function lights(){
    if(path===undefined){
        path = "frame.jpg";
    }
    parking(path, undefined)
}

function hide(){
    let sidebarsCheck = document.getElementById("hide").checked;
    if(sidebarsCheck){
        for (let el of document.querySelectorAll('.toHide')) el.style.visibility = 'hidden';
    }else{
        for (let el of document.querySelectorAll('.toHide')) el.style.visibility = 'visible';
    }
}
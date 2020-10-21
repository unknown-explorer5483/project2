window.onload = function () {
    container = document.getElementById("mapcanvas");
    map = container.getContext("2d");
    
    map.drawImage(img, 0, 0, 944, 580);

    for (let id in townlist) {
    map.fillStyle = "black";
    map.font = '15px times-new-roman';
    map.textAlign = "center";
    map.textBaseline = "bottom";
    map.fillText(townlist[id]["name"], townlist[id]["x"], townlist[id]["y"]);
    map.beginPath();
    map.arc(townlist[id]["x"],townlist[id]["y"],2,0,Math.PI*2,true);
    map.fillStyle = "rgb(0,0,0)";
    map.fill();
    }

};

let img = new Image();
img.src = 'img/map.png';
townlist = {
 id1: {
     name:"Ноябрьск",
     x:400,
     y:320,
     link:"https://unknown-explorer5483.github.io/project2/pages/num1/index.html",
 },
 id2: {
    name:"Златоуст",
    x:227,
    y:375,
    link:"http://www.github.com",
 }

};



document.getElementById('mapcanvas').onclick = function clickEvent(e) {
    document.location.href = townlist[towndistmin]["link"];
};

let x;
let y;
let towndistmin;
document.getElementById('mapcanvas').onmousemove = function moveEvent(e) {
    let rect = e.target.getBoundingClientRect();
    x = e.clientX - rect.left; 
    y = e.clientY - rect.top;  

    map.drawImage(img, 0, 0, 944, 580);
    
    let distancemin = 99999;
    
    for (let id in townlist) {
    map.fillStyle = "black";
    map.font = '15px times-new-roman';
    map.textAlign = "center";
    map.textBaseline = "bottom";
    map.fillText(townlist[id]["name"], townlist[id]["x"], townlist[id]["y"]);
    map.beginPath();
    map.arc(townlist[id]["x"],townlist[id]["y"],2,0,Math.PI*2,true);
    map.fillStyle = "rgb(0,0,0)";
    map.fill();
    // ( △ ) a^2=b^2+c^2 хоть где-то это пригодилось :)
    let distance = Math.sqrt((x-townlist[id]["x"])**2+(y-townlist[id]["y"])**2);
    if (distance < distancemin) {
        distancemin = distance;
        towndistmin = id;
    }
    
    }
    if (distancemin < 50) {
        map.fillStyle = "rgb(128,128,128)";
        map.font = '15px times-new-roman';
        map.textAlign = "center";
        map.textBaseline = "bottom";
        map.fillText(townlist[towndistmin]["name"], townlist[towndistmin]["x"], townlist[towndistmin]["y"]);
        map.beginPath();
        map.arc(townlist[towndistmin]["x"],townlist[towndistmin]["y"],2,0,Math.PI*2,true);
        map.fillStyle = "rgb(128,128,128)";
        map.fill();
        document.getElementById("mapcanvas").style.cursor = "pointer";
    } else {document.getElementById("mapcanvas").style.cursor = "default"}
 
}
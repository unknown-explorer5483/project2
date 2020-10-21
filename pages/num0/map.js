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
    link:"https://unknown-explorer5483.github.io/project2/pages/num2/index.html",
 },
 id3: {
     name:"Сургут",
     x:370,
     y:333,
     link:"https://unknown-explorer5483.github.io/project2/pages/num3/index.html",
 },
 id4: {
    name:"   Кисловодск",
    x:32,
    y:382,
    link:"https://unknown-explorer5483.github.io/project2/pages/num4/index.html",
 },
 id5: {
    name:"Первоуральск",
    x:239,
    y:345,
    link:"https://unknown-explorer5483.github.io/project2/pages/num5/index.html",
 },
 id6: {
    name:"Энгельс",
    x:162,
    y:352,
    link:"https://unknown-explorer5483.github.io/project2/pages/num6/index.html",
 },
 id7: {
    name:"Сызрань",
    x:163,
    y:334,
    link:"https://unknown-explorer5483.github.io/project2/pages/num7/index.html",
 },
 id8: {
    name:"Таганрог",
    x:44,
    y:322,
    link:"https://unknown-explorer5483.github.io/project2/pages/num8/index.html",
 },
 id9: {
    name:"Нижнекамск",
    x:197,
    y:323,
    link:"https://unknown-explorer5483.github.io/project2/pages/num9/index.html",
 },
 id10: {
    name:"Назрань",
    x:34,
    y:397,
    link:"https://unknown-explorer5483.github.io/project2/pages/num10/index.html",
 },
 id11: {
    name:"Каспийск",
    x:52,
    y:425,
    link:"https://unknown-explorer5483.github.io/project2/pages/num11/index.html",
 },
 id12: {
    name:"Улан-Удэ",
    x:570,
    y:513,
    link:"https://unknown-explorer5483.github.io/project2/pages/num12/index.html",
 },
 id13: {
    name:"      Майкоп",
    x:14,
    y:340,
    link:"https://unknown-explorer5483.github.io/project2/pages/num13/index.html",
 },
 id14: {
    name:"Находка",
    x:844,
    y:527,
    link:"https://unknown-explorer5483.github.io/project2/pages/num14/index.html",
 },
 id15: {
    name:"Арзамас",
    x:146,
    y:300,
    link:"https://unknown-explorer5483.github.io/project2/pages/num15/index.html",
 },
 id16: {
    name:"Серпухов",
    x:113,
    y:311,
    link:"https://unknown-explorer5483.github.io/project2/pages/num16/index.html",
 },
 id17: {
    name:"Армавир",
    x:42,
    y:353,
    link:"https://unknown-explorer5483.github.io/project2/pages/num17/index.html",
 },
 id18: {
    name:"Норильск",
    x:436,
    y:282,
    link:"https://unknown-explorer5483.github.io/project2/pages/num18/index.html",
 },
 id19: {
    name:"Череповец",
    x:164,
    y:225,
    link:"https://unknown-explorer5483.github.io/project2/pages/num19/index.html",
 },
 id20: {
    name:"Усть-Илимск",
    x:539,
    y:422,
    link:"https://unknown-explorer5483.github.io/project2/pages/num20/index.html",
 },
 id21: {
    name:"Старый Оскол",
    x:84,
    y:285,
    link:"https://unknown-explorer5483.github.io/project2/pages/num21/index.html",
 },
 id22: {
    name:"Бийск",
    x:405,
    y:486,
    link:"https://unknown-explorer5483.github.io/project2/pages/num22/index.html",
 },
 id23: {
    name:"Орёл",
    x:91,
    y:263,
    link:"https://unknown-explorer5483.github.io/project2/pages/num23/index.html",
 },
 id24: {
    name:"Сыктывкар",
    x:250,
    y:270,
    link:"https://unknown-explorer5483.github.io/project2/pages/num24/index.html",
 },
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
    console.log("x: " + x + " ; y: " + y + ".");

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

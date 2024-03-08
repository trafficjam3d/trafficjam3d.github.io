var list = [
    {
        "title": "Miami Crime Simulator 3D",
        "url": "https://trafficjam3d.github.io/miami-crime-simulator-3d/"
    },
    {
        "title": "Bitlife",
        "url": "https://bitlifeonline.github.io/"
    },
    {
        "title": "Traffic Tour",
        "url": "https://traffictour.github.io/"
    },
    {
        "title": "Tiny Fishing",
        "url": "http://tiny-fishing.github.io/"
    },
    {
        "title": "Mega Ramp Car Stunts",
        "url": "https://trafficjam3d.github.io/mega-ramp-car-stunts/"
    },
    {
        "title": "Color Tunnel 2",
        "url": "https://trafficjam3d.github.io/color-tunnel-2/"
    },
    {
        "title": "Stunt Biker 3D",
        "url": "https://trafficjam3d.github.io/stunt-biker-3d/"
    },
    {
        "title": "Snowcross Stunts X3M",
        "url": "https://trafficjam3d.github.io/snowcross-stunts-x3m/"
    },
    {
        "title": "Indian Uphill Bus Simulator 3D",
        "url": "https://trafficjam3d.github.io/indian-uphill-bus-simulator-3d/"
    },
    {
        "title": "Furious Racing 3D",
        "url": "https://trafficjam3d.github.io/furious-racing-3d/"
    },
    {
        "title": "Bicycle Stunts 3D",
        "url": "https://trafficjam3d.github.io/bicycle-stunts-3d/"
    },
    {
        "title": "Indian Truck Simulator 3D",
        "url": "https://trafficjam3d.github.io/indian-truck-simulator-3d/"
    },
    {
        "title": "Kart Race 3D",
        "url": "https://trafficjam3d.github.io/kart-race-3d/"
    }
]

var in_html = "";
for (let index = 0; index < list.length; index++) {
    const element = list[index];
    var currentUrl = location.href;
    if(element.url != currentUrl){
        in_html += `<li style="padding: 5px; display: inline-block;">
        <a style="color: #ffffff;" href="${element.url}" title="${element.title}">${element.title}</a>
      </li>`
    }
    
}
var html = `

<ul style="color: #ffffff; padding: 0px; margin: 0px; font-size: 20px;">
  <li style="padding: 5px; display: inline-block; float: left;">
    <a href="/" style="color: #ffffff; text-decoration: none;">TRAFFIC JAM 3D</a>
  </li>
  ${in_html}
  <li style="padding: 5px; display: inline-block; float: right;">
    <a onclick="return closeBacklinks();" style="color: #ffffff; text-decoration: none;">❌</a>
  </li>
</ul>
`;
function loadAds(){
    var  r = document.createElement("script");
    r.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2485663923316878"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"), r.onload = function (){
        // (adsbygoogle = window.adsbygoogle || []).push({});
        // (adsbygoogle = window.adsbygoogle || []).push({});
    },document.head.appendChild(r);
    
  }
window.addEventListener('load', function() {
    var e = this.document.createElement("div");
    e.style = "width: 100%; text-align: center; position: absolute; top: 0px; z-index: 999; background: rgb(119, 119, 255); opacity: 0.8;"
    e.innerHTML = html;
    e.id="listLink";
    document.getElementsByTagName('body')[0].appendChild(e);
    loadAds();
});
function closeBacklinks(){
    document.querySelector('#listLink').style.display = "none";
}
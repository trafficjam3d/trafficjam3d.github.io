window.addEventListener('load', function() {
    var t = Date.now();
    fetch("/data.json?v="+t,{
        headers: {
            'Content-Type': 'application/json',
            },
    }).then(response => response.json())
    .then(data => {
        var listGame = data;
        var html = '';
        var domGame = this.document.querySelector('.Single-game');
        listGame.forEach(item => {
            html += `<a href="https://trafficjam3d.github.io/${item.slug}.html" title="${item.title}">
            <div class="Firt_box">
              <div class="Border_radius">
                <div class="Box_img">
                  <img style="width: 100%;" src="${item.logo}" alt="${item.title}">
                </div>
                <div class="Last_box">${item.title}</div>
              </div>
            </div>
          </a>`
        });
        domGame.innerHTML = html + domGame.innerHTML;
    });
})
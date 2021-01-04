function chengeBg() {
    const images = [
        'url("/img/background-one.jpg")',
        'url("/img/background-two.jpg")',
        'url("/img/background-three.jpg")',
        'url("/img/background-four.jpg")',
    ];
    const body = document.querySelector('body')
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}
setInterval(chengeBg, 10);

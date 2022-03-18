
var video = document.getElementById("videoPlayer");
var autoplay = document.getElementById("autoplay");
var disableauto = document.getElementById("disableauto");
var off = document.getElementById("off");
var on = document.getElementById("on");
var offlight = document.getElementById("offlight");
var loop = document.getElementById("loop");
var disableloop = document.getElementById("disableloop");
var zoom = document.getElementById("zoom");
var collapse = document.getElementById("collapse");
var rightDown = document.getElementById("rightDown");

// Tự phát

autoplay.addEventListener('click',function() {
    video.autoplay = true;
    video.load();
    autoplay.style.display = "none";
    disableauto.style.display = "block";
});

// Tắt Tự Phát

disableauto.addEventListener('click',function() {
    video.autoplay = false;
    video.load();
    disableauto.style.display = "none";
    autoplay.style.display = "block";
});

// Tắt Đèn
off.addEventListener('click',function() {
    offlight.style.display = "block";
    off.style.display = "none";
    on.style.display = "block";
});

on.addEventListener('click',function() {
    offlight.style.display = "none";
    on.style.display = "none";
    off.style.display = "block";
});

// Phát Lại
loop.addEventListener('click',function() {
    video.loop = true;
    loop.style.display = "none";
    disableloop.style.display = "block";
});

// Tắt Phát Lại
disableloop.addEventListener('click',function() {
    video.loop = false;
    disableloop.style.display = "none";
    loop.style.display = "block";
});


// Phóng to
zoom.addEventListener('click',function() {
    video.width = 930;
    zoom.style.display = "none";
    collapse.style.display = "block";
    rightDown.setAttribute("style","margin-top: 398px");
});

// Thu gọn
collapse.addEventListener('click',function() {
    video.width = 645;
    collapse.style.display = "none";
    zoom.style.display = "block";
    rightDown.setAttribute("style","margin-top: 0");
});
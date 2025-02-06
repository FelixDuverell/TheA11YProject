// Randomly block the page (without a visible indication)
setInterval(() => {
    let start = Date.now();
    while (Date.now() - start < 1000) {} // 1 second freeze
}, 3000);

// Send an HTTP request from an HTTPS page (unsafe mixed content)
let img = document.createElement("img");
img.src = "http://via.placeholder.com/1000"; // HTTP instead of HTTPS
document.body.appendChild(img);

// Use document.write() (extremely bad for performance & SEO)
document.write("<h1 style='color:red;'>HELLO FROM DOCUMENT.WRITE()</h1>");

// Insert an invisible autoplay video (wastes resources)
let video = document.createElement("video");
video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
video.autoplay = true;
video.style.display = "block";
document.body.appendChild(video);

// Use eval (security risk)
eval("console.log('This is dangerous!')");

// Prevent users from navigating back
history.pushState(null, "", location.href);
window.onpopstate = () => history.go(1);

// Randomly vibrate devices (extremely annoying)
if (navigator.vibrate) {
    setInterval(() => navigator.vibrate(500), 5000);
}

// Insert iframes that don't work
let iframe = document.createElement("iframe");
iframe.src = "https://www.example.com";
iframe.sandbox = "allow-scripts"; // Blocks interaction
document.body.appendChild(iframe);

// Add an **invisible** large image (slow loading but not visible)
let bigImage = document.createElement("img");
bigImage.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/JPEG_example_flower.jpg";
bigImage.width = 5000; // Huge image
bigImage.height = 5000;
bigImage.style.display = "none"; // Hidden but still loads
document.body.appendChild(bigImage);

// Insert a timeout to block first paint
setTimeout(() => {
    let blockDiv = document.createElement("div");
    blockDiv.innerHTML = "<h2>Delayed loading...</h2>";
    document.body.appendChild(blockDiv);
}, 5000); // 5-second delay

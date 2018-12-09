
// create canvas
let canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// get context
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "#FF9900";
ctx.lineWidth = 0.25;

const middle = {
    x: canvas.width * 0.5,
    y: canvas.height * 0.5
}
// misc
let is_paused = false;
const whole_canvas = {
    x: window.innerWidth,
    y: window.innerHeight
}
let = tick = 0;
let tock = 0;
const radius = 300;
const inner_radius = 150;
const r = radius - inner_radius;
const fract = 1.0;
// move drawing point to
ctx.moveTo(
    middle.x
        + Math.cos(tick) * r
        + Math.cos(tock) * (fract * inner_radius),
    middle.y
        + Math.sin(tick) * r
        - Math.sin(tock) * (fract * inner_radius)
);
const rate = 0.001;


function loop () {

    if (is_paused === false) {
        tick += (96 * rate);
        tock += (48 * rate);
        let pos = {
            x: middle.x
                + Math.cos(tick) * r
                + Math.cos(tock) * (fract * inner_radius),
            y: middle.y
                + Math.sin(tick) * r
                - Math.sin(tock) * (fract * inner_radius)
        }
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }

    requestAnimationFrame(loop);
}

document.body.addEventListener("click", (evt) => { 
    
    is_paused = !is_paused; 
    console.log(evt, "paused = " + is_paused);
});

loop();
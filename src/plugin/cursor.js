import magicMouse from "magicmouse.js";

magicMouse({
    "outerWidth": 40,
    "outerHeight": 40,
    "hoverEffect": "circle-move"
});

document.addEventListener('mousemove', e => {
    if(!!e.target.closest('.sidebar')) {
        document.getElementById('magicMouseCursor').style.borderColor = '#fff';
        document.getElementById('magicPointer').style.background = '#fff';
    } else {
        document.getElementById('magicMouseCursor').style.borderColor = '#313135';
        document.getElementById('magicPointer').style.background = '#313135';
    }
})
//  attachEvent()
// jQuery - on


// type, timestamp, defaultprevented.
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode.

// document.getElementById('images').addEventListener('click', function (e) {
//     console.log('clicked inside the ul');
// }, false)

// document.getElementById('owl').addEventListener('click', function () {
//     console.log('owl clicked');
//     e.stopPropagation()   
// }, false)

document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);

        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    // removeIt.parentNode.removeChild(removeIt)
}, false)
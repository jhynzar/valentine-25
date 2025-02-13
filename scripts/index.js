// Animate Yes // todo change color
setTimeout(() => {
    let heartBox = document.querySelectorAll('.heart-box');
    heartBox.forEach((el) => {
        el.classList.toggle('yes-text');
        el.classList.toggle('time-is-ripe');
    });

    let text = document.querySelectorAll('.text');
    text.forEach((el) => {
        el.style.transition = "2s";
        el.classList.toggle('time-is-ripe');

        // reset transition time after 2s
        setTimeout(() => {
            el.style.transition = "0.6s";
        },2000)
    });
}, 3000);

// Animate Zoom (Enlarge)

animateEnlarge = () => {

    let heartContainer = document.querySelector('.heart-container');

    heartContainer.classList.toggle('enlarge');

}

// Animate unflip
animateUnflip = () => {

    let allBoxes = document.querySelectorAll('.heart-container > div'); // Selects all boxes (for unflip animation)

    let getTimer = (index) => {

        let row = Math.ceil(index/15) || 1;
        let column = (index % 15 === 0) ? 15 : index % 15;

        let multiplier = (row > column) ? row : column;

        return multiplier * 100; 
    }

    allBoxes.forEach( (el, currentIndex) => {

        let timeout = getTimer(currentIndex + 1) + 3000; // 3000 is delay
        setTimeout(() => {
            el.classList.toggle('hover');

            if (el.classList.contains('heart-box')) {
                setTimeout(() => {
                    el.classList.toggle('hover');
                }, 500);
            }
            
        }, timeout);

        
    });

    // for Text - Will you be (Animation)
    setTimeout(() => {
        let textTop = document.querySelector('.text-top');
        textTop.classList.toggle('my-valentine');
    }, 4000)


    // for Text - My Valentine (Animation)
    setTimeout(() => {
        let textBottom = document.querySelector('.text-bottom');
        textBottom.classList.toggle('my-valentine');
    }, 5000)

}


// For Flipping

let flippedHeartCounter = 0;

let startAnimation = () => {

    
    setTimeout(() => {
        animateEnlarge();

        setTimeout(() => {
            animateUnflip();
        }, 2000)
    }, 3000);

    
}


let heartContainer = document.querySelector('.heart-container');

let clickAndTouchListener = (e) => {
    let parentHeartBox = e.target.closest('.heart-box');
    
    if ( 
        parentHeartBox && 
        parentHeartBox.classList.contains('hover') !== true // Not already clicked/touched
    ) { // if anywhere inside heart-box
        parentHeartBox.classList.add('hover');
        flippedHeartCounter++;

        // If all heartboxes are flipped (129 boxes as of 2-13-2025)
        if (flippedHeartCounter === 129) {
            startAnimation();
        }
    }
}

// // For PC (Click Listener)
// heartContainer.addEventListener('click', clickAndTouchListener);

// // For Mobile (Touch Listener)
// heartContainer.addEventListener('touchstart', clickAndTouchListener, { passive: true });

// setTimeout(() => {
//     let heartContainer = document.querySelector('.heart-container');

//     heartContainer.classList.toggle('animate');

//     // heartContainer.style.gridTemplateColumns = "repeat(15, 4rem)";
//     // heartContainer.style.gridTemplateRows = "repeat(15, 4rem)";

//     let heartBox = document.querySelectorAll('.heart-box');

//     heartBox.forEach(el=>el.classList.toggle('animate'));

//     let emptyBox = document.querySelectorAll('.empty-box');
//     emptyBox.forEach(el=>el.classList.toggle('animate'));
// }, 3000);
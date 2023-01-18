

let loadHandler = function(evt) {

    document.getElementById("see-more-btn").addEventListener('click', function () {

        let funFacts = document.getElementById("fun-facts");

        let arrow = document.getElementById("arrow");

        if (funFacts.style.marginTop === '2.5vw' || funFacts.style.marginTop === '') {
            funFacts.style.marginTop = '25vw';
            arrow.innerText = "\u2191";
        } else {
            funFacts.style.marginTop = '2.5vw';
            arrow.innerText = "\u2193";
        }
    }, false)
}

onload = loadHandler;



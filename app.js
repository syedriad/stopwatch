

let mint = "00";
let sec = "00";
let milli = "00";

let getmint = document.getElementById('mint')
let getsec = document.getElementById('sec')
let getmilli = document.getElementById('milisec')

// let buttonstop = document.getElementById('butstart')


var shuruwat;



function start() {
    shuruwat = setInterval(function () {
        milli++
        getmilli.innerHTML = milli;              // meny phle  [getmilli.innerHTML = milli;] ye krdia then milli ++  ==>> ye ghalat hai.
        if (milli >= 100) {
            sec++
            getsec.innerHTML = sec;
            milli = 0

        }
        else if (sec >= 60) {
            mint++
            getmint.innerHTML = mint;
            sec = 0;
        }

    }, 10)
    
    document.getElementById('butstart').disabled = true;

}

function stop() {
    clearInterval(shuruwat)
    document.getElementById('butstart').disabled = false;
}

function reset() {

    mint = "00";
    sec = "00";
    milli = "00"

    getmint.innerHTML = mint
    getsec.innerHTML = sec
    getmilli.innerHTML = milli
    
    clearInterval(shuruwat)      // reset krny pr reset to ho jarha magr khud hi stopwatch on ho jarhi....islye clearinterval
    document.getElementById('butstart').disabled = false;
}
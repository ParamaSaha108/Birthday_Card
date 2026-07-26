// ===============================
// Elements
// ===============================

const loadingScreen = document.getElementById("loading-screen");
const birthdayScreen = document.getElementById("birthday-screen");
const countdown = document.getElementById("countdown");
const status = document.getElementById("status");
const birthdayMusic = document.getElementById("birthdayMusic");

birthdayScreen.style.display = "none";
countdown.textContent = "";

birthdayMusic.volume = 1;


// ===============================
// Loading Sequence
// ===============================

status.innerHTML = `
<p>> Establishing Secure Connection...</p>
`;

setTimeout(function () {

    status.innerHTML = `
        <p>> Establishing Secure Connection...</p>
        <p style="color:#00ff88;">✓ Connected</p>
    `;

}, 1000);

setTimeout(function () {

    status.innerHTML += `
        <br>
        <p>> Authenticating User...</p>
    `;

}, 2200);

setTimeout(function () {

    status.innerHTML += `
        <p style="color:#00ff88;">✓ Verified</p>
    `;

}, 3200);

setTimeout(function () {

    status.innerHTML += `
        <br>
        <p style="color:#FFD700;">Launching Birthday Surprise...</p>
    `;

}, 4200);

setTimeout(function () {

    status.innerHTML += `
        <br><br>
        <p style="
            color:#FFD700;
            font-size:20px;
            cursor:pointer;
            animation:blink 1s infinite;
        ">
            🔒 Click anywhere to continue program...
        </p>
    `;

}, 5000);

// ===============================
// Wait for User Click
// ===============================

document.addEventListener("click", startBirthday, { once: true });

function startBirthday() {

    let time = 3;

    countdown.textContent = time;

    const timer = setInterval(function(){

        time--;

        if(time > 0){

            countdown.textContent = time;

        }

        else{

            clearInterval(timer);

            countdown.textContent = "";

        // Music starts after countdown
        birthdayMusic.currentTime = 0;

        birthdayMusic.play().catch(function(error){

            console.log(error);

        });

        // Open birthday page after a short delay
        setTimeout(function(){

            loadingScreen.style.display = "none";

            birthdayScreen.style.display = "block";

            launchConfetti();

        },500);

    }

},1000);
}


// ===============================
// Confetti
// ===============================

function launchConfetti(){

    if(typeof confetti !== "function") return;

    const duration = 5000;

    const end = Date.now() + duration;

    const interval = setInterval(function(){

        if(Date.now() > end){

            clearInterval(interval);

            return;

        }

        confetti({

            particleCount:10,

            spread:80,

            angle:60,

            origin:{x:0}

        });

        confetti({

            particleCount:10,

            spread:80,

            angle:120,

            origin:{x:1}

        });

    },250);

}
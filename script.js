// CLOSE FLIP CLOCK ADS BAR
const targetDiv = document.getElementsByClassName("ad_container")[0];
const close_button_ads = document.getElementById("close_ads");




// TRAILER CONTAINER CLOSE BUTTON
const targetDiv_trailer = document.getElementsByClassName("trailer_container")[0];
const yt_trailer = document.getElementsByClassName("yt_trailer")[0];
const close_button_trailer = document.getElementById("close_trailer");

close_button_trailer.onclick = function () {
    targetDiv_trailer.style.display = "none";
    yt_trailer.src = "";
};


const feature_pop = document.getElementsByClassName("features_popup")[0];
const feature_close = document.getElementById("feature_toggle");
const feature_close1 = document.getElementById("feature_toggle1");

feature_close.onclick = function () {
    feature_pop.style.display = "none";
};

feature_close1.onclick = function () {
    feature_pop.style.display = "none";
}




document.getElementsByClassName("features_popup")[0].style.display = "none";

// POLL
let website = "flipclock.tk"



var current_ad = "feedback_form_clicks"






// DISPLAY NONE FLIP CLOCKS
document.getElementsByClassName('flip_container')[0].style.display = "none";
document.getElementsByClassName('flip_container')[1].style.display = "none";

// DISPLAY DEFAULT CLOCKS
document.getElementById('hours').style.display = "block";
document.getElementById('minutes').style.display = "block";


// GET COOKIES
const user_status = "You have subscribed to FlipClock PRO";
const date_subscribed = ('; '+document.cookie).split(`; date_subscribed=`).pop().split(';')[0];



setInterval(showTime, 1000);
function showTime() {
    // console.log('chechking')

	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();

	if (hour > 12) {
		hour -= 12;
	}
	if (hour == 0) {
		hour = 12;
	}


    // NO FLIP ANIMATION
    function defaultClock(){
        hour = hour < 10 ? "" + hour : hour;
        min = min < 10 ? "0" + min : min;

        document.getElementById("hours").innerHTML = hour;
        document.getElementById("minutes").innerHTML = min;

        document.getElementById('minutes').style.display = "block";
        document.getElementById('hours').style.display = "block";
    }

    // FLIP ANIMATION
    function flipClock(){
        if (min < 10){
            document.querySelector(".hidden_0").classList.remove("hide");
            document.getElementsByClassName("flip_container")[1].style.marginLeft = "18vw";
        }
        else{
            document.querySelector(".hidden_0").classList.add("hide");
            document.getElementsByClassName("flip_container")[1].style.marginLeft = "0";
        }

        flip(document.querySelector("[data-hour-tens]"), hour)
        flip(document.querySelector("[data-minute-tens]"), min)

        document.getElementsByClassName('flip_container')[0].style.display = "block";
        document.getElementsByClassName('flip_container')[1].style.display = "block";

        document.getElementById('hours').style.display = "none";
        document.getElementById('minutes').style.display = "none";
    }

    if (user_status == ""){
        defaultClock();
    }
    else if (user_status == "You have subscribed to FlipClock BASIC"){
        defaultClock();
    }
    else if (user_status == "You have subscribed to FlipClock PRO"){
        flipClock();
    }
}
showTime();


// FLIP ANIMATIONS MAIN FUNCTION
function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top")
    const startNumber = parseInt(topHalf.textContent)
    if (newNumber === startNumber) return

        const bottomHalf = flipCard.querySelector(".bottom")
        const topFlip = document.createElement("div")
        topFlip.classList.add("top-flip")
        const bottomFlip = document.createElement("div")
        bottomFlip.classList.add("bottom-flip")

        top.textContent = startNumber
        bottomHalf.textContent = startNumber
        topFlip.textContent = startNumber
        bottomFlip.textContent = newNumber

        topFlip.addEventListener("animationstart", e => {
            topHalf.textContent = newNumber
        })
        topFlip.addEventListener("animationend", e => {
            topFlip.remove()
        })
        bottomFlip.addEventListener("animationend", e => {
            bottomHalf.textContent = newNumber
            bottomFlip.remove()
        })
    flipCard.append(topFlip, bottomFlip)
}



// MENU
// TIME ZONE
function defaultTimeZone() {
    let time = new Date();
    let hour = time.getHours();
    
    am_pm = "AM";
    
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    document.getElementById("ampm").innerHTML = am_pm;
}

function time_zone(){
    var time_zone_element = document.getElementById("ampm");
    var time_zone = new Date();
    time_zone_element.innerHTML = time_zone.toLocaleString('en-US', { hour: 'numeric', hour12: true }).slice(2, 5);
}




// SHOW BASIC FEATURE
function showBasicFeatures() {
    // var visited = localStorage.getItem('visited');
    // if (visited) {
    //     document.getElementById("basic_feature").style.display = "none";
    //     localStorage.setItem('visited', true);
    // }
    // else {
        document.getElementsByClassName("features_popup")[0].style.display = "block";
        document.getElementById("basic_feature").style.display = "block";
        localStorage.setItem('visited', false);
    // }
}
// SHOW PRO FEATURE
function showProFeatures() {
    // var visited = localStorage.getItem('visited');
    // if (visited) {
    //     document.getElementById("pro_feature").style.display = "none";
    //     localStorage.setItem('visited', true);
    // }
    // else {
        document.getElementsByClassName("features_popup")[0].style.display = "block";
        document.getElementById("pro_feature").style.display = "block";
        localStorage.setItem('visited', false);
    // }
}



// console.clear();
if (user_status == "") {
    // LIVE ----------------------------------------------------------------
    console.warn("You have not subscribed to FlipClock Subscription");
    // LIVE ----------------------------------------------------------------

    document.querySelector('.themes_container').style.display = "none";
    document.querySelector('#pro_subscription').style.display = "none";
    document.querySelector('#pro_plus_subscription').style.display = "none";

    // DEFAULT TIME ZONE
    defaultTimeZone();
}

// IF USER PAID FOR PRO SUBSCRIPTION
else if (user_status == "You have subscribed to FlipClock BASIC")
{
    console.log(user_status);
    console.log(date_subscribed.slice(0, 42));
    console.log("FEATURES: \n • Themes");

    // ALLOW THEMES ONLY
    document.querySelector('#pro_subscription').style.display = "block";
    document.querySelector('#upgrade').style.display = "none";

    defaultTimeZone();
    document.getElementById("pro_feature").style.display = "none";
    showBasicFeatures();
}

// IF USER PAID FOR PRO PLUS SUBSCRIPTION
else if (user_status == "You have subscribed to FlipClock PRO"){
    console.log(user_status);
    console.log(date_subscribed.slice(0, 42));
    console.log("FEATURES: \n • Themes \n • Time Zone \n • Flip Animation");

    // ALLOW THEMES / FLIP ANIMATION / TIME ZONES
    document.querySelector('#pro_plus_subscription').style.display = "block";
    document.querySelector('#upgrade').style.display = "none";

    // TIME ZONE
    setInterval(time_zone,1000)
    time_zone();

    document.getElementById("basic_feature").style.display = "none";
    // showProFeatures();
}




// MENU
const menu = document.getElementById('menu_toggle');
const hiddenDiv = document.getElementsByClassName('menu2')[0];
const themesContainer = document.getElementsByClassName('themes_container')[0];
const subscriptionToggle1 = document.getElementsByClassName('subscription')[0];
const subscriptionToggle2 = document.getElementsByClassName('subscription')[1];

// LIVE ----------------------------------------------------------------
const fullSc = document.querySelector('.full');
// const fullSc_old = document.querySelector('.fullscreen_old');


// FULL SCREEN
fullSc.onclick = function DoFullscreen (event) {
	if (document.fullscreenElement) {
	  document.exitFullscreen()
	} else {
	  document.documentElement.requestFullscreen();
	}
}
// LIVE ----------------------------------------------------------------






// DIFF MENU FOR MOBILE AND DESKTOP
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    menu.onclick = function ToggleThing (event) {
        if (hiddenDiv.style.display == 'none') {
            hiddenDiv.style.display = 'flex'
            document.querySelector('#help_notion').style.display = "block";
        } else {
            hiddenDiv.style.display = 'none'
            document.querySelector('#help_notion').style.display = "none";
        }
    }
    
    subscriptionToggle1.onclick = function ToggleThing (event) {
        if (themesContainer.style.display == 'none') {
            themesContainer.style.display = 'flex'
        } else {
            themesContainer.style.display = 'none'
        }
    }
    
    subscriptionToggle2.onclick = function ToggleThing (event) {
        if (themesContainer.style.display == 'none') {
            themesContainer.style.display = 'flex'
        } else {
            themesContainer.style.display = 'none'
        }
    }
}
else{    
    // Show hidden DIV on hover
    menu.addEventListener('mouseover', function handleMouseOver() {
        hiddenDiv.style.display = 'flex';
        document.querySelector('#help_notion').style.display = "block";
    });
    hiddenDiv.addEventListener('mouseover', function handleMouseOver() {
        hiddenDiv.style.display = 'flex';
        document.querySelector('#help_notion').style.display = "block";
    });
    themesContainer.addEventListener('mouseout', function handleMouseOut() {
        themesContainer.style.display = 'none';
        hiddenDiv.style.display = 'none';
        document.querySelector('#help_notion').style.display = "none";
    });
    hiddenDiv.addEventListener('mouseout', function handleMouseOut() {
        hiddenDiv.style.display = 'none';
        document.querySelector('#help_notion').style.display = "none";
    })
    subscriptionToggle1.addEventListener('mouseover', function handleMouseOver() {
        themesContainer.style.display = 'flex';
    });
    subscriptionToggle2.addEventListener('mouseover', function handleMouseOver() {
        themesContainer.style.display = 'flex';
    });
    themesContainer.addEventListener('mouseover', function handleMouseOver() {
        themesContainer.style.display = 'flex';
    });
}



// CHANGED FOR TESTING ----------------------------------------------------------------
// const toggleSwitchOld = document.querySelector('.theme-switch-old input[type="checkbox"]');
// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }   
// }
// toggleSwitchOld.addEventListener('change', switchTheme, false);
// CHANGED FOR TESTING ----------------------------------------------------------------


// LIGHT MODE / DARK MODE / THEMES

// remove localStorage THEME on reload
window.onbeforeunload = function() {
    localStorage.removeItem('current_theme');
}


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }    

    // THEME 1
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme1") {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#1A1F1A');
        document.body.style.setProperty('--text', '#C4EBC1');
    } 
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme1') {
        document.body.style.setProperty('--background', '#E8FFE8');
        document.body.style.setProperty('--holder', '#D6F5D6');
        document.body.style.setProperty('--text', '#546654');
    }

    // THEME 2
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme2") {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#000000');
        document.body.style.setProperty('--text', '#fffcfc');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme2') {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#E4E7FE');
        document.body.style.setProperty('--text', '#000000');
    }

    // THEME 3
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme3") {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#271E1E');
        document.body.style.setProperty('--text', '#EF6666');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme3') {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#FFEDED');
        document.body.style.setProperty('--text', '#FF8F8F');
    }

    // THEME 4
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme4") {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#221E17');
        document.body.style.setProperty('--text', '#eb6913');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme4') {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#FFEED6');
        document.body.style.setProperty('--text', '#eb6913');
    }

    // THEME 5
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme5") {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#1A1E23');
        document.body.style.setProperty('--text', '#CCE1FF');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme5') {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#E4EFFF');
        document.body.style.setProperty('--text', '#2C3440');
    }

    // THEME 6
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme6") {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#14161A');
        document.body.style.setProperty('--text', '#FFD458');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme6') {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#FFF8E1');
        document.body.style.setProperty('--text', '#FFDB57');
    }

    // THEME 7
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme7") {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#221D23');
        document.body.style.setProperty('--text', '#E3CEEC');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme7') {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#F8E8FF');
        document.body.style.setProperty('--text', '#574260');
    }

    // THEME 8
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme8") {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#1E2320');
        document.body.style.setProperty('--text', '#18abdb');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme8') {
        document.body.style.setProperty('--background', '#303030');
        document.body.style.setProperty('--holder', '#E6F8EE');
        document.body.style.setProperty('--text', '#18abdb');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);



// THEME 1
document.querySelector(".theme1").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme1");
    document.body.style.setProperty('--background', '#303030');
    document.body.style.setProperty('--holder', '#1A1F1A');
    document.body.style.setProperty('--text', '#C4EBC1');
});

// THEME 2
document.querySelector(".theme2").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme2");
    document.body.style.setProperty('--background', '#303030');
    document.body.style.setProperty('--holder', '#000000');
    document.body.style.setProperty('--text', '#fffcfc');
});

// THEME 3
document.querySelector(".theme3").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme3");
    document.body.style.setProperty('--background', '#303030');
    document.body.style.setProperty('--holder', '#271E1E');
    document.body.style.setProperty('--text', '#EF6666');
});

// THEME 4
document.querySelector(".theme4").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme4");
    document.body.style.setProperty('--background', '#303030');
    document.body.style.setProperty('--holder', '#221E17');
    document.body.style.setProperty('--text', '#eb6913');
});

// THEME 5
document.querySelector(".theme5").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme5");
    document.body.style.setProperty('--background', '#303030');
    document.body.style.setProperty('--holder', '#1A1E23');
    document.body.style.setProperty('--text', '#CCE1FF');
});

// THEME 6
document.querySelector(".theme6").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme6");
    document.body.style.setProperty('--background', '#303030');
    document.body.style.setProperty('--holder', '#14161A');
    document.body.style.setProperty('--text', '#FFD458');
});

// THEME 7
document.querySelector(".theme7").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme7");
    document.body.style.setProperty('--background', '#303030');
    document.body.style.setProperty('--holder', '#221D23');
    document.body.style.setProperty('--text', '#E3CEEC');
});


// THEME 8
document.querySelector(".theme8").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme8");
    document.body.style.setProperty('--background', '#303030');
    document.body.style.setProperty('--holder', '#1E2320');
    document.body.style.setProperty('--text', '#18abdb');
});
















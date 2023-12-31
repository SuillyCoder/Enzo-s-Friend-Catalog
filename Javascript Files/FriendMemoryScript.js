document.addEventListener('DOMContentLoaded', function () {
    playTheThemeSong();
});

function playTheThemeSong() {
    // Check if there's a saved time and set it
    const savedTime = localStorage.getItem('audioTime');
    if (savedTime) {
        document.getElementById("theme").currentTime = parseFloat(savedTime);
    }

    // Save the current time of the audio player in localStorage
    document.getElementById("theme").addEventListener('timeupdate', function () {
        localStorage.setItem('audioTime', this.currentTime.toString());
    });

    // Play the theme song
    document.getElementById("theme").play();
}

const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')

let navPage = 3;

rightButton.addEventListener('click', e=>{
 navPage++
 pageNavigator()
 console.log(navPage)
})


leftButton.addEventListener('click', e=>{
    navPage--
    pageNavigator()
    console.log(navPage)
})

function pageNavigator(){

    if (navPage == 1){
        document.getElementById("X1Y1").src="/Friend Media/Friend-Memories/2019/2019X1Y1.jpeg"
        document.getElementById("X1Y2").src="/Friend Media/Friend-Memories/2019/2019X1Y2.jpeg"
        document.getElementById("X1Y3").src="/Friend Media/Friend-Memories/2019/2019X1Y3.jpeg"
        document.getElementById("X2Y1").src="/Friend Media/Friend-Memories/2019/2019X2Y1.jpeg"
        document.getElementById("X2Y2").src="/Friend Media/Friend-Memories/2019/2019X2Y2.jpeg"
        document.getElementById("X2Y3").src="/Friend Media/Friend-Memories/2019/2019X2Y3.jpeg"
        document.getElementById("X3Y1").src="/Friend Media/Friend-Memories/2019/2019X3Y1.jpeg"
        document.getElementById("X3Y2").src="/Friend Media/Friend-Memories/2019/2019X3Y2.jpeg"
        document.getElementById("X3Y3").src="/Friend Media/Friend-Memories/2019/2019X3Y3.jpeg"
        document.getElementById('year').innerHTML = "2019"
    }
    else if (navPage == 2){
        document.getElementById("X1Y1").src="/Friend Media/Friend-Memories/2020/2020X1Y1.jpeg"
        document.getElementById("X1Y2").src="/Friend Media/Friend-Memories/2020/2020X1Y2.jpeg"
        document.getElementById("X1Y3").src="/Friend Media/Friend-Memories/2020/2020X1Y3.jpeg"
        document.getElementById("X2Y1").src="/Friend Media/Friend-Memories/2020/2020X2Y1.jpeg"
        document.getElementById("X2Y2").src="/Friend Media/Friend-Memories/2020/2020X2Y2.jpeg"
        document.getElementById("X2Y3").src="/Friend Media/Friend-Memories/2020/2020X2Y3.jpeg"
        document.getElementById("X3Y1").src="/Friend Media/Friend-Memories/2020/2020X3Y1.jpeg"
        document.getElementById("X3Y2").src="/Friend Media/Friend-Memories/2020/2020X3Y2.jpeg"
        document.getElementById("X3Y3").src="/Friend Media/Friend-Memories/2020/2020X3Y3.jpeg"
        document.getElementById('year').innerHTML = "2020"
    }
    else if (navPage == 3){
        document.getElementById("X1Y1").src="/Friend Media/Friend-Memories/2022/2022X1Y1.jpeg"
        document.getElementById("X1Y2").src="/Friend Media/Friend-Memories/2022/2022X1Y2.jpeg"
        document.getElementById("X1Y3").src="/Friend Media/Friend-Memories/2022/2022X1Y3.jpeg"
        document.getElementById("X2Y1").src="/Friend Media/Friend-Memories/2022/2022X2Y1.jpeg"
        document.getElementById("X2Y2").src="/Friend Media/Friend-Memories/2022/2022X2Y2.jpeg"
        document.getElementById("X2Y3").src="/Friend Media/Friend-Memories/2022/2022X2Y3.jpeg"
        document.getElementById("X3Y1").src="/Friend Media/Friend-Memories/2022/2022X3Y1.jpeg"
        document.getElementById("X3Y2").src="/Friend Media/Friend-Memories/2022/2022X3Y2.jpeg"
        document.getElementById("X3Y3").src="/Friend Media/Friend-Memories/2022/2022X3Y3.jpeg"
        document.getElementById('year').innerHTML = "2022"
    }
    else if (navPage == 4){
        document.getElementById("X1Y1").src="/Friend Media/Friend-Memories/2023/2023X1Y1.jpeg"
        document.getElementById("X1Y2").src="/Friend Media/Friend-Memories/2023/2023X1Y2.jpeg"
        document.getElementById("X1Y3").src="/Friend Media/Friend-Memories/2023/2023X1Y3.jpeg"
        document.getElementById("X2Y1").src="/Friend Media/Friend-Memories/2023/2023X2Y1.jpeg"
        document.getElementById("X2Y2").src="/Friend Media/Friend-Memories/2023/2023X2Y2.jpeg"
        document.getElementById("X2Y3").src="/Friend Media/Friend-Memories/2023/2023X2Y3.jpeg"
        document.getElementById("X3Y1").src="/Friend Media/Friend-Memories/2023/2023X3Y1.jpeg"
        document.getElementById("X3Y2").src="/Friend Media/Friend-Memories/2023/2023X3Y2.jpeg"
        document.getElementById("X3Y3").src="/Friend Media/Friend-Memories/2023/2023X3Y3.jpeg"
        document.getElementById('year').innerHTML = "2023"
    }
    else if (navPage == 5){
        document.getElementById("X1Y1").src="/Friend Media/Friend-Memories/2023-2/2-2023X1Y1.jpeg"
        document.getElementById("X1Y2").src="/Friend Media/Friend-Memories/2023-2/2-2023X1Y2.jpeg"
        document.getElementById("X1Y3").src="/Friend Media/Friend-Memories/2023-2/2-2023X1Y3.jpeg"
        document.getElementById("X2Y1").src="/Friend Media/Friend-Memories/2023-2/2-2023X2Y1.jpeg"
        document.getElementById("X2Y2").src="/Friend Media/Friend-Memories/2023-2/2-2023X2Y2.jpeg"
        document.getElementById("X2Y3").src="/Friend Media/Friend-Memories/2023-2/2-2023X2Y3.jpeg"
        document.getElementById("X3Y1").src="/Friend Media/Friend-Memories/2023-2/2-2023X3Y1.jpeg"
        document.getElementById("X3Y2").src="/Friend Media/Friend-Memories/2023-2/2-2023X3Y2.jpeg"
        document.getElementById("X3Y3").src="/Friend Media/Friend-Memories/2023-2/2-2023X3Y3.jpeg"
        document.getElementById('year').innerHTML = "2023"
    }
    else if (navPage == 0){
        navPage++
    }
    else{
        navPage--
    }
}
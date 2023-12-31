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

let navPage = 4;

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
       
        document.getElementById('UP1').src="/Friend Media/Friend List/Edmond.jpeg"
        document.getElementById('UP2').src="/Friend Media/Friend List/Migy.png"
        document.getElementById('UP3').src="/Friend Media/Friend List/Matthew.jpeg"
        document.getElementById('UP4').src="/Friend Media/Friend List/Ethan.png"
        document.getElementById('LOW1').src="/Friend Media/Friend List/Marky.jpeg"
        document.getElementById('LOW2').src="/Friend Media/Friend List/KC.jpeg"
        document.getElementById('LOW3').src="/Friend Media/Friend List/Erin.jpeg"
        document.getElementById('LOW4').src="/Friend Media/Friend List/Wesley.jpeg"
        document.getElementById('era').innerHTML = "ELEMENTARY ERA"
    }
    else if (navPage == 2){
        document.getElementById('UP1').src="/Friend Media/Friend List/Pastoriza.jpeg"
        document.getElementById('UP2').src="/Friend Media/Friend List/Pazon.jpeg"
        document.getElementById('UP3').src="/Friend Media/Friend List/Labra.jpeg"
        document.getElementById('UP4').src="/Friend Media/Friend List/Larida.jpeg"
        document.getElementById('LOW1').src="/Friend Media/Friend List/Lopez.jpeg"
        document.getElementById('LOW2').src="/Friend Media/Friend List/Caballes.jpeg"
        document.getElementById('LOW3').src="/Friend Media/Friend List/Manigos.jpeg"
        document.getElementById('LOW4').src="/Friend Media/Friend List/Lavandero.jpeg"
        document.getElementById('era').innerHTML = "HIGHSCHOOL ERA"
    }
    else if (navPage == 3){
        document.getElementById('UP1').src="/Friend Media/Friend List/Cavada.jpeg"
        document.getElementById('UP2').src="/Friend Media/Friend List/Corbet.jpeg"
        document.getElementById('UP3').src="/Friend Media/Friend List/Belcina.jpeg"
        document.getElementById('UP4').src="/Friend Media/Friend List/Senador.jpeg"
        document.getElementById('LOW1').src="/Friend Media/Friend List/Lasquites.jpeg"
        document.getElementById('LOW2').src="/Friend Media/Friend List/Denzon.jpeg"
        document.getElementById('LOW3').src="/Friend Media/Friend List/Roda.jpeg"
        document.getElementById('LOW4').src="/Friend Media/Friend List/DeLosAngeles.jpeg"
        document.getElementById('era').innerHTML = "HIGHSCHOOL ERA"
    }
    else if (navPage == 4){
        document.getElementById('UP1').src="/Friend Media/Friend List/Vaun.jpeg"
        document.getElementById('UP2').src="/Friend Media/Friend List/Andre.jpeg"
        document.getElementById('UP3').src="/Friend Media/Friend List/Enrico.jpeg"
        document.getElementById('UP4').src="/Friend Media/Friend List/Travis.jpeg"
        document.getElementById('LOW1').src="/Friend Media/Friend List/Lorenz.jpeg"
        document.getElementById('LOW2').src="/Friend Media/Friend List/Kurt.jpeg"
        document.getElementById('LOW3').src="/Friend Media/Friend List/Hibiki.jpeg"
        document.getElementById('LOW4').src="/Friend Media/Friend List/Dean.jpeg"
        document.getElementById('era').innerHTML = "COLLEGE ERA"
    }
    else if (navPage == 5){
        document.getElementById('UP1').src="/Friend Media/Friend List/Venice.jpeg"
        document.getElementById('UP2').src="/Friend Media/Friend List/Rafiq.jpeg"
        document.getElementById('UP3').src="/Friend Media/Friend List/Ghemar.jpeg"
        document.getElementById('UP4').src="/Friend Media/Friend List/John.jpeg"
        document.getElementById('LOW1').src="/Friend Media/Friend List/Paul.jpeg"
        document.getElementById('LOW2').src="/Friend Media/Friend List/Remy.jpeg"
        document.getElementById('LOW3').src="/Friend Media/Friend List/Georelle.jpeg"
        document.getElementById('LOW4').src="/Friend Media/Friend List/Bea.jpeg"
        document.getElementById('era').innerHTML = "COLLEGE ERA"
    }
    else if (navPage == 6){
        document.getElementById('UP1').src="/Friend Media/Friend List/Zoe.jpeg"
        document.getElementById('UP2').src="/Friend Media/Friend List/Ghianne.jpeg"
        document.getElementById('UP3').src="/Friend Media/Friend List/Re-Anne.jpeg"
        document.getElementById('UP4').src="/Friend Media/Friend List/Gerlie.jpeg"
        document.getElementById('LOW1').src="/Friend Media/Friend List/Leijude.jpeg"
        document.getElementById('LOW2').src="/Friend Media/Friend List/Dave.jpeg"
        document.getElementById('LOW3').src="/Friend Media/Friend List/Ichi.jpeg"
        document.getElementById('LOW4').src="/Friend Media/Friend List/Eon.jpeg"
        document.getElementById('era').innerHTML = "FRIENDS FROM HIGH AND LOW PLACES"
    }
    else if (navPage == 0){
        navPage++
    }
    else{
        navPage--
    }
}


// ================================== CLICKER CODE ======================== //

const upperOne = document.getElementById('UP1');
const upperTwo = document.getElementById('UP2');
const upperThree = document.getElementById('UP3');
const upperFour = document.getElementById('UP4');
const lowerOne = document.getElementById('LOW1');
const lowerTwo = document.getElementById('LOW2');
const lowerThree = document.getElementById('LOW3');
const lowerFour = document.getElementById('LOW4');



upperOne.addEventListener ('click', e =>{
    if (navPage == 1){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Edmond.jpeg"
        document.getElementById('friendName').innerHTML = "Edmond Jufel Mendoza"
    }
    else if (navPage == 2){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Pastoriza.jpeg"
        document.getElementById('friendName').innerHTML = "Alnino Manwil Pastoriza"
    }
    else if (navPage == 3){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Cavada.jpeg"
        document.getElementById('friendName').innerHTML = "Gian Franco Cavada"
    }

    else if (navPage == 4){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Vaun.jpeg"
        document.getElementById('friendName').innerHTML = "Vaun Michael Pace"
    }

    else if (navPage == 5){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Venice.jpeg"
        document.getElementById('friendName').innerHTML = "Venice Margareth Buaya"
    }

    else if (navPage == 6){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Zoe.jpeg"
        document.getElementById('friendName').innerHTML = "Zoe Lara Denise Lerin"
    }
})

//-----------------------------------------------//

upperTwo.addEventListener ('click', e =>{
    if (navPage == 1){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Migy.png"
        document.getElementById('friendName').innerHTML = "Adryan Miguel Gamallo"
    }
    else if (navPage == 2){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Pazon.jpeg"
        document.getElementById('friendName').innerHTML = "Nikolai Tristan Pazon"
    }
    else if (navPage == 3){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Corbet.jpeg"
        document.getElementById('friendName').innerHTML = "Yuan Mikel Corbet"
    }

    else if (navPage == 4){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Andre.jpeg"
        document.getElementById('friendName').innerHTML = "Jan Andre Aquino"
    }

    else if (navPage == 5){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Rafiq.jpeg"
        document.getElementById('friendName').innerHTML = "Rafiq Reos Esler"
    }

    else if (navPage == 6){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Ghianne.jpeg"
        document.getElementById('friendName').innerHTML = "Ghianna Bantilan"
    }
})

//-----------------------------------------------//

upperThree.addEventListener ('click', e =>{
    if (navPage == 1){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Matthew.jpeg"
        document.getElementById('friendName').innerHTML = "Matthew Kurt Caminade"
    }
    else if (navPage == 2){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Labra.jpeg"
        document.getElementById('friendName').innerHTML = "Ira Yzykiel Labra"
    }
    else if (navPage == 3){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Belcina.jpeg"
        document.getElementById('friendName').innerHTML = "Nino Dwayne Belcina"
    }

    else if (navPage == 4){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Enrico.jpeg"
        document.getElementById('friendName').innerHTML = "John Enrico Lauron"
    }

    else if (navPage == 5){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Ghemar.jpeg"
        document.getElementById('friendName').innerHTML = "Ghemarson John Nacua"
    }

    else if (navPage == 6){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Re-Anne.jpeg"
        document.getElementById('friendName').innerHTML = "Re-Anne Joy Pagente"
    }
})

//-----------------------------------------------//

upperFour.addEventListener ('click', e =>{
    if (navPage == 1){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Ethan.png"
        document.getElementById('friendName').innerHTML = "Ethan James Saranza"
    }
    else if (navPage == 2){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Larida.jpeg"
        document.getElementById('friendName').innerHTML = "Oliver Wendell Larida"
    }
    else if (navPage == 3){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Senador.jpeg"
        document.getElementById('friendName').innerHTML = "Louie Victor Senador"
    }

    else if (navPage == 4){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Travis.jpeg"
        document.getElementById('friendName').innerHTML = "Travis Puebla"
    }

    else if (navPage == 5){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/John.jpeg"
        document.getElementById('friendName').innerHTML = "John Bactasa"
    }

    else if (navPage == 6){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Gerlie.jpeg"
        document.getElementById('friendName').innerHTML = "Gerlie Guantero"
    }
})

//-----------------------------------------------//

lowerOne.addEventListener ('click', e =>{
    if (navPage == 1){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Marky.jpeg"
        document.getElementById('friendName').innerHTML = "Mark Caesar Yamed"
    }
    else if (navPage == 2){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Lopez.jpeg"
        document.getElementById('friendName').innerHTML = "Mart Michael Lopez"
    }
    else if (navPage == 3){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Lasquites.jpeg"
        document.getElementById('friendName').innerHTML = "Dominic Lasquites"
    }

    else if (navPage == 4){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Lorenz.jpeg"
        document.getElementById('friendName').innerHTML = "Lorenz Soriano"
    }

    else if (navPage == 5){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Paul.jpeg"
        document.getElementById('friendName').innerHTML = "Paul Andrew Parras"
    }

    else if (navPage == 6){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Leijude.jpeg"
        document.getElementById('friendName').innerHTML = "Leijude Malolot"
    }
})

//-----------------------------------------------//

lowerTwo.addEventListener ('click', e =>{
    if (navPage == 1){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/KC.jpeg"
        document.getElementById('friendName').innerHTML = "KC Completo"
    }
    else if (navPage == 2){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Caballes.jpeg"
        document.getElementById('friendName').innerHTML = "Alexander Gabriel Caballes"
    }
    else if (navPage == 3){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Denzon.jpeg"
        document.getElementById('friendName').innerHTML = "Polly France Denzon"
    }

    else if (navPage == 4){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Kurt.jpeg"
        document.getElementById('friendName').innerHTML = "Kurt Casey Naranjo"
    }

    else if (navPage == 5){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Remy.jpeg"
        document.getElementById('friendName').innerHTML = "Remy Gabriel Cordero"
    }

    else if (navPage == 6){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Dave.jpeg"
        document.getElementById('friendName').innerHTML = "Dave Bullo"
    }
})

//-----------------------------------------------//

lowerThree.addEventListener ('click', e =>{
    if (navPage == 1){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Erin.jpeg"
        document.getElementById('friendName').innerHTML = "Margareth Erin Bacus"
    }
    else if (navPage == 2){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Manigos.jpeg"
        document.getElementById('friendName').innerHTML = "Reggie Adrianne Manigos"
    }
    else if (navPage == 3){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Roda.jpeg"
        document.getElementById('friendName').innerHTML = "Noel Terrence Roda"
    }

    else if (navPage == 4){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Hibiki.jpeg"
        document.getElementById('friendName').innerHTML = "Hibiki Honda"
    }

    else if (navPage == 5){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Georelle.jpeg"
        document.getElementById('friendName').innerHTML = "Georelle Ila"
    }

    else if (navPage == 6){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Ichi.jpeg"
        document.getElementById('friendName').innerHTML = "Sigrid Allison Laputan (Ichi)"
    }
})

//-----------------------------------------------//

lowerFour.addEventListener ('click', e =>{
    if (navPage == 1){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Wesley.jpeg"
        document.getElementById('friendName').innerHTML = "Wesley Abraham Lanete"
    }
    else if (navPage == 2){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Lavandero.jpeg"
        document.getElementById('friendName').innerHTML = "John Emmanuele Lavandero"
    }
    else if (navPage == 3){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/DeLosAngeles.jpeg"
        document.getElementById('friendName').innerHTML = "Zion De Los Angeles"
    }

    else if (navPage == 4){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Dean.jpeg"
        document.getElementById('friendName').innerHTML = "Dean Zander Sotto"
    }

    else if (navPage == 5){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Bea.jpeg"
        document.getElementById('friendName').innerHTML = "Beatriz Ysabel Loreno"
    }

    else if (navPage == 6){
        document.getElementById('friendPicture').src="/Friend Media/Friend List/Eon.jpeg"
        document.getElementById('friendName').innerHTML = "Eon Capul"
    }
})
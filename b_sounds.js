var audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9;
var vol1, vol2, vol3, vol4, vol5, vol6, vol7, vol8, vol9;
/*Main funtion */
function audioPlayer() {
  audio1 = new Audio("rain/Gentle-rain.mp3");
  audio2 = new Audio("rain/Rain-in-car.mp3");
  audio3 = new Audio("rain/Thunder-clap.mp3");
  audio4 = new Audio("birds/Bird-coo.mp3");
  audio5 = new Audio("birds/Blackbird-tweet.mp3");
  audio6 = new Audio("birds/Ducks.mp3");
  audio7 = new Audio("water/Ocean-waves.mp3");
  audio8 = new Audio("water/Rain-gutter.mp3");
  audio9 = new Audio("water/Rock-in-water.mp3");
  audio1.loop = true;
  audio2.loop = true;
  audio3.loop = true;
  audio4.loop = true;
  audio5.loop = true;
  audio6.loop = true;
  audio7.loop = true;
  audio8.loop = true;
  audio9.loop = true;


  vol1 = document.querySelector(".vone");
  vol1.addEventListener("click", setVoluume1);
  vol2 = document.querySelector(".vtwo");
  vol2.addEventListener("click", setVoluume2);
  vol3 = document.querySelector(".vthree");
  vol3.addEventListener("click", setVoluume3);
  vol4 = document.querySelector(".vfour");
  vol4.addEventListener("click", setVoluume4);
  vol5 = document.querySelector(".vfive");
  vol5.addEventListener("click", setVoluume5);
  vol6 = document.querySelector(".vsix");
  vol6.addEventListener("click", setVoluume6);
  vol7 = document.querySelector(".vseven");
  vol7.addEventListener("click", setVoluume7);
  vol8 = document.querySelector(".veight");
  vol8.addEventListener("click", setVoluume8);
  vol9 = document.querySelector(".vnine");
  vol9.addEventListener("click", setVoluume9);


   document.querySelector(".one").addEventListener("click" , player1);
   document.querySelector(".two").addEventListener("click" , player2);
   document.querySelector(".three").addEventListener("click" , player3);
   document.querySelector(".four").addEventListener("click" , player4);
   document.querySelector(".five").addEventListener("click" , player5);
   document.querySelector(".six").addEventListener("click" , player6);
   document.querySelector(".seven").addEventListener("click" , player7);
   document.querySelector(".eight").addEventListener("click" , player8);
   document.querySelector(".nine").addEventListener("click" , player9);


  function player1() {
     if (audio1.paused) {
         document.querySelector(".one").src="pause.png";
       }
      else {
         document.querySelector(".one").src="play.jpg";
       }
     return audio1.paused ? audio1.play() : audio1.pause();
   }

   function player2() {
     if (audio2.paused) {
         document.querySelector(".two").src="pause.png";
       }
      else {
         document.querySelector(".two").src="play.jpg";
       }
     return audio2.paused ? audio2.play() : audio2.pause();
   }

   function player3() {
     if (audio3.paused) {
         document.querySelector(".three").src="pause.png";
       }
      else {
         document.querySelector(".three").src="play.jpg";
       }
     return audio3.paused ? audio3.play() : audio3.pause();
   }

   function player4() {
     if (audio4.paused) {
         document.querySelector(".four").src="pause.png";
       }
      else {
         document.querySelector(".four").src="play.jpg";
       }
     return audio4.paused ? audio4.play() : audio4.pause();
   }

   function player5() {
     if (audio5.paused) {
         document.querySelector(".five").src="pause.png";
       }
      else {
         document.querySelector(".five").src="play.jpg";
       }
     return audio5.paused ? audio5.play() : audio5.pause();
   }

   function player6() {
     if (audio6.paused) {
         document.querySelector(".six").src="pause.png";
       }
      else {
         document.querySelector(".six").src="play.jpg";
       }
     return audio6.paused ? audio6.play() : audio6.pause();
   }

   function player7() {
     if (audio7.paused) {
         document.querySelector(".seven").src="pause.png";
       }
      else {
         document.querySelector(".seven").src="play.jpg";
       }
     return audio7.paused ? audio7.play() : audio7.pause();
   }

   function player8() {
     if (audio8.paused) {
         document.querySelector(".eight").src="pause.png";
       }
      else {
         document.querySelector(".eight").src="play.jpg";
       }
     return audio8.paused ? audio8.play() : audio8.pause();
   }

   function player9() {
     if (audio9.paused) {
         document.querySelector(".nine").src="pause.png";
       }
      else {
         document.querySelector(".nine").src="play.jpg";
       }
     return audio9.paused ? audio9.play() : audio9.pause();
   }


/* adding functions in function  */
  function setVoluume1() {
    audio1.volume = vol1.value / 100;
  }
  function setVoluume2() {
    audio2.volume = vol2.value / 100;
  }
  function setVoluume3() {
    audio3.volume = vol3.value / 100;
  }
  function setVoluume4() {
    audio4.volume = vol4.value / 100;
  }
  function setVoluume5() {
    audio5.volume = vol5.value / 100;
  }
  function setVoluume6() {
    audio6.volume = vol6.value / 100;
  }
  function setVoluume7() {
    audio7.volume = vol7.value / 100;
  }
  function setVoluume8() {
    audio8.volume = vol8.value / 100;
  }
  function setVoluume9() {
    audio9.volume = vol9.value / 100;
  }


}





window.addEventListener("load", audioPlayer);

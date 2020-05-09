
var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var scoreCard = document.getElementById('scoreCard');
var quizBox = document.getElementById('questionBox');
var scoreBox = document.getElementById('scoreBox');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var sn = 0, dk = 0, sa = 0;
var myVar = setInterval(myTimer, 1000);


var app = {
   questions: [
      { q: 'Ilk Dunya Kupasini Hangi Ulke Kazanmistir?', options: ['Almanya', 'Brezilya', 'Uruguay', 'Italya'], answer: 3 },

      { q: 'Bir kulup formasiyla sampiyonlar liginde en cok gol atan futbolcu kimdir?', options: ['C. Ronaldo', 'Messi', 'Neymar', 'Suarez'], answer: 2 },

      { q: 'En cok dunya kupasi kazanan ulke hangisidir?', options: ['Almanya', 'Uruguay', 'Italya', 'Brezilya'], answer: 4 },

      { q: 'TFF hangi tarihte kurulmustur', options: ['1920', '1921', '1922', '1923'], answer: 4 },

      { q: 'Maradona hangi macta Tanrinin eli diye adlandirilan golu atmistir?', options: ['Arjantin  Ingiltere', 'Arjantin  Almanya', 'Arjantin  Brezilya', 'Almanya Brezilya'], answer: 1 }
   ],
   index: 0,
   load: function () {
      if (this.index <= this.questions.length - 1) {
         quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
         op1.innerHTML = this.questions[this.index].options[0];
         op2.innerHTML = this.questions[this.index].options[1];
         op3.innerHTML = this.questions[this.index].options[2];
         op4.innerHTML = this.questions[this.index].options[3];
         this.scoreCard();
      }
      else {
         clearInterval(myVar);
         quizBox.innerHTML = "Test bitti ...!";
         scoreBox.visible = "true";
         var date = new Date();
         date.setHours(sa, dk, sn);
         scoreBox.innerHTML = "Tamamlanan Sure : " + date.toLocaleTimeString();
         op1.style.display = "none";
         op2.style.display = "none";
         op3.style.display = "none";
         op4.style.display = "none";
         btn.style.display = "none";
      }
   },
   next: function () {
      this.index++;
      this.load();
   },
   check: function (ele) {

      var id = ele.id.split('');

      if (id[id.length - 1] == this.questions[this.index].answer) {
         this.score++;
         ele.className = "correct";
         ele.innerHTML = "Dogru";
         this.scoreCard();
      }
      else {
         ele.className = "wrong";
         ele.innerHTML = "Yanlis";
         document.getElementById('op' + this.questions[this.index].answer).className = "correct";
      }
   },
   notClickAble: function () {
      for (let i = 0; i < ul.children.length; i++) {
         ul.children[i].style.pointerEvents = "none";
      }
   },

   clickAble: function () {
      for (let i = 0; i < ul.children.length; i++) {
         ul.children[i].style.pointerEvents = "auto";
         ul.children[i].className = ''

      }
   },
   score: 0,
   scoreCard: function () {
      scoreCard.innerHTML = this.score + "/" + this.questions.length + " = " + (this.score) * 20 + " puan";
   }

}


window.onload = app.load();
function myTimer() {
   sn++;
   if (sn == 60) {
      dk++;
      sn = 0;
      if (dk == 60) {
         sa++;
         dk = 0;
      }
   }
   var d = new Date();
   d.setHours(sa, dk, sn);
   document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

function button(ele) {
   app.check(ele);
   app.notClickAble();
}

function next() {
   app.next();
   app.clickAble();
}




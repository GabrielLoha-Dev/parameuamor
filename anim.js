var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Quando estou com você", time: 10 },
  { text: "Qualquer chuva é sereno", time: 14 },
  { text: "Toda queda é leve", time: 18 },
  { text: "Todo furacão é brisa", time: 22 },
  { text: "Meu mundo é mais bonito com você", time: 26 },
  { text: "No jardim do meu coração", time: 30 },
  { text: "Florescem sentimentos de amor", time: 34 },
  { text: "Cada pétala guarda um sonho", time: 38 },
  { text: "Que desabrocha com teu calor", time: 42 },
  { text: "Tua presença é um luar", time: 46 },
  { text: "Que reflete sobre minhas aguas", time: 50 },
  { text: "E em meio às flores eu sei", time: 54 },
  { text: "Que seu perfume é o mais desejado por mim.", time: 58 },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

// Creditos: FS Gabriel Loha
setTimeout(ocultarTitulo, 216000);

function speakText() {
      const text = document.getElementById("text").value;
    // const error = document.getElementById("error");

      if (!text) {
        alert("Veuillez écrire un texte !");    
        //error.innerText = "Veuillez ecrire un text";
        //error.style.display = "block";
        return;
      }

      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "fr-FR"; // voix française
      speech.rate = 1;       // vitesse
      speech.pitch = 1;      // tonalité

      window.speechSynthesis.speak(speech);
    }
  
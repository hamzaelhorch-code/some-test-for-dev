// Récupérer le bouton
const toggleButton = document.getElementById('toggleMode');

// Vérifier si l'utilisateur a déjà un mode préféré
if (localStorage.getItem('mode') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Ajouter l'événement click sur le bouton
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Sauvegarder le mode dans le localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});

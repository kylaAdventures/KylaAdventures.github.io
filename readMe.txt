

```javascript
const navbar = document.getElementById("navbar");
let lastScroll = 0;
let timeout;

window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY / (document.body.offsetHeight - window.innerHeight);

  if (window.scrollY < lastScroll || scrollValue < 0.2) {
    clearTimeout(timeout);
    navbar.style.opacity = "1";
    navbar.style.visibility = "visible";
  } else {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      navbar.style.opacity = "0";
      navbar.style.visibility = "hidden";
    }, 1000);
  }

  lastScroll = window.scrollY;
});
```

Les modifications apportées :
- J'ai ajusté le calcul de `scrollValue` pour qu'il soit basé uniquement sur la position de défilement verticale (`window.scrollY`) par rapport à la hauteur totale du contenu (`document.body.offsetHeight - window.innerHeight`). Cela garantit que la barre de navigation reste visible lorsque l'utilisateur remonte en haut de la page.
- J'ai supprimé l'ajout de `viewportHeight` au calcul de `scrollValue`, car cela n'était pas nécessaire pour l'objectif souhaité.


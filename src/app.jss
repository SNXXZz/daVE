const gallery = document.getElementById("gallery");

// Liste des templates à afficher
const templates = [
  {
    title: "Template Résultat de Match",
    image: "assets/images/template1.jpg",
    link: "https://canva.link/s062unajqeg63xo"
  },
  {
    title: "Template Breaking News",
    image: "assets/images/template2.jpg",
    link: "https://www.canva.com/ton-template-2"
  },
  {
    title: "Template Composition d'Équipe",
    image: "assets/images/template3.jpg",
    link: "https://www.canva.com/ton-template-3"
  }
];

// Génération dynamique
function renderGallery() {
  gallery.innerHTML = templates.map(tpl => `
    <div class="card">
      <img src="${tpl.image}" alt="${tpl.title}">
      <div class="card-content">
        <div class="card-title">${tpl.title}</div>
        <a class="card-btn" href="${tpl.link}" target="_blank">Voir sur Canva</a>
      </div>
    </div>
  `).join("");
}

renderGallery();

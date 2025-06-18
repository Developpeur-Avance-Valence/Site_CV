
const container = document.getElementById('container');
const fiches = Array.from(container.children);
const fichesMelangees = [];

while (fiches.length > 0) {
    let i = Math.floor(Math.random() * fiches.length);
    fichesMelangees.push(fiches[i]);
    fiches.splice(i, 1);
}

fichesMelangees.forEach(fiche => container.appendChild(fiche));


//Composant header
const header = document.getElementById("header");
header.innerHTML = `
<div class="row banniere">
            <div class="col-3 col-lg-2 h-100 text-center">
                <a href="index.html"><img class="h-100 img-fluid object-fit-cover" src="Assets/logo.jpeg" alt="logo"></a>
            </div>
            <div class="col-6 col-lg-8 h-100 text-center p-0">
                <h1 class="mt-2"> Développeur Avancé</h1>
                <h2 class="m-0">2025 - 2026</h2>
                <h2 class="m-0 mt-1">Recherche d'une alternance  du 8 décembre 2025 au 4 décembre 2026</h2>
            </div>
            <div class="col-3 col-lg-2 h-100 p-3 text-center ">
                <img class="h-100 contourRose img-fluid " src="Assets/QRCode.png" alt="QR Code">
            </div>
        </div>
`

//Composant footer
const footer = document.getElementById("footer");
footer.innerHTML = `
<div class="row banniere mt-4">
            <div class="col-3 col-lg-2 h-100 text-center">
                <img class="h-100 img-fluid object-fit-cover" src="Assets/logo.jpeg" alt="logo">
            </div>
            <div class="col-6 text-center">
                <h3 class="m-2 m-xl-4">Campus Numérique in the Alps - Valence</h3>
                <h3 class="m-2 m-xl-4">1 Rue Roland Moreno, 26300 Alixan</h3>
            </div>
            <div class="col-3 col-lg-2 h-100 p-3 text-end ">
                <img class="h-100 contourRose img-fluid" src="Assets/QRCode.png" alt="QR Code">
            </div>
        </div>
`

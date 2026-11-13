// ADD HER PHOTOS HERE: copy the picture into img/gallery/ and add one line below.
const GALLERY = [
  { src: "img/gallery/heart-bouquet-1.jpg", alt: "Burgundy heart bouquet held in hand", caption: "Heart Bouquet" },
  { src: "img/gallery/heart-bouquet-2.jpg", alt: "Heart bouquet with pearl-trimmed tulle", caption: "Heart Bouquet, pearls & tulle" },
  // { src: "img/gallery/your-new-photo.jpg", alt: "what is in the photo", caption: "Name of piece" },
];
document.getElementById("galGrid").innerHTML = GALLERY.map(
  (g) => `<figure><img src="${g.src}" alt="${g.alt}" loading="lazy"><figcaption>${g.caption}</figcaption></figure>`
).join("");

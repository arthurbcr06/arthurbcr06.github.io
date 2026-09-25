/* ============================================================
   RÉGLAGES DU SITE — c'est le seul fichier à modifier.
   Ouvre-le avec un éditeur de texte (VS Code, Bloc-notes…).
   Garde bien les apostrophes ' ' et la virgule en fin de ligne.
   ============================================================ */

// Ton adresse e-mail (lien de contact, bouton « Copier l'adresse », formulaire d'avis).
// Astuce : une adresse du type contact@tondomaine.fr qui redirige vers ta boîte perso
// évite d'afficher ton adresse personnelle.
const CONTACT_EMAIL = 'arthurbeucher@orange.fr';

// Lien vers ton profil Instagram (utilisé partout sur le site : contact, tirages, visionneuse)
const INSTAGRAM_URL = 'https://www.instagram.com/arthxr.cr3/';

// Lien vers ton profil Are.na (laisse vide '' pour masquer le lien)
const ARENA_URL = '';

// Formulaire « Un mot » : identifiant de ton formulaire Formspree (voir README).
// Laissé vide, le bouton « Envoyer » ouvre la messagerie du visiteur.
const FORMSPREE_ID = '';

// Avis publiés sur le site, le plus récent en haut.
// Tu reçois les messages par e-mail, tu choisis ceux à publier et tu les ajoutes ici.
const REVIEWS = [
  // { name:'Prénom', rating:5, message:'Le texte du message.', date:'2026-09-25' },
];

// TES PHOTOS, dans l'ordre d'affichage.
// Le plus simple : ouvre index.html depuis ton ordinateur, Ctrl + Maj + E → « Choisir le dossier photos »
// → range tes photos → « Exporter la liste », puis remplace tout le bloc
// ci-dessous (du mot const jusqu'au ]; final) par ce que tu as copié.
//   src   = chemin du fichier (les majuscules comptent en ligne !)
//   ratio = largeur ÷ hauteur (rempli automatiquement par l'export)
//   alt   = description de la photo (facultatif, utile pour Google)
// Tant que la liste est vide, le site affiche des photos de démonstration.
const LOCAL_PHOTOS = [
  // exemple : { src:'photos/falaise-etretat.jpg', ratio:1.5, alt:'Falaise d\'Étretat au lever du soleil' },
  { src:'photos/img-0898.jpg', ratio:0.5625 },
  { src:'photos/img-0815.jpg', ratio:0.5625 },
  { src:'photos/img-0769.jpg', ratio:0.5235 },
  { src:'photos/img-9258.jpg', ratio:0.5625 },
  { src:'photos/img-9255.jpg', ratio:0.5625 },
  { src:'photos/64f87792-46ed-467a-9481-a0ca2e89305c.jpg', ratio:1.7778 },
  { src:'photos/dji-fly-20250818-110344-444-1.jpg', ratio:1.7778 },
  { src:'photos/dji-fly-20250818-110344-444.jpg', ratio:0.5625 },
  { src:'photos/dji-fly-20250818-105932-439.jpg', ratio:0.5625 },
  { src:'photos/f6fb3e86-008d-49d1-8146-3d5fd4b57f8f.jpg', ratio:1.7775 },
  { src:'photos/photo-2025-07-31-23-39-54.jpg', ratio:0.5625 },
  { src:'photos/dji-0329-copie.jpg', ratio:0.5625 },
  { src:'photos/img-5586.jpg', ratio:0.5625 },
  { src:'photos/img-5460.jpg', ratio:1.7778 },
  { src:'photos/dji-0263.jpg', ratio:0.5630 },
  { src:'photos/dji-0222.jpg', ratio:1.7778 },
  { src:'photos/dji-0166.jpg', ratio:1.7778 },
  { src:'photos/img-3365.jpg', ratio:0.5625 },
  { src:'photos/dji-0294.jpg', ratio:0.5625 },
  { src:'photos/dji-0285.jpg', ratio:0.5625 },
  { src:'photos/img-0597.jpg', ratio:0.6665 },
  { src:'photos/img-2149.jpg', ratio:0.6665 },
  { src:'photos/img-0880.jpg', ratio:0.5625 },
  { src:'photos/img-0844.jpg', ratio:0.5625 },
  { src:'photos/img-0850.jpg', ratio:1.8467 },
  { src:'photos/img-0854.jpg', ratio:0.5625 },
  { src:'photos/img-8931.jpg', ratio:0.5625 },
  { src:'photos/img-3443.jpg', ratio:0.6670 },
  { src:'photos/img-3432.jpg', ratio:0.6665 },
  { src:'photos/img-3386.jpg', ratio:0.7490 },
  { src:'photos/img-6478.jpg', ratio:0.6663 },
  { src:'photos/img-2351.jpg', ratio:0.6663 },
  { src:'photos/img-0100.jpg', ratio:0.6663 },
  { src:'photos/img-0101.jpg', ratio:1.4573 },
  { src:'photos/img-9529.jpg', ratio:0.5621 },
];

# Site d'Arthur Beucher — mode d'emploi

```
reglages.js       ← TES RÉGLAGES : liste des photos, e-mail, avis, liens (le seul fichier à modifier)
mentions-legales.html ← page légale obligatoire (éditeur, hébergeur, données personnelles)
index.html        ← le site (tout le code, pas besoin d'y toucher)
assets/           ← photo d'accueil, portrait, image de partage, polices
photos/           ← photos de la galerie, en version web (2000 px, légères)
originaux/        ← tes fichiers d'origine en pleine résolution — à ne PAS mettre en ligne
.nojekyll         ← fichier technique pour GitHub (ne pas supprimer)
.gitignore        ← dit à GitHub Desktop d'ignorer le dossier originaux/
README.md         ← ce guide
```

Pour voir le site sur ton ordinateur : double-clic sur `index.html`.

---

## 1. Mettre tes photos dans la galerie

### Préparer les fichiers
- **Taille** : 2000 px maximum sur le côté le plus long, en JPG qualité ~80 ou en WebP.
  Pour réduire une photo gratuitement : [squoosh.app](https://squoosh.app). Vise moins de 500 Ko par photo.
- **Nom** : minuscules, tirets, sans espaces ni accents → `falaise-etretat.jpg`.
  Le nom sert aussi de description de l'image pour Google et les lecteurs d'écran : choisis un nom parlant.
- ⚠️ Sur internet, **les majuscules comptent** : `Plage.JPG` et `plage.jpg` sont deux fichiers différents.
  Si une photo s'affiche sur ton ordi mais pas en ligne, c'est presque toujours ça.

### Les ajouter
1. Copie les fichiers dans le dossier `photos/`.
2. Choisis une des deux méthodes :

**Méthode visuelle (recommandée)**
1. Ouvre `index.html` dans ton navigateur.
2. Appuie sur **Ctrl + Maj + E** (sur Mac : **Cmd + Maj + E**). Même raccourci pour quitter.
   Le mode édition ne marche que sur ton ordinateur : sur le site publié, le raccourci ne fait rien.
3. « **Choisir le dossier photos** » → sélectionne ton dossier `photos` (ou glisse tes fichiers directement sur la page).
   Déposer les fichiers dans le dossier ne suffit pas : une page web n'a pas le droit de lire un dossier de ton ordinateur toute seule, il faut le lui montrer.
4. Range-les par glisser-déposer (ou Maj + ← → au clavier), supprime celles que tu ne veux pas.
5. « Exporter la liste » → « Copier ».
6. Ouvre **`reglages.js`** dans un éditeur de texte ([VS Code](https://code.visualstudio.com) est gratuit et idéal ;
   sinon clic droit → Ouvrir avec → Bloc-notes).
7. Tout en bas, remplace tout le bloc, de `const LOCAL_PHOTOS = [` jusqu'au `];` final, par ce que tu as copié. Enregistre.

**Méthode directe**
Dans `reglages.js`, ajoute une ligne par photo dans `LOCAL_PHOTOS` :

```js
const LOCAL_PHOTOS = [
  { src:'photos/falaise-etretat.jpg', ratio:1.5, alt:'Falaise d\'Étretat au lever du soleil' },
  'photos/lac-montagne.jpg',
];
```

`ratio` (largeur ÷ hauteur) permet au site de ne charger que les photos visibles à l'écran : l'export le calcule pour toi.
Une ligne avec juste le chemin marche aussi, mais le site doit alors pré-charger la photo. `alt` est une description facultative.

L'ordre de la liste = l'ordre sur le site. Tant que la liste est vide, le site affiche des photos de démonstration.

### Changer la photo d'accueil et le portrait
Remplace ces fichiers en **gardant exactement les mêmes noms** :

| Fichier | Rôle | Format conseillé |
|---|---|---|
| `assets/hero.webp` | Photo d'accueil (ordinateur) | horizontale, 2000 px de large |
| `assets/hero-portrait.webp` | Photo d'accueil (téléphone) | verticale, ~800 × 1400 px |
| `assets/portrait.webp` | Ton portrait (section À propos) | 800 × 1000 px |
| `assets/og.jpg` | Aperçu quand on partage le lien | 1200 × 630 px |

squoosh.app convertit en WebP.

---

## 2. Les avis (« Un mot ? »)

Sur un site hébergé gratuitement, il n'y a pas de base de données : les avis passent donc par toi.

1. Crée un compte gratuit sur [formspree.io](https://formspree.io) → « New form » → copie l'identifiant (les caractères après `/f/`).
2. Dans `reglages.js`, colle-le ici : `const FORMSPREE_ID = 'xxxxxxxx';`
3. Tu reçois chaque message par e-mail (offre gratuite : 50 messages par mois).
4. Pour publier un avis, ajoute-le dans la liste `REVIEWS` (le plus récent en haut) :

```js
const REVIEWS = [
  { name:'Camille', rating:5, message:'Le texte du message.', date:'2026-09-25' },
];
```

Sans Formspree, le bouton « Envoyer » ouvre la messagerie du visiteur avec son message déjà rédigé.

> Formspree bloque automatiquement les robots grâce à un champ piège invisible déjà en place dans le formulaire.

---

## 3. Avant de publier officiellement

**Tes comptes** (c'est là que se joue vraiment la sécurité d'un site comme celui-ci) :
- [ ] GitHub : mot de passe unique + **double authentification** (Settings → Password and authentication). Garde les codes de récupération en lieu sûr.
- [ ] Ta boîte e-mail (celle liée à GitHub et au domaine) : mot de passe unique + double authentification. Qui contrôle ta boîte peut récupérer tous tes comptes.
- [ ] Registraire du domaine : double authentification + **renouvellement automatique** activé (un domaine expiré peut être racheté par quelqu'un d'autre).

**Le site** (déjà fait dans les fichiers) :
- Mode édition désactivé en ligne, aucun mot de passe dans les fichiers.
- Règles de sécurité du navigateur (CSP) : la page n'exécute que ses propres scripts.
- Polices hébergées sur le site : aucune connexion à Google (conforme RGPD).
- Aucun cookie ni traceur : pas besoin de bandeau cookies.
- Photos sans données GPS ; ton e-mail n'est plus écrit en clair dans la page.

**À vérifier par toi :**
- [ ] `mentions-legales.html` : relis-la. **Si tu vends tes tirages** (micro-entreprise), la loi demande d'y ajouter ton SIREN, une adresse professionnelle et un téléphone.
- [ ] `reglages.js` : ton lien Are.na (ou laisse vide pour masquer le lien), ton identifiant Formspree.
- [ ] Le dossier `originaux/` n'est pas dans ce que tu envoies sur GitHub.

---

## 4. Publier sur GitHub Pages (gratuit)

1. Crée un compte sur [github.com](https://github.com).
2. **New repository** → nom : `tonpseudo.github.io` (remplace par ton vrai pseudo) → **Public** → Create.
3. Sur la page du dépôt : **uploading an existing file** → glisse **le contenu** du dossier
   (`index.html`, `reglages.js`, `mentions-legales.html`, `assets`, `photos`, `.nojekyll`, `.gitignore`, `README.md`) → **Commit changes**.
   **N'envoie pas le dossier `originaux/`** (plus de 100 Mo, inutile en ligne). Le plus simple : range-le à côté du dossier du site.
   Sur Mac, `.nojekyll` est un fichier caché : Cmd + Maj + . pour l'afficher dans le Finder.
4. **Settings → Pages** → Source : *Deploy from a branch* → Branch : `main`, dossier `/ (root)` → Save.
5. Après 1 à 2 minutes, le site est en ligne sur `https://tonpseudo.github.io`.

---

## 5. Modifier le site une fois en ligne

Chaque modification envoyée sur GitHub met le site à jour automatiquement en ~1 minute.

**Petites modifs, depuis le navigateur**
- Liste de photos, avis, e-mail : ouvre `reglages.js` sur GitHub → icône crayon ✏️ → modifie → **Commit changes**.
- Textes du site (bio, titres…) : même chose dans `index.html`.
- Nouvelles photos : ouvre le dossier `photos` sur GitHub → **Add file → Upload files**.

**Modifs régulières : [GitHub Desktop](https://desktop.github.com) (appli gratuite)**
1. *Clone* ton dépôt **dans un dossier hors OneDrive** (par ex. `C:\Users\arthu\Sites\`) :
   OneDrive et Git synchronisent chacun de leur côté et peuvent abîmer le dépôt.
2. Travaille dedans normalement (photos, liste, textes) et vérifie en ouvrant `index.html`.
3. Dans GitHub Desktop : écris un petit résumé → **Commit to main** → **Push origin**.

GitHub garde tout l'historique : en cas d'erreur, on peut revenir à une version précédente (onglet *History*).
Si tu ne vois pas ta modif en ligne : Ctrl + F5 (Mac : Cmd + Maj + R) pour forcer le rechargement.

---

## 6. Nom de domaine (ex. arthurbeucher.fr)

1. **Achète le domaine** chez un registraire : OVHcloud, Gandi, Infomaniak, Cloudflare, Porkbun…
   Compte en général une dizaine d'euros par an (le prix varie selon l'extension et le registraire).
2. **Sur GitHub** : Settings du dépôt → Pages → *Custom domain* → `arthurbeucher.fr` → Save.
   (Recommandé : vérifie d'abord le domaine dans les Settings de ton **compte** → Pages, pour qu'on ne puisse pas l'utiliser à ta place.)
3. **Chez le registraire**, dans la « zone DNS » du domaine, supprime les anciens enregistrements A (page parking) et ajoute :

| Type | Nom | Valeur |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA *(facultatif)* | @ | 2606:50c0:8000::153 · 8001::153 · 8002::153 · 8003::153 |
| CNAME | www | tonpseudo.github.io. |

4. Attends la propagation (de quelques minutes à 24 h), puis coche **Enforce HTTPS** dans Settings → Pages.
5. Dans `index.html`, remplace `content="assets/og.jpg"` par l'adresse complète (`https://arthurbeucher.fr/assets/og.jpg`)
   pour que l'aperçu s'affiche bien quand tu partages ton lien.

Source officielle : [GitHub Docs — Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

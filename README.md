# Arthur Beucher — Photographie

Portfolio photo d'Arthur Beucher, 20 ans, basé à Angers.
En ligne sur **https://arthurbcr06.github.io**

## Contenu
| Fichier | Rôle |
|---|---|
| `index.html` | le portfolio |
| `mentions-legales.html` | mentions légales, droits d'auteur, confidentialité |
| `404.html` | page affichée si un lien est cassé |
| `robots.txt`, `sitemap.xml` | référencement Google |
| `og-image.jpg` | image affichée quand on partage le lien |
| `texture-angers.webp` | carte d'Angers en fond |
| `fonts/` | polices hébergées sur le site (aucun appel à Google) |
| `photos/` | photos + portrait |

## Réglages rapides (dans `index.html`)
- **Lien PayPal** : cherche `REMPLACE PAR TON LIEN` et mets ton lien `https://paypal.me/TonNom`.
- **Phrases animées** : `const PHRASES = [...]`.
- **Intensité de la carte** : cherche `texture-angers` et change `opacity: .085`.

## Galerie en damier
Chaque photo de `const oeuvres = [` a un `groupe` : `"a"` (bleus, mer & littoral)
ou `"b"` (teintes chaudes, terre & villes). Le site les alterne automatiquement
et termine toujours sur une ligne pleine. Garde à peu près autant de `a` que de `b`.

## Vie privée
Aucun cookie, aucun traceur, aucun service tiers : pas besoin de bandeau cookies.
Si tu ajoutes un jour Google Analytics, un formulaire ou une vidéo YouTube,
mets à jour `mentions-legales.html`.

© Arthur Beucher — Toutes les photographies sont protégées. Reproduction interdite sans autorisation.

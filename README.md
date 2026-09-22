# 🌌 Erya AstroBot

> **Explorez l'Univers. Comprenez ce que vous observez.**

**Erya AstroBot** est une application d'exploration astronomique qui combine un **copilote IA spécialisé en astronomie** avec un **visualisateur interactif dédié aux données et observations du télescope spatial James Webb (JWST)**.

L'objectif est simple : permettre à chacun d'explorer l'Univers tout en comprenant la science qui se cache derrière les observations.

---

## 🚀 À propos du projet

L'astronomie produit une quantité immense de données scientifiques. Cependant, ces données peuvent être difficiles à comprendre pour les personnes qui ne sont pas spécialistes.

**Erya AstroBot** cherche à créer un lien entre :

**Données scientifiques → Exploration → Intelligence artificielle → Compréhension**

L'utilisateur peut explorer des observations astronomiques, puis interagir avec l'IA pour obtenir des explications accessibles sur les objets et phénomènes observés.

Le projet combine ainsi **astronomie, intelligence artificielle, données scientifiques et développement logiciel** dans une même expérience.

---

## ✨ Fonctionnalités principales

### 🤖 Copilote IA astronomique

Erya AstroBot permet notamment de :

* Poser des questions sur l'astronomie et l'astrophysique
* Comprendre des concepts scientifiques complexes
* Découvrir les étoiles, galaxies, nébuleuses, exoplanètes et autres objets célestes
* Demander des explications sur des observations astronomiques
* Approfondir ses connaissances grâce à une interaction avec l'IA

L'objectif du copilote est d'être un **compagnon d'apprentissage scientifique**, et pas simplement un chatbot généraliste.

---

### 🔭 Explorateur JWST

L'application utilise les données accessibles publiquement via les API de la NASA afin de proposer une expérience d'exploration astronomique.

L'utilisateur peut notamment :

* Explorer des observations astronomiques
* Découvrir différents objets célestes
* Consulter les images et informations disponibles
* Utiliser le copilote IA pour mieux comprendre ce qu'il observe

---

### 🌌 Une expérience interactive

Erya AstroBot rassemble l'exploration et l'intelligence artificielle dans une même interface.

```text
        🌌 Données astronomiques
                  │
                  ▼
          🔭 Explorateur JWST
                  │
                  ▼
           🤖 Erya AstroBot
                  │
                  ▼
       📚 Explications scientifiques
                  │
                  ▼
          🌍 Compréhension
```

L'idée est de transformer l'observation astronomique en une véritable **expérience d'apprentissage interactive**.

---

## 🛠️ Technologies utilisées

### 💻 Interface

* HTML
* CSS
* JavaScript

### 🤖 Intelligence artificielle

* API d'intelligence artificielle
* Logique spécialisée pour les questions astronomiques

### 🛰️ Données spatiales

* NASA Open APIs
* Données et images astronomiques liées au JWST

### 🔗 Intégrations

L'application communique avec les services externes nécessaires afin de récupérer les données astronomiques et fournir les fonctionnalités d'intelligence artificielle.

---

## 🏗️ Architecture

L'architecture générale du projet peut être représentée ainsi :

```text
┌──────────────────────────────────┐
│            Erya AstroBot         │
│                                  │
│  🔭 Explorateur JWST             │
│  🤖 Copilote IA                  │
└────────────────┬─────────────────┘
                 │
                 ▼
┌──────────────────────────────────┐
│        Logique de l'application  │
│                                  │
│  • Gestion des données           │
│  • Communication avec les APIs   │
│  • Intégration IA                │
│  • Traitement des informations   │
└───────────────┬──────────────────┘
                │
         ┌──────┴───────┐
         ▼              ▼
┌────────────────┐ ┌────────────────┐
│    NASA APIs   │ │     API IA     │
│                │ │                │
│ Données        │ │ Compréhension  │
│ astronomiques  │ │ Explications   │
└────────────────┘ └────────────────┘
```

---

## ⚡ Installation

### Prérequis

Pour exécuter Erya AstroBot localement, vous devez disposer de :

* **Node.js** ou **Python 3.x**, selon la partie du projet concernée
* **Git**
* Une clé API NASA
* Une clé API pour le service d'intelligence artificielle utilisé

### 1. Cloner le dépôt

```bash
git clone https://github.com/VOTRE-COMPTE/erya-astrobot.git
cd erya-astrobot
```

### 2. Installer les dépendances

Selon la structure du projet :

```bash
npm install
```

ou :

```bash
pip install -r requirements.txt
```

### 3. Configurer les variables d'environnement

Créez un fichier `.env` contenant les clés nécessaires.

Exemple :

```env
NASA_API_KEY=votre_cle_nasa
AI_API_KEY=votre_cle_ia
```

> ⚠️ **Ne publiez jamais vos clés API dans le dépôt GitHub.**

### 4. Lancer l'application

Selon la configuration du projet :

```bash
npm run dev
```

ou utilisez la commande de démarrage correspondant à votre environnement.

---

## 🔐 Sécurité

Les clés API et autres informations sensibles doivent être stockées dans des variables d'environnement et non directement dans le code source.

Pour un déploiement en production, des protections supplémentaires peuvent être mises en place, notamment :

* Gestion sécurisée des clés API
* Validation des requêtes
* Limitation du nombre de requêtes
* Protection contre l'utilisation abusive des APIs
* Sécurisation des communications avec les services externes

---

## 🧪 État du projet

**Erya AstroBot est un projet expérimental développé dans le cadre de Hack Club.**

Le projet continue d'évoluer avec l'objectif d'améliorer progressivement :

* L'exploration des données astronomiques
* L'expérience utilisateur
* Les capacités du copilote IA
* La visualisation des observations
* La dimension éducative du projet

Certaines fonctionnalités peuvent encore être en développement.

---

## 🗺️ Évolutions envisagées

Plusieurs évolutions sont envisagées pour les prochaines versions :

* 🔭 Exploration JWST plus avancée
* 🪐 Exploration des exoplanètes
* 🌌 Visualisation interactive de l'Univers
* 📊 Visualisations de données scientifiques
* 🧠 Amélioration du raisonnement astronomique de l'IA
* 🛰️ Intégration de nouvelles données de la NASA
* 🔬 Explications adaptées au niveau scientifique de l'utilisateur
* 👨‍🚀 Missions et défis éducatifs autour de l'astronomie
* 🌍 Intégration progressive de données provenant d'autres organismes spatiaux

---

## 🏆 Hack Club

**Erya AstroBot est développé dans le cadre de la communauté Hack Club.**

Le projet explore la manière dont **l'intelligence artificielle peut rendre les données scientifiques plus accessibles et interactives**.

Il combine trois domaines qui sont au cœur du projet :

**💻 Programmation + 🤖 Intelligence artificielle + 🌌 Exploration spatiale**

---

## 👨‍💻 Auteur

**Nouhoum Bocoum**

---

## 📄 Licence

Le projet utilise la licence définie dans le dépôt GitHub.

---

## 🌌 Vision

> **Erya AstroBot ne veut pas seulement permettre de regarder l'Univers.**
>
> **Il veut aider à le comprendre.**

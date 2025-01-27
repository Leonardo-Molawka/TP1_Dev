
# Serveur NodeJS : Charité & Blockchain

Ce projet permet d'enregistrer les dons de donateurs en utilisant le principe de la Blockchain.

## Fonctionnalités principales

- Serveur NodeJS fonctionnant sur le port `3000`.
- API REST avec deux endpoints :
    - **GET /blockchain** : Liste tous les dons existants.
    - **POST /blockchain** : Ajoute un nouveau don dans la blockchain.

## Étapes réalisées

1. **Mise en place du serveur**
    - Configuration initiale du serveur avec un message de confirmation en console.
    - Validation des endpoints via Postman.

2. **Lecture des blocs existants**
    - Création d'un fichier `blockchain.json` pour stocker les données.
    - Implémentation d'une fonction pour lire les blocs via l'endpoint GET.

3. **Ajout de nouveaux blocs**
    - Ajout de la fonction permettant d'enregistrer des dons via l'endpoint POST.
    - Génération d'UUID pour chaque bloc et ajout de timestamps.

4. **Ajout du champ `hash`**
    - Calcul et ajout du hachage (`hash`) pour chaque bloc (sauf le premier).
    - Utilisation du module `crypto` pour sécuriser le chaînage des blocs.

## Validation

Toutes les fonctionnalités ont été testées et validées avec Postman.

Exemple de requête POST :
```json
{
  "nom": "me",
  "don": 10
}
```

---

Le projet couvre toutes les fonctionnalités essentielles, y compris la gestion des blocs en suivant le principe de la Blockchain.

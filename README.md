# Le GastroBot™

Le GastroBot™ est un bot Mastodon qui génère et pouette des recettes pseudo-gastronomiques illustrées [chaque jour à midi](https://piaille.fr/@gastrobot).

L'essentiel de la base de code n'est qu'une simple extraction d'un [codepen](https://codepen.io/n1k0/full/QWobLWb) que j'avais créé rapidement pour rigoler.

S'il vous prenait l'idée de vouloir un jour créer un bot Mastodon, le code montre comment créer un pouet au moyen de la librairie [masto.js](https://neet.github.io/masto.js/), illustrant notamment à quel point c'est simple.

## Configuration

Créer un fichier `.env` à la racine et préciser les deux variables `URL`, `TOKEN` tels que [spécifiés dans la documentation de masto.js](https://neet.github.io/masto.js/#md:quick-start), ainsi que les paramètres `OPENAI_API_KEY` et `VISIBILITY` pour aller plus loin :

```ini
TOKEN=mon-token-mastodon
URL=https://piaille.fr
OPENAI_API_KEY=mon-token-openai
VISIBILITY=public
```

Note: le mode `VISIBILITY=direct` est **très** utile pour débugguer ;) La génération d'illustrations par DALL-E m'a beaucoup posé question mais la la tentation de mettre en image ces recettes loufoques était bien trop importante, ce qui vous octroie de facto le droit de me conspuer en place publique.

## Créer et poster une recette

```
$ npm run toot-recipe
```

## Déployer et héberger

Il vous faut disposer d'un hébergement qui vous permet de planifier des tâches — par exemple via [crontab](https://fr.wikipedia.org/wiki/Cron) — comme l'excellente plateforme [AlwaysData](https://www.alwaysdata.com/fr/), puis de programmer l'exécution de la commande précédente à l'intervalle de votre choix.

## Licence

MIT

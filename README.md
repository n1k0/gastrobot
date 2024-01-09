# Le GastroBot™

Le GastroBot™ est un bot Mastodon qui génère et pouette des noms de recette pseudo-gastronomiques [chaque jour à midi](https://piaille.fr/@gastrobot).

L'essentiel de la base de code n'est qu'une simple extraction d'un [codepen Web interactif](https://codepen.io/n1k0/full/QWobLWb) que j'avais créé rapidement pour rigoler.

S'il vous prenait l'idée de vouloir un jour créer un bot Mastodon, le code montre comment créer un pouet au moyen de la librairie [masto.js](https://neet.github.io/masto.js/), illustrant notamment à quel point c'est simple.

## Configuration

Créer un fichier `.env` à la racine et préciser les deux variables `URL` et `TOKEN` tels que [spécifiés dans la documentation de masto.js](https://neet.github.io/masto.js/#md:quick-start) :

```ini
TOKEN=<Votre token d'accès d'application Mastodon>
URL=https://piaille.fr
```

## Créer et poster une recette

```
$ npm run toot-recipe
```

## Déployer et héberger

Il vous faut disposer d'un hébergement qui vous permet de planifier des tâches — par exemple via [crontab](https://fr.wikipedia.org/wiki/Cron) — comme l'excellente plateforme [AlwaysData](https://www.alwaysdata.com/fr/), puis de programmer l'exécution de la commande précédente à l'intervalle de votre choix.

## Licence

MIT

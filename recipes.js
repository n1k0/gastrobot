const kinds = [
  "Ambroisine",
  "Assiette",
  "Axoa",
  "Ballotines",
  "Ballotins",
  "Banh tom",
  "Barbecue",
  "Beignets",
  "Biscuits",
  "Blanquette",
  "Bolognaise",
  "Börek",
  "Bouchées",
  "Bouillabaisse",
  "Bouillie",
  "Bouillon",
  "Boulettes",
  "Bowl",
  "Brasucade",
  "Bricks",
  "Brioche",
  "Brownie",
  "Bruschetta",
  "Burger",
  "Cake",
  "Calçotada",
  "Calissons",
  "Calzone",
  "Caquelons",
  "Carbonade flamande",
  "Carpaccio",
  "Casserole",
  "Cassolette",
  "Cassoulet",
  "Ceviche",
  "Chapalele",
  "Cheesecake",
  "Chips",
  "Chorba",
  "Churros",
  "Clafoutis",
  "Cocotte",
  "Completo",
  "Compote",
  "Compotée",
  "Conchiglioni",
  "Confit",
  "Confiture",
  "Consommé",
  "Consommé",
  "Cookies",
  "Couscous",
  "Crackers",
  "Crème",
  "Crèpes",
  "Cromesquis",
  "Croquettes",
  "Croziflette",
  "Crumble",
  "Curry",
  "Dahl",
  "Daube",
  "Écrasé",
  "Effiloché",
  "Empanadas",
  "Ensaimada",
  "Escalopes",
  "Espuma",
  "Estouffade",
  "Fabada",
  "Farçou",
  "Financiers",
  "Flammekueche",
  "Focaccia",
  "Fondant",
  "Fondue",
  "Fricassée",
  "Frites",
  "Frittata",
  "Fritti misti",
  "Fritures",
  "Fromage",
  "Fugazzeta",
  "Gargoulette",
  "Gaspacho",
  "Gâteau",
  "Gnocchis",
  "Gözleme",
  "Gratin",
  "Gravlax",
  "Grillades",
  "Gua Bao",
  "Guacamole",
  "Haché",
  "Hachis",
  "Hamburger",
  "Houmous",
  "Huile",
  "Katsudon",
  "Kebab",
  "Khao Phat",
  "Korma",
  "Kouign Amann",
  "Lahmacun",
  "Lasagnes",
  "Macarons",
  "Mafé",
  "Marinade",
  "Marmite",
  "Méchoui",
  "Mejadra",
  "Menemen",
  "Mezzès",
  "Mi-cuit",
  "Mijoté",
  "Millefeuille",
  "Millionnaires",
  "Minestrone",
  "Mini-blinis",
  "Mitonné",
  "Mochis",
  "Mousse",
  "Mousseline",
  "Muffins",
  "Naan",
  "Nachos",
  "Nems",
  "Okonomiyaki",
  "Omelette",
  "Onigiri",
  "Pad Thai",
  "Paëlla",
  "Pain surprise",
  "Pakoras",
  "Panang",
  "Pancakes",
  "Panés",
  "Panettone",
  "Panna Cotta",
  "Papillottes",
  "Parillada",
  "Pastilla",
  "Pâté",
  "Paupiettes",
  "Petits pâtés",
  "Petite soupe",
  "Petits gâteaux",
  "Pho",
  "Pierrade",
  "Pintxos",
  "Pissaladière",
  "Pizza",
  "Plancha",
  "Planche",
  "Poêlée",
  "Pot-au-feu",
  "Potage",
  "Potée",
  "Potjevleesch",
  "Profiteroles",
  "Provoleta",
  "Purée",
  "Quiche",
  "Raita",
  "Ramen",
  "Ravioles",
  "Reblochonnade",
  "Ribambelle",
  "Rillettes",
  "Risotto",
  "Rosti",
  "Rôti",
  "Rougail",
  "Rouille",
  "Roulés",
  "Salade",
  "Samoussas",
  "Sandwich",
  "Sashimis",
  "Sauce",
  "Saucissons",
  "Sauté",
  "Shakshuka",
  "Sirop",
  "Smoothie",
  "Snack",
  "Soba",
  "Sorbet",
  "Soufflé",
  "Soupe froide",
  "Soupe",
  "Sticks",
  "Suprême",
  "Sushis",
  "Tacos",
  "Tajine",
  "Takoyaki",
  "Tamales",
  "Tapas",
  "Tapenade",
  "Tartare",
  "Tarte",
  "Tartelettes",
  "Tartines",
  "Tataki",
  "Tempura",
  "Terrine",
  "Thieboudienne",
  "Tian",
  "Tielles",
  "Timbales",
  "Tiramisu",
  "Toasts",
  "Tortilla",
  "Tourte",
  "Udon",
  "Velouté",
  "Verrines",
  "Vol-au-vent",
  "Wok",
  "Yakitori",
  "Zabayon",
];

const ingredients = [
  ["Abricot", "d'", "à l'"],
  ["Agneau épicé", "d'", null],
  ["Agnolottis", "d'", "aux"],
  ["Agrumes", "d'", "aux"],
  ["Ail confit", "d'", "à l'"],
  ["Ail des ours", "d'", "à l'"],
  ["Ail", null, "à l'"],
  ["Aïoli", null, "à l'"],
  ["Algues nori", "d'", "aux "],
  ["Amandes amères", "d'", "aux"],
  ["Amandes", "d'", "aux"],
  ["Ananas", "d'", "à l'"],
  ["Anchois", "d'", "aux"],
  ["Aneth", null, "à l'"],
  ["Anguille fumée", "d'", "à l'"],
  ["Angus", "d'", null],
  ["Anisette", null, "à l'"],
  ["Arroches", "d'", "aux"],
  ["Artichauts", "d'", "aux"],
  ["Asperges vertes", "d'", "aux"],
  ["Aubergines", "d'", "aux"],
  ["Avocats", "d'", "aux"],
  ["Avoine", "d'", "à l'"],
  ["Baies de genièvre", null, "aux"],
  ["Baies roses", null, "aux"],
  ["Bananes", "de", "aux"],
  ["Barberries", "de", "aux"],
  ["Basilic", null, "au"],
  ["Batavia", "de", "à la"],
  ["Beaufort", "de", "au"],
  ["Bergamotte", "de", "à la"],
  ["Betteraves", "de", "aux"],
  ["Beurre au citron", null, "au"],
  ["Beurre blanc miso", null, "au"],
  ["Beurre salé", null, "au"],
  ["Biche", "de", null],
  ["Bière", null, "à la"],
  ["Blettes", "de", "aux"],
  ["Bleu des causses", "de", "au"],
  ["Bleuets", "de", "aux"],
  ["Bœuf de Kobe", "de", null],
  ["Bourbon", null, "au"],
  ["Brocciù", "de", "au"],
  ["Brocolis grillés", "de", "aux"],
  ["Bulots", "de", "aux"],
  ["Burrata", "de", "à la"],
  ["Butternut", "de", "au"],
  ["Cabécou", "de", "au"],
  ["Cabillau", "de", null],
  ["Cacahuètes", "de", "aux"],
  ["Café", null, "au"],
  ["Caille", "de", null],
  ["Camembert rôti", "de", "au"],
  ["Camembert", "de", "au"],
  ["Canard", "de", null],
  ["Câpres", null, "aux"],
  ["Capucines tubéreuses", "de", "aux"],
  ["Caramel beurre salé", null, "au"],
  ["Caramel", "de", "au"],
  ["Cardons", "de", "aux"],
  ["Carottes", "de", "aux"],
  ["Carrelet", "de", null],
  ["Cassonade", null, "à la"],
  ["Caviar d'aubergine", "de", "au"],
  ["Caviar Sevruga", "de", "au"],
  ["Cédrat confit", "de", "au"],
  ["Céleri rémoulade", "de", "au"],
  ["Céleri", "de", "au"],
  ["Céleris", "de", "au"],
  ["Cèpes", "de", "aux"],
  ["Combava", "de", "au"],
  ["Pomelo", "de", "au"],
  ["Cerfeuil tubéreux", null, "au"],
  ["Cerises de Venasque", "de", "aux"],
  ["Cervelle", "de", null],
  ["Chablis", null, "au"],
  ["Champagne", null, "au"],
  ["Kumquats", "de", "aux"],
  ["Champignons de Paris", "de", "aux"],
  ["Champignons", "de", "aux"],
  ["Chapon", "de", null],
  ["Chataîgnes", "de", "aux"],
  ["Chavignol de Sancerre", "de", "au"],
  ["Cheddar", "de", "au"],
  ["Chénopode blanc", null, "au"],
  ["Chervis", "de", "au"],
  ["Pamplemousse", "de", "au"],
  ["Cheveux du diable", "de", "aux"],
  ["Chèvre frais", "de", "au"],
  ["Chevreuil", "de", null],
  ["Chevrotin des Aravis", "de", "au"],
  ["Chicons", "de", "aux"],
  ["Chicorée", "de", "à la"],
  ["Chocolat au lait", "de", "au"],
  ["Chocolat blanc", "de", "au"],
  ["Chocolat Knipschildt", "de", "au"],
  ["Chocolat noir", "de", "au"],
  ["Chocolat", "de", "au"],
  ["Chou Daubenton", "de", "au"],
  ["Chou frisé", "de", "au"],
  ["Chou Kale", "de", "au"],
  ["Chou-fleur", "de", "au"],
  ["Choux de Bruxelles", "de", "aux"],
  ["Citron vert", "de", "au"],
  ["Citron", "de", "au"],
  ["Citronnelle", null, "à la"],
  ["Citrons confits", "de", "aux"],
  ["Citrouille", "de", "à la"],
  ["Clémentines", "de", "aux"],
  ["Cochonailles", "de", null],
  ["Cocos de Paimpol", "de", "aux"],
  ["Cœurs de canard", "de", "aux"],
  ["Cointreau", null, "au"],
  ["Comté", "de", "au"],
  ["Confit d'oie", "de", "au"],
  ["Confit de canard", "de", "au"],
  ["Coquillages", "de", "aux"],
  ["Coquilles lutées", "de", "en"],
  ["Coquillettes", "de", "aux"],
  ["Coriandre", null, "à la"],
  ["Cornichons", "de", "aux"],
  ["Côtes de bœuf", "de", null],
  ["Côtes de marcassin", "de", null],
  ["Côtes de porc", "de", null],
  ["Courgettes", "de", "aux"],
  ["Couteaux", "de", "aux"],
  ["Crème de chou-fleur", "de", "à la"],
  ["Crevettes", "de", "aux"],
  ["Croûtons", "de", "aux"],
  ["Cuisses de canard", "de", null],
  ["Cuisses de grenouille", "de", "aux"],
  ["Cumin", null, "au"],
  ["Curry", "de", "au"],
  ["Dattes", "de", "aux"],
  ["Dinde", "de", null],
  ["Dindonneau", "de", null],
  ["Eau", null, "à l'"],
  ["Échalottes confites", null, "aux"],
  ["Échalottes", null, "aux"],
  ["Écrevisses", "d'", "aux"],
  ["Emmental", "d'", "à l'"],
  ["Endives caramélisées", "d'", "aux"],
  ["Épices", null, "aux"],
  ["Épinards", "d'", "aux"],
  ["Épinards", "d'", "aux"],
  ["Époisse", "d'", "à l'"],
  ["Esturgeon", "d'", null],
  ["Faisan", "de", null],
  ["Fenouil", "de", "au"],
  ["Fettuccine", "de", "aux"],
  ["Fèves", "de", "aux"],
  ["Figues", "de", "aux"],
  ["Filet d'églefin", "de", null],
  ["Filet de bœuf", "de", null],
  ["Filet de canard", "de", null],
  ["Filet mignon", "de", null],
  ["Fines de claire", "de", "aux"],
  ["Flageolets", "de", "aux"],
  ["Fleur de sel", null, "à la"],
  ["Fleurs de courgette", "de", "aux"],
  ["Fleurs de lavande", "de", "aux"],
  ["Foie d'oie", "de", "au"],
  ["Foie de veau", "de", "au"],
  ["Foie gras", "de", "au"],
  ["Fraises concassées", "de", "aux"],
  ["Framboises Tulameen", "de", "aux"],
  ["Fromage de tête", "de", null],
  ["Fruits secs fumés-sucrés", "de", "aux"],
  ["Gambas", "de", "aux"],
  ["Géline de Tourraine", "de", "à la"],
  ["Gésiers d'oie", "de", "aux"],
  ["Gingembre confit", null, "au"],
  ["Gingembre", null, "au"],
  ["Girolles", "de", "aux"],
  ["Gîte à la noix", "de", null],
  ["Gnocchis", "de", "aux"],
  ["Gomasio", null, "au"],
  ["Gousses d'ail confites", null, "aux"],
  ["Graines de chia", null, "aux"],
  ["Graines de courge", null, "aux"],
  ["Graines", null, "aux"],
  ["Grains de caviar", "de", "aux"],
  ["Graisse de canard", null, "à la"],
  ["Graisserons", "de", "aux"],
  ["Grattons", "de", "aux"],
  ["Grenailles", "de", "aux"],
  ["Gruyère", "de", "au"],
  ["Haddock", "de", "au"],
  ["Harengs fumés", "de", null],
  ["Haricots blancs", "de", "aux"],
  ["Haricots rouges", "de", "aux"],
  ["Haricots verts", "de", "aux"],
  ["Harissa", "de", "à la"],
  ["Hélianti", "d'", "à l'"],
  ["Herbe de bison", null, "à l'"],
  ["Herbes fraîches", "d'", "aux"],
  ["Homard bleu", "de", "au"],
  ["Houmous", "de", "au"],
  ["Huile d'olive", null, "à l'"],
  ["Huile de coco", null, "à l'"],
  ["Huître", "d'", "à l'"],
  ["Huîtres chaudes", "d'", "aux"],
  ["Jambon Bellota", "de", "au"],
  ["Jambon", "de", "au"],
  ["Jambonneau", "de", "au"],
  ["Jarret de cochon", "de", null],
  ["Kakis", "de", "aux"],
  ["Kiwis", "de", "aux"],
  ["Knacks", "de", null],
  ["Konjac", "de", "au"],
  ["Mandarines", "de", "aux"],
  ["Lait d'amande", null, "au"],
  ["Lait de coco", null, "au"],
  ["Lait de soja", null, "au"],
  ["Lait", "de", "au"],
  ["Langoustines", "de", "aux"],
  ["Langue de bœuf", "de", null],
  ["Lapin", "de", null],
  ["Lard de Colonnata", "de", "au"],
  ["Lard", "de", "au"],
  ["Légumes nouveaux", "de", "aux"],
  ["Lentilles corail", "de", "aux"],
  ["Lentilles vertes du Puy", "de", "aux"],
  ["Lieu jaune", "de", null],
  ["Lièvre", "de", null],
  ["Macaroni Lucullus", "de", "aux"],
  ["Mâche", "de", "à la"],
  ["Magret de canard", "de", null],
  ["Mangue", "de", "à la"],
  ["Manouri", "de", "au"],
  ["Marrons glacés", "de", "aux"],
  ["Marrons", "de", "aux"],
  ["Matsutaké", "de", "au"],
  ["Mayonnaise de Dijon", null, "à la"],
  ["Mélange d'herbes", "de", "au"],
  ["Mélasse de Grenade", "de", "à la"],
  ["Mélisse", "de", "à la"],
  ["Melon Yubari", "de", "au"],
  ["Menthe fraîche", "de", "à la"],
  ["Miel", null, "au"],
  ["Mont d'Or", "de", "au"],
  ["Morbier", "de", "au"],
  ["Morilles", "de", "aux"],
  ["Morue", "de", "à la"],
  ["Moules", "de", "aux"],
  ["Mousserons", "de", "aux"],
  ["Moutarde de Dijon", null, "à la"],
  ["Mouton", "de", null],
  ["Mozzarella", "de", "à la"],
  ["Museau de bœuf", "de", null],
  ["Navets", "de", "aux"],
  ["Noires de Crimée", "de", "aux"],
  ["Noisettes", null, "aux"],
  ["Noix de cajou", null, "aux"],
  ["Noix de coco", "de", "à la"],
  ["Noix de macadamia", null, "aux"],
  ["Noix de muscade", null, "à la"],
  ["Noix du Brésil", null, "aux"],
  ["Noix", null, "aux"],
  ["Oca du Pérou", "d'", "à l'"],
  ["Œufs brouillés", "d'", "aux"],
  ["Œufs de caille", "d'", "aux"],
  ["Œufs de truite", "d'", "aux"],
  ["Œufs", "d'", "aux"],
  ["Oie", "d'", null],
  ["Oignons frits", null, "aux"],
  ["Oignons marinés", "d'", "aux"],
  ["Oignons", "d'", "aux"],
  ["Olives noires de Nyons", "d'", "aux"],
  ["Onglet", "d'", null],
  ["Orange", "d'", "à l'"],
  ["Oranges amères", "d'", "aux"],
  ["Oranges confites", "d'", "aux"],
  ["Origan", null, "à l'"],
  ["Orties", "d'", "aux"],
  ["Ortolans", "d'", null],
  ["Oursins", "d'", "aux"],
  ["Pacanes", "de", "aux"],
  ["Pain de campagne", "de", "au"],
  ["Palourdes", "de", "aux"],
  ["Panais", "de", "aux"],
  ["Paprika fumé", null, "au"],
  ["Paprika", null, "au"],
  ["Parmesan", "de", "au"],
  ["Pastèque Densuque", "de", "à la"],
  ["Pastis", null, "au"],
  ["Pastrami", "de", "au"],
  ["Pata Negra", "de", "au"],
  ["Patates douces", "de", "aux"],
  ["Patates", "de", "aux"],
  ["Pavot", null, "au"],
  ["Persil tubéreux", "de", "au"],
  ["Petites rattes du Touquet", "de", "aux"],
  ["Petits pois", "de", "aux"],
  ["Pétoncles", "de", "aux"],
  ["Pieds de porc", "de", "aux"],
  ["Pigeon", "de", null],
  ["Pigeonneau", "de", null],
  ["Piment d'Espelette", "de", "au"],
  ["Piment", null, "au"],
  ["Pineau des Charentes", null, "au"],
  ["Pintade", "de", null],
  ["Pissenlit", "de", "au"],
  ["Pistaches", null, "aux"],
  ["Plat de côte", "de", null],
  ["Poire tapée", null, "à la"],
  ["Poireaux", "de", "aux"],
  ["Poires", "de", "aux"],
  ["Pois", "de", "aux"],
  ["Poitrine fumée", "de", "à la"],
  ["Poivre de Kampot", null, "au"],
  ["Poivre de Sichuan", null, "au"],
  ["Poivre de Timut", null, "au"],
  ["Poivre vert", "de", "au"],
  ["Poivrons anciens", "de", "aux"],
  ["Poivrons grillés", "de", "aux"],
  ["Polenta", "de", "à la"],
  ["Pommes de terre", "de", "aux"],
  ["Pommes", "de", "aux"],
  ["Porc noir de Bigorre", "de", null],
  ["Potimarron", "de", "au"],
  ["Pottok", "de", null],
  ["Poularde", "de", null],
  ["Poule d'eau", "de", null],
  ["Poule", "de", null],
  ["Poulet tandoori", "de", null],
  ["Poulet", "de", "au"],
  ["Quatre fromages", null, "aux"],
  ["Quatre-épices", null, "aux"],
  ["Queue de bœuf", "de", "à la"],
  ["Quinoa", "de", "au"],
  ["Raclette", "de", "à la"],
  ["Radis noir", "de", "aux"],
  ["Radis", "de", "aux"],
  ["Raie", "de", null],
  ["Raifort", null, "au"],
  ["Raisin", "de", "au"],
  ["Raisins secs", "de", "aux"],
  ["Ras el-hanout", null, "au"],
  ["Ravioli", "de", "aux"],
  ["Reblochon fermier", "de", "au"],
  ["Rhum", null, "au"],
  ["Ricotta", "de", "à la"],
  ["Riesling", null, "au"],
  ["Rigatonis", "de", "aux"],
  ["Ris de veau", "de", "aux"],
  ["Riz brun", "de", "au"],
  ["Riz", "de", "au"],
  ["Rocamadour", "de", "au"],
  ["Rognons", "de", "aux"],
  ["Romarin", "de", "au"],
  ["Roquefort", "de", "au"],
  ["Rumsteak", "de", "au"],
  ["Rutabagas", "de", "à la"],
  ["Safran", null, "au"],
  ["Saindoux", null, "au"],
  ["Saint-Félicien", "de", "au"],
  ["Saint-Marcelin", "de", "au"],
  ["Saint-Nectaire fermier", "de", "au"],
  ["Saint-Pierre", "de", null],
  ["Sanglier", "de", null],
  ["Sardines", "de", "aux"],
  ["Sauce Sriracha", "de", "à la"],
  ["Saucisse de canard", "de", null],
  ["Saucisse", "de", "à la"],
  ["Saucisson", "de", "au"],
  ["Sauge", "de", "à la"],
  ["Saumon fumé", "de", "au"],
  ["Sauternes", null, "au"],
  ["Scampis", "de", "aux"],
  ["Scarmoza", "de", "à la"],
  ["Scarole", "de", "à la"],
  ["Sel himalayen", null, "au"],
  ["Serrano", "de", "au"],
  ["Sésame", null, "au"],
  ["Sirop d’érable", "de", "au"],
  ["Spaghettis", "de", "aux"],
  ["Sucre brun", null, "au"],
  ["Tagliatelles", "de", "aux"],
  ["Tahini", null, "au"],
  ["Taureau de Camargue", "de", null],
  ["Thé vert", "de", "au"],
  ["Thon rouge", "de", "au"],
  ["Thym bio", "de", "au"],
  ["Tofu fumé", "de", "au"],
  ["Tomate", "de", "à la"],
  ["Tomates confites", "de", "aux"],
  ["Tomates séchées", "de", "aux"],
  ["Topinambours", "de", "aux"],
  ["Tortellini", "de", "aux"],
  ["Travers de porc", "de", null],
  ["Tripes", "de", "aux"],
  ["Trompettes de la mort", "de", "aux"],
  ["Truffe blanche d'Alba", "de", "à la"],
  ["Truffe noire du Périgord", "de", "à la"],
  ["Truite saumonnée", "de", null],
  ["Veau de lait de Corrèze", "de", null],
  ["Vinaigre balsamique", null, "au"],
  ["Vinaigre de cidre", null, "au"],
  ["Vinaigre de Modène", null, "au"],
  ["Vinaigrette", null, "à la"],
  ["Violets", "de", null],
  ["Vodka", null, "à la"],
  ["Volaille", "de", null],
  ["Wasabi", null, "au"],
  ["Whisky", null, "au"],
  ["Xérès", null, "au"],
  ["Yaourt", "de", "au"],
  ["Za’atar", "de", "au"],
];

function pickOne(list, exclude = null) {
  const idx = parseInt(Math.floor(Math.random() * list.length), 10);
  const pick = list[idx];
  return exclude && pick === exclude ? pickOne(list, pick) : pick;
}

function format(k, i1, i2) {
  return !i1[1] || !i2[2]
    ? null
    : `${k} ${i1[1]} ${i1[0]} ${i2[2]} ${i2[0]}`.replaceAll("' ", "’").replaceAll("'", "’");
}

function run() {
  const k = pickOne(kinds);
  const i1 = pickOne(ingredients);
  const i2 = pickOne(ingredients, i1);
  const recipe = format(k, i1, i2);
  return recipe ? recipe : run();
}

module.exports = { run };

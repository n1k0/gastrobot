const kinds = [
  "Amuse-bouches",
  "Amuse-gueules",
  "Arancini",
  "Assiette",
  "Aumônières",
  "Axoa",
  "Bagel",
  "Ballotines",
  "Ballotins",
  "Bánh Canh",
  "Bánh Tôm",
  "Barbecue",
  "Beignets",
  "Bibimbap",
  "Biscuits",
  "Blanc-manger",
  "Blanquette",
  "Bolognaise",
  "Börek",
  "Bouchées",
  "Bouillabaisse",
  "Bouillon",
  "Boulettes",
  "Bowl",
  "Brandade",
  "Brasucade",
  "Bricks",
  "Brioche",
  "Brochettes",
  "Brownie",
  "Bruschetta",
  "Brussoles",
  "Burger",
  "Cake",
  "Calçotada",
  "Calissons",
  "Calzone",
  "Canapés",
  "Caquelons",
  "Carbonade flamande",
  "Carpaccio",
  "Casserole",
  "Cassolette",
  "Cassoulet",
  "Ceviche",
  "Chakchouka",
  "Chapalele",
  "Cheesecake",
  "Chips",
  "Chorba",
  "Churros",
  "Clafoutis",
  "Cocotte",
  "Colombo",
  "Completo",
  "Compote",
  "Compotée",
  "Conchiglioni",
  "Confit",
  "Confiture",
  "Consommé",
  "Cookies",
  "Couscous",
  "Crackers",
  "Crème",
  "Crèpes",
  "Crépinettes",
  "Cromesquis",
  "Croquettes",
  "Crostinis",
  "Croziflette",
  "Crumble",
  "Curry",
  "Dahl",
  "Daube",
  "Écrasé",
  "Effiloché",
  "Empanadas",
  "Ensaimada",
  "Espuma",
  "Estouffade",
  "Fabada",
  "Farçou",
  "Feijoada",
  "Financiers",
  "Flammekueche",
  "Focaccia",
  "Fondant",
  "Fondue",
  "Fougasse",
  "Fricassée",
  "Frites",
  "Frittata",
  "Fritti misti",
  "Fritures",
  "Fromage",
  "Fugazzeta",
  "Galantine",
  "Galette",
  "Garbure",
  "Gargoulette",
  "Gaspacho",
  "Gâteau",
  "Gelée",
  "Gnocchis",
  "Goulash",
  "Gözleme",
  "Gratin",
  "Gravlax",
  "Grillades",
  "Gua Bao",
  "Guacamole",
  "Gyozas",
  "Haché",
  "Hachis",
  "Hamburger",
  "Houmous",
  "Huile",
  "Jambalaya",
  "Jardinière",
  "Katsudon",
  "Kebab",
  "Khao Phat",
  "Kimchi",
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
  "Mezzé",
  "Mi-cuit",
  "Mijoté",
  "Millefeuille",
  "Minestrone",
  "Mini-blinis",
  "Mitonné",
  "Mochis",
  "Moussaka",
  "Mousse",
  "Mousseline",
  "Muffins",
  "Naan",
  "Nachos",
  "Nems",
  "Nuggets",
  "Okonomiyaki",
  "Omelette",
  "Onigiri",
  "Osso Buco",
  "Oyakodon",
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
  "Parmentier",
  "Pastilla",
  "Pâté",
  "Paupiettes",
  "Petite soupe",
  "Petits gâteaux",
  "Petits pâtés",
  "Pho",
  "Pickles",
  "Pierrade",
  "Pintxos",
  "Pizza",
  "Plancha",
  "Planche",
  "Poêlée",
  "Poke Bowl",
  "Pot-au-feu",
  "Potage",
  "Potée",
  "Potjevleesch",
  "Potjiekos",
  "Profiteroles",
  "Provoleta",
  "Purée",
  "Quiche",
  "Ragoût",
  "Raita",
  "Ramen",
  "Ramequins",
  "Ratatouille",
  "Ravioles",
  "Reblochonnade",
  "Rillettes",
  "Risotto",
  "Rösti",
  "Rôti",
  "Rougail",
  "Rouille",
  "Roulés",
  "Sacristains",
  "Salade",
  "Samoussas",
  "Sandwich",
  "Sashimis",
  "Sauce",
  "Sauté",
  "Shakshuka",
  "Shortbread",
  "Sirop",
  "Smoothie",
  "Snack",
  "Soba",
  "Sorbet",
  "Soubressade",
  "Soufflé",
  "Soupe froide",
  "Soupe",
  "Sticks",
  "Suprême",
  "Sushis",
  "Taboulé",
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
  "Thoïonade",
  "Tian",
  "Tielles",
  "Timbales",
  "Tiramisu",
  "Toasts",
  "Tortilla",
  "Tourte",
  "Tourtière",
  "Tzatziki",
  "Udon",
  "Velouté",
  "Verrines",
  "Vol-au-vent",
  "Waterzooi",
  "Wok",
  "Wolof",
  "Yakitori",
  "Zabayon",
];

const ingredients = [
  ["Abondance", "d'", "à l'"],
  ["Abricot", "d'", "à l'"],
  ["Agar agar", null, "à l'"],
  ["Agneau épicé", "d'", null],
  ["Agnolottis", "d'", "aux"],
  ["Agrumes", "d'", "aux"],
  ["Ail confit", "d'", "à l'"],
  ["Ail des ours", "d'", "à l'"],
  ["Ail", null, "à l'"],
  ["Ailes de poulet grillées", "d'", null],
  ["Aïoli", null, "à l'"],
  ["Algues nori", "d'", "aux "],
  ["Amandes amères", "d'", "aux"],
  ["Amandes", "d'", "aux"],
  ["Ananas", "d'", "à l'"],
  ["Anchois", "d'", "aux"],
  ["Andouile de Guéméné", "d'", "à l'"],
  ["Andouile de Vire", "d'", "à l'"],
  ["Andouilette de Troyes", "d'", "à l'"],
  ["Aneth", null, "à l'"],
  ["Anguille fumée", "d'", "à l'"],
  ["Angus", "d'", null],
  ["Anis étoilé", null, "à l'"],
  ["Anisette", null, "à l'"],
  ["Anones", "d'", "aux"],
  ["Araignée de mer", "d'", null],
  ["Arroches", "d'", "aux"],
  ["Artichauts", "d'", "aux"],
  ["Asperges vertes", "d'", "aux"],
  ["Aubergines", "d'", "aux"],
  ["Avocats", "d'", "aux"],
  ["Avoine", "d'", "à l'"],
  ["Badiane", null, "à la"],
  ["Baies de genièvre", null, "aux"],
  ["Baies roses", null, "aux"],
  ["Bananes", "de", "aux"],
  ["Bar", "de", null],
  ["Barberries", "de", "aux"],
  ["Barbue", "de", null],
  ["Basilic Thaï", null, "au"],
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
  ["Bigorneaux", "de", "aux"],
  ["Blettes", "de", "aux"],
  ["Bleu des causses", "de", "au"],
  ["Bleuets", "de", "aux"],
  ["Bœuf de Kobe", "de", null],
  ["Boudins Blancs", "de", null],
  ["Boulghour", "de", "au"],
  ["Bourbon", null, "au"],
  ["Bourrache", null, "à la"],
  ["Bretzels", "de", "aux"],
  ["Brocciù", "de", "au"],
  ["Brochet", "de", null],
  ["Brocolis grillés", "de", "aux"],
  ["Bulots", "de", "aux"],
  ["Burrata", "de", "à la"],
  ["Cabécou", "de", "au"],
  ["Cabillau", "de", null],
  ["Cacahuètes", "de", "aux"],
  ["Cacao", "de", "au"],
  ["Café", null, "au"],
  ["Caille", "de", null],
  ["Calamar", "de", null],
  ["Camembert rôti", "de", "au"],
  ["Camembert", "de", "au"],
  ["Canard", "de", null],
  ["Cantal", "de", "au"],
  ["Câpres", null, "aux"],
  ["Capucines tubéreuses", "de", "aux"],
  ["Caramboles", "de", "aux"],
  ["Caramel beurre salé", null, "au"],
  ["Caramel", "de", "au"],
  ["Cardons", "de", "aux"],
  ["Carottes", "de", "aux"],
  ["Carpe", "de", null],
  ["Carrelet", "de", null],
  ["Cassonade", null, "à la"],
  ["Caviar d'aubergine", "de", "au"],
  ["Caviar Sevruga", "de", "au"],
  ["Cédrat confit", "de", "au"],
  ["Céleri rémoulade", "de", "au"],
  ["Céleri", "de", "au"],
  ["Cèpes", "de", "aux"],
  ["Cerf", "de", null],
  ["Cerfeuil tubéreux", null, "au"],
  ["Cerises de Venasque", "de", "aux"],
  ["Cervelas", "de", "au"],
  ["Cervelle", "de", null],
  ["Chablis", null, "au"],
  ["Champagne", null, "au"],
  ["Champignons de Paris", "de", "aux"],
  ["Champignons", "de", "aux"],
  ["Chapon", "de", null],
  ["Chataîgnes grillées", "de", "aux"],
  ["Chavignol de Sancerre", "de", "au"],
  ["Cheddar", "de", "au"],
  ["Chénopode blanc", null, "au"],
  ["Chervis", "de", "au"],
  ["Cheveux du diable", "de", "aux"],
  ["Chèvre cendré de Cocumont", "de", "au"],
  ["Chèvre frais", "de", "au"],
  ["Chevreuil", "de", null],
  ["Chevrotin des Aravis", "de", "au"],
  ["Chicons", "de", "aux"],
  ["Chicorée", "de", "à la"],
  ["Chipolata", "de", "aux"],
  ["Chocolat au lait", "de", "au"],
  ["Chocolat blanc", "de", "au"],
  ["Chocolat Knipschildt", "de", "au"],
  ["Chocolat noir", "de", "au"],
  ["Chocolat", "de", "au"],
  ["Chou Daubenton", "de", "au"],
  ["Chou frisé", "de", "au"],
  ["Chou Kale", "de", "au"],
  ["Chou Romanesco", "de", "au"],
  ["Chou rouge", "de", "au"],
  ["Chou-fleur", "de", "au"],
  ["Choucroute", "de", "à la"],
  ["Choux de Bruxelles", "de", "aux"],
  ["Ciboulette", null, "à la"],
  ["Citron vert", "de", "au"],
  ["Citron", "de", "au"],
  ["Citronnelle", null, "à la"],
  ["Citronnelle", null, "à la"],
  ["Citrons confits", "de", "aux"],
  ["Citrouille", "de", "à la"],
  ["Clémentines", "de", "aux"],
  ["Clou de Girofle", null, "au"],
  ["Cochon de lait", "de", "au"],
  ["Cochon de lait", "de", "au"],
  ["Cochonailles", "de", null],
  ["Cocos de Paimpol", "de", "aux"],
  ["Cœurs de canard", "de", "aux"],
  ["Cointreau", null, "au"],
  ["Colin", "de", null],
  ["Combava", null, "au"],
  ["Comté", "de", "au"],
  ["Concombre de mer", "de", "au"],
  ["Confit d'oie", "de", "au"],
  ["Confit de canard", "de", "au"],
  ["Conques", "de", "aux"],
  ["Coppa", "de", "à la"],
  ["Coquillages", "de", "aux"],
  ["Coquilles lutées", "de", "en"],
  ["Coquillettes", "de", "aux"],
  ["Coriandre", null, "à la"],
  ["Cornichons", "de", "aux"],
  ["Côtes de bœuf", "de", null],
  ["Côtes de marcassin", "de", null],
  ["Côtes de porc", "de", null],
  ["Coulommiers", "de", "au"],
  ["Courge Butternut", "de", "à la"],
  ["Courgettes", "de", "aux"],
  ["Couteaux", "de", "aux"],
  ["Crabe", "de", "au"],
  ["Crème Chantilly", null, "à la"],
  ["Crème fraîche", null, "à la"],
  ["Crème de chou-fleur", "de", "à la"],
  ["Cresson", "de", "au"],
  ["Crevettes", "de", "aux"],
  ["Crottin au poivre", "de", "au"],
  ["Croûtons", "de", "aux"],
  ["Cuisses de canard", "de", null],
  ["Cuisses de grenouille", "de", "aux"],
  ["Cumin", null, "au"],
  ["Curcuma", null, "au"],
  ["Curry", "de", "au"],
  ["Dattes", "de", "aux"],
  ["Dinde", "de", null],
  ["Dindonneau", "de", null],
  ["Diots", "de", null],
  ["Dorade", "de", null],
  ["Durian", "de", "au"],
  ["Eau de vie", null, "à l'"],
  ["Eau", null, "à l'"],
  ["Échalottes confites", null, "aux"],
  ["Échalottes", null, "aux"],
  ["Écrevisses", "d'", "aux"],
  ["Edamame", "d'", "à l'"],
  ["Emmental", "d'", "à l'"],
  ["Endives caramélisées", "d'", "aux"],
  ["Eperlan", "d'", null],
  ["Épices", null, "aux"],
  ["Épinards", "d'", "aux"],
  ["Épinards", "d'", "aux"],
  ["Époisse", "d'", "à l'"],
  ["Esturgeon", "d'", null],
  ["Étoile de mer", "d'", null],
  ["Faisan", "de", null],
  ["Feijoas", "de", "aux"],
  ["Fenouil rouge", null, "au"],
  ["Fenouil", "de", "au"],
  ["Fettuccine", "de", "aux"],
  ["Feuilles de vigne", "de", "aux"],
  ["Fèves de cacao", "de", "aux"],
  ["Fèves", "de", "aux"],
  ["Figatelle", "de", "à la"],
  ["Figues de Barbarie", "de", "aux"],
  ["Figues", "de", "aux"],
  ["Filet d'églefin", "de", null],
  ["Filet de bœuf", "de", null],
  ["Filet de canard", "de", null],
  ["Filet mignon", "de", null],
  ["Fines de claire", "de", "aux"],
  ["Flageolets", "de", "aux"],
  ["Fleur de sel", null, "à la"],
  ["Fleurs de courgette", "de", "aux"],
  ["Fleurs de lavande", null, "aux"],
  ["Foie d'oie", "de", "au"],
  ["Foie de veau", "de", "au"],
  ["Foie gras", "de", "au"],
  ["Fourme d’Ambert", "de", "à la"],
  ["Fourme de Montbrison", "de", "à la"],
  ["Fraises concassées", "de", "aux"],
  ["Framboises Tulameen", "de", "aux"],
  ["Fromage de tête", "de", null],
  ["Fruits confits", "de", "aux"],
  ["Fruits de la Passion", "de", "aux"],
  ["Fruits secs fumés-sucrés", "de", "aux"],
  ["Gambajo", "de", "au"],
  ["Gambas", "de", "aux"],
  ["Gaperon", "de", "au"],
  ["Géline de Tourraine", "de", "à la"],
  ["Gésiers d'oie", "de", "aux"],
  ["Gingembre confit", null, "au"],
  ["Gingembre", null, "au"],
  ["Girolles", "de", "aux"],
  ["Gîte à la noix", "de", null],
  ["Gnocchis", "de", "aux"],
  ["Gomasio", null, "au"],
  ["Gorgonzola", "de", "au"],
  ["Gouda Truffé", "de", "au"],
  ["Gouda vieux", "de", "au"],
  ["Gouda", "de", "au"],
  ["Gousses d'ail confites", null, "aux"],
  ["Goyave", "de", "à la"],
  ["Graines de chia", null, "aux"],
  ["Graines de courge", null, "aux"],
  ["Graines de lin", null, "aux"],
  ["Graines", null, "aux"],
  ["Grains de caviar", "de", "aux"],
  ["Grains de Grenade", "de", "aux"],
  ["Graisse de canard", null, "à la"],
  ["Graisserons", "de", "aux"],
  ["Grattons", "de", "aux"],
  ["Grenailles", "de", "aux"],
  ["Gruyère", "de", "au"],
  ["Haddock", "de", "au"],
  ["Harengs fumés", "de", null],
  ["Haricots blancs", "de", "aux"],
  ["Haricots Mungo", "de", "aux"],
  ["Haricots rouges", "de", "aux"],
  ["Haricots verts", "de", "aux"],
  ["Harissa", null, "à la"],
  ["Hélianti", "d'", "à l'"],
  ["Herbe de bison", null, "à l'"],
  ["Herbes fraîches", "d'", "aux"],
  ["Homard bleu", "de", "au"],
  ["Houmous", "de", "au"],
  ["Huile d'olive", null, "à l'"],
  ["Huile de coco", null, "à l'"],
  ["Huile de sésame", null, "à l'"],
  ["Huître", "d'", "à l'"],
  ["Huîtres chaudes", "d'", "aux"],
  ["Jambon Bellota", "de", "au"],
  ["Jambon de Bayonne", "de", "au"],
  ["Jambon de Chalosse", "de", "au"],
  ["Jambon fumé de Vendée", "de", "au"],
  ["Jambon Noir de Bigorre", "de", "au"],
  ["Jambon", "de", "au"],
  ["Jambonneau", "de", "au"],
  ["Jambose rouge", "de", "à la"],
  ["Jarret de cochon", "de", null],
  ["Jujube", "de", "au"],
  ["Kakis", "de", "aux"],
  ["Kéfir", null, "au"],
  ["Ketchup", null, "au"],
  ["Kiwis", "de", "aux"],
  ["Knacks", "de", null],
  ["Kombu", null, "au"],
  ["Kombucha", null, "au"],
  ["Konjac", "de", "au"],
  ["Kumquats", "de", "aux"],
  ["Lait d'amande", null, "au"],
  ["Lait de coco", null, "au"],
  ["Lait de soja", null, "au"],
  ["Lait", "de", "au"],
  ["Laitue romaine", "de", "à la"],
  ["Langouste", "de", "à la"],
  ["Langoustines", "de", "aux"],
  ["Langue de bœuf", "de", null],
  ["Lapin", "de", null],
  ["Lard de Colonnata", null, "au"],
  ["Lard", null, "au"],
  ["Légumes nouveaux", "de", "aux"],
  ["Lentilles corail", "de", "aux"],
  ["Lentilles vertes du Puy", "de", "aux"],
  ["Lieu jaune", "de", null],
  ["Lieu noir", "de", null],
  ["Lièvre", "de", null],
  ["Livarot", "de", "au"],
  ["Macaroni Lucullus", "de", "aux"],
  ["Mâche", "de", "à la"],
  ["Magret de canard", "de", null],
  ["Maïs", "de", "au"],
  ["Mandarines", "de", "aux"],
  ["Mangoustan", "de", "au"],
  ["Mangue", "de", "à la"],
  ["Manouri", "de", "au"],
  ["Maquereaux", "de", "aux"],
  ["Marjolaine", null, "à la"],
  ["Maroilles", "de", "au"],
  ["Marrons glacés", "de", "aux"],
  ["Marrons grillés", "de", "aux"],
  ["Marrons", "de", "aux"],
  ["Maté", null, "au"],
  ["Matsutaké", "de", "au"],
  ["Mayonnaise de Dijon", null, "à la"],
  ["Mélange d'herbes", "de", "au"],
  ["Mélasse de Grenade", "de", "à la"],
  ["Mélisse", "de", "à la"],
  ["Melon Yubari", "de", "au"],
  ["Menthe fraîche", "de", "à la"],
  ["Merguez", "de", "aux"],
  ["Merlan", "de", null],
  ["Merlu de ligne", "de", null],
  ["Miel", null, "au"],
  ["Mimolette", "de", "à la"],
  ["Miso", null, "au"],
  ["Mont d’Or", "de", "au"],
  ["Morbier", "de", "au"],
  ["Morilles", "de", "aux"],
  ["Mortadelle", "de", "à la"],
  ["Morue", "de", "à la"],
  ["Moules marinières", "de", "aux"],
  ["Mousserons", "de", "aux"],
  ["Moutarde au miel", null, "à la"],
  ["Moutarde de Dijon", null, "à la"],
  ["Mouton", "de", null],
  ["Mozzarella", "de", "à la"],
  ["Munster", "de", "au"],
  ["Murène", "de", null],
  ["Museau de bœuf", "de", null],
  ["Navets Boule d'Or", "de", "aux"],
  ["Navets", "de", "aux"],
  ["Neufchâtel", "de", "au"],
  ["Noisettes", null, "aux"],
  ["Noix de cajou", null, "aux"],
  ["Noix de coco", "de", "à la"],
  ["Noix de macadamia", null, "aux"],
  ["Noix de muscade", null, "à la"],
  ["Noix du Brésil", null, "aux"],
  ["Noix", null, "aux"],
  ["Nuoc Mam", null, "au"],
  ["Oca du Pérou", "d'", "à l'"],
  ["Œufs brouillés", "d'", "aux"],
  ["Œufs de caille", "d'", "aux"],
  ["Œufs de lump", "d'", "aux"],
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
  ["Pamplemousse", "de", "au"],
  ["Panais", "de", "aux"],
  ["Papaye", "de", "à la"],
  ["Paprika fumé", null, "au"],
  ["Paprika", null, "au"],
  ["Parmesan", "de", "au"],
  ["Pastèque Densuque", "de", "à la"],
  ["Pastis", null, "au"],
  ["Pastrami", "de", "au"],
  ["Pata Negra", "de", "au"],
  ["Patates douces", "de", "aux"],
  ["Patates", "de", "aux"],
  ["Pânés de dinde", "de", null],
  ["Pâté en croûte", "de", "au"],
  ["Pavot", null, "au"],
  ["Pecorino Stagionato", "de", "au"],
  ["Pépites de Foie Gras", "de", "aux"],
  ["Persil tubéreux", "de", "au"],
  ["Petit Boudins Antillais", "de", "aux"],
  ["Petites rattes du Touquet", "de", "aux"],
  ["Petits oignons nouveaux", "de", "aux"],
  ["Petits pois", "de", "aux"],
  ["Pétoncles", "de", "aux"],
  ["Physalis", "de", "aux"],
  ["Picodon", "de", "au"],
  ["Pieds de porc", "de", "aux"],
  ["Pieuvre", "de", null],
  ["Pigeon", "de", null],
  ["Pigeonneau", "de", null],
  ["Pignons de pin", "de", "aux"],
  ["Pilons de poulet", "de", null],
  ["Piment d'Espelette", "de", "au"],
  ["Piment de Cayenne", "de", "au"],
  ["Piment", null, "au"],
  ["Pineau des Charentes", null, "au"],
  ["Pintade", "de", null],
  ["Pissenlit", "de", "au"],
  ["Pistaches", null, "aux"],
  ["Pitaya", "de", "à la"],
  ["Plat de côte", "de", null],
  ["Poire tapée", null, "à la"],
  ["Poireaux", "de", "aux"],
  ["Poires", "de", "aux"],
  ["Pois chiches", "de", "aux"],
  ["Pois", "de", "aux"],
  ["Poisson cru", "de", "au"],
  ["Poitrine fumée", "de", "à la"],
  ["Poivre de Kampot", null, "au"],
  ["Poivre de Sichuan", null, "au"],
  ["Poivre de Timut", null, "au"],
  ["Poivre vert", null, "au"],
  ["Poivrons anciens", "de", "aux"],
  ["Poivrons grillés", "de", "aux"],
  ["Polenta", "de", "à la"],
  ["Pomelo", "de", "au"],
  ["Pommes de terre", "de", "aux"],
  ["Pommes", "de", "aux"],
  ["Pont l’Évêque", "de", "au"],
  ["Porc noir de Bigorre", "de", null],
  ["Potimarron", "de", "au"],
  ["Potiron", "de", "au"],
  ["Pottok", "de", null],
  ["Poularde", "de", null],
  ["Poule d'eau", "de", null],
  ["Poule", "de", null],
  ["Poulet croustillant", "de", null],
  ["Poulet tandoori", "de", null],
  ["Poulet", "de", "au"],
  ["Poulpe", "de", null],
  ["Prisuttu", "de", "au"],
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
  ["Ramboutan", "de", "au"],
  ["Ras el-hanout", null, "au"],
  ["Rascasse", "de", null],
  ["Ravioli", "de", "aux"],
  ["Reblochon fermier", "de", "au"],
  ["Requin", "de", null],
  ["Rhubarbe", "de", "à la"],
  ["Rhum", null, "au"],
  ["Ricotta", "de", "à la"],
  ["Riesling", null, "au"],
  ["Rigatonis", "de", "aux"],
  ["Ris de veau", "de", "aux"],
  ["Riz brun", "de", "au"],
  ["Riz épicé", "de", "au"],
  ["Riz fumé", "de", "au"],
  ["Riz noir", "de", "au"],
  ["Riz vermicelle", "de", "au"],
  ["Riz", "de", "au"],
  ["Rocamadour", "de", "au"],
  ["Rognons", "de", "aux"],
  ["Romarin", "de", "au"],
  ["Roquefort", "de", "au"],
  ["Rosette de Lyon", "de", "à la"],
  ["Rôti de dindonneau", "de", null],
  ["Rouget", "de", null],
  ["Rumsteak", "de", "au"],
  ["Rutabagas", "de", "à la"],
  ["Safran", null, "au"],
  ["Saindoux", null, "au"],
  ["Saint-Félicien", "de", "au"],
  ["Saint-Marcelin", "de", "au"],
  ["Saint-Nectaire fermier", "de", "au"],
  ["Saint-Pierre", "de", null],
  ["Salami", "de", "au"],
  ["Salsifis", "de", "aux"],
  ["Sanglier", "de", null],
  ["Sapotille", "de", "à la"],
  ["Sardines", "de", "aux"],
  ["Sauce Barbecue", null, "à la"],
  ["Sauce brune", null, "à la"],
  ["Sauce soja", null, "à la"],
  ["Sauce Sriracha", "de", "à la"],
  ["Sauce Worcestershire", null, "à la"],
  ["Saucisse de canard", "de", null],
  ["Saucisse", "de", "à la"],
  ["Saucisses aux herbes", "de", null],
  ["Saucisses Cocktail", "de", "aux"],
  ["Saucisses de Francfort", "de", "aux"],
  ["Saucisses de Morteau", "de", null],
  ["Saucisses de Strasbourg", "de", "aux"],
  ["Saucisson à l'ail", "de", "au"],
  ["Saucisson de taureau", "de", "au"],
  ["Sauge", "de", "à la"],
  ["Saumon fumé", "de", "au"],
  ["Sauternes", null, "au"],
  ["Scampis", "de", "aux"],
  ["Scarmoza", "de", "à la"],
  ["Scarole", "de", "à la"],
  ["Schnitzel", "de", null],
  ["Seiche", "de", null],
  ["Sel & Poivre", null, "au"],
  ["Sel himalayen", null, "au"],
  ["Serrano", "de", "au"],
  ["Sésame doré", null, "au"],
  ["Sésame noir", null, "au"],
  ["Sésame", null, "au"],
  ["Sirop d’érable", "de", "au"],
  ["Sirop de Liège", null, "au"],
  ["Sole", "de", null],
  ["Spaghettis", "de", "aux"],
  ["Spätzle", "de", "aux"],
  ["Sucre brun", null, "au"],
  ["Tabasco", null, "au"],
  ["Tagliatelles", "de", "aux"],
  ["Tahini", null, "au"],
  ["Taillerins", "de", "aux"],
  ["Tamarin", "de", "au"],
  ["Taureau de Camargue", "de", null],
  ["Thé vert", "de", "au"],
  ["Thon rouge", "de", "au"],
  ["Thym bio", "de", "au"],
  ["Tofu fumé", "de", "au"],
  ["Tomate", "de", "à la"],
  ["Tomates confites", "de", "aux"],
  ["Tomates noires de Crimée", "de", "aux"],
  ["Tomates séchées", "de", "aux"],
  ["Tome des Bauges AOP", "de", "à la"],
  ["Tomme Crayeuse Fermière", "de", "à la"],
  ["Tomme de Montagne", "de", "à la"],
  ["Topinambours", "de", "aux"],
  ["Tortellini", "de", "aux"],
  ["Travers de porc", "de", null],
  ["Tripes", "de", "aux"],
  ["Trompettes de la mort", "de", "aux"],
  ["Truffe blanche d'Alba", "de", "à la"],
  ["Truffe noire du Périgord", "de", "à la"],
  ["Truite saumonnée", "de", null],
  ["Turbot", "de", null],
  ["Veau de lait de Corrèze", "de", null],
  ["Verveine", null, "à la"],
  ["Viande des Grisons", "de", "à la"],
  ["Viande hachée", "de", "à la"],
  ["Viandox", null, "au"],
  ["Vinaigre balsamique", null, "au"],
  ["Vinaigre de cidre", null, "au"],
  ["Vinaigre de Modène", null, "au"],
  ["Vinaigrette", null, "à la"],
  ["Violets", "de", null],
  ["Vodka", null, "à la"],
  ["Volaille", "de", null],
  ["Volutes", "de", "aux"],
  ["Wakamé", "de", "au"],
  ["Wasabi", null, "au"],
  ["Whisky", null, "au"],
  ["Xérès", null, "au"],
  ["Yaourt", "de", "au"],
  ["Za’atar", null, "au"],
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

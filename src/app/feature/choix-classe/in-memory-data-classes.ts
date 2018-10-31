import { Classe } from './classe';

export const ClasseCollection: Classe[] = [
    { id: '1', nom: 'Rodeur', url: '/assets/miniatures/rodeur.jpg',
        popover: 'Seules comptent les notions de prédateurs et de proies. Qu’ils soient éclaireurs, pisteurs ou chasseurs de prime, les rôdeurs partagent de nombreuses particularités : une maîtrise inégalée de certaines armes, une grande habileté pour débusquer le gibier, même le plus inaccessible, et un savoir-faire leur permettant de venir à bout d’une grande variétés de proies. Ils allient savoir, patience et habileté pour traquer hommes, bêtes ou animaux. Ils développent un instinct de prédateur, un savoir-faire applicable à de multiples environnements et des capacités martiales toujours plus dangereuses.',
        routerLink: '/generationCarac',
        slugName: 'Rodeur',
        recommandation: ['FOR', 'DEX', 'CON', 'SAG'],
        infosClasse: 'FOR (pour frapper FORT), et / ou , DEX (pour être précis), CON (pour encaisser) , et SAG (pour lancer des sorts).',
        argentDepart: '5d6',
        argentDepartMoyenne: 175
    },

    { id: '2', nom: 'Guerrier', url: '/assets/miniatures/guerrier.jpg',
        popover: 'Qu\'importe la raison pour laquelle ils prennent les armes, les guerriers, ces seigneurs du champ de bataille, forment un groupe hétéroclite. Ils s’entraînent à manier de nombreuses armes ou juste une, à utiliser les armures de manière optimale, ils suivent les enseignements martiaux de maîtres exotiques et étudient l’art de la guerre. Tout cela pour devenir de véritables armes vivantes. Ces combattants exceptionnels sont plus que de simples brutes : ils révèlent la véritable puissance des armes et les transforment en outils permettant de soumettre des royaumes, de massacrer des monstres, d’unir des armées. Ils sont les champions du champs de bataille.',
        routerLink: '/generationCarac',
        slugName: 'Guerrier',
        recommandation: ['FOR', 'DEX', 'CON'],
        infosClasse: ' FOR (pour frapper FORT) , et / ou , DEX (pour être précis) , CON (pour encaisser).',
        argentDepart: '5d6',
        argentDepartMoyenne: 175
    },

    { id: '3', nom: 'Chasseur ', url: '/assets/miniatures/chasseur.jpg',
        popover: 'Les chasseurs sont des combattants des terres sauvages qui ont tissé des liens étroits avec de fidèles compagnons animaux.Ils ont développé des tactiques leur permettant de se battre aux côtés de leur compagnon en formant un redoutable duo.Ils connaissent une grande variété de sorts naturels et savent utiliser les capacités et les attributs des animaux pour s\’améliorer et améliorer leur compagnon.',
        routerLink: '/generationCarac',
        slugName: 'Chasseur',
        recommandation: ['FOR', 'DEX', 'CON', 'SAG', 'CHA'] ,
        infosClasse: 'FOR (pour frapper FORT) , et / ou , DEX (pour être précis) , CON (pour encaisser), SAG (pour lancer des sorts), CHA (pour les compétences de dressage).',
        argentDepart: '4d6',
        argentDepartMoyenne: 175
    },

    { id: '4', nom: 'Moine', url: '/assets/miniatures/moine.jpg',
        popover: 'Pour ces individus réellement exemplaires, l’art du combat ne se limite pas au champ de bataille : il s’agit d’un mode de vie, d’une doctrine, d’un état d’esprit. Ils découvrent que la nature les a dotés d’armes tout aussi capables d’affaiblir ou de tuer que les lames. Qu’il s’agisse d’ascètes avec un penchant pour le combat ou de pugilistes qui ont appris sur le tas, ils font de leur corps de véritables armes de guerre. Les moines suivent la voie de la discipline, et ceux qui possèdent suffisamment de volonté pour rester sur ce chemin découvrent en eux non pas qui ils sont, mais ce qu’ils sont destinés à devenir.',
        routerLink: '/generationCarac',
        slugName: 'Moine',
        recommandation: ['FOR', 'DEX', 'CON', 'SAG'],
        infosClasse: ' FOR (pour frapper FORT) , et / ou , DEX (pour être précis et augmenter ta CA) , CON (pour encaisser) , et  SAG (pour pour bonus à la CA ) ',
        argentDepart: '1d6',
        argentDepartMoyenne: 35
    },

    { id: '5', nom: 'Druide', url: '/assets/miniatures/Lini.jpg',
        popover: 'Il existe dans la nature un pouvoir qui dépasse les merveilles de la civilisation. Une magie brute, discrète mais indéniable, est protégée par des adeptes de la philosophie de l’équilibre, appelés druides. À la fois alliés des bêtes et maîtres de la nature, ces défenseurs des étendues sauvages souvent mal compris s’efforcent de protéger leurs terres de tous ceux qui les menacent et démontrent la puissance de la nature à ceux qui se tapissent derrière les murs des cités. Ils usent de métamorphose inégalées, reçoivent l’aide de puissants compagnons animaux et peuvent laisser éclater la colère de la nature. La civilisation a abandonnée et oubliée depuis longtemps leur Pouvoir.',
        routerLink: '/generationCarac',
        slugName: 'Druide',
        recommandation: ['SAG'],
        infosClasse: 'Le duide est très polyvalent, vous pouvez choisir d\'être constamment sous forme animale, auquel cas vous priviligierez la SAG, l\'INT et le CHA, sinon faites comme bon vous semble mais n\'oubliez pas que le Druide tire sa magie de sa valeur de SAG.',
        argentDepart: '2d6',
        argentDepartMoyenne: 70
     },

    { id: '6', nom: 'Mage', url: '/assets/miniatures/magicien.jpg',
        popover: 'Cette classe blablablabla...',
        routerLink: '/generationCarac',
        slugName: 'Mage',
        recommandation: ['INT', 'DEX', 'CON'],
        infosClasse: 'INT (pour connaitre un max de sorts), DEX (pour éviter de toujours se faire toucher), CON (pour éviter un malheureux OneShot).',
        argentDepart: '2d6',
        argentDepartMoyenne: 70
     },

    { id: '7', nom: 'Ensorceleur', url: '/assets/miniatures/ensorceleur.jpg',
        popover: 'Cette classe blablablabla...',
        routerLink: '/generationCarac',
        slugName: 'Ensorceleur',
        recommandation: ['CHA'],
        infosClasse: 'CHA (pour lancer des sorts), DEX (pour éviter de toujours se faire toucher, et être utile à distance), CON (pour tes petits points de vie). ',
        argentDepart: '2d6',
        argentDepartMoyenne: 70
     },

    { id: '8', nom: 'Ninja', url: '/assets/miniatures/ninja.jpg',
        popover: 'Quand les riches et les puissants veulent éliminer un ennemi discrètement et à coup sûr, ils font appel à un ninja. Quand un général doit saboter les engins de siège adverses avant qu\’ils n’atteignent les murs de son château, il fait appel à un ninja. Et quand des imbéciles osent s\’en prendre à un ninja ou à ses compagnons, il attend qu\’ils s\’endorment et se prépare à frapper. Ces tueurs de l\’ombre sont passés maîtres dans l\’art de l\’infiltration, du sabotage et de l\’assassinat. Ils utilisent tout un arsenal d\’armes, de techniques et de pouvoirs mystiques pour atteindre leurs objectifs.',
        routerLink: '/generationCarac',
        slugName: 'Ninja',
        recommandation: [''],
        infosClasse: 'FOR (pour frapper FORT) , et / ou , DEX (pour être précis et augmenter ta CA) , CON (pour encaisser), CHA (pour obtenir du Ki).',
        argentDepart: '4d6',
        argentDepartMoyenne: 140
     },

    {id: '9', nom: 'Roublard', url: '/assets/miniatures/roublard.jpg',
        popover: 'Cette classe blablablabla...',
        routerLink: '/generationCarac',
        slugName: 'Roublard',
        recommandation: [''],
        infosClasse: 'DEX (pour être précis et augmenter ta CA, ainsi que pour booster la plupart de tes compétences), INT (pour être compétent dans pleiiin de domaines), CON (pour encaisser).',
        argentDepart: '4d6',
        argentDepartMoyenne: 140
    },

    { id: '10', nom: 'Barde', url: '/assets/miniatures/barde.jpg',
        popover: 'Pour ceux qui sont capables de les découvrir, le monde contient des merveilles insoupçonnées et de nombreux mystères. C’est grâce à leur intelligence, leur habileté et leur magie que quelques individus rusés percent les secrets du monde tout en se formant aux arts de la persuasion, de la manipulation et de l’inspiration. Ces bardes, qui maîtrisent généralement une ou plusieurs formes d’expression artistique, possèdent des connaissances étonnamment variées et utilisent ce qu’ils apprennent pour se préparer aux dangers qui les menacent, eux et leurs alliés. Vifs d’esprit et passionnants, les bardes possèdent des compétences diversifiées qui peuvent les mener vers de nombreuses carrières : joueurs professionnels, touche-à-tout, érudits ou artistes, chefs charismatiques ou brigands, ou bien encore tout cela à la fois. Pour les bardes, chaque jour apporte son lot d’opportunités, d’aventures et de défis dont il n’est possible de tirer avantage qu’en prenant des risques, en élargissant ses connaissances et en se donnant à cent pour cent.',
        routerLink: '/generationCarac',
        slugName: 'Barde',
        recommandation: ['DEX', 'CHA', 'INT'],
        infosClasse: 'DEX (pour éviter de toujours se faire toucher, et être utile à distance), CHA (pour faire ta RockStar), INT (pour être compétent dans diverses domaines).',
        argentDepart: '3d6',
        argentDepartMoyenne: 105
    },

    { id: '11', nom: 'Barbare', url: '/assets/miniatures/barbare.jpg',
        popover: 'Pour certains individus, tout n’est que rage. Que ce soit dans les coutumes de leur peuple, dans la fureur de leurs passions ou dans leurs cris de bataille, la seule chose qu’ils connaissent est le conflit. Il s’agit de sauvages, de mercenaires qui louent leurs services ou encore d’experts en techniques martiales violentes. Ce ne sont ni des soldats ni des guerriers professionnels mais des créatures entièrement dévouées à la bataille et au carnage, des esprits de la guerre. Ces combattants, connus sous le nom de barbares, font peu de cas de l’entraînement, de la préparation ou des règles d’affrontement. Seuls comptent pour eux le moment présent, les ennemis qui se tiennent devant eux et le fait de savoir que la mort pourrait les surprendre à tout moment. Ils possèdent un sixième sens pour le danger et sont suffisamment endurants pour supporter tout ce qui pourrait leur arriver. Ces combattants violents peuvent apparaître au sein de n’importe quelle communauté, qu’elle soit civilisée ou primitive, mais, dans les recoins sauvages du monde, des sociétés entières ont embrassé cette philosophie. C’est l’esprit originel des batailles qui se déchaîne dans le cœur des barbares : malheur à ceux qui affronteront leur rage.',
        routerLink: '/generationCarac',
        slugName: 'Barbare',
        recommandation: ['FOR', 'CON', 'DEX'],
        infosClasse: 'FOR (pour frapper FORT), DEX (pour être précis mais surtout pour être plus difficile à toucher), CON (pour encaisser et prolonger ta Rage Barbare !).',
        argentDepart: '3d6',
        argentDepartMoyenne: 105
    },

    { id: '12', nom: 'Prêtre', url: '/assets/miniatures/pretre.jpg',
        popover: 'Cette classe blablablabla...',
        routerLink: '/generationCarac',
        slugName: 'Prêtre',
        recommandation: ['SAG', 'CON', 'puis', 'CHA', 'FOR', 'DEX'],
        infosClasse: 'SAG (pour tous tes sorts), CON(pour encaisser), CHA(pour augmenter son pouvoir de canalisation), FOR (pour frapper FORT), DEX (pour tes attaques à distance).',
        argentDepart: '4d6',
        argentDepartMoyenne: 140
     },
];

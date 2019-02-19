import { ProprieteMagique } from './propriete-magique';

export const ProprieteMagiqueArme: ProprieteMagique[] = [
    {
        id: '1',
        nom: 'Tueuse',
        bonus: '+1',
        description: 'Une arme tueuse est particulièrement efficace contre un type ou un sous-type de créature donné. Contre ses adversaires désignés, son bonus d’altération augmente de +2. De plus, lors d’une attaque réussie, l’arme inflige 2d6 points de dégâts supplémentaires contre ses adversaires désignés.'
    },
    {
        id: '2',
        nom: 'Gardienne',
        bonus: '+1',
        description: 'Une arme gardienne permet à son possesseur d’utiliser tout ou partie de son bonus d’altération comme bonus à la CA, lequel peut se cumuler avec tous les autres types de bonus à la CA. Par une action libre au début de son tour de jeu, avant d\'utiliser l\'arme, le personnage choisit la façon dont il répartit son bonus et sa CA est modifiée en conséquence jusqu’à son prochain tour de jeu. '
    },
    {
        id: '3',
        nom: 'De Feu',
        bonus: '+1',
        description: 'Sur commande, une arme de feu se couvre de flammes n’infligeant aucun dégât au porteur. Lors d’une attaque réussie, une arme de feu inflige +1d6 points de dégâts de feu supplémentaires. '
    },
    {
        id: '4',
        nom: 'De Froid',
        bonus: '+1',
        description: 'Sur commande, une arme de froid génère un froid glacial n’infligeant aucun dégât au porteur. Lors d’une attaque réussie, une arme de froid inflige +1d6 points de dégâts de froid supplémentaires. '
    },
    {
        id: '5',
        nom: 'De Foudre',
        bonus: '+1',
        description: 'Sur commande, une arme de foudre génère un halo d’électricité n’infligeant aucun dégât au porteur. Lors d’une attaque réussie, une arme de foudre inflige +1d6 points de dégâts d’électricité supplémentaires. '
    },
    {
        id: '6',
        nom: 'Spectrale',
        bonus: '+1',
        description: 'Une arme spectrale permet de frapper les créatures intangibles comme si celles-ci étaient tangibles. La réduction des dégâts de 50 % qu’ont les créatures intangibles face aux armes tangibles n’est pas appliquée face à une arme spectrale. Celle-ci peut également être utilisée normalement par une créature intangible. Un fantôme utilisant son pouvoir de manifestation peut s’en servir contre des adversaires tangibles. Globalement, une arme spectrale est à tout moment considérée comme étant à la fois tangible et intangible. '
    },
    {
        id: '7',
        nom: 'Acérée',
        bonus: '+1',
        description: 'Cette propriété double la zone de critique possible d’une arme. Seules des armes tranchantes ou perforantes peuvent être acérées. Si vous tirez aléatoirement cette capacité sur une arme qui ne peut en profiter, relancez les dés. Les effets de cette propriété ne se cumulent pas avec des effets similaires étendant la zone de critique possible, comme le sort affûtage ou le don Science du critique. '
    },
    {
        id: '8',
        nom: 'De Focalisation Ki',
        bonus: '+1',
        description: 'Une arme de focalisation ki permet à son porteur de canaliser son énergie ki. Le personnage peut ainsi utiliser ses attaques spéciales ki via cette arme, de la même façon que s’il se battait à mains nues. Les attaques affectées sont les aptitudes de moine de frappe ki et de paume vibratoire, ainsi que le don Coup étourdissant (et tous les effets que peut y ajouter le moine). '
    },
    {
        id: '9',
        nom: 'Miséricordieuse',
        bonus: '+1',
        description: 'Une arme miséricordieuse inflige +1d6 points de dégâts supplémentaires, et l’ensemble des dégâts qu’elle inflige deviennent non létaux. Sur commande, l’arme peut annuler les deux effets de cette propriété, et infliger des dégâts létaux, jusqu’à ce qu’elle reçoive l’ordre inverse. '
    },
    {
        id: '10',
        nom: 'D\'Enchênement',
        bonus: '+1',
        description: 'Si l’utilisateur d’une arme d’enchaînement possède le don Enchaînement, il est à même d’effectuer une attaque d’enchaînement supplémentaire par round. Il est pour cela nécessaire que son prochain adversaire soit à sa portée et sur une case adjacente au précédent. Il est impossible de porter cette attaque contre son premier adversaire. Seules des armes de corps à corps peuvent profiter de cette propriété. '
    },
    {
        id: '11',
        nom: 'De Stockage De Sort',
        bonus: '+1',
        description: 'Un utilisateur de magie peut placer dans une arme de stockage de sort un unique sort du 3e niveau ou moins dont la cible est une créature unique et dont le temps d’incantation est de 1 action simple. Chaque fois que l’arme frappe une créature et lui inflige des dégâts, le personnage peut ordonner à l’arme (par une action libre) de lancer immédiatement le sort qu’il y a stocké (cette propriété est une exception à la règle stipulant que lancer un sort par le biais d’un objet prend au moins autant de temps que le jeter soi-même). Une fois le sort lancé, l’arme est vide et doit être rechargée par un lanceur de sorts. L’arme indique par magie à son porteur l’identité du sort qu’elle stocke. Si l’arme est déterminée de façon aléatoire, elle a 50 % de chances de posséder un sort en réserve quand elle est trouvée.'
    },
    {
        id: '12',
        nom: 'De Lancer',
        bonus: '+1',
        description: 'Seules des armes de corps à corps peuvent profiter de cette propriété. Elles acquièrent un facteur de portée de 3 m et peut être lancée par tout personnage formé à son maniement. '
    },
    {
        id: '13',
        nom: 'De Tonnerre',
        bonus: '+1',
        description: 'Une arme de tonnerre génère une déflagration sonore lors de chacun de ses coups critiques. La déflagration ne blesse pas le porteur. La cible subit des dégâts de son supplémentaires de 1d8 lors d’un coup critique ; si le multiplicateur de critique est de x3, l’arme inflige 2d8 points de dégâts supplémentaires et s’il est de x4, de 3d8 points de dégâts supplémentaires. De plus, les victimes d’un coup critique porté à l’aide d’une arme de tonnerre doivent réussir un jet de Vigueur (DD 14) pour éviter de devenir définitivement sourds.'
    },
    {
        id: '14',
        nom: 'Vicieuse',
        bonus: '+1',
        description: 'Lorsqu’une arme vicieuse frappe une créature, elle génère entre son porteur et sa cible une aura d’énergie destructive, qui inflige 1d6 points de dégâts au porteur et 2d6 points de dégâts à la cible de celui-ci. Cette propriété ne peut être placée que sur une arme de corps à corps. '
    },
    {
        id: '15',
        nom: 'Anarchique',
        bonus: '+2',
        description: 'Une arme anarchique est alimentée directement par l’énergie du Chaos. Cela en fait une arme du Chaos, à même d’ignorer la réduction des dégâts correspondante. Elle inflige 2d6 points de dégâts supplémentaires aux créatures d’alignement Loyal. Toute créature Loyale se servant de cette arme acquiert instantanément un niveau négatif qui persiste tant qu’elle la porte, et qui disparaît dès qu’elle s’en sépare. Ce niveau négatif ne peut être dissipé par aucun moyen (pas même un sort de restauration). '
    },
    {
        id: '16',
        nom: 'Axiomatique',
        bonus: '+2',
        description: 'Une arme axiomatique est alimentée directement par l’énergie de la Loi. Cela en fait une arme de la Loi, à même d’ignorer la réduction des dégâts correspondante. Elle inflige 2d6 points de dégâts supplémentaires aux créatures d’alignement Chaotique. Toute créature Chaotique se servant de cette arme acquiert instantanément un niveau négatif qui persiste tant qu’elle la porte, et qui disparaît dès qu’elle s’en sépare. Ce niveau négatif ne peut être dissipé par aucun moyen (pas même un sort de restauration). '
    },
    {
        id: '17',
        nom: 'De Destruction',
        bonus: '+2',
        description: 'Une arme de destruction est le fléau des morts-vivants, quels qu’ils soient. Tout mort-vivant frappé par cette arme en combat doit réussir un jet de Volonté (DD 14) pour ne pas être détruit. '
    },
    {
        id: '18',
        nom: 'De Feu Intense',
        bonus: '+2',
        description: 'Une arme de feu intense fonctionne comme une arme de feu, mais elle est en plus capable de générer une explosion de feu lors de chaque coup critique. L’explosion de feu ne blesse pas le porteur. La cible subit des dégâts de feu supplémentaires de 1d10 lors d’un coup critique ; si le multiplicateur de critique est de x3, l’arme inflige 2d10 points de dégâts supplémentaires et s’il est de x4, de 3d10 points de dégâts supplémentaires. '
    },
    {
        id: '19',
        nom: 'De Froid Intense',
        bonus: '+2',
        description: 'Une arme de froid intense fonctionne comme une arme de froid, mais elle possède la possibilité supplémentaire de générer une explosion de froid lors de chaque coup critique. L’explosion de froid ne blesse pas le porteur. La cible subit des dégâts de froid supplémentaires de 1d10 lors d’un coup critique ; si le multiplicateur de critique est de x3, l’arme inflige 2d10 points de dégâts supplémentaires et s’il est de x4, de 3d10 points de dégâts supplémentaires.'
    },
    {
        id: '20',
        nom: 'De Foudre Intense',
        bonus: '+2',
        description: 'Une arme de foudre intense fonctionne comme une arme de foudre, mais elle est en plus capable de générer une explosion d’électricité lors de chaque coup critique. L’explosion d’électricité ne blesse pas le porteur. La cible subit des dégâts de foudre supplémentaires de 1d10 lors d’un coup critique ; si le multiplicateur de critique est de x3, l’arme inflige 2d10 points de dégâts supplémentaires et s’il est de x4, de 3d10 points de dégâts supplémentaires. L’explosion d’électricité a lieu même si la propriété spéciale d’électricité de l’arme n’est pas activée. '
    },
    {
        id: '21',
        nom: 'Sainte',
        bonus: '+2',
        description: 'Une arme sainte est alimentée directement par l’énergie Bonne. Cela en fait une arme du Bien, à même d’ignorer la réduction des dégâts correspondante. Elle inflige 2d6 points de dégâts supplémentaires aux créatures d’alignement Mauvais. Toute créature Mauvaise se servant de cette arme acquiert instantanément un niveau négatif qui persiste tant qu’elle la porte, et qui disparaît dès qu’elle s’en sépare. Ce niveau négatif ne peut être dissipé par aucun moyen (pas même un sort de restauration). '
    },
    {
        id: '22',
        nom: 'Impie',
        bonus: '+2',
        description: 'Une arme impie est alimentée directement par l’énergie Mauvaise. Cela en fait une arme du Mal, à même d’ignorer la réduction des dégâts correspondante. Elle inflige 2d6 points de dégâts supplémentaires aux créatures d’alignement Bon. Toute créature Bonne se servant de cette arme acquiert instantanément un niveau négatif qui persiste tant qu’elle la porte, et qui disparaît dès qu’elle s’en sépare. Ce niveau négatif ne peut être dissipé par aucun moyen (pas même un sort de restauration). '
    },
    {
        id: '23',
        nom: 'Sanglante',
        bonus: '+2',
        description: 'Arme de mélée uniquement. Une arme sanglante inflige 1 point de dégâts de saignement lorsqu\'elle touche une créature.Si la victime reçoit plusieurs coups d’une arme sanglante, les dégâts de saignement augmentent.Ces dégâts de saignement prennent effet au début du tour suivant de la victime.On peut arrêter le saignement en réussissant un test de Premiers secours(DD 15) ou en lançant sur le blessé un sort de soins.Un coup critique ne multiplie pas les dégâts de saignement.Les créatures immunisées contre les coups critiques sont immunisées aux effets dégâts de saignement de cette propriété spéciale. '
    },
    {
        id: '24',
        nom: 'De Rapidité',
        bonus: '+3',
        description: 'Une arme de rapidité permet à son possesseur d’attaquer une fois de plus par round, lorsqu’il effectue une action d’attaque à outrance. Cette attaque utilise le bonus de base à l’attaque le plus élevé du possesseur de l’arme et les modificateurs habituels s’appliquent. Les effets de cette propriété spéciale ne se cumulent pas avec des effets similaires, comme le sort rapidité. '
    },
    {
        id: '25',
        nom: 'De Lumière',
        bonus: '+4',
        description: 'Une arme de lumière voit sa partie destinée à blesser transformée en lumière, bien que cela ne modifie en rien son poids. Elle éclaire autant qu’une torche, dans un rayon de 6 m. Elle ne tient pas compte de la matière non vivante. Elle ne tient donc pas compte du bonus d’armure et de bouclier à la CA (ainsi que du bonus d’altération d’une armure magique). Les bonus de Dextérité, d’esquive, d’armure naturelle, de parade et autres sont comptés normalement. Une arme de lumière ne peut pas infliger le moindre dégât aux objets, pas plus qu’aux morts-vivants ou aux créatures artificielles. '
    },
    {
        id: '26',
        nom: 'Dansante',
        bonus: '+4',
        description: 'Par une action simple, on peut lâcher une arme dansante afin que celle-ci attaque d’elle-même. Elle combat pendant 4 rounds, en se servant du bonus de base à l’attaque de son propriétaire, avant de tomber à terre. Pendant qu’elle danse, l’arme est incapable de porter d’attaque d’opportunité et son propriétaire n’est pas considéré comme étant armé avec cette arme. Elle est considérée pour tous les autres effets comme étant tenue ou portée par son propriétaire. Lorsqu’elle danse, l’arme occupe le même espace que son propriétaire et peut attaquer les adversaires adjacents (les armes à allonge peuvent attaquer les adversaires se trouvant à 3 m). L’arme dansante suit la personne qui l’a activée dans ses déplacements, que ceux-ci soient ordinaires ou magiques. La personne qui l’a lâchée peut la reprendre quand elle le souhaite par une action libre, à condition qu’elle ait une main libre. Dans ce cas, il est nécessaire d’attendre un minimum de 4 rounds pour que l’arme puisse danser de nouveau. '
    },
    {
        id: '27',
        nom: 'Vorpale',
        bonus: '+5',
        description: 'Cette propriété puissante et crainte permet de décapiter les créatures frappées. En cas de 20 naturel sur le jet d’attaque, suivi d’une confirmation de coup critique réussie, la tête de la cible (si celle-ci en possède une) est automatiquement séparée de son corps. Certaines créatures n’ont pas de tête (c’est le cas de nombreuses aberrations et de toutes les vases). D’autres créatures, telles que les golems et les morts-vivants (vampires exceptés), ne sont pas affectées par la perte de leur tête. À ces quelques exceptions près, les créatures dont la tête est tranchée meurent aussitôt. Seules des armes tranchantes peuvent être vorpales. Si vous tirez aléatoirement cette capacité sur une arme qui ne peut en profiter, relancez les dés. '
    },
    {
        id: '28',
        nom: 'D\'Alliance',
        bonus: '+1',
        description: 'Une arme d’alliance permet à son porteur de transférer certains de ses bonus d’altération ou leur totalité à une arme utilisée par un de ses alliés. Il doit voir cet allié. Par une action libre effectuée au début de son tour et avant d’utiliser son arme, le personnage décide de comment il compte distribuer son bonus d’altération. Le bonus de l’arme alliée persiste jusqu’au prochain tour du propriétaire de l’arme d’alliance. Le bonus d’altération qu’elle donne ne se cumule pas avec tout bonus d’altération que l’arme de l’allié possède déjà. '
    },
    {
        id: '29',
        nom: 'Conductrice',
        bonus: '+1',
        description: 'Une arme conductrice est capable de canaliser l’énergie d’un pouvoir magique ou surnaturel qui dépend d’une attaque de corps à corps ou à distance pour toucher sa cible (comme le pouvoir de domaine d’un prêtre, le pouvoir de lignage d’un ensorceleur, la révélation d’un mystère d’oracle ou le pouvoir d’école d’un magicien). Quand le propriétaire de l’arme réussit une attaque du type approprié, il peut décider de dépenser deux utilisations de son pouvoir pour le canaliser à travers l’arme quand il frappe son adversaire qui subit alors les effets de l’attaque et du pouvoir (si le pouvoir ne présente pas un nombre d’utilisations limité, le personnage peut le canaliser à travers l’arme à chaque round). Par exemple, un paladin qui frappe un mort-vivant avec son épée à deux mains conductrice peut dépenser deux impositions des mains (une attaque de contact surnaturelle) pour infliger les dégâts habituels de son épée et leur ajouter ceux d’une imposition des mains. Cette propriété ne s’utilise qu’une fois par round et fonctionne uniquement avec des pouvoirs de même type que l’arme (au corps à corps ou à distance). '
    },
    {
        id: '30',
        nom: 'Corrosive',
        bonus: '+1',
        description: 'Sur commande, l’arme corrosive s’enduit d’acide qui inflige 1d6 points de dégâts d’acide supplémentaires si elle touche. L’acide ne blesse pas le propriétaire de l’arme et persiste jusqu’à ce qu’il lui ordonne de disparaître. '
    },
    {
        id: '31',
        nom: 'Rusée',
        bonus: '+1',
        description: 'Cette propriété spéciale permet à l’arme de trouver le point faible des défenses de son ennemi en puisant dans les connaissances que son propriétaire possède sur lui. Quand l’arme menace de faire un coup critique, son porteur reçoit un bonus de +2 au jet de confirmation s’il dispose de 5 rangs ou plus dans les Connaissances liées au type de la cible (comme Connaissances [plans] pour affronter un extérieur). '
    },
    {
        id: '32',
        nom: 'Furieuse',
        bonus: '+1',
        description: 'Cette propriété fonctionne uniquement sur les armes de corps à corps. Une arme furieuse sert de focalisateur à la colère du personnage. Quand il est enragé ou sous l’effet d’un sort de rage, le bonus d’altération de l’arme augmente de +2. Si le personnage dispose d’un pouvoir de rage qui lui donne un bonus de compétence quand il est enragé (comme escalade en rage, saut en rage ou nage en rage), son arme lui apporte un bonus d’altération au test de compétence égal à celui de l’arme (en comptant le +2 si le personnage est enragé). Ceci fonctionne tant qu’il tient l’arme en main, même s’il n’est pas enragé. '
    },
    {
        id: '33',
        nom: 'Flammegrise',
        bonus: '+1',
        description: 'Cette arme réagit à la canalisation d’énergie positive ou négative. Quand le personnage dépense une action rapide pour canaliser de l’énergie dans son arme, elle flamboie d’une étrange flamme grise qui émet autant de lumière qu’une torche, augmente le bonus d’altération de l’arme de +1 et inflige +1d6 points de dégâts supplémentaires aux créatures touchées (comme le pouvoir divin colonne de feu). Cette flamme flamboie pendant 1 round pour chaque d6 de dégâts ou de guérison accordé par la canalisation. Une flamme chargée d’énergie positive brûle d’un gris argenté. Les créatures d’alignement Bon sont immunisées contre ses dégâts supplémentaires et elle est considérée comme une arme Bonne et en argent quand il s’agit d’ignorer la résistance aux dégâts. Quand la flamme est chargée d’énergie négative, elle brûle d’un gris de cendre. Les créatures d’alignement Mauvais sont immunisées contre ses dégâts supplémentaires et elle est considérée comme une arme Mauvaise en fer froid quand il s’agit d’ignorer la résistance aux dégâts. '
    },
    {
        id: '34',
        nom: 'Chasseresse',
        bonus: '+1',
        description: 'Une arme chasseresse aide son propriétaire à localiser et capturer sa proie. Quand il la tient en main, il gagne un bonus d’altération aux tests de Survie pour traquer toute créature blessée la veille avec cette arme. Elle inflige +1d6 points de dégâts aux créatures traquées à l’aide de la compétence Survie pendant la journée précédente. '
    },
    {
        id: '35',
        nom: 'Juge',
        bonus: '+1',
        description: 'Quand un inquisiteur utilise son pouvoir de jugement alors qu’il manie cette arme, elle lui accorde un bonus d’altération aux tests de Perception et au DMD. Ce bonus est de +1 au premier round de jugement et augmente de +1 à chaque round, avec un maximum de +3 au troisième round et par la suite. '
    },
    {
        id: '36',
        nom: 'Menançante',
        bonus: '+1',
        description: 'Cette propriété fonctionne uniquement sur les armes de corps à corps. Elle aide les alliés à s’occuper des ennemis pris en tenailles. Quand le personnage est adjacent à une créature prise en tenailles par un allié, le bonus de prise en tenailles de tous les alliés concernés augmente de +2. Ce pouvoir fonctionne même si le personnage ne fait pas partie de ceux qui prennent la cible en tenailles. '
    },
    {
        id: '37',
        nom: 'D\'Explosion Corrosive',
        bonus: '+2',
        description: 'Une arme d’explosion corrosive fonctionne comme une arme corrosive mais elle émet une explosion acide en cas de coup critique confirmé. L’acide ne brûle pas le propriétaire. En plus des dégâts supplémentaires de l’arme corrosive, celle-ci inflige encore 1d10 points de dégâts d’acide en cas de coup critique. Si l’arme a un modificateur de critique de x3, elle inflige 2d10 points de dégâts supplémentaires et s’il est de x4, elle inflige +3d10. Les dégâts de coup critique se déclenchent même si la fonction corrosive n’est pas active. '
    },
    {
        id: '38',
        nom: 'Mutante',
        bonus: 'Spécial : +10 000po',
        description: 'Cac only. Une arme mutante change d’apparence sur ordre de son propriétaire et se transforme en toute autre arme de corps à corps de la même forme générale et se manie de la même manière (à une main, deux mains etc.) ;courante/de guerre/exotique, aucune importance. Par exemple, une épée longue mutante de taille M peut se transformer en un cimeterre, un fléau ou un trident, mais pas en une arme de corps à corps légère ou à deux mains (ni en épée courte M ni en épée à deux mains M). L’arme peut même prendre l’apparence d’armes semblables de catégories de taille différentes. Une épée à deux mains de taille P est une arme tranchante à deux mains pour les personnages de taille P, mais un personnage de taille M la considère comme une arme tranchante à une main, ce qui ressemble fort à une épée longue de taille M. Une épée à deux mains mutante P peut donc se transformer en épée longue M qu’une créature de taille M peut manier sans subir le malus de -2 associé aux armes inadaptées à cause de leur catégorie de taille. L’arme conserve tous ses pouvoirs, y compris ses bonus d’altération et ses propriétés, hormis ceux que sa nouvelle forme l’empêche d’utiliser. Par exemple, une arme mutante acérée fonctionne normalement si elle se transforme en arme tranchante ou perforante mais elle ne pourra pas utiliser sa propriété acérée si elle se change en arme contondante. L’arme reprend sa forme première quand elle ne se trouve pas entre les mains de quelqu’un.'
    }
    /*     {
        id: '39',
        nom: 'De Duel',
        bonus: 'Spécial : +14 000po',
        description: 'Cette propriété s’applique uniquement aux armes de corps à corps. Une arme de duel (qui est forcément une arme que l’on peut utiliser avec le don Attaque en finesse) donne à son propriétaire un bonus d’altération de +4 aux tests d’Initiative s’il la tient déjà en main au moment de faire le test. Elle lui donne également un bonus de +2 aux tests de désarmement et de feinte, un bonus de +2 au DMD pour résister aux tentatives de désarmement et un bonus de +2 au DD des feintes qu’il exécute contre son adversaire.'
    }, */
    ];

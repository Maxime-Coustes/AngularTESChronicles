import { Caracteristique } from 'app/feature/generation-carac/caracteristiques';
import { Identite } from '../identite/identite';
import { Classe } from 'app/feature/choix-classe/classe';
import { Race } from 'app/feature/race/race';

export class Personnage {
    classe: Classe;
    caracteristiques: Caracteristique[];
    identite: Identite;
    race: Race;
}

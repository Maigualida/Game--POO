/**
 * @class personnage
 */


class personnage {
	// constructor d'object
	constructor(pseudonyme) {
		this.pseudo = pseudonyme;
		this.experience = 0;
		this.degat = 0;
	}

	evoluer() {
		this.experience += 5;
	}

	frapper(autrePersonnage, force = 1) {
		autrePersonnage.degat += 2 * force;
		this.evoluer();
	}




}
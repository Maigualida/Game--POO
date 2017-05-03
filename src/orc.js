class orc extends personnage {
	constructor(pseudonyme, grif = 4) {
		super(pseudonyme);
		this.degat = 4;
		this.griffes = grif;
	}


	canibaliser(autrePersonnage) {
		if (autrePersonnage instanceof guerrier) {
			autrePersonnage.degat += 3;
			this.experience += 1;
		} else {
			console.log("Only Guerrerier");
		}
	}

	frapper(autrePersonnage, force = 1) {
		if (autrePersonnage instanceof guerrier || autrePersonnage instanceof Magicien) {
			autrePersonnage.degat += 2 * force;
		} else {
			console.log("Only Guerrier or Magicien");
		}


	}
}
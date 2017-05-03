// nueva clase, hero que hereda de guerrier
class hero extends guerrier {
	constructor(pseudonyme, arme = 'Sceptre', guerriers) {
		super(pseudonyme, arme);
		this.experience = 10;
		this.mana = 30;
		this.guerriers = guerriers;
	}
	//hero evoluciona de 10 en 10
	evoluer() {
		this.experience += 10;
	}

	frapper(autres) {
		for (let i in autres) {
			autres[i].degat += 15;
		}
		this.evoluer();
		this.mana -= 1;
	}

	tuer(autrePersonnage) {
		super.tuer(autrePersonnage)
		this.mana -= 2;
	}

	regenererGuerriers() {
		for (let i in this.guerriers) {
			this.guerriers[i].degat = 0;
		}
	}
}
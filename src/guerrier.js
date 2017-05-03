
class guerrier extends personnage {

	constructor(pseudonyme, arme) {
		super(pseudonyme);
		this.weapon = arme;
	}

	//la misma clase de personaje pero vamos a cambiar un poco esta funcion
	//el super hace referencia a la clase parent 
	frapper(autrePersonnage, force = 1) { //ecraser la function frapper
		//appeler la function parent frapper()
		super.frapper(autrePersonnage, 10);
		autrePersonnage.degat += 20;
	}

	tuer(autrePersonnage) {
		autrePersonnage.degat = 100;
		this.experience = 200;
	}


}
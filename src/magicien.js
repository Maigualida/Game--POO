
class Magicien extends personnage {

	ensorceler(autres) {
		for (let i in autres) {
			autres[i].degat += 3;
		}
	}

	regenerer(autrePersonnage) {
		autrePersonnage.degat = 0;
	}
}
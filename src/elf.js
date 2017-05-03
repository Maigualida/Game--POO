
class elf extends guerrier {
	constructor(pseudonyme, arme = 'Sceptre') {
		super(pseudonyme, arme);
		this.fleches = 10;
	}

	frapper(autres) {
		for (let i in autres) {
			let au = autres[i];
			if (au instanceof orc && this.fleches > 0) {
				au.degat += 4;
				this.fleches -= 1;
			}
			else if (this.fleches == 0) {
				console.log('Il ny pas des fleches');
			}
			else {
				console.log('Orc only');
			}
		}

	}

}
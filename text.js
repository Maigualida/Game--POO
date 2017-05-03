//new ->cree un object de la class personnage
let gimli = new personnage('Gimli le Nain');
console.log(gimli);

// je fais evouluer gimli

gimli.evoluer();
console.log(gimli);

let azog = new personnage('Azog le Profanateur');

//figth.....

gimli.frapper(azog);
console.log(azog, gimli);

gimli.frapper(azog, 3);
console.log(azog, gimli);

let aragorn = new guerrier('Aragon', 'epee');
console.log(aragorn);

aragorn.frapper(gimli);
console.log(aragorn, gimli);

aragorn.tuer(azog);
console.log(aragorn, azog);

/**
Créer la classe Magicien qui héritera de Personnage
et qui pourra ensorceler un tableau de personnages (degat à +3)
Puis qui pourra regénerer un personnage en réinitialiser le dégât à 0
Test: Créer Gandalf le Gris et Sarouman en tant que magiciens afin que Sarouman puisse ensorcelle Aragan et Gimli
et que Gandalf puisse regéner Aragorn et Gimli 
 */
// new Magicien
let gandalf = new Magicien('Gandalf le Gris');
// test function regenerer()
gandalf.regenerer(azog);
console.log(azog);
//test ensorceler();
let ar = [gimli, azog, aragorn];
gandalf.ensorceler(ar);
console.log(ar);
// new guerrier for the hero test
let gname = new guerrier('name name', 'vara');
// new hero
let heroName = new hero('name hero', 'espada', [aragorn, gname]);
console.log(heroName);

console.log(heroName, aragorn, azog);
heroName.evoluer();
heroName.frapper([gimli, azog, aragorn]);
console.log(heroName, aragorn, azog);
// test tuer from a hero
heroName.tuer(azog);
console.log(heroName, azog);
// test the regenererGuerriers()
console.log(aragorn);
heroName.regenererGuerriers();

console.log(aragorn);

let orcName = new orc('name orc');
orcName.canibaliser(aragorn);
console.log(orcName, aragorn);
orcName.canibaliser(azog);

let orcName2 = new orc('name orc2');

let elfName = new elf('name elf', 'arma');
elfName.frapper([orcName]);
console.log(elfName, orcName);

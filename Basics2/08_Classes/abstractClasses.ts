abstract class StreetFighter {
	constructor() {}

	// common among all fighters
	move() {}
	fight() {
		console.log(`${this.name} + ${this.getSpecialAttack()}`);
	}

	// special to individual fighters
	abstract getSpecialAttack(): string;
	abstract get name(): string;
}

class Ryu extends StreetFighter {
	getSpecialAttack(): string {
		return "Hadoken";
	}
	get name(): string {
		return "Ryu";
	}
}

class ChunLi extends StreetFighter {
	getSpecialAttack(): string {
		return "Lightning Kick";
	}
	get name(): string {
		return "Chun Li";
	}
}

// const ryu = new StreetFighter(); // cannot instantiate

const ryu = new Ryu();
ryu.fight();

const chunli = new ChunLi();
chunli.fight();

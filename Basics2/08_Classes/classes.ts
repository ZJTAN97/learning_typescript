interface Database {
	get(id: string): string;
	set(id: string, value: string): void;
}

interface Persistable {
	saveToString(): string;
	restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Database {
	// Member Visilibity:
	// Private (only the class can sees it),
	// Public (free for all),
	// Protected (descendant classes can see it)
	protected db: Record<string, string> = {};

	get(id: string): string {
		return this.db[id];
	}

	set(id: string, value: string) {
		this.db[id] = value;
	}
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
	saveToString(): string {
		return JSON.stringify(this.db);
	}
	restoreFromString(storedState: string): void {
		this.db = JSON.parse(storedState);
	}
}

const myDb = new InMemoryDatabase();
const persistentDb = new PersistentMemoryDB();

myDb.set("foo", "bar");
// myDb.db // invalid
persistentDb.set("docker", "kubernetes");
console.log(myDb.get("foo"));
console.log(persistentDb.saveToString());

const saved = persistentDb.saveToString();
persistentDb.restoreFromString(saved);

console.log(persistentDb.saveToString());

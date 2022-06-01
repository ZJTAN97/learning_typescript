interface GenericDatabase<T, K> {
	get(id: K): T;
	set(id: K, value: T): void;
}

interface PersistableGenericDatabase {
	saveToString(): string;
	restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryGenericDatabase<T, K extends DBKeyType>
	implements GenericDatabase<T, K>
{
	protected db: Record<K, T> = {} as Record<K, T>;

	get(id: K): T {
		return this.db[id];
	}

	set(id: K, value: T): void {
		this.db[id] = value;
	}
}

const newDb = new InMemoryGenericDatabase<number, string>();
newDb.set("a", 2);
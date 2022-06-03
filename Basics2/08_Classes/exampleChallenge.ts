type FilterFunction<T> = (data: T[keyof T]) => boolean;
type Filters<T> = Record<keyof T, FilterFunction<T>[]>;

class EventProcessor<T extends {}> {
	private filters: Filters<T> = <Filters<T>>{};

	handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {}

	addFilter<K extends keyof T>(
		eventName: K,
		filter: (data: T[K]) => void
	): void {
		this.filters[<keyof T>eventName] ||= [];
		this.filters[<keyof T>eventName].push(filter as FilterFunction<T>);
	}

	addMap<K extends keyof T>(eventName: K, map: (data: T[K]) => T[K]): void {}

	getProcessedEvents() {}
}

// TODO: understand this challenge when you have time.
// https://www.youtube.com/watch?v=7o1P-SB7yQw&list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n&index=20



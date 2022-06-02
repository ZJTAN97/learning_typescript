function myLogFunction() {
	return (str: string) => {
		console.log(str);
	};
}

const logger = myLogFunction();
logger("your message");

// mixins, creating classes with function

function createLoggerClass() {
	return class MyLoggerClass {
		private completeLog: string = "";
		log(str: string) {
			console.log(str);
			this.completeLog += str + "\n";
		}
		dumpLog() {
			return this.completeLog;
		}
	};
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();

logger2.log("Test.");
logger2.log("Docker");
console.log(logger2.dumpLog());

/// mixins with generics

function CreateSimpleMemoryDatabase<T>() {
	return class SimpleMemorydatabase {
		private db: Record<string, T> = {};

		set(id: string, value: T) {
			this.db[id] = value;
		}

		get(id: string): T {
			return this.db[id];
		}

		getObject(): object {
			return this.db;
		}
	};
}

const StringDatabase = CreateSimpleMemoryDatabase<string>();

const sbd1 = new StringDatabase();
sbd1.set("a", "hello");

type Constructor<T> = new (...args: any[]) => T;

function Dumpable<T extends Constructor<{ getObject(): object }>>(Base: T) {
	return class Dumpable extends Base {
		dump() {
			console.log(this.getObject());
		}
	};
}

const DumpableStringDatabase = Dumpable(StringDatabase);

const sbd2 = new DumpableStringDatabase();
sbd2.set("a", "b");
sbd2.dump();


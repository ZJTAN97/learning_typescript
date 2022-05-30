function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v;
        },
    ];
}

const [getter, setter] = simpleState(10);
console.log(getter());

// overriding inferred generic type
const [getter2, setter2] = simpleState<string | null>(null);
setter2("now this works");

// second example

interface Rank<T> {
    item: T;
    rank: number;
}

function ranker<T>(items: T[], rank: (v: T) => number): T[] {
    const ranks: Rank<T>[] = items.map((item) => ({
        item,
        rank: rank(item),
    }));

    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}

// third example

interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    {
        name: "GBulbasaur",
        hp: 20,
    },
    {
        name: "Pikachu",
        hp: 50,
    },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);

// fourth example
function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
    items.reduce((a, v) => {
        forEachFunc(v);
        return undefined;
    }, undefined);
}

myForEach(["a", "b", "c"], (v) => console.log("for each looper"));

// fifth example

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
    return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

console.log(myMap([1, 2, 3, 4, 5], (v) => v * 10));

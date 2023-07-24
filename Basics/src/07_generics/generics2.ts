import { z } from "zod";

// Tip 1
type MyGenericType<TData> = {
    data: TData;
};

type Example1 = MyGenericType<{ firstName: string }>;

/**
 * Tip 2
 * You can create functions with a type helper
 * mapped over the top and pass the type to them manually
 */

const makeFetch = <TData>(url: string): Promise<TData> => {
    return fetch(url).then((res) => res.json());
};

makeFetch<{ firstName: string; lastName: string }>("/api/endpoint").then(
    (res) => {
        console.log(res);
    }
);

/**
 * Tip 3
 * Do not always have to pass the types to a generic function
 */
const addIdToObject = <TObj>(obj: TObj) => {
    return {
        ...obj,
        id: "123",
    };
};

/**
 * Constraints on type arguments
 */

type GetPromiseReturnType<T extends (...arg: any) => any> = Awaited<
    ReturnType<T>
>;

type Result = GetPromiseReturnType<
    () => Promise<{ firstName: string; lastName: string }>
>;

/**
 * Constraints in functions
 */
const getKeyWithHighestValue = <TObj extends Record<string, number>>(
    obj: TObj
): {
    key: keyof TObj;
    value: number;
} => {
    const keys = Object.keys(obj) as Array<keyof TObj>;

    let highestKey: keyof TObj = keys[0];
    let highestValue = obj[highestKey];

    for (const key of keys) {
        if (obj[key] > highestValue) {
            highestKey = key;
            highestValue = obj[key];
        }
    }

    return {
        key: highestKey,
        value: highestValue,
    };
};

/**
 * Multiple type arguments
 */

const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
    return obj[key];
};

getValue({ firstName: "Test", age: 13 }, "firstName");
getValue({ firstName: "Test", age: 13 }, "age");

/**
 * Integrating with Zod
 */

const makeZodSafeFetch = <TData>(
    url: string,
    schema: z.Schema<TData>
): Promise<TData> => {
    return fetch(url)
        .then((res) => res.json())
        .then((res) => {
            return schema.parse(res);
        });
};

const result = makeZodSafeFetch(
    "api/endpoint",
    z.object({ firstName: z.string(), lastName: z.string() })
).then((res) => {
    console.log(res);
});

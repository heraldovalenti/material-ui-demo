import namor from "namor";

const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newInstruction = () => {
    const statusChance = Math.random();
    return {
        toggleSwitch: statusChance > 0.5 ? true : false,
        serviceType: namor.generate({ words: 1, numbers: 0 }),
        verb: namor.generate({ words: 1, numbers: 0 }),
        entity: namor.generate({ words: 1, numbers: 0 }),
        restOfTheName: namor.generate({ words: 2, numbers: 0 }),
        project: namor.generate({ words: 1, numbers: 0 }),
    };
};

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map(() => {
            return {
                ...newInstruction(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            };
        });
    };

    return makeDataLevel();
}

export type Placing = {
    placing: number;
    earnings: number;
    points: number;
};

export type MajorPrizes = {
    [key: number]: Placing[];
};

export const MAJOR_PRIZES: MajorPrizes = {
    1: [
        {
            placing: 1,
            earnings: 200000,
            points: 100,
        },
        {
            placing: 2,
            earnings: 120000,
            points: 75,
        },
        {
            placing: 3,
            earnings: 80000,
            points: 60,
        },
        {
            placing: 4,
            earnings: 40000,
            points: 45,
        },
        {
            placing: 5,
            earnings: 40000,
            points: 30,
        },
        {
            placing: 6,
            earnings: 40000,
            points: 30,
        },
        {
            placing: 7,
            earnings: 20000,
            points: 15,
        },
        {
            placing: 8,
            earnings: 20000,
            points: 15,
        },
        {
            placing: 9,
            earnings: 0,
            points: 0,
        },
        {
            placing: 10,
            earnings: 0,
            points: 0,
        },
        {
            placing: 11,
            earnings: 0,
            points: 0,
        },
        {
            placing: 12,
            earnings: 0,
            points: 0,
        },
    ],
    2: [
        {
            placing: 1,
            earnings: 200000,
            points: 100,
        },
        {
            placing: 2,
            earnings: 120000,
            points: 75,
        },
        {
            placing: 3,
            earnings: 80000,
            points: 60,
        },
        {
            placing: 4,
            earnings: 40000,
            points: 45,
        },
        {
            placing: 5,
            earnings: 40000,
            points: 30,
        },
        {
            placing: 6,
            earnings: 40000,
            points: 30,
        },
        {
            placing: 7,
            earnings: 20000,
            points: 15,
        },
        {
            placing: 8,
            earnings: 20000,
            points: 15,
        },
        {
            placing: 9,
            earnings: 0,
            points: 0,
        },
        {
            placing: 10,
            earnings: 0,
            points: 0,
        },
        {
            placing: 11,
            earnings: 0,
            points: 0,
        },
        {
            placing: 12,
            earnings: 0,
            points: 0,
        },
    ],
    3: [
        {
            placing: 1,
            earnings: 150000,
            points: 100,
        },
        {
            placing: 2,
            earnings: 90000,
            points: 75,
        },
        {
            placing: 3,
            earnings: 60000,
            points: 60,
        },
        {
            placing: 4,
            earnings: 30000,
            points: 45,
        },
        {
            placing: 5,
            earnings: 15000,
            points: 30,
        },
        {
            placing: 6,
            earnings: 15000,
            points: 30,
        },
        {
            placing: 7,
            earnings: 7500,
            points: 15,
        },
        {
            placing: 8,
            earnings: 7500,
            points: 15,
        },
        {
            placing: 9,
            earnings: 0,
            points: 0,
        },
        {
            placing: 10,
            earnings: 0,
            points: 0,
        },
        {
            placing: 11,
            earnings: 0,
            points: 0,
        },
        {
            placing: 12,
            earnings: 0,
            points: 0,
        },
    ],
};

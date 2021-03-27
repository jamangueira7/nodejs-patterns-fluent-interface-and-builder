import { expect, describe, test } from '@jest/globals';
import FluentSQLBluider from '../src/fluentSQL.js';

const data = [
    {
        id: 0,
        name: 'joao',
        category: 'developer'
    },

    {
        id: 1,
        name: 'priscila',
        category: 'developer'
    },

    {
        id: 2,
        name: 'carlos',
        category: 'manager'
    },
];

describe('Test Suite for FluentSQL Bluider', () => {
   test('#for should return a FluentSQLBluider instance', () => {
        const result = FluentSQLBluider.for(data);
        const expected = new FluentSQLBluider({ database: data });
        expect(result).toStrictEqual(expected);
   });

    test('#bluid should return the empty object instance', () => {
        const result = FluentSQLBluider.for(data).bluid();
        const expected = data;
        expect(result).toStrictEqual(expected);
    });

    test('#limit given a collection it should limit results', () => {
        const result = FluentSQLBluider.for(data).limit(1).bluid();
        const expected = [data[0]];

        expect(result).toStrictEqual(expected);
    });

    test('#where given a collection it should filter data', () => {
        const result = FluentSQLBluider.for(data)
            .where({
                category: /^dev/
            }).bluid();
        const expected = data.filter(({ category}) => category.slice(0,3) === 'dev');

        expect(result).toStrictEqual(expected);
    });

    test('#select given a collection it should return only especifc fields', () => {
        const result = FluentSQLBluider.for(data)
            .select(['name', 'category']).bluid();

        const expected = data.map(({ name, category }) => ({ name, category }));

        expect(result).toStrictEqual(expected);
    });

    test('#orderBy given a collection it should order results by field', () => {
        const result = FluentSQLBluider.for(data)
            .orderBy(['name']).bluid();

        const expected = [
            {
                id: 2,
                name: 'carlos',
                category: 'manager'
            },
            {
                id: 0,
                name: 'joao',
                category: 'developer'
            },

            {
                id: 1,
                name: 'priscila',
                category: 'developer'
            },
        ];

        expect(result).toStrictEqual(expected);
    });

    test('pipeline', () => {
        const result = FluentSQLBluider.for(data)
            .where({ category: 'developer'})
            .where({ name: /j/})
            .select(['name', 'category'])
            .orderBy(['name'])
            .bluid();

        const expected = data
            .filter(({ id }) => id === 0)
            .map(({ name, category}) => ({ name, category }));

        expect(result).toStrictEqual(expected);
    });
});

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
        const expected = [];
        expect(result).toStrictEqual(expected);
    });

    test.todo('#limit given a collection it should limit results');

    test.todo('#where given a collection it should filter data');

    test.todo('#select given a collection it should return only especifc fields');

    test.todo('#orderBy given a collection it should order results by field');

    test.todo('pipeline');
});

'use strict';

describe('a category of tests', () => {
    beforeEach(() => {
        console.log('runs before each test within this describe block');
    });

    it('should run successfully (test name)', () => {
        const resultOfMyTest = 1;
        expect(resultOfMyTest).toBe(1);
    });
});

import { HarryPotterBasketCalculator } from './index.js';
import chai from 'chai';

const { expect, should, assert } = chai;

describe('GIVEN HarryPotterBasketCalculator', () => {
    describe('AND the customer is yet to add any books to their basket', () => {
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator();
        it('SHOULD return the price as 0', () => {
            expect(harryPotterBasketCalculator.getPrice()).to.be.eql(0);
        });
    });

    describe('AND the customer adds 1 unique book to their basket', () => {
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator([0]);
        it(`SHOULD not apply discount and the price should be '8 EUR'`, () => {
            expect(harryPotterBasketCalculator.getPrice()).to.be.eql(8);
        });
    });

    describe('AND the customer adds 2 unique books to their basket', () => {
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator([0, 1]);
        it('SHOULD apply discount of 5% to both books', () => {
            expect(harryPotterBasketCalculator.getPrice()).to.be.eql(15.20);
        });
    });

    describe('AND the customer adds 3 unique books to their basket', () => {
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator([0, 1, 2]);
        it('SHOULD apply discount of 10% to all books', () => {
            expect(harryPotterBasketCalculator.getPrice()).to.be.eql(21.60);
        });
    });

    describe('AND the customer adds 4 unique books to their basket', () => {
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator([0, 1, 2, 3]);
        it('SHOULD apply discount of 20% to all books', () => {
            expect(harryPotterBasketCalculator.getPrice()).to.be.eql(25.6);
        });
    });

    describe('AND the customer adds 5 unique books to their basket', () => {
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator([0, 1, 2, 3, 4]);
        it('SHOULD apply discount of 25% to all books', () => {
            expect(harryPotterBasketCalculator.getPrice()).to.be.eql(30);
        });
    });

    describe('AND the customer adds 5 unique books to their basket and 1 additional book', () => {
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator([0, 1, 2, 3, 4, 0]);
        it('SHOULD apply discount of 25% to unique books and full price for non unique book', () => {
            expect(harryPotterBasketCalculator.getPrice()).to.be.eql(38);
        });
    });

    describe('AND the customer adds 5 unique books to their basket and 2 additional unique books', () => {
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator([0, 1, 2, 3, 4, 0, 1]);
        it('SHOULD apply 25% discount to five books and 5% discount to two books', () => {
            expect(harryPotterBasketCalculator.getPrice()).to.be.eql(45.2);
        });
    });

    describe('AND the customer adds two sets of 4 unique books to their basket', () => {
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator([0, 1, 2, 3, 4, 0, 1, 2]);
        it('SHOULD apply 20% discount all 8 books', () => {
            expect(harryPotterBasketCalculator.getPrice()).to.be.eql(51.6);
        });
    });
});

describe('GIVEN calculateSets', () => {
    describe('AND the input is 0, 0, 1, 2, 3, 4, 4', () => {
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator([0, 0, 1, 2, 3, 4, 4]);
        it(`SHOULD group the books into two sets of '0, 1, 2, 3, 4' and '0, 4`, () => {
            const sets = harryPotterBasketCalculator.calculateSets();
            console.log(sets);

            expect(sets).to.eql([[0, 1, 2, 3, 4], [0, 4]])
        })
    })
})

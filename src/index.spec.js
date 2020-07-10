import { HarryPotterBasketCalculator } from './index.js';
import chai from 'chai';

const { expect, should, assert } = chai;

describe('HarryPotterBasketCalculator', () => {
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
        const harryPotterBasketCalculator = new HarryPotterBasketCalculator([0, 0, 1, 2, 3, 4]);
        it('SHOULD apply discount of 25% to unique books and full price for non unique book', () => {
            expect(harryPotterBasketCalculator.getPrice()).to.be.eql(38);
        });
    });
});

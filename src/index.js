export class HarryPotterBasketCalculator {
    constructor(books = []) {
        this.books = books;
        this.price = null;

        this.discountsBySetSize = {
            1: 1,
            2: 0.95,
            3: 0.9,
            4: 0.8,
            5: 0.75,
        }

        this.bookCount = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        }

        this.calculatePrice();
    }

    calculatePrice() {
        this.price = 0;
        if (this.books.length === 0) {
            return;
        };

        let uniqueCount = 1;

        for (let i = 0; i < this.books.length; i++) {
            if (i != 0) {
                if(this.books[i] != this.books[i-1]) {
                    uniqueCount++;
                }
            }
        }
        if (uniqueCount === 1 || uniqueCount === this.books.length) {
            this.price = this.books.length * 8 * this.discountsBySetSize[uniqueCount];
            return;
        }

        const discountedSubtotal = (uniqueCount) * 8 * this.discountsBySetSize[uniqueCount];
        const undiscountedSubtotal = (this.books.length - (uniqueCount)) * 8;

        this.price = discountedSubtotal + undiscountedSubtotal;
    }

    getPrice() {
        return this.price;
    }

    addBook(book) {
        this.books.push(book);
        this.calculatePrice()
    }
}
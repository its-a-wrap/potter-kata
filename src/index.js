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
        };

        this.calculatePrice();
    }

    calculatePrice() {
        this.price = 0;
        if (this.books.length === 0) {
            return;
        };

        const sets = this.calculateSets();

        sets.forEach(set => {
            this.price += set.length * 8 * this.discountsBySetSize[set.length];
        })
    }

    calculateSets() {
        this.books.sort();
        let sets = [[]];
        this.books.forEach(book => {
            let addedToSet = false;
            for (let i = 0; i < sets.length; i++) {
                if (!sets[i].includes(book)) {
                    sets[i].push(book);
                    addedToSet = true;
                    break;
                }
            }
            if (!addedToSet) {
                sets.push([book]);
            }
        });

        return sets;
    }

    getPrice() {
        this.calculatePrice();
        return this.price;
    }

    addBook(book) {
        this.books.push(book);
    }
}
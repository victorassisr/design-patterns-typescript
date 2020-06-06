abstract class Pizza {

    constructor (price: number, ingredients?: string) {
        this.price = price;
        this.ingredients = ingredients;
    }
    
    price: number;
    ingredients: string;

    abstract showIngredients(): void;
}

class PizzaCalabresa extends Pizza{
    
    constructor (price: number, ingredients?: string) {
        super(price, ingredients);
    }

    showIngredients () {
        if (this.ingredients) {
            console.log(this.ingredients);
        } else {
            console.log('Pizza de calabresa e tomate.');
        }
    }

}

class PizzaMussarela extends Pizza {

    constructor (price: number, ingredients?: string) {
        super(price, ingredients);
    }

    showIngredients () {
        if (this.ingredients) {
            console.log(this.ingredients);
        } else {
            console.log('Pizza de mussarela e catupiri.');
        }
    }
}

class PizzaFactory {

    create (price: number, type: string) {
        switch (type.toUpperCase()) {
            case 'Calabresa'.toUpperCase():
                return new PizzaCalabresa(price);
            case 'Mussarela'.toUpperCase():
                return new PizzaMussarela(price);
            default:
                return null;
        }
    }

}

const pizzaFactory = new PizzaFactory();

const mussarela = pizzaFactory.create(28.5, 'mussarela');

mussarela.showIngredients();

const calabresa = pizzaFactory.create(30, 'calabresa');

calabresa.showIngredients();

// Without factory..
const calabresa2 = new PizzaCalabresa(28.5, 'Calabresa com tomate e azeitona');

calabresa2.showIngredients();
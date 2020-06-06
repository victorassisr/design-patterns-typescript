class Invoice {

    constructor (invoiceIdentifier: string, value: number, tax: ITax) {
        this.invoiceIdentifier = invoiceIdentifier;
        this.value = value;
        this.tax = tax;
    }

    invoiceIdentifier: string;
    value: number;
    tax: ITax;

    printInvoice () {
        console.log(`Invoice number: ${this.invoiceIdentifier}. Total value with tax: ${ this.value + this.tax.processTax(this.value) }`);
    }
}

interface ITax {
    processTax (value: number): number;
}

class TaxKansasCity implements ITax {
    processTax (value: number): number {
        return value * 0.02;
    }
}

class TaxLawrence implements ITax {
    processTax (value: number): number {
        return value * 0.03;
    }
}

const invoice = new Invoice('1', 300.0, new TaxLawrence());

invoice.printInvoice();

invoice.tax = new TaxKansasCity();

invoice.printInvoice();
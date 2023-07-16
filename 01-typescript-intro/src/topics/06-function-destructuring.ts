
export interface Product {
    description: string;
    price: number;
}

interface TaxCalcultaionOptions {
    tax: number;
    products: Product[];
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "IPad Air",
    price: 250.0
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

export function taxCalculation(options: TaxCalcultaionOptions): [number, number] {

    const { tax, products } = options

    let total = 0;

    products.forEach(({ price }: Product) => {
        total += price;
    });

    return [total, total * tax];
}

const [total, totalTax] = taxCalculation({ products: shoppingCart, tax });

console.log('Total', total);
console.log('tax', totalTax);

export { }
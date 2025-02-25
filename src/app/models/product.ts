export class Product {

    constructor( 
        public productId: number, 
        public productName: string, 
        public unitPrice: number, 
        public unitsInStock: number,
        public discontinued: boolean
    ) { 
        
    }

}
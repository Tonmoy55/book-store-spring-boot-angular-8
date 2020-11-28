import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

export class Book {

  
	sku: string;
	
	name: string;
	
	description: string;
	
	unitPrice: number;
	
	imageUrl: string;
	
	active: boolean;
	
	unitsInStock: number;
	
	creationDate?: Date;
	
    updationDate?: Date;
    
    constructor(){
        this.sku = '';
        this.name = '';
        this.description = '';
        this.unitPrice = 0;
        this.imageUrl = '';
        this.active = false;
        this.unitsInStock = 0;
        this.creationDate = undefined;
        this.updationDate = undefined;
    }
	
}

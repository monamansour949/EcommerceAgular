import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import {MatDialog, MatDialogModule,MatDialogConfig } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CardService } from 'src/app/Services/card.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: IProduct[]=[];
  PrdListOfCat:IProduct[]=[];
  Product :IProduct={} as IProduct;
  prdL:any;
  item :any;
  @Input() SelCatID:number=0;
 
  currProduct:IProduct|undefined=undefined;
  constructor
  (
    private prdAPIService:ProductService ,
    private dialog: MatDialog, private cartService :CardService
  ) 
  {}

  ngOnInit(): void {
    this.prdAPIService.getAllProducts().subscribe(prdList=>{this.productList=prdList;
     this.prdL.array.forEach((a:any) => {
       Object.assign(a,{quantity:1,total:a.price})
       
     });
       }); 
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    console.log(this.SelCatID);
    this.prdAPIService.getProductByCategoryId(this.SelCatID).subscribe(prdList=>{this.productList=prdList;
      console.log(prdList);
  
    });
  }
OpenProductDetails(id:number)
{
  const dialogConfig = new MatDialogConfig();
   dialogConfig.data=id;
   console.log(dialogConfig.data);
  this.dialog.open(ProductDetailsComponent,dialogConfig); 


}

addTocart( item:any){
  this.cartService.addtoCart(item)
}
}

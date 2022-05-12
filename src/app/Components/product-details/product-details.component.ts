import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // CurrntId:number;
  currProduct :IProduct={} as IProduct;
 
  constructor(private proAPIservise:ProductService
    ,private dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number)
    { 
     
    }
  ngOnInit(): void {
    /* this.CurrntId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    this.proAPIservise.GetProductByID(this.CurrntId).subscribe(prd=>{this.currProduct=prd;});  */
   this.proAPIservise.getProductById(this.data).subscribe(prd=>{this.currProduct=prd});

  }
}

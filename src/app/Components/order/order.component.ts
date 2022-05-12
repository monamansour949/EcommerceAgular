import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CateogryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  AllCategoryList: ICategory[] ;
  SelCatID:number=0;
  constructor(private catAPiService:CateogryService) 
  { 
    this.AllCategoryList=[]
  }

  ngOnInit(): void {
    this.catAPiService.getAllCategories().subscribe(catList=>{this.AllCategoryList=catList});
  }
  

}

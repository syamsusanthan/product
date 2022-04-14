import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as AOS from "aos";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public http:HttpService) { }
  products:any;
  ngOnInit(): void {
    AOS.init()
    this.http.getProduct().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data)); console.log(this.products)
    })
    
  }
}

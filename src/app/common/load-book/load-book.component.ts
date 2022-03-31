import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-book',
  templateUrl: './load-book.component.html',
  styleUrls: ['./load-book.component.css']
})
export class LoadBookComponent implements OnInit {

  categoryId:any;
  books=[{
    bookId:1,
    sku:'',
    name:'abc',
    description:'',
    unitPrice:'',
    isActive:'',
    imageUrl:'',
    unitInStock:'',
    createdOn:'',
    updatedOn:'',
    tblBookCategory:{
      'catName':'',
      catId:1
    }
   }
  ]

  constructor(private _route:ActivatedRoute,private _book:BookService) { }

  ngOnInit(): void {
 
    this._route.params.subscribe((params) =>{ // we write all logic inside subscrib, bcoz when route change so according to every time component load. so we can get the quiz according to category.
          this.categoryId=params['catId'];
          this._book.getBookById(this.categoryId).subscribe((data:any)=>{
            this.books=data;
            console.log("data  --- ",data)
          },
        (error)=>{
            console.error(error);
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error in data loading of Books',
          });
        });
            
      
  });

}

}
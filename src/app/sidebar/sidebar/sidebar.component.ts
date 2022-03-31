import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private category:CategoryService) { }
  categories=[
    { catId:'',
      catName:'Sever is down !!',
    }
  ];

  ngOnInit(): void {
    this.category.getCategories().subscribe((data:any)=>{
       
      this.categories=data;
      
    },
   (error)=>{
     console.error(error);
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error in data loading of categories',
    });
   });
  }

 
}

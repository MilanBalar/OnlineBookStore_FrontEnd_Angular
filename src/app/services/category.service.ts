import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get(`${baseURL}/category/`); 
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadBookComponent } from './common/load-book/load-book.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  {path:'',component:BookListComponent},
  {path:'user-dashboard/:catId',component:LoadBookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

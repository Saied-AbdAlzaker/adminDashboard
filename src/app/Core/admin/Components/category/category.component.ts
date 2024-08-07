import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/admin.service';
import { Category } from '../../Models/admin';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryList: Category[] = [];
  imagePath: string = '';
  searchValue: string = '';
  private searchSubject: Subject<string> = new Subject<string>();


  constructor(private _adminServices: AdminService) {
    this.imagePath = _adminServices.imageUrl
  }

  ngOnInit(): void {
    this.getAllCategory()

    this.searchSubject.pipe(debounceTime(1000)).subscribe({
      next: (res) => {
        console.log(res);
        this.getAllCategory()

      }
    })
  }

  getAllCategory() {
    let params = {
      name: this.searchValue
    }
    this._adminServices.getCategory(params).subscribe({
      next: (res: any) => {
        console.log(res);
        this.categoryList = res;
      }
    })
  }

  onSearchInputChange() {
    this.searchSubject.next(this.searchValue);    
  }

}

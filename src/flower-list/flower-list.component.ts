import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

class Flower{
  name: string;
  latname: string;
  formula: string;
  poison: string;
  selected?: boolean;
   
  constructor(name: string, latname: string, formula: string, poison: string) {

      this.name = name;
      this.latname = latname;
      this.formula = formula;
      this.poison = poison;
  }
}

@Component({
  selector: 'app-flower-list',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  template: `<form (submit)="searchInArray(request.value)">
  <input #request type="text" class="form-control" name="searchValue" placeholder="Is this poisonous?" aria-label="Name" required>
  <button type="submit" class="btn btn-dark">Search</button>
</form>
<p><ul *ngFor="let flower of flowers">
  <li *ngIf="flower.selected">{{flower.poison}} <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button><div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
     <p>{{flower.name}} | {{flower.latname}} | {{flower.formula}}</p>
    </div>
    <div class="modal-footer">
    </div>
  </div>
</div>
</div></li>
  </ul>

  
  <form name="floralForm">
  <div class="container text-center">
      <p class="text">Input flower data</p>
      <div class="row row-cols-2">
          <div class="col pad"><input type="text" class="form-control" [(ngModel)]="name" name="name" placeholder="Name" aria-label="Name" required></div>
          <div class="col"><input type="text" class="form-control" [(ngModel)]="latname" name="latname" placeholder="Latin name" aria-label="Latin name" required></div>
          <div class="col pad"><input type="text" class="form-control" [(ngModel)]="formula" name="formula" placeholder="Floral formula" aria-label="Floral formula" required></div>
          <div class="col"><select class="form-select" [(ngModel)]="poison" name="poison" aria-label="Default select example" required>
          <option value="" disabled selected>Poisonous?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option></select>
          </div>
      </div>
      <div class="row row-cols-2">
          <div class="col"><button type="button" (click)="addFlower(name, latname, formula, poison)" class="btn btn-dark" style="width:50%; margin-top: 14px">Submit</button></div>
          <div class="col"><button type="button" (click)="flushList()" class="btn btn-danger" style="width:50%; margin-top: 14px">Flush</button></div>
      </div>
      
  </div>
  <div class="container text-center" style="margin-top: 20px">
      <p class="text">Flower list</p>
      <ul *ngFor="let flower of flowers">
      <li>{{flower.name}} | {{flower.latname}} | {{flower.formula}} | Poisonous?: {{flower.poison}}</li>
      </ul>
      </div>
</form>

  `
})
export class FlowerListComponent {
  searchValue: string = "";
  name: string = "";
  latname: string = "";
  formula: string = "";
  poison: string = "";
  flowers: Flower[] = 
  [
  ];
  addFlower(name: string, latname: string, formula: string, poison: string): void {     
      if(name && latname && formula && poison){
        this.flowers.push(new Flower(name, latname, formula, poison));
      }  
}
  flushList() : void{
    while(this.flowers.length != 0){
      this.flowers.pop();
    }
  }
  searchInArray(searchValue: string) {
    for (let flower of this.flowers) {
      flower.selected = false;
       if (flower.name === searchValue) {
          flower.selected = true;
       }
    }
}
}

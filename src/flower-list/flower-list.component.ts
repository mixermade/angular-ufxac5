import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

class Flower{
  name: string;
  latname: string;
  formula: string;
  poison: string;
  selected?: boolean;
  favourite?: boolean;
   
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
  <div style="margin-top:10%" class="input-group mb-3">
  <input #request type="text" class="form-control" placeholder="Is this poisonous?" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-dark" type="submit" id="button-addon2">Search</button>
</div>
</form>
<p><ul *ngFor="let flower of flowers">
  <li *ngIf="flower.selected">{{flower.poison}} <button style="margin-left:10px" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  See more
</button>
<button style="margin-left:10px" type="button" class="btn btn-dark" (click)="addToFavs(flower)">
  Add to favorites
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">{{flower.name}}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
     <p> {{flower.name}}  
     <p> Latin name: {{flower.latname}}
     <p> Floral formula: {{flower.formula}}</p>
    </div>
  </div>
</div>
</div></li>
  </ul>

  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Input flower data
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
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

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Favorites
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul *ngFor="let flower of flowers">
      <li *ngIf="flower.favourite">{{flower.name}} | {{flower.latname}} | {{flower.formula}} | Poisonous?: {{flower.poison}}</li>
      </ul>
      </div>
    </div>
  </div>
</div>
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
  addToFavs(flower){
    flower.favourite = true;
  }
}

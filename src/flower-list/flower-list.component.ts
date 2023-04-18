import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

class Flower{
  name: string;
  latname: string;
  formula: string;
  poison: string;
   
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
  template: `<form name="floralForm">
  <div class="container text-center">
      <p class="text">Input flower data</p>
      <div class="row row-cols-2">
          <div class="col pad"><input type="text" class="form-control" [(ngModel)]="name" placeholder="Name" aria-label="Name" required></div>
          <div class="col"><input type="text" class="form-control" [(ngModel)]="latname" placeholder="Latin name" aria-label="Latin name" required></div>
          <div class="col pad"><input type="text" class="form-control" [(ngModel)]="formula" placeholder="Floral formula" aria-label="Floral formula" required></div>
          <div class="col"><select class="form-select" [(ngModel)]="poison" aria-label="Default select example" required>
          <option value="" disabled selected>Poisonous?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option></select>
          </div>
      </div>
      <div class="row row-cols-2">
          <div class="col"><button type="button" (click)="addFlower(name, latname, formula, poison)" class="btn btn-dark" style="width:50%; margin-top: 14px">Submit</button></div>
          <div class="col"><button type="button" class="btn btn-danger" style="width:50%; margin-top: 14px">Flush</button></div>
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
  name: string = "";
  latname: string = "";
  formula: string = "";
  poison: string = "";
  flowers: Flower[] = 
  [
  ];
  addFlower(name: string, latname: string, formula: string, poison: string): void {     
      this.flowers.push(new Flower(name, latname, formula, poison));
}

}

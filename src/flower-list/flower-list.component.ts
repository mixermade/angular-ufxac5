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
    FormsModule,],
  templateUrl: "flower-list.html"
})
export class FlowerListComponent {
  searchValue: string = "";
  name: string = "";
  latname: string = "";
  formula: string = "";
  poison: string = "";
  flowers: Flower[] = [{name:"Snake's head",latname:"Fritillaria meleagris",formula:"✶ P3+3 A3+3 G(3)",poison:"Yes"},{name:"Narcissus",latname:"Narcissus",formula:"Br ✶ ☿ P3+3+Corolla A3+3 G(3)",poison:"Yes"},{name:"Indian shot",latname:"Canna indica",formula:"↯ K3 [C3 A1°–3°+½:2°] Ğ(3)",poison:"No"}];

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
  addToFavs(flower: Flower){
    flower.favourite = true;
  }
  removeFavs(flower: Flower){
    flower.favourite = false;
  }
}

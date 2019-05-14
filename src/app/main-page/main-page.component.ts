import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  get items(){
    return this.service.listItem;
  }
  
  constructor(private service: ElementsService) { 
  }

  ngOnInit() {
    console.log(this.items)
  }

  delete(id: number){
    this.service.listItem = this.service.listItem.filter(x => x.id !== id)
  }

}
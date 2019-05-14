import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  constructor(private service: ElementsService) { }

  ngOnInit() {
  }
  addItem(name: string){
    if(!name) return;
    console.log(this.service.listItem)
    this.service.listItem.push({
      id: this.service.listItem.length,
      name: name,
      visibility: false,
      comments: []
    });
    console.log(this.service.listItem)
  }
}

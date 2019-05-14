import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../elements.service';
import { ActivatedRoute } from '@angular/router';
import { getElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-element-page',
  templateUrl: './element-page.component.html',
  styleUrls: ['./element-page.component.css']
})
export class ElementPageComponent implements OnInit {
  
  selectedElement: {id: number; name: string; visibility: boolean; comments: Array<string>};

  constructor(private service: ElementsService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.getElement()
  }

  getElement(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedElement = this.service.listItem.find(elem => elem.id === id)
    // for(let i = 0; i<this.service.listItem.length; i++){
    //   if(this.service.listItem[i].id === id) {
    //     this.selectedElement = this.service.listItem[i];
    //   }
    // }

  }
  addComment(comment: string){
    if(comment.trim() == ''){
      alert('Empty input field!')
    }else{
    this.selectedElement.comments.push(comment)
    }
  }

}

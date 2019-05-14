import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  listItem: Array<{id: number; name: string; visibility: boolean; comments: Array<string>}> = [
    {id: 1, name: 'Item1', visibility: false, comments: ['test comment1', 'test comment2', 'test comment3']},
    {id: 2, name: 'Item2', visibility: false, comments: ['test comment1', 'test comment2']},
    {id: 3, name: 'Item3', visibility: false, comments: ['test comment1']}
  ]
  constructor() { }
}

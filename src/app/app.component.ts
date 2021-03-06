import { Component } from '@angular/core';
import { Todo } from './Models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular-app';
  ItemList : Todo[] = [];
  Item: Todo = { itemName: "", completed: false };

  addItem(){
    this.ItemList.push({ 'completed':this.Item.completed, 'itemName':this.Item.itemName });
    console.log(this.ItemList);
    this.Item.itemName = "";
  };

  setCompleted(todo: Todo){
    this.ItemList.find(i => i.itemName == todo.itemName).completed = true;
    console.log(this.ItemList);
  };

  deleteItem(todo: Todo){
    let index = this.ItemList.indexOf(todo);
    this.ItemList.splice(index, 1);
    
  }
}

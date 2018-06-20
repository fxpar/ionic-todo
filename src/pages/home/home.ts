import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

ionViewDidLoad(){

  this.items = [
    {title: 'h1', description: 'test1'},
    {title: 'h2', description: 'test2'},
    {title: 'h3', description: 'test3'}
  ];
}

addItem(){

}

viewItem(){

}

}

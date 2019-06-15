import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  // val1: number = 0;
  // msg: string = "not yet clicked";

  // powers = ['Really smart','Super flexible','Super Hot', 'Weather Changer'];

  // model=new Hero(18,'Dr IQ', this.powers[0], 'Chuck Overstreet');

  // hello: string = this.model.name;
  
  // submitted = false;

  // onSubmit() { this.submitted = true; }

  // // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

  // handleRate(event) {
  //   this.msg = "You have rated " + event.value;
  // }
  // handleCancel(event) {
  //   this.msg = "Rating Cancelled";
  // }

}

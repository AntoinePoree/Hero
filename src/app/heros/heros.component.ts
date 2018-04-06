import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http';
import { viewClassName } from '@angular/compiler';
import { timeout } from 'q';
import { Observable } from 'rxjs/Observable';
import { setInterval } from 'timers';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})

export class HerosComponent implements OnInit {
  ids;
  selected;
  powerstats;
  durability;
  turn = 0;
  shoot = 0;
  shoot2 = 0;
  ready = 1;
  htmlStr = "";

  htmlContent: string;
  play = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.ids = [];
    this.selected = [];


    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe((data: any) => {

      for (let index = 0; index < 18; index++) {
        this.ids.push(data[index]);
      }
    });

    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + 404 + '.json').subscribe((data: any) => {

    });
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + 213 + '.json').subscribe((data: any) => {

    });
  }

  attack1() {
    this.selected[1].powerstats.durability = this.selected[1].powerstats.durability - 10;
    this.turn = 1;
    this.shoot = 1;

    setTimeout(() => {
      this.shoot = 0;
    }, 2000);

    this.koJ2();

    this.htmlStr = this.htmlStr + ' ' + this.selected[0].name + ' inflige ' +
      Math.floor((this.selected[1].powerstats.strength / 10)) + ' de degats <br> Tour de Joueur 2';
  }

  attack2() {
    this.selected[0].powerstats.durability = this.selected[0].powerstats.durability - 10;
    this.turn = 0;
    this.shoot2 = 1;

    setTimeout(() => {
      this.shoot2 = 0;
    }, 2000);

    this.koJ1();

    this.htmlStr = this.htmlStr + ' ' + this.selected[1].name + ' inflige ' +
      Math.floor((this.selected[0].powerstats.strength / 10)) + ' de degats <br> Tour de Joueur 1';
  }

  attackS() {
    this.selected[1].powerstats.durability = this.selected[1].powerstats.durability - this.selected[1].powerstats.speed;
    this.turn = 1;
    this.shoot = 1;
    setTimeout(() => {
      this.shoot = 0;
    }, 500);

    this.koJ2();

    this.htmlStr = this.htmlStr + ' ' + this.selected[0].name + ' inflige ' +
      Math.floor((this.selected[1].powerstats.strength / 10)) + ' de degats <br> Tour de Joueur 2';
  }
  attackS2() {
    this.selected[0].powerstats.durability = this.selected[0].powerstats.durability - this.selected[0].powerstats.speed;
    this.turn = 0;
    this.shoot2 = 1;
    setTimeout(() => {
      this.shoot2 = 0;
    }, 500);

    this.koJ1();

    this.htmlStr = this.htmlStr + ' ' + this.selected[1].name + ' inflige ' +
      Math.floor((this.selected[0].powerstats.strength / 10)) + ' de degats <br> Tour de Joueur 1';
  }

  test(me) {
    // console.log(me);
    this.selected.push(me);
    console.log(this.selected);

  }

  start() {
    this.play = false;
    setTimeout(() => {
      this.ready = 0;
    }, 2500);
  }

  getNumber(n) {
    console.log(this.ids[n].name);
    //getId()
  }

  koJ1() {
    if (this.selected[0].powerstats.durability <= 0) {
      alert("joueur 1 KO");
      window.location.reload();
    } else {

    }
  }

  koJ2() {
    if (this.selected[1].powerstats.durability <= 0) {
      alert("joueur 2 KO");
      window.location.reload();
    } else {

    }
  }

}


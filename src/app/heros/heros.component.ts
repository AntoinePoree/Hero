import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  ids;
  selected;
  powerstats;
  durability;

  // durability;
  // idHero;
  // imageHlg;
  // imageHmd;
  // imageHsm;
  // imageHxs;
  // powerH;
  // speedH;
  // strengthH;
  // intelligenceH;
  // nameH;

  // durability2;
  // idHero2;
  // imageHlg2;
  // imageHmd2;
  // imageHsm2;
  // imageHxs2;
  // powerH2;
  // speedH2;
  // strengthH2;
  // intelligenceH2;
  // nameH2;

  play = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.ids = [];
    this.selected = [];


    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe((data: any) => {

      for (let index = 0; index < 20; index++) {
        this.ids.push(data[index]);
      }
    });

    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + 404 + '.json').subscribe((data: any) => {

    });
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + 213 + '.json').subscribe((data: any) => {

    });
  }

  attack1() {
    console.log("attack j2");
    this.selected[1].powerstats.durability = this.selected[1].powerstats.durability - 10;
  }

  attack2() {
    console.log("attack j1");
    this.selected[0].powerstats.durability = this.selected[0].powerstats.durability - 10;
  }

  test(me) {
    // console.log(me);
    this.selected.push(me);
    console.log(this.selected);

  }

  start() {
    this.play = false;
  }

  getNumber(n) {
    console.log(this.ids[n].name);
    //getId()
  }

}

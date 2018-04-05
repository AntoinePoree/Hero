import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  title = 'app';
  results = '';

  heroName;
  intelligence;
  speed;
  img;
  durability;
  power;
  combat;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    let idHeros = 1;

    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + idHeros + '.json').subscribe((data: any) => {

      this.heroName = data.name;
      this.intelligence = data.powerstats.intelligence;
      this.speed = data.powerstats.speed;
      this.durability = data.powerstats.durability;
      this.power = data.powerstats.power;
      this.combat = data.powerstats.combat;
      this.img = data.images.xs;

    });
  }
}

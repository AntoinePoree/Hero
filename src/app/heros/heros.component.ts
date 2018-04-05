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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe
      (data => {

      });

    interface UserResponse {
      id: number;
      name: string;
      powerstats: number;
      durability: number;
    }
    this.http.get<UserResponse>('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/1.json').subscribe((data: any) => {
      console.log("id: " + data.id);
      console.log("name: " + data.name);
      console.log("durability: " + data.powerstats.durability);
    });
  }

}

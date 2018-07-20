import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs.service';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private gService: GifsService) { }
  subscription : Subscription;

  temp: string="hello gifs";

  ngOnInit() {
    this.get_gifs();
    console.log(this.temp); 
  }

  get_gifs(){
    return this.gService.get_gifs_array();
  }
  
  

}

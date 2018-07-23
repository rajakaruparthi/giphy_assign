import { Component, OnInit, HostListener, Inject, OnChanges } from '@angular/core';
import { GifsService } from '../gifs.service';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { GifDetailModel } from './gif-detail.model';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private gService: GifsService) { }


  subscription : Subscription;
  gifDetails: GifDetailModel[] = [];
  finalGifDetails: GifDetailModel[] = [];
  totalImages:number = 0;
  load20Gifs: GifDetailModel[] =[];

  @HostListener("window: scroll", ['$event'])
  onWindowScroll($event) {
    const page_y_offset = $event.path[1].pageYOffset;
    if(page_y_offset%1000 === 255)
    {
      let multiple = page_y_offset/1000;
      setTimeout(() => {
        this.addMoreGifs(multiple);
      }, 60);//Wait for some time
    }
  }
 
  ngOnInit() {
    this.gifDetails = this.gService.get_gifs_array();
    this.totalImages = 20;
  }

  onSubmit(form: NgForm){
    const search_string = form.value.search;
    this.finalGifDetails = [];
    this.gifDetails.forEach(eachElement => {
      if(eachElement.title.includes(search_string)){
         this.finalGifDetails.push(eachElement);
      } 
    });
    this.gifDetails = [];
    this.gifDetails = this.finalGifDetails;
  }

  onLoadAll(){

  }

  addMoreGifs(index: number){
    this.totalImages = 20 * (Math.round(index)+2);
  }
}

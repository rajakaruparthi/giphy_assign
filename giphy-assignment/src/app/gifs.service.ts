import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Subscription, Observable, Subject } from 'rxjs';
import { GifsComponent } from './gifs/gifs.component';
 import { Response } from '@angular/http';
import { GifDetailModel } from './gifs/gif-detail.model';

@Injectable({
  providedIn: 'root'
})
export class GifsService implements OnDestroy{

  constructor(private http: HttpClient) { }
  urlChanged = new Subject<string>();
  src: GifDetailModel[] =[] ;

  get_gifs_array(){
    this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=FmnE76CZ7EBeMhMfXZwusrCSM1oHnUD4&limit=100&rating=G")
      .subscribe(
        (response: Response) => {
            this.urlChanged.subscribe
           this.src = response.json().data[0].images.downsized_small.mp4; 
        }
    );
    return this.src;
  } 

  ngOnDestroy(){

  }
}

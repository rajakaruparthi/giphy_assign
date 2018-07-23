import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Subscription, Observable, Subject } from 'rxjs';
import { GifsComponent } from './gifs/gifs.component';
import { GifDetailModel } from './gifs/gif-detail.model';

@Injectable({
  providedIn: 'root'
})
export class GifsService implements OnDestroy{

  constructor(private http: HttpClient) { }
  urlChanged = new Subject<string>();
  
  gifDetailsArray: GifDetailModel[] = [] ;


  get_gifs_array(): GifDetailModel[]{
    let promise = new Promise((resolve, reject) => {
      let apiURL = "https://api.giphy.com/v1/gifs/trending?api_key=FmnE76CZ7EBeMhMfXZwusrCSM1oHnUD4&limit=1000&rating=G";
      this.http.get(apiURL)
        .toPromise()
        .then(
          response => { //success
            let i = 0;
            response.data.forEach(eachElement => {
              if(eachElement !== '' && eachElement !== null){
                const url = eachElement.images.downsized.url.replace("https://", "http://");
                const title = eachElement.title;
                const gifDetail = new GifDetailModel(i++, url, title);
                this.gifDetailsArray.push(gifDetail);
              }
            });
            resolve();
          }
        );
    });
    return this.gifDetailsArray;
  }
  
  check_size(){

  }

  ngOnDestroy(){

  }
}

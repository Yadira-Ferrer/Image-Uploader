import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImageResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  uploadImage(ext: string, image: string) {
    const URL = `${this.baseUrl}/image/`;
    const body = { ext, image };

    return this.http.post<ImageResponse>(URL, body);
  }
}

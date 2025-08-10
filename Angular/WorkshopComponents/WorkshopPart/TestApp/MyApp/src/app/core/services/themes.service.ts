import { Injectable, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { Theme } from '../../models/theme.model'; // Adjust the import path as necessary



@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private apiUrl = 'http://localhost:3000/api/themes';

  constructor(private httpClient: HttpClient) {}

  getThemes(): Observable<Theme[]> { 
    return this.httpClient.get<Theme[]>(this.apiUrl);
  }
}

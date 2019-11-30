import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { results } from '../Api/api-mock';
import { ICharacter } from '../interfaces/rick-morty.interface';

// const baseUrl = 'https://rickandmortyapi.com/api/';
// const character = `${baseUrl}character/`


@Injectable({
  providedIn: 'root'
})
export class CrudRickyMortyService {
   
  characters: ICharacter[];

  constructor(private http: HttpClient) {
    
    this.characters = [];
    this.getCharacter();

  } 

  getCharacter()  {
     this.characters = results;

  }
}

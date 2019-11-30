import { Injectable } from '@angular/core';
import { results } from '../Api/api-mock';
import { ICharacter } from '../interfaces/rick-morty.interface';

// const baseUrl = 'https://rickandmortyapi.com/api/';
// const character = `${baseUrl}character/`


@Injectable({
  providedIn: 'root'
})
export class CrudRickyMortyService {
   
 public characters: ICharacter[];

  constructor() {
    
    this.characters = [];
    this.getInitialResponse();

  } 

  public getInitialResponse()  {
     this.characters = results;

  }

  public getCharacterList() {
    return this.characters;
  }
  public modifyRick(){
    this.characters[0].name='salvador';
  }
}

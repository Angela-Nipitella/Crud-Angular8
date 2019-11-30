import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../interfaces/rick-morty.interface';
import { CrudRickyMortyService } from 'src/app/services/crud-ricky-morty.service';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  
  characterList : ICharacter[];

  constructor(private crud: CrudRickyMortyService ) { 
 
    this.characterList = [];

  }

  ngOnInit() {
    this.characterList = this.crud.getCharacterList();
    console.log(this.characterList);
    setTimeout(()=>{
      this.crud.modifyRick();
      console.log(this.characterList)
    },2000)
   
  }

}

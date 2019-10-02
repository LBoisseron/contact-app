import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  @Output() newContactEvent = new EventEmitter();
  nouveauContact: Contact = new Contact();

  constructor() { }

  ngOnInit() {
  }

  /**
   * c'est la fonction qui est appelée après la soumission du formulaire
   */
  submitContact() {
   // console.log(this.nouveauContact);
    /**
     * lorsque mon formulaire est soumis,
     * j'émets un évent qui sera écouté par mon application et qui récupérera les données de mon nouveau contact
     */
    this.newContactEvent.emit(this.nouveauContact);
    this.nouveauContact = new Contact(); // la création d'un nouveau contact permet de casser le lien avec le précédent
  }
}

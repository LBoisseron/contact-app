import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * permet de sauvegarder nos contacts dans le storage
   */
  saveContacts(contacts: Contact[]) {
    localStorage.setItem('cleContacts', JSON.stringify(contacts));
  }

  /**
   * permet de récupérer les contacts du storage
   */
  getContacts(): Contact[] {
    const contacts = JSON.parse(localStorage.getItem('cleContacts'));
    if ( contacts !== null) {
      return contacts;
    } else {
      return [];
    }
  }
}



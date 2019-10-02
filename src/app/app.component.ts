/**
 * pour déclarer une classe comme composant de notre application, on importe "component" via @angular/core
 */
import { Component } from '@angular/core';
import {Contact} from './models/contact';

/**
 * @component est ce qu'on appelle un décorateur.
 * il va nous permettre de définir 3 paramètres essentiels à notre application...
 * rajoute des éléments au fonctionnement du composant.
 */
@Component({
  /**
   * le selector détermine le nom de la balise html permettant d'afficher notre composant dans l'application.
   */
  selector: 'app-root',
  /**
   * le "templateUrl" ou "template" est la partie visible de notre composant, ce qui s'affiche à l'encran lorsque le composant est utlisé
   */
  templateUrl: './app.component.html',
  /**
   * le "styleUrl" permet juste de déclarer les styles. NB: c'est un tableau
   */
  styleUrls: ['./app.component.scss']
})
/**
 * la class contient les données du composant, mais aussi son comportement
 * dans notre contexte MVVM, notre class correspond au Model.
 */
export class AppComponent {
  // -- déclaration d'une variable
  title = 'Gestion de Contacts';
  contactActif: Contact;

  // déclaration d'un objet contact
  unContact: Contact =
    {
      id: 1,
      name: 'Léna BOISSERON',
      username: 'lénaboisseron',
      email: 'lboisseron@yahoo.fr'
    };

  // tableau de contacts
  mesContacts: Contact[] = [

    {
      id: 1,
      name: 'Léna BOISSERON',
      username: 'lénaboisseron',
      email: 'lboisseron@yahoo.fr',
      address: [
        '512'+' '+'Résidence'+' '+'la'+' '+'Sucrerie,'+' '+
        'Saint-Jean,'+' '+
        '97170 PETIT-BOURG'
      ],
      phone: '0690424043'
    },
    {
      id: 2,
      name: 'Laureen LABUTHIE',
      username: 'laureenlabuthie',
      email: 'laureen@yahoo.fr'
    },
    {
      id: 3,
      name: 'Astrid JONATHAN',
      username: 'astridjonathan',
      email: 'astrid@yahoo.fr'
    },
    {
      id: 3,
      name: 'Rosemael ANTONY',
      username: 'rosemaelantony',
      email: 'rosemael@yahoo.fr'
    },
  ];

  /**
   * permet d'afficher le profil d'un contact
   */
  displayProfil( contactChoisi: Contact ) {
    this.contactActif = contactChoisi;
  }

  /**
   * le nouveau contact récupéré depuis le new component
   * @param nouveauContact
   */
  addContact(nouveauContact: Contact) {
    this.mesContacts.push(nouveauContact);

  }
}

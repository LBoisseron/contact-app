import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  @Input() contactProfil: Contact;

  /**
   * au moment où ANGULAR va charger notre composant, nous pouvons lui demander d'initialiser certaines valeurs
   * --------------------------------
   * 1. le constructeur est appelé en premier
   * 2. en deuxième, ngOnInit
   */

  /**
   * le constructeur est la 1ère méthode à être exécutée au chargement de notre composant
   * il va nous permettre d'initialiser un certain nombre de données
   */
  constructor() { }

  /**
   * après le constructor, au moment du chargement du composant, ngOnInit est exécuté
   */
  ngOnInit() {
  }

}

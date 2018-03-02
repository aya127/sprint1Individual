import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-about',
  templateUrl: `./about.component.html`
})

export class AboutComponent {
members: Array<any>;
  constructor() { }

  ngOnInit() {
    this.members = [
      {
        name: 'Micheal',
        info3: 'Tutorial Scrum Master',
        picture: '../../assets/membersPictures/Micheal.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Aya',
        info3:'C1 Master',info2: 'Loves Greys Anatomy',
        picture: '../../assets/membersPictures/Aya.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Abdelhameed',
        info: 'Loves reading', info2: 'And listening to music',
        picture: '../../assets/membersPictures/Abdelhameed.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Nour',
        info: 'Loves food',
        picture: '../../assets/membersPictures/Nour.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Raneem',
        info: 'Loves Modern Family',
        picture: '../../assets/membersPictures/Raneem.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Khadija',
        info: 'Loves Animals', info2: 'Plays speed ball',
        picture: '../../assets/membersPictures/Khadija.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Sherif',
        info3:'SCRUM MASTER' ,info2: 'Loves football',
        picture: '../../assets/membersPictures/Sherif.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Mayar',
        info: 'Loves music', info2: 'and Chocolates',
        picture: '../../assets/membersPictures/Mayar.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Bishoy',
        info: 'Loves Writing',
        picture: '../../assets/membersPictures/Bishoy.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Ahmed',
        info: 'Watched Game of thrones', info2: 'And The Flash',
        picture: '../../assets/membersPictures/Ahmed.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Nourhan',
        info: 'Plays Tennis',
        picture: '../../assets/membersPictures/Nourhan.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'AbouGhazala',
        info3: 'C3 MASTER', info2: 'Loves creating things',
        picture: '../../assets/membersPictures/AboGhazala.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Keen',
        info: 'Loves Tea', info2: 'Hates Ambiguity',
        picture: '../../assets/membersPictures/Keen.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Heba',
        info: 'Is a meme Unicorn',
        picture: '../../assets/membersPictures/Heba.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Radwa',
        info: 'Loves Choclate',
        picture: '../../assets/membersPictures/Radwa.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Aly',
        info: 'Loves Tokyo', info2: 'And reading',
        picture: '../../assets/membersPictures/Ali.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Yasmeen',
        info3:'C4 MASTER',info2: 'Loves Cats',
        picture: '../../assets/membersPictures/Yasmeen.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Hana',
        info: 'Loves Dogs',
        picture: '../../assets/membersPictures/Hana.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Yasser',
        info: 'Is a metalhead drummer',
        picture: '../../assets/membersPictures/Yasser.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Omar',
        info: 'Plays Crossfit',
        picture: '../../assets/membersPictures/Omar.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Mohamed',
        info: 'Reads Books',
        picture: '../../assets/membersPictures/Mohamed.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Amjad',
        info3: 'C5 MASTER',info2:'Loves Servers',
        picture: '../../assets/membersPictures/Amjad.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Mostafa',
        info: 'Loves Gaming',
        picture: '../../assets/membersPictures/Mostafa.jpg',
        backgroundColor: "#9032a4"
      },
      {
        name: 'Rand',
        info: 'No sushi shall excape my sight.',
        picture: '../../assets/membersPictures/Rand.jpg',
        backgroundColor: "#1d96e1"
      },
      {
        name: 'Islam',
        info: 'Loves Developing games and playing them',
        picture: '../../assets/membersPictures/Islam.jpg',
        backgroundColor: "#9032a4"
      }
    ];
  }




}

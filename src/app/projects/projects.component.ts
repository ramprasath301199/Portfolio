import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'ARIES APPLICATIONS(AIMS,AOMS,AEX) MAINTENANCE & SUPPORT (05/2022 - Present)',
      technologies: 'Html, Css, JavaScript, JQuery, Bootstrap',
      description: [
        'Support of all UI modifications made to Aries applications.',
        'Maintain all Aries projects and client responsibilities in accordance with the specifications',
      ],
    },
    {
      title: 'ARIES SURVEY PROJECT (06/2022 - 10/2022)',
      technologies: 'Html, Css, JavaScript, JQuery, Bootstrap',
      description: [
        'Worked in User Interface (UI)',
        'It is Bassed On Book Purchase Survey',
      ],
    },
    {
      title: 'GET 2 COLLEGE MOBILE APPLICATION (01/2023 - 04/2023)',
      technologies: 'Angular,Ionic,TypeScript,Angular Material,Bootstrap,Html,Css',
      description: [
        'Worked on UI design And UI development',
        'We Developed In Both Android And Ios Using Ionic Framework',
        'We Using The 360 degree Video'
      ],
    },
    {
      title: 'AEX MOBILE APPLICATION (05/2023 - 12/2023)',
      technologies: 'Angular,Ionic,TypeScript,Angular Material,Bootstrap,Html,Css',
      description: [
        'Worked in Full User Interface in Mobile',
        'Used Camera , Location , File , File Transfer and Android Permissions Plugins. ',
        'This App Capture The Users Daily Activities'
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}

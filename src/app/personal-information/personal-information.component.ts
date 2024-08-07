import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Ramprasath K'],
    ['DOB', '30/11/1999'],
    ['Work Exp', '2+ Years'],
    ['Education', 'B.Sc-Computer Science (2020)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer Experienced Angular Developer with 2+ years in designing and implementing dynamic web applications',
    'Beyond Angular, I possess strong skills in HTML5, CSS3, and JavaScript/TypeScript, which allow me to create seamless and interactive user interfaces. I am adept at using modern frontend frameworks and libraries to enhance functionality and performance.',
    'Strong problem-solving skills and commitment to staying current with front-end development trends',
    ' My work often involves integrating RESTful APIs and third-party services, ensuring efficient data exchange and seamless communication between the frontend and backend',
  ];

  constructor() { }

  ngOnInit(): void { }
}

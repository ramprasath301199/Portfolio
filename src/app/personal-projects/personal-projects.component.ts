import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit {

  constructor() { }
  projects: Project[] = [
    {
      title: 'Library Management Web Application (01/2020 - 06/2020)',
      technologies: 'Html, Css, JavaScript',
      description: [
        'Created a Web Application For Library Management in which if choose a Book in the Application we dont need to go and search for the book in the Library . It saves time a '
      ],
    },
    {
      title: 'Weather Application(11/2022 - 12/2022)',
      technologies: 'Html, Css, JavaScript,NodeJS,ExpressJS',
      description: [
        'A weather application built with Node.js leverages Express for server-side functionality and integrates with a weather API to fetch real-time weather data.',
      ],
    },
    {
      title: 'E-commerce Website Using Angular(06-2023 - 08-2023)',
      technologies: 'Angular,TypeScript,Angular Material,Bootstrap,Html,Css',
      description: [
        'Our Angular-based e-commerce website offers a seamless shopping experience with features like advanced product search, secure user authentication, a responsive design, shopping cart, wishlist, product reviews. The platform also includes an intuitive admin panel for efficient order and product management'
      ],
    },
    {
      title: 'Chat Application Using NodeJS (06-2024 - 07-2024)',
      technologies: 'Angular,TypeScript,Angular Material,Bootstrap,NodeJs,ExpressJs,Socket.Io',
      description: [
        'We Using Node.js-based chat application enables real-time messaging with a responsive and user-friendly interface. ',
        ' The application leverages WebSocket for seamless communication and ensures a fast, reliable, and engaging chat experience.'
      ],
    },
  ];
  ngOnInit(): void {
  }

}

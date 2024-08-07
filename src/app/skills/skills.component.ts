import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';
import * as AOS from 'aos';
@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'Ionic Framework',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Bootstrap',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'JQuery',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'NodeJS , ExpressJS',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'MongoDB , MySQL',
      level: 'Intermidiate',
      rating: 50,
    },
  ];
  constructor() { }

  ngOnInit() {
    AOS.init();
  }
}

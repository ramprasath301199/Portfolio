import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'SRI RAMAKRISHNA MISSION VIDHYALAYA COLLEGE OF ARTS AND SCIENCE - COIMBATORE',
      course: 'B.Sc - Computer Science',
      duration: '2017-2020',
      score: '75%',
    },
    {
      institute: 'GHSS - KARAMADAI',
      course: 'Higher Secondary Certificate',
      duration: '2016-2017',
      score: '80%',
    },
    {
      institute: 'GHSS - KARAMADAI',
      course: 'Secondary School Leaving Certificate',
      duration: '2014-2015',
      score: '90%',
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}

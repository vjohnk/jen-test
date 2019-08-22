import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public displayCoursesFlag = false;
  public doingInternshipFlag = false;
  public doingMDFlag = false;
  public plab_courses = ['MBBS 1', 'MBBS 2', 'MBBS 3'];
  public doing_inter = ['Ielts 2', 'PLAB 1', 'PLAB 2'];
  public doing_md = ['MRCP 1', 'MRCS 1', 'MRGCOG 1', 'MRCGP 1', 'CV guide', 'Mentorshop', 'MD'];
  constructor() { }

  ngOnInit() {
  }

  doingMbbs() {
    console.log('entry');
    this.displayCoursesFlag = true;
  }

  doingInternship() {
    this.doingInternshipFlag = true;
  }

  doingMD() {
    this.doingMDFlag = true;
  }

}

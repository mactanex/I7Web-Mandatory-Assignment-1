import { Component, OnInit } from '@angular/core';
import { exerciseprogram } from '../Models/exerciseprogram';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allexercise',
  templateUrl: './allexercise.component.html',
  styleUrls: ['./allexercise.component.css']
})
export class AllexerciseComponent implements OnInit {
  ExercisePrograms: Array<exerciseprogram>;
  constructor(private router: Router) { }

  details(id: string) {
    this.router.navigateByUrl('detailExercise/' + id);
  }

detailstemp() {
  this.router.navigateByUrl('detailExercise');
}

  // get all exerciseprograms with exercises
  ngOnInit() {
  }

}

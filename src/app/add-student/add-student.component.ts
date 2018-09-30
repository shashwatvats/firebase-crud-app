import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../shared/students.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers:  [StudentsService]
})
export class AddStudentComponent implements OnInit {

  constructor(private studentsService : StudentsService) {

   }

  ngOnInit() {

    this.studentsService.getdata();
  }

  onSubmit(studentForm : NgForm){
    this.resetForm();
    this.studentsService.insertstudent(studentForm.value);
  }
  resetForm(studentForm?: NgForm) {
    if (studentForm != null)
    studentForm.reset();
    this.studentsService.selectedStudent = {
      $key: null,
      name: '',
      branch: '',
      roll_no: 0,
      percentage: 0,
    }
  }
}

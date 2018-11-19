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
    this.studentsService.insertstudent(studentForm.value);
    studentForm.reset();
  }
  
}

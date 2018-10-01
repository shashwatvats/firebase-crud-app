import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../shared/students.service';
import {Students} from '../shared/students.model';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList : Students[];
  constructor(private studentsService : StudentsService) { }

  ngOnInit() {
    var x = this.studentsService.getdata();
    x.snapshotChanges().subscribe(item => {
      this.studentList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.studentList.push(y as Students);
      });
    });
  }
  onEdit(stu: Students) {
    this.studentsService.selectedStudent =  stu;
  }

}

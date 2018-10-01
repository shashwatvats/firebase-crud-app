import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import {Students} from './students.model';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentList: AngularFireList<any>;
  selectedStudent: Students = new Students();
  constructor(private firebase:AngularFireDatabase) { }

  getdata(){
    this.studentList= this.firebase.list('students');
    return this.studentList;
  }

  insertstudent(student:Students){

    this.studentList.push({
      name: student.name,
      branch:student.branch,
      roll_no:student.roll_no,
      percentage:student.percentage
    });
  }

  updateEmployee(student : Students){
    this.studentList.update(student.$key,
      {
        name: student.name,
        branch: student.branch,
        roll_no: student.roll_no,
        percentage: student.percentage
      });
  }

}

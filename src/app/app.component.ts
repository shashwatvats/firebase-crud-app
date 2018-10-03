import { Component } from '@angular/core';
import {StudentsService} from './shared/students.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [StudentsService]
})
export class AppComponent {
  title = 'firebase-crud-app';
}

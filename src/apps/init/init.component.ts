import {Component, OnInit} from '@angular/core';
import {STUDENTS} from '../student/mock-student-list';
import {IStudent} from '../model/istudent';
import {StudentService} from '../student/student.service';

@Component({
    selector: 'my-app',
    templateUrl: 'apps/init/view/init.component.html',
    providers: [StudentService]
})
export class InitComponent implements OnInit{
    heading = "Student list with Infinite scroll";
    students: IStudent[] = [];
    constructor(private _studentService: StudentService) { }
    
    ngOnInit() {
        this._studentService.getData(4, 20).then(students => this.students=students);
    }
}

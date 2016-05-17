import {Component, OnInit} from '@angular/core';
import {STUDENTS} from '../student/mock-student-list';
import {IStudent} from '../model/istudent';
import {StudentService} from '../student/student.service';
import { ScrollDirective } from '../scroll/scroll.directive';

@Component({
    selector: 'my-app',
    templateUrl: 'apps/init/view/init.component.html',
    styleUrls: ['apps/init/css/init.component.css'],
    providers: [StudentService],
    directives: [ScrollDirective]
})
export class InitComponent implements OnInit {
    private heading: string = "Student list with Infinite scroll";
    students: IStudent[] = [];
    private scrollOption: any;
    constructor(private _studentService: StudentService) { }
    private isLoading = false;
    ngOnInit() {
        this.scrollOption = {
            dataList: [],
            threshold: 50,
            parent: this
        };
        this.studentListLoad();
    }

    trigger() {
        //console.log('trigger');
        this.studentListLoad();
    }

    studentListLoad() {
        if (!this.isLoading) {
            this.isLoading=true;
            this._studentService.getData(4, 20).then(students => {
                for (var index = 0; index < students.length; index++) {
                    this.students.push(students[index]);
                }
                this.isLoading=false;
            });
        }
    }
}

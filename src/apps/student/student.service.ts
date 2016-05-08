import { Injectable } from '@angular/core';
import {IStudent} from '../model/istudent';
import {STUDENTS} from './mock-student-list';

@Injectable()
export class StudentService {
    private stack: any;
    constructor() {
        
    }
    getData(pageNumber: number, pageSize: number) {
        return Promise.resolve(STUDENTS);
    }
    getServerData(pageNumber: number, pageSize: number) {
        return new Promise<IStudent[]>(resolve =>
            setTimeout(() => resolve(STUDENTS), 2000) // 2 seconds
        );
    }
}


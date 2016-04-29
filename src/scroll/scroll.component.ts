import { Component, OnInit }       from 'angular2/core';
import { ScrollDirective } from './scroll.directive';
import { DataService } from './data.service'

@Component({
    selector: 'scroll-chart-component',
    templateUrl: 'app/scroll/view/scroll.component.html',
    styleUrls: ['app/scroll/style/style.css'],
    directives: [ScrollDirective],
    providers: [DataService]
})
// working for server data
export class ScrollComponent implements OnInit {
    title = 'Scroll';
    private scrollOption: any;

    constructor(private _dataService: DataService) {}

    ngOnInit() {
        this.scrollOption = {
            dataList:[],
            downCallback:this.downCallBack,
            upCallBack:this.upCallBack
        };

        // this._dataService.getServerData(4, 20).then(dataList => {
        //     this.chartTwo(dataList)
        // }
        // );
    }
    downCallBack(){
        console.log('downCallBack');
    }
    upCallBack(){
        console.log('upCallBack');
    }
}



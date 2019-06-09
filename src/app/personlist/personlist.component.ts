import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.scss']
})
export class PersonlistComponent implements OnInit {
  persons: any;
  inputFilter: string;
  filterargs: any;
  selectedOption: number;
  constructor() {
    this.persons = [
      { firstname: 'Dav', lastname: 'Singh' },
      { firstname: 'Dav2', lastname: 'Singh' },
      { firstname: 'Dav3', lastname: 'Singh' },
      { firstname: 'Dav4', lastname: 'Singh' }
    ];
    this.inputFilter = "";
    this.selectedOption = 1;
  }

  ngOnInit() {
    this.filterargs = { firstname: this.inputFilter, option: 1 };
  }

  inputFunction() {
    if (this.inputFilter === '') {
      this.filterargs = { firstname: '', option: 1 };
    }
    else {
      if (this.selectedOption === 1) {
        this.filterargs = { firstname: this.inputFilter.toLowerCase(), option: 1 };
      }
      else {
        this.filterargs = { lastname: this.inputFilter.toLowerCase(), option: 2 };
      }
    }


  }

}

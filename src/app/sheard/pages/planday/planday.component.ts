import { CommonModule, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { PlandayService } from '../../../services/planday.service';
import { IPlanday } from '../../../model/planday.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-planday',
  imports: [CommonModule, NgIf, FormsModule],
  templateUrl: './planday.component.html',
  styleUrl: './planday.component.css'
})
export class PlandayComponent implements OnInit {
  selectedStatus: string = 'Transfer';
  plandayDatas: IPlanday[] = [];
  dropdownOpen: { [key: number]: boolean } = {};
  constructor(private PlandayData: PlandayService) {}
  ngOnInit(): void {
      this.plandayDatas = this.PlandayData.getPlandaysData();
      this.plandayDatas.forEach((_, i) => {
        this.dropdownOpen[i] = false;
      });
  }

  toggleDropdown(index:number) {
    Object.keys(this.dropdownOpen).forEach((key) => {
      this.dropdownOpen[+key] = +key === index ? !this.dropdownOpen[+key] : false;
    });
  }

  selectOption(index: number, option: string) {
    this.plandayDatas[index].status = option;
    this.dropdownOpen[index] = false;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const inside = target.closest('.relative');
    if (!inside) {
      Object.keys(this.dropdownOpen).forEach((key) => {
        this.dropdownOpen[+key] = false;
      });
    }
  }

  availableDepartments: string[] = [
    'HR',
    'Engineering',
    'Finance',
    'Marketing',
    'Sales'
  ];
  

}

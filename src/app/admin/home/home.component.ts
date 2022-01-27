import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from 'src/app/models/product';
// import * as  ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { CountryService } from 'src/app/services/country.service';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent implements OnInit {

  // public Editor = ClassicEditor;


  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  constructor(private countryService: CountryService, private primengConfig: PrimeNGConfig) {
    {


      this.items = [];

      this.cities = [
        { name: "New York", code: "NYc" },
        { name: "Rome", code: "RMz" },
        { name: "London", code: "LDNs " },
        { name: "Istanbul", code: "ISTx" },
        { name: "Paris", code: "PRxS" },

      ];
      this.dukien = [
        { name: "Buổi sáng", code: "1" },
        { name: "Buổi trưa", code: "2" },
        { name: "Buổi tối", code: "3" },
      ];
      this.city = [
        { name: 'New paba', code: 'NY' },
        { name: 'Romenia', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
      ];
      this.employee = [
        { name: "Đỗ Tuấn Anh", code: "NV1" },
        { name: "Đỗ Công Minh", code: "NV2" },
        { name: "Lê Thanh Ngọc", code: "NV3" },
        { name: "Đỗ Văn Nghĩa", code: "NV4" },
        { name: "Luyện Ngọc Nam", code: "NV5" },
      ]
      this.chucdanh = [
        { name: "Quay phim", code: "CD1" },
        { name: "Trang điểm", code: "CD2" },
        { name: "Ánh sáng", code: "CD3" },
        { name: "Âm thanh", code: "CD4" },
        { name: "Lái xe", code: "CD5" },
      ]
    }

  }


  //
  value18: number = 10.50;

  text1: string = "";


  selectedCities: string[] = [];

  selectedEmployee: string[] = [];

  selectedChucdanh: string[] = [];

  city: City[] = [];

  selectedCity1: City[] = [];

  dukienphatsong: string[] = [];

  items: SelectItem[] = [];

  item: string = "";

  cities: any[] = [];

  employee: any[] = [];

  chucdanh: any[] = [];

  dukien: any[] = [];

  countries: any[] = [];

  val1: string = "";

  val2: string = "";

  val3: string = "";

  count: number = 0;

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  changeCount(i: number) {
    this.count = this.count + i;
  }

}

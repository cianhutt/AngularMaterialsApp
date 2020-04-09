import { Component, OnInit } from '@angular/core';

export interface File {
  server: string;
  fileName: string;
  pii: string;
  full: string;
}

const files: File[] = [
  {server: 'FS-10', fileName: 'JohnSmithResume.doc', pii: 'Name', full:'C:/John/JohnSmithResume.doc'},
  {server: 'FS-12', fileName: 'JohnSmithResume.pdf', pii: 'Name', full:'C:/John/JohnSmithResume.pdf'},
  {server: 'FS-14', fileName: 'MaryLeeResume.pdf', pii: 'PIN', full:'C:/Mary/MaryLeeResume.pdf'},
  {server: 'FS-21', fileName: 'HousingApplication.pdf', pii: 'Name', full:'C:/Dave/HousingApplication.pdf'},
  {server: 'FS-42', fileName: 'RenewalForm.pdf', pii: 'Type', full:'C:/Lucy/RenewalForm.pdf'},
  {server: 'FS-21', fileName: 'Tax-2019.pdf', pii: 'Name', full:'C:/Tom/Tax-2019.pdf'},
  {server: 'FS-21', fileName: 'Tax-2018.pdf', pii: 'Name', full:'C:/Greg/Tax-2018.pdf'},
];


@Component({
  selector: 'app-piitracking',
  templateUrl: './piitracking.component.html',
  styleUrls: ['./piitracking.component.less']
})
export class PiitrackingComponent implements OnInit {

  displayedColumns: string[] = ['server', 'fileName', 'pii', 'full'];
  dataSource = files;

  constructor() { }

  ngOnInit(): void {
  }

//   files = [
//     {server: 'FS-10', filename: 'JohnSmithResume.doc', pii: 'Name', full:'C:/John/JohnSmithResume.doc'},
//     {server: 'FS-12', filename: 'JohnSmithResume.pdf', pii: 'Name', full:'C:/John/JohnSmithResume.pdf'},
//     {server: 'FS-14', filename: 'MaryLeeResume.pdf', pii: 'PIN', full:'C:/Mary/MaryLeeResume.pdf'},
//     {server: 'FS-21', filename: 'HousingApplication.pdf', pii: 'Name', full:'C:/Dave/HousingApplication.pdf'},
//     {server: 'FS-42', filename: 'RenewalForm.pdf', pii: 'Type', full:'C:/Lucy/RenewalForm.pdf'},
//     {server: 'FS-21', filename: 'Tax-2019.pdf', pii: 'Name', full:'C:/Tom/Tax-2019.pdf'},
//     {server: 'FS-21', filename: 'Tax-2018.pdf', pii: 'Name', full:'C:/Greg/Tax-2018.pdf'},
// ];


}

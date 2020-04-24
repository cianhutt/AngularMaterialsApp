import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  {server: 'FS-21', fileName: 'Accounts-2019.pdf', pii: 'Name', full:'C:/Jack/Accounts-2018.pdf'},
  {server: 'FS-21', fileName: 'Accounts-2019.pdf', pii: 'Name', full:'C:/Jack/Accounts-2019.pdf'},
];


@Component({
  selector: 'app-piitracking',
  templateUrl: './piitracking.component.html',
  styleUrls: ['./piitracking.component.less']
})
export class PiitrackingComponent implements OnInit {

  displayedColumns: string[] = ['server', 'fileName', 'pii', 'full'];
  dataSource = new MatTableDataSource(files);

  public fildDoughnutChartLabels = ['IT-FS-01', 'HR-FS-03', 'G-Drive', 'Dropbox', 'Other'];
  public fildDoughnutChartData = [45, 24, 15, 8, 8];
  public fildDoughnutChartType = 'doughnut';

  public gdprDoughnutChartLabels = ['XLSX', 'DOCX', 'PDF', 'HTML', 'Other'];
  public gdprDoughnutChartData = [42, 32, 12, 9, 5];
  public gdprDoughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

  filter(filterValue:string){
    this.dataSource.filter = filterValue.trim();
  }
}

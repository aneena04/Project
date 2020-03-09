import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import bsCustomFileInput from "bs-custom-file-input";
import { UploadService } from '../services/upload.service';


@Component({
  selector: 'app-update-excel',
  templateUrl: './update-excel.component.html',
  styleUrls: ['./update-excel.component.css']
})

export class UpdateExcelComponent implements OnInit {
  uploadExcel: FormGroup;

  file:File;
  constructor(private services:UploadService) { }
  navbarOpen = false;
  onFileChange(e){
    this.file = e.target.files[0];
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  uploadData(){
    const uploadSheet = new FormData();
    uploadSheet.append("stockSheet",this.file,this.file.name);
    this.services.uploadStockSheet(uploadSheet).subscribe(data =>{
      console.log("Uploaded");
      console.log(data);
    })
  }
  ngOnInit() {
    bsCustomFileInput.init();
  }
}
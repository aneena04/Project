import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import bsCustomFileInput from "bs-custom-file-input";
import { StockPriceService } from '../services/stock-price.service';


@Component({
  selector: 'app-update-excel',
  templateUrl: './update-excel.component.html',
  styleUrls: ['./update-excel.component.css']
})

export class UpdateExcelComponent implements OnInit {
  message: string;
  constructor(private uploadService:StockPriceService) { }
  file:File;
  ngOnInit() {
    bsCustomFileInput.init();
  }
  onFileChange(e){
    this.file=e.target.files[0];
  }
  uploadData(){
    const uploadSheetData=new FormData();
    uploadSheetData.append("stocksSheet",this.file,this.file.name);
    this.uploadService.uploadStocksSheet(uploadSheetData).subscribe(
      data=>{
        
        this.message = "Data uploaded successfully"
      }
    );
  }
}
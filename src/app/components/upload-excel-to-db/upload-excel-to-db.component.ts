import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx' ;
import 'rxjs/add/operator/catch';
import { retry, catchError } from 'rxjs/operators';
import { element } from 'protractor';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload-excel-to-db',
  templateUrl: './upload-excel-to-db.component.html',
  styleUrls: ['./upload-excel-to-db.component.css']
})
export class UploadExcelToDBComponent implements OnInit {
  fileToUpload: File = null;
  files: any = [];
  configurationFileToUpload: any = [];
  result:any = {};
  esResult:any = {};
  imageKey:boolean = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    let fileName = this.fileToUpload.name;
    console.log(fileName);
    let extn = fileName.split(".").pop();
    console.log(extn);
    if(extn != "zip"){ 
      alert("Only zip file allowed");
      (<HTMLInputElement>document.getElementById("file")).value = '';
      this.fileToUpload = null;
      return;
    }
  }

  filesPicked(files) {
    this.files = files; 
  }

  handleConfigurationFileInput(files: FileList) {
    this.configurationFileToUpload = files.item(0);
  }



  uploadAllFiles() {
    this.imageKey = true;
    const formData: FormData = new FormData();
    console.log(this.fileToUpload);
    formData.append("file", this.fileToUpload, "file");
    formData.append("configurationFile", this.configurationFileToUpload, "configurationFile");
    this.httpClient.post('http://localhost:8080/uploadFile',formData).subscribe((data:any) =>{  
      this.esResult = data.esResult;
      this.result = data.result;
      console.log("hello", this.result);
      this.imageKey = false;
    },
    error =>{ console.log('oops', error)
        alert(error.error.message);
        this.imageKey = false;
      }
    )
  }

  uploadDataFiles(){
    const formData: FormData = new FormData();
    console.log(this.files);
    
    for(var i= 0; i<this.files.length; i++){
      formData.append('file', this.files[i], this.files[i].name);
    } 

    this.httpClient.post('https://data-upload-java.mybluemix.net/uploadDataFiles',formData).subscribe(data =>{  
      console.log("hello");
    },
    error =>{ console.log('oops', error)
        alert(error.error.message);
      }
    )
  }

  cancelFile(){
    (<HTMLInputElement>document.getElementById("file")).value = '';
  };

  cancelConfigurationFile(){
    console.log((<HTMLInputElement>document.getElementById("cancelConfigurationFile")).value);
    (<HTMLInputElement>document.getElementById("cancelConfigurationFile")).value = '';
    this.configurationFileToUpload = "";
  };
}

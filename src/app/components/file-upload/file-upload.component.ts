import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Subscription, finalize } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input()
  requiredFileType: string = ".html";

  fileName = '';
  uploadProgress: number | null = null;
  uploadSub: Subscription | null = null;
  fileContents: any;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      
        const reader = new FileReader();
        let content:any;
        reader.addEventListener('progress', (event) => {
            this.uploadProgress = Math.round(100 * (event.loaded / (event.total || 0)));
        })
        reader.addEventListener('load', (event) => {
          this.fileContents = event.target?.result;
          console.log(this.fileContents);
        });
       reader.readAsDataURL(file);
    }
  }

  cancelUpload() {
    if (this.uploadSub) this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}

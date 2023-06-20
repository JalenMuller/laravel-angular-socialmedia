import { Component, OnDestroy, OnInit } from '@angular/core';
import { first, last } from 'rxjs';
import apiConfig from 'src/app/constants/apiConfig';
import IUser from 'src/app/models/user.model';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post-modal',
  templateUrl: './new-post-modal.component.html',
  styleUrls: ['./new-post-modal.component.css'],
})
export class NewPostModalComponent implements OnInit, OnDestroy {
  baseUrl = apiConfig.baseUrl;
  user: any = null;
  imagePreview: string | ArrayBuffer | null = '';
  constructor(public modal: ModalService, public userService: UserService) {
    userService.user.pipe(first()).subscribe((value) => {
      this.user = value;
    });
  }
  openInput() {
    document.getElementById('image-input')?.click();
  }
  preview($event: Event) {
    const input = $event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = input.files;
    if (fileList) {
      const image = fileList[0];
      var reader = new FileReader();
      let self = this;
      reader.onloadend = function () {
        self.imagePreview = reader.result;
      };
      reader.readAsDataURL(image);
    }
  }

  submit(form: NgForm) {
    const postDesc = form.value.postDesc;
    console.log(postDesc);
  }
  ngOnInit(): void {
    this.modal.register('new-post');
  }
  ngOnDestroy(): void {
    this.modal.unregister('new-post');
  }
}

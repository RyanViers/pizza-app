import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Storage } from 'aws-amplify';
import { APIService } from 'src/app/API.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  template: `<div
    class="grid grid-cols-1 px-4 py-16 max-w-7xl gap-x-8 gap-y-10 sm:px-6 md:grid-cols-3 lg:px-8"
  >
    <div>
      <h2 class="text-base font-semibold leading-7 text-white">
        Personal Information
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-400">
        Use a permanent address where you can receive mail.
      </p>
    </div>

    <form class="md:col-span-2">
      <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
        <div class="flex items-center col-span-full gap-x-8">
          <img
            #img
            class="flex-none object-cover w-24 h-24 bg-gray-800 rounded-lg"
            (error)="
              img.src =
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            "
            src="https://d3bxgelzcyt5r7.cloudfront.net/public/USERS/AndrewHaselden.png"
          />
          <div>
            <button
              type="button"
              (click)="changeImage(img)"
              class="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-white/10 hover:bg-white/20"
            >
              Change avatar
            </button>
            <p class="mt-2 text-xs leading-5 text-gray-400">
              JPG, GIF or PNG. 1MB max.
            </p>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-white"
            >First name</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              [placeholder]="user?.given_name"
              class="block w-full pl-3 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="last-name"
            class="block text-sm font-medium leading-6 text-white"
            >Last name</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              [placeholder]="user?.family_name"
              autocomplete="family-name"
              class="block pl-3 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="col-span-full">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-white"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              disabled
              [value]="user?.email"
              class="block pl-3 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div class="flex mt-8">
        <button
          type="submit"
          class="px-3 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  </div>`,
  styles: [``],
})
export class ProfileInfoComponent implements OnInit {
  @Input() user?: any;

  private processing = false;

  constructor(private api: APIService) {}

  /**
   * change image
   * @param img
   */
  async changeImage(img: any) {
    if (this.processing) return;
    this.processing = true;
    setTimeout(() => {
      this.processing = false;
    }, 2000);

    const file = await this.selectFile();
    if (file) {
      try {
        const blob = await this.fileToBlob(file);
        const dataUrl = await this.blobToDataUrl(blob);
        img.src = dataUrl;
        const storageKey = 'USERS/AndrewHaselden.png';
        const url = `${environment.CLOUDFRONT_URL}/public/${storageKey}`;
        await this.api.InvalidateCloudfrontUrls({
          urls: [`/public/${storageKey}`],
        });
        const key = await Storage.put(storageKey, blob);
        this.updateImageCache(blob, url);
      } catch (err) {
        console.debug(err);
      }
    }
  }

  ngOnInit() {}

  /**
   * update image cache
   * @param blob
   * @param url
   */
  private updateImageCache(blob: Blob, url: string) {
    navigator.serviceWorker.controller?.postMessage({
      action: 'USER_IMAGE_UPDATED',
      url: url,
      blob: blob,
    });
  }

  /**
   * select file
   */
  private async selectFile(): Promise<File> {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';

      input.onchange = (e: any) => {
        const file = e.target.files[0];
        console.log(file);
        resolve(file);
      };

      input.click();
    });
  }

  /**
   * file to blob
   * @param file
   * @returns
   */
  private async fileToBlob(file: File): Promise<Blob> {
    return new Promise<Blob>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result instanceof ArrayBuffer) {
          const blob = new Blob([reader.result], { type: file.type });
          resolve(blob);
        } else {
          reject(new Error('Failed to read file as ArrayBuffer.'));
        }
      };

      reader.onerror = () => {
        reject(new Error('Error reading file.'));
      };

      reader.readAsArrayBuffer(file);
    });
  }

  /**
   * blob to data url
   */
  private async blobToDataUrl(blob: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  }
}

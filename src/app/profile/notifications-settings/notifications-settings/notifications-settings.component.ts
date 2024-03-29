import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-notifications-settings',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  template: `<div
    class="grid grid-cols-1 px-4 py-16 max-w-7xl gap-x-8 gap-y-10 sm:px-6 md:grid-cols-3 lg:px-8"
  >
    <div class="px-4 sm:px-0">
      <h2 class="text-base font-semibold leading-7 text-dark">Notifications</h2>
      <p class="mt-1 text-sm leading-6 text-medium">
        We'll always let you know about important changes, but you pick what
        else you want to hear about.
      </p>
    </div>

    <form
      class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
    >
      <div class="px-4 py-6 sm:p-8">
        <div class="max-w-2xl space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-dark">
              By Email
            </legend>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex items-center h-6">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    class="w-4 h-4 px-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                  />
                </div>
                <div class="text-sm leading-6">
                  <label for="comments" class="font-medium text-dark"
                    >Comments</label
                  >
                  <p class="text-medium-tint">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex items-center h-6">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    class="w-4 h-4 px-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                  />
                </div>
                <div class="text-sm leading-6">
                  <label for="candidates" class="font-medium text-dark"
                    >Candidates</label
                  >
                  <p class="text-medium-tint">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex items-center h-6">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    class="w-4 h-4 px-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                  />
                </div>
                <div class="text-sm leading-6">
                  <label for="offers" class="font-medium text-dark"
                    >Offers</label
                  >
                  <p class="text-medium-tint">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-dark">
              Push Notifications
            </legend>
            <p class="mt-1 text-sm leading-6 text-medium">
              These are delivered via SMS to your mobile phone.
            </p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  class="w-4 h-4 px-2 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                />
                <label
                  for="push-everything"
                  class="block text-sm font-medium leading-6 text-dark"
                  >Everything</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="w-4 h-4 px-2 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                />
                <label
                  for="push-email"
                  class="block text-sm font-medium leading-6 text-dark"
                  >Same as email</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  class="w-4 h-4 px-2 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                />
                <label
                  for="push-nothing"
                  class="block text-sm font-medium leading-6 text-dark"
                  >No push notifications</label
                >
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div
        class="flex items-center justify-start px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8"
      >
        <button type="button" class="text-sm font-semibold leading-6 text-dark">
          Cancel
        </button>
        <button
          type="submit"
          class="px-3 py-2 text-sm font-semibold bg-indigo-600 rounded-md shadow-sm text-light hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  </div>`,
  styles: [``],
})
export class NotificationsSettingsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

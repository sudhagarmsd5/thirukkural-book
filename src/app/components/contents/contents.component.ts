import {Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Observable } from 'rxjs';
import { ThirukkuralService } from 'src/app/services/thirukkural.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'thirukkural-contents',
  standalone: true,
  styleUrls: ['./contents.component.scss'],
  imports: [CommonModule, RouterModule,NgOptimizedImage],
  template: `
    <main class="txt">
      <div class="container mx-auto">
        <div class="flex flex-wrap mx-4 justify-evenly">
          <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <div
              class="c-card block bg-color-shades-light dark:bg-color-shades-charcoal shadow-md hover:shadow-xl rounded-lg overflow-hidden border-color-shades-gray-glare dark:border-color-shades-gray border-[1px]">
              <div class="relative pb-48 overflow-hidden">
                <img
                  class="absolute inset-0 h-full w-full object-cover "
                  ngSrc="assets/images/aram.png"
                  width="664"
                  height="384"
                  ngSrcset="100w, 200w, 300w"
                  priority
                  alt="aram" />
              </div>
              <div
                class="p-4 h-72 border-t text-lg txt flex justify-center items-center">
                <ol class="space-y-4 text-center">
                  <li [routerLink]="['/chapter-group', 'பாயிரவியல்']">
                    பாயிரவியல்
                  </li>
                  <li [routerLink]="['/chapter-group', 'இல்லறவியல்']">இல்லறவியல்</li>
                  <li [routerLink]="['/chapter-group', 'துறவறவியல்']">துறவறவியல்</li>
                  <li [routerLink]="['/chapter-group', 'ஊழியல்']">ஊழியல்</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <div
              class="c-card block bg-color-shades-light dark:bg-color-shades-charcoal shadow-md hover:shadow-xl rounded-lg overflow-hidden border-color-shades-gray-glare dark:border-color-shades-gray border-[1px]">
              <div class="relative pb-48 overflow-hidden ">
                <img
                  class="absolute inset-0 h-full w-full object-cover"
                  ngSrc="assets/images/porul.png"
                  width="664"
                  height="384"
                  ngSrcset="100w, 200w, 300w"
                  priority
                  alt="porul" />
              </div>
              <div
                class="p-4 h-72 border-t text-lg txt flex justify-center items-center">
                <ol class="space-y-4 text-center">
                  <li [routerLink]="['/chapter-group', 'அரசியல்']">அரசியல்</li>
                  <li [routerLink]="['/chapter-group', 'அமைச்சியல்']">அமைச்சியல்</li>
                  <li [routerLink]="['/chapter-group', 'அரணியல்']">அரணியல்</li>
                  <li [routerLink]="['/chapter-group', 'படையில்']">படையில்</li>
                  <li [routerLink]="['/chapter-group', 'நட்பியல்']">நட்பியல்</li>
                  <li [routerLink]="['/chapter-group', 'குடியியல்']">குடியியல்</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <div
              class="c-card block bg-color-shades-light dark:bg-color-shades-charcoal shadow-md hover:shadow-xl rounded-lg overflow-hidden border-color-shades-gray-glare dark:border-color-shades-gray border-[1px]">
              <div class="relative pb-48 overflow-hidden">
                <img
                  class="absolute inset-0 h-full w-full object-cover"
                  ngSrc="assets/images/inbam.png"
                  width="664"
                  height="384"
                  ngSrcset="100w, 200w, 300w"
                  priority
                  alt="inbam" />
              </div>
              <div
                class="p-4 h-72 border-t text-lg txt flex justify-center items-center">
                <ol class="space-y-4 text-center">
                  <li [routerLink]="['/chapter-group', 'களவியல்']">களவியல்</li>
                  <li [routerLink]="['/chapter-group', 'கற்பியல்']">கற்பியல்</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
})
export class ContentsComponent {
  public service = inject(ThirukkuralService);
  kural: Observable<any[]> = this.service.getAllKural();
  kural_details: Observable<any[]> = this.service.getKuralDetail();

  public router = inject(Router);
  clik() {
    this.router.navigateByUrl('/favorites');
  }
}

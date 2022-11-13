import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from './services/navigation.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'thirukkural-root',
  template: `
    <main
      #sideNavMenuContent
      id="sidenav"
      class="fixed inset-0 z-20 top-0 left-0 overflow-x-hidden w-0 block h-full max-h-screen py-1 pt-24 pb-4 tracking-widest txt-gray bg-color-shades-light-bright dark:bg-color-shades-dim shadow-2xl">
      <div class="flex flex-col">
        <a
          (click)="CloseMenuBar()"
          class="side-nav-items"
          routerLink="favorites"
          >Favourites</a
        >
        <a
          class="side-nav-items"
          href="https://en.wikipedia.org/wiki/Thiruvalluvar"
          target="_blank"
          >About Thiruvalluvar</a
        >
        <a
          class="side-nav-items absolute bottom-0 text-sm"
          href="https://www.linkedin.com/in/sudhagar-murugesan-9b113a17b/"
          target="_blank"
          >Developed By: Sudhagar Murugesan</a
        >
      </div>
      <button (click)="CloseMenuBar()" class="absolute z-20 nav-close">
        <img
          class="h-6 w-6 filter invert dark:invert-0 cursor-pointer"
          src="assets/icons/close.svg"
          alt="close" />
      </button>
    </main>

    <div class="header">
      <nav
        class="bg-color-shades-light-bright dark:bg-color-shades-dim h-[64px] border-color-shades-gray-glare dark:border-color-shades-gray border-b-[1px] flex justify-between items-center nav-padding">
        <button (click)="ToggleMenuBar()">
          <img
            class="h-6 w-6 filter invert dark:invert-0 cursor-pointer"
            src="assets/icons/menu.svg"
            alt="menu" />
        </button>
        <div class="flex space-x-1 cursor-pointer" routerLink="home">
          <img class="h-6 w-6" src="assets/icons/icon-48x48.png" alt="close" />
          <a class="txt">திருக்குறள்</a>
        </div>
        <button (click)="ToggleDarkLightMode()" class="txt">
          <ng-container *ngIf="isDark; else dark">
            <img
              class="h-6 w-6 filter invert dark:invert-0 cursor-pointer"
              src="assets/icons/brightness_high.svg"
              alt="brightness_high" />
          </ng-container>
          <ng-template #dark>
            <img
              class="h-6 w-6 filter invert dark:invert-0 cursor-pointer"
              src="assets/icons/brightness_medium.svg"
              alt="brightness_medium" />
          </ng-template>
        </button>
      </nav>
    </div>
    <div class="content">
      <section id="contents">
        <div>
          <router-outlet></router-outlet>
        </div>
      </section>
    </div>
  `,
})
export class ThirukkuralComponent {
  @ViewChild('sideNavMenuContent') side_nav_menu_content!: ElementRef;

  private renderer = inject(Renderer2);
  public navigation = inject(NavigationService);

  constructor() {
    let userColorScheme = localStorage.getItem('user-color-scheme');
    if (userColorScheme === 'dark') {
      document.documentElement.classList.add('dark');
      this.isDark = true;
    } else {
      document.documentElement.classList.remove('dark');
      this.isDark = false;
    }
    this.navigation.startSaveHistory();
  }
  //#region dark_mode
  isDark: boolean = false;
  ToggleDarkLightMode() {
    if (this.isDark) {
      document.documentElement.classList.remove('dark');
      this.isDark = false;
      localStorage.setItem('user-color-scheme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      this.isDark = true;
      localStorage.setItem('user-color-scheme', 'dark');
    }
  }
  //#endregion dark_mode

  ToggleMenuBar() {
    this.renderer.setStyle(
      this.side_nav_menu_content.nativeElement,
      'width',
      '256px'
    );

    document.getElementById('contents')?.classList.add('blur-background');
  }

  CloseMenuBar() {
    this.renderer.setStyle(
      this.side_nav_menu_content.nativeElement,
      'width',
      '0'
    );
    document.getElementById('contents')?.classList.remove('blur-background');
  }
}

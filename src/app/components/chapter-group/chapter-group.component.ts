import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { ThirukkuralService } from 'src/app/services/thirukkural.service';
import { map, filter } from 'rxjs';

@Component({
  selector: 'thirukkural-chapter-group',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <button (click)="navigation.goBack()" class="txt ml-3 absolute">
      <img
        class="h-6 w-6 filter invert dark:invert-0 cursor-pointer"
        src="assets/icons/arrow_back.svg"
        alt="arrow_back" />
    </button>

    <main *ngIf="route.children.length === 0" class="txt">
      <div class="container mx-auto">
        <div class="flex flex-wrap mx-4 h-[calc(100vh_-_96px)] items-center justify-evenly">
          <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <div
              class="c-card block bg-color-shades-light dark:bg-color-shades-charcoal shadow-md hover:shadow-xl rounded-lg overflow-hidden border-color-shades-gray-glare dark:border-color-shades-gray border-[1px]">
              <div
                class="p-4 max-h-screen text-lg txt flex justify-center items-center">
                <div *ngFor="let i of chapterGroup">
                  <ol
                    *ngFor="let j of i.chapters.detail"
                    class="space-y-4 text-center">
                    <li
                      [routerLink]="['chapter', j.name]"
                      (click)="passChapterDetailsData(j)">
                      {{ j.name }}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./chapter-group.component.scss'],
})
export class ChapterGroupComponent {
  public route = inject(ActivatedRoute);
  public router = inject(Router);
  public navigation = inject(NavigationService);
  public kuralService = inject(ThirukkuralService);
  id!: string;
  chapterGroup: any[] = [];
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      // console.log(data['id']);
      this.id = data['id'];
    });

    this.kuralService
      .getKuralDetail()
      .pipe(map((item: any) => item.section.detail))
      .subscribe(res => {
        let a: any[] = res;
        let val: any[] = [];
        a.map(i => {
          val.push(...i.chapterGroup.detail);
        });

        this.chapterGroup = val.filter(item => item.name === this.id);
      });
  }

  passChapterDetailsData(data: any) {
    this.kuralService.updateChapterDetail(data);
  }
}

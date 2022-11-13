import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ThirukkuralService } from 'src/app/services/thirukkural.service';
import { filter, Subscription } from 'rxjs';
@Component({
  selector: 'thirukkural-chapter',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <p class="txt text-lg text-center">
      {{ chapter_name }}
    </p>

    <div class="container mx-auto">
      <div class="p-2 md:p-3 lg:p-4 space-y-4 rounded overflow-hidden">
        <div
          *ngFor="let i of kural_list"
          [tabindex]="i.number"
          class="group outline-none accordion-section">
          <div
            class="group bg-color-shades-light dark:bg-color-shades-charcoal transition ease duration-500 cursor-pointer pr-10 relative">
            <div
              class="group-focus:text-black dark:group-focus:text-white transition ease duration-500 txt text-sm">
              <span class="text-color-core-secondary-glare">
                குறள் {{ i.number }} :
              </span>
              <br>
              <div>
                {{ i.line_1 }} <br />
                {{ i.line_2 }}
              </div>
            </div>
            <div
              class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
              <button class="txt">
                <img
                  class="h-6 w-6 filter invert dark:invert-0 cursor-pointer"
                  src="assets/icons/expand_more.svg"
                  alt="expand_more" />
              </button>
            </div>
          </div>
          <div
            class="group-focus:max-h-screen max-h-0 bg-color-shades-light dark:bg-color-shades-charcoal px-4 overflow-hidden ease duration-500">
            <div class="p-2 txt  text-justify">
              <div class="text-color-core-primary-glare">பொருள்:</div>
              {{ i.mu_varatharasanar }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {
  public route = inject(ActivatedRoute);
  public router = inject(Router);
  public kuralService = inject(ThirukkuralService);
  chapter_name!: string;
  chap!: Subscription;
  kural_list: any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      // console.log(data['id']);
      // this.id = data['id'];
    });

    this.chap = this.kuralService.chapter_details$.subscribe(res => {
      // console.log(res);
      if (res) {
        this.chapter_name = res.name;
        let start = res.start;
        let end = res.end;
        let nos: any[] = [];
        for (let i = start; i <= end; i++) {
          nos.push(i);
        }

        this.kuralService.getAllKural().subscribe(res => {
          for (let i = 0; i < nos.length; i++) {
            let a = res.find(a => a.number == nos[i]);

            this.kural_list.push(a);
          }
        });
      } else {
        this.router.navigateByUrl('home');
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.chap.unsubscribe();
  }
}

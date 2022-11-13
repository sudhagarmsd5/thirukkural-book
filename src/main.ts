import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ThirukkuralComponent } from './app/thirukkural.component';
import { InMemoryDbDataService } from './app/services/In-memory-db-data.service';
import { environment } from './environments/environment';
import { ContentsComponent } from './app/components/contents/contents.component';
import { PageNotFoundComponent } from './app/components/page-not-found/page-not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FavoritesComponent } from './app/components/favorites/favorites.component';
import { ChapterGroupComponent } from './app/components/chapter-group/chapter-group.component';
import { ChapterComponent } from './app/components/chapter/chapter.component';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: ContentsComponent,
  },
  {
    path: 'chapter-group/:id',
    component: ChapterGroupComponent,
    children: [{ path: 'chapter/:id', component: ChapterComponent }],
  },
  { path: 'favorites', component: FavoritesComponent },

  { path: '**', component: PageNotFoundComponent },
];

bootstrapApplication(ThirukkuralComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      InMemoryWebApiModule.forRoot(InMemoryDbDataService),
      HttpClientModule,
      RouterModule.forRoot(routes),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000',
      })
    ),
  ],
}).catch(err => console.error(err));

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

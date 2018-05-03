import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'career-dev' }),
    CoreModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}

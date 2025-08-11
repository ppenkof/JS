import { ApplicationConfig, provideZoneChangeDetection, provideZonelessChangeDetection, provideBrowserGlobalErrorListeners  } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthenticationInterceptor, ErrorInterceptor } from './core/interseptors';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([AuthenticationInterceptor, ErrorInterceptor])),
    provideStore(),
    provideEffects(),
    provideStoreDevtools()
]
};

import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productsReducer } from './store/products/products.reducer';
import { loadProductsEffect } from './store/products/products.effects';
import { AddToCardReducer } from './store/addToCard/addToCard.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ 
      productsState: productsReducer,
      addToCardState: AddToCardReducer
     }),
    provideEffects({loadProductsEffect}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};

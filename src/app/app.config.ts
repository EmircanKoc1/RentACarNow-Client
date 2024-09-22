import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ClaimService } from './core/services/implementations/claim.service';
import { RentalService } from './core/services/implementations/rental.service';
import { BrandService } from './core/services/implementations/brand.service';
import { UserService } from './core/services/implementations/user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(),
     ClaimService,
     RentalService,
     BrandService,
     UserService,
     RentalService
    ]
};

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"tp-finance-helper","appId":"1:999419405958:web:94e9e4ed94f1f9d8381307","storageBucket":"tp-finance-helper.appspot.com","apiKey":"AIzaSyBxSXkDCRMLvu4M_s4b3ybzJRmGaSi4pCI","authDomain":"tp-finance-helper.firebaseapp.com","messagingSenderId":"999419405958","measurementId":"G-Q5E46FEPL5"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), providePerformance(() => getPerformance()), provideRemoteConfig(() => getRemoteConfig())]
};

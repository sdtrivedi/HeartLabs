import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpinningWheelComponent } from './spinning-wheel/spinning-wheel.component';
import { HomeComponent } from './home/home.component';
import { AltSpinningWheelComponent } from './alt-spinning-wheel/alt-spinning-wheel.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { PopupModule } from '@progress/kendo-angular-popup';

import { SliderGameComponent } from './slider-game/slider-game.component';
import { VeryAngryAdviceComponent } from './very-angry-advice/very-angry-advice.component';
import { LittleAngryAdviceComponent } from './little-angry-advice/little-angry-advice.component';
import { CalmComponent } from './calm/calm.component';
import { InstructionsComponent } from './instructions/instructions.component';


//import {PopupModule} from 'ng2-opd-popup';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SpinningWheelComponent,
    HomeComponent,
    AltSpinningWheelComponent,
    TrafficLightComponent,
    SliderGameComponent,
    VeryAngryAdviceComponent,
    LittleAngryAdviceComponent,
    CalmComponent,
    InstructionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PopupModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

//    PopupModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    VeryAngryAdviceComponent,
    LittleAngryAdviceComponent,
    CalmComponent,
    InstructionsComponent,
  ]
})
export class AppModule { }

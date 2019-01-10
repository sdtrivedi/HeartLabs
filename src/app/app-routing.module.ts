import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinningWheelComponent } from './spinning-wheel/spinning-wheel.component';
import { HomeComponent } from './home/home.component';
import { AltSpinningWheelComponent} from './alt-spinning-wheel/alt-spinning-wheel.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { SliderGameComponent } from './slider-game/slider-game.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'spinning-wheel', component: SpinningWheelComponent},
  {path: 'spinning-wheel', component: AltSpinningWheelComponent},
  {path: 'traffic-light', component: TrafficLightComponent},
  {path: 'slider-game', component: SliderGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BeHealthyComponent } from './be-healthy/be-healthy.component';
import { BeMindfulComponent } from './be-mindful/be-mindful.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { MoreHelthyComponent } from './more-helthy/more-helthy.component';
import { SeasonalFruitsComponent } from './seasonal-fruits/seasonal-fruits.component';
import { SimpleTipsComponent } from './simple-tips/simple-tips.component';
import { TipsComponent } from './tips/tips.component';
import { WeightLossComponent } from './weight-loss/weight-loss.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    BeHealthyComponent,
    BeMindfulComponent,
    FooterComponent,
    IntroComponent,
    MoreHelthyComponent,
    SeasonalFruitsComponent,
    SimpleTipsComponent,
    TipsComponent,
    WeightLossComponent,
  ],
  exports:[
    HomeComponent,
    AboutUsComponent,
    BeHealthyComponent,
    BeMindfulComponent,
    FooterComponent,
    IntroComponent,
    MoreHelthyComponent,
    SeasonalFruitsComponent,
    SimpleTipsComponent,
    TipsComponent,
    WeightLossComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}

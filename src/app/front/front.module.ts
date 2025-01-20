import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { ForthComponent } from './forth/forth.component';
import { ThirdComponent } from './third/third.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { EightComponent } from './eight/eight.component';
import { NineComponent } from './nine/nine.component';
import { TenComponent } from './ten/ten.component';
import { ElevenComponent } from './eleven/eleven.component';
import { Second22Component } from './second22/second22.component';
import { SeventhComponent } from './seventh/seventh.component';
import { CrouselComponent } from './eight/crousel/crousel.component';
import { Eight222Component } from './eight222/eight222.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    FrontComponent,
    ForthComponent,
    ThirdComponent,
    FifthComponent,
    SixthComponent,
    EightComponent,
    NineComponent,
    TenComponent,
    ElevenComponent,
    Second22Component,
    SeventhComponent,
    CrouselComponent,
    Eight222Component,
    FirstComponent,
  
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    

  ]
})
export class FrontModule { }

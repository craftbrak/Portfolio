import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from "./main-page/home/home.component";
import { MainTableComponent } from "./main-page/main-table/main-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TypeSafeMatCellDef } from './directive/type-safe-mat-cell-def.directive';
import { CategoryPageComponent } from './cathegory-page/category-page.component';
import { CategoryTableComponent } from "./cathegory-page/category-table/category-table.component";
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire/compat";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainTableComponent,
    TypeSafeMatCellDef,
    CategoryPageComponent,
    CategoryTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

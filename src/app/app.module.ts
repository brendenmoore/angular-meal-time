import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DaySelectComponent } from './day-select/day-select.component';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';
import { DayMenuComponent } from './day-menu/day-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent, RecipeListComponent, RecipeDetailComponent, MenuComponent, ShoppingListComponent, DaySelectComponent, ClickStopPropagationDirective, DayMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,  
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBAnjddDgi69in-aGJ5Yi1W4h5qobTr2rE",
      authDomain: "angular-meal-time.firebaseapp.com",
      databaseURL: "https://angular-meal-time.firebaseio.com",
      projectId: "angular-meal-time",
      storageBucket: "angular-meal-time.appspot.com",
      messagingSenderId: "493166147925",
      appId: "1:493166147925:web:0a87ad55ab264c22e5d7dc"
    }), 
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

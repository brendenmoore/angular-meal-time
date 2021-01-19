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
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';
import { DayMenuComponent } from './day-menu/day-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { NewRecipeComponent } from './new-recipe/new-recipe.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { GenerateShoppingListComponent } from './generate-shopping-list/generate-shopping-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [AppComponent, RecipeListComponent, RecipeDetailComponent, MenuComponent, ShoppingListComponent, ClickStopPropagationDirective, DayMenuComponent, HeaderComponent, NewRecipeComponent, GenerateShoppingListComponent],
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
    DragDropModule,
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RecipeListComponent, NewRecipeComponent, GenerateShoppingListComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipeListComponent } from './RecipeBook/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './RecipeBook/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './RecipeBook/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './ShoppingList/shopping-edit/shopping-edit.component';
import { RecipeBookComponent } from './RecipeBook/recipe-book.component';
import { ShoppingListComponent } from './ShoppingList/shopping-list.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    RecipeBookComponent,
    ShoppingListComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

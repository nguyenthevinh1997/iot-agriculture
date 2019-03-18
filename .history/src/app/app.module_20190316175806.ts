import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopSidebarComponent } from "./top-sidebar/top-sidebar.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs';
import {
  MatSelectModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSliderModule,
  MatCheckboxModule,
  MatChipsModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatExpansionModule
} from "@angular/material";
import { HeaderComponent } from './header/header.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';

@NgModule({
  declarations: [AppComponent, TopSidebarComponent, HeaderComponent, PostCreateComponent, PostListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSliderModule,
    MatCheckboxModule,
    MatChipsModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

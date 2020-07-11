import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewRecipeComponent>) { }

  ngOnInit() {
  }

  onSave(): void {
    this.dialogRef.close();
  }

}

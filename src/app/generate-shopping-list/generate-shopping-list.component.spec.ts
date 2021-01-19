import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateShoppingListComponent } from './generate-shopping-list.component';

describe('GenerateShoppingListComponent', () => {
  let component: GenerateShoppingListComponent;
  let fixture: ComponentFixture<GenerateShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

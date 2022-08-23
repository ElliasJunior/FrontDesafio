import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCheckComponent } from './users-check.component';

describe('UsersCheckComponent', () => {
  let component: UsersCheckComponent;
  let fixture: ComponentFixture<UsersCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

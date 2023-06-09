import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvComponent } from './conv.component';



describe('ConvComponent', () => {
  let component: ConvComponent;
  let fixture: ComponentFixture<ConvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

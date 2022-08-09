import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    console.log("AppComponent - beforeEach");
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  afterEach(async () => {
    console.log("AppComponent - afterEach");
  });

  it('should create the app', () => {
    console.log("###AppComponent - Test Case 1");
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BookApp'`, () => {
    console.log("###AppComponent - Test Case 2");
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BookApp');
  });

  it('should render title', () => {
    console.log("###AppComponent - Test Case 3");
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page-title')?.textContent).toContain('BookApp');
  });
});

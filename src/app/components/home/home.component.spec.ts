import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import {By} from '@angular/platform-browser';

import { HomeComponent } from './home.component';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    // create a test module for testing
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
       // HighlightDirective
      ],
       imports: [SharedModule, 
                  RouterModule.forRoot([])
      ]
    })
    .compileComponents(); // doing jit/aot, compile html to js
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    
    // run the dirty check and render the html
    // this is mandatory in angular test
    // we don't have zone.js, human to click, detect events since this is automated 

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    // component state testing
    expect(component.counter).toBe(0)

    component.increment();
    expect(component.counter).toBe(1)


    component.incrementBy(5);
    expect(component.counter).toBe(6)
  });

  it("template testing ", () => {
    // nativeElement - real dom
    const html: HTMLElement = fixture.nativeElement;
    expect(html.textContent).toContain("Home")

    // pick specific element and do test
    const h2Title = html.querySelector('h2');
    expect(h2Title.textContent).toEqual("Home")

    // when more tags of similar type found, it returns the first one
    //const p = html.querySelector("p")
    //expect(p.textContent).toEqual("Home")

    let paras = html.querySelectorAll("p")
    expect(paras[1].textContent).toEqual(" Counter => 0 ")

    component.increment();
    // expecting counter to be 1
    // force angular to do dirty check and apply the changes on  UI
    fixture.detectChanges();

    paras = html.querySelectorAll("p")

    expect(paras[1].textContent).toEqual(" Counter => 1 ")


    // FIXME:
    // const fixtureDebugElement = fixture.debugElement;
    // const pDummy = fixtureDebugElement.query(By.css("[dummy]"))
    // const p: HTMLElement = pDummy.nativeElement;
    // expect(p.textContent).toEqual("Welcome 5")

  })
});

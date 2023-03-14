import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatgptSingleComponent } from './chatgpt-single.component';

describe('ChatgptSingleComponent', () => {
  let component: ChatgptSingleComponent;
  let fixture: ComponentFixture<ChatgptSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatgptSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatgptSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

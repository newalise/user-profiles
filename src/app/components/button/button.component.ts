import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input()
  public text: string;

  @Input()
  public disabled: boolean = true;

  @Output()
  public onButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClickButton() {
    this.onButtonClick.emit();
  }

}

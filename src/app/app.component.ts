import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import {MatSlideToggle, MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';
  title = 'marvel-heros';
  isDarkMode=false;
constructor(
  private overlay: OverlayContainer,
  // private overlay: FormControl
  ) { }
ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
      this.isDarkMode = !this.isDarkMode;
    });
}
  
    onChange(ob: MatSlideToggleChange) {
      console.log(ob.checked);
      let matSlideToggle: MatSlideToggle = ob.source;	
      console.log(matSlideToggle.color);

      const darkClassName = 'darkMode';
      this.className = ob.checked ? darkClassName : '';
      if (ob.checked) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    } 

}

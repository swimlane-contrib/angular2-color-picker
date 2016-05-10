# ct-angular2-color-picker

Angular 2 Color Picker Directive/Component with no dependencies required.

*** Note ***
Fork of angular2-color-picker https://github.com/Alberplz/angular-colorpicker-directive

# Demo page

http://alberplz.github.io/angular2-color-picker/index.html

# Installation

```bash
npm install ct-angular2-color-picker
```

# SystemJS configuration

https://github.com/bbbenja/angular2-color-picker/examples/systemjs.config.json
```bash
// map tells the System loader where to look for things
    var map = {
        'app':                        '', // 'dist'
        'rxjs':                       '/node_modules/rxjs',
        '@angular':                   '/node_modules/@angular',
        'ct-angular2-color-picker':   '/node_modules/ct-angular2-color-picker' <-- Add this line
    };
```

# Usage
* Use it in your HTML elements, for example:
```html
<input [(colorPicker)]="color" [style.background]="color" [value]="color"/>
```
* Add ColorPickerService in your main.ts:
```javascript
import {ColorPickerService} from 'ct-angular2-color-picker/component'
bootstrap(AppComponent, [ColorPickerService]);
```
* Include ColorPickerDirective in your component, and set color the variable:
```javascript
import {Component} from '@angular/core';
import {ColorPickerDirective} from 'ct-angular2-color-picker/component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ColorPickerDirective]
})

export class AppComponent {
    private color: string = "#127bdc";
}
```

#Options
Default option is the first item.
```html
[cpOutputFormat]="'hex', 'rgba', 'hsla'"
[cpPosition]="'right', 'left', 'top', 'bottom'"
[cpPositionOffset]="'0%'"
[cpPositionRelativeToArrow]="false, true"
[cpCancelButton]="false, true"
[cpHeight]="'290px'"
[cpCancelButtonClass]="'cp-cancel-button-class'"
[cpCancelButtonText]="'Cancel'"
```

#Extra content
If you want to change precalculated images for color picker sliders, you can find a little script in this project:
https://github.com/Alberplz/angular-colorpicker-directive

#Tested in:
* Chrome
* Firefox
* Microsoft Edge
* Opera
* Safari
* Internet Explorer

#For previous version of Angular:
https://github.com/Alberplz/angular-colorpicker-directive
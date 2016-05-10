import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './src/app.component';
import {ColorPickerService} from "ct-angular2-color-picker/component";

bootstrap(AppComponent, [ColorPickerService]);
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ExampleComponent } from './components/example-component';
import { ExampleProvider } from './providers/example-provider';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        ExampleComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        ExampleComponent
    ]
})
export class IonicAcademyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicAcademyModule,
            providers: [ExampleProvider]
        };
    }
}
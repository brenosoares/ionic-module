import { NgModule } from '@angular/core';
import { ExampleComponent } from './components/example-component';
import { ExampleProvider } from './providers/example-provider';
import { IonicModule } from 'ionic-angular';
var IonicAcademyModule = /** @class */ (function () {
    function IonicAcademyModule() {
    }
    IonicAcademyModule.forRoot = function () {
        return {
            ngModule: IonicAcademyModule,
            providers: [ExampleProvider]
        };
    };
    IonicAcademyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        ExampleComponent
                    ],
                    exports: [
                        ExampleComponent
                    ]
                },] },
    ];
    return IonicAcademyModule;
}());
export { IonicAcademyModule };
//# sourceMappingURL=ionic-example.module.js.map
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var HTML_TEMPLATE = "\n<ion-header>\n  <ion-navbar color=\"primary\">\n    <ion-title>\n      Ionic Module\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n \n<div class=\"special-text\">Welcome to the special Ionic Module!</div>\n  <button ion-button full icon-left (click)=\"leavePage()\">\n    <ion-icon name=\"close\"></ion-icon>\n  Close the Page</button>\n</ion-content>\n";
var CSS_STYLE = "\n.special-text {\n    font-weight: 800;\n    font-size: 15pt;\n    text-align: center;\n    color: #0000FF;\n}\n";
var ExampleComponent = /** @class */ (function () {
    function ExampleComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ExampleComponent.prototype.leavePage = function () {
        this.navCtrl.pop();
    };
    ExampleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'example-component',
                    template: HTML_TEMPLATE,
                    styles: [CSS_STYLE]
                },] },
    ];
    /** @nocollapse */
    ExampleComponent.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return ExampleComponent;
}());
export { ExampleComponent };
//# sourceMappingURL=example-component.js.map
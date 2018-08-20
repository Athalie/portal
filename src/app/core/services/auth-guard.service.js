"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NeedAuthGuard = /** @class */ (function () {
    function NeedAuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    NeedAuthGuard.prototype.canActivate = function (route, state) {
        var redirectUrl = route['_routerState']['url'];
        if (this.userService.isLogged()) {
            return true;
        }
        this.router.navigateByUrl(this.router.createUrlTree(['/login'], {
            queryParams: {
                redirectUrl: redirectUrl
            }
        }));
        return false;
    };
    NeedAuthGuard = __decorate([
        core_1.Injectable()
    ], NeedAuthGuard);
    return NeedAuthGuard;
}());
exports.NeedAuthGuard = NeedAuthGuard;

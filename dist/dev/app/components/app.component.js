"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var navbar_component_1 = require('./navbar.component');
var toolbar_component_1 = require('./toolbar.component');
var home_component_1 = require('../../home/components/home.component');
var about_component_1 = require('../../about/components/about.component');
var name_list_service_1 = require('../../shared/services/name-list.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sd-app',
            viewProviders: [name_list_service_1.NameListService],
            moduleId: module.id,
            templateUrl: './app.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent, toolbar_component_1.ToolbarComponent]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Home', component: home_component_1.HomeComponent },
            { path: '/about', name: 'About', component: about_component_1.AboutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCwrQkFBNEIsc0NBQXNDLENBQUMsQ0FBQTtBQUNuRSxnQ0FBNkIsd0NBQXdDLENBQUMsQ0FBQTtBQUN0RSxrQ0FBOEIseUNBQXlDLENBQUMsQ0FBQTtBQWN4RTtJQUFBO0lBQTJCLENBQUM7SUFaNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLENBQUMsbUNBQWUsQ0FBQztZQUNoQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxrQ0FBZSxFQUFFLG9DQUFnQixDQUFDO1NBQ25FLENBQUM7UUFDRCxvQkFBVyxDQUFDO1lBQ1gsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFPLElBQUksRUFBRSxNQUFNLEVBQUcsU0FBUyxFQUFFLDhCQUFhLEVBQUc7WUFDNUQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7U0FDN0QsQ0FBQzs7b0JBQUE7SUFDeUIsbUJBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsb0JBQVksZUFBRyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSAnLi9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7VG9vbGJhckNvbXBvbmVudH0gZnJvbSAnLi90b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4uLy4uL2hvbWUvY29tcG9uZW50cy9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9hYm91dC9jb21wb25lbnRzL2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQge05hbWVMaXN0U2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL25hbWUtbGlzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcbiAgdmlld1Byb3ZpZGVyczogW05hbWVMaXN0U2VydmljZV0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudF1cbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgICAgICBuYW1lOiAnSG9tZScsICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgIH0sXG4gIHsgcGF0aDogJy9hYm91dCcsIG5hbWU6ICdBYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge31cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

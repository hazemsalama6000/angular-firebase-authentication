import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { chatRoutes } from "./chat.routes";

@NgModule({
imports:[RouterModule.forChild(chatRoutes)]
})

export class chatRoutingModule {

}


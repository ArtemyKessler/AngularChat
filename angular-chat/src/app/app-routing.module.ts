import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessagesComponent } from "../app/messages/messages.component";

const routes: Routes = [
  { path: "dialogue", component: MessagesComponent },
  { path: "", redirectTo: "dialogue", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

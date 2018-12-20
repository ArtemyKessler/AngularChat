import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-chat";
  dialogueId: number = 4;

  onChangeDialogueId(id: any): void {
    this.dialogueId = id;
  }
}

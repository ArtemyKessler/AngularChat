import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  Input
} from "@angular/core";
import { MessagesService } from "../messages.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor(private messageService: MessagesService) {}
  messageToSend: string;
  @Input() dialogueId: number;

  ngOnInit() {
    addEventListener("keydown", this.checkBeforeSend);
  }

  checkBeforeSend = e => {
    switch (e.keyCode) {
      case 13:
        this.sendMessage();
        break;

      default:
        break;
    }
  };

  sendMessage() {
    if (this.messageToSend !== "") {
      const input = document.getElementById("input");
      let currentCols = parseInt(input.getAttribute("cols"));
      this.messageService.sendMessage(
        { message: this.messageToSend, userId: 0 },
        this.dialogueId
      );
      this.messageToSend = "";
    }
  }

  symbolAddCheck(event: any) {
    let symbols = event.target.value.length;

    let currentCols: number;

    let input = event.target;
    currentCols = input.getAttribute("cols");

    switch (true) {
      case symbols <= currentCols * 3:
        input.setAttribute("rows", 3);
        break;
      case symbols <= currentCols * 4:
        input.setAttribute("rows", 4);
        break;
      case symbols <= currentCols * 5:
        input.setAttribute("rows", 5);
        break;
      case symbols <= currentCols * 6:
        input.setAttribute("rows", 6);
        break;
    }
  }
}

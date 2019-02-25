import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  Input
} from "@angular/core";
import { MessagesService } from "../messages.service";
import { checkAndUpdateBinding } from "@angular/core/src/view/util";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor(private messageService: MessagesService) {}
  messageToSend: string;
  pictureSrc = "";

  @Input() dialogueId: number;

  previewFile() {
    const preview = document.querySelector("#imagePreview") as HTMLImageElement;
    const fileInput = document.querySelector(
      "#picture-input"
    ) as HTMLInputElement;
    const file = fileInput.files[0];
    const div = document.querySelector("#fileNotPicked") as HTMLDivElement;
    const reader = new FileReader();

    reader.onloadend = () => {
      preview.src = reader.result.toString();
      preview.style.display = "block";
      div.style.display = "none";
      this.pictureSrc = reader.result.toString();
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
      preview.style.display = "none";
      div.style.display = "block";
      this.pictureSrc = "";
    }
  }

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
    if (
      (this.messageToSend !== "" &&
        this.messageToSend !== undefined &&
        this.messageToSend !== "\n") ||
      this.pictureSrc !== ""
    ) {
      const checkMessage = this.messageToSend.replace(/ /g, "");
      if (checkMessage.length > 0) {
        this.messageService.sendMessage(
          {
            message: this.messageToSend,
            userId: 0,
            withUserPic: false,
            timestamp: new Date(),
            picSrc: this.pictureSrc
          },
          this.dialogueId
        );
      }
      this.messageToSend = undefined;
    }
  }

  symbolAddCheck(event: any) {
    let symbols = event.target.value.length;

    let currentCols: number;

    let input = event.target;
    currentCols = input.getAttribute("cols");

    this.colsCalc(symbols, currentCols, input);
  }

  colsCalc(symbols: number, currentCols: number, input: Element) {
    switch (true) {
      case symbols <= currentCols * 3:
        input.setAttribute("rows", "3");
        break;
      case symbols <= currentCols * 4:
        input.setAttribute("rows", "4");
        break;
      case symbols <= currentCols * 5:
        input.setAttribute("rows", "5");
        break;
      case symbols <= currentCols * 6:
        input.setAttribute("rows", "6");
        break;
    }
  }
}

import Message from "./Message";
import Dialogue from "./Dialogue";

export var DIALOGUES: Dialogue[] = [
  {
    messages: [
      {
        message: "Зачем вы это сделали",
        userId: 1,
        withUserPic: true,
        timestamp: new Date(),
        picSrc: ""
      },
      {
        message: "Наверное",
        userId: 1,
        withUserPic: false,
        timestamp: new Date(),
        picSrc:
          "https://pp.userapi.com/c622831/v622831106/45bc2/fAMzhiObIfA.jpg"
      }
    ],
    dialogueId: 1
  },
  {
    messages: [
      {
        message: "Написал новый рассказ",
        userId: 2,
        withUserPic: true,
        timestamp: new Date(),
        picSrc: ""
      },
      {
        message: "Отличный",
        userId: 2,
        withUserPic: false,
        timestamp: new Date(),
        picSrc: ""
      },
      {
        message: "Прочти на днях",
        userId: 2,
        withUserPic: false,
        timestamp: new Date(),
        picSrc: ""
      }
    ],
    dialogueId: 2
  },
  {
    messages: [
      {
        message: "Завтра выходит мой репортаж",
        userId: 3,
        withUserPic: true,
        timestamp: new Date(),
        picSrc: ""
      },
      {
        message: "Спасибо за участие",
        userId: 3,
        withUserPic: false,
        timestamp: new Date(),
        picSrc: ""
      },
      {
        message: "Еще увидимся",
        userId: 3,
        withUserPic: false,
        timestamp: new Date(),
        picSrc: ""
      }
    ],
    dialogueId: 3
  },
  {
    messages: [
      {
        message: "Ты ничего не понимаешь в литературе",
        userId: 4,
        withUserPic: true,
        timestamp: new Date(),
        picSrc: ""
      },
      {
        message: "Творчество должно быть свободным",
        userId: 4,
        withUserPic: false,
        timestamp: new Date(),
        picSrc: ""
      },
      {
        message: "Ты в рамках",
        userId: 4,
        withUserPic: false,
        timestamp: new Date(),
        picSrc: ""
      }
    ],
    dialogueId: 4
  },
  {
    messages: [
      {
        message: "Пишу сообщения себе",
        userId: 0,
        withUserPic: true,
        timestamp: new Date(),
        picSrc: ""
      },
      {
        message: "Например чтобы не потерять важные ссылки",
        userId: 0,
        withUserPic: false,
        timestamp: new Date(),
        picSrc: ""
      },
      {
        message:
          "https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes",
        userId: 0,
        withUserPic: false,
        timestamp: new Date(),
        picSrc: ""
      }
    ],
    dialogueId: 0
  }
];

import Message from "./Message";

class Dialogue {
  messages: Message[];
  user: number;
}

var Dialogues: Dialogue[] = [
  {
    messages: [
      { message: "Зачем вы это сделали", userId: 1 },
      { message: "Классно работает", userId: 1 },
      { message: "Наверное", userId: 1 }
    ],
    user: 1
  },
  {
    messages: [
      { message: "Написал новый рассказ", userId: 1 },
      { message: "Отличный", userId: 1 },
      { message: "Прочти на днях", userId: 1 }
    ],
    user: 2
  },
  {
    messages: [
      { message: "Завтра выходит мой репортаж", userId: 1 },
      { message: "Спасибо за участие", userId: 1 },
      { message: "Еще увидимся", userId: 1 }
    ],
    user: 2
  }
];

export var MESSAGES: Message[] = [
  { message: "Зачем вы это сделали", userId: 1 },
  { message: "Классно работает", userId: 1 },
  { message: "Наверное", userId: 1 }
];

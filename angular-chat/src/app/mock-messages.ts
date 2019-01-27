import Message from "./Message";
import Dialogue from "./Dialogue";

export var DIALOGUES: Dialogue[] = [
  {
    messages: [
      { message: "Зачем вы это сделали", userId: 1 },
      { message: "Классно работает", userId: 1 },
      { message: "Наверное", userId: 1 },
      { message: "Зачем вы это сделали", userId: 1 },
      { message: "Классно работает", userId: 1 },
      { message: "Наверное", userId: 1 },
      { message: "Зачем вы это сделали", userId: 1 },
      { message: "Классно работает", userId: 1 },
      { message: "Наверное", userId: 1 },
      { message: "Зачем вы это сделали", userId: 1 },
      { message: "Классно работает", userId: 1 },
      { message: "Наверное", userId: 1 },
      { message: "Зачем вы это сделали", userId: 1 },
      { message: "Классно работает", userId: 1 },
      { message: "Наверное", userId: 1 }
    ],
    dialogueId: 1
  },
  {
    messages: [
      { message: "Написал новый рассказ", userId: 2 },
      { message: "Отличный", userId: 2 },
      { message: "Прочти на днях", userId: 2 }
    ],
    dialogueId: 2
  },
  {
    messages: [
      { message: "Завтра выходит мой репортаж", userId: 3 },
      { message: "Спасибо за участие", userId: 3 },
      { message: "Еще увидимся", userId: 3 }
    ],
    dialogueId: 3
  },
  {
    messages: [
      { message: "Ты ничего не понимаешь в литературе", userId: 4 },
      { message: "Творчество должно быть свободным", userId: 4 },
      { message: "Ты в рамках", userId: 4 }
    ],
    dialogueId: 4
  },
  {
    messages: [
      { message: "Пишу сообщения себе", userId: 0 },
      { message: "Например чтобы не потерять важные ссылки", userId: 0 },
      {
        message:
          "https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes",
        userId: 0
      }
    ],
    dialogueId: 0
  }
];

export var MESSAGES: Message[] = [
  { message: "Зачем вы это сделали", userId: 1 },
  { message: "Классно работает", userId: 1 },
  { message: "Наверное", userId: 1 }
];

import { Question } from '../models/Question';

export const questionsList: Question[] = [
  {
    id: 0,
    questionText: 'What operating system do you use to build the application?',
    options: [
      { text: 'Windows' },
      { text: 'Linux' },
      { text: 'Macintosh OSX' },
    ],
    optval: [
      { text: 10 },
      { text: 20 },
      { text: 30 }
    ],
    point: 0,
  }, {
    id: 1,
    questionText: 'What operating system do you use to build the application?',
    options: [
      { text: 'Windows' },
      { text: 'Linux' },
      { text: 'Macintosh OSX' },
    ],
    optval: [
      { text: 10 },
      { text: 20 },
      { text: 30 }
    ],
    point: 0,
  },
  {
    id: 2,
    questionText: 'What language or libraries(s) are you currently using for backend framework?',
    options: [
      { text: 'Java' },
      { text: 'Python' },
      { text: 'Go' },
      { text: 'Scala' },
      { text: 'C' },
      { text: 'NodeJs' }, { text: 'ExpressJs' },

    ],
    optval: [
      { text: 10 },
      { text: 20 },
      { text: 30 },
      { text: 10 },
      { text: 20 },
      { text: 30 },
      { text: 30 }
    ],
    point: 0,
  },
  // {
  //   id: 3,
  //   questionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
  //   options: [
  //     { text: 'elit consectetur' },
  //     { text: 'elit' },
  //     { text: 'adipiscing' },
  //   ],
  //   optval: [
  //     { text: 10 },
  //     { text: 20 },
  //     { text: 30 }
  //   ],
  //   point: 0,
  // },
  // {
  //   id: 4,
  //   questionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
  //   options: [
  //     { text: 'consectetur  elit' },
  //     { text: 'adipiscing' },
  //     { text: 'elit' },
  //   ],
  //   optval: [
  //     { text: 10 },
  //     { text: 20 },
  //     { text: 30 }
  //   ],
  //   point: 0,
  // },
];

import { Question } from './question.model';

export const MockQuestions: Question[] = [
  { questionId: 1, text: 'Mock Question 1', type: 'Behavioral', level: 'Junior', isActive: true },
  { questionId: 2, text: 'Mock Question 2', type: 'Behavioral', level: 'Mid', isActive: true },
  { questionId: 3, text: 'Mock Question 3', type: 'Technical', level: 'Sr', isActive: true }
];

// const types = ['Behavioral', 'Technical'];
// const levels = ['Junior', 'Mid', 'Sr', 'C-Level'];

// for (let i = 0; i < 20; i++) {
//   MockQuestions.push({
//     id: i + 1,
//     text: 'Mock Question ' + (i + 1),
//     description: '',
//     type: types[Math.floor(Math.random() * 2)],
//     level: levels[Math.floor(Math.random() * 4)],
//     isActive: true,
//   });
// }


// import { Question } from './question.model';

// export const MockQuestions = new Array<Question>();

// const types = ['Behavioral', 'Technical'];
// const levels = ['Junior', 'Mid', 'Sr', 'C-Level'];

// for (let i = 0; i < 20; i++) {
//   MockQuestions.push({
//     id: i + 1,
//     text: 'Mock Question ' + (i + 1),
//     description: '',
//     type: types[Math.floor(Math.random() * 2)],
//     level: levels[Math.floor(Math.random() * 4)],
//     isActive: true,
//   });
// }

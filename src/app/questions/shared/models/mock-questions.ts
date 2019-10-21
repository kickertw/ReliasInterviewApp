import { Question } from './question.model';

export const MockQuestions = new Array<Question>();

const types = ['Behavioral', 'Technical'];
const levels = ['Junior', 'Mid', 'Sr', 'C-Level'];

for (let i = 0; i < 20; i++) {
  MockQuestions.push({
    id: i,
    text: 'Mock Question ' + (i + 1),
    description: '',
    type: types[Math.floor(Math.random() * 2)],
    level: levels[Math.floor(Math.random() * 4)],
    isActive: true,
  });
}

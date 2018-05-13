const people = [
  {
    id: 0,
    name: 'Ankur',
    role: 'CEO'
  },
  {
    id: 1,
    name: 'Aliya',
    role: 'Developer'
  },
  {
    id: 2,
    name: 'Bassam',
    role: 'Developer'
  }
];

module.exports = {
  get: jest.fn(() => Promise.resolve({ data: people }))
};

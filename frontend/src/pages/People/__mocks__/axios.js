const fixture = [
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
  fixture,
  get: jest.fn(() => Promise.resolve({ data: fixture }))
};

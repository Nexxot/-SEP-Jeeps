// __mocks__/d3Mock.js
const d3 = jest.createMockFromModule('d3');

d3.select = jest.fn();
// Add other d3 methods you use in your code

export default d3;

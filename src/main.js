import createElement from './vdom/createElement'
// console.log("hello world")
// const vApp = {
//  tagName : 'div',
//  attrs:{
//   id:'app',
//  },
//  children:[
//   'hello world',
//  ],
// }
const vApp = createElement('div', {
 attrs:{
  id:'app',
 },
 children:[],
});
console.log(vApp)

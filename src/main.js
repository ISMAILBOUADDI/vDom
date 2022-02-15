import createElement from './vdom/createElement'
import render from './vdom/render'
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
const $app= render(vApp);

console.log($app)

import { replaceStr } from './util';

function templateReducer(state, action) {
  switch (action.type) {
    case 'INIT_DATA':
      return action.text
        .split(' ')
        .reduce((acc, item) => [...acc, { text: item, highlight: false }], []);
    case 'REPLACE':
      return replaceStr(state, action.replaceBy);
    case 'HIGHLIGHT':
      return state.map((item, i) => {
        if (item.text === action.text) {
          item.highlight = true;
        }
        return item;
      });
    default:
      return state;
  }
}

export default templateReducer;

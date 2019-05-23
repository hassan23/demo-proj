function replaceStr(str, by) {
  return str.map(item => {
    if (item.highlight) {
      item.text = by;
      item.highlight = false;
    }
    return item;
  });
}

const fetchRandomText = async dispatch => {
  const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
  const data = await res.json();
  const text = data.join(',');
  dispatch({ type: 'INIT_DATA', text: text });
};
export { replaceStr, fetchRandomText };

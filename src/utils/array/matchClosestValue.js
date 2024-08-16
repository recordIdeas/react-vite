export function matchClosestValue(arr, query) {
  return arr.reduce((prevIcon, icon) => {
    if (prevIcon.text == query) {
      return prevIcon;
    } else if (icon.text == query) {
      return icon;
    } else if (prevIcon.text.indexOf(query) != -1) {
      return prevIcon;
    } else if (icon.text.indexOf(query) != -1) {
      return icon;
    } else {
      return prevIcon;
    }
  }, arr[0]);
}
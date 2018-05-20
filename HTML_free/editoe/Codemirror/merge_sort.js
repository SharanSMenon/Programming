function mergeSort(list) {
  mergeSort2(list,0,list.length-1)
}
function merge(list,first,middle,last) {
  var left = [];
  var right = [];
  for (var i = 0; i < list.length-1; i++) {
    left.push(list[i])
    right.push(list[list.length-i])
  }
  left.push(Infinity);
  right.push(Infinity);
  var a = 0;
  var b = 0;
  for (var i = 0; i < last+1; i++) {
    if (left[a] < right[b]) {
      list[i] = left[a]
      a++;
    } else {
      list[i] = right[b]
      b++;
    }
  }
}
function mergeSort2(list,first,last) {
  if (first < last) {
    var middle = (first+last)/2
    mergeSort2(list, first, middle)
    mergeSort2(list, middle+1, last)
  }
  merge(list, first, middle,last)
}
lis = [5,9,1,2,4,8,6,3,7]
console.log(mergeSort(lis));

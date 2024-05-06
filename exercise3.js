/* 3.  Bài tập về mảng:
Khai báo một mảng gồm 5 phần tử với cùng kiểu dữ liệu. 
Truy xuất từng phần tử và gán cho nó một giá trị mới 
in giá trị mà phần tử đó đang giữ ra màn hình console.
*/

let array = [1, 8, 82, 96, 0];

array.forEach((item, index, arr) => {
  arr[index] *= 10;
  console.log(`new value of item${index}: `, arr[index]);
});

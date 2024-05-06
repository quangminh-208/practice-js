// 5.  Bài tập về luống điều khiển
/* if-else: khai báo 2 biến, sử dụng toán tử so sánh trên 2 biến này trong if-else 
để điều hướng logic in ra màn hình console kết quả của phép so sánh. */

let number1 = 256;
let number2 = 125;
if (number1 < number2) console.log(true);
else console.log(false);

/* for: khai báo một mảng gồm 5 phần tử, 
thay đổi giá trị của toàn bộ 5 phần tử đó bằng cách sử dụng vòng for */

let array = [1, 2, 5, 9, 0];
for (let i = 0; i < array.length; i++) {
    array[i] += 10
}


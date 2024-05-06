// 5.  Bài tập về luống điều khiển
/* if-else: khai báo 2 biến, sử dụng toán tử so sánh trên 2 biến này trong if-else 
để điều hướng logic in ra màn hình console kết quả của phép so sánh. */

let integerNumber1 = 256;
let integerNumber2 = 125;
if (integerNumber1 < integerNumber2) console.log(true);
else console.log(false);

/* for: khai báo một mảng gồm 5 phần tử, 
thay đổi giá trị của toàn bộ 5 phần tử đó bằng cách sử dụng vòng for */

let numberList = [1, 2, 5, 9, 0];
for (let i = 0; i < numberList.length; i++) {
    numberList[i] += 10
}


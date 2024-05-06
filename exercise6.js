/* 6.  Bài tập về hàm
Giai đoạn 1: Khai báo 15 biến có kiểu dữ liệu là integer. 
    Sau mỗi biến khai báo thì làm các việc sau: cộng giá trị nó với 5 và lưu lại vào biến đó, 
    nhân với 5 và lưu lại vào biến đó, trừ đi 15 và lưu lại vào biến đó, in biến đó ra console.
Giai đoạn 2: Sử dụng khái niệm hàm để rút ngắn code trên và vẫn được kết quả in ra console như giai đoạn 1.
 */

// let number1 = 123;
// number1 += 5;
// number1 *= 5;
// number1 -= 15;
// console.log(number1);
// let number2 = 68;
// number2 += 5;
// number2 *= 5;
// number2 -= 15;
// console.log(number2);
// let number3 = 88;
// number3 += 5;
// number3 *= 5;
// number3 -= 15;
// console.log(number3);
// let number4 = 64;
// number4 += 5;
// number4 *= 5;
// number4 -= 15;
// console.log(number4);
// let number5 = 58;
// number5 += 5;
// number5 *= 5;
// number5 -= 15;
// console.log(number5);
// let number6 = 56;
// number6 += 5;
// number6 *= 5;
// number6 -= 15;
// console.log(number6);
// let number7 = 35;
// number7 += 5;
// number7 *= 5;
// number7 -= 15;
// console.log(number7);
// let number8 = 78;
// number8 += 5;
// number8 *= 5;
// number8 -= 15;
// console.log(number8);
// let number9 = 58;
// number9 += 5;
// number9 *= 5;
// number9 -= 15;
// console.log(number9);
// let number10 = 55;
// number10 += 5;
// number10 *= 5;
// number10 -= 15;
// console.log(number10);
// let number11 = 35;
// number11 += 5;
// number11 *= 5;
// number11 -= 15;
// console.log(number11);
// let number12 = 45;
// number12 += 5;
// number12 *= 5;
// number12 -= 15;
// console.log(number12);
// let number13 = 78;
// number13 += 5;
// number13 *= 5;
// number13 -= 15;
// console.log(number13);
// let number14 = 68;
// number14 += 5;
// number14 *= 5;
// number14 -= 15;
// console.log(number14);
// let number15 = 81;
// number15 += 5;
// number15 *= 5;
// number15 -= 15;
// console.log(number15);

function createNumber(count) {
  for (let i = 0; i < count; i++) {
    let number = Math.floor(Math.random() * 1000);
    console.log(number);
    number += 5;
    number *= 5;
    number -= 15;
    console.log(number);
  }
}

createNumber(15);

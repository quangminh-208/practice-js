/* 6.  Bài tập về hàm
Giai đoạn 1: Khai báo 15 biến có kiểu dữ liệu là integer. 
    Sau mỗi biến khai báo thì làm các việc sau: cộng giá trị nó với 5 và lưu lại vào biến đó, 
    nhân với 5 và lưu lại vào biến đó, trừ đi 15 và lưu lại vào biến đó, in biến đó ra console.
Giai đoạn 2: Sử dụng khái niệm hàm để rút ngắn code trên và vẫn được kết quả in ra console như giai đoạn 1.
 */


// let integerNumber1 = 123;
// integerNumber1 += 5;
// integerNumber1 *= 5;
// integerNumber1 -= 15;
// console.log(integerNumber1);

// let integerNumber2 = 68;
// integerNumber2 += 5;
// integerNumber2 *= 5;
// integerNumber2 -= 15;
// console.log(integerNumber2);

// let integerNumber3 = 88;
// integerNumber3 += 5;
// integerNumber3 *= 5;
// integerNumber3 -= 15;
// console.log(integerNumber3);

// let integerNumber4 = 64;
// integerNumber4 += 5;
// integerNumber4 *= 5;
// integerNumber4 -= 15;
// console.log(integerNumber4);

// let integerNumber5 = 58;
// integerNumber5 += 5;
// integerNumber5 *= 5;
// integerNumber5 -= 15;
// console.log(integerNumber5);

// let integerNumber6 = 56;
// integerNumber6 += 5;
// integerNumber6 *= 5;
// integerNumber6 -= 15;
// console.log(integerNumber6);

// let integerNumber7 = 35;
// integerNumber7 += 5;
// integerNumber7 *= 5;
// integerNumber7 -= 15;
// console.log(integerNumber7);

// let integerNumber8 = 78;
// integerNumber8 += 5;
// integerNumber8 *= 5;
// integerNumber8 -= 15;
// console.log(integerNumber8);

// let integerNumber9 = 58;
// integerNumber9 += 5;
// integerNumber9 *= 5;
// integerNumber9 -= 15;
// console.log(integerNumber9);

// let integerNumber10 = 55;
// integerNumber10 += 5;
// integerNumber10 *= 5;
// integerNumber10 -= 15;
// console.log(integerNumber10);

// let integerNumber11 = 35;
// integerNumber11 += 5;
// integerNumber11 *= 5;
// integerNumber11 -= 15;
// console.log(integerNumber11);

// let integerNumber12 = 45;
// integerNumber12 += 5;
// integerNumber12 *= 5;
// integerNumber12 -= 15;
// console.log(integerNumber12);

// let integerNumber13 = 78;
// integerNumber13 += 5;
// integerNumber13 *= 5;
// integerNumber13 -= 15;
// console.log(integerNumber13);

// let integerNumber14 = 68;
// integerNumber14 += 5;
// integerNumber14 *= 5;
// integerNumber14 -= 15;
// console.log(integerNumber14);

// let integerNumber15 = 81;
// integerNumber15 += 5;
// integerNumber15 *= 5;
// integerNumber15 -= 15;
// console.log(integerNumber15);

function createIntegerNumber(count) {
  for (let i = 0; i < count; i++) {
    let integerNumber = Math.floor(Math.random() * 1000);
    console.log(integerNumber);
    integerNumber += 5;
    integerNumber *= 5;
    integerNumber -= 15;
    console.log(integerNumber);
  }
}

createIntegerNumber(15);

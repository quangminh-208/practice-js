/* 7.  Bài tập về object (JS)
BT1: Khai báo một object, object này chứa 4 thuộc tính khác nhau là : name, age, sex, phoneNumber.
-  In thông tin của toàn bộ các thuộc tính của object này ra console.
-  Thay đổi thông tin của mỗi thuộc tính sang giá trị khác và in ra console.
-  Tạo một hàm trong object -> hàm này sẽ gọi là method. method này sẽ có nhiệm vụ là in toàn bộ các thông tin của object ra console.
-  Tạo một method của object, nó sẽ khiến thuộc tính age của object cộng thêm số tuổi mà được truyền vào parameter của methid

Khai báo 5 biến là 5 object có các thuộc tính như BT1, kiểm tra từng biến xem có biến nào có name là “abc” thì đổi lại thành “xyz”.
Khai báo một mảng 5 phần tử, với mỗi phần tử là một object đã khai báo ở trên.
Tìm phần tử trong mảng có age lớn hơn 10 thì đổi name của nó thành “tre-vi-thanh-nien”
Tăng số tuổi cho 4 người đầu tiên thêm 10.

Làm đi làm lại số bài tập này đến khi thuộc, làm đi làm lại khoảng 10-20 lượt cho quen với syntax và ghi nhớ cách hoạt động của chương trình
 */

let person0 = {
  name: null,
  age: null,
  sex: null,
  phoneNumber: null,
};

person0.name = "Minh";
person0.age = 22;
person0.sex = "Male";
person0.phoneNumber = "0123456789";

person0.getInfo = function () {
  console.table(person0);
  // console.log(
  //   "Person0 information: ",
  //   this.name,
  //   "-",
  //   this.age,
  //   "-",
  //   this.sex,
  //   "-",
  //   this.phoneNumber
  // );
};

person0.addAge = function (numb) {
  this.age += numb;
};

function person(name, age, sex, phoneNumber) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.phoneNumber = phoneNumber;
  getInfo = function () {
    console.table(person0);
  };

  addAge = function (numb) {
    this.age += numb;
  };
}

let person1 = new person("Hoang", 26, "Male", "0568358259");
let person2 = new person("Trang", 21, "Female", "099358259");
let person3 = new person("Jonh", 30, "Male", "0772258259");
let person4 = new person("abc", 42, "Male", "0344358259");
let person5 = new person("Katty", 25, "Female", "0877358259");

let checkName = (person) => {
  if (!person) {
    console.log("Object does not exist");
  } else {
    if (!person.name) {
      console.log("Name of person is null");
    } else if (person.name === "abc") {
      person.name = "xyz";
    }
  }
};

checkName(person1);
checkName(person2);
checkName(person3);
checkName(person4);
checkName(person5);

let olo;
checkName(olo);

let arrPeople = [person1, person2, person3, person4, person5];
console.log("arrPeople:", arrPeople);

arrPeople.forEach((item, index) => {
  if (item.age > 10) {
    item.name = "tre-vi-thanh-nien";
  }
  if (index < 4) {
    item.age += 10;
  }
});

console.log("===> After all changes, arrPeople: ", arrPeople);

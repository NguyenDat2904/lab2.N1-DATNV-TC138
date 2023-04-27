// input: money, STT , So luong
// output: product, Số tiền còn lại, Tiếp tục mua không, Đủ tiền mua không
// fix loi mua lan 2- 3 con 1 -> 6 van chay.
// Check đủ tiền mua không?
/*
- pepsi : 2$,
- cocacola : 2$
- revine : 1$
- nutri boost : 2$
- dr.thanh : 1$
- Khong Do : 3$

*/
function autoMachine(money, numberOfproducts, number) {
  switch (numberOfproducts) {
    case 1:
      console.log("Bạn đã chọn mua Pepsi");
      return money - 2 * number;
    case 2:
      console.log("Bạn đã chọn mua Cocacola");
      return money - 2 * number;
    case 3:
      console.log("Bạn đã chọn mua Revine");
      return money - 1 * number;
    case 4:
      console.log("Bạn đã chọn mua Nutri boost");
      return money - 2 * number;
    case 5:
      console.log("Bạn đã chọn mua Dr.thanh");
      return money - 1 * number;
    case 6:
      console.log("Bạn đã chọn mua Khong Do");
      return money - 3 * number;
  }
}
// Validate Money
let money;
do {
  money = Number(prompt("Số tiền bạn muốn nạp: "));
  if (isNaN(money) || money <= 0) {
    alert("Bạn không được nhập số Tiền là chữ và số không hợp lệ!!");
  }
} while (isNaN(money) || money <= 0);
console.log("Số tiền bạn nạp vào: " + money + "$");
console.log("---------------------------");

let buyMore = true;
while (money > 0 && buyMore) {
  let numberOfproducts = Number(
    prompt("Vui lòng nhập STT 1 - 6 tương ứng sản phẩm: ")
  );
  // Validate STT
  if (
    isNaN(numberOfproducts) ||
    numberOfproducts <= 0 ||
    numberOfproducts > 6
  ) {
    alert("Bạn không được nhập STT không hợp lệ!!");
  } else {
    let number;
    // Validate Số lượng
    do {
      number = Number(prompt("Số lượng mua: "));
      if (isNaN(number) || number <= 0) {
        alert("Bạn không được nhập số lượng là chữ và số không hợp lệ!!");
      }
    } while (isNaN(number) || number <= 0);
    {
      money = autoMachine(money, numberOfproducts, number);
      console.log("Số lượng: " + number);
      if (money > 0) {
        console.log("Số tiền còn lại của bạn: " + money + "$");
        buyMore = confirm("Bạn có muốn mua thêm sản phẩm không?");
      } else if (money === 0) {
        console.log("Số tiền còn lại của bạn: " + money + "$");
        console.log("Vui lòng nạp tiền để trải nghiệm dịch vụ!!");
        buyMore = false;
      } else {
        console.log("Bạn không đủ tiền mua sản phẩm này!!");
        console.log("Vui lòng nạp tiền để trải nghiệm dịch vụ!!");
        buyMore = false;
      }
      console.log("---------------------------");
    }
  }
}

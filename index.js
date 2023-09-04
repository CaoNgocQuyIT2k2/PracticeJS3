

document.addEventListener("DOMContentLoaded", function() {
    const selectOption = document.getElementById("inputGroupSelect04");
    const inputDiv = document.querySelector(".row.mt-3");

    // Ẩn phần nhập giá trị mặc định
    inputDiv.style.display = "none";

    selectOption.addEventListener("change", function() {
        const selectedValue = selectOption.value;
        if (selectedValue === "6") {
            inputDiv.style.display = "block"; // Hiển thị phần nhập giá trị
        } else {
            inputDiv.style.display = "none"; // Ẩn phần nhập giá trị
        }
    });
});

var numberArr = [];
var showarr = document.querySelector(".showArr");
var inputNumber = document.getElementById("number");

function ThemSo(){
    var number = document.querySelector("#number").value * 1;
    numberArr.push(number);
    console.log("ThemSo ~ numberArr:", numberArr);
    // xóa giá trị ở ô input sau khi nhập
    document.getElementById("number").value = "";
    // Xây dựng chuỗi để hiển thị tất cả các giá trị trong mảng
    var arrContent = "Mảng đã thêm là:[ ";
    for (var i = 0; i < numberArr.length; i++) {
        arrContent += `${numberArr[i]}, `;
    }
    arrContent += "]";

    // Gán chuỗi đã xây dựng vào phần tử HTML
    showarr.innerHTML = arrContent;
}

function DuyetMang() {
  // Lấy giá trị của tùy chọn được chọn
  var select = document.getElementById("inputGroupSelect04");
  var selectedValue = select.value;

  // Lấy giá trị từ input
  var inputValue = document.getElementById("number").value;

  // Lấy div hiển thị kết quả
  var resultDiv = document.getElementById("result");

  // Thực hiện xử lý tùy thuộc vào giá trị của tùy chọn
  switch (selectedValue) {
    case "1":
      // Gọi hàm tính tổng các số dương
      var sum = TinhTongSoDuong(inputValue);
      resultDiv.innerHTML = "Tổng các số dương trong mảng là: " + sum;
      Swal.fire({
            title: `Tổng các số dương trong mảng là: ${sum }`,
        });
      break;
    case "2":
      // Gọi hàm đếm số dương
      var count = DemSoDuong(inputValue);
      resultDiv.innerHTML = "Số lượng số dương trong mảng là: " + count;
      Swal.fire({
            title: `Số lượng số dương trong mảng là: ${count }`,
        });
      break;
    case "3":
        var min = TimSoNhoNhatTrongMang(inputValue);
        resultDiv.innerHTML = "Số nhỏ nhất trong mảng là: " + min;
        Swal.fire({
            title: `Số nhỏ nhất trong mảng là: ${min }`,
        });
        break;
    case "4":
       var minPos = TimSoDuongNhoNhatTrongMang(inputValue);
       resultDiv.innerHTML = "Số dương nhỏ nhất trong mảng là: " + minPos;
       Swal.fire({
            title: `Số dương nhỏ nhất trong mảng là: ${minPos }`,
        });
       break;
    case "5":
       var lastPos = TimSoChanCuoiCungTrongMang(inputValue);
       Swal.fire({
            title: `Số chẵn cuối cùng trong mảng là: ${lastPos }`,
        });
       break;
    case "6":
        var viTri1 = parseInt(document.getElementById("viTri1").value);
        var viTri2 = parseInt(document.getElementById("viTri2").value);
  
        // Gọi hàm để thay đổi mảng
        var swappedArray = DoiChoHaiGiaTriTrongMang(viTri1, viTri2, numberArr);
  
        // Hiển thị mảng mới sau khi thay đổi
        Swal.fire({
          title: `Mảng mới sau khi thay đổi là: [${swappedArray.join(", ")}]`,
        });
        break;
    case "7":
        var arrange = SapXepMangTangDan(numberArr);
        Swal.fire({
            title: `Mảng được sắp xếp tăng dần là:[${arrange}] `,
        });
        break;
    case "8":
        case "8":
        var firstPrimeNumber = TimSoNguyenToDauTienTrongMang(numberArr);
        Swal.fire({
            title: `Số nguyên tố đầu tiên trong mảng là: ${firstPrimeNumber }`,
        });
        break;
    case "9":
        var countIntegersInArray = DemSoNguyenTrongMangSoThuc(numberArr);
        Swal.fire({
            title: `Số lượng số nguyên trong mảng số thực là: ${countIntegersInArray }`,
        });
        break;

    case "10":
        var compareResult = SoSanhSoLuongSoDuongVaSoAm(numberArr);
        Swal.fire({
            title: `${compareResult }`,
        });
        break;
    default:
      resultDiv.innerHTML = "Vui lòng chọn một tùy chọn.";
  }
}

//1
function TinhTongSoDuong(inputValue) {
    var sum = 0;
    // Các hàm tính tổng và đếm số dương
  for (var i = 0; i < numberArr.length; i++) {
    if(numberArr[i] > 0) {
    // Thực hiện tính tổng các số dương và trả về kết quả
        sum+=numberArr[i]; 
        }
    }
    return sum;
}

//2
function DemSoDuong(inputValue) {
  var count = 0;
  // Code xử lý đếm số dương trong mảng ở đây...
  for (var i = 0; i < numberArr.length; i++) { 
    if(numberArr[i] > 0) {
          count+=1; // Thực hiện đếm số dương và trả về kết quả
        }
    }
    return count;
}

//3
function TimSoNhoNhatTrongMang(inputValue) {
    var min = numberArr[0];
    // Code xử lý so sánh số trong mảng ở đây...
    for (var i = 1; i < numberArr.length; i++) { 
      if(numberArr[i] < min) {
            min = numberArr[i]; // Thực hiện so sánh giá trị và trả về kết quả nhỏ nhất
          }
      }
      return min;
  }

//4
function TimSoDuongNhoNhatTrongMang(inputValue) {
    var minPos = Infinity;
    // Code xử lý so sánh số dương trong mảng ở đây...
    for (var i = 0; i < numberArr.length; i++) { 
      if(numberArr[i] < minPos && numberArr[i] > 0) {
        minPos = numberArr[i]; // Thực hiện so số dương và trả về kết quả số dương nhỏ nhất
        }
    }
    if(minPos == Infinity) {
        return "Không có giá trị đó"
    }
      return minPos;
  }

  //5
function TimSoChanCuoiCungTrongMang(inputValue) {
    var lastPos = -1;
    // Code xử lý so sánh số dương trong mảng ở đây...
    for (var i = 0; i < numberArr.length; i++) { 
      if(numberArr[i] % 2 == 0) {
        lastPos = numberArr[i]; // Thực hiện so số dương và trả về kết quả số dương cuối cùng
        }
    }
    return lastPos;
}

//6
function DoiChoHaiGiaTriTrongMang(viTri1, viTri2, mang) {
    // Kiểm tra nếu vị trí nhập vào là hợp lệ
    if (
      !isNaN(viTri1) &&
      !isNaN(viTri2) &&
      viTri1 >= 0 &&
      viTri2 >= 0 &&
      viTri1 < mang.length &&
      viTri2 < mang.length
    ) {
      // Thực hiện hoán đổi hai giá trị trong mảng
      var temp = mang[viTri1];
      mang[viTri1] = mang[viTri2];
      mang[viTri2] = temp;
      return mang;
    } else {
      // Trường hợp vị trí không hợp lệ, trả về mảng ban đầu
      return mang;
    }
}

//7
function SapXepMangTangDan(numberArr) {
  // Sử dụng phương thức sort() để sắp xếp mảng tăng dần
  numberArr.sort(function(a, b) {
    return a - b;
  });

  // Chuyển mảng đã sắp xếp thành một chuỗi để hiển thị
  var arrange = numberArr.join(", ");
  console.log("SapXepMangTangDan ~ arrange:", arrange)

  return arrange;
}

//8  
function TimSoNguyenToDauTienTrongMang(numberArr) {
  // Hàm kiểm tra xem một số có phải là số nguyên tố hay không
  function KiemTraSoNguyenTo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (var i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  // Duyệt qua từng phần tử trong mảng để tìm số nguyên tố đầu tiên
  for (var i = 0; i < numberArr.length; i++) {
    if (KiemTraSoNguyenTo(numberArr[i])) {
      return numberArr[i]; // Trả về số nguyên tố đầu tiên
    }
  }
  return "-1";
}

//9
function DemSoNguyenTrongMangSoThuc(numberArr) {
    // Hàm kiểm tra xem một số có phải là số nguyên hay không
    function KiemTraSoNguyen(num) {
      return Number.isInteger(num);
    }
  
    // Lọc các số nguyên từ mảng số thực
    var soNguyenTrongMang = numberArr.filter(KiemTraSoNguyen);
  
    return soNguyenTrongMang.length; // Trả về số lượng số nguyên trong mảng số thực
}

//10
function SoSanhSoLuongSoDuongVaSoAm(numberArr) {
    var soDuong = 0;
    var soAm = 0;
  
    for (var i = 0; i < numberArr.length; i++) {
      if (numberArr[i] > 0) {
        soDuong++;
      } else if (numberArr[i] < 0) {
        soAm++;
      }
    }
  
    if (soDuong > soAm) {
      return "Số lượng số dương nhiều hơn số âm.";
    } else if (soAm > soDuong) {
      return "Số lượng số âm nhiều hơn số dương.";
    } else {
      return "Số lượng số dương và số âm bằng nhau.";
    }
}
  


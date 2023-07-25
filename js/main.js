// Định nghĩa hàm printMessage với tham số là một hàm callback
function printMessage(message, callback) {
  console.log("Đang in: " + message);
  // Giả lập việc in mất 2 giây
  setTimeout(function() {
    console.log("Đã in xong: " + message);
    // Gọi callback để thông báo rằng công việc hoàn thành
    callback();
  }, 2000);
}

// Định nghĩa hàm callback mà chúng ta sẽ sử dụng
function donePrinting() {
  console.log("Hoàn thành!");
}

// Gọi hàm printMessage và truyền hàm callback vào
printMessage("Xin chào!", donePrinting);



 

function printMessage(message, callback) {
  console.log('Dang in :' + message) ;
  setTimeout (function() {
    console.log ('da in xong' + message) ;
    callback();
  },2000) ;
}
function donePrintin() {
  console.log ('hoan thanhh');
}
printMessage("Xin chào!", donePrinting);
var dsnv = [];
function renderDSNV() {
    //   hiển thị: tạo ra 1 chuỗi chứa các thẻ tr => innertHTML chuỗi đó vào thẻ tbody
    var contentHTML = "";
    for (var i = 0; i < dsnv.length; i++) {
        var data = dsnv[i];
        var trString = ` <tr>
                        <td>${data.taiKhoan}</td>
                        <td>${data.hoVaTen}</td>
                        <td>${data.email}</td>
                        <td>${data.ngayLam}</td>
                        <td>${data.chucVu}</td>
                        <td>${data.tinhTongLuong()}</td>
                        <td>${data.xepLoai()}</td>
                        <td> 
                        <button
                        onclick="xoaNhanVien('${data.taiKhoan}')"
                        class='btn btn-danger'>Delete</button>
                        <button
                        onclick="suaNhanVien('${data.taiKhoan}')"
                        class='btn btn-warning'>Edit</button>
                        </td>
                    </tr>`;
        contentHTML = contentHTML + trString;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function validateVietnameseName(name) {
    // Vietnamese name can contain Latin characters, diacritics, and spaces
    // Adjust the regex pattern as needed
    var pattern = /^[a-zA-Zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựýỳỷỹỵ\s]+$/;

    return pattern.test(name);
}

function openModal() {
    $('#myModal').modal('show');
    document.getElementById('btnThemNV').style.display = 'none';
    document.getElementById('btnCapNhat').style.display = 'block';
}
function closeModal() {
    $('#myModal').modal('hide');
}
function hienFormThemNV() {
    document.getElementById("tknv").value = "";
    document.getElementById('tknv').readOnly = false;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("datepicker").value = "";
    document.getElementById("luongCB").value = "";
    document.getElementById("chucvu").value = "";
    document.getElementById("gioLam").value = "";
    document.getElementById('btnThemNV').style.display = 'block';
    document.getElementById('btnCapNhat').style.display = 'none';
}

function xoaMucTuLocalStorage(tenLocalStorage, giaTriTaiKhoanXoa) {
    // Lấy giá trị từ LocalStorage
    var localStorageData = localStorage.getItem(tenLocalStorage);

    // Chuyển giá trị từ chuỗi JSON sang đối tượng JavaScript (nếu cần)
    var myArray = JSON.parse(localStorageData) || [];
    console.log(myArray);
    // Xác định vị trí của mục cần xóa
    var indexToRemove = myArray.findIndex(function (item) {
        return item.taiKhoan === giaTriTaiKhoanXoa;
    });
    console.log(indexToRemove);
    // Nếu tìm thấy vị trí, xoá mục đó
    if (indexToRemove !== -1) {
        myArray.splice(indexToRemove, 1);

        // Lưu lại dữ liệu vào LocalStorage
        localStorage.setItem(tenLocalStorage, JSON.stringify(myArray));
    }
}
function capNhatNhanVien(taiKhoan) {
    // Tìm vị trí của nhân viên trong mảng dsnv
    var index = dsnv.findIndex(function (nv) {
        return nv.taiKhoan === taiKhoan;
    });

    // Kiểm tra xem nhân viên có tồn tại không
    if (index !== -1) {
        // Lấy thông tin của nhân viên cần cập nhật
        var nv = dsnv[index];

        // Cập nhật thông tin của nhân viên từ form
        nv.hoVaTen = document.getElementById("name").value;
        nv.email = document.getElementById("email").value;
        nv.matKhau = document.getElementById("password").value;
        nv.ngayLam = document.getElementById("datepicker").value;
        nv.luong = document.getElementById("luongCB").value;
        nv.chucVu = document.getElementById("chucvu").value;
        nv.gioLam = document.getElementById("gioLam").value;

        // Cập nhật dữ liệu trong LocalStorage
        localStorage.setItem("DSNV", JSON.stringify(dsnv));

        // Đóng form
        closeModal();
        // Render lại danh sách nhân viên
        renderDSNV();
    }
}

function renderDSNVTheoLoai(loai) {
    //   hiển thị: tạo ra 1 chuỗi chứa các thẻ tr => innertHTML chuỗi đó vào thẻ tbody
    var contentHTML = "";
    if (loai == "Trung bình") {
        for (var i = 0; i < dsnv.length; i++) {
            var data = dsnv[i];
            var xepLoai = dsnv[i].xepLoai();
            if (xepLoai == "Trung bình") {
                var trString = ` <tr>
                <td>${data.taiKhoan}</td>
                <td>${data.hoVaTen}</td>
                <td>${data.email}</td>
                <td>${data.ngayLam}</td>
                <td>${data.chucVu}</td>
                <td>${data.tinhTongLuong()}</td>
                <td>${data.xepLoai()}</td>
                <td> 
                <button
                onclick="xoaNhanVien('${data.taiKhoan}')"
                class='btn btn-danger'>Delete</button>
                <button
                onclick="suaNhanVien('${data.taiKhoan}')"
                class='btn btn-warning'>Edit</button>
                </td>
            </tr>`;
                contentHTML = contentHTML + trString;
            }
        }
    } else if (loai == "Khá") {
        for (var i = 0; i < dsnv.length; i++) {
            var data = dsnv[i];
            var xepLoai = dsnv[i].xepLoai();
            if (xepLoai == "Khá") {
                var trString = ` <tr>
                <td>${data.taiKhoan}</td>
                <td>${data.hoVaTen}</td>
                <td>${data.email}</td>
                <td>${data.ngayLam}</td>
                <td>${data.chucVu}</td>
                <td>${data.tinhTongLuong()}</td>
                <td>${data.xepLoai()}</td>
                <td> 
                <button
                onclick="xoaNhanVien('${data.taiKhoan}')"
                class='btn btn-danger'>Delete</button>
                <button
                onclick="suaNhanVien('${data.taiKhoan}')"
                class='btn btn-warning'>Edit</button>
                </td>
            </tr>`;
                contentHTML = contentHTML + trString;
            }
        }
    } else if (loai == "Giỏi") {
        for (var i = 0; i < dsnv.length; i++) {
            var data = dsnv[i];
            var xepLoai = dsnv[i].xepLoai();
            if (xepLoai == "Giỏi") {
                var trString = ` <tr>
                <td>${data.taiKhoan}</td>
                <td>${data.hoVaTen}</td>
                <td>${data.email}</td>
                <td>${data.ngayLam}</td>
                <td>${data.chucVu}</td>
                <td>${data.tinhTongLuong()}</td>
                <td>${data.xepLoai()}</td>
                <td> 
                <button
                onclick="xoaNhanVien('${data.taiKhoan}')"
                class='btn btn-danger'>Delete</button>
                <button
                onclick="suaNhanVien('${data.taiKhoan}')"
                class='btn btn-warning'>Edit</button>
                </td>
            </tr>`;
                contentHTML = contentHTML + trString;
            }
        }
    } else if (loai == "Xuất sắc") {
        for (var i = 0; i < dsnv.length; i++) {
            var data = dsnv[i];
            var xepLoai = dsnv[i].xepLoai();
            if (xepLoai == "Xuất sắc") {
                var trString = ` <tr>
                <td>${data.taiKhoan}</td>
                <td>${data.hoVaTen}</td>
                <td>${data.email}</td>
                <td>${data.ngayLam}</td>
                <td>${data.chucVu}</td>
                <td>${data.tinhTongLuong()}</td>
                <td>${data.xepLoai()}</td>
                <td> 
                <button
                onclick="xoaNhanVien('${data.taiKhoan}')"
                class='btn btn-danger'>Delete</button>
                <button
                onclick="suaNhanVien('${data.taiKhoan}')"
                class='btn btn-warning'>Edit</button>
                </td>
            </tr>`;
                contentHTML = contentHTML + trString;
            }
        }
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
    if (contentHTML == "") {
        renderDSNV();
    };
}
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
    document.getElementById("luongCB").value = "";
    document.getElementById("chucvu").value = "";
    document.getElementById("gioLam").value = "";
    document.getElementById('btnThemNV').style.display = 'block';
    document.getElementById('btnCapNhat').style.display = 'none';
    displayNoneTb();
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

    // Cập nhật thông tin của nhân viên từ form
    var hoVaTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luong = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    let nvEdit = new NhanVien(taiKhoan, hoVaTen, email, matKhau, ngayLam, luong, chucVu, gioLam);

    // Kiểm tra xem nhân viên có tồn tại không
    if (index !== -1) {
        // Lấy thông tin của nhân viên cần cập nhật
        dsnv[index] = nvEdit;
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
function layThongTin() {
    var nvResult;
    var taiKhoan = document.getElementById("tknv").value;
    var hoVaTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luong = document.getElementById("luongCB").value * 1;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    if (validateTK(taiKhoan) && validateHoVaTen(hoVaTen) && validateEmail(email) && validateMatKhau(matKhau) && validateNgayLam(ngayLam) && validateLuongCB(luong) && validateChucVu(chucVu) && validateGioLam(gioLam)) {
        //   tạo object
        var nv = {
            taiKhoan: taiKhoan,
            hoVaTen: hoVaTen,
            email: email,
            matKhau: matKhau,
            ngayLam: ngayLam,
            luong: luong,
            chucVu: chucVu,
            gioLam: gioLam,
            tinhTongLuong: function () {
                switch (this.chucVu) {
                    case "Sếp":
                        return this.luong * 3;
                    case "Trưởng phòng":
                        return this.luong * 2;
                    case "Nhân viên":
                        return this.luong;
                    default:
                        console.error("Chức vụ không hợp lệ");
                        return 0;
                }
            },
            xepLoai: function () {
                if (this.gioLam >= 192) {
                    return "Xuất sắc";
                } else if (this.gioLam >= 176) {
                    return "Giỏi";
                } else if (this.gioLam >= 160) {
                    return "Khá";
                } else {
                    return "Trung bình";
                }
            },
        };
        nvResult = nv;
    };
    return nvResult;
}
function showThongTin(tk, dsnv) {
    var indexToRemove = dsnv.findIndex(function (item) {
        return item.taiKhoan === tk;
    });
    document.getElementById("tknv").value = dsnv[indexToRemove].taiKhoan;
    document.getElementById('tknv').readOnly = true;
    document.getElementById("name").value = dsnv[indexToRemove].hoVaTen;
    document.getElementById("email").value = dsnv[indexToRemove].email;
    document.getElementById("password").value = dsnv[indexToRemove].matKhau;
    document.getElementById("datepicker").value = dsnv[indexToRemove].ngayLam;
    document.getElementById("luongCB").value = dsnv[indexToRemove].luong;
    document.getElementById("chucvu").value = dsnv[indexToRemove].chucVu;
    document.getElementById("gioLam").value = dsnv[indexToRemove].gioLam;
}
function showMessage(idErr, message) {
    document.getElementById(idErr).innerText = message;
}

function displayNoneTb() {
    document.getElementById("tbTKNV").style.display = "none";
    document.getElementById("tbTen").style.display = "none";
    document.getElementById("tbEmail").style.display = "none";
    document.getElementById("tbMatKhau").style.display = "none";
    document.getElementById("tbNgay").style.display = "none";
    document.getElementById("tbLuongCB").style.display = "none";
    document.getElementById("tbChucVu").style.display = "none";
    document.getElementById("tbGiolam").style.display = "none";
}
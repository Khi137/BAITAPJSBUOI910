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
    if (validate(taiKhoan, hoVaTen, email, matKhau, ngayLam, luong, chucVu, gioLam)) {
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
        nvResult=nv;
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
function validate(taiKhoan, hoVaTen, email, matKhau, ngayLam, luong, chucVu, gioLam) {
    // Validation
    if (taiKhoan.length < 4 || taiKhoan.length > 6 || taiKhoan.trim() === "") {
        alert("Tài khoản phải có từ 4 đến 6 ký số và không để trống.");
        return false;
    }

    if (!validateVietnameseName(hoVaTen) || hoVaTen.trim() === "") {
        alert("Tên nhân viên phải là chữ và không để trống.");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.trim() === "") {
        alert("Email phải đúng định dạng và không để trống.");
        return false;
    }

    if (matKhau.length < 6 || matKhau.length > 10 || matKhau.trim() === "" ||
        !/[0-9]/.test(matKhau) || !/[A-Z]/.test(matKhau) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(matKhau)) {
        alert("Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 số, 1 ký tự in hoa và 1 ký tự đặc biệt, không để trống.");
        return false;
    }

    if (ngayLam.trim() === "" || !/^\d{2}\/\d{2}\/\d{4}$/.test(ngayLam)) {
        alert("Ngày làm không để trống, định dạng mm/dd/yyyy.");
        return false;
    }

    if (luong < 1000000 || luong > 20000000 || luong === "") {
        alert("Lương cơ bản từ 1,000,000 đến 20,000,000, không để trống.");
        return false;
    }

    if (chucVu !== "Sếp" && chucVu !== "Trưởng phòng" && chucVu !== "Nhân viên") {
        alert("Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên).");
        return false;
    }

    if (gioLam < 80 || gioLam > 200 || gioLam.trim() === "") {
        alert("Số giờ làm trong tháng từ 80 đến 200 giờ, không để trống.");
        return false;
    }

    return true;
}
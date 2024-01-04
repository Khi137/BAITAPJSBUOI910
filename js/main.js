// nv ~ object
//  dsnv ~ array chứa các object
var dsnv = [];
// lấy data từ localStorage => render lên layout
var dataJson = localStorage.getItem("DSNV");
var arrayNv = JSON.parse(dataJson);
//duyệt mảng => convert object => object từ class
for (var i = 0; i < arrayNv.length; i++) {
    var data = arrayNv[i];
    var nv = new NhanVien(
        arrayNv[i].taiKhoan,
        arrayNv[i].hoVaTen,
        arrayNv[i].email,
        arrayNv[i].matKhau,
        arrayNv[i].ngayLam,
        arrayNv[i].luong,
        arrayNv[i].chucVu,
        arrayNv[i].gioLam
    );
    dsnv.push(nv);
}
renderDSNV();
function themNhanVien() {
    //   lấy thông tin
    var taiKhoan = document.getElementById("tknv").value;
    var hoVaTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luong = document.getElementById("luongCB").value * 1;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;

    // Validation
    if (taiKhoan.length < 4 || taiKhoan.length > 6 || taiKhoan.trim() === "") {
        alert("Tài khoản phải có từ 4 đến 6 ký số và không để trống.");
        return;
    }

    if (!validateVietnameseName(hoVaTen) || hoVaTen.trim() === "") {
        alert("Tên nhân viên phải là chữ và không để trống.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.trim() === "") {
        alert("Email phải đúng định dạng và không để trống.");
        return;
    }

    if (matKhau.length < 6 || matKhau.length > 10 || matKhau.trim() === "" ||
        !/[0-9]/.test(matKhau) || !/[A-Z]/.test(matKhau) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(matKhau)) {
        alert("Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 số, 1 ký tự in hoa và 1 ký tự đặc biệt, không để trống.");
        return;
    }

    if (ngayLam.trim() === "" || !/^\d{2}\/\d{2}\/\d{4}$/.test(ngayLam)) {
        alert("Ngày làm không để trống, định dạng mm/dd/yyyy.");
        return;
    }

    if (luong < 1000000 || luong > 20000000 || luong === "") {
        alert("Lương cơ bản từ 1,000,000 đến 20,000,000, không để trống.");
        return;
    }

    if (chucVu !== "Sếp" && chucVu !== "Trưởng phòng" && chucVu !== "Nhân viên") {
        alert("Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên).");
        return;
    }

    if (gioLam < 80 || gioLam > 200 || gioLam.trim() === "") {
        alert("Số giờ làm trong tháng từ 80 đến 200 giờ, không để trống.");
        return;
    }
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
    dsnv.push(nv);
    // giữ lại data khi user load trang
    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV", dataJson);
    //   render lại layout sau khi thêm thành công
    closeModal();
    renderDSNV();
}

function suaNhanVien(tk) {
    // show thông tin lên form
    document.getElementById("tknv").value = nv.taiKhoan;
    document.getElementById('tknv').readOnly = true;
    document.getElementById("name").value = nv.hoVaTen;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.matKhau;
    document.getElementById("datepicker").value = nv.ngayLam;
    document.getElementById("luongCB").value = nv.luong;
    document.getElementById("chucvu").value = nv.chucVu;
    document.getElementById("gioLam").value = nv.gioLam;
    // Mở form
    openModal();
}

function capNhatThongTin() {
    //   lấy thông tin
    var hoVaTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luong = document.getElementById("luongCB").value * 1;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;

    // Validation
    if (!validateVietnameseName(hoVaTen) || hoVaTen.trim() === "") {
        alert("Tên nhân viên phải là chữ và không để trống.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.trim() === "") {
        alert("Email phải đúng định dạng và không để trống.");
        return;
    }

    if (matKhau.length < 6 || matKhau.length > 10 || matKhau.trim() === "" ||
        !/[0-9]/.test(matKhau) || !/[A-Z]/.test(matKhau) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(matKhau)) {
        alert("Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 số, 1 ký tự in hoa và 1 ký tự đặc biệt, không để trống.");
        return;
    }

    if (ngayLam.trim() === "" || !/^\d{2}\/\d{2}\/\d{4}$/.test(ngayLam)) {
        alert("Ngày làm không để trống, định dạng mm/dd/yyyy.");
        return;
    }

    if (luong < 1000000 || luong > 20000000 || luong === "") {
        alert("Lương cơ bản từ 1,000,000 đến 20,000,000, không để trống.");
        return;
    }

    if (chucVu !== "Sếp" && chucVu !== "Trưởng phòng" && chucVu !== "Nhân viên") {
        alert("Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên).");
        return;
    }

    if (gioLam < 80 || gioLam > 200 || gioLam.trim() === "") {
        alert("Số giờ làm trong tháng từ 80 đến 200 giờ, không để trống.");
        return;
    }
    // index nhân viên cần sửa 
    var tk = document.getElementById("tknv").value;
    capNhatNhanVien(tk);
}


function xoaNhanVien(tk) {
    // splice(viTriCanXoa,soLuongCanXoa)
    //   từ tk tìm ra index
    var index;
    for (var i = 0; i < dsnv.length; i++) {
        if (dsnv[i].taiKhoan == tk) {
            index = i;
        }
    }
    dsnv.splice(index, 1); // xoá phần tử tại vị trí index trong array dsnv

    xoaMucTuLocalStorage('DSNV', tk);
    //   render lại layout sau khi xoá thành công
    renderDSNV();
}

function timKiemNhanVienTheoLoai(){
    var timkiem = document.getElementById("timkiem").value;
    console.log(timkiem);
    renderDSNVTheoLoai(timkiem);
}
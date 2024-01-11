
function validateVietnameseName(name) {
    // Vietnamese name can contain Latin characters, diacritics, and spaces
    // Adjust the regex pattern as needed
    var pattern = /^[a-zA-Zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựýỳỷỹỵ\s]+$/;

    return pattern.test(name);
}

// function validate(taiKhoan, hoVaTen, email, matKhau, ngayLam, luong, chucVu, gioLam) {
//     // Validation
//     if (taiKhoan.length < 4 || taiKhoan.length > 6 || taiKhoan.trim() === "") {
//         showMessage("tbTKNV", "Tài khoản phải có từ 4 đến 6 ký số và không để trống.")
//         document.getElementById("myElementId").display = "block";
//         return false;
//     }
//     else {
//         showMessage("tbTKNV", "")
//         document.getElementById("myElementId").display = "none";
//     }

//     if (!validateVietnameseName(hoVaTen) || hoVaTen.trim() === "") {
//         alert("Tên nhân viên phải là chữ và không để trống.");
//         return false;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.trim() === "") {
//         alert("Email phải đúng định dạng và không để trống.");
//         return false;
//     }

//     if (matKhau.length < 6 || matKhau.length > 10 || matKhau.trim() === "" ||
//         !/[0-9]/.test(matKhau) || !/[A-Z]/.test(matKhau) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(matKhau)) {
//         alert("Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 số, 1 ký tự in hoa và 1 ký tự đặc biệt, không để trống.");
//         return false;
//     }

//     if (ngayLam.trim() === "" || !/^\d{2}\/\d{2}\/\d{4}$/.test(ngayLam)) {
//         alert("Ngày làm không để trống, định dạng mm/dd/yyyy.");
//         return false;
//     }

//     if (luong < 1000000 || luong > 20000000 || luong === "") {
//         alert("Lương cơ bản từ 1,000,000 đến 20,000,000, không để trống.");
//         return false;
//     }

//     if (chucVu !== "Sếp" && chucVu !== "Trưởng phòng" && chucVu !== "Nhân viên") {
//         alert("Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên).");
//         return false;
//     }

//     if (gioLam < 80 || gioLam > 200 || gioLam.trim() === "") {
//         alert("Số giờ làm trong tháng từ 80 đến 200 giờ, không để trống.");
//         return false;
//     }

//     return true;
// }

function validateTK(taiKhoan) {
    if (taiKhoan.length < 4 || taiKhoan.length > 6 || taiKhoan.trim() === "") {
        showMessage("tbTKNV", "Tài khoản phải có từ 4 đến 6 ký số và không để trống.")
        document.getElementById("tbTKNV").style.display = "block";
        return false;
    }
    else {
        showMessage("tbTKNV", "")
        document.getElementById("tbTKNV").style.display = "none";
        return true;
    }
}

function validateHoVaTen(hoVaTen) {
    if (!validateVietnameseName(hoVaTen) || hoVaTen.trim() === "") {
        showMessage("tbTen", "Tên nhân viên phải là chữ và không để trống.")
        document.getElementById("tbTen").style.display = "block";
        return false;
    }
    else {
        showMessage("tbTen", "")
        document.getElementById("tbTen").style.display = "none";
        return true
    }
}

function validateEmail(email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.trim() === "") {
        showMessage("tbEmail", "Email phải đúng định dạng và không để trống.")
        document.getElementById("tbEmail").style.display = "block";
        return false;
    }
    else {
        showMessage("tbEmail", "")
        document.getElementById("tbEmail").style.display = "none";
        return true
    }
}

function validateMatKhau(matKhau) {
    if (matKhau.length < 6 || matKhau.length > 10 || matKhau.trim() === "" ||
        !/[0-9]/.test(matKhau) || !/[A-Z]/.test(matKhau) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(matKhau)) {
        showMessage("tbMatKhau", "Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 số, 1 ký tự in hoa và 1 ký tự đặc biệt, không để trống.")
        document.getElementById("tbMatKhau").style.display = "block";
        return false;
    }
    else {
        showMessage("tbMatKhau", "")
        document.getElementById("tbMatKhau").style.display = "none";
        return true
    }
}

function validateNgayLam(ngayLam) {
    if (ngayLam.trim() === "" || !/^\d{2}\/\d{2}\/\d{4}$/.test(ngayLam)) {
        showMessage("tbNgay", "Ngày làm không để trống, định dạng mm/dd/yyyy.")
        document.getElementById("tbNgay").style.display = "block";
        return false;
    }
    else {
        showMessage("tbNgay", "")
        document.getElementById("tbNgay").style.display = "none";
        return true
    }
    return true;
}

function validateLuongCB(luong) {
    if (luong < 1000000 || luong > 20000000 || luong === "") {
        showMessage("tbLuongCB", "Lương cơ bản từ 1,000,000 đến 20,000,000, không để trống.")
        document.getElementById("tbLuongCB").style.display = "block";
        return false;
    }
    else {
        showMessage("tbLuongCB", "")
        document.getElementById("tbLuongCB").style.display = "none";
        return true
    }
}

function validateChucVu(chucVu) {
    if (chucVu !== "Sếp" && chucVu !== "Trưởng phòng" && chucVu !== "Nhân viên") {
        showMessage("tbChucVu", "Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên).")
        document.getElementById("tbChucVu").style.display = "block";
        return false;
    }
    else {
        showMessage("tbChucVu", "")
        document.getElementById("tbChucVu").style.display = "none";
        return true
    }
}

function validateGioLam(gioLam) {
    if (gioLam < 80 || gioLam > 200 || gioLam.trim() === "") {
        showMessage("tbGiolam", "Số giờ làm trong tháng từ 80 đến 200 giờ, không để trống.")
        document.getElementById("tbGiolam").style.display = "block";
        return false;
    }
    else {
        showMessage("tbGiolam", "")
        document.getElementById("tbGiolam").style.display = "none";
        return true
    }
}
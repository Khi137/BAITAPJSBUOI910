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
    var nv = layThongTin();
    if (typeof nv !== 'undefined' && nv !== null) {
        dsnv.push(nv);
        // giữ lại data khi user load trang
        var dataJson = JSON.stringify(dsnv);
        localStorage.setItem("DSNV", dataJson);
        //   render lại layout sau khi thêm thành công
        closeModal();
        renderDSNV();
        // Bạn có thể tiếp tục xử lý thông tin ở đây
    } else {
        console.log('Biến nv không có đủ thông tin.');
    }

}

function suaNhanVien(tk) {
    // show thông tin lên form
    showThongTin(tk, dsnv);
    // Mở form
    openModal();
}

function capNhatThongTin() {
    var nv = layThongTin();
    if (typeof nv !== 'undefined' && nv !== null) {
        // index nhân viên cần sửa 
        var tk = document.getElementById("tknv").value;
        capNhatNhanVien(tk);
        renderDSNV();
        // Bạn có thể tiếp tục xử lý thông tin ở đây
    } else {
        console.log('Biến nv không có đủ thông tin.');
    }

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

function timKiemNhanVienTheoLoai() {
    var timkiem = document.getElementById("timkiem").value;
    console.log(timkiem);
    renderDSNVTheoLoai(timkiem);
}
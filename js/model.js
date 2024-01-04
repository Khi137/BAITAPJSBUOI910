//class Nhân Viên
function NhanVien(taiKhoan, hoVaTen, email, matKhau, ngayLam, luong, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.hoVaTen = hoVaTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luong = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tinhTongLuong = function () {
        switch (chucVu) {
            case "Sếp":console.log("hello");
                return this.luong * 3;
            case "Trưởng phòng":
                
                return this.luong * 2;
            case "Nhân viên":
                return this.luong;
            default:
                console.error("Chức vụ không hợp lệ");
                return 0;
        }
    };
    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            return "Xuất sắc";
        } else if (this.gioLam >= 176) {
            return "Giỏi";
        } else if (this.gioLam >= 160) {
            return "Khá";
        } else {
            return "Trung bình";
        }
    };
}
//Bài tập 1: Tính tiền lương nhân viên

// input: number,string???
 document.getElementById('btn1').onclick = function (){
    var tienLuong = document.getElementById('txt-tienLuong').value *1;
    var soNgayLam = document.getElementById('txt-ngayLam').value *1;
    var tongLuong = tienLuong * soNgayLam;
 

    var tongTienLuong = tongLuong.toLocaleString({
        style: "currency",
        currency: "VND",
    })
 document.getElementById('ketQua').innerHTML=`Xin chào, lương tháng này của bạn là: ${tongTienLuong} VND`
 }



 //Bài tập 2:
 document.getElementById('btn2').onclick = function (){
    var ngay1 = document.getElementById('txt-so1').value*1;
    var ngay2 = document.getElementById('txt-so2').value*1;
    var ngay3 = document.getElementById('txt-so3').value*1;
    var ngay4 = document.getElementById('txt-so4').value*1;
    var ngay5 = document.getElementById('txt-so5').value*1;

    var diemTrungBinh = (ngay1 + ngay2 +ngay3 + ngay4 + ngay5) / 5;

    var trungBinh = diemTrungBinh.toLocaleString({
        style: 'currenly',
        currenly: 'VND',
    })
    document.getElementById('ketQua2').innerHTML= ` ${trungBinh}`
 }

 //Bài tập 3: 
 document.getElementById('btn3').onclick = function (){
    var usd = document.getElementById('txt-USD').value*1;
    var tongUSD = usd * 23500;
   var tongSoUSD = tongUSD.toLocaleString({
    style: 'currenly',
    currenly:'VND'
   })
   document.getElementById('ketQua3').innerHTML = `Chào bạn, số tiền quy đổi của bạn được: ${tongSoUSD} VND`
 }

 //Bài tập 4: 
 document.getElementById('btn4').onclick = function (){
    var chieuDai = document.getElementById('txt-chieuDai').value*1;
    var chieuRong = document.getElementById('txt-chieuRong').value*1;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) /2;
    document.getElementById('ketQua4').innerHTML=`Diện tích: ${dienTich} Chu vi: ${chuVi}`;
 }

 // bài tập 5: 
 document.getElementById('btn5').onclick = function (){
    var kySo =document.getElementById('txt-kySo').value*1;
    var kySoHangChuc = Math.floor(kySo / 10) ;
    var kySoHangDonVi = kySo % 10;
    var tongKySo = kySoHangChuc + kySoHangDonVi;
    document.getElementById('ketQua5').innerHTML= tongKySo;
 }
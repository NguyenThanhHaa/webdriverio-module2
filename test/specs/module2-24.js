describe('Module 2-24: Tạo tham chiếu ngược', () => {
    before(()=>{
        module1_3();
    })

    after(()=>{
        browser.closeWindow();
    })

    //Tạo tham chiếu ngược
    let categoryURL = process.env.URL_QLQTTM;
    let btnReference ='[title="Phòng Vật tư - Thiết bị y tế, Khoa Tâm lý - Vật lý trị liệu, Phòng Kế hoạch tổng hợp, Quy trình hỗ trợ bệnh nhân, Khoa Khám bệnh, Phòng Tài chính kế toán, Khoa Phẫu thuật Hồi sức tích cực Tim mạch - Lồng ngực, Phòng Công tác xã hội"]';
    let inputChoose = '[type="text"]';
    let btnConfirm = '[class="btn btn-primary"]';
    
    it('Tạo tham chiếu ngược thành công', () =>{

        browser.url(categoryURL);
        $(btnReference).click();

        $(inputChoose).waitForDisplayed(3000);
        $(inputChoose).setValue('Quy trình hệ thống');

        $(btnConfirm).click();

        //Expect output: chắc chắn hiển thị thành công 
       let toast = '[class="Toastify__toast Toastify__toast-theme--light Toastify__toast--error"]';
       expect(toast).toBeDisplayed(true);
    })

});

function module1_3(){
    let pageurl = process.env.URL_LOGIN;
    let Loginbtn = '[class="btn btn-primary"]';
    let inputusename = '[type="text"]';
    let inputpass = '[type="password"]';
    let Quytrinh = 'Quy trình';
    it('điều hướng đến trang đăng nhập và đăng nhập thành công với tư cách người dùng quản trị viên', () => {

        //đăng nhập vào page
        browser.url(pageurl);

        $(inputusename).waitForDisplayed(5000);
        //input username
        $(inputusename).setValue('admin0');
        $(inputpass).setValue('matkhauadmin123');
        browser.pause(2000);
        $(Loginbtn).click();
    });

    it('Điều hướng đến "Quản lý thư mục"', () =>{

        //điều hướng đến trang quản lý thư mục
        browser.url(Linkpage);
        browser.pause(5000);

    });

    let Linkpage = process.env.URL_QLTM;
    let Botton = '[class="btn btn-primary"]';

    it('- Trình duyệt được điều hướng đến trang "Quản lý thưc mục" ',() => {

       // Nhấp vào ô "Quy trình" của bất kỳ thư mục nào
        $(Botton).click();

        browser.pause(5000)
    })

    
}
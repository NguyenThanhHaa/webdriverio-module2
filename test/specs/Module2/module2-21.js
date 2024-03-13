describe('Module 2-21: Sửa tên quy trình', () => {
    before(()=>{
        module1_3();
    })

    after(()=>{
        browser.closeWindow();
    })

    //Sửa tên quy trình
    let categoryURL = process.env.URL_QLQTTM;
    let btnEdit ='[title="Sửa quy trình"]';
    let inputCategoryName = '[type="text"]';
    let btnSave = '[class="btn btn-primary"]';
    
    it('Sửa tên quy trình thành công', () =>{

        browser.url(categoryURL);
        $(btnEdit).click();

        //Nhập input tên quy trình 
        $(inputCategoryName).waitForDisplayed(5000);
        $(inputCategoryName).setValue('Tên quy trình 02');
        browser.pause(2000);

        $(btnSave).click();

        //Expect output: chắc chắn hiển thị sửa thành công 
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
describe('Module 2-6: Upload nội dung mới cho một tài liệu ', () => {
    before(()=>{
        module1_5();
    })

    after(()=>{
        browser.closeWindow();
    })

    //Upload nội dung mới cho một tài liệu    
    let fileRevisionActiveURL = process.env.URL_QLTLQT;
    let btnEdit = '[title="Sửa quy trình"]';
    let btnSave = '[class="btn btn-primary"]';
    let btnUpdate = '[title="Cập nhật nội dung tài liệu"]';
    let btnChooseFile = '[type="file"]';
    
    it('Upload nội dung mới cho một tài liệu thành công', () =>{

        browser.url(fileRevisionActiveURL);
        $(btnEdit).click();

        $(btnUpdate).waitForDisplayed(5000);
        $(btnUpdate).click();
        browser.pause(2000);

        //Chọn choose file
        $(btnChooseFile).click();
        //Nhấn nút lưu 
        $(btnSave).click();
      
        //Nhấn nút lưu thay đổi 
        $(btnSave).waitForDisplayed(3000);
        $(btnSave).click();
        browser.pause(3000);

        //Expect output: chắc chắn hiển thị thông báo sửa thành công 
        let toast = '[class="Toastify__toast Toastify__toast-theme--light Toastify__toast--success"]';
        expect(toast).toBeDisplayed(true);
    })

   

});

function module1_5(){
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
    
    let LinkPage1 = process.env.URL_QLQTTM;
    let OptiomClick = '[data-id="HT - QT - 02"]'
    it('Điều hướng đến "Quản lý phiên bản hiệu lực"', () =>{

        browser.url(LinkPage1);

        $(OptiomClick).waitForDisplayed(5000);
        $(OptiomClick).selectByVisibleText('Tài liệu hiệu lực');
        browser.pause(3000);
    })

    let revisionActiveURL = process.env.URL_QLPBHL;
    it('Điều hướng đến "Quản lý tài liệu của quy trình "', () =>{

        browser.url(revisionActiveURL);

        $(Botton).waitForDisplayed(5000);
        $(Botton).selectByVisibleText('Tài liệu');
        browser.pause(3000);
    })
}
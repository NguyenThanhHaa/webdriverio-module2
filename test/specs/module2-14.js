describe('Module 2-14: Nhân bản phiên bản hiện hành', () => {
    before(()=>{
        module1_6();
    })

    after(()=>{
        browser.closeWindow();
    })

    //Nhân bản phiên bản hiện hành
    let fileRevisionActiveURL = process.env.URL_QLTLHHL;
    let btnCopy ='[data-testid="FolderCopyIcon"]';
  
    it('Nhân bản phiên bản hiện hành thành công', () =>{

        browser.url(fileRevisionActiveURL);
        $(btnCopy).click();

        //Expect output: chắc chắn hiển thị thông báo nhân bản thành công 
       let toast = '[class="Toastify__toast Toastify__toast-theme--light Toastify__toast--success"]';
       expect(toast).toBeDisplayed(true);
    })

});

function module1_6(){
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

    let revisionActiveURL = process.env.URL_QLPBHL;
    it('Điều hướng đến "Quản lý tài liệu của quy trình "', () =>{

        browser.url(revisionActiveURL);

        $(Botton).waitForDisplayed(5000);
        $(Botton).selectByVisibleText('Tài liệu');
        browser.pause(3000);
    })

    let LinkPage2 = process.env.URL_QLPBHHL;
    let optionClick = '[data-id="HT - QT - 11"]'
    it('Điều hướng đến "Quản lý phiên bản hết hiệu lực"', () =>{

        browser.url(LinkPage2);
        //Nhấp vào ô "Tài liệu" của phiên bản hết hiệu lực
        $(optionClick).waitForDisplayed(5000);
        $(optionClick).selectByIndex(5)
        browser.pause(3000);
    })
}
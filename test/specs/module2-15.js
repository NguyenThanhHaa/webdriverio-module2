
describe('Module 2-15: Sửa lần soát xét của phiên bản hiệu lực', () => {
    before(()=>{
        module1_4();
    })

    after(()=>{
        browser.closeWindow();
    })

    //Sửa lần soát xét của phiên bản hiệu lực
    let fileRevisionActiveURL = process.env.URL_QLTLHHL;
    let btnEdit ='[title="Sửa phiên bản"]';
    let inputRevisionNumber = '[name="revisionNumber"]';
    let btnSave ='[class="btn btn-primary"]';;
  
    it('Sửa lần soát xét của phiên bản hiệu lực thành công', () =>{

        browser.url(fileRevisionActiveURL);
        $(btnEdit).click();
        
          //Nhập input số lần soát xét 
          $(inputRevisionNumber).waitForDisplayed(5000);
          $(inputRevisionNumber).setValue('20');
          browser.pause(2000);

          $(btnSave).click();

        //Expect output: chắc chắn hiển thị sửa thành công 
       let toast = '[class="Toastify__toast Toastify__toast-theme--light Toastify__toast--success"]';
       expect(toast).toBeDisplayed(true);
    })

});

function module1_4(){
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

    
}
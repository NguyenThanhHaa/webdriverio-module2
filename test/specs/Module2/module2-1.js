describe('Module 2-1: Tải xuống 1 tài liệu bất kì', () => {
    before(()=>{
        module1_5();

    })

    after(()=>{
        browser.closeWindow();
    })


    //Tải tài liệu
    let fileRevisionActiveURL = process.env.URL_QLTLQT;
    let btnDownLoad = '[class="btn btn-success"]';

    //Button download file trong modal
    let btnDownLoadFile = '[class="btn btn-success"]';

    it('Nên tải tài liệu thành công', () =>{

        browser.url(fileRevisionActiveURL);

        $(btnDownLoad).waitForDisplayed(5000);
        $(btnDownLoad).click();

        $(btnDownLoadFile).waitForDisplayed(3000);
        $(btnDownLoadFile).click();
        browser.pause(3000);

        //Expect output: nút tải xuống đã được click
        expect(btnDownLoad).toBeClickable(true);
        expect(btnDownLoadFile).toBeClickable(true);
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

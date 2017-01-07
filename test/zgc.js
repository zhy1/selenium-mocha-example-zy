/**
 * Created by zy on 16/12/19.
 */

require('chromedriver');
var should = require('chai').should();
var expect = require('chai').expect;
var env = require('./constant/env');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var mocha = require('mocha');  // mocha /mocha line 186 you can now do `const describe = require('mocha').describe` in a




var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


//var builder = new webdriver.Builder().usingServer("http://127.0.0.1:4444/wd/hub");
//builder.withCapabilities({ browserName : "firefox" });
//var driver = builder.build();

describe('注册流程', function () {
    beforeEach(function () {
        driver.get(env.indexPage);
    });

    afterEach(function () {
        //driver.close(); // 关闭窗口
        //driver.quit();   // 关闭进程
    });

    it('进入注册页面', function (done) {
        driver.findElement(By.id('registerA')).click();

        driver.findElement(By.id('mobile')).sendKeys(env.userPhone);

        driver.findElement(By.id('password')).sendKeys(env.password);

        driver.findElement(By.id('confirmPassword')).sendKeys(env.confirmPassword);

        driver.findElement(By.id('mobileIdentifyingCode')).click();

        driver.sleep(2000);

        // --timeout 15000
        // http://stackoverflow.com/questions/40902493/mocha-error-timeout-of-2000ms-exceeded
        //  Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
        driver.getTitle().then(function (title) {
            console.info(title);
            var a= 1,b=1;
            expect(a+b).to.be.equal(2);
            done();
        });
    });
});


//var driver2 = new webdriver.Builder().forBrowser('chrome').build();




//driver.wait(until.titleIs('webdriver - Google Search'), 1000);

//driver2.get(env.checkCode+ env.userPhone);


//driver.findElement(By.name('q')).sendKeys('webdriver');
//driver.findElement(By.name('btnG')).click();
//driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//driver.quit();

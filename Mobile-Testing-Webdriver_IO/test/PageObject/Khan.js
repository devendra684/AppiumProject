

describe('First test', ()=>{


    it('1. Go to Computer Science Section',async()=>{
        await driver.pause(5000);

        await $('//android.widget.TextView[@text="Dismiss"]').click();

        const el = await $('~Search'); //Explore
        await el.click();
        await driver.pause(2000);

        await $('//*[@resource-id="Computing"]').click();
        await driver.pause(3000);
        await $('//android.widget.Button[@content-desc="Computer science"]/android.view.ViewGroup').click();
        await driver.pause(3000);
        await $('//*[@text="Cryptography"]').click();
        await driver.pause(3000);

        await expect($('//android.widget.TextView[@text="Unit: Cryptography"]')).toExist();

        await driver.pause(2000);
    })

    it.skip('2. Bookmark Three Topics',async()=>{
        await driver.pause(2000);

                await $('//android.widget.Button[@content-desc="Add Bookmark"][1]/android.widget.ImageView').click();
                await driver.pause(2000);
                await $('//*[@resource-id="android:id/button2"]').click();
                await driver.pause(2000);

                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Cryptography challenge 101\"))');
                await driver.pause(2000);
                await $('//android.widget.Button[@content-desc="Add Bookmark"][1]').click();
                await driver.pause(2000);

                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Modular arithmetic\"))');
                await driver.pause(2000);
                await $('//android.widget.Button[@content-desc="Add Bookmark"][1]').click();
                await driver.pause(2000);

        await driver.pause(2000);
    })
    
    it.skip('3. Go Back to Computer Science',async()=>{
        driver.back();
        await driver.pause(2000);
        await $('//*[@text="Information theory"]').click();
        await driver.pause(2000);

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Error correction\"))');
        await driver.pause(2000);
        await $(`//android.widget.Button[@content-desc="Add Bookmark"][1]`).click();

        await driver.pause(4000);
    })
    
    it.skip('4. Open Bookmark and Verify Bookmark List',async()=>{

        await $('//android.view.View[@content-desc="Bookmarks"]').click();
        await driver.pause(4000);
        
        await expect($('//android.widget.TextView[@text="Ancient cryptography"]')).toExist();
        await driver.pause(1000);
        await expect($('//android.widget.TextView[@text="Cryptography challenge 101"]')).toExist();
        await driver.pause(1000);
        await expect($('//android.widget.TextView[@text="Modular arithmetic"]')).toExist();
        await driver.pause(1000);
        await expect($('//android.widget.TextView[@text="Modern information theory"]')).toExist();
        await driver.pause(1000);
        
    })

    it.skip('5. Clear All Bookmarks',async()=>{
        await driver.pause(2000);
        await $('//android.widget.TextView[@text="Edit"]').click();
        await driver.pause(2000);
        

        // await $('//android.view.ViewGroup[@content-desc="Select bookmark"][1]').click();
        // await driver.pause(2000);
        // await $('//android.view.ViewGroup[@content-desc="Select bookmark"][2]').click();
        // await driver.pause(2000);
        // await $('//android.view.ViewGroup[@content-desc="Select bookmark"][3]').click();
        // await driver.pause(2000);
        // await $('//android.view.ViewGroup[@content-desc="Select bookmark"][4]').click();
        // await $('//android.view.ViewGroup[@content-desc="Select bookmark"])[4]/android.widget.ImageView').click();...
        // await driver.pause(2000);
        
        
        await $('//android.view.ViewGroup[@content-desc="Select bookmark"][1]').click();
        await driver.pause(1000);
        await $('//android.widget.TextView[@text="Delete"]').click();
        await driver.pause(1000);
        await $('//android.widget.TextView[@text="Edit"]').click();
        
        await $('//android.view.ViewGroup[@content-desc="Select bookmark"][1]').click();
        await driver.pause(1000);
        await $('//android.widget.TextView[@text="Delete"]').click();
        await driver.pause(1000);
        await $('//android.widget.TextView[@text="Edit"]').click();
        
        await $('//android.view.ViewGroup[@content-desc="Select bookmark"][1]').click();
        await driver.pause(1000);
        await $('//android.widget.TextView[@text="Delete"]').click();
        await driver.pause(1000);
        await $('//android.widget.TextView[@text="Edit"]').click();
        
        await $('//android.view.ViewGroup[@content-desc="Select bookmark"][1]').click();
        await driver.pause(1000);
        await $('//android.widget.TextView[@text="Delete"]').click();
        await driver.pause(1000);
        

    })

    it('6. Go to Explore and Tap on "Life Skills" ',async()=>{

        const el = await $('~Search'); //Explore
        await el.click();
        await el.click();

        
        await  $('//*[@resource-id="Life skills"]').click();
        
        await  $('//*[@resource-id="Financial Literacy"]').click();
        await driver.pause(2000);
        await $('//*[@text="Welcome to Financial Literacy"]').click();
        await driver.pause(2000);
        await $('//*[@text="Welcome to Financial Literacy"]').click();

        // play video for 15 sec
        // await driver.pause(17000); ///**** */

        await driver.pause(15000);
        driver.back();
        await driver.pause(1000);
        driver.back();
        await driver.pause(1000);
        driver.back();
        driver.back();

    })

    

    it('7. Verify Last Seen Topic',async()=>{
        // await driver.pause(2000);

        await $('//*[@text="Home"]').click();
        
        await driver.pause(2000);

        await expect($('//*[@resource-id="recent_lesson"]')).toExist();

    })
    
    it('8. Close App',async()=>{
        await driver.pause(2000);

        driver.back();
        
        await driver.pause(2000);
        // await $talList().scrollBackward()");

        // driver.back();

    })

    // it.skip('Get whole page Text and check it',async()=>{
    //     await driver.pause(2000);

    //     const expectedList = [
    //         "API Demos",
    //         "Access'ibility",
    //         "Accessibility",
    //         "Animation",
    //         "App",
    //         "Content",
    //         "Graphics",
    //         "Media",
    //         "NFC",
    //         "OS",
    //         "Preference",
    //         "Text",
    //         "Views",
    //     ]

    //     const list = await $$("android.widget.TextView");
    //     const actualList = [];

    //     for(const el of list){
    //         actualList.push(await el.getText());
    //         console.log(await el.getText())
    //     }

    //     await expect(actualList).toEqual(expectedList);
    //     await driver.pause(6000);

    //     // driver.back();
    //     // driver.back();
    // })

    // it.skip('Switch btw Apps',async()=>{
    //     await driver.pause(2000);

    //     await driver.pause(6000);
    //     await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
    //     // const AlertText= await driver.getAlertText();
    //     // console.log(AlertText);
    //     // driver.acceptAlert();

    //     await expect($('//*[@text="App/Alert Dialogs"]')).toExist();

    //     await driver.pause(6000);
    //     await driver.pause(6000);

    //     // await driver.launchApp
    //     // driver.back();

    //     // driver.back();

    // })
})
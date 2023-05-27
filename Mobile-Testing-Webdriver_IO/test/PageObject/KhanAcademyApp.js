const { driver } = require("@wdio/globals");

class KhanAcademyApp{

 async Tc_1(){
    await driver.pause(4000);
    await $('//android.widget.TextView[@text="Dismiss"]').click();
    const el = await $('~Search'); //Explore
    await el.click();
    await driver.pause(1000);

    await $('//*[@resource-id="Computing"]').click();
   //  await driver.pause(1000);
    await $('//android.widget.Button[@content-desc="Computer science"]/android.view.ViewGroup').click();
   //  await driver.pause(1000);
    await $('//*[@text="Cryptography"]').click();
    await driver.pause(1000);
    await expect($('//android.widget.TextView[@text="Unit: Cryptography"]')).toExist();
   //  await driver.pause(2000);
 }
 async Tc_2(){
    await driver.pause(2000);
    await $('//android.widget.Button[@content-desc="Add Bookmark"][1]/android.widget.ImageView').click();
    await driver.pause(2000);
    await $('//*[@resource-id="android:id/button2"]').click();
   //  await driver.pause(2000);

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Cryptography challenge 101\"))');
    await driver.pause(1000);
    await $('(//android.widget.Button[@content-desc="Add Bookmark"])[1]').click();  
   //  await driver.pause(2000);

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Modular arithmetic\"))');
    await driver.pause(1000);
    await $('//android.widget.Button[@content-desc="Add Bookmark"][1]').click();
   //  await driver.pause(2000);
 }
 async Tc_3(){
    driver.back();
    await driver.pause(1000);
    await $('//*[@text="Information theory"]').click();
    await driver.pause(2000);

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Error correction\"))');
   //  await driver.pause(2000);
    await $(`//android.widget.Button[@content-desc="Add Bookmark"][1]`).click();
   //  await driver.pause(4000);
 }
 async Tc_4(){
    await $('//android.view.View[@content-desc="Bookmarks"]').click();
    await driver.pause(2000);

    await expect($('//android.widget.TextView[@text="Ancient cryptography"]')).toExist();
   //  await driver.pause(4000);
    await expect($('//android.widget.TextView[@text="Cryptography challenge 101"]')).toExist();
   //  await driver.pause(1000);
    await expect($('//android.widget.TextView[@text="Modular arithmetic"]')).toExist();
   //  await driver.pause(1000);
    await expect($('//android.widget.TextView[@text="Modern information theory"]')).toExist();
   //  await driver.pause(1000);
 }
 async tc_5(){
    await driver.pause(2000);
        await $('//android.widget.TextView[@text="Edit"]').click();
      //   await driver.pause(2000);
        await $('(//android.view.ViewGroup[@content-desc="Select bookmark"])[4]/android.widget.ImageView').click();

      //   await driver.pause(1000);
        await $('(//android.view.ViewGroup[@content-desc="Select bookmark"])[3]/android.widget.ImageView').click();
      //   await driver.pause(1000);

        await $('(//android.view.ViewGroup[@content-desc="Select bookmark"])[2]/android.widget.ImageView').click();
      //   await driver.pause(1000);

        await $('(//android.view.ViewGroup[@content-desc="Select bookmark"])[1]/android.widget.ImageView').click();
      //   await driver.pause(1000);

        await $('//android.widget.TextView[@text="Delete"]').click();
        await driver.pause(1000);
 }
 async tc_6(){
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
    // await driver.pause(15000); 
    await driver.pause(5000);
    driver.back();
    driver.back();
    driver.back();
   }
   async Tc_7(){
      // await driver.pause(2000);
      await $('//*[@text="Home"]').click();
      await driver.pause(2000);
      await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Welcome to Financial Literacy\"))');
      await driver.pause(2000);
      await expect($('//*[@resource-id="recent_lesson"]')).toExist();
   }
   async Tc_8(){
      // await driver.startActivity("org.khanacademy.android","org.khanacademy.android.ui.library.MainActivity");
      await driver.pause(3000);
      const el = await $('~Search'); //Explore
      await el.click();
      await el.click();
      await driver.pause(1000);
      await $("//*[@text='Arts and humanities']").click();
      // await $("//*[@text='Big History Project']").click();
      // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Early Humans\"))').click();
      // await $("//*[@text='READ: Lucy and the Leakeys']").click();
      // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

      // await driver.pause(2000);
      // await driver.back();

      // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"WATCH: Why Human Evolution Matters\"))').click();
      // await driver.pause(2000);

      // await driver.back();
      // await driver.back();

      // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"The Future\"))').click();
      // // await driver.pause(3000);
      // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Quiz: Biosphere\"))').click();
      // await $(`//*[@text="Let's go"]`).click();
      // await driver.pause(2000);
      // await driver.back();
      // await driver.startActivity("org.khanacademy.android", "org.khanacademy.android.ui.library.MainActivity");
      await $('//*[@text="Home"]').click();
      await driver.pause(2000);
      // await driver.pause(3000);
   }

   async Tc_9(){
      
      // await driver.startActivity("org.khanacademy.android", "org.khanacademy.android.ui.library.MainActivity");
      const el = await $('~Search'); //Explore
      await el.click();
      await el.click();

      await $(`//*[@text="Science"]`).click();
      await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("High school biology"))').click();
      await $( 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Evolution"))').click();
      await $(`//*[@text="Ape clarification"]`).click();
      await $('//android.view.ViewGroup[@content-desc="Share"]/android.widget.ImageView').click();

      await $(`//*[@text="MS Tushar"]`).click();
      //  await $('//android.widget.LinearLayout[@content-desc="MS Tushar Messages"]/android.widget.ImageView').click();
      await driver.pause(2000)
      
      await $('//android.widget.ImageView[@content-desc="Send SMS"]').click();
            //android.widget.ImageView[@content-desc="Send SMS"]
      await driver.back()
      await driver.back()
   }

   async Tc_10(){
      await driver.pause(2000);
      await driver.startActivity("org.khanacademy.android","org.khanacademy.android.ui.library.MainActivity");
      await driver.pause(2000);
      await $('//android.widget.ImageView[@content-desc="Settings"]').click();
      await $('//*[@text="Download settings"]').click();
      await $('//*[@text="OFF"]').click();
      await $('//*[@text="ON"]').click();
      await driver.back();
      await $('//*[@text="App icon"]').click();
      await $('//*[@text="Rainbow"]').click();
      await $('//*[@resource-id="android:id/button1"]').click();
      await driver.startActivity("org.khanacademy.android","icon.rainbow");
      //  await driver.pressKeyCode(187);
      await driver.pause(2000);
      await $('//android.widget.ImageView[@content-desc="Settings"]').click();
      await $('//*[@text="App icon"]').click();
      await $('//*[@text="Default"]').click();
      await $('//*[@resource-id="android:id/button1"]').click();
   }
   async Tc_11(){
      await driver.startActivity("org.khanacademy.android","org.khanacademy.android.ui.library.MainActivity");
      await driver.pause(2000);
      await driver.back();
      // await driver.back();
   }
}

module.exports = new KhanAcademyApp();
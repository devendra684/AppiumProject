const KhanAcademy = require("../PageObject/KhanAcademyApp");

describe('Khan Academy Mobile App Testing of Android', () => {

    it('1. Go to Computer Science Section', async() => {
        await KhanAcademy.Tc_1();
    });

    it('2. Go To Cryptography and Bookmark Three Topics', async() => {
        await KhanAcademy.Tc_2();
    });

    it('3. Go To Information Theory And Bookmark Modern IT', async() => {
        await KhanAcademy.Tc_3();
    });

    it('4. Open Bookmark and Verify Bookmark List', async() => {
        await KhanAcademy.Tc_4();
    });

    it('5. Clear All Bookmarks', async() => {
        await KhanAcademy.tc_5();
    });

    it('6. Go To "Life Skills" And Play Video', async() => {
        await KhanAcademy.tc_6();
    });

    it('7. Verify Last Seen Topic', async() => {
        await KhanAcademy.Tc_7();
    });

    it('8. Explore Arts and humanities ', async() => {
        await KhanAcademy.Tc_8();
    });

    it('9. Play Video & Share Message', async() => {
        await KhanAcademy.Tc_9();
    });

    it('10. Changing App Icon ', async () => {
        await KhanAcademy.Tc_10();
    });

    it('11. Close App', async () => {
        await KhanAcademy.Tc_11();
    });
});
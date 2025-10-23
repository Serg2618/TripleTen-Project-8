const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('adding a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        await page.fillCardNumber('1234 0000 4321', '121');
        const changeFocusSpace = await $(page.changeFocusSpace);
        await changeFocusSpace.click();
        const linkButton = await $(page.linkButton);
        await linkButton.click();
        const cardButton = await $(page.cardButton);
        await expect(cardButton).toBeExisting();
    })

    it('Writing a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const addText = await $(page.textInput);
        await addText.waitForDisplayed();
        await addText.setValue("Get some whiskey");
        await expect(addText).toHaveValue("Get some whiskey");
    })

    it('Order a Blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.click();
        const checkBoxButton = await $(page.checkBoxButton);
        const actualValue = checkBoxCheck.getProperty("checked");
        await expect(actualValue).toBeTruthy();
    })

    it('Order 2 IceCream', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.click();
        const plusButton = await $(page.plusButton);
        await plusButton.click();
        await plusButton.click();
        const twoIceCreams = await $(page.twoIceCreams);
        await expect(twoIceCreams).toBeExisting();
    })

    it('Car Search Modal appearance', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const carModalButton = await $(page.carModalButton);
        await carModalButton.click();
        const checkBoxCheck = await $(page.checkBoxCheck);
        await checkBoxCheck.waitForDisplayed();
        await browser.pause(10000);
        const carSearchModal = await $(page.carSearchModal);
        await expect(carSearchModal).toBeDisplayed();
    })
})
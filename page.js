module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardInput: '#number',
    cvvInput: `//div[@class='card-code-input']//input[@id='code']`,
    textInput: '#comment',
    checkBoxCheck: '.switch-input',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    addCardButton: 'div=Add card',
    paymentMethodButton: '.pp-text',
    linkButton: 'button=Link',
    cardButton: `//div[@class="pp-value-text" and text()="Card"]`,
    supportiveButton: `//div[@class='tcard-icon']//img[@alt='Supportive']`,
    checkBoxButton: `//div[@class='workflow']//div[1]//div[1]//div[2]//div[1]//span[1]`,
    twoIceCreams: `//div[normalize-space()='2']`,
    plusButton: `//div[@class='r-group']//div[1]//div[1]//div[2]//div[1]//div[3]`,
    carModalButton: `//button[@class='smart-button']`,
    // Modals
    phoneNumberModal: '.modal',
    carSearchModal: '//div[text()="Car search"]', 
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    fillCardNumber: async function(cardNumber, cvvNumber) {
        const cardNumberField = await $(this.cardInput);
        await cardNumberField.waitForDisplayed();
        await cardNumberField.setValue(cardNumber);
        const codeNumberField = await $(this.cvvInput);
        await codeNumberField.waitForDisplayed();
        await codeNumberField.setValue(cvvNumber);
    },
    fillOrderRequirements: async function() {
        const switchButton = await $(this.BlanketsAndHandkerchiefs);
        await switchButton.waitForDisplayed();
        await switchButton.click();
        const counterButton = await $(this.IceCream);
        await counterButton.waitForDisplayed();
        await counterButton.click();
    },
};
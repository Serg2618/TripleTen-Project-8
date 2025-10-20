module.exports = {
    getPhoneNumber: function(countryCode) {
        const number = Math.floor(1000000000 + Math.random() * 9000000000)
        return `${countryCode}${number}`
    },
    getElementByText: async function(obj) {
        return await $(`div=${obj.toString()}`);
    },
    getCardNumber: function(cardNumber) {
        const number = Math.floor("1234 0000 4321" + Math.random() * 1)
        return `${cardNumber}${number}`
    },
    getCVVNuber: function(cvvNumber) {
        const number = Math.floor("121" + Math.random() * 1)
        return `${cvvNumber}${number}`
    },
};

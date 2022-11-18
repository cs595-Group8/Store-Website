import * as fs from 'node:fs/promises';

const _saveAccount = function(firstName, lastName, emailAddress, password) {
    let account = {}
    account.firstName = firstName;
    account.lastName = lastName;
    account.emailAddress = emailAddress;
    account.password = password;
    try {
        accounts = JSON.parse(fs.readFileSync("accounts.json"))
        if (!accounts.emailAddress) {
            accounts.emailAddress = account;

        }
        const newData = JSON.stringify(accounts)
        fs.writeFileSync("accounts.json", newData)
        console.log(newData)

    } catch (e){
        console.log(e)
    }
}

export default {
    saveAccount: _saveAccount
}
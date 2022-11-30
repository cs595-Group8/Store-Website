import * as fs from 'fs';
import axios from 'axios'

const databaseHost = 'http://localhost'
const databasePort = '3000'

// (!!) returns a Promise, needs to be awaited
// look in the CreateAccount script for await example
const getAccounts = function() {
    return axios.get(databaseHost + ':' + databasePort + '/accounts')
}

const saveAccount = async function(firstName, lastName, emailAddress, password) {
    const response = await getAccounts();
    let valid = true;
    if (response.data) {
        response.data.forEach((account) => {
            console.log(account.emailAddress)
            console.log(account.emailAddress, emailAddress)
            if (account.emailAddress == emailAddress) {
                valid = false;
            }
        })
    }

    if (valid) {
        await axios.post(databaseHost + ':' + databasePort + '/accounts', 
            { 
                "firstName": firstName, 
                "lastName": lastName, 
                "emailAddress": emailAddress, 
                "password": password
            })
        return null
    } else {
        return "Account with given email address already exists."
    }
}

// (!!) returns a Promise, needs to be awaited
// look in the CreateAccount script for await example
const getSavedItems = function() {
    return axios.get(databaseHost + ':' + databasePort + '/savedItems')
}

const saveItem = function(name, price, vendor, status, rating, img, productLink) {
   return axios.post(databaseHost + ':' + databasePort + '/savedItems', 
        { 
            "name": name, 
            "price": price,
            "vendor": vendor,
            "status": status,
            "rating": rating,
            "img": img,
            "productLink": productLink
        })
}

export {
    saveAccount,
    getAccounts,
    getSavedItems,
    saveItem
}
import * as fs from 'fs';
import axios from 'axios'

const databaseHost = 'http://localhost'
const databasePort = '3000'

// (!!) returns a Promise, needs to be awaited
// look in the CreateAccount script for await example
const getAccounts = function() {
    return axios.get(databaseHost + ':' + databasePort + '/accounts')
}

const getAccount = function(id) {
    return axios.get(databaseHost + ':' + databasePort + '/accounts/' + id)
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
                "password": password,
                "savedItems": []
            })
        return null
    } else {
        return "Account with given email address already exists."
    }
}

const updateAccount = function(id, firstName, lastName, emailAddress, password) {
    return getAccount(id)
        .then((result) => {
            console.log(result)
            return axios.put(databaseHost + ':' + databasePort + '/accounts/' + id, 
            { 
                "firstName": firstName, 
                "lastName": lastName, 
                "emailAddress": emailAddress, 
                "password": password,
                "savedItems": result.data.savedItems
            })
        })
}

// (!!) returns a Promise, needs to be awaited
// look in the CreateAccount script for await example
const getSavedItems = function(id) {
    return axios.get(databaseHost + ':' + databasePort + '/accounts/' + id).then((user) => {
        return user.data.savedItems;
    })
}

const saveItem = function(name, price, vendor, status, rating, img, productLink) {
    return getUserSession().then((user) => {
        const id = user.id;
        getAccount(id)
        .then((result) => {
            let items = result.data.savedItems
            items.push(        
            { 
                "name": name, 
                "price": price,
                "vendor": vendor,
                "status": status,
                "rating": rating,
                "img": img,
                "productLink": productLink
            })

            return axios.put(databaseHost + ':' + databasePort + '/accounts/' + id, 
            { 
                "firstName": result.data.firstName, 
                "lastName": result.data.lastName, 
                "emailAddress": result.data.emailAddress, 
                "password": result.data.password,
                "savedItems": items
            })
        })
    }) 
}

const deleteItem = function(productLink) {
    return getUserSession().then((user) => {
        const id = user.id;
        getAccount(id)
        .then((result) => {
            let items = [];
            result.data.savedItems.forEach(item => {
                if(item.productLink !== productLink){
                    items.push(item);
                }
            })
            
            return axios.put(databaseHost + ':' + databasePort + '/accounts/' + id, 
            { 
                "firstName": result.data.firstName, 
                "lastName": result.data.lastName, 
                "emailAddress": result.data.emailAddress, 
                "password": result.data.password,
                "savedItems": items
            })
        })
    })
}

const getUserSession = function() {
    return getAccounts().then((response) => {
        if (response && response.data.length > 0) {
            return axios.get(databaseHost + ':' + databasePort + '/user')
                .then((response2) => {
                    console.log(response2)
                    if (response2) {
                        for (const account of response.data) {
                            console.log(account.id, response2.data.userID)
                            if (account.id === response2.data.userID) {
                                return Promise.resolve(account)
                            }
                        }
                        return Promise.resolve(null)
                    }
                    return Promise.resolve(null)
                })
        }
        return Promise.resolve(null)
    })

}

const saveUserSession = function(userID) {
    return axios.put(databaseHost + ':' + databasePort + '/user', 
    { 
        "userID": userID
    })
}

const clearUserSession = function(userID) {
    return axios.put(databaseHost + ':' + databasePort + '/user', {})
}

export {
    saveAccount,
    getAccounts,
    updateAccount,
    getSavedItems,
    saveItem,
    getUserSession,
    saveUserSession,
    clearUserSession,
    deleteItem
}
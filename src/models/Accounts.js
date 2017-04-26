import Model from './Model.js';

var Accounts = {
    login: function(username, password) {
        var accountList = Model.data.accounts;
        for (var i = 0; i < accountList.length; i++) {
            if (accountList[i].user_name == username) {
                if (accountList[i].password == password) {
                    Model.data.session = accountList[i];
                    Model.save();
                    return true;
                }
            }
        }
        return false;
    },

    logout: function() {
        Model.data.session = {};
        Model.save();
    },

    isLoggedIn: function() {
        if (!Model.data.session.user_name) {
            return false;
        }
        return true;
    },

    getSessionData: function() {
        return Model.data.session;
    },

    registerNewAccount: function(username, password, account_type) {
        var newAccount = {
            account_type: account_type,
            address: 'Alanta, GA',
            email: 'example@example.com',
            user_name: username,
            password: password,
            title: 'Student'
        }
        Model.data.accounts.push(newAccount);
        Model.save();

        //remote
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://nstoltzfus3.pythonanywhere.com/adduser', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(newAccount));
    }
};

export default Accounts;

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
        Model.data.accounts.append(newAccount);
        Model.save();
    }
};

export default Accounts;

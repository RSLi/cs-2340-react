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
    }
};

export default Accounts;

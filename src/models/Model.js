var Model = {

    data: {
        accounts: [],
        reports: [],
        session: {}
    },

    set: function(data) {
        window.localStorage.setItem('data', JSON.stringify(data));
    },

    get: function() {
        return JSON.parse(window.localStorage.getItem('data'));
    },

    save: function() {
        Model.set(Model.data);
    },

    sync: function() {
        //first sync with local storage
        Model.data = Model.get();
        //remote syncing accounts
        var requestAccounts = new XMLHttpRequest();
        requestAccounts.open( "GET", "http://nstoltzfus3.pythonanywhere.com/getusers", false );
        requestAccounts.send( null );
        var accountsArr = JSON.parse(requestAccounts.responseText).allUsers;
        if (!accountsArr) {
            //Fail to get accounts from server, retain local storage
        } else {
            Model.data.accounts = accountsArr;
        }

        //remote syncing reports
        var requestReports = new XMLHttpRequest();
        requestReports.open( "GET", "http://nstoltzfus3.pythonanywhere.com/getreports", false );
        requestReports.send( null );
        var reportsArr = JSON.parse(requestReports.responseText).allReports;
        if (!reportsArr) {
            //Fail to get reports from server, retain local storage
        } else {
            Model.data.reports = reportsArr;
        }
    },

    init: function() {
        //if use for first time
        if (!window.localStorage.getItem('data')) {
            Model.set(Model.data);
        }

        //sync
        Model.sync();
        console.log(Model.data);
    }
};

export default Model;

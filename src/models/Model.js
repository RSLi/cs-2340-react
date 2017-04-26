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
        Model.data = Model.get();
        //TODO: remote syncing
    },

    init: function() {
        
    }
};

export default Model;

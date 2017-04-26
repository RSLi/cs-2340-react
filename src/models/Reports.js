import Model from './Model.js';
import Accounts from './Accounts.js';
import moment from 'moment';

var Reports = {
    getListSourceReport: function() {
        var reportsArr = Model.data.reports;
        var sourceReportsArr = [];
        for (var i = 0; i < reportsArr.length; i++) {
            if (reportsArr[i].report_type == "Water Source Report") {
                sourceReportsArr.push(reportsArr[i]);
            }
        }
        return sourceReportsArr;
    },

    getListPurityReport: function() {
        var reportsArr = Model.data.reports;
        var purityReportsArr = [];
        for (var i = 0; i < reportsArr.length; i++) {
            if (reportsArr[i].report_type == "Water Purity Report") {
                purityReportsArr.push(reportsArr[i]);
            }
        }
        return purityReportsArr;
    },

    submitSourceReport: function(longitude, latitude, water_type, condition) {
        var username = Accounts.getSessionData().user_name;
        var date = moment().format();
        var id = Model.data.reports.length;
        var report = {
            "contaminant_ppm": 0.0,
            "date": date,
            "id": id,
            "latitude": latitude,
            "location": latitude + "," + longitude,
            "longitude": longitude,
            "report_number": id,
            "report_type": "Water Source Report",
            "reporter_username": username,
            "virus_ppm": 0.0,
            "water_condition": condition,
            "water_type": water_type,
        };
        Model.data.reports.push(report);
        Model.save();
    },

    submitPurityReport: function(longitude, latitude, contaminant_ppm, virus_ppm, water_condition) {
        var username = Accounts.getSessionData().user_name;
        var date = moment().format();
        var id = Model.data.reports.length;
        var report = {
            "contaminant_ppm": contaminant_ppm,
            "date": date,
            "id": id,
            "latitude": latitude,
            "location": latitude + "," + longitude,
            "longitude": longitude,
            "report_number": id,
            "report_type": "Water Purity Report",
            "reporter_username": username,
            "virus_ppm": virus_ppm,
            "water_condition": water_condition,
            "water_type": "None",
        };
        Model.data.reports.push(report);
        Model.save();
    }
};

export default Reports;

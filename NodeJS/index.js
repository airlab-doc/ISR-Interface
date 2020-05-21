var http = require('http');
var url = require('url');
var fs = require('fs');

const { google } = require('googleapis');
const keys = require('./sheets-api-project/keys.json')

const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080

// https://developers.google.com/identity/protocols/oauth2/scopes

const client = new google.auth.JWT(
    keys.client_email,
    null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
);


client.authorize(function(err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Success Connected!!!')
            //gsrun(client);
    }
});


async function gsrun(cl, data) {
    const gsapi = google.sheets({ version: 'v4', auth: cl });
    var d1 = data.nama;
    var d2 = data.date;
    console.log(d1);
    // console.log(d2);
    var sdate = d2.substring(5, 7);
    console.log(sdate.toString());
    // III wWORKSHEET
    var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var e = '05', //May
        f = '06', //June
        g = '07', //July
        h = '08', //August
        i = '09', //September
        j = '10', //October
        k = '11', //November
        l = '12'; //December
    if (d1 == 'wahidbahrudin' & sdate == e) {
        var flag1 = 'III!E3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == e) {
        var flag1 = 'III!E9';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == e) {
        var flag1 = 'III!E15';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == e) {
        var flag1 = 'III!E21';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == e) {
        var flag1 = 'INI BATAM!E3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == e) {
        var flag1 = 'INI BATAM!E9';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == e) {
        var flag1 = 'INI BATAM!E15';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == e) {
        var flag1 = 'CLS!E3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == e) {
        var flag1 = 'CLS!E15';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == e) {
        var flag1 = 'CLS!E21';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == e) {
        var flag1 = 'CLS!E27';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == e) {
        var flag1 = 'CLS!E33';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == e) {
        var flag1 = 'CLS!E39';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == e) {
        var flag1 = 'CLS!E45';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == e) {
        var flag1 = 'CLS!E51';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == e) {
        var flag1 = 'CLS!E57';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == e) {
        var flag1 = 'CLS!E63';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == e) {
        var flag1 = 'CLS!E69';
        console.log('Match');
        // Juny
    } else if (d1 == 'wahidbahrudin' & sdate == f) {
        var flag1 = 'III!G3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == f) {
        var flag1 = 'III!G9';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == f) {
        var flag1 = 'III!G15';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == f) {
        var flag1 = 'III!G21';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == f) {
        var flag1 = 'INI BATAM!G3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == f) {
        var flag1 = 'INI BATAM!G9';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == f) {
        var flag1 = 'INI BATAM!G15';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == f) {
        var flag1 = 'CLS!G3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == f) {
        var flag1 = 'CLS!G15';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == f) {
        var flag1 = 'CLS!G21';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == f) {
        var flag1 = 'CLS!G27';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == f) {
        var flag1 = 'CLS!G33';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == f) {
        var flag1 = 'CLS!G39';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == f) {
        var flag1 = 'CLS!G45';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == f) {
        var flag1 = 'CLS!G51';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == f) {
        var flag1 = 'CLS!G57';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == f) {
        var flag1 = 'CLS!G63';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == f) {
        var flag1 = 'CLS!G69';
        console.log('Match');
    } else if (d1 == 'wahidbahrudin' & sdate == g) {
        var flag1 = 'III!I3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == g) {
        var flag1 = 'III!I9';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == g) {
        var flag1 = 'III!I15';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == g) {
        var flag1 = 'III!I21';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == g) {
        var flag1 = 'INI BATAM!I3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == g) {
        var flag1 = 'INI BATAM!I9';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == g) {
        var flag1 = 'INI BATAM!I15';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == g) {
        var flag1 = 'CLS!I3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == g) {
        var flag1 = 'CLS!I15';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == g) {
        var flag1 = 'CLS!I21';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == g) {
        var flag1 = 'CLS!I27';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == g) {
        var flag1 = 'CLS!I33';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == g) {
        var flag1 = 'CLS!I39';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == g) {
        var flag1 = 'CLS!I45';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == g) {
        var flag1 = 'CLS!I51';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == g) {
        var flag1 = 'CLS!I57';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == g) {
        var flag1 = 'CLS!I63';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == g) {
        var flag1 = 'CLS!I69';
        console.log('Match');

    } else if (d1 == 'wahidbahrudin' & sdate == h) {
        var flag1 = 'III!K3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == h) {
        var flag1 = 'III!K9';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == h) {
        var flag1 = 'III!K15';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == h) {
        var flag1 = 'III!K21';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == h) {
        var flag1 = 'INI BATAM!K3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == h) {
        var flag1 = 'INI BATAM!K9';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == h) {
        var flag1 = 'INI BATAM!K15';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == h) {
        var flag1 = 'CLS!K3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == h) {
        var flag1 = 'CLS!K15';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == h) {
        var flag1 = 'CLS!K21';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == h) {
        var flag1 = 'CLS!K27';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == h) {
        var flag1 = 'CLS!K33';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == h) {
        var flag1 = 'CLS!K39';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == h) {
        var flag1 = 'CLS!K45';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == h) {
        var flag1 = 'CLS!K51';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == h) {
        var flag1 = 'CLS!K57';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == h) {
        var flag1 = 'CLS!K63';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == h) {
        var flag1 = 'CLS!K69';
        console.log('Match');

    } else if (d1 == 'wahidbahrudin' & sdate == i) {
        var flag1 = 'III!M3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == i) {
        var flag1 = 'III!M9';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == i) {
        var flag1 = 'III!M15';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == i) {
        var flag1 = 'III!M21';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == i) {
        var flag1 = 'INI BATAM!M3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == i) {
        var flag1 = 'INI BATAM!M9';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == i) {
        var flag1 = 'INI BATAM!M15';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == i) {
        var flag1 = 'CLS!M3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == i) {
        var flag1 = 'CLS!M15';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == i) {
        var flag1 = 'CLS!M21';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == i) {
        var flag1 = 'CLS!M27';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == i) {
        var flag1 = 'CLS!M33';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == i) {
        var flag1 = 'CLS!M39';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == i) {
        var flag1 = 'CLS!M45';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == i) {
        var flag1 = 'CLS!M51';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == i) {
        var flag1 = 'CLS!M57';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == i) {
        var flag1 = 'CLS!M63';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == i) {
        var flag1 = 'CLS!M69';
        console.log('Match');
    } else if (d1 == 'wahidbahrudin' & sdate == j) {
        var flag1 = 'III!O3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == j) {
        var flag1 = 'III!O9';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == j) {
        var flag1 = 'III!O15';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == j) {
        var flag1 = 'III!O21';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == j) {
        var flag1 = 'INI BATAM!O3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == j) {
        var flag1 = 'INI BATAM!O9';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == j) {
        var flag1 = 'INI BATAM!O15';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == j) {
        var flag1 = 'CLS!O3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == j) {
        var flag1 = 'CLS!O15';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == j) {
        var flag1 = 'CLS!O21';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == j) {
        var flag1 = 'CLS!O27';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == j) {
        var flag1 = 'CLS!O33';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == j) {
        var flag1 = 'CLS!O39';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == j) {
        var flag1 = 'CLS!O45';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == j) {
        var flag1 = 'CLS!O51';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == j) {
        var flag1 = 'CLS!O57';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == j) {
        var flag1 = 'CLS!O63';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == j) {
        var flag1 = 'CLS!O69';
        console.log('Match');
    } else if (d1 == 'wahidbahrudin' & sdate == k) {
        var flag1 = 'III!Q3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == k) {
        var flag1 = 'III!Q9';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == k) {
        var flag1 = 'III!Q15';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == k) {
        var flag1 = 'III!Q21';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == k) {
        var flag1 = 'INI BATAM!Q3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == k) {
        var flag1 = 'INI BATAM!Q9';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == k) {
        var flag1 = 'INI BATAM!Q15';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == k) {
        var flag1 = 'CLS!Q3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == k) {
        var flag1 = 'CLS!Q15';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == k) {
        var flag1 = 'CLS!Q21';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == k) {
        var flag1 = 'CLS!Q27';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == k) {
        var flag1 = 'CLS!Q33';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == k) {
        var flag1 = 'CLS!Q39';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == k) {
        var flag1 = 'CLS!Q45';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == k) {
        var flag1 = 'CLS!Q51';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == k) {
        var flag1 = 'CLS!Q57';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == k) {
        var flag1 = 'CLS!Q63';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == k) {
        var flag1 = 'CLS!Q69';
        console.log('Match');
    } else if (d1 == 'wahidbahrudin' & sdate == l) {
        var flag1 = 'III!S3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == l) {
        var flag1 = 'III!S9';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == l) {
        var flag1 = 'III!S15';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == l) {
        var flag1 = 'III!S21';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == l) {
        var flag1 = 'INI BATAM!S3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == l) {
        var flag1 = 'INI BATAM!S9';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == l) {
        var flag1 = 'INI BATAM!S15';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == l) {
        var flag1 = 'CLS!S3';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == l) {
        var flag1 = 'CLS!S15';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == l) {
        var flag1 = 'CLS!S21';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == l) {
        var flag1 = 'CLS!S27';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == l) {
        var flag1 = 'CLS!S33';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == l) {
        var flag1 = 'CLS!S39';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == l) {
        var flag1 = 'CLS!S45';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == l) {
        var flag1 = 'CLS!S51';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == l) {
        var flag1 = 'CLS!S57';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == l) {
        var flag1 = 'CLS!S63';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == l) {
        var flag1 = 'CLS!S69';
        console.log('Match');
    } else {
        var flag1 = 'Test Sheet!A200';
        console.log('Not Match');
    }


    const postData = {
        spreadsheetId: '1I5D32eUE4-F7SOs19DmQJ0_p9njBw9Uy5fyDeLOiQ20',
        range: flag1,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [
                [data.date, data.tbm],
                ['', data.tpul],
                ['', data.tint]
            ]
        }
    }

    let res = await gsapi.spreadsheets.values.update(postData);
}

async function gsrun2(cl, data) {
    const gsapi = google.sheets({ version: 'v4', auth: cl });
    var d1 = data.nama;
    var d2 = data.date;
    console.log(d1);
    // console.log(d2);
    var sdate = d2.substring(5, 7);
    console.log(sdate.toString());
    // III WORKSHEET
    var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var e = '05',
        f = '06',
        g = '07',
        h = '08',
        i = '09',
        j = '10',
        k = '11',
        l = '12';
    if (d1 == 'wahidbahrudin' & sdate == e) {
        var flag1 = 'III!F6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == e) {
        var flag1 = 'III!F12';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == e) {
        var flag1 = 'III!F18';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == e) {
        var flag1 = 'III!F24';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == e) {
        var flag1 = 'INI BATAM!F6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == e) {
        var flag1 = 'INI BATAM!F12';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == e) {
        var flag1 = 'INI BATAM!F18';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == e) {
        var flag1 = 'CLS!F6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == e) {
        var flag1 = 'CLS!F12';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == e) {
        var flag1 = 'CLS!F18';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == e) {
        var flag1 = 'CLS!F24';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == e) {
        var flag1 = 'CLS!F30';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == e) {
        var flag1 = 'CLS!F36';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == e) {
        var flag1 = 'CLS!F42';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == e) {
        var flag1 = 'CLS!F48';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == e) {
        var flag1 = 'CLS!F54';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == e) {
        var flag1 = 'CLS!F60';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == e) {
        var flag1 = 'CLS!F66';
        console.log('Match');
        // Juny
    } else if (d1 == 'wahidbahrudin' & sdate == f) {
        var flag1 = 'III!H6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == f) {
        var flag1 = 'III!H12';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == f) {
        var flag1 = 'III!H18';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == f) {
        var flag1 = 'III!H24';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == f) {
        var flag1 = 'INI BATAM!H6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == f) {
        var flag1 = 'INI BATAM!H12';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == f) {
        var flag1 = 'INI BATAM!H18';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == f) {
        var flag1 = 'CLS!H6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == f) {
        var flag1 = 'CLS!H12';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == f) {
        var flag1 = 'CLS!H18';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == f) {
        var flag1 = 'CLS!H24';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == f) {
        var flag1 = 'CLS!H30';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == f) {
        var flag1 = 'CLS!H36';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == f) {
        var flag1 = 'CLS!H42';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == f) {
        var flag1 = 'CLS!H48';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == f) {
        var flag1 = 'CLS!H54';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == f) {
        var flag1 = 'CLS!H60';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == f) {
        var flag1 = 'CLS!H66';
        console.log('Match');
    } else if (d1 == 'wahidbahrudin' & sdate == g) {
        var flag1 = 'III!J6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == g) {
        var flag1 = 'III!J12';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == g) {
        var flag1 = 'III!J18';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == g) {
        var flag1 = 'III!J24';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == g) {
        var flag1 = 'INI BATAM!J6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == g) {
        var flag1 = 'INI BATAM!J12';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == g) {
        var flag1 = 'INI BATAM!J18';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == g) {
        var flag1 = 'CLS!J6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == g) {
        var flag1 = 'CLS!J12';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == g) {
        var flag1 = 'CLS!J18';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == g) {
        var flag1 = 'CLS!J24';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == g) {
        var flag1 = 'CLS!J30';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == g) {
        var flag1 = 'CLS!J36';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == g) {
        var flag1 = 'CLS!J42';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == g) {
        var flag1 = 'CLS!J48';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == g) {
        var flag1 = 'CLS!J54';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == g) {
        var flag1 = 'CLS!J60';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == g) {
        var flag1 = 'CLS!J66';
        console.log('Match');
    } else if (d1 == 'wahidbahrudin' & sdate == h) {
        var flag1 = 'III!L6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == h) {
        var flag1 = 'III!L12';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == h) {
        var flag1 = 'III!L18';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == h) {
        var flag1 = 'III!L24';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == h) {
        var flag1 = 'INI BATAM!L6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == h) {
        var flag1 = 'INI BATAM!L12';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == h) {
        var flag1 = 'INI BATAM!L18';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == h) {
        var flag1 = 'CLS!L6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == h) {
        var flag1 = 'CLS!L12';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == h) {
        var flag1 = 'CLS!L18';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == h) {
        var flag1 = 'CLS!L24';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == h) {
        var flag1 = 'CLS!L30';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == h) {
        var flag1 = 'CLS!L36';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == h) {
        var flag1 = 'CLS!L42';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == h) {
        var flag1 = 'CLS!L48';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == h) {
        var flag1 = 'CLS!L54';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == h) {
        var flag1 = 'CLS!L60';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == h) {
        var flag1 = 'CLS!L66';
        console.log('Match');
    } else if (d1 == 'wahidbahrudin' & sdate == i) {
        var flag1 = 'III!N6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == i) {
        var flag1 = 'III!N12';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == i) {
        var flag1 = 'III!N18';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == i) {
        var flag1 = 'III!N24';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == i) {
        var flag1 = 'INI BATAM!N6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == i) {
        var flag1 = 'INI BATAM!N12';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == i) {
        var flag1 = 'INI BATAM!N18';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == i) {
        var flag1 = 'CLS!N6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == i) {
        var flag1 = 'CLS!N12';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == i) {
        var flag1 = 'CLS!N18';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == i) {
        var flag1 = 'CLS!N24';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == i) {
        var flag1 = 'CLS!N30';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == i) {
        var flag1 = 'CLS!N36';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == i) {
        var flag1 = 'CLS!N42';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == i) {
        var flag1 = 'CLS!N48';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == i) {
        var flag1 = 'CLS!N54';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == i) {
        var flag1 = 'CLS!N60';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == i) {
        var flag1 = 'CLS!N66';
        console.log('Match');
    } else if (d1 == 'wahidbahrudin' & sdate == j) {
        var flag1 = 'III!P6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == j) {
        var flag1 = 'III!P12';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == j) {
        var flag1 = 'III!P18';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == j) {
        var flag1 = 'III!P24';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == j) {
        var flag1 = 'INI BATAM!P6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == j) {
        var flag1 = 'INI BATAM!P12';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == j) {
        var flag1 = 'INI BATAM!P18';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == j) {
        var flag1 = 'CLS!P6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == j) {
        var flag1 = 'CLS!P12';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == j) {
        var flag1 = 'CLS!P18';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == j) {
        var flag1 = 'CLS!P24';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == j) {
        var flag1 = 'CLS!P30';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == j) {
        var flag1 = 'CLS!P36';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == j) {
        var flag1 = 'CLS!P42';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == j) {
        var flag1 = 'CLS!P48';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == j) {
        var flag1 = 'CLS!P54';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == j) {
        var flag1 = 'CLS!P60';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == j) {
        var flag1 = 'CLS!P66';
        console.log('Match');
    } else if (d1 == 'wahidbahrudin' & sdate == k) {
        var flag1 = 'III!R6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == k) {
        var flag1 = 'III!R12';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == k) {
        var flag1 = 'III!R18';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == k) {
        var flag1 = 'III!R24';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == k) {
        var flag1 = 'INI BATAM!R6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == k) {
        var flag1 = 'INI BATAM!R12';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == k) {
        var flag1 = 'INI BATAM!R18';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == k) {
        var flag1 = 'CLS!R6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == k) {
        var flag1 = 'CLS!R12';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == k) {
        var flag1 = 'CLS!R18';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == k) {
        var flag1 = 'CLS!R24';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == k) {
        var flag1 = 'CLS!R30';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == k) {
        var flag1 = 'CLS!R36';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == k) {
        var flag1 = 'CLS!R42';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == k) {
        var flag1 = 'CLS!R48';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == k) {
        var flag1 = 'CLS!R54';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == k) {
        var flag1 = 'CLS!R60';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == k) {
        var flag1 = 'CLS!R66';
        console.log('Match');
    } else if (d1 == 'wahidbahrudin' & sdate == l) {
        var flag1 = 'III!T6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'triarief' & sdate == l) {
        var flag1 = 'III!T12';
        console.log('Match');
    } else if (d1 == 'samiran' & sdate == l) {
        var flag1 = 'III!T18';
        console.log('Match');
    } else if (d1 == 'rochman' & sdate == l) {
        var flag1 = 'III!T24';
        console.log('Match');
    } else if (d1 == 'abdulhanan' & sdate == l) {
        var flag1 = 'INI BATAM!T6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'jajangnurdin' & sdate == l) {
        var flag1 = 'INI BATAM!T12';
        console.log('Match');
    } else if (d1 == 'stevenfsimanjuntak' & sdate == l) {
        var flag1 = 'INI BATAM!T18';
        console.log('Match');
    } else if (d1 == 'maulanafajarmulyani' & sdate == l) {
        var flag1 = 'CLS!T6';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'nurarifin' & sdate == l) {
        var flag1 = 'CLS!T12';
        console.log('Match');
    } else if (d1 == 'okihardiansyah' & sdate == l) {
        var flag1 = 'CLS!T18';
        console.log('Match');
    } else if (d1 == 'arijokosumaryanto' & sdate == l) {
        var flag1 = 'CLS!T24';
        console.log(flag1.toString());
        console.log('Match');
    } else if (d1 == 'rezaandriani' & sdate == l) {
        var flag1 = 'CLS!T30';
        console.log('Match');
    } else if (d1 == 'andisetiawan' & sdate == l) {
        var flag1 = 'CLS!T36';
        console.log('Match');
    } else if (d1 == 'tanshiushia' & sdate == l) {
        var flag1 = 'CLS!T42';
        console.log('Match');
    } else if (d1 == 'dedihermawan' & sdate == l) {
        var flag1 = 'CLS!T48';
        console.log('Match');
    } else if (d1 == 'riswana' & sdate == l) {
        var flag1 = 'CLS!T54';
        console.log('Match');
    } else if (d1 == 'ridlo' & sdate == l) {
        var flag1 = 'CLS!T60';
        console.log('Match');
    } else if (d1 == 'anggritkrisbandaru' & sdate == l) {
        var flag1 = 'CLS!T66';
        console.log('Match');
    } else {
        var flag1 = 'Test Sheet!A200';
        console.log('Not Match');
    }

    const postData = {
        spreadsheetId: '1I5D32eUE4-F7SOs19DmQJ0_p9njBw9Uy5fyDeLOiQ20',
        range: flag1,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [
                [data.budget]
            ]
        }
    }
    console.log(data.budget);
    let res = await gsapi.spreadsheets.values.update(postData);
}


var router = express.Router();
var router2 = express.Router();
console.log('tes');

router.get('/test', function(req, res) {
    //res.json({ message: 'hooray! welcome to our api!' });
    //res.header('Location', '/');
    res.redirect('/');
    console.log(req.query);
    gsrun(client, req.query);
});
router.get('/test2', async function(req, res) {
    //res.json({ message: 'hooray! welcome to our api!' });
    //res.header('Location', '/');
    res.redirect('/admin');
    console.log(req.query);
    await gsrun2(client, req.query);
});
express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // add Multiple Pages for Web Here
    .get('/', (req, res) => res.render('pages/index'))
    .get('/admin', (req, res) => res.render('pages/indexadmin'))
    .use('/api', router)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
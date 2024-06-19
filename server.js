"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var app = express();
var port = 3000;
var dbFilePath = 'db.json';
// Middleware to parse JSON bodies
app.use(express.json());
app.get('/ping', function (req, res) {
    res.send(true);
});
app.post('/submit', function (req, res) {
    var submission = req.body;
    // Read existing submissions from the JSON file
    var submissions = readSubmissionsFromFile();
    // Add new submission
    submissions.push(submission);
    console.log(submissions);
    // Write updated submissions to the JSON file
    writeSubmissionsToFile(submissions);
    res.send(submission);
});
app.get('/read', function (req, res) {
    var index = typeof req.query.index === 'string' ? parseInt(req.query.index) : 0;
    var submissions = readSubmissionsFromFile();
    if (index >= 0 && index < submissions.length) {
        res.send(submissions[index]);
    }
    else {
        res.status(404).send({ error: 'Index out of bounds' });
    }
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
function readSubmissionsFromFile() {
    if (fs.existsSync(dbFilePath)) {
        var data = fs.readFileSync(dbFilePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
}
function writeSubmissionsToFile(submissions) {
    fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));
}

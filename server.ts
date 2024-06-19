import express = require('express');
import fs = require('fs');

const app = express();
const port = 3000;

interface Submission {
  name: string;
  email: string;
  phone: string;
  github_link: string;
  stopwatch_time: string;
}

const dbFilePath = 'db.json';

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send(true);
});

app.post('/submit', (req, res) => {
  const submission: Submission = req.body;
  
  // Read existing submissions from the JSON file
  const submissions = readSubmissionsFromFile();
  
  // Add new submission
  submissions.push(submission);
  
  // Write updated submissions to the JSON file
  writeSubmissionsToFile(submissions);

  res.send(submission);
});

app.get('/read', (req, res) => {
  const index = typeof req.query.index === 'string' ? parseInt(req.query.index) : 0;
  const submissions = readSubmissionsFromFile();
  
  if (index >= 0 && index < submissions.length) {
    res.send(submissions[index]);
  } else {
    res.status(404).send({ error: 'Index out of bounds' });
  }
});

app.delete('/delete/:index', (req, res) => {
  const index = parseInt(req.params.index);
  let submissions = readSubmissionsFromFile();
  
  if (index >= 0 && index < submissions.length) {
    const deletedSubmission = submissions.splice(index, 1)[0];
    writeSubmissionsToFile(submissions);
    res.send(deletedSubmission);
  } else {
    res.status(404).send({ error: 'Submission not found' });
  }
});

app.put('/edit/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const updatedSubmission: Submission = req.body;
  let submissions = readSubmissionsFromFile();
  
  if (index >= 0 && index < submissions.length) {
    submissions[index] = updatedSubmission;
    writeSubmissionsToFile(submissions);
    res.send(updatedSubmission);
  } else {
    res.status(404).send({ error: 'Submission not found' });
  }
});

app.get('/search', (req, res) => {
  const email = req.query.email as string;
  const submissions = readSubmissionsFromFile();
  const filteredSubmissions = submissions.filter(submission => submission.email === email);
  
  res.send(filteredSubmissions);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function readSubmissionsFromFile(): Submission[] {
  if (fs.existsSync(dbFilePath)) {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data) as Submission[];
  }
  return [];
}

function writeSubmissionsToFile(submissions: Submission[]): void {
  fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));
}

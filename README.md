# Backend Server with TypeScript and Express

This project is a simple backend server built with TypeScript and Express, using a JSON file as a database to store submissions. The server provides endpoints to save and retrieve submissions.

## Project Structure
backend/
│
├── src/
│ ├── server.ts
│ └── db.json
│
├── package.json
├── tsconfig.json
└── README.md


## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd backend
Install dependencies

bash
Copy code
npm install
Ensure tsconfig.json is correctly configured

json
Copy code
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}
Create the database file

Create a db.json file in the src directory with an initial empty array:

json
Copy code
[]
Running the Server
Using TypeScript
To run the server using TypeScript and ts-node:

bash
Copy code
npx ts-node src/server.ts
Using Compiled JavaScript
Compile TypeScript to JavaScript

bash
Copy code
npx tsc
Run the compiled JavaScript

bash
Copy code
node dist/server.js
Endpoints
1. Ping
URL: /ping
Method: GET
Response: true
2. Submit
URL: /submit
Method: POST
Parameters:
name (string)
email (string)
phone (string)
github_link (string)
stopwatch_time (string)
Response: The submitted data
3. Read
URL: /read
Method: GET
Query Parameter:
index (number, 0-based)
Response: The submission at the specified index
Example Usage
Using cURL
Ping
bash
Copy code
curl "http://localhost:3000/ping"
Submit
bash
Copy code
curl -X POST "http://localhost:3000/submit" -H "Content-Type: application/json" -d '{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "github_link": "https://github.com/johndoe",
  "stopwatch_time": "00:02:15"
}'
Read
bash
Copy code
curl "http://localhost:3000/read?index=0"
Using Postman
Ping: Make a GET request to http://localhost:3000/ping.
Submit: Make a POST request to http://localhost:3000/submit with a JSON body containing the required parameters.
Read: Make a GET request to http://localhost:3000/read?index=0.
Notes
Ensure that the server is running on the specified port (default: 3000) before making any requests.
The database file (db.json) is used to store submissions persistently. Make sure it exists in the src directory and is properly formatted as a JSON array.
License
This project is licensed under the MIT License.

sql
Copy code

You can copy and paste the entire content above into your `README.md` file in your project directory. Adjust the placeholders like `<repository-url>` with the actual details specific to your project.





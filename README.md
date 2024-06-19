# Slidely Backend Server with Express

## Overview

This project implements a backend server using Node.js and Express for managing form submissions. It provides various endpoints to handle CRUD operations on form submissions stored in a JSON file (`db.json`).

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. **Install dependencies**

   ```bash
   npm install
3. **Install dependencies**

   ```bash
   npm install
4. **Run the server**

   ```bash
   npm start
The server will start running on http://localhost:3000.

## Endpoints

### Ping

- **URL**: `/ping`
- **Method**: GET
- **Response**: `true`

### Submit

- **URL**: `/submit`
- **Method**: POST
- **Parameters**: JSON object containing `name`, `email`, `phone`, `github_link`, `stopwatch_time`
- **Response**: Submitted data

### Read

- **URL**: `/read`
- **Method**: GET
- **Query Parameter**: `index` (number, 0-based)
- **Response**: Submission at the specified index

### Delete

- **URL**: `/delete/:index`
- **Method**: DELETE
- **Response**: Deleted submission data

### Edit

- **URL**: `/edit/:index`
- **Method**: PUT
- **Parameters**: JSON object containing updated submission data
- **Response**: Updated submission data

### Search by Email

- **URL**: `/search`
- **Method**: GET
- **Query Parameter**: `email` (string)
- **Response**: Array of submissions matching the email

## Database

Submissions are stored in `db.json` in the following format:

'''json
   []

## Usage

### Using cURL

#### Ping

1. **Ping**

   ```bash
   curl "http://localhost:3000/ping"

2. **Submit**

   ```bash
   npm install
3. **Install dependencies**

   ```bash
   curl -X POST "http://localhost:3000/submit" -H "Content-Type: application/json" -d '{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "github_link": "https://github.com/johndoe",
  "stopwatch_time": "00:02:15"
   }'

4. **search by email**
   ```bash
  curl "http://localhost:3000/search?email=john@example.com"
   
5. **Read**
   ```bash
   curl "http://localhost:3000/read?index=0"
   
6. **Delete**

   ```bash
   curl -X DELETE "http://localhost:3000/delete/0"
   
 

## Using Postman

You can use Postman or any API testing tool to interact with the endpoints. Import the provided cURL examples or manually configure requests.

## Notes

- Ensure that `db.json` exists and is formatted correctly as a JSON array.
- Modify the `dbFilePath` variable in `server.ts` if the database file path is different.

## License

This project is licensed under the MIT License.


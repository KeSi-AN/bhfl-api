# BFHL API

A REST API for the BFHL assignment, built with Node.js and Express.

## Features
- POST `/bfhl` route
- Accepts an array and returns:
  - Status
  - User ID (format: full_name_ddmmyyyy)
  - Email ID
  - College Roll Number
  - Arrays for even, odd, alphabets (uppercase), special characters
  - Sum of numbers (as string)
  - Concatenation of all alphabetical characters in reverse order, alternating caps

## Usage
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node index.js
   ```
3. Send a POST request to `http://localhost:3000/bfhl` with JSON body:
   ```json
   {
     "data": ["a", "1", "334", "4", "R", "$"]
   }
   ```

## Deployment
- Host on Vercel, Railway, or Render
- Ensure the endpoint `/bfhl` is accessible

## Example Response
```
{
  "is_success": true,
  "user_id": "adham_ansari_04062004",
  "email": "adhamansari66@gmail.com",
  "roll_number": "22BCE8873",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

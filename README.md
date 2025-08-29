# BFHL API

A REST API for the BFHL assignment.

## Features
- **POST `/bfhl` route**: Accepts an array of mixed data types.
- **Returns**: A JSON object with the following fields:
  - `is_success`: `true` or `false`
  - `user_id`: Formatted as `full_name_ddmmyyyy`
  - `email`
  - `roll_number`
  - `odd_numbers`: An array of numbers
  - `even_numbers`: An array of numbers
  - `alphabets`: An array of characters, converted to uppercase
  - `sum`: The sum of all numbers, returned as a string
  - `concat_string`: The concatenation of all alphabetical characters in reverse order, with alternating case (e.g., `a` becomes `A`, `B` becomes `b`).

## Usage
The API is live and can be accessed at `https://bhfl-api-seven.vercel.app/api/bfhl`.

### Example Request (using PowerShell)

```powershell
Invoke-WebRequest -Uri "[https://bhfl-api-seven.vercel.app/api/bfhl](https://bhfl-api-seven.vercel.app/api/bfhl)" -Method POST -Body '{"data":["a","1","334","4","R","$"]}' -ContentType "application/json"

{
  "is_success": true,
  "user_id": "adham_ansari_04062004",
  "email": "adhamansari66@gmail.com",
  "roll_number": "22BCE8873",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "sum": "339",
  "concat_string": "Ra"
}
```

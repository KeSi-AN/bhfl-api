const express = require('express');
const app = express();
app.use(express.json());


const FULL_NAME = 'adham_ansari'; // lowercase, underscores
const DOB = '04062004'; // ddmmyyyy
const EMAIL = 'adhamansari66@gmail.com';
const ROLL_NUMBER = '22BCE8873';

function processData(data) {
  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let alpha_concat = '';

  data.forEach(item => {
    if (/^\d+$/.test(item)) {
      // Number
      const num = parseInt(item);
      if (num % 2 === 0) {
        even_numbers.push(item);
      } else {
        odd_numbers.push(item);
      }
      sum += num;
    } else if (/^[a-zA-Z]$/.test(item)) {
      // Alphabet
      alphabets.push(item.toUpperCase());
      alpha_concat += item;
    } else {
      // Special character
      special_characters.push(item);
    }
  });

  // Alternating caps in reverse order
  let concat_string = '';
  let chars = alpha_concat.split('').reverse();
  for (let i = 0; i < chars.length; i++) {
    concat_string += i % 2 === 0 ? chars[i].toUpperCase() : chars[i].toLowerCase();
  }

  return {
    is_success: true,
    user_id: `${FULL_NAME}_${DOB}`,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  };
}

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }
    const response = processData(data);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ is_success: false, message: 'Server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const fetch = require('node-fetch');

exports.handler = async (event) => {
  console.log("Event body:", event.body);
  try {
    const { name, email, message } = JSON.parse(event.body);
    console.log("Parsed data:", data);

    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const BASE_ID = 'your_base_id';
    const TABLE_NAME = 'your_table_name';

    const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Email: email,
          Message: message,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Submitted to Airtable successfully' }),
    };
  } catch (err) {
    console.error("Error parsing data or sending to Airtable:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Unknown Error!"}),
      
    };
  }
};

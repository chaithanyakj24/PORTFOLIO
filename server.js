const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files if your HTML is in 'public' directory

// Route to handle form submissions
app.post('/connect', (req, res) => {
    const { name, email, message } = req.body;

    // Check if file exists, if not create it
    const filePath = path.join(__dirname, 'query.xlsx');
    let workbook;

    if (fs.existsSync(filePath)) {
        workbook = xlsx.readFile(filePath);
    } else {
        workbook = xlsx.utils.book_new();
    }

    const worksheetName = 'Queries';
    let worksheet;

    if (workbook.SheetNames.includes(worksheetName)) {
        worksheet = workbook.Sheets[worksheetName];
    } else {
        worksheet = xlsx.utils.aoa_to_sheet([['Name', 'Email', 'Message']]);
        xlsx.utils.book_append_sheet(workbook, worksheet, worksheetName);
    }

    // Get existing data
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    data.push([name, email, message]);

    // Write new data
    const newWorksheet = xlsx.utils.aoa_to_sheet(data);
    workbook.Sheets[worksheetName] = newWorksheet;
    xlsx.writeFile(filePath, workbook);

    res.status(200).send('Your message has been sent successfully!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

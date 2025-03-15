const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Deakin Student Portal</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; background-color: #f5f5f5; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .header { display: flex; align-items: center; border-bottom: 2px solid #003399; padding-bottom: 20px; margin-bottom: 25px; }
            .deakin-logo { height: 60px; margin-right: 20px; }
            .student-info { color: #003399; }
            .details { margin: 15px 0; line-height: 1.6; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="/deakin.jpg" 
                     alt="Deakin University Logo" 
                     class="deakin-logo">
                <h1 class="student-info">Student Information Portal</h1>
            </div>
            <div class="details">
                <h2>Student Details</h2>
                <p><strong>Name:</strong> Shicheng Xiang</p>
                <p><strong>Student ID:</strong> 224387468</p>
                <p><strong>Course:</strong> SIT323/SIT737 - Cloud Native Application Development</p>
                <p><strong>Unit:</strong> 2.1P: Node.js and Express</p>
            </div>
            <div class="details">
                <h3>Current Task</h3>
                <p>Using node.js to create a simple page</p>
            </div>
        </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
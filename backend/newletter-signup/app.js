const mailchimp = require('@mailchimp/mailchimp_marketing');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

//Sending the signup.html file to the browser as soon as a request is made on localhost:3000
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/signup.html');
});
//Setting up MailChimp
mailchimp.setConfig({
  apiKey: '8a28791a7430d9f7f5ea01b99ca1ce54-us21',

  server: 'us21',
});
//As soon as the sign in button is pressed execute this
app.post('/', function (req, res) {
  const firstName = req.body.fName;
  const secondName = req.body.lName;
  const email = req.body.email;

  const listId = '051c01ddba';
  //Creating an object with the users data
  const subscribingUser = {
    firstName: firstName,
    lastName: secondName,
    email: email,
  };
  //Uploading the data to the server
  async function run() {
    try {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName,
        },
      });
      res.sendFile(__dirname + '/failure.html');
      console.log(
        `Successfully added contact as an audience member. The contact's id is ${response.id}.`,
        res.status,
      );
    } catch (err) {
      res.sendFile(__dirname + '/success.html');
      console.log(res.statusCode);
    }
  }
  run();
});

app.listen(3000, function () {
  console.log('Server is running at port 3000');
});

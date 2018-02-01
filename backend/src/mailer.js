import nodemailer from 'nodemailer';

const from = '"Bookworm" <info@bookworm.com>';

function setup() {
  return {};
}


export function sendConfirmationEmail(user) {
  // const tranport = setup();

  // const email = {
  //   from,
  //   to: user.email,
  //   subject: "Welcome to Bookworm",
  //   text: `
  //     Welcome to Bookworm. Please, confirm your email.
  //     ${user.generateConfirmationUrl}
  //   `
  // };

  console.log(user.generateConfirmationUrl);

  //tranport.sendMail(email);
}
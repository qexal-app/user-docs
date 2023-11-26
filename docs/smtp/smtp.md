---
sidebar_label: 'SMTP Email Configuration'
sidebar_position: 1
---

# SMTP Email Configuration

### Set-Up SMTP in Gmail

First, it is needed to set up SMTP in Gmail.

1. HOST NAME: Enter `smtp.gmail.com`.

2. PORT: Use `587` as the port number.

3. USER NAME: Provide the email address of the user who will be sending the emails.

4. PASSWORD: Use the same password that you used when creating the app on your Google Account.

5. ENABLE SSL: Ensure that this option is checked.

Proceed with the following steps:

![Gmail SMTP config](./img/smtp_gmail_1700928065.png)

:::warning NOTE
Ensure that 2-step verification is already enabled in your Google Account.
:::

1. Navigate to your Google Account settings by going to [App Passwords](https://myaccount.google.com/apppasswords).

2. Provide a name for the app (e.g., Qexal) and click `Generate`.

![App Passwords](./img/smtp_gmail_1700928147.jpg)

A password will be generated; make sure to copy it. You will use this password for email configuration. The user name will be the email address associated with your Google Account.

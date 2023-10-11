const users = require("./users/users.service.js");
const Employee = require("./Employee/Employee.service.js");
const Offboarding Termination = require("./Offboarding Termination/Offboarding Termination.service.js");
const Workforce Diversity And Inclusi = require("./Workforce Diversity And Inclusi/Workforce Diversity And Inclusi.service.js");
const Hr Budgeting And Cost Tracking = require("./Hr Budgeting And Cost Tracking/Hr Budgeting And Cost Tracking.service.js");
const Employee Self Service Portal = require("./Employee Self Service Portal/Employee Self Service Portal.service.js");
const Benefits Open Enrollment = require("./Benefits Open Enrollment/Benefits Open Enrollment.service.js");
const Employee Relations = require("./Employee Relations/Employee Relations.service.js");
const Succession Planning = require("./Succession Planning/Succession Planning.service.js");
const Employee Surveys And Feedback = require("./Employee Surveys And Feedback/Employee Surveys And Feedback.service.js");
const Recruitment And Onboarding = require("./Recruitment And Onboarding/Recruitment And Onboarding.service.js");
const Compliance And Documents = require("./Compliance And Documents/Compliance And Documents.service.js");
const Hr Analytics And Reporting = require("./Hr Analytics And Reporting/Hr Analytics And Reporting.service.js");
const Attendance And Leave Management = require("./Attendance And Leave Management/Attendance And Leave Management.service.js");
const Training And Development = require("./Training And Development/Training And Development.service.js");
const Benefits Administration = require("./Benefits Administration/Benefits Administration.service.js");
const Payroll = require("./Payroll/Payroll.service.js");
const Time Tracking = require("./Time Tracking/Time Tracking.service.js");
const Performance Review = require("./Performance Review/Performance Review.service.js");
const Applicant = require("./Applicant/Applicant.service.js");
const Job Posting = require("./Job Posting/Job Posting.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(Employee);
  app.configure(Offboarding Termination);
  app.configure(Workforce Diversity And Inclusi);
  app.configure(Hr Budgeting And Cost Tracking);
  app.configure(Employee Self Service Portal);
  app.configure(Benefits Open Enrollment);
  app.configure(Employee Relations);
  app.configure(Succession Planning);
  app.configure(Employee Surveys And Feedback);
  app.configure(Recruitment And Onboarding);
  app.configure(Compliance And Documents);
  app.configure(Hr Analytics And Reporting);
  app.configure(Attendance And Leave Management);
  app.configure(Training And Development);
  app.configure(Benefits Administration);
  app.configure(Payroll);
  app.configure(Time Tracking);
  app.configure(Performance Review);
  app.configure(Applicant);
  app.configure(Job Posting);
    // ~cb-add-configure-service-name~
};

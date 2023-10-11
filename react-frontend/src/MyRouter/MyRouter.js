import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import EmployeePage from "../components/EmployeePage/EmployeePage";
import SingleEmployeePage from "../components/EmployeePage/SingleEmployeePage";
import Offboarding TerminationPage from "../components/Offboarding TerminationPage/Offboarding TerminationPage";
import SingleOffboarding TerminationPage from "../components/Offboarding TerminationPage/SingleOffboarding TerminationPage";
import Workforce Diversity And InclusiPage from "../components/Workforce Diversity And InclusiPage/Workforce Diversity And InclusiPage";
import SingleWorkforce Diversity And InclusiPage from "../components/Workforce Diversity And InclusiPage/SingleWorkforce Diversity And InclusiPage";
import Hr Budgeting And Cost TrackingPage from "../components/Hr Budgeting And Cost TrackingPage/Hr Budgeting And Cost TrackingPage";
import SingleHr Budgeting And Cost TrackingPage from "../components/Hr Budgeting And Cost TrackingPage/SingleHr Budgeting And Cost TrackingPage";
import Employee Self Service PortalPage from "../components/Employee Self Service PortalPage/Employee Self Service PortalPage";
import SingleEmployee Self Service PortalPage from "../components/Employee Self Service PortalPage/SingleEmployee Self Service PortalPage";
import Benefits Open EnrollmentPage from "../components/Benefits Open EnrollmentPage/Benefits Open EnrollmentPage";
import SingleBenefits Open EnrollmentPage from "../components/Benefits Open EnrollmentPage/SingleBenefits Open EnrollmentPage";
import Employee RelationsPage from "../components/Employee RelationsPage/Employee RelationsPage";
import SingleEmployee RelationsPage from "../components/Employee RelationsPage/SingleEmployee RelationsPage";
import Succession PlanningPage from "../components/Succession PlanningPage/Succession PlanningPage";
import SingleSuccession PlanningPage from "../components/Succession PlanningPage/SingleSuccession PlanningPage";
import Employee Surveys And FeedbackPage from "../components/Employee Surveys And FeedbackPage/Employee Surveys And FeedbackPage";
import SingleEmployee Surveys And FeedbackPage from "../components/Employee Surveys And FeedbackPage/SingleEmployee Surveys And FeedbackPage";
import Recruitment And OnboardingPage from "../components/Recruitment And OnboardingPage/Recruitment And OnboardingPage";
import SingleRecruitment And OnboardingPage from "../components/Recruitment And OnboardingPage/SingleRecruitment And OnboardingPage";
import Compliance And DocumentsPage from "../components/Compliance And DocumentsPage/Compliance And DocumentsPage";
import SingleCompliance And DocumentsPage from "../components/Compliance And DocumentsPage/SingleCompliance And DocumentsPage";
import Hr Analytics And ReportingPage from "../components/Hr Analytics And ReportingPage/Hr Analytics And ReportingPage";
import SingleHr Analytics And ReportingPage from "../components/Hr Analytics And ReportingPage/SingleHr Analytics And ReportingPage";
import Attendance And Leave ManagementPage from "../components/Attendance And Leave ManagementPage/Attendance And Leave ManagementPage";
import SingleAttendance And Leave ManagementPage from "../components/Attendance And Leave ManagementPage/SingleAttendance And Leave ManagementPage";
import Training And DevelopmentPage from "../components/Training And DevelopmentPage/Training And DevelopmentPage";
import SingleTraining And DevelopmentPage from "../components/Training And DevelopmentPage/SingleTraining And DevelopmentPage";
import Benefits AdministrationPage from "../components/Benefits AdministrationPage/Benefits AdministrationPage";
import SingleBenefits AdministrationPage from "../components/Benefits AdministrationPage/SingleBenefits AdministrationPage";
import PayrollPage from "../components/PayrollPage/PayrollPage";
import SinglePayrollPage from "../components/PayrollPage/SinglePayrollPage";
import Time TrackingPage from "../components/Time TrackingPage/Time TrackingPage";
import SingleTime TrackingPage from "../components/Time TrackingPage/SingleTime TrackingPage";
import Performance ReviewPage from "../components/Performance ReviewPage/Performance ReviewPage";
import SinglePerformance ReviewPage from "../components/Performance ReviewPage/SinglePerformance ReviewPage";
import ApplicantPage from "../components/ApplicantPage/ApplicantPage";
import SingleApplicantPage from "../components/ApplicantPage/SingleApplicantPage";
import Job PostingPage from "../components/Job PostingPage/Job PostingPage";
import SingleJob PostingPage from "../components/Job PostingPage/SingleJob PostingPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />
            {/* protected route https://www.robinwieruch.de/react-router-private-routes/ */}

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                    <Route path="/Employee" exact element={<EmployeePage />} />
                    <Route path="/Employee/:singleEmployeeId" exact element={<SingleEmployeePage />} />
                    <Route path="/Offboarding Termination" exact element={<Offboarding TerminationPage />} />
                    <Route path="/Offboarding Termination/:singleOffboarding TerminationId" exact element={<SingleOffboarding TerminationPage />} />
                    <Route path="/Workforce Diversity And Inclusi" exact element={<Workforce Diversity And InclusiPage />} />
                    <Route path="/Workforce Diversity And Inclusi/:singleWorkforce Diversity And InclusiId" exact element={<SingleWorkforce Diversity And InclusiPage />} />
                    <Route path="/Hr Budgeting And Cost Tracking" exact element={<Hr Budgeting And Cost TrackingPage />} />
                    <Route path="/Hr Budgeting And Cost Tracking/:singleHr Budgeting And Cost TrackingId" exact element={<SingleHr Budgeting And Cost TrackingPage />} />
                    <Route path="/Employee Self Service Portal" exact element={<Employee Self Service PortalPage />} />
                    <Route path="/Employee Self Service Portal/:singleEmployee Self Service PortalId" exact element={<SingleEmployee Self Service PortalPage />} />
                    <Route path="/Benefits Open Enrollment" exact element={<Benefits Open EnrollmentPage />} />
                    <Route path="/Benefits Open Enrollment/:singleBenefits Open EnrollmentId" exact element={<SingleBenefits Open EnrollmentPage />} />
                    <Route path="/Employee Relations" exact element={<Employee RelationsPage />} />
                    <Route path="/Employee Relations/:singleEmployee RelationsId" exact element={<SingleEmployee RelationsPage />} />
                    <Route path="/Succession Planning" exact element={<Succession PlanningPage />} />
                    <Route path="/Succession Planning/:singleSuccession PlanningId" exact element={<SingleSuccession PlanningPage />} />
                    <Route path="/Employee Surveys And Feedback" exact element={<Employee Surveys And FeedbackPage />} />
                    <Route path="/Employee Surveys And Feedback/:singleEmployee Surveys And FeedbackId" exact element={<SingleEmployee Surveys And FeedbackPage />} />
                    <Route path="/Recruitment And Onboarding" exact element={<Recruitment And OnboardingPage />} />
                    <Route path="/Recruitment And Onboarding/:singleRecruitment And OnboardingId" exact element={<SingleRecruitment And OnboardingPage />} />
                    <Route path="/Compliance And Documents" exact element={<Compliance And DocumentsPage />} />
                    <Route path="/Compliance And Documents/:singleCompliance And DocumentsId" exact element={<SingleCompliance And DocumentsPage />} />
                    <Route path="/Hr Analytics And Reporting" exact element={<Hr Analytics And ReportingPage />} />
                    <Route path="/Hr Analytics And Reporting/:singleHr Analytics And ReportingId" exact element={<SingleHr Analytics And ReportingPage />} />
                    <Route path="/Attendance And Leave Management" exact element={<Attendance And Leave ManagementPage />} />
                    <Route path="/Attendance And Leave Management/:singleAttendance And Leave ManagementId" exact element={<SingleAttendance And Leave ManagementPage />} />
                    <Route path="/Training And Development" exact element={<Training And DevelopmentPage />} />
                    <Route path="/Training And Development/:singleTraining And DevelopmentId" exact element={<SingleTraining And DevelopmentPage />} />
                    <Route path="/Benefits Administration" exact element={<Benefits AdministrationPage />} />
                    <Route path="/Benefits Administration/:singleBenefits AdministrationId" exact element={<SingleBenefits AdministrationPage />} />
                    <Route path="/Payroll" exact element={<PayrollPage />} />
                    <Route path="/Payroll/:singlePayrollId" exact element={<SinglePayrollPage />} />
                    <Route path="/Time Tracking" exact element={<Time TrackingPage />} />
                    <Route path="/Time Tracking/:singleTime TrackingId" exact element={<SingleTime TrackingPage />} />
                    <Route path="/Performance Review" exact element={<Performance ReviewPage />} />
                    <Route path="/Performance Review/:singlePerformance ReviewId" exact element={<SinglePerformance ReviewPage />} />
                    <Route path="/Applicant" exact element={<ApplicantPage />} />
                    <Route path="/Applicant/:singleApplicantId" exact element={<SingleApplicantPage />} />
                    <Route path="/Job Posting" exact element={<Job PostingPage />} />
                    <Route path="/Job Posting/:singleJob PostingId" exact element={<SingleJob PostingPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;

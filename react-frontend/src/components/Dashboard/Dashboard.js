import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import welcomeImg from '../../assets/media/welcome-banner.png';

const Dashboard = (props) => {
    useEffect(() => {}, []);

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="flex w-10">
                <div className=" w-8">
                    <h4 className="ml-4">Microservices Ready</h4>
                    <div className="w-full flex justify-content-center flex-wrap ">
                        {/* Links to services */}
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/users'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Users</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Employee'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Employee</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Offboarding Termination'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Offboarding Termination</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Workforce Diversity And Inclusi'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Workforce Diversity And Inclusi</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Hr Budgeting And Cost Tracking'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Hr Budgeting And Cost Tracking</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Employee Self Service Portal'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Employee Self Service Portal</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Benefits Open Enrollment'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Benefits Open Enrollment</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Employee Relations'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Employee Relations</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Succession Planning'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Succession Planning</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Employee Surveys And Feedback'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Employee Surveys And Feedback</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Recruitment And Onboarding'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Recruitment And Onboarding</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Compliance And Documents'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Compliance And Documents</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Hr Analytics And Reporting'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Hr Analytics And Reporting</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Attendance And Leave Management'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Attendance And Leave Management</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Training And Development'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Training And Development</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Benefits Administration'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Benefits Administration</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Payroll'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Payroll</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Time Tracking'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Time Tracking</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Performance Review'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Performance Review</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Applicant'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Applicant</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/Job Posting'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Job Posting</div></div></Link></div>
                        {/* ~cb-add-services-card~ */}
                    </div>
                </div>
                <div className="w-4 flex flex-column align-items-center">
                    <img src={welcomeImg} alt="welcome" className="h-30rem" />
                    <p className="text-7xl m-0">Welcome!</p>
                    <p>You are ready to go!</p>
                </div>
            </div>
            <div className="card w-10 my-6">
                <h4>REST API Ready</h4>
                <p className="underline m-0">e.g. Authentication</p>
                <p>POST http://localhost:3030/authentication {`{ "email": "example@email.com",    "password": "123456" }`}</p>
                <p className="underline m-0">e.g. CRUD</p>
                <p className="m-0">
                    GET {`=>`} GET http://localhost:3030/users/{`<userId>`}
                </p>
                <p className="m-0">
                    CREATE {`=>`} POST http://localhost:3030/users` {`{ "email": "example2@email.com",    "password": "456789" }`}
                </p>
                <p className="m-0">
                    PATCH {`=>`} PATCH http://localhost:3030/users/{`<userId>`}` {`{ "name": "Thomas Smith" }`}
                </p>
                <p className="m-0">
                    DELETE {`=>`} DELETE http://localhost:3030/users/{`<userId>`}
                </p>
            </div>
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(Dashboard);

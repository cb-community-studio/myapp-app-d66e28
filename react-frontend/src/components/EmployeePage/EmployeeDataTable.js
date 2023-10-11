
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const EmployeeDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.first}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.last}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.name1}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.employee}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.dateOfBirth}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.gender}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.phone}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.email}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.address}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.employment}</p>
    const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.status}</p>
    const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.hire}</p>
    const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.date}</p>
    const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.termination}</p>
    const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.date1}</p>
    const pTemplate16 = (rowData, { rowIndex }) => <p >{rowData.job}</p>
    const pTemplate17 = (rowData, { rowIndex }) => <p >{rowData.title}</p>
    const pTemplate18 = (rowData, { rowIndex }) => <p >{rowData.department}</p>
    const pTemplate19 = (rowData, { rowIndex }) => <p >{rowData.managerSupervisor}</p>
    const pTemplate20 = (rowData, { rowIndex }) => <p >{rowData.salary}</p>
    const pTemplate21 = (rowData, { rowIndex }) => <p >{rowData.information}</p>
    const pTemplate22 = (rowData, { rowIndex }) => <p >{rowData.benefits}</p>
    const pTemplate23 = (rowData, { rowIndex }) => <p >{rowData.information1}</p>
    const pTemplate24 = (rowData, { rowIndex }) => <p >{rowData.emergency}</p>
    const pTemplate25 = (rowData, { rowIndex }) => <p >{rowData.contact}</p>
    const pTemplate26 = (rowData, { rowIndex }) => <p >{rowData.details}</p>
    const pTemplate27 = (rowData, { rowIndex }) => <p >{rowData.work}</p>
    const pTemplate28 = (rowData, { rowIndex }) => <p >{rowData.location}</p>
    const pTemplate29 = (rowData, { rowIndex }) => <p >{rowData.work1}</p>
    const pTemplate30 = (rowData, { rowIndex }) => <p >{rowData.schedule}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="first" header="First" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="name" header="Name " body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="last" header="Last" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="name1" header="Name  1" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="employee" header="employee" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="dateOfBirth" header="Date Of Birth" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="gender" header="Gender " body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="phone" header="Phone " body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="email" header="Email " body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="address" header="Address " body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="employment" header="Employment" body={pTemplate10} style={{ minWidth: "8rem" }} />
            <Column field="status" header="Status " body={pTemplate11} style={{ minWidth: "8rem" }} />
            <Column field="hire" header="Hire" body={pTemplate12} style={{ minWidth: "8rem" }} />
            <Column field="date" header="Date " body={pTemplate13} style={{ minWidth: "8rem" }} />
            <Column field="termination" header="Termination" body={pTemplate14} style={{ minWidth: "8rem" }} />
            <Column field="date1" header="Date  1" body={pTemplate15} style={{ minWidth: "8rem" }} />
            <Column field="job" header="Job" body={pTemplate16} style={{ minWidth: "8rem" }} />
            <Column field="title" header="Title" body={pTemplate17} style={{ minWidth: "8rem" }} />
            <Column field="department" header="Department " body={pTemplate18} style={{ minWidth: "8rem" }} />
            <Column field="managerSupervisor" header="Manager Supervisor " body={pTemplate19} style={{ minWidth: "8rem" }} />
            <Column field="salary" header="Salary" body={pTemplate20} style={{ minWidth: "8rem" }} />
            <Column field="information" header="Information " body={pTemplate21} style={{ minWidth: "8rem" }} />
            <Column field="benefits" header="Benefits" body={pTemplate22} style={{ minWidth: "8rem" }} />
            <Column field="information1" header="Information  1" body={pTemplate23} style={{ minWidth: "8rem" }} />
            <Column field="emergency" header="Emergency" body={pTemplate24} style={{ minWidth: "8rem" }} />
            <Column field="contact" header="Contact" body={pTemplate25} style={{ minWidth: "8rem" }} />
            <Column field="details" header="Details " body={pTemplate26} style={{ minWidth: "8rem" }} />
            <Column field="work" header="Work" body={pTemplate27} style={{ minWidth: "8rem" }} />
            <Column field="location" header="Location " body={pTemplate28} style={{ minWidth: "8rem" }} />
            <Column field="work1" header="Work 1" body={pTemplate29} style={{ minWidth: "8rem" }} />
            <Column field="schedule" header="Schedule" body={pTemplate30} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default EmployeeDataTable;
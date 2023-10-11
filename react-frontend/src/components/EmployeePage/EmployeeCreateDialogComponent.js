import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';



const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const EmployeeCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const [users, setusers] = useState([])

    useEffect(() => {
        set_entity({});
    }, [props.show]);
    const onSave = async () => {
        let _data = {
            first: _entity.first,
            name: _entity.name,
            last: _entity.last,
            name1: _entity.name1,
            employee: _entity.employee,
            dateOfBirth: _entity.dateOfBirth,
            gender: _entity.gender,
            phone: _entity.phone,
            email: _entity.email,
            address: _entity.address,
            employment: _entity.employment,
            status: _entity.status,
            hire: _entity.hire,
            date: _entity.date,
            termination: _entity.termination,
            date1: _entity.date1,
            job: _entity.job,
            title: _entity.title,
            department: _entity.department,
            managerSupervisor: _entity.managerSupervisor,
            salary: _entity.salary,
            information: _entity.information,
            benefits: _entity.benefits,
            information1: _entity.information1,
            emergency: _entity.emergency,
            contact: _entity.contact,
            details: _entity.details,
            work: _entity.work,
            location: _entity.location,
            work1: _entity.work1,
            schedule: _entity.schedule,
        };

        setLoading(true);
        try {
            const result = await client.service("Employee").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };
     useEffect(() => {
                //on mount
                client
                    .service("users")
                    .find({ query: { $limit: 100 } })
                    .then((res) => {
                        setusers(res.data);
                    })
                    .catch((error) => {
                        console.log({ error });
                        props.alert({ title: "Users", type: "error", message: error.message || "Failed get users" });
                    });
            }, []);

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    const usersOptions = users.map((elem) => ({ label: elem.name, value: elem._id }));

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="Employee-create-dialog-component">
            <div>
                <p className="m-0">First:</p>
                <InputText className="w-full mb-3" value={_entity?.first} onChange={(e) => setValByKey("first", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Name :</p>
                <InputText className="w-full mb-3" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Last:</p>
                <InputText className="w-full mb-3" value={_entity?.last} onChange={(e) => setValByKey("last", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Name  1:</p>
                <InputText className="w-full mb-3" value={_entity?.name1} onChange={(e) => setValByKey("name1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">employee:</p>
                <Dropdown value={_entity?.employee} options={usersOptions} onChange={(e) => setValByKey("employee", e.value)} />
            </div>
            <div>
                <p className="m-0">Date Of Birth:</p>
                <InputText className="w-full mb-3" value={_entity?.dateOfBirth} onChange={(e) => setValByKey("dateOfBirth", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Gender :</p>
                <InputText className="w-full mb-3" value={_entity?.gender} onChange={(e) => setValByKey("gender", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Phone :</p>
                <InputText className="w-full mb-3" value={_entity?.phone} onChange={(e) => setValByKey("phone", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Email :</p>
                <InputText className="w-full mb-3" value={_entity?.email} onChange={(e) => setValByKey("email", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Address :</p>
                <InputText className="w-full mb-3" value={_entity?.address} onChange={(e) => setValByKey("address", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Employment:</p>
                <InputText className="w-full mb-3" value={_entity?.employment} onChange={(e) => setValByKey("employment", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Status :</p>
                <InputText className="w-full mb-3" value={_entity?.status} onChange={(e) => setValByKey("status", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Hire:</p>
                <InputText className="w-full mb-3" value={_entity?.hire} onChange={(e) => setValByKey("hire", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Date :</p>
                <InputText className="w-full mb-3" value={_entity?.date} onChange={(e) => setValByKey("date", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Termination:</p>
                <InputText className="w-full mb-3" value={_entity?.termination} onChange={(e) => setValByKey("termination", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Date  1:</p>
                <InputText className="w-full mb-3" value={_entity?.date1} onChange={(e) => setValByKey("date1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Job:</p>
                <InputText className="w-full mb-3" value={_entity?.job} onChange={(e) => setValByKey("job", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Title:</p>
                <InputText className="w-full mb-3" value={_entity?.title} onChange={(e) => setValByKey("title", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Department :</p>
                <InputText className="w-full mb-3" value={_entity?.department} onChange={(e) => setValByKey("department", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Manager Supervisor :</p>
                <InputText className="w-full mb-3" value={_entity?.managerSupervisor} onChange={(e) => setValByKey("managerSupervisor", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Salary:</p>
                <InputText className="w-full mb-3" value={_entity?.salary} onChange={(e) => setValByKey("salary", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Information :</p>
                <InputText className="w-full mb-3" value={_entity?.information} onChange={(e) => setValByKey("information", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Benefits:</p>
                <InputText className="w-full mb-3" value={_entity?.benefits} onChange={(e) => setValByKey("benefits", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Information  1:</p>
                <InputText className="w-full mb-3" value={_entity?.information1} onChange={(e) => setValByKey("information1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Emergency:</p>
                <InputText className="w-full mb-3" value={_entity?.emergency} onChange={(e) => setValByKey("emergency", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Contact:</p>
                <InputText className="w-full mb-3" value={_entity?.contact} onChange={(e) => setValByKey("contact", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Details :</p>
                <InputText className="w-full mb-3" value={_entity?.details} onChange={(e) => setValByKey("details", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Work:</p>
                <InputText className="w-full mb-3" value={_entity?.work} onChange={(e) => setValByKey("work", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Location :</p>
                <InputText className="w-full mb-3" value={_entity?.location} onChange={(e) => setValByKey("location", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Work 1:</p>
                <InputText className="w-full mb-3" value={_entity?.work1} onChange={(e) => setValByKey("work1", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Schedule:</p>
                <InputText className="w-full mb-3" value={_entity?.schedule} onChange={(e) => setValByKey("schedule", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return {}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(EmployeeCreateDialogComponent);

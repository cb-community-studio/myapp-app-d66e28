import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';



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

const PayrollCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            salary: _entity.salary,
            tax: _entity.tax,
            information: _entity.information,
            deductions: _entity.deductions,
            direct: _entity.direct,
            deposit: _entity.deposit,
            details: _entity.details,
            pay: _entity.pay,
            stubs: _entity.stubs,
            benefits: _entity.benefits,
            enrollment: _entity.enrollment,
        };

        setLoading(true);
        try {
            const result = await client.service("Payroll").patch(_entity._id, _data);
            props.onHide();
            props.alert({ type: "success", title: "Edit info", message: "Info updated successfully" });
            props.onEditResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

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
    // children dropdown options
    

    return (
        <Dialog header="Edit Info" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="Payroll-edit-dialog-component">
                <div>
                <p className="m-0">Salary :</p>
                <InputText className="w-full mb-3" value={_entity?.salary} onChange={(e) => setValByKey("salary", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Tax:</p>
                <InputText className="w-full mb-3" value={_entity?.tax} onChange={(e) => setValByKey("tax", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Information :</p>
                <InputText className="w-full mb-3" value={_entity?.information} onChange={(e) => setValByKey("information", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Deductions :</p>
                <InputText className="w-full mb-3" value={_entity?.deductions} onChange={(e) => setValByKey("deductions", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Direct:</p>
                <InputText className="w-full mb-3" value={_entity?.direct} onChange={(e) => setValByKey("direct", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Deposit:</p>
                <InputText className="w-full mb-3" value={_entity?.deposit} onChange={(e) => setValByKey("deposit", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Details :</p>
                <InputText className="w-full mb-3" value={_entity?.details} onChange={(e) => setValByKey("details", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Pay:</p>
                <InputText className="w-full mb-3" value={_entity?.pay} onChange={(e) => setValByKey("pay", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Stubs :</p>
                <InputText className="w-full mb-3" value={_entity?.stubs} onChange={(e) => setValByKey("stubs", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Benefits:</p>
                <InputText className="w-full mb-3" value={_entity?.benefits} onChange={(e) => setValByKey("benefits", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Enrollment:</p>
                <InputText className="w-full mb-3" value={_entity?.enrollment} onChange={(e) => setValByKey("enrollment", e.target.value)}  />
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
    return{}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(PayrollCreateDialogComponent);

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

const Benefits Open EnrollmentCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            open: _entity.open,
            enrollment: _entity.enrollment,
            periods: _entity.periods,
            benefit: _entity.benefit,
            plan: _entity.plan,
            selections: _entity.selections,
        };

        setLoading(true);
        try {
            const result = await client.service("Benefits Open Enrollment").patch(_entity._id, _data);
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
            <div role="Benefits Open Enrollment-edit-dialog-component">
                <div>
                <p className="m-0">Open:</p>
                <InputText className="w-full mb-3" value={_entity?.open} onChange={(e) => setValByKey("open", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Enrollment:</p>
                <InputText className="w-full mb-3" value={_entity?.enrollment} onChange={(e) => setValByKey("enrollment", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Periods :</p>
                <InputText className="w-full mb-3" value={_entity?.periods} onChange={(e) => setValByKey("periods", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Benefit:</p>
                <InputText className="w-full mb-3" value={_entity?.benefit} onChange={(e) => setValByKey("benefit", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Plan:</p>
                <InputText className="w-full mb-3" value={_entity?.plan} onChange={(e) => setValByKey("plan", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Selections:</p>
                <InputText className="w-full mb-3" value={_entity?.selections} onChange={(e) => setValByKey("selections", e.target.value)}  />
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

export default connect(null, mapDispatch)(Benefits Open EnrollmentCreateDialogComponent);

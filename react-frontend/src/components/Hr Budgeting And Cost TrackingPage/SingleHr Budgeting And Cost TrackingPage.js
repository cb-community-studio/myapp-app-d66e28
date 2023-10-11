import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleHr Budgeting And Cost TrackingPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("Hr Budgeting And Cost Tracking")
            .get(urlParams.singleHr Budgeting And Cost TrackingId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Hr Budgeting And Cost Tracking", type: "error", message: error.message || "Failed get Hr Budgeting And Cost Tracking" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/Hr Budgeting And Cost Tracking", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Hr Budgeting And Cost Tracking</h3>
                </div>
                <p>Hr Budgeting And Cost Tracking/{urlParams.singleHr Budgeting And Cost TrackingId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Hr</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.hrff}</p></div>
                    <label className="text-sm text-primary">Expenses </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.expenses}</p></div>
                    <label className="text-sm text-primary">Budget</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.budget}</p></div>
                    <label className="text-sm text-primary">Allocation</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.allocation}</p></div>
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleHr Budgeting And Cost TrackingPage);

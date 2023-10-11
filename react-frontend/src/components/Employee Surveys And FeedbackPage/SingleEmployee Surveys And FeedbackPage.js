import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleEmployee Surveys And FeedbackPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("Employee Surveys And Feedback")
            .get(urlParams.singleEmployee Surveys And FeedbackId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Employee Surveys And Feedback", type: "error", message: error.message || "Failed get Employee Surveys And Feedback" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/Employee Surveys And Feedback", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Employee Surveys And Feedback</h3>
                </div>
                <p>Employee Surveys And Feedback/{urlParams.singleEmployee Surveys And FeedbackId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Employee</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.employee}</p></div>
                    <label className="text-sm text-primary">Surveys </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.surveys}</p></div>
                    <label className="text-sm text-primary">Feedback</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.feedback}</p></div>
                    <label className="text-sm text-primary">Forms </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.forms}</p></div>
                    <label className="text-sm text-primary">Survey</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.survey}</p></div>
                    <label className="text-sm text-primary">Results</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.results}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleEmployee Surveys And FeedbackPage);

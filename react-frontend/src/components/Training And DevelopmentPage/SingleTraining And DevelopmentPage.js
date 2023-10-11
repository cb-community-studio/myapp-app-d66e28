import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleTraining And DevelopmentPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("Training And Development")
            .get(urlParams.singleTraining And DevelopmentId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Training And Development", type: "error", message: error.message || "Failed get Training And Development" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/Training And Development", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Training And Development</h3>
                </div>
                <p>Training And Development/{urlParams.singleTraining And DevelopmentId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Training</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.training}</p></div>
                    <label className="text-sm text-primary">Courses </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.courses}</p></div>
                    <label className="text-sm text-primary">Training 1</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.training1}</p></div>
                    <label className="text-sm text-primary">Attendance </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.attendance}</p></div>
                    <label className="text-sm text-primary">Certification</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.certification}</p></div>
                    <label className="text-sm text-primary">Tracking </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.tracking}</p></div>
                    <label className="text-sm text-primary">Development</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.development}</p></div>
                    <label className="text-sm text-primary">Plans </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.plans}</p></div>
                    <label className="text-sm text-primary">Training 2</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.training2}</p></div>
                    <label className="text-sm text-primary">Costs</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.costs}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleTraining And DevelopmentPage);

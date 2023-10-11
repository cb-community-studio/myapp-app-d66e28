import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleOffboarding TerminationPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("Offboarding Termination")
            .get(urlParams.singleOffboarding TerminationId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Offboarding Termination", type: "error", message: error.message || "Failed get Offboarding Termination" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/Offboarding Termination", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Offboarding Termination</h3>
                </div>
                <p>Offboarding Termination/{urlParams.singleOffboarding TerminationId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Exit</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.exit}</p></div>
                    <label className="text-sm text-primary">Interviews </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.interviews}</p></div>
                    <label className="text-sm text-primary">Termination</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.termination}</p></div>
                    <label className="text-sm text-primary">Checklist</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.checklist}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleOffboarding TerminationPage);

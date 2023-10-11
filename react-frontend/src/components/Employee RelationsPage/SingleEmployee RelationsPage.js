import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleEmployee RelationsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("Employee Relations")
            .get(urlParams.singleEmployee RelationsId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Employee Relations", type: "error", message: error.message || "Failed get Employee Relations" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/Employee Relations", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Employee Relations</h3>
                </div>
                <p>Employee Relations/{urlParams.singleEmployee RelationsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Employee</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.employee}</p></div>
                    <label className="text-sm text-primary">Complaints Incident</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.complaintsIncident}</p></div>
                    <label className="text-sm text-primary">Reports </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.reports}</p></div>
                    <label className="text-sm text-primary">Investigations </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.investigations}</p></div>
                    <label className="text-sm text-primary">Resolutions</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.resolutions}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleEmployee RelationsPage);

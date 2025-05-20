import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {useMediaQuery} from "react-responsive";

import {DEVELOPMENT, TEST, LIVE, USERNAME, PASSWORD, DEVELOPMENT_INTERN, TEST_INTERN, LIVE_INTERN, URL_SYSTEM} from "../../../constants/constants";

import Header from "../../../components/header";

import LoadingSpinner from "../../../assets/animation/loadingspinner.svg"

function SettingsConnection() {
    const params = useParams(); // Example: {params.id}
    const [vmIDConnection, setVMIDConnection] = useState("");
    const [vmIDConnectionEnv, setVMIDConnectionEnv] = useState("");
    const [vmIDConnectionContype, setVMIDConnectionContype] = useState("");
    const [vmIDDisconnection, setVMIDDisconnection] = useState("");
    const [vmIDDisconnectionEnv, setVMIDDisconnectionEnv] = useState("");
    const [vmIDSettings, setVMIDSettings] = useState("");
    const [vmIDSettingsEnv, setVMIDSettingsEnv] = useState("");
    const [vmIDSettingsResolution, setVMIDSettingsResolution] = useState("");
    const [vmIDSettingsContype, setVMIDSettingsContype] = useState("sysvnc");
    const [vmIDSettingsResize, setVMIDSettingsResize] = useState("none");
    const [vmIDSettingsScale, setVMIDSettingsScale] = useState("");
    const [vmIDSettingsScaleChecked, setVMIDSettingsScaleChecked] = useState(false);
    const [vmIDSettingsConnect, setVMIDSettingsConnect] = useState("");
    const [vmIDSettingsConnectChecked, setVMIDSettingsConnectChecked] = useState(false);
    const [viewerURL, setViewerURL] = useState("");
    const [viewerSettingsURL, setViewerSettingsURL] = useState("");
    const [vmStartConnectionSubmit, setVMStartConnectionSubmit] = useState(false);
    const [vmStartConnectionSettingsSubmit, setVMStartConnectionSettingsSubmit] = useState(false);
    const [requestAlert, setRequestAlert] = useState(false);
    const [requestAlertMessage, setRequestAlertMessage] = useState(false);
    const [loadingSpinnerShow, setLoadingSpinnerShow] = useState(false);
    const [loadingSpinnerShowSubmit, setLoadingSpinnerShowSubmit] = useState(false);
    const { t, i18n } = useTranslation();

    const isNotDesktop = useMediaQuery({
        query: '(max-width: 1200px)'
    })

    const viewerConnection = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/viewer/connect', {
            id: vmIDConnection,
            id_env: vmIDConnectionEnv,
            contype: vmIDConnectionContype,
        }, {
            headers: {
                'Authorization': localStorage.getItem('userToken'),
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': URL_SYSTEM,
                'Access-Control-Allow-Headers': URL_SYSTEM,
            },
            // withCredentials: true,
        })
            .then(response => {
                console.log(response);
                setLoadingSpinnerShow(true);
                setLoadingSpinnerShowSubmit(true);
                if (response.status === 200 && response.data.response_code === 200) {

                    let xhr = new XMLHttpRequest();

                    function handler() {
                        if (this.readyState === this.DONE) {
                            if (this.status === 200) {
                                console.log(this);
                                console.log(this.responseURL);
                                //let dataURL = URL.createObjectURL(new Blob([this.responseURL]));
                                document.getElementById("viewer-desktop").srcdoc = this.response; // this.responseURL
                            } else {
                                console.error('not loaded');
                            }
                        }
                    }

                    xhr.open('GET', response.data.response_url);
                    xhr.onreadystatechange = handler;
                    //xhr.responseType = 'blob';
                    xhr.setRequestHeader('Authorization', localStorage.getItem('userToken'));
                    xhr.setRequestHeader('Access-Control-Allow-Origin', URL_SYSTEM);
                    xhr.setRequestHeader('Access-Control-Allow-Headers', URL_SYSTEM);
                    xhr.send();

                    /*window.addEventListener("message", (event) => {
                        if (event.data.type === "DaaSCustomReloadEvent") {
                            console.log("Received data from iframe:", event.data.data);
                            doRequest();
                        }
                    });
                    function doRequest(){
                        let xhr = new XMLHttpRequest();
                        function handler() {
                            if (this.readyState === this.DONE) {
                                console.log(this);
                                console.log(this.responseURL);
                                document.getElementById("viewer-desktop").srcdoc = this.response;
                            }
                        }
                        xhr.open('GET', response.data.response_url);
                        xhr.onreadystatechange = handler;
                        //xhr.responseType = 'blob';
                        xhr.setRequestHeader('Authorization', localStorage.getItem('userToken'));
                        xhr.setRequestHeader('Access-Control-Allow-Origin', URL_SYSTEM);
                        xhr.setRequestHeader('Access-Control-Allow-Headers', URL_SYSTEM);
                        xhr.send();
                    }*/

                    setRequestAlert(true);
                    setRequestAlertMessage(true);
                    setViewerURL(response.data.response_url);

                    setRequestAlert(true);
                    setRequestAlertMessage(true);

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);

                    setLoadingSpinnerShow(false);
                    setLoadingSpinnerShowSubmit(false);
                    setVMStartConnectionSubmit(true);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);

                    setLoadingSpinnerShow(false);
                    setLoadingSpinnerShowSubmit(false);
                    setVMStartConnectionSubmit(false);
                }
            })
            .catch(e => {
                console.log(e)
                setRequestAlert(true);
                setRequestAlertMessage(false);

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);

                setLoadingSpinnerShow(false);
                setLoadingSpinnerShowSubmit(false);
                setVMStartConnectionSubmit(false);
            });
    }

    const viewerDisconnection = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/viewer/disconnect', {
            id: vmIDDisconnection,
            id_env: vmIDDisconnectionEnv,
        }, {
            headers: {
                'Authorization': localStorage.getItem('userToken'),
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': URL_SYSTEM,
                'Access-Control-Allow-Headers': URL_SYSTEM,
            },
            // withCredentials: true,
        })
            .then(response => {
                console.log(response);
                if (response.status === 200 && response.data.response_code === 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(true);

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                }
            })
            .catch(e => {
                console.log(e)
                setRequestAlert(true);
                setRequestAlertMessage(false);

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const viewerSettings = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/viewer/settings', {
            id: vmIDSettings,
            id_env: vmIDSettingsEnv,
            resolution: vmIDSettingsResolution,
            contype: vmIDSettingsContype,
            resize: vmIDSettingsResize,
            scale: vmIDSettingsScaleChecked ? "on" : "",
            connect: vmIDSettingsConnectChecked ? "on" : "",
        }, {
            headers: {
                'Authorization': localStorage.getItem('userToken'),
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': URL_SYSTEM,
                'Access-Control-Allow-Headers': URL_SYSTEM,
            },
            // withCredentials: true,
        })
            .then(response => {
                console.log(response);
                setLoadingSpinnerShow(true);
                setLoadingSpinnerShowSubmit(true);
                if (response.status === 200 && response.data.response_code === 200) {

                    let xhr = new XMLHttpRequest();

                    function handler() {
                        if (this.readyState === this.DONE) {
                            if (this.status === 200) {
                                console.log(this);
                                console.log(this.responseURL);
                                //let dataURL = URL.createObjectURL(new Blob([this.responseURL]));
                                document.getElementById("viewer-desktop-settings").srcdoc = this.response; // this.responseURL
                            } else {
                                console.error('not loaded');
                            }
                        }
                    }

                    xhr.open('GET', response.data.response_url);
                    xhr.onreadystatechange = handler;
                    //xhr.responseType = 'blob';
                    xhr.setRequestHeader('Authorization', localStorage.getItem('userToken'));
                    xhr.setRequestHeader('Access-Control-Allow-Origin', URL_SYSTEM);
                    xhr.setRequestHeader('Access-Control-Allow-Headers', URL_SYSTEM);
                    xhr.send();

                    /*window.addEventListener("message", (event) => {
                        if (event.data.type === "DaaSCustomReloadEvent") {
                            console.log("Received data from iframe:", event.data.data);
                            doRequest();
                        }
                    });
                    function doRequest(){
                        let xhr = new XMLHttpRequest();
                        function handler() {
                            if (this.readyState === this.DONE) {
                                console.log(this);
                                console.log(this.responseURL);
                                document.getElementById("viewer-desktop").srcdoc = this.response;
                            }
                        }
                        xhr.open('GET', response.data.response_url);
                        xhr.onreadystatechange = handler;
                        //xhr.responseType = 'blob';
                        xhr.setRequestHeader('Authorization', localStorage.getItem('userToken'));
                        xhr.setRequestHeader('Access-Control-Allow-Origin', URL_SYSTEM);
                        xhr.setRequestHeader('Access-Control-Allow-Headers', URL_SYSTEM);
                        xhr.send();
                    }*/

                    setRequestAlert(true);
                    setRequestAlertMessage(true);
                    setViewerSettingsURL(response.data.response_url);

                    setRequestAlert(true);
                    setRequestAlertMessage(true);
                    setRequestAlert(true);
                    setRequestAlertMessage(true);

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);

                    setLoadingSpinnerShow(false);
                    setLoadingSpinnerShowSubmit(false);
                    setVMStartConnectionSettingsSubmit(true);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);

                    setLoadingSpinnerShow(false);
                    setLoadingSpinnerShowSubmit(false);
                    setVMStartConnectionSettingsSubmit(false);
                }
            })
            .catch(e => {
                console.log(e)
                setRequestAlert(true);
                setRequestAlertMessage(false);

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);

                setLoadingSpinnerShow(false);
                setLoadingSpinnerShowSubmit(false);
                setVMStartConnectionSettingsSubmit(false);
            });
    }

    const changeVMIDConnection = event => {
        setVMIDConnection(event.target.value);
    };
    const changeVMIDConnectionEnv = event => {
        setVMIDConnectionEnv(event.target.value);
    };
    const changeVMIDConnectionContype = event => {
        setVMIDConnectionContype(event.target.value);
    };
    const changeVMIDDisconnection = event => {
        setVMIDDisconnection(event.target.value);
    };
    const changeVMIDDisconnectionEnv = event => {
        setVMIDDisconnectionEnv(event.target.value);
    };

    const changeVMIDSettings = event => {
        setVMIDSettings(event.target.value);
    };
    const changeVMIDSettingsEnv = event => {
        setVMIDSettingsEnv(event.target.value);
    };
    const changeVMIDSettingsResolution = event => {
        setVMIDSettingsResolution(event.target.value);
    };
    const changeVMIDSettingsContype = event => {
        setVMIDSettingsContype(event.target.value);
    };
    const changeVMIDSettingsResize = event => {
        setVMIDSettingsResize(event.target.value);
    };
    const changeVMIDSettingsScale = event => {
        setVMIDSettingsScale(event.target.value);
    };
    const changeVMIDSettingsScaleChecked = () => {
        setVMIDSettingsScaleChecked(!vmIDSettingsScaleChecked)

        if (vmIDSettingsScaleChecked) {
            setVMIDSettingsScale("on");
        } else {
            setVMIDSettingsScale("");
        }
    };
    const changeVMIDSettingsConnect = event => {
        setVMIDSettingsConnect(event.target.value);
    };
    const changeVMIDSettingsConnectChecked = () => {
        setVMIDSettingsConnectChecked(!vmIDSettingsConnectChecked)

        if (vmIDSettingsConnectChecked) {
            setVMIDSettingsConnect("on");
        } else {
            setVMIDSettingsConnect("");
        }
    };

    const backToDashboard = () => {
        window.location.href = "/dashboard/admin";
    };

    const connectionViewerSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        id_env: Yup.string()
            .required('ID Environment invalid'),
        contype: Yup.string()
            .required('Contype invalid'),
    });

    const disconnectionViewerSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        id_env: Yup.string()
            .required('ID Environment invalid'),
    });

    const viewerSettingsSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        id_env: Yup.string()
            .required('ID Environment invalid'),
        resolution: Yup.string()
            .required('Resolution invalid'),
        contype: Yup.string()
            .required('Contype invalid'),
        resize: Yup.string()
            .required('Resize invalid'),
        scale: Yup.string()
            .required('Scale invalid'),
        connect: Yup.string()
            .required('Connect invalid'),
    });

    const openNewTab = () => {
        window.open({viewerURL}, "_blank").focus();
    };

    const openNewWindow = () => {
        window.open({viewerURL}, "DESIGN - Viewer", "fullscreen=yes");
    };

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="settingsOverviewConnectionViewer" fluid={true}>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <div>
                            <h2>
                                {t('viewer-check')}
                            </h2>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Tabs defaultActiveKey="viewer-connection" id="all-connection-types">
                    <ReactBootstrap.Tab eventKey="viewer-connection" title={t('viewer-connection')}>
                        <Formik
                            initialValues={{
                                id: "",
                                id_env: "",
                                contype: "",
                            }}
                            validationSchema={connectionViewerSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={viewerConnection} id="form-viewer-connection">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id" name="vm-id" value={vmIDConnection} onChange={changeVMIDConnection}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id')}
                                            {/*<ErrorMessage name="vm-id">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-env">{t('vm-env')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-env" name="vm-env" value={vmIDConnectionEnv} onChange={changeVMIDConnectionEnv}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-env')}
                                            {/*<ErrorMessage name="vm-env">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-contype">{t('viewer-contype')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="vm-contype" name="vm-contype" value={vmIDConnectionContype} onChange={changeVMIDConnectionContype}>
                                                <option value="sysvnc">System VNC</option>
                                                <option value="instvnc">Instance VNC</option>
                                                <option value="rdp">RDP</option>
                                            </select>
                                            {/*<Field type="text" id="vm-contype" name="vm-contype" value={vmIDConnectionContype} onChange={changeVMIDConnectionContype}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-contype')}
                                            {/*<ErrorMessage name="vm-contype">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmIDConnection.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                        {
                            loadingSpinnerShowSubmit ? (
                                <>
                                    {
                                        loadingSpinnerShow ? (
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <img src={LoadingSpinner} alt="Loading spinner" className="loading-spinner" />
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                        ) : (
                                            <></>
                                        )
                                    }
                                </>
                            ) : (
                                <></>
                            )
                        }
                        {
                            vmStartConnectionSubmit ? (
                                <>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div>
                                                URL: {viewerURL}
                                            </div>
                                        </ReactBootstrap.Col>
                                        {/*<ReactBootstrap.Col xs={12} sm={12} md={6} lg={3} xl={3}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={false}
                                                onClick={openNewTab}>
                                                {t('new-tab')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={3} xl={3}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={false}
                                                onClick={openNewWindow}>
                                                {t('new-window')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>*/}
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <iframe
                                                id="viewer-desktop"
                                                //allowFullscreen={true}
                                                title="DESIGN - Desktop viewer"
                                                sandbox="allow-scripts allow-same-origin"
                                                name="sandbox"
                                            ></iframe>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </>
                            ) : (
                                <></>
                            )
                        }
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="viewer-disconnection" title={t('viewer-disconnection')}>
                        <Formik
                            initialValues={{
                                id: "",
                                id_env: "",
                            }}
                            validationSchema={disconnectionViewerSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={viewerDisconnection} id="form-viewer-disconnection">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-disconnect">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-disconnect" name="vm-id-disconnect" value={vmIDDisconnection} onChange={changeVMIDDisconnection}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-disconnect')}
                                            {/*<ErrorMessage name="vm-id-disconnect">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-env-disconnect">{t('vm-env')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-env-disconnect" name="vm-env-disconnect" value={vmIDDisconnectionEnv} onChange={changeVMIDDisconnectionEnv}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-env-disconnect')}
                                            {/*<ErrorMessage name="vm-env-disconnect">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmIDDisconnection.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    {/*<ReactBootstrap.Tab eventKey="viewer-setting" title={t('viewer-settings')}>
                        <Formik
                            initialValues={{
                                id: "",
                                id_env: "",
                                resolution: "",
                                contype: "",
                                resize: "",
                                scale: "",
                                connect: "",
                            }}
                            validationSchema={viewerSettingsSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={viewerSettings} id="form-viewer-settings">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-settings">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-settings" name="vm-id-settings" value={vmIDSettings} onChange={changeVMIDSettings}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-settings')}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-env-settings">{t('vm-env')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-env-settings" name="vm-env-settings" value={vmIDSettingsEnv} onChange={changeVMIDSettingsEnv}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-env-settings')}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-resolution-settings">{t('vm-resolution')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-resolution-settings" name="vm-resolution-settings" value={vmIDSettingsResolution} onChange={changeVMIDSettingsResolution}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-resolution-settings')}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-contype-settings">{t('vm-contype')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="vm-contype-setting" name="vm-contype-setting" value={vmIDSettingsContype} onChange={changeVMIDSettingsContype}>
                                                <option value="sysvnc">System VNC (Proxmox default)</option>
                                                <option value="instvnc">Instance VNC (Docker default)</option>
                                                <option value="rdp">RDP (Windows only)</option>
                                            </select>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-contype-settings')}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-resize-settings">{t('vm-resize')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="vm-resize-setting" name="vm-resize-setting" value={vmIDSettingsResize} onChange={changeVMIDSettingsResize}>
                                                <option value="none">None (Do nothing)</option>
                                                <option value="semi">Semi (Allow instance)</option>
                                                <option value="full">Full (Enforce JS)</option>
                                            </select>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-resize-settings')}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-scale-settings">{t('vm-scale')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <input
                                                type="checkbox"
                                                id="vm-scale-settings"
                                                name="vm-scale-settings"
                                                value={vmIDSettingsScale}
                                                checked={vmIDSettingsScaleChecked}
                                                onChange={changeVMIDSettingsScaleChecked}
                                            />
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-scale-settings')}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-connect-settings">{t('vm-connect')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <input
                                                type="checkbox"
                                                id="vm-connect-settings"
                                                name="vm-connect-settings"
                                                value={vmIDSettingsConnect}
                                                checked={vmIDSettingsConnectChecked}
                                                onChange={changeVMIDSettingsConnectChecked}
                                            />
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-connect-settings')}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmIDSettings.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>*/}
                </ReactBootstrap.Tabs>
                {
                    loadingSpinnerShowSubmit ? (
                        <>
                            {
                                loadingSpinnerShow ? (
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <img src={LoadingSpinner} alt="Loading spinner" className="loading-spinner" />
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                ) : (
                                    <></>
                                )
                            }
                        </>
                    ) : (
                        <></>
                    )
                }
                {
                    vmStartConnectionSettingsSubmit ? (
                        <>
                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <div>
                                        URL: {viewerSettingsURL}
                                    </div>
                                </ReactBootstrap.Col>
                                {/*<ReactBootstrap.Col xs={12} sm={12} md={6} lg={3} xl={3}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={false}
                                                onClick={openNewTab}>
                                                {t('new-tab')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={3} xl={3}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={false}
                                                onClick={openNewWindow}>
                                                {t('new-window')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>*/}
                            </ReactBootstrap.Row>
                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <iframe
                                        id="viewer-desktop-settings"
                                        //allowFullscreen={true}
                                        title="DESIGN - Desktop viewer"
                                        sandbox="allow-scripts allow-same-origin"
                                        name="sandbox"
                                    ></iframe>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                        </>
                    ) : (
                        <></>
                    )
                }
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className={requestAlert ? "show-alert" : "hide-alert"}>
                            <div className={requestAlertMessage ? "request-success-alert" : "request-fail-alert"}>
                                {requestAlertMessage ? t('request-successful') : t('request-failed')}
                            </div>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div className="link-daas-design" onClick={backToDashboard}>
                            <div>
                                {t('back-link')}
                            </div>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </>
    );
}

export default SettingsConnection;

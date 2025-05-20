import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import Header from "../../../components/header";
import axios from "axios";
import {DEVELOPMENT, URL_SYSTEM} from "../../../constants/constants";
import LoadingSpinner from "../../../assets/animation/loadingspinner.svg";

function ConnectionRunning() {
    const [viewerURL, setViewerURL] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [requestAlert, setRequestAlert] = useState(false);
    const [requestAlertMessage, setRequestAlertMessage] = useState(false);
    const [loadingSpinnerShow, setLoadingSpinnerShow] = useState(false);
    const [loadingSpinnerShowSubmit, setLoadingSpinnerShowSubmit] = useState(false);
    const {t, i18n} = useTranslation();

    const connectionObjectID = localStorage.getItem("connection-object-id")
    const connectionEnv = localStorage.getItem("connection-env")
    const userDataID = localStorage.getItem("userDataID")

    useEffect(() => {
        let xhr = new XMLHttpRequest();

        function handler() {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    console.log(this);
                    console.log(connectionEnv);
                    //let dataURL = URL.createObjectURL(new Blob([this.responseURL]));
                    document.getElementById("viewer-desktop").srcdoc = this.response; // this.responseURL
                } else {
                    console.error('not loaded');
                }
            }
        }

        xhr.open('GET', connectionEnv);
        xhr.onreadystatechange = handler;
        //xhr.responseType = 'blob';
        xhr.setRequestHeader('Authorization', localStorage.getItem('userToken'));
        xhr.setRequestHeader('Access-Control-Allow-Origin', URL_SYSTEM);
        xhr.setRequestHeader('Access-Control-Allow-Headers', URL_SYSTEM);
        xhr.send();
    }, [])

    /*useEffect(() => {
        axios.post(DEVELOPMENT + '/viewer/connect', {
            id: connectionObjectID,
            id_env: connectionEnv,
            contype: 'rdp',
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

                setLoadingSpinnerShow(false);
                setLoadingSpinnerShowSubmit(false);
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

                    setRequestAlert(true);
                    setRequestAlertMessage(true);
                    setViewerURL(response.data.response_url);
                    setErrorMessage("")
                    localStorage.setItem("messageError", "");

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);

                    setLoadingSpinnerShow(false);
                    setLoadingSpinnerShowSubmit(false);
                }
            })
            .catch(e => {
                console.log(e)
                setRequestAlert(true);
                setRequestAlertMessage(false);
                setViewerURL("");
                setErrorMessage(t('error-message-user'))
                localStorage.setItem("messageError", t('error-message-user'));

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                    if (localStorage.getItem("messageError") === undefined || localStorage.getItem("messageError") === t('error-message-user')) {
                        window.location.href = "/dashboard";
                    }
                }, 5000);

                setLoadingSpinnerShow(false);
                setLoadingSpinnerShowSubmit(false);
            });
    }, []);*/

    /*useEffect(() => {
        axios.post(DEVELOPMENT + '/phases/baseimage_start', {
            id: connectionObjectID,
            connect: 'on'
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

                setLoadingSpinnerShow(false);
                setLoadingSpinnerShowSubmit(false);
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

                    setRequestAlert(true);
                    setRequestAlertMessage(true);
                    setViewerURL(response.data.response_url);
                    setErrorMessage("")
                    localStorage.setItem("messageError", "");

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);

                    setLoadingSpinnerShow(false);
                    setLoadingSpinnerShowSubmit(false);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    axios.post(DEVELOPMENT + '/phases/environment_start', {
                        id: connectionObjectID,
                        name: connectionEnv,
                        connect: 'on',
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

                                setRequestAlert(true);
                                setRequestAlertMessage(true);
                                setViewerURL(response.data.response_url);
                                setErrorMessage("")
                                localStorage.setItem("messageError", "");

                                setTimeout(() => {
                                    setRequestAlert(false);
                                    setRequestAlertMessage(false);
                                }, 2000);

                                setLoadingSpinnerShow(false);
                                setLoadingSpinnerShowSubmit(false);
                            }
                            if (response.status === 200 && response.data.response_code !== 200) {
                                setRequestAlert(true);
                                setRequestAlertMessage(false);
                                setViewerURL("");
                                setErrorMessage(t('error-message-user'))
                                localStorage.setItem("messageError", t('error-message-user'));

                                setTimeout(() => {
                                    setRequestAlert(false);
                                    setRequestAlertMessage(false);
                                    if (localStorage.getItem("messageError") === undefined || localStorage.getItem("messageError") === t('error-message-user')) {
                                        window.location.href = "/dashboard";
                                    }
                                }, 5000);

                                setLoadingSpinnerShow(false);
                                setLoadingSpinnerShowSubmit(false);
                            }
                        })
                        .catch(e => {
                            console.log(e)
                            setRequestAlert(true);
                            setRequestAlertMessage(false);
                            setViewerURL("");
                            setErrorMessage(t('error-message-user'))
                            localStorage.setItem("messageError", t('error-message-user'));

                            setTimeout(() => {
                                setRequestAlert(false);
                                setRequestAlertMessage(false);
                                if (localStorage.getItem("messageError") === undefined || localStorage.getItem("messageError") === t('error-message-user')) {
                                    window.location.href = "/dashboard";
                                }
                            }, 5000);

                            setLoadingSpinnerShow(false);
                            setLoadingSpinnerShowSubmit(false);
                        });
                }
            })
            .catch(e => {
                console.log(e)
                setRequestAlert(true);
                setRequestAlertMessage(false);
                setViewerURL("");
                setErrorMessage(t('error-message-user'))
                localStorage.setItem("messageError", t('error-message-user'));

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                    if (localStorage.getItem("messageError") === undefined || localStorage.getItem("messageError") === t('error-message-user')) {
                        window.location.href = "/dashboard";
                    }
                }, 5000);

                setLoadingSpinnerShow(false);
                setLoadingSpinnerShowSubmit(false);
            });
    }, []);*/

    const backToOverview = () => {
        window.location.href = "/dashboard";
    };

    return (
        <>
            <Header/>
            <ReactBootstrap.Container fluid={true} id="connectionRunning">
                {
                    errorMessage === undefined || errorMessage === t('error-message-user') ? (
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                {errorMessage}
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    ) : (
                        <></>
                    )
                }
                {
                    loadingSpinnerShowSubmit ? (
                        <>
                            {
                                loadingSpinnerShow ? (
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <img src={LoadingSpinner} alt="Loading spinner"
                                                 className="loading-spinner"/>
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
            </ReactBootstrap.Container>
            <ReactBootstrap.Container className="user-app-env-view">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className={requestAlert ? "show-alert" : "hide-alert"}>
                            <div className={requestAlertMessage ? "request-success-alert" : "request-fail-alert"}>
                                {requestAlertMessage ? t('request-successful') : t('request-failed')}
                            </div>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                {/*<ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div className="link-daas-design" onClick={backToOverview}>
                            <div>
                                {t('back-link')}
                            </div>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>*/}
            </ReactBootstrap.Container>
        </>
    );
}

export default ConnectionRunning;

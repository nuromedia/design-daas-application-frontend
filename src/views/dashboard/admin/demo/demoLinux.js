import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Header from "../../../../components/header";
import axios from "axios";
import {DEVELOPMENT, URL_SYSTEM} from "../../../../constants/constants";

function DemoLinux() {
    const [viewerURL, setViewerURL] = useState("");
    const [requestAlert, setRequestAlert] = useState(false);
    const [requestAlertMessage, setRequestAlertMessage] = useState(false);
    const [startDesktopSubmit, setStartDesktopSubmit] = useState(false);
    const [instanceIDDesktop, setInstanceIDDesktop] = useState("");
    const [selectedApplication, setSelectedApplication] = useState("/usr/bin/galculator");
    const [selectedOSSystem, setSelectedOSSystem] = useState("aaa-bbb-ccc-ddd-eee-debian12");
    const { t, i18n } = useTranslation();

    const startDesktop = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/phases/baseimage_start', {
            id: selectedOSSystem,
            connect: "on",
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
                    setInstanceIDDesktop(response.data.id_instance)

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                    console.log(response.data.response_url)
                    setStartDesktopSubmit(true);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);
                    setViewerURL("");

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);

                    setStartDesktopSubmit(false);
                }
            })
            .catch(e => {
                console.log(e)
                setRequestAlert(true);
                setRequestAlertMessage(false);
                setViewerURL("");

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);

                setStartDesktopSubmit(false);
            });
    }

    const stopDesktop = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/phases/baseimage_stop', {
            id_instance: instanceIDDesktop,
            force: "on",
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
                    setStartDesktopSubmit(false);

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);
                    setStartDesktopSubmit(true);

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
                setStartDesktopSubmit(true);

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const runApplication = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/inst/vminvoke_app', {
            id: selectedOSSystem,
            id_env: "",
            cmd: selectedApplication,
            args: "",
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

    const changeSelectedApplication = event => {
        setSelectedApplication(event.target.value);
    }

    const changeOSSystem = event => {
        setSelectedOSSystem(event.target.value);
    }

    const backToOverview = () => {
        window.location.href = "/dashboard/demo";
    };

    return (
        <>
            <Header/>
            <ReactBootstrap.Container fluid={true} id="demoOverviewLinux">
                {/*<ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <h2>
                            {t('demo')} - {t('linux')}
                        </h2>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>*/}
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center">
                        <input type="text" name="select-os-system-input" list="select-os-system" value={selectedOSSystem} onChange={changeOSSystem}/>
                        <datalist id="select-os-system">
                            <option value="aaa-bbb-ccc-ddd-eee-debian12">Debian 12</option>
                            <option value="aaa-bbb-ccc-ddd-eee-x11">x11</option>
                            <option value="aaa-bbb-ccc-ddd-eee-wine">Wine</option>
                        </datalist>
                        <div className="btn btn-primary button-demo" onClick={startDesktop}>
                            {t('start')}
                        </div>
                    </ReactBootstrap.Col>
                    {
                        startDesktopSubmit ? (
                            <>
                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center">
                                    <input type="text" name="select-os-application-input" list="select-os-application" value={selectedApplication} onChange={changeSelectedApplication}/>
                                    <datalist id="select-os-application">
                                        <option value="/usr/bin/galculator">galculator</option>
                                        <option value="libreoffice">Libreoffice</option>
                                        <option value='firefox-esr'>Firefox-esr</option>
                                        <option value="xterm htop">htop</option>
                                    </datalist>
                                    <div className="btn btn-primary button-demo" onClick={runApplication}>
                                        {t('open-application')}
                                    </div>
                                </ReactBootstrap.Col>
                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center">
                                    <div className="btn btn-primary button-demo" onClick={stopDesktop}>
                                        {t('stop')}
                                    </div>
                                </ReactBootstrap.Col>
                            </>
                        ) : (
                            <></>
                        )
                    }
                </ReactBootstrap.Row>
                {
                    startDesktopSubmit ? (
                        <>
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
            </ReactBootstrap.Container>
            <ReactBootstrap.Container className="demo-os-view">
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
                        <div className="link-daas-design" onClick={backToOverview}>
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

export default DemoLinux;

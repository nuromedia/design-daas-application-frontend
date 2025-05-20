import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import Header from "../../../components/header";
import axios from "axios";
import {DEVELOPMENT, URL_SYSTEM} from "../../../constants/constants";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

function ObjectEnvironmentSetup() {
    const [textMessage, setTextMessage] = useState("");
    const [vmPhasesIDCFGTarget, setVMPhasesIDCFGTarget] = useState("");
    const [vmPhasesENVCFGTarget, setVMPhasesENVCFGTarget] = useState("");
    const [vmPhasesTargetCFGTarget, setVMPhasesTargetCFGTarget] = useState("");
    const [vmPhasesNameCFGTarget, setVMPhasesNameCFGTarget] = useState("");
    const [vmPhasesCommandCFGTarget, setVMPhasesCommandCFGTarget] = useState("");
    const [vmPhasesArgumentsCFGTarget, setVMPhasesArgumentsCFGTarget] = useState("");
    const [vmPhasesIDCFGApplist, setVMPhasesIDCFGApplist] = useState("");
    const [vmPhasesENVCFGApplist, setVMPhasesENVCFGApplist] = useState("");
    const [vmPhasesApplistCFGApplist, setVMPhasesApplistCFGApplist] = useState("");
    const [vmPhasesNameCFGApplist, setVMPhasesNameCFGApplist] = useState("");
    const [vmPhasesCommandCFGApplist, setVMPhasesCommandCFGApplist] = useState("");
    const [vmPhasesArgumentsCFGApplist, setVMPhasesArgumentsCFGApplist] = useState("");
    const [vmPhasesIDCFGTasklist, setVMPhasesIDCFGTasklist] = useState("");
    const [vmPhasesENVCFGTasklist, setVMPhasesENVCFGTasklist] = useState("");
    const [vmPhasesTasklistCFGTasklist, setVMPhasesTasklistCFGTasklist] = useState("");
    const [vmPhasesTypeCFGTasklist, setVMPhasesTypeCFGTasklist] = useState("exec_cmd");
    const [vmPhasesCommandCFGTasklist, setVMPhasesCommandCFGTasklist] = useState("");
    const [vmPhasesArgumentsCFGTasklist, setVMPhasesArgumentsCFGTasklist] = useState("");
    const [vmPhasesIDEnvironmentCreate, setVMIDPhasesEnvironmentCreate] = useState("");
    const [vmPhasesNameEnvironmentCreate, setVMNamePhasesEnvironmentCreate] = useState("");
    const [vmPhasesDockerfileEnvironmentCreate, setVMPhasesDockerfileEnvironmentCreate] = useState();
    const [vmEnvironmentNameAll, setVMEnvironmentNameAll] = useState("")
    const [requestAlert, setRequestAlert] = useState(false);
    const [requestAlertMessage, setRequestAlertMessage] = useState(false);
    const [environmentCreateSuccess, setEnvironmentCreateSuccess] = useState(false);
    const {t, i18n} = useTranslation();

    const objectID = localStorage.getItem("object-id")
    const objectENVName = localStorage.getItem("object-env-name")
    const objectState = localStorage.getItem("object-state")
    const userID = localStorage.getItem("userDataID")

    useEffect(() => {
        localStorage.setItem("timeUser", new Date().getTime());

        setEnvironmentCreateSuccess(false)

        //setVMEnvironmentNameAll(localStorage.getItem("timeUser") + "userid" + userID)
        setVMEnvironmentNameAll(objectID + "-env")
        setVMIDPhasesEnvironmentCreate(objectID);
        //setVMNamePhasesEnvironmentCreate(objectENVName + "userid" + userID)
        setVMNamePhasesEnvironmentCreate(objectID + "-env")
        setVMPhasesIDCFGTarget(objectID);
        //setVMPhasesENVCFGTarget(objectENVName + "userid" + userID);
        setVMPhasesENVCFGTarget(objectID + "-env");
        setVMPhasesNameCFGTarget(objectID + "-name");
        setVMPhasesIDCFGApplist(objectID);
        //setVMPhasesENVCFGApplist(objectENVName + "userid" + userID);
        setVMPhasesENVCFGApplist(objectID + "-env");
        setVMPhasesIDCFGTasklist(objectID);
        //setVMPhasesENVCFGTasklist(objectENVName + "userid" + userID);
        setVMPhasesENVCFGTasklist(objectID + "-env");

        if (objectID !== undefined || objectID !== "") {
            setTextMessage(t("object-available"))
        } else {
            setTextMessage(t("no-object-available"))

            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 2000)
        }
    }, []);

    const backToOverview = () => {
        window.location.href = "/dashboard/expert-mode-base-image";
    };

    const objectEnvironmentCreate = event => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/phases/environment_create', {
            id: objectID,
            name: vmEnvironmentNameAll,
            dockerfile: vmPhasesDockerfileEnvironmentCreate === undefined ? "" : vmPhasesDockerfileEnvironmentCreate,
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

                    setEnvironmentCreateSuccess(true);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);

                    setEnvironmentCreateSuccess(false);
                }
            })
            .catch(e => {
                console.log(e)
                setRequestAlert(true);

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);

                setEnvironmentCreateSuccess(false);
            });
    }

    const objectEnvironmentFinalize = event => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/phases/environment_finalize', {
            id: objectID,
            name: vmEnvironmentNameAll,
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
                        localStorage.setItem("expert-mode-environment", "true")
                        localStorage.setItem("expert-mode-environment-type", "start")
                        window.location.href = "/dashboard/expert-mode-start-system";
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

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const objectEnvironmentFinalizeStart = event => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/phases/environment_finalize', {
            id: objectID,
            name: vmEnvironmentNameAll,
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
                    localStorage.setItem("expert-mode-environment-id", objectID)
                    localStorage.setItem("expert-mode-environment-env", vmEnvironmentNameAll)

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);

                    setTimeout(() => {
                        localStorage.setItem("expert-mode-environment", "true")
                        localStorage.setItem("expert-mode-environment-type", "run")
                        window.location.href = "/dashboard/expert-mode-start-system";
                    }, 3000);
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

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const phasesCFGTasklist = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/phases/cfg_tasklist', {
            id: objectID,
            env: vmEnvironmentNameAll,
            tasklist: "[{\"type\":\"" + vmPhasesTypeCFGTasklist + "\",\"cmd\":\"" + vmPhasesCommandCFGTasklist + "\",\"args\":\"" + vmPhasesArgumentsCFGTasklist + "\"}]",
            // `{'type': ${vmPhasesTypeCFGTasklist}, 'cmd': ${vmPhasesCommandCFGTasklist}, 'args': ${vmPhasesArgumentsCFGTasklist}}`,
            type: vmPhasesTypeCFGTasklist,
            cmd: vmPhasesCommandCFGTasklist,
            args: vmPhasesArgumentsCFGTasklist,
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

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const phasesCFGApplist = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/phases/cfg_applist', {
            id: objectID,
            env: vmEnvironmentNameAll,
            applist: "[{\"name\":\"" + vmPhasesNameCFGApplist + "\",\"cmd\":\"" + vmPhasesCommandCFGApplist + "\",\"args\":\"" + vmPhasesArgumentsCFGApplist + "\"}]",
            cmd: vmPhasesCommandCFGApplist,
            args: vmPhasesArgumentsCFGApplist,
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

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const phasesCFGTarget = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/phases/cfg_set_target', {
            id: objectID,
            env: vmEnvironmentNameAll,
            target: "{\"name\":\"" + vmPhasesNameCFGTarget + "\",\"cmd\":\"" + vmPhasesCommandCFGTarget + "\",\"args\":\"" + vmPhasesArgumentsCFGTarget + "\"}",
            // `{'name': ${String(vmPhasesNameCFGTarget)}, 'cmd': ${String(vmPhasesCommandCFGTarget)}, 'args': ${String(vmPhasesArgumentsCFGTarget)}}`,
            name: vmPhasesNameCFGTarget,
            cmd: vmPhasesCommandCFGTarget,
            args: vmPhasesArgumentsCFGTarget,
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

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const changeVMPhasesDockerfileEnvironmentCreate = event => {
        if (event.target.files) {
            setVMPhasesDockerfileEnvironmentCreate(event.target.files[0]);
        }
    };

    const changeVMEnvironmentAll = event => {
        setVMEnvironmentNameAll(event.target.value);
    };

    const changeVMPhasesIDCFGTarget = event => {
        setVMPhasesIDCFGTarget(event.target.value);
    };

    const changeVMPhasesENVCFGTarget = event => {
        setVMPhasesENVCFGTarget(event.target.value);
    };

    const changeVMPhasesNameCFGTarget = event => {
        setVMPhasesNameCFGTarget(event.target.value);
    };

    const changeVMPhasesCommandCFGTarget = event => {
        setVMPhasesCommandCFGTarget(event.target.value);
    };

    const changeVMPhasesArgumentsCFGTarget = event => {
        setVMPhasesArgumentsCFGTarget(event.target.value);
    };

    const changeVMPhasesIDCFGApplist = event => {
        setVMPhasesIDCFGApplist(event.target.value);
    };

    const changeVMPhasesENVCFGApplist = event => {
        setVMPhasesENVCFGApplist(event.target.value);
    };

    const changeVMPhasesNameCFGApplist = event => {
        setVMPhasesNameCFGApplist(event.target.value);
    };

    const changeVMPhasesCommandCFGApplist = event => {
        setVMPhasesCommandCFGApplist(event.target.value);
    };

    const changeVMPhasesArgumentsCFGApplist = event => {
        setVMPhasesArgumentsCFGApplist(event.target.value);
    };

    const changeVMPhasesIDCFGTasklist = event => {
        setVMPhasesIDCFGTasklist(event.target.value);
    };

    const changeVMPhasesENVCFGTasklist = event => {
        setVMPhasesENVCFGTasklist(event.target.value);
    };

    const changeVMPhasesTypeCFGTasklist = event => {
        setVMPhasesTypeCFGTasklist(event.target.value);
    };

    const changeVMPhasesCommandCFGTasklist = event => {
        setVMPhasesCommandCFGTasklist(event.target.value);
    };

    const changeVMPhasesArgumentsCFGTasklist = event => {
        setVMPhasesArgumentsCFGTasklist(event.target.value);
    };

    const objectEnvironmentCreateSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        name: Yup.string()
            .required('Name invalid'),
        dockerfile: Yup.string()
            .required('Dockerfile invalid'),
    });

    const objectEnvironmentFinalizeSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
    });

    const phasesCFGTargetSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        env: Yup.string()
            .required('Name invalid'),
        target: Yup.string()
            .required('Target invalid'),
        name: Yup.string()
            .required('Name invalid'),
        cmd: Yup.string()
            .required('Command invalid'),
        args: Yup.string()
            .required('Arguments invalid'),
    });

    const phasesCFGApplistSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        env: Yup.string()
            .required('Name invalid'),
        applist: Yup.string()
            .required('Application list invalid'),
        cmd: Yup.string()
            .required('Command invalid'),
        args: Yup.string()
            .required('Arguments invalid'),
    });

    const phasesCFGTasklistSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        env: Yup.string()
            .required('Environment invalid'),
        tasklist: Yup.string()
            .required('Application list invalid'),
        type: Yup.string()
            .required('Type invalid'),
        cmd: Yup.string()
            .required('Command invalid'),
        args: Yup.string()
            .required('Arguments invalid'),
    });

    return (
        <>
            <Header/>
            <ReactBootstrap.Container fluid={true} id="objectEnvironmentSetup">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                        <h3>
                            {t('title-environment-create')}
                        </h3>
                    </ReactBootstrap.Col>
                    <Formik
                        initialValues={{
                            id: "",
                            name: "",
                            dockerfile: "",
                        }}
                        validationSchema={objectEnvironmentCreateSchema}
                        onSubmit={values => {
                            console.log(values.text);
                        }}
                    >
                        {({errors, touched}) => (
                            <Form onSubmit={objectEnvironmentCreate} id="expert-mode-environment-finalize">
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <label htmlFor="vm-id-phases-environment-create">{t('vm-id')}</label>
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Field type="text" id="vm-id-phases-environment-create"
                                               name="vm-id-phases-environment-create" value={objectID} disabled={true}/>
                                    </ReactBootstrap.Col>
                                    <div className="error-text">
                                        {t('error-vm-id-phases-environment-create')}
                                        {/*<ErrorMessage name="vm-id-phases-environment-create">
                                        </ErrorMessage>*/}
                                    </div>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <label htmlFor="vm-name-phases-environment-create">{t('vm-name')}</label>
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Field type="text" id="vm-name-phases-environment-create"
                                               name="vm-name-phases-environment-create" value={vmEnvironmentNameAll}
                                               onChange={changeVMEnvironmentAll}/>
                                    </ReactBootstrap.Col>
                                    <div className="error-text">
                                        {t('error-vm-name-phases-environment-create')}
                                        {/*<ErrorMessage name="vm-name-phases-environment-create">
                                        </ErrorMessage>*/}
                                    </div>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <label
                                            htmlFor="vm-dockerfile-phases-environment-create">{t('vm-dockerfile')}</label>
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <input type="file" id="vm-dockerfile-phases-environment-create"
                                               name="vm-dockerfile-phases-environment-create"
                                               onChange={changeVMPhasesDockerfileEnvironmentCreate}/>
                                    </ReactBootstrap.Col>
                                    <div className="error-text">
                                        {t('error-vm-dockerfile-phases-environment-create')}
                                        {/*<ErrorMessage name="vm-dockerfile-phases-environment-create">
                                            </ErrorMessage>*/}
                                    </div>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <ReactBootstrap.Button
                                            type="submit"
                                            variant="primary"
                                            id="submit"
                                            disabled={vmPhasesIDEnvironmentCreate.length > 0 && vmPhasesNameEnvironmentCreate.length > 0 ? false : true}>
                                            {t('button-environment-create')}
                                        </ReactBootstrap.Button>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            </Form>
                        )}
                    </Formik>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                        <h3>
                            {t('title-environment-settings')}
                        </h3>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Accordion>
                        <ReactBootstrap.Accordion.Item eventKey="0">
                            <ReactBootstrap.Accordion.Header>{t('app-step-one')}</ReactBootstrap.Accordion.Header>
                            <ReactBootstrap.Accordion.Body>
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                        <h4>
                                            {t('app-step-one')}
                                        </h4>
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Formik
                                            initialValues={{
                                                id: "",
                                                env: "",
                                                tasklist: "",
                                                type: "",
                                                cmd: "",
                                                arg: "",
                                            }}
                                            validationSchema={phasesCFGTasklistSchema}
                                            onSubmit={values => {
                                                console.log(values.text);
                                            }}
                                        >
                                            {({errors, touched}) => (
                                                <Form onSubmit={phasesCFGTasklist} id="form-phases-cfg-tasklist">
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-id-phases-cfg-tasklist">{t('vm-id')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-id-phases-cfg-tasklist"
                                                                   name="vm-id-phases-cfg-tasklist" value={objectID}
                                                                   onChange={changeVMPhasesIDCFGTasklist}
                                                                   disabled={true}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-id-phases-cfg-tasklist')}
                                                            {/*<ErrorMessage name="vm-id-phases-cfg-tasklist">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-env-phases-cfg-tasklist">{t('vm-env')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-env-phases-cfg-tasklist"
                                                                   name="vm-env-phases-cfg-tasklist"
                                                                   value={vmEnvironmentNameAll}
                                                                   onChange={changeVMEnvironmentAll}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-env-phases-cfg-tasklist')}
                                                            {/*<ErrorMessage name="vm-env-phases-cfg-tasklist">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-type-phases-cfg-tasklist">{t('vm-type')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <select id="vm-name-phases-cfg-tasklist"
                                                                    name="vm-name-phases-cfg-tasklist"
                                                                    value={vmPhasesTypeCFGTasklist}
                                                                    onChange={changeVMPhasesTypeCFGTasklist}>
                                                                <option value="exec_cmd">{t('execute-command')}</option>
                                                                <option value="os_install">{t('os-install')}</option>
                                                                <option
                                                                    value="os_uninstall">{t('os-uninstall')}</option>
                                                            </select>
                                                            {/*<Field type="text" id="vm-name-phases-cfg-tasklist" name="vm-type-phases-cfg-tasklist" value={vmPhasesTypeCFGTasklist} onChange={changeVMPhasesTypeCFGTasklist}/>*/}
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-type-phases-cfg-tasklist')}
                                                            {/*<ErrorMessage name="vm-type-phases-cfg-tasklist">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-command-phases-cfg-tasklist">{t('vm-command')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-command-phases-cfg-tasklist"
                                                                   name="vm-command-phases-cfg-tasklist"
                                                                   value={vmPhasesCommandCFGTasklist}
                                                                   onChange={changeVMPhasesCommandCFGTasklist}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-command-phases-cfg-tasklist')}
                                                            {/*<ErrorMessage name="vm-command-phases-cfg-tasklist">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-arguments-phases-cfg-tasklist">{t('vm-arguments')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-arguments-phases-cfg-tasklist"
                                                                   name="vm-arguments-phases-cfg-tasklist"
                                                                   value={vmPhasesArgumentsCFGTasklist}
                                                                   onChange={changeVMPhasesArgumentsCFGTasklist}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-arguments-phases-cfg-tasklist')}
                                                            {/*<ErrorMessage name="vm-arguments-phases-cfg-tasklist">
                                            </ErrorMessage>*/}
                                                        </div>
                                                    </ReactBootstrap.Row>
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                            <ReactBootstrap.Button
                                                                type="submit"
                                                                variant="primary"
                                                                id="submit"
                                                                disabled={environmentCreateSuccess && vmPhasesIDCFGTasklist.length > 0 && vmPhasesTypeCFGTasklist.length > 0 && vmPhasesCommandCFGTasklist.length > 0 /*&& vmPhasesArgumentsCFGTasklist.length > 0*/ ? false : true}>
                                                                {t('submit')}
                                                            </ReactBootstrap.Button>
                                                        </ReactBootstrap.Col>
                                                    </ReactBootstrap.Row>
                                                </Form>
                                            )}
                                        </Formik>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Accordion.Body>
                        </ReactBootstrap.Accordion.Item>
                        <ReactBootstrap.Accordion.Item eventKey="1">
                            <ReactBootstrap.Accordion.Header>{t('app-step-two')}</ReactBootstrap.Accordion.Header>
                            <ReactBootstrap.Accordion.Body>
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                        <h4>
                                            {t('app-step-two')}
                                        </h4>
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Formik
                                            initialValues={{
                                                id: "",
                                                env: "",
                                                applist: "",
                                                cmd: "",
                                                arg: "",
                                            }}
                                            validationSchema={phasesCFGApplistSchema}
                                            onSubmit={values => {
                                                console.log(values.text);
                                            }}
                                        >
                                            {({errors, touched}) => (
                                                <Form onSubmit={phasesCFGApplist} id="form-phases-cfg-applist">
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-id-phases-cfg-applist">{t('vm-id')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-id-phases-cfg-applist"
                                                                   name="vm-id-phases-cfg-applist" value={objectID}
                                                                   onChange={changeVMPhasesIDCFGApplist}
                                                                   disabled={true}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-id-phases-cfg-applist')}
                                                            {/*<ErrorMessage name="vm-id-phases-cfg-applist">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-env-phases-cfg-applist">{t('vm-env')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-env-phases-cfg-applist"
                                                                   name="vm-env-phases-cfg-applist"
                                                                   value={vmEnvironmentNameAll}
                                                                   onChange={changeVMEnvironmentAll}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-env-phases-cfg-applist')}
                                                            {/*<ErrorMessage name="vm-env-phases-cfg-applist">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-name-phases-cfg-applist">{t('vm-name')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-name-phases-cfg-applist"
                                                                   name="vm-name-phases-cfg-applist"
                                                                   value={vmPhasesNameCFGApplist}
                                                                   onChange={changeVMPhasesNameCFGApplist}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-name-phases-cfg-applist')}
                                                            {/*<ErrorMessage name="vm-name-phases-cfg-applist">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-command-phases-cfg-applist">{t('vm-command')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-command-phases-cfg-applist"
                                                                   name="vm-command-phases-cfg-applist"
                                                                   value={vmPhasesCommandCFGApplist}
                                                                   onChange={changeVMPhasesCommandCFGApplist}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-command-phases-cfg-applist')}
                                                            {/*<ErrorMessage name="vm-command-phases-cfg-applist">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-arguments-phases-cfg-applist">{t('vm-arguments')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-arguments-phases-cfg-applist"
                                                                   name="vm-arguments-phases-cfg-applist"
                                                                   value={vmPhasesArgumentsCFGApplist}
                                                                   onChange={changeVMPhasesArgumentsCFGApplist}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-arguments-phases-cfg-applist')}
                                                            {/*<ErrorMessage name="vm-arguments-phases-cfg-applist">
                                            </ErrorMessage>*/}
                                                        </div>
                                                    </ReactBootstrap.Row>
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                            <ReactBootstrap.Button
                                                                type="submit"
                                                                variant="primary"
                                                                id="submit"
                                                                disabled={environmentCreateSuccess && vmPhasesIDCFGApplist.length > 0 && vmPhasesNameCFGApplist.length > 0 && vmPhasesCommandCFGApplist.length > 0 /*&& vmPhasesArgumentsCFGApplist.length > 0*/ ? false : true}>
                                                                {t('submit')}
                                                            </ReactBootstrap.Button>
                                                        </ReactBootstrap.Col>
                                                    </ReactBootstrap.Row>
                                                </Form>
                                            )}
                                        </Formik>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Accordion.Body>
                        </ReactBootstrap.Accordion.Item>
                        <ReactBootstrap.Accordion.Item eventKey="2">
                            <ReactBootstrap.Accordion.Header>{t('app-step-three')}</ReactBootstrap.Accordion.Header>
                            <ReactBootstrap.Accordion.Body>
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                        <h4>
                                            {t('app-step-three')}
                                        </h4>
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Formik
                                            initialValues={{
                                                id: "",
                                                env: "",
                                                target: "",
                                                name: "",
                                                cmd: "",
                                                arg: "",
                                            }}
                                            validationSchema={phasesCFGTargetSchema}
                                            onSubmit={values => {
                                                console.log(values.text);
                                            }}
                                        >
                                            {({errors, touched}) => (
                                                <Form onSubmit={phasesCFGTarget} id="form-phases-cfg-target">
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-id-phases-cfg-target">{t('vm-id')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-id-phases-cfg-target"
                                                                   name="vm-id-phases-cfg-target" value={objectID}
                                                                   onChange={changeVMPhasesIDCFGTarget}
                                                                   disabled={true}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-id-phases-cfg-target')}
                                                            {/*<ErrorMessage name="vm-id-phases-cfg-target">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-env-phases-cfg-target">{t('vm-env')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-env-phases-cfg-target"
                                                                   name="vm-env-phases-cfg-target"
                                                                   value={vmEnvironmentNameAll}
                                                                   onChange={changeVMEnvironmentAll}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-env-phases-cfg-target')}
                                                            {/*<ErrorMessage name="vm-env-phases-cfg-target">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-name-phases-cfg-target">{t('vm-name')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-name-phases-cfg-target"
                                                                   name="vm-name-phases-cfg-target"
                                                                   value={vmPhasesNameCFGTarget}
                                                                   onChange={changeVMPhasesNameCFGTarget}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-name-phases-cfg-target')}
                                                            {/*<ErrorMessage name="vm-name-phases-cfg-target">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-command-phases-cfg-target">{t('vm-command')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-command-phases-cfg-target"
                                                                   name="vm-command-phases-cfg-target"
                                                                   value={vmPhasesCommandCFGTarget}
                                                                   onChange={changeVMPhasesCommandCFGTarget}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-command-phases-cfg-target')}
                                                            {/*<ErrorMessage name="vm-command-phases-cfg-target">
                                            </ErrorMessage>*/}
                                                        </div>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <label
                                                                htmlFor="vm-arguments-phases-cfg-target">{t('vm-arguments')}</label>
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Field type="text" id="vm-arguments-phases-cfg-target"
                                                                   name="vm-arguments-phases-cfg-target"
                                                                   value={vmPhasesArgumentsCFGTarget}
                                                                   onChange={changeVMPhasesArgumentsCFGTarget}/>
                                                        </ReactBootstrap.Col>
                                                        <div className="error-text">
                                                            {t('error-vm-arguments-phases-cfg-target')}
                                                            {/*<ErrorMessage name="vm-arguments-phases-cfg-target">
                                            </ErrorMessage>*/}
                                                        </div>
                                                    </ReactBootstrap.Row>
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                            <ReactBootstrap.Button
                                                                type="submit"
                                                                variant="primary"
                                                                id="submit"
                                                                disabled={environmentCreateSuccess && vmPhasesIDCFGTarget.length > 0 && vmPhasesNameCFGTarget.length > 0 && vmPhasesCommandCFGTarget.length > 0 /*&& vmPhasesArgumentsCFGTarget.length > 0*/ ? false : true}>
                                                                {t('submit')}
                                                            </ReactBootstrap.Button>
                                                        </ReactBootstrap.Col>
                                                    </ReactBootstrap.Row>
                                                </Form>
                                            )}
                                        </Formik>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Accordion.Body>
                        </ReactBootstrap.Accordion.Item>
                    </ReactBootstrap.Accordion>
                </ReactBootstrap.Row>
                <Formik
                    initialValues={{
                        id: "",
                    }}
                    validationSchema={objectEnvironmentFinalizeSchema}
                    onSubmit={values => {
                        console.log(values.text);
                    }}
                >
                    {({errors, touched}) => (
                        <Form onSubmit={objectEnvironmentFinalize} id="expert-mode-environment-finalize">
                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                    <h3>
                                        {t('title-environment-finalize')}
                                    </h3>
                                </ReactBootstrap.Col>
                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <ReactBootstrap.Button
                                        type="submit"
                                        variant="primary"
                                        id="submit"
                                        disabled={environmentCreateSuccess ? false : true}
                                    >
                                        {t('button-environment-finalize')}
                                    </ReactBootstrap.Button>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                        </Form>
                    )}
                </Formik>
                <Formik
                    initialValues={{
                        id: "",
                    }}
                    validationSchema={objectEnvironmentFinalizeSchema}
                    onSubmit={values => {
                        console.log(values.text);
                    }}
                >
                    {({errors, touched}) => (
                        <Form onSubmit={objectEnvironmentFinalizeStart} id="expert-mode-environment-finalize">
                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                    {t('button-environment-finalize-info-text')}
                                </ReactBootstrap.Col>
                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <ReactBootstrap.Button
                                        type="submit"
                                        variant="primary"
                                        id="submit"
                                        disabled={environmentCreateSuccess ? false : true}
                                    >
                                        {t('button-environment-finalize-start')}
                                    </ReactBootstrap.Button>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                        </Form>
                    )}
                </Formik>
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

export default ObjectEnvironmentSetup;

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

function SettingsApps() {
    const params = useParams(); // Example: {params.id}
    const [vmChoiceList, setVMChoiceList] = useState("user");
    const [vmChoiceListResult, setVMChoiceListResult] = useState({});
    const [vmChoiceListSubmit, setVMChoiceListSubmit] = useState(false);
    const [vmGetAppID, setVMGetAppID] = useState("");
    const [vmGetAppResult, setVMGetAppResult] = useState({});
    const [vmGetAppSubmit, setVMGetAppSubmit] = useState(false);
    const [vmDeleteAllID, setVMDeleteAllID] = useState("");
    const [vmDeleteID, setVMDeleteID] = useState("");
    const [vmCreateUpdateAppID, setVMCreateUpdateAppID] = useState("");
    const [vmCreateUpdateAppName, setVMCreateUpdateAppName] = useState("");
    const [vmCreateUpdateAppIDFile, setVMCreateUpdateAppIDFile] = useState("");
    const [vmCreateUpdateAppIDTemplate, setVMCreateUpdateAppIDTemplate] = useState("");
    const [vmCreateUpdateAppOSType, setVMCreateUpdateAppOSType] = useState("win10");
    const [vmCreateUpdateAppInstaller, setVMCreateUpdateAppInstaller] = useState("");
    const [vmCreateUpdateAppInstallerARGS, setVMCreateUpdateAppInstallerARGS] = useState("");
    const [vmCreateUpdateAppInstallerType, setVMCreateUpdateAppInstallerType] = useState("none");
    const [vmCreateUpdateAppTarget, setVMCreateUpdateAppTarget] = useState("");
    const [vmCreateUpdateAppTargetARGS, setVMCreateUpdateAppTargetARGS] = useState("");
    const [vmCreateUpdateAppVersion, setVMCreateUpdateAppVersion] = useState("");
    const [viewerURL, setViewerURL] = useState("");
    const [requestAlert, setRequestAlert] = useState(false);
    const [requestAlertMessage, setRequestAlertMessage] = useState(false);
    const { t, i18n } = useTranslation();

    const isNotDesktop = useMediaQuery({
        query: '(max-width: 1200px)'
    })

    const createApp = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/apps/create', {
            id: vmCreateUpdateAppID,
            name: vmCreateUpdateAppName,
            id_file: vmCreateUpdateAppIDFile,
            id_template: vmCreateUpdateAppIDTemplate,
            os_type: vmCreateUpdateAppOSType,
            installer: vmCreateUpdateAppInstaller,
            installer_args: vmCreateUpdateAppInstallerARGS,
            installer_type: vmCreateUpdateAppInstallerType,
            target: vmCreateUpdateAppTarget,
            target_args: vmCreateUpdateAppTargetARGS,
            version: vmCreateUpdateAppVersion,
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

    const createSharedApp = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/apps/create_shared', {
            id: vmCreateUpdateAppID,
            name: vmCreateUpdateAppName,
            id_file: vmCreateUpdateAppIDFile,
            id_template: vmCreateUpdateAppIDTemplate,
            os_type: vmCreateUpdateAppOSType,
            installer: vmCreateUpdateAppInstaller,
            installer_args: vmCreateUpdateAppInstallerARGS,
            installer_type: vmCreateUpdateAppInstallerType,
            target: vmCreateUpdateAppTarget,
            target_args: vmCreateUpdateAppTargetARGS,
            version: vmCreateUpdateAppVersion,
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

    const updateApp = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/apps/update', {
            id: vmCreateUpdateAppID,
            name: vmCreateUpdateAppName,
            id_file: vmCreateUpdateAppIDFile,
            id_template: vmCreateUpdateAppIDTemplate,
            os_type: vmCreateUpdateAppOSType,
            installer: vmCreateUpdateAppInstaller,
            installer_args: vmCreateUpdateAppInstallerARGS,
            installer_type: vmCreateUpdateAppInstallerType,
            target: vmCreateUpdateAppTarget,
            target_args: vmCreateUpdateAppTargetARGS,
            version: vmCreateUpdateAppVersion,
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

    const updateSharedApp = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/apps/update_shared', {
            id: vmCreateUpdateAppID,
            name: vmCreateUpdateAppName,
            id_file: vmCreateUpdateAppIDFile,
            id_template: vmCreateUpdateAppIDTemplate,
            os_type: vmCreateUpdateAppOSType,
            installer: vmCreateUpdateAppInstaller,
            installer_args: vmCreateUpdateAppInstallerARGS,
            installer_type: vmCreateUpdateAppInstallerType,
            target: vmCreateUpdateAppTarget,
            target_args: vmCreateUpdateAppTargetARGS,
            version: vmCreateUpdateAppVersion,
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

    const getApp = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/apps/get', {
            id: vmGetAppID,
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
                    setVMGetAppResult(response.data.response_data);
                    setVMGetAppSubmit(true);

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);
                    setVMGetAppResult({});
                    setVMGetAppSubmit(true);

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
                setVMGetAppResult({});
                setVMGetAppSubmit(true);

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const deleteApp = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/apps/delete', {
            id: vmDeleteID,
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

    const deleteSharedApp = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/apps/delete_shared', {
            id: vmDeleteAllID,
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

    const appList = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/apps/list', {
            //id: 'None',
            choice: vmChoiceList,
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
                setVMChoiceListResult(response.data.response_data);
                setVMChoiceListSubmit(true);

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            }
            if (response.status === 200 && response.data.response_code !== 200) {
                setRequestAlert(true);
                setRequestAlertMessage(false);
                setVMChoiceListResult({});
                setVMChoiceListSubmit(true);

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
            setVMChoiceListResult({});
            setVMChoiceListSubmit(true);

            setTimeout(() => {
                setRequestAlert(false);
                setRequestAlertMessage(false);
            }, 2000);
        });
    }

    const changeVMCreateUpdateAppID = event => {
        setVMCreateUpdateAppID(event.target.value);
    };

    const changeVMCreateUpdateAppName = event => {
        setVMCreateUpdateAppName(event.target.value);
    };

    const changeVMCreateUpdateAppIDFile = event => {
        setVMCreateUpdateAppIDFile(event.target.value);
    };

    const changeVMCreateUpdateAppIDTemplate = event => {
        setVMCreateUpdateAppIDTemplate(event.target.value);
    };

    const changeVMCreateUpdateAppOSType = event => {
        setVMCreateUpdateAppOSType(event.target.value);
    };

    const changeVMCreateUpdateAppInstaller = event => {
        setVMCreateUpdateAppInstaller(event.target.value);
    };

    const changeVMCreateUpdateAppInstallerARGS = event => {
        setVMCreateUpdateAppInstallerARGS(event.target.value);
    };

    const changeVMCreateUpdateAppInstallerType = event => {
        setVMCreateUpdateAppInstallerType(event.target.value);
    };

    const changeVMCreateUpdateAppTarget = event => {
        setVMCreateUpdateAppTarget(event.target.value);
    };

    const changeVMCreateUpdateAppTargetARGS = event => {
        setVMCreateUpdateAppTargetARGS(event.target.value);
    };

    const changeVMCreateUpdateAppVersion = event => {
        setVMCreateUpdateAppVersion(event.target.value);
    };

    const changeVMGetAppID = event => {
        setVMGetAppID(event.target.value);
    };

    const changeVMDeleteID = event => {
        setVMDeleteID(event.target.value);
    };

    const changeVMDeleteAllID = event => {
        setVMDeleteAllID(event.target.value);
    };

    const changeVMChoiceList = event => {
        setVMChoiceList(event.target.value);
    };

    const openNewTab = () => {
        window.open({viewerURL}, "_blank").focus();
    };

    const openNewWindow = () => {
        window.open({viewerURL}, "DESIGN - Viewer", "fullscreen=yes");
    };

    const backToDashboard = () => {
        window.location.href = "/dashboard/admin";
    };

    const createAppSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        name: Yup.string()
            .required('Name invalid'),
        id_file: Yup.string()
            .required('File invalid'),
        id_template: Yup.string()
            .required('ID Template invalid'),
        os_type: Yup.string()
            .required('OS Type invalid'),
        installer: Yup.string()
            .required('Installer invalid'),
        installer_args: Yup.string()
            .required('Installer ARGS invalid'),
        installer_type: Yup.string()
            .required('Installer Type invalid'),
        target: Yup.string()
            .required('Target invalid'),
        target_args: Yup.string()
            .required('Target ARGS invalid'),
        version: Yup.string()
            .required('Version invalid'),
    });

    const createSharedAppSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        name: Yup.string()
            .required('Name invalid'),
        id_file: Yup.string()
            .required('File invalid'),
        id_template: Yup.string()
            .required('ID Template invalid'),
        os_type: Yup.string()
            .required('OS Type invalid'),
        installer: Yup.string()
            .required('Installer invalid'),
        installer_args: Yup.string()
            .required('Installer ARGS invalid'),
        installer_type: Yup.string()
            .required('Installer Type invalid'),
        target: Yup.string()
            .required('Target invalid'),
        target_args: Yup.string()
            .required('Target ARGS invalid'),
        version: Yup.string()
            .required('Version invalid'),
    });

    const updateAppSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        name: Yup.string()
            .required('Name invalid'),
        id_file: Yup.string()
            .required('File invalid'),
        id_template: Yup.string()
            .required('ID Template invalid'),
        os_type: Yup.string()
            .required('OS Type invalid'),
        installer: Yup.string()
            .required('Installer invalid'),
        installer_args: Yup.string()
            .required('Installer ARGS invalid'),
        installer_type: Yup.string()
            .required('Installer Type invalid'),
        target: Yup.string()
            .required('Target invalid'),
        target_args: Yup.string()
            .required('Target ARGS invalid'),
        version: Yup.string()
            .required('Version invalid'),
    });

    const updateSharedAppSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        name: Yup.string()
            .required('Name invalid'),
        id_file: Yup.string()
            .required('File invalid'),
        id_template: Yup.string()
            .required('ID Template invalid'),
        os_type: Yup.string()
            .required('OS Type invalid'),
        installer: Yup.string()
            .required('Installer invalid'),
        installer_args: Yup.string()
            .required('Installer ARGS invalid'),
        installer_type: Yup.string()
            .required('Installer Type invalid'),
        target: Yup.string()
            .required('Target invalid'),
        target_args: Yup.string()
            .required('Target ARGS invalid'),
        version: Yup.string()
            .required('Version invalid'),
    });

    const getAppSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
    });

    const deleteAppSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
    });

    const deleteSharedAppSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
    });

    const appListSchema = Yup.object().shape({
        choice: Yup.string()
            .required('Choice invalid'),
    });

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="settingsOverviewApps" fluid={true}>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <div>
                            <h2>
                                {t('app-configuration')}
                            </h2>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Tabs defaultActiveKey="app-create" id="all-config-apps">
                    <ReactBootstrap.Tab eventKey="app-create" title={t('app-create')}>
                        <Formik
                            initialValues={{
                                id: '',
                                name: '',
                                id_file: '',
                                id_template: '',
                                os_type: '',
                                installer: '',
                                installer_args: '',
                                installer_type: '',
                                target: '',
                                target_args: '',
                                version: '',
                            }}
                            validationSchema={createAppSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={createApp} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-app-id" name="create-app-id" value={vmCreateUpdateAppID} onChange={changeVMCreateUpdateAppID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-id')}
                                            {/*<ErrorMessage name="create-app-id">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-name">{t('app-create-update-name')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-app-name" name="create-app-name" value={vmCreateUpdateAppName} onChange={changeVMCreateUpdateAppName}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-name')}
                                            {/*<ErrorMessage name="create-app-name">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-id-file">{t('app-create-update-file')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-app-id-file" name="create-app-id-file" value={vmCreateUpdateAppIDFile} onChange={changeVMCreateUpdateAppIDFile}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-id-file')}
                                            {/*<ErrorMessage name="create-app-id-file">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-id-template">{t('app-create-update-template')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-app-id-template" name="create-app-id-template" value={vmCreateUpdateAppIDTemplate} onChange={changeVMCreateUpdateAppIDTemplate}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-id-template')}
                                            {/*<ErrorMessage name="create-app-id-template">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-os-type">{t('app-create-update-os-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="create-app-os-type" name="create-app-os-type" value={vmCreateUpdateAppOSType} onChange={changeVMCreateUpdateAppOSType}>
                                                <option value="win10">Windows 10</option>
                                                <option value="win11">Windows 11</option>
                                                <option value="l26">Debian 12</option>
                                            </select>
                                            {/*<Field type="text" id="create-app-os-type" name="create-app-os-type" value={vmCreateUpdateAppOSType} onChange={changeVMCreateUpdateAppOSType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-os-type')}
                                            {/*<ErrorMessage name="create-app-os-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-installer">{t('app-create-update-installer')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-app-installer" name="create-app-installer" value={vmCreateUpdateAppInstaller} onChange={changeVMCreateUpdateAppInstaller}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-installer')}
                                            {/*<ErrorMessage name="create-app-installer">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-installer-args">{t('app-create-update-installer-args')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-app-installer-args" name="create-app-installer-args" value={vmCreateUpdateAppInstallerARGS} onChange={changeVMCreateUpdateAppInstallerARGS}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-installer-args')}
                                            {/*<ErrorMessage name="create-app-installer-args">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-installer-type">{t('app-create-update-installer-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="create-app-installer-type" name="create-app-installer-type" value={vmCreateUpdateAppInstallerType} onChange={changeVMCreateUpdateAppInstallerType}>
                                                <option value="None">{t('app-installer-none')}</option>
                                                <option value="exec_cmd">{t('app-installer-execute-command')}</option>
                                                <option value="os_install">{t('app-installer-os-install')}</option>
                                                <option value="os_uninstall">{t('app-installer-os-uninstall')}</option>
                                            </select>
                                            {/*<Field type="text" id="create-app-installer-type" name="create-app-installer-type" value={vmCreateUpdateAppInstallerType} onChange={changeVMCreateUpdateAppInstallerType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-installer-type')}
                                            {/*<ErrorMessage name="create-app-installer-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-target">{t('app-create-update-target')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-app-target" name="create-app-target" value={vmCreateUpdateAppTarget} onChange={changeVMCreateUpdateAppTarget}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-target')}
                                            {/*<ErrorMessage name="create-app-target">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-target-args">{t('app-create-update-target-args')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-app-target-args" name="create-app-target-args" value={vmCreateUpdateAppTargetARGS} onChange={changeVMCreateUpdateAppTargetARGS}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-target-args')}
                                            {/*<ErrorMessage name="create-app-target-args">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-app-version">{t('app-create-update-version')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-app-version" name="create-app-version" value={vmCreateUpdateAppVersion} onChange={changeVMCreateUpdateAppVersion}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-app-version')}
                                            {/*<ErrorMessage name="create-app-version">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmCreateUpdateAppID.length > 0 && vmCreateUpdateAppName.length > 0 && vmCreateUpdateAppOSType.length > 0 && vmCreateUpdateAppInstallerType.length > 0 && vmCreateUpdateAppTarget.length > 0 && vmCreateUpdateAppVersion.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="app-create-shared" title={t('app-create-shared')}>
                        <Formik
                            initialValues={{
                                id: '',
                                name: '',
                                id_file: '',
                                id_template: '',
                                os_type: '',
                                installer: '',
                                installer_args: '',
                                installer_type: '',
                                target: '',
                                target_args: '',
                                version: '',
                            }}
                            validationSchema={createSharedAppSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={createSharedApp} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-app-id" name="create-shared-app-id" value={vmCreateUpdateAppID} onChange={changeVMCreateUpdateAppID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-id')}
                                            {/*<ErrorMessage name="create-shared-app-id">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-name">{t('app-create-update-name')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-app-name" name="create-shared-app-name" value={vmCreateUpdateAppName} onChange={changeVMCreateUpdateAppName}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-name')}
                                            {/*<ErrorMessage name="create-shared-app-name">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-id-file">{t('app-create-update-file')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-app-id-file" name="create-shared-app-id-file" value={vmCreateUpdateAppIDFile} onChange={changeVMCreateUpdateAppIDFile}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-id-file')}
                                            {/*<ErrorMessage name="create-shared-app-id-file">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-id-template">{t('app-create-update-template')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-app-id-template" name="create-shared-app-id-template" value={vmCreateUpdateAppIDTemplate} onChange={changeVMCreateUpdateAppIDTemplate}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-id-template')}
                                            {/*<ErrorMessage name="create-shared-app-id-template">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-os-type">{t('app-create-update-os-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="create-shared-app-os-type" name="create-shared-app-os-type" value={vmCreateUpdateAppOSType} onChange={changeVMCreateUpdateAppOSType}>
                                                <option value="win10">Windows 10</option>
                                                <option value="win11">Windows 11</option>
                                                <option value="l26">Debian 12</option>
                                            </select>
                                            {/*<Field type="text" id="create-shared-app-os-type" name="create-shared-app-os-type" value={vmCreateUpdateAppOSType} onChange={changeVMCreateUpdateAppOSType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-os-type')}
                                            {/*<ErrorMessage name="create-shared-app-os-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-installer">{t('app-create-update-installer')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-app-installer" name="create-shared-app-installer" value={vmCreateUpdateAppInstaller} onChange={changeVMCreateUpdateAppInstaller}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-installer')}
                                            {/*<ErrorMessage name="create-shared-app-installer">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-installer-args">{t('app-create-update-installer-args')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-app-installer-args" name="create-shared-app-installer-args" value={vmCreateUpdateAppInstallerARGS} onChange={changeVMCreateUpdateAppInstallerARGS}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-installer-args')}
                                            {/*<ErrorMessage name="create-shared-app-installer-args">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-installer-type">{t('app-create-update-installer-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="create-shared-app-installer-type" name="create-shared-app-installer-type" value={vmCreateUpdateAppInstallerType} onChange={changeVMCreateUpdateAppInstallerType}>
                                                <option value="None">{t('app-installer-none')}</option>
                                                <option value="exec_cmd">{t('app-installer-execute-command')}</option>
                                                <option value="os_install">{t('app-installer-os-install')}</option>
                                                <option value="os_uninstall">{t('app-installer-os-uninstall')}</option>
                                            </select>
                                            {/*<Field type="text" id="create-shared-app-installer-type" name="create-shared-app-installer-type" value={vmCreateUpdateAppInstallerType} onChange={changeVMCreateUpdateAppInstallerType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-installer-type')}
                                            {/*<ErrorMessage name="create-shared-app-installer-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-target">{t('app-create-update-target')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-app-target" name="create-shared-app-target" value={vmCreateUpdateAppTarget} onChange={changeVMCreateUpdateAppTarget}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-target')}
                                            {/*<ErrorMessage name="create-shared-app-target">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-target-args">{t('app-create-update-target-args')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-app-target-args" name="create-shared-app-target-args" value={vmCreateUpdateAppTargetARGS} onChange={changeVMCreateUpdateAppTargetARGS}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-target-args')}
                                            {/*<ErrorMessage name="create-shared-app-target-args">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-app-version">{t('app-create-update-version')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-app-version" name="create-shared-app-version" value={vmCreateUpdateAppVersion} onChange={changeVMCreateUpdateAppVersion}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-app-version')}
                                            {/*<ErrorMessage name="create-shared-app-version">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmCreateUpdateAppID.length > 0 && vmCreateUpdateAppName.length > 0 && vmCreateUpdateAppOSType.length > 0 && vmCreateUpdateAppInstallerType.length > 0 && vmCreateUpdateAppTarget.length > 0 && vmCreateUpdateAppVersion.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="app-update" title={t('app-update')}>
                        <Formik
                            initialValues={{
                                id: '',
                                name: '',
                                id_file: '',
                                id_template: '',
                                os_type: '',
                                installer: '',
                                installer_args: '',
                                installer_type: '',
                                target: '',
                                target_args: '',
                                version: '',
                            }}
                            validationSchema={updateAppSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={updateApp} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-app-id" name="update-app-id" value={vmCreateUpdateAppID} onChange={changeVMCreateUpdateAppID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-id')}
                                            {/*<ErrorMessage name="update-app-id">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-name">{t('app-create-update-name')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-app-name" name="update-app-name" value={vmCreateUpdateAppName} onChange={changeVMCreateUpdateAppName}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-name')}
                                            {/*<ErrorMessage name="update-app-name">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-id-file">{t('app-create-update-file')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-app-id-file" name="update-app-id-file" value={vmCreateUpdateAppIDFile} onChange={changeVMCreateUpdateAppIDFile}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-id-file')}
                                            {/*<ErrorMessage name="update-app-id-file">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-id-template">{t('app-create-update-template')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-app-id-template" name="update-app-id-template" value={vmCreateUpdateAppIDTemplate} onChange={changeVMCreateUpdateAppIDTemplate}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-id-template')}
                                            {/*<ErrorMessage name="update-app-id-template">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-os-type">{t('app-create-update-os-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="update-app-os-type" name="update-app-os-type" value={vmCreateUpdateAppOSType} onChange={changeVMCreateUpdateAppOSType}>
                                                <option value="win10">Windows 10</option>
                                                <option value="win11">Windows 11</option>
                                                <option value="l26">Debian 12</option>
                                            </select>
                                            {/*<Field type="text" id="update-app-os-type" name="update-app-os-type" value={vmCreateUpdateAppOSType} onChange={changeVMCreateUpdateAppOSType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-os-type')}
                                            {/*<ErrorMessage name="update-app-os-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-installer">{t('app-create-update-installer')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-app-installer" name="update-app-installer" value={vmCreateUpdateAppInstaller} onChange={changeVMCreateUpdateAppInstaller}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-installer')}
                                            {/*<ErrorMessage name="update-app-installer">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-installer-args">{t('app-create-update-installer-args')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-app-installer-args" name="update-app-installer-args" value={vmCreateUpdateAppInstallerARGS} onChange={changeVMCreateUpdateAppInstallerARGS}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-installer-args')}
                                            {/*<ErrorMessage name="update-app-installer-args">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-installer-type">{t('app-create-update-installer-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="update-app-installer-type" name="update-app-installer-type" value={vmCreateUpdateAppInstallerType} onChange={changeVMCreateUpdateAppInstallerType}>
                                                <option value="None">{t('app-installer-none')}</option>
                                                <option value="exec_cmd">{t('app-installer-execute-command')}</option>
                                                <option value="os_install">{t('app-installer-os-install')}</option>
                                                <option value="os_uninstall">{t('app-installer-os-uninstall')}</option>
                                            </select>
                                            {/*<Field type="text" id="update-app-installer-type" name="update-app-installer-type" value={vmCreateUpdateAppInstallerType} onChange={changeVMCreateUpdateAppInstallerType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-installer-type')}
                                            {/*<ErrorMessage name="update-app-installer-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-target">{t('app-create-update-target')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-app-target" name="update-app-target" value={vmCreateUpdateAppTarget} onChange={changeVMCreateUpdateAppTarget}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-target')}
                                            {/*<ErrorMessage name="update-app-target">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-target-args">{t('app-create-update-target-args')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-app-target-args" name="update-app-target-args" value={vmCreateUpdateAppTargetARGS} onChange={changeVMCreateUpdateAppTargetARGS}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-target-args')}
                                            {/*<ErrorMessage name="update-app-target-args">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-app-version">{t('app-create-update-version')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-app-version" name="update-app-version" value={vmCreateUpdateAppVersion} onChange={changeVMCreateUpdateAppVersion}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-app-version')}
                                            {/*<ErrorMessage name="update-app-version">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmCreateUpdateAppID.length > 0 && vmCreateUpdateAppName.length > 0 && vmCreateUpdateAppOSType.length > 0 && vmCreateUpdateAppInstallerType.length > 0 && vmCreateUpdateAppTarget.length > 0 && vmCreateUpdateAppVersion.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="app-update-shared" title={t('app-update-shared')}>
                        <Formik
                            initialValues={{
                                id: '',
                                name: '',
                                id_file: '',
                                id_template: '',
                                os_type: '',
                                installer: '',
                                installer_args: '',
                                installer_type: '',
                                target: '',
                                target_args: '',
                                version: '',
                            }}
                            validationSchema={updateSharedAppSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={updateSharedApp} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-app-id" name="update-shared-app-id" value={vmCreateUpdateAppID} onChange={changeVMCreateUpdateAppID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-id')}
                                            {/*<ErrorMessage name="update-shared-app-id">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-name">{t('app-create-update-name')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-app-name" name="update-shared-app-name" value={vmCreateUpdateAppName} onChange={changeVMCreateUpdateAppName}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-name')}
                                            {/*<ErrorMessage name="update-shared-app-name">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-id-file">{t('app-create-update-file')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-app-id-file" name="update-shared-app-id-file" value={vmCreateUpdateAppIDFile} onChange={changeVMCreateUpdateAppIDFile}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-id-file')}
                                            {/*<ErrorMessage name="update-shared-app-id-file">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-id-template">{t('app-create-update-template')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-app-id-template" name="update-shared-app-id-template" value={vmCreateUpdateAppIDTemplate} onChange={changeVMCreateUpdateAppIDTemplate}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-id-template')}
                                            {/*<ErrorMessage name="update-shared-app-id-template">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-os-type">{t('app-create-update-os-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="update-shared-app-os-type" name="update-shared-app-os-type" value={vmCreateUpdateAppOSType} onChange={changeVMCreateUpdateAppOSType}>
                                                <option value="win10">Windows 10</option>
                                                <option value="win11">Windows 11</option>
                                                <option value="l26">Debian 12</option>
                                            </select>
                                            {/*<Field type="text" id="update-shared-app-os-type" name="update-shared-app-os-type" value={vmCreateUpdateAppOSType} onChange={changeVMCreateUpdateAppOSType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-os-type')}
                                            {/*<ErrorMessage name="update-shared-app-os-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-installer">{t('app-create-update-installer')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-app-installer" name="update-shared-app-installer" value={vmCreateUpdateAppInstaller} onChange={changeVMCreateUpdateAppInstaller}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-installer')}
                                            {/*<ErrorMessage name="update-shared-app-installer">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-installer-args">{t('app-create-update-installer-args')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-app-installer-args" name="update-shared-app-installer-args" value={vmCreateUpdateAppInstallerARGS} onChange={changeVMCreateUpdateAppInstallerARGS}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-installer-args')}
                                            {/*<ErrorMessage name="update-shared-app-installer-args">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-installer-type">{t('app-create-update-installer-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="update-shared-app-installer-type" name="update-shared-app-installer-type" value={vmCreateUpdateAppInstallerType} onChange={changeVMCreateUpdateAppInstallerType}>
                                                <option value="None">{t('app-installer-none')}</option>
                                                <option value="exec_cmd">{t('app-installer-execute-command')}</option>
                                                <option value="os_install">{t('app-installer-os-install')}</option>
                                                <option value="os_uninstall">{t('app-installer-os-uninstall')}</option>
                                            </select>
                                            {/*<Field type="text" id="update-shared-app-installer-type" name="update-shared-app-installer-type" value={vmCreateUpdateAppInstallerType} onChange={changeVMCreateUpdateAppInstallerType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-installer-type')}
                                            {/*<ErrorMessage name="update-shared-app-installer-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-target">{t('app-create-update-target')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-app-target" name="update-shared-app-target" value={vmCreateUpdateAppTarget} onChange={changeVMCreateUpdateAppTarget}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-target')}
                                            {/*<ErrorMessage name="update-shared-app-target">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-target-args">{t('app-create-update-target-args')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-app-target-args" name="update-shared-app-target-args" value={vmCreateUpdateAppTargetARGS} onChange={changeVMCreateUpdateAppTargetARGS}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-target-args')}
                                            {/*<ErrorMessage name="update-shared-app-target-args">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-app-version">{t('app-create-update-version')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-app-version" name="update-shared-app-version" value={vmCreateUpdateAppVersion} onChange={changeVMCreateUpdateAppVersion}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-app-version')}
                                            {/*<ErrorMessage name="update-shared-app-version">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmCreateUpdateAppID.length > 0 && vmCreateUpdateAppName.length > 0 && vmCreateUpdateAppOSType.length > 0 && vmCreateUpdateAppInstallerType.length > 0 && vmCreateUpdateAppTarget.length > 0 && vmCreateUpdateAppVersion.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="get-apps" title={t('app-get')}>
                        <Formik
                            initialValues={{
                                id: '',
                            }}
                            validationSchema={getAppSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={getApp} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="app-get-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="app-get-id" name="app-get-id" value={vmGetAppID} onChange={changeVMGetAppID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-app-get-id')}
                                            {/*<ErrorMessage name="app-get-id">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmGetAppID.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                        {
                            vmGetAppSubmit
                                ?
                                vmGetAppResult.length > 0
                                    ? (
                                        <>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                   <pre>
                                                       {JSON.stringify(vmGetAppResult, null, 3)}
                                                   </pre>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                        </>
                                    ) : (
                                        <>
                                            {t('no-data-available')}
                                        </>
                                    )
                                :
                                <></>
                        }
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="app-delete" title={t('app-delete')}>
                        <Formik
                            initialValues={{
                                id: '',
                            }}
                            validationSchema={deleteAppSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={deleteApp} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="delete-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="delete-id" name="delete-id" value={vmDeleteID} onChange={changeVMDeleteID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-delete-id')}
                                            {/*<ErrorMessage name="delete-id">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmDeleteID.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="app-delete-shared" title={t('app-delete-shared')}>
                        <Formik
                            initialValues={{
                                id: '',
                            }}
                            validationSchema={deleteSharedAppSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={deleteSharedApp} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="delete-all-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="delete-all-id" name="delete-all-id" value={vmDeleteAllID} onChange={changeVMDeleteAllID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-delete-all-id')}
                                            {/*<ErrorMessage name="delete-all-id">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmDeleteAllID.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="app-list" title={t('app-list')}>
                        <Formik
                            initialValues={{
                                choice: '',
                            }}
                            validationSchema={appListSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={appList} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="choice-list">{t('choice-list')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="choice-list" name="choice-list" value={vmChoiceList} onChange={changeVMChoiceList}>
                                                <option value="user">{t('user-select')}</option>
                                                <option value="shared">{t('shared-select')}</option>
                                                <option value="both">{t('both-select')}</option>
                                            </select>
                                            {/*<Field type="text" id="choice-list" name="choice-list" value={vmChoiceList} onChange={changeVMChoiceList}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-choice-list')}
                                            {/*<ErrorMessage name="choice-list">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmChoiceList.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                        {
                            vmChoiceListSubmit
                            ?
                                vmChoiceListResult.length > 0
                                ? (
                                    <>
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <pre>
                                                    {JSON.stringify(vmChoiceListResult, null, 3)}
                                                </pre>
                                            </ReactBootstrap.Col>
                                        </ReactBootstrap.Row>
                                    </>
                                ) : (
                                    <>
                                        {t('no-data-available')}
                                    </>
                                )
                            :
                                <></>
                        }
                    </ReactBootstrap.Tab>
                </ReactBootstrap.Tabs>
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

export default SettingsApps;

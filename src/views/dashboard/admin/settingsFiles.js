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

function SettingsFiles() {
    const params = useParams(); // Example: {params.id}
    const [vmChoiceList, setVMChoiceList] = useState("user");
    const [vmChoiceListResult, setVMChoiceListResult] = useState({});
    const [vmChoiceListSubmit, setVMChoiceListSubmit] = useState(false);
    const [vmGetFileID, setVMGetFileID] = useState("");
    const [vmGetAppResult, setVMGetAppResult] = useState({});
    const [vmGetAppSubmit, setVMGetAppSubmit] = useState(false);
    const [vmDeleteAllID, setVMDeleteAllID] = useState("");
    const [vmDeleteID, setVMDeleteID] = useState("");
    const [vmFileUploadAppID, setVMFileUploadAppID] = useState("");
    const [vmFileUploadAppName, setVMFileUploadAppName] = useState("");
    const [vmFileUploadAppPath, setVMFileUploadAppPath] = useState("");
    const [vmFileUploadAppOSType, setVMFileUploadAppOSType] = useState("win10");
    const [vmFileUploadAppVersion, setVMFileUploadAppVersion] = useState("");
    const [vmFileUploadAppSelectFile, setVMFileUploadAppSelectFile] = useState("");
    const [viewerURL, setViewerURL] = useState("");
    const [requestAlert, setRequestAlert] = useState(false);
    const [requestAlertMessage, setRequestAlertMessage] = useState(false);
    const { t, i18n } = useTranslation();

    const isNotDesktop = useMediaQuery({
        query: '(max-width: 1200px)'
    })

    const createFile = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/files/create', {
            id: vmFileUploadAppID,
            filename: vmFileUploadAppName,
            filepath: vmFileUploadAppPath,
            os_type: vmFileUploadAppOSType,
            version: vmFileUploadAppVersion,
            file: vmFileUploadAppSelectFile,
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

    const createSharedFile = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/files/create_shared', {
            id: vmFileUploadAppID,
            filename: vmFileUploadAppName,
            filepath: vmFileUploadAppPath,
            os_type: vmFileUploadAppOSType,
            version: vmFileUploadAppVersion,
            file: vmFileUploadAppSelectFile,
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

    const updateFile = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/files/update', {
            id: vmFileUploadAppID,
            filename: vmFileUploadAppName,
            filepath: vmFileUploadAppPath,
            os_type: vmFileUploadAppOSType,
            version: vmFileUploadAppVersion,
            file: vmFileUploadAppSelectFile,
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

    const updateSharedFile = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/files/update_shared', {
            id: vmFileUploadAppID,
            filename: vmFileUploadAppName,
            filepath: vmFileUploadAppPath,
            os_type: vmFileUploadAppOSType,
            version: vmFileUploadAppVersion,
            file: vmFileUploadAppSelectFile,
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

    const getFile = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/files/get', {
            id: vmGetFileID,
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

    const deleteFile = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/files/delete', {
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

    const deleteSharedFile = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/files/delete_shared', {
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

    const fileList = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/files/list', {
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

    const changeVMFileUploadAppID = event => {
        setVMFileUploadAppID(event.target.value);
    };

    const changeVMFileUploadAppName = event => {
        setVMFileUploadAppName(event.target.value);
    };

    const changeVMFileUploadAppPath = event => {
        setVMFileUploadAppPath(event.target.value);
    };

    /*const changeVMFileUploadAppIDTemplate = event => {
        setVMFileUploadAppIDTemplate(event.target.value);
    };*/

    const changeVMFileUploadAppOSType = event => {
        setVMFileUploadAppOSType(event.target.value);
    };

    /*const changeVMFileUploadAppInstaller = event => {
        setVMFileUploadAppInstaller(event.target.value);
    };

    const changeVMFileUploadAppInstallerARGS = event => {
        setVMFileUploadAppInstallerARGS(event.target.value);
    };

    const changeVMFileUploadAppInstallerType = event => {
        setVMFileUploadAppInstallerType(event.target.value);
    };

    const changeVMFileUploadAppTarget = event => {
        setVMFileUploadAppTarget(event.target.value);
    };

    const changeVMFileUploadAppTargetARGS = event => {
        setVMFileUploadAppTargetARGS(event.target.value);
    };*/

    const changeVMFileUploadAppVersion = event => {
        setVMFileUploadAppVersion(event.target.value);
    };

    const changeVMFileUploadAppSelectFile = event => {
        if (event.target.files) {
            setVMFileUploadAppSelectFile(event.target.files[0]);
        }
    };

    const changeVMGetFileID = event => {
        setVMGetFileID(event.target.value);
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

    const createFileSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        filename: Yup.string()
            .required('Name invalid'),
        filepath: Yup.string()
            .required('Path invalid'),
        os_type: Yup.string()
            .required('OS Type invalid'),
        version: Yup.string()
            .required('Version invalid'),
        file: Yup.string()
            .required('File invalid'),
    });

    const createSharedFileSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        filename: Yup.string()
            .required('Name invalid'),
        filepath: Yup.string()
            .required('Path invalid'),
        os_type: Yup.string()
            .required('OS Type invalid'),
        version: Yup.string()
            .required('Version invalid'),
        file: Yup.string()
            .required('File invalid'),
    });

    const updateFileSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        filename: Yup.string()
            .required('Name invalid'),
        filepath: Yup.string()
            .required('Path invalid'),
        os_type: Yup.string()
            .required('OS Type invalid'),
        version: Yup.string()
            .required('Version invalid'),
        file: Yup.string()
            .required('File invalid'),
    });

    const updateSharedFileSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
        filename: Yup.string()
            .required('Name invalid'),
        filepath: Yup.string()
            .required('Path invalid'),
        os_type: Yup.string()
            .required('OS Type invalid'),
        version: Yup.string()
            .required('Version invalid'),
        file: Yup.string()
            .required('File invalid'),
    });

    const getFileSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
    });

    const deleteFileSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
    });

    const deleteSharedFileSchema = Yup.object().shape({
        id: Yup.string()
            .required('ID invalid'),
    });

    const fileListSchema = Yup.object().shape({
        choice: Yup.string()
            .required('Choice invalid'),
    });

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="settingsOverviewFiles" fluid={true}>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <div>
                            <h2>
                                {t('file-configuration')}
                            </h2>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Tabs defaultActiveKey="file-create" id="all-config-file">
                    <ReactBootstrap.Tab eventKey="file-create" title={t('file-create')}>
                        <Formik
                            initialValues={{
                                id: '',
                                filename: '',
                                filepath: '',
                                os_type: '',
                                version: '',
                                file: '',
                            }}
                            validationSchema={createFileSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={createFile} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-file-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-file-id" name="create-file-id" value={vmFileUploadAppID} onChange={changeVMFileUploadAppID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-file-id')}
                                            {/*<ErrorMessage name="create-file-id">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-file-name">{t('file-create-update-name')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-file-name" name="create-file-name" value={vmFileUploadAppName} onChange={changeVMFileUploadAppName}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-file-name')}
                                            {/*<ErrorMessage name="create-file-name">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-file-path">{t('file-create-update-path')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-file-path" name="create-file-path" value={vmFileUploadAppPath} onChange={changeVMFileUploadAppPath}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-file-path')}
                                            {/*<ErrorMessage name="create-file-path">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-file-os-type">{t('file-create-update-os-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="create-file-os-type" name="create-file-os-type" value={vmFileUploadAppOSType} onChange={changeVMFileUploadAppOSType}>
                                                <option value="win10">Windows 10</option>
                                                <option value="win11">Windows 11</option>
                                                <option value="l26">Debian 12</option>
                                            </select>
                                            {/*<Field type="text" id="create-file-os-type" name="create-file-os-type" value={vmFileUploadAppOSType} onChange={changeVMFileUploadAppOSType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-file-os-type')}
                                            {/*<ErrorMessage name="create-file-os-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-file-version">{t('file-create-update-version')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-file-version" name="create-file-version" value={vmFileUploadAppVersion} onChange={changeVMFileUploadAppVersion}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-file-version')}
                                            {/*<ErrorMessage name="create-file-version">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-file-file">{t('file-create-update-file')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <input type="file" id="create-file-file" name="create-file-file" onChange={changeVMFileUploadAppSelectFile}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-file-file')}
                                            {/*<ErrorMessage name="create-file-file">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmFileUploadAppID.length > 0 && vmFileUploadAppName.length > 0 && vmFileUploadAppOSType.length > 0 && vmFileUploadAppVersion.length > 0 && vmFileUploadAppPath.length > 0 && vmFileUploadAppSelectFile !== "" ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="file-create-shared" title={t('file-create-shared')}>
                        <Formik
                            initialValues={{
                                id: '',
                                filename: '',
                                filepath: '',
                                os_type: '',
                                version: '',
                                file: '',
                            }}
                            validationSchema={createSharedFileSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={createSharedFile} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-file-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-file-id" name="create-shared-file-id" value={vmFileUploadAppID} onChange={changeVMFileUploadAppID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-file-id')}
                                            {/*<ErrorMessage name="create-shared-file-id">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-file-name">{t('file-create-update-name')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-file-name" name="create-shared-file-name" value={vmFileUploadAppName} onChange={changeVMFileUploadAppName}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-file-name')}
                                            {/*<ErrorMessage name="create-shared-file-name">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-file-path">{t('file-create-update-path')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-file-path" name="create-shared-file-path" value={vmFileUploadAppPath} onChange={changeVMFileUploadAppPath}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-file-path')}
                                            {/*<ErrorMessage name="create-shared-file-path">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-file-os-type">{t('file-create-update-os-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="create-shared-file-os-type" name="create-shared-file-os-type" value={vmFileUploadAppOSType} onChange={changeVMFileUploadAppOSType}>
                                                <option value="win10">Windows 10</option>
                                                <option value="win11">Windows 11</option>
                                                <option value="l26">Debian 12</option>
                                            </select>
                                            {/*<Field type="text" id="create-shared-file-os-type" name="create-shared-file-os-type" value={vmFileUploadAppOSType} onChange={changeVMFileUploadAppOSType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-file-os-type')}
                                            {/*<ErrorMessage name="create-shared-file-os-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-file-version">{t('file-create-update-version')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="create-shared-file-version" name="create-shared-file-version" value={vmFileUploadAppVersion} onChange={changeVMFileUploadAppVersion}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-file-version')}
                                            {/*<ErrorMessage name="create-shared-file-version">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="create-shared-file-file">{t('file-create-update-file')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <input type="file" id="create-shared-file-file" name="create-shared-file-file" onChange={changeVMFileUploadAppSelectFile}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-create-shared-file-file')}
                                            {/*<ErrorMessage name="create-shared-file-file">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmFileUploadAppID.length > 0 && vmFileUploadAppName.length > 0 && vmFileUploadAppOSType.length > 0 && vmFileUploadAppVersion.length && vmFileUploadAppPath.length > 0 && vmFileUploadAppSelectFile !== "" ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="file-update" title={t('file-update')}>
                        <Formik
                            initialValues={{
                                id: '',
                                filename: '',
                                filepath: '',
                                os_type: '',
                                version: '',
                                file: '',
                            }}
                            validationSchema={updateFileSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={updateFile} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-file-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-file-id" name="update-file-id" value={vmFileUploadAppID} onChange={changeVMFileUploadAppID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-file-id')}
                                            {/*<ErrorMessage name="update-file-id">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-file-name">{t('file-create-update-name')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-file-name" name="update-file-name" value={vmFileUploadAppName} onChange={changeVMFileUploadAppName}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-file-name')}
                                            {/*<ErrorMessage name="update-file-name">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-file-path">{t('file-create-update-path')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-file-path" name="update-file-path" value={vmFileUploadAppPath} onChange={changeVMFileUploadAppPath}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-file-path')}
                                            {/*<ErrorMessage name="update-file-path">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-file-os-type">{t('file-create-update-os-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="update-file-os-type" name="update-file-os-type" value={vmFileUploadAppOSType} onChange={changeVMFileUploadAppOSType}>
                                                <option value="win10">Windows 10</option>
                                                <option value="win11">Windows 11</option>
                                                <option value="l26">Debian 12</option>
                                            </select>
                                            {/*<Field type="text" id="update-file-os-type" name="update-file-os-type" value={vmFileUploadAppOSType} onChange={changeVMFileUploadAppOSType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-file-os-type')}
                                            {/*<ErrorMessage name="update-file-os-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-file-version">{t('file-create-update-version')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-file-version" name="update-file-version" value={vmFileUploadAppVersion} onChange={changeVMFileUploadAppVersion}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-file-version')}
                                            {/*<ErrorMessage name="update-file-version">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-file-file">{t('file-create-update-file')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <input type="file" id="update-file-file" name="update-file-file" onChange={changeVMFileUploadAppSelectFile}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-file-file')}
                                            {/*<ErrorMessage name="update-file-file">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmFileUploadAppID.length > 0 && vmFileUploadAppName.length > 0 && vmFileUploadAppOSType.length > 0 && vmFileUploadAppVersion.length > 0 && vmFileUploadAppPath.length > 0 && vmFileUploadAppSelectFile !== "" ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="file-update-shared" title={t('file-update-shared')}>
                        <Formik
                            initialValues={{
                                id: '',
                                filename: '',
                                filepath: '',
                                os_type: '',
                                version: '',
                                file: '',
                            }}
                            validationSchema={updateSharedFileSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={updateSharedFile} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-file-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-file-id" name="update-shared-file-id" value={vmFileUploadAppID} onChange={changeVMFileUploadAppID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-file-id')}
                                            {/*<ErrorMessage name="update-shared-file-id">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-file-name">{t('file-create-update-name')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-file-name" name="update-shared-file-name" value={vmFileUploadAppName} onChange={changeVMFileUploadAppName}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-file-name')}
                                            {/*<ErrorMessage name="update-shared-file-name">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-file-path">{t('file-create-update-path')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-file-path" name="update-shared-file-path" value={vmFileUploadAppPath} onChange={changeVMFileUploadAppPath}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-file-path')}
                                            {/*<ErrorMessage name="update-shared-file-path">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-file-os-type">{t('file-create-update-os-type')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="update-shared-file-os-type" name="update-shared-file-os-type" value={vmFileUploadAppOSType} onChange={changeVMFileUploadAppOSType}>
                                                <option value="win10">Windows 10</option>
                                                <option value="win11">Windows 11</option>
                                                <option value="l26">Debian 12</option>
                                            </select>
                                            {/*<Field type="text" id="update-shared-file-os-type" name="update-shared-file-os-type" value={vmFileUploadAppOSType} onChange={changeVMFileUploadAppOSType}/>*/}
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-file-os-type')}
                                            {/*<ErrorMessage name="update-shared-file-os-type">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-file-version">{t('file-create-update-version')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="update-shared-file-version" name="update-shared-file-version" value={vmFileUploadAppVersion} onChange={changeVMFileUploadAppVersion}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-file-version')}
                                            {/*<ErrorMessage name="update-shared-file-version">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="update-shared-file-file">{t('file-create-update-file')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <input type="file" id="update-shared-file-file" name="update-shared-file-file" onChange={changeVMFileUploadAppSelectFile}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-update-shared-file-file')}
                                            {/*<ErrorMessage name="update-shared-file-file">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmFileUploadAppID.length > 0 && vmFileUploadAppName.length > 0 && vmFileUploadAppOSType.length > 0 && vmFileUploadAppVersion.length > 0 && vmFileUploadAppPath.length > 0 && vmFileUploadAppSelectFile !== "" ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="get-file" title={t('file-get')}>
                        <Formik
                            initialValues={{
                                id: '',
                            }}
                            validationSchema={getFileSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={getFile} id="form-apps-tools">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="file-get-id">{t('vm-id')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="file-get-id" name="file-get-id" value={vmGetFileID} onChange={changeVMGetFileID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-file-get-id')}
                                            {/*<ErrorMessage name="file-get-id">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmGetFileID.length > 0 ? false : true}>
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
                    <ReactBootstrap.Tab eventKey="file-delete" title={t('file-delete')}>
                        <Formik
                            initialValues={{
                                id: '',
                            }}
                            validationSchema={deleteFileSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={deleteFile} id="form-apps-tools">
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
                    <ReactBootstrap.Tab eventKey="file-delete-shared" title={t('file-delete-shared')}>
                        <Formik
                            initialValues={{
                                id: '',
                            }}
                            validationSchema={deleteSharedFileSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={deleteSharedFile} id="form-apps-tools">
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
                    <ReactBootstrap.Tab eventKey="file-list" title={t('file-list')}>
                        <Formik
                            initialValues={{
                                choice: '',
                            }}
                            validationSchema={fileListSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={fileList} id="form-apps-tools">
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

export default SettingsFiles;

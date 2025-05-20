import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import axios from "axios";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from 'formik';

import Header from "../../../components/header";

import {DEVELOPMENT, TEST, LIVE, USERNAME, PASSWORD, DEVELOPMENT_INTERN, TEST_INTERN, LIVE_INTERN, URL_SYSTEM} from "../../../constants/constants";

function SettingsTasks() {
    const [tasksStartPreparedID, setTasksStartPreparedID] = useState("");
    const [tasksGetID, setTasksGetID] = useState("");
    const [tasksGetData, setTasksGetData] = useState({});
    const [tasksGetDataSuccess, setTasksGetDataSuccess] = useState(false);
    const [tasksStopIDTask, setTasksStopIDTask] = useState("");
    const [tasksStopIDObject, setTasksStopIDObject] = useState("");
    const [tasksStopIDInstance, setTasksStopIDInstance] = useState("");
    const [tasksStatusCurrent, setTasksStatusCurrent] = useState([]);
    const [tasksStatusFinalize, setTasksStatusFinalize] = useState([]);
    const [tasksStatusSuccess, setTasksStatusSuccess] = useState(false);
    const [tasksListIDObject, setTasksListIDObject] = useState("");
    const [tasksListIDInstance, setTasksListIDInstance] = useState("");
    const [tasksListState, setTasksListState] = useState("all");
    const [tasksListData, setTasksListData] = useState([]);
    const [tasksListSubmit, setTasksListSubmit] = useState(false);
    const [viewerURL, setViewerURL] = useState("");
    const [requestAlert, setRequestAlert] = useState(false);
    const [requestAlertMessage, setRequestAlertMessage] = useState(false);
    const { t, i18n } = useTranslation();

    const startPrepared = event => {
        event.preventDefault()

        axios.post(DEVELOPMENT + '/tasks/start_prepared', {
            id_object: tasksStartPreparedID,
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

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);
                    setViewerURL("");

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
                setViewerURL("");

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const getData = event => {
        event.preventDefault()

        axios.post(DEVELOPMENT + '/tasks/get', {
            id_task: tasksGetID,
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
                    setTasksGetDataSuccess(true);
                    setTasksGetData(response.data.response_data)

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);
                    setTasksGetDataSuccess(false);
                    setTasksGetData({})

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
                setTasksGetDataSuccess(false);
                setTasksGetData({})

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const stopTask = event => {
        event.preventDefault()

        axios.post(DEVELOPMENT + '/tasks/stop', {
            id_task: tasksStopIDTask,
            id_object: tasksStopIDObject,
            id_instance: tasksStopIDInstance,
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

    const statusTasks = event => {
        event.preventDefault()

        axios.post(DEVELOPMENT + '/tasks/status', {}, {
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
                    setTasksStatusCurrent(response.data.response_data.current)
                    setTasksStatusFinalize(response.data.response_data.finalized)
                    setTasksStatusSuccess(true)

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);
                    setTasksStatusCurrent([])
                    setTasksStatusFinalize([])
                    setTasksStatusSuccess(false)

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
                setTasksStatusCurrent([])
                setTasksStatusFinalize([])
                setTasksStatusSuccess(false)

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const listTask = event => {
        event.preventDefault()

        axios.post(DEVELOPMENT + '/tasks/list', {
            id_object: tasksListIDObject,
            id_instance: tasksListIDInstance,
            state: tasksListState,
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
                    setTasksListData(response.data.response_data)
                    setTasksListSubmit(true)

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);
                    setTasksListData([])
                    setTasksListSubmit(false)

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
                setTasksListData([])
                setTasksListSubmit(false)

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const changeTasksStartPreparedID = event => {
        setTasksStartPreparedID(event.target.value);
    };

    const changeTasksGetID = event => {
        setTasksGetID(event.target.value);
    };

    const changeTasksStopIDTask = event => {
        setTasksStopIDTask(event.target.value);
    };

    const changeTasksStopIDObject = event => {
        setTasksStopIDObject(event.target.value);
    };

    const changeTasksStopIDInstance = event => {
        setTasksStopIDInstance(event.target.value);
    };

    const changeTasksListIDObject = event => {
        setTasksListIDObject(event.target.value);
    };

    const changeTasksListIDInstance = event => {
        setTasksListIDInstance(event.target.value);
    };

    const changeTasksListState = event => {
        setTasksListState(event.target.value);
    };

    const startPreparedSchema = Yup.object().shape({
        id_object: Yup.string()
            .required('ID object invalid'),
    });

    const getTaskSchema = Yup.object().shape({
        id_task: Yup.string()
            .required('ID task invalid'),
    });

    const stopSchema = Yup.object().shape({
        id_task: Yup.string()
            .required('ID task invalid'),
        id_object: Yup.string()
            .required('ID object invalid'),
        id_instance: Yup.string()
            .required('ID instance invalid'),
    });

    const statusSchema = Yup.object().shape({});

    const listSchema = Yup.object().shape({
        id_task: Yup.string()
            .required('ID task invalid'),
        id_object: Yup.string()
            .required('ID object invalid'),
        state: Yup.string()
            .required('State invalid'),
    });

    return (
        <>
            <Header />
            <ReactBootstrap.Container id="monitoring">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <div>
                            <h2>
                                {t('tasks')}
                            </h2>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Tabs defaultActiveKey="start-tasks" id="all-tasks-types">
                    <ReactBootstrap.Tab eventKey="start-tasks" title={t('start-tasks')}>
                        <Formik
                            initialValues={{
                                id_object: "",
                            }}
                            validationSchema={startPreparedSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={startPrepared} id="form-task-start">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-object-task-start">{t('vm-id-object')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-object-task-start" name="vm-id-object-task-start" value={tasksStartPreparedID} onChange={changeTasksStartPreparedID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-object-task-start')}
                                            {/*<ErrorMessage name="vm-id-object-task-start">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={tasksStartPreparedID.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
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
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="get-tasks" title={t('get-tasks')}>
                        <Formik
                            initialValues={{
                                id_task: "",
                            }}
                            validationSchema={getTaskSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={getData} id="form-task-get">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-task-get">{t('vm-id-task')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-task-get" name="vm-id-task-get" value={tasksGetID} onChange={changeTasksGetID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-task-get')}
                                            {/*<ErrorMessage name="vm-id-task-get">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={tasksGetID.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                        {
                            tasksGetDataSuccess ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        id_instance
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        {tasksGetData.id_instance}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        id_object
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        {tasksGetData.id_object}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        id_owner
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        {tasksGetData.id_owner}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        id_task
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        {tasksGetData.id_task}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        result
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        {tasksGetData.result}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        task_purpose
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        {tasksGetData.task_purpose}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        task_state
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        {tasksGetData.task_state}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        task_type
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        {tasksGetData.task_type}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <></>
                            )
                        }
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="stop-tasks" title={t('stop-tasks')}>
                        <Formik
                            initialValues={{
                                id_task: "",
                                id_object: "",
                                id_instance: "",
                            }}
                            validationSchema={stopSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={stopTask} id="form-task-stop">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-task-stop">{t('vm-id-task')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-task-stop" name="vm-id-task-stop" value={tasksStopIDTask} onChange={changeTasksStopIDTask}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-task-stop')}
                                            {/*<ErrorMessage name="vm-id-task-stop">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-object-task-stop">{t('vm-id-object')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-object-task-stop" name="vm-id-object-task-stop" value={tasksStopIDObject} onChange={changeTasksStopIDObject}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-object-task-stop')}
                                            {/*<ErrorMessage name="vm-id-object-task-stop">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-instance-task-stop">{t('vm-id-instance')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-instance-task-stop" name="vm-id-instance-task-stop" value={tasksStopIDInstance} onChange={changeTasksStopIDInstance}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-instance-task-stop')}
                                            {/*<ErrorMessage name="vm-id-instance-task-stop">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={tasksStopIDTask.length > 0 && tasksStopIDObject.length > 0 && tasksStopIDInstance.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="status-tasks" title={t('status-tasks')}>
                        <Formik
                            initialValues={{}}
                            validationSchema={statusSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={statusTasks} id="form-task-status">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit">
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                        {
                            tasksStatusSuccess ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                        <h3>
                                            {t('current-task')}
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <></>
                            )
                        }
                        {
                            tasksStatusSuccess ? (
                                tasksStatusCurrent.length > 0 ? (
                                    tasksStatusCurrent.map(taskStatusData => {
                                        return (
                                            <>
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        id_instance
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.id_instance}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        id_object
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.id_object}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        id_owner
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.id_owner}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        id_task
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.id_task}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        result
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.result}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        task_purpose
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.task_purpose}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        task_state
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.task_state}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        task_type
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.task_type}
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                            </>
                                        )
                                    })
                                ) : (
                                    <>
                                        {t('no-data-available')}
                                    </>
                                )
                            ) : (
                                <></>
                            )
                        }
                        {
                            tasksStatusSuccess ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                        <h3 className="text-normal">
                                            {t('finalize-task')}
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <></>
                            )
                        }
                        {
                            tasksStatusSuccess ? (
                                tasksStatusFinalize.length > 0 ? (
                                    tasksStatusFinalize.map(taskStatusData => {
                                        return (
                                            <>
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        id_instance
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.id_instance}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        id_object
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.id_object}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        id_owner
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.id_owner}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        id_task
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.id_task}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        result
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.result}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        task_purpose
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.task_purpose}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        task_state
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.task_state}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        task_type
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                        {taskStatusData.task_type}
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                            </>
                                        )
                                    })
                                ) : (
                                    <>
                                        {t('no-data-available')}
                                    </>
                                )
                            ) : (
                                <></>
                            )
                        }
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="list-tasks" title={t('list-tasks')}>
                        <Formik
                            initialValues={{
                                id_object: "",
                                id_instance: "",
                                state: "",
                            }}
                            validationSchema={listSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={listTask} id="form-task-list">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-object-task-list">{t('vm-id-object')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-object-task-list" name="vm-id-object-task-list" value={tasksListIDObject} onChange={changeTasksListIDObject}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-object-task-list')}
                                            {/*<ErrorMessage name="vm-id-object-task-list">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-instance-task-list">{t('vm-id-instance')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-instance-task-list" name="vm-id-instance-task-list" value={tasksListIDInstance} onChange={changeTasksListIDInstance}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-instance-task-list')}
                                            {/*<ErrorMessage name="vm-id-instance-task-list">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-state-task-list">{t('state-task')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <select id="vm-state-task-list" name="vm-state-task-list" value={tasksListState} onChange={changeTasksListState}>
                                                <option value="all">{t('all-tasks')}</option>
                                                <option value="running">{t('running-tasks')}</option>
                                                <option value="final">{t('final-tasks')}</option>
                                            </select>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-state-task-list')}
                                            {/*<ErrorMessage name="vm-state-task-list">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={tasksListState.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                        {
                            tasksListSubmit ? (
                                tasksListData.length > 0 ? (
                                    tasksListData.map(listData => {
                                        return (
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    id_instance
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    {listData.id_instance}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    id_object
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    {listData.id_object}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    id_owner
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    {listData.id_owner}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    purpose
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    {listData.purpose}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    result
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    {listData.result}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    state
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    {listData.state}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    taskid
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    {listData.taskid}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    tasktype
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                                    {listData.tasktype}
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                        )
                                    })
                                ) : (
                                    <>
                                        {t('no-data-available')}
                                    </>
                                )
                            ) : (
                                <></>
                            )
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
                        <div>
                            <Link to="/dashboard/admin" className="link-daas-design">
                                {/*<i className="fa-solid fa-arrow-left"></i>*/}
                                <div>
                                    {t('back-link')}
                                </div>
                            </Link>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </>
    );
}

export default SettingsTasks;

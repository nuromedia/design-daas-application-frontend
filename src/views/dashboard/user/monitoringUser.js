import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import axios from "axios";

import Header from "../../../components/header";

import {
    DEVELOPMENT,
    TEST,
    LIVE,
    USERNAME,
    PASSWORD,
    DEVELOPMENT_INTERN,
    TEST_INTERN,
    LIVE_INTERN,
    URL_SYSTEM
} from "../../../constants/constants";

function MonitoringUser() {
    const [allMonitoring, setAllMonitoring] = useState({});
    const [filesMonitoring, setFilesMonitoring] = useState([]);
    const [tasksMonitoring, setTasksMonitoring] = useState([]);
    const [appsMonitoring, setAppsMonitoring] = useState([]);
    const [socketsMonitoring, setSocketsMonitoring] = useState({});
    const [hostsMonitoring, setHostsMonitoring] = useState({});
    const [objectsMonitoring, setObjectsMonitoring] = useState({});
    const [utilizationsMonitoring, setUtilizationsMonitoring] = useState({});
    const [limitationsMonitoring, setLimitationsMonitoring] = useState({});
    const [allMonitoringData, setAllMonitoringData] = useState(0);
    const [requestAlert, setRequestAlert] = useState(false);
    const [requestAlertMessage, setRequestAlertMessage] = useState(false);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info', {}, {
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
                    /*setRequestAlert(true);
                    setRequestAlertMessage(true);*/
                    setAllMonitoring(response.data.response_data);

                    /*setTimeout(() => {
                      setRequestAlert(false);
                      setRequestAlertMessage(false);
                    }, 2000);*/
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    /*setRequestAlert(true);
                    setRequestAlertMessage(false);*/
                    setAllMonitoring([]);

                    /*setTimeout(() => {
                      setRequestAlert(false);
                      setRequestAlertMessage(false);
                    }, 2000);*/
                }
            })
            .catch(e => {
                console.log(e)
                /*setRequestAlert(true);
                setRequestAlertMessage(false);*/
                setAllMonitoring([]);

                /*setTimeout(() => {
                  setRequestAlert(false);
                  setRequestAlertMessage(false);
                }, 2000);*/
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_files', {}, {
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
                    setFilesMonitoring(response.data.response_data.all);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setFilesMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setFilesMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_tasks', {}, {
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
                    setTasksMonitoring(response.data.response_data.all);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setTasksMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setTasksMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_apps', {}, {
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
                    setAppsMonitoring(response.data.response_data.app_list);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setAppsMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setAppsMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_websockets', {}, {
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
                    setSocketsMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setSocketsMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setSocketsMonitoring({});
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_host', {}, {
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
                    setHostsMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setHostsMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setHostsMonitoring({});
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_objects', {}, {
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
                    setObjectsMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setObjectsMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setObjectsMonitoring({});
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_utilization', {}, {
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
                    setUtilizationsMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setUtilizationsMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setUtilizationsMonitoring({});
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_limits', {}, {
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
                    setLimitationsMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setLimitationsMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setLimitationsMonitoring({});
            });
    }, [])

    const refreshData = (event) => {
        event.preventDefault()

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_files', {}, {
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
                    setFilesMonitoring(response.data.response_data.all);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setFilesMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setFilesMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_tasks', {}, {
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
                    setTasksMonitoring(response.data.response_data.all);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setTasksMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setTasksMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_apps', {}, {
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
                    setAppsMonitoring(response.data.response_data.app_list);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setAppsMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setAppsMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_websockets', {}, {
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
                    setSocketsMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setSocketsMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setSocketsMonitoring({});
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_host', {}, {
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
                    setHostsMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setHostsMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setHostsMonitoring({});
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_objects', {}, {
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
                    setObjectsMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setObjectsMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setObjectsMonitoring({});
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_utilization', {}, {
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
                    setUtilizationsMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setUtilizationsMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setUtilizationsMonitoring({});
            });

        axios.post(DEVELOPMENT + '/monitoring/get_monitor_info_limits', {}, {
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
                    setLimitationsMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setLimitationsMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setLimitationsMonitoring({});
            });
    }

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="monitoring">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <div>
                            <h2>
                                {t('monitoring-overview')}
                            </h2>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                        <div>
                            {t('count-total') + ' ' + utilizationsMonitoring.objects}
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                        <div>
                            {t('count-tasks') + ' ' + tasksMonitoring.length}
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                        <div>
                            {t('count-files') + ' ' + filesMonitoring.length}
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                        <div>
                            {t('count-apps') + ' ' + appsMonitoring.length}
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Tabs defaultActiveKey="complete-monitoring" id="all-monitoring-types">
                    <ReactBootstrap.Tab eventKey="complete-monitoring" title={t('complete-monitoring')}>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    {t('task-monitoring')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            tasksMonitoring.length > 0 ? (
                                tasksMonitoring.map(taskData => {
                                    return (
                                        <ReactBootstrap.Accordion>
                                            <ReactBootstrap.Accordion.Item eventKey={taskData.id_task}>
                                                <ReactBootstrap.Accordion.Header>{taskData.id_task}</ReactBootstrap.Accordion.Header>
                                                <ReactBootstrap.Accordion.Body>
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_instance
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.id_instance}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_object
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.id_object}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_owner
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.id_owner}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_task
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.id_task}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            result
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left text-path-break">
                                                            {JSON.stringify(taskData.result)}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            task_purpose
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.task_purpose}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            task_state
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.task_state}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            task_type
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.task_type}
                                                        </ReactBootstrap.Col>
                                                    </ReactBootstrap.Row>
                                                </ReactBootstrap.Accordion.Body>
                                            </ReactBootstrap.Accordion.Item>
                                        </ReactBootstrap.Accordion>
                                    )
                                })
                            ) : (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                        <>
                                            {t('no-data-available')}
                                        </>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3 className="text-normal">
                                    {t('file-monitoring')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            filesMonitoring.length > 0 ? (
                                filesMonitoring.map(fileData => {
                                    return (
                                        <ReactBootstrap.Accordion>
                                            <ReactBootstrap.Accordion.Item eventKey={fileData.id}>
                                                <ReactBootstrap.Accordion.Header>{fileData.id}</ReactBootstrap.Accordion.Header>
                                                <ReactBootstrap.Accordion.Body>
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            created_at
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.created_at}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            filesize
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.filesize}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.id}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_owner
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.id_owner}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            localpath
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left text-path-break">
                                                            {fileData.localpath}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            name
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.name}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            os_type
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.os_type}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            remotepath
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.remotepath}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            version
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.version}
                                                        </ReactBootstrap.Col>
                                                    </ReactBootstrap.Row>
                                                </ReactBootstrap.Accordion.Body>
                                            </ReactBootstrap.Accordion.Item>
                                        </ReactBootstrap.Accordion>
                                    )
                                })
                            ) : (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                        <>
                                            {t('no-data-available')}
                                        </>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3 className="text-normal">
                                    {t('app-monitoring')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            appsMonitoring.length > 0 ? (
                                appsMonitoring.map(appData => {
                                    return (
                                        <ReactBootstrap.Accordion>
                                            <ReactBootstrap.Accordion.Item eventKey={appData.id}>
                                                <ReactBootstrap.Accordion.Header>{appData.id}</ReactBootstrap.Accordion.Header>
                                                <ReactBootstrap.Accordion.Body>
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            created_at
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.created_at}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.id}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_file
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.id_file}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_owner
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.id_owner}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_template
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.id_template}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            installer
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left text-path-break">
                                                            {appData.installer}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            installer_args
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.installer_args}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            installer_type
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.installer_type}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            name
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.name}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            os_type
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.os_type}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            target
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.target}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            target_args
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.target_args}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            version
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.version}
                                                        </ReactBootstrap.Col>
                                                    </ReactBootstrap.Row>
                                                </ReactBootstrap.Accordion.Body>
                                            </ReactBootstrap.Accordion.Item>
                                        </ReactBootstrap.Accordion>
                                    )
                                })
                            ) : (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                        <>
                                            {t('no-data-available')}
                                        </>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    {t('socket-monitoring')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    {t('active-websockets')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                active_websockets
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                <div>
                                    {JSON.stringify(socketsMonitoring.active_websockets)}
                                </div>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                className="text-left text-normal">
                                <h3>
                                    {t('closed-websockets')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                closed_websockets
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                <div>
                                    {JSON.stringify(socketsMonitoring.closed_websockets)}
                                </div>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    {t('host-monitoring')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_cpus
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_cpus}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_disk_ceph
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_disk_ceph}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_disk_images
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_disk_images}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_disk_iso
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_disk_iso}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_disk_local
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_disk_local}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_memory
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_memory}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_cpus
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_cpus}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_disk_ceph
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_disk_ceph}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_disk_images
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_disk_images}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_disk_iso
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_disk_iso}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_disk_local
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_disk_local}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_memory
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_memory}
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    {t('object-monitoring')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    both_usage_offline
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.amount !== undefined ? objectsMonitoring.both_usage_offline.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.cpus !== undefined ? objectsMonitoring.both_usage_offline.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.disk_in !== undefined ? objectsMonitoring.both_usage_offline.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.disk_out !== undefined ? objectsMonitoring.both_usage_offline.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.disk_size !== undefined ? objectsMonitoring.both_usage_offline.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.mem_max !== undefined ? objectsMonitoring.both_usage_offline.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.mem_use !== undefined ? objectsMonitoring.both_usage_offline.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.net_in !== undefined ? objectsMonitoring.both_usage_offline.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.net_out !== undefined ? objectsMonitoring.both_usage_offline.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    both_usage_online
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.amount !== undefined ? objectsMonitoring.both_usage_online.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.cpus !== undefined ? objectsMonitoring.both_usage_online.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.disk_in !== undefined ? objectsMonitoring.both_usage_online.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.disk_out !== undefined ? objectsMonitoring.both_usage_online.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.disk_size !== undefined ? objectsMonitoring.both_usage_online.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.mem_max !== undefined ? objectsMonitoring.both_usage_online.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.mem_use !== undefined ? objectsMonitoring.both_usage_online.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.net_in !== undefined ? objectsMonitoring.both_usage_online.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.net_out !== undefined ? objectsMonitoring.both_usage_online.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    both_usage_total
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.amount !== undefined ? objectsMonitoring.both_usage_total.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.cpus !== undefined ? objectsMonitoring.both_usage_total.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.disk_in !== undefined ? objectsMonitoring.both_usage_total.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.disk_out !== undefined ? objectsMonitoring.both_usage_total.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.disk_size !== undefined ? objectsMonitoring.both_usage_total.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.mem_max !== undefined ? objectsMonitoring.both_usage_total.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.mem_use !== undefined ? objectsMonitoring.both_usage_total.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.net_in !== undefined ? objectsMonitoring.both_usage_total.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.net_out !== undefined ? objectsMonitoring.both_usage_total.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    container_usage_offline
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.amount !== undefined ? objectsMonitoring.container_usage_offline.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.cpus !== undefined ? objectsMonitoring.container_usage_offline.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.disk_in !== undefined ? objectsMonitoring.container_usage_offline.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.disk_out !== undefined ? objectsMonitoring.container_usage_offline.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.disk_size !== undefined ? objectsMonitoring.container_usage_offline.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.mem_max !== undefined ? objectsMonitoring.container_usage_offline.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.mem_use !== undefined ? objectsMonitoring.container_usage_offline.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.net_in !== undefined ? objectsMonitoring.container_usage_offline.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.net_out !== undefined ? objectsMonitoring.container_usage_offline.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    container_usage_online
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.amount !== undefined ? objectsMonitoring.container_usage_online.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.cpus !== undefined ? objectsMonitoring.container_usage_online.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.disk_in !== undefined ? objectsMonitoring.container_usage_online.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.disk_out !== undefined ? objectsMonitoring.container_usage_online.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.disk_size !== undefined ? objectsMonitoring.container_usage_online.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.mem_max !== undefined ? objectsMonitoring.container_usage_online.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.mem_use !== undefined ? objectsMonitoring.container_usage_online.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.net_in !== undefined ? objectsMonitoring.container_usage_online.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.net_out !== undefined ? objectsMonitoring.container_usage_online.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    container_usage_total
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.amount !== undefined ? objectsMonitoring.container_usage_total.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.cpus !== undefined ? objectsMonitoring.container_usage_total.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.disk_in !== undefined ? objectsMonitoring.container_usage_total.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.disk_out !== undefined ? objectsMonitoring.container_usage_total.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.disk_size !== undefined ? objectsMonitoring.container_usage_total.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.mem_max !== undefined ? objectsMonitoring.container_usage_total.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.mem_use !== undefined ? objectsMonitoring.container_usage_total.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.net_in !== undefined ? objectsMonitoring.container_usage_total.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.net_out !== undefined ? objectsMonitoring.container_usage_total.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    vms_usage_offline
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.amount !== undefined ? objectsMonitoring.vms_usage_offline.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.cpus !== undefined ? objectsMonitoring.vms_usage_offline.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.disk_in !== undefined ? objectsMonitoring.vms_usage_offline.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.disk_out !== undefined ? objectsMonitoring.vms_usage_offline.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.disk_size !== undefined ? objectsMonitoring.vms_usage_offline.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.mem_max !== undefined ? objectsMonitoring.vms_usage_offline.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.mem_use !== undefined ? objectsMonitoring.vms_usage_offline.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.net_in !== undefined ? objectsMonitoring.vms_usage_offline.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.net_out !== undefined ? objectsMonitoring.vms_usage_offline.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    vms_usage_online
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.amount !== undefined ? objectsMonitoring.vms_usage_online.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.cpus !== undefined ? objectsMonitoring.vms_usage_online.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.disk_in !== undefined ? objectsMonitoring.vms_usage_online.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.disk_out !== undefined ? objectsMonitoring.vms_usage_online.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.disk_size !== undefined ? objectsMonitoring.vms_usage_online.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.mem_max !== undefined ? objectsMonitoring.vms_usage_online.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.mem_use !== undefined ? objectsMonitoring.vms_usage_online.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.net_in !== undefined ? objectsMonitoring.vms_usage_online.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.net_out !== undefined ? objectsMonitoring.vms_usage_online.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    vms_usage_total
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.amount !== undefined ? objectsMonitoring.vms_usage_total.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.cpus !== undefined ? objectsMonitoring.vms_usage_total.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.disk_in !== undefined ? objectsMonitoring.vms_usage_total.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.disk_out !== undefined ? objectsMonitoring.vms_usage_total.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.disk_size !== undefined ? objectsMonitoring.vms_usage_total.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.mem_max !== undefined ? objectsMonitoring.vms_usage_total.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.mem_use !== undefined ? objectsMonitoring.vms_usage_total.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.net_in !== undefined ? objectsMonitoring.vms_usage_total.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.net_out !== undefined ? objectsMonitoring.vms_usage_total.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    {t('utilization-monitoring')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                instance_images
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.instance_images}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                instance_vms
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.instance_vms}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                instances
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.instances}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                max_cpus
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.max_cpus}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                max_diskspace
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.max_diskspace}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                max_memory
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.max_memory}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                object_images
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.object_images}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                object_vms
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.object_vms}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                objects
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.objects}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                utilized_cpus
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.utilized_cpus}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                utilized_diskspace
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.utilized_diskspace}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                utilized_memory
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.utilized_memory}
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    {t('limit-monitoring')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    limits
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(limitationsMonitoring).length > 0 ? limitationsMonitoring.limits.map(limitData => {
                                return (
                                    <>
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                container_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.container_max !== undefined ? limitData.container_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpu_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.cpu_max !== undefined ? limitData.cpu_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                dsk_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.dsk_max !== undefined ? limitData.dsk_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                id_owner
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.id_owner !== undefined ? limitData.id_owner : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.mem_max !== undefined ? limitData.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                obj_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.obj_max !== undefined ? limitData.obj_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                vm_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.vm_max !== undefined ? limitData.vm_max : ""}
                                            </ReactBootstrap.Col>
                                        </ReactBootstrap.Row>
                                    </>
                                )
                            }) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="task-monitoring" title={t('task-monitoring')}>
                        {
                            tasksMonitoring.length > 0 ? (
                                tasksMonitoring.map(taskData => {
                                    return (
                                        <ReactBootstrap.Accordion>
                                            <ReactBootstrap.Accordion.Item eventKey={taskData.id_task}>
                                                <ReactBootstrap.Accordion.Header>{taskData.id_task}</ReactBootstrap.Accordion.Header>
                                                <ReactBootstrap.Accordion.Body>
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_instance
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.id_instance}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_object
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.id_object}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_owner
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.id_owner}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_task
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.id_task}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            result
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left text-path-break">
                                                            {JSON.stringify(taskData.result)}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            task_purpose
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.task_purpose}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            task_state
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.task_state}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            task_type
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {taskData.task_type}
                                                        </ReactBootstrap.Col>
                                                    </ReactBootstrap.Row>
                                                </ReactBootstrap.Accordion.Body>
                                            </ReactBootstrap.Accordion.Item>
                                        </ReactBootstrap.Accordion>
                                    )
                                })
                            ) : (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                        <>
                                            {t('no-data-available')}
                                        </>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            )
                        }
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="file-monitoring" title={t('file-monitoring')}>
                        {
                            filesMonitoring.length > 0 ? (
                                filesMonitoring.map(fileData => {
                                    return (
                                        <ReactBootstrap.Accordion>
                                            <ReactBootstrap.Accordion.Item eventKey={fileData.id}>
                                                <ReactBootstrap.Accordion.Header>{fileData.id}</ReactBootstrap.Accordion.Header>
                                                <ReactBootstrap.Accordion.Body>
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            created_at
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.created_at}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            filesize
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.filesize}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.id}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_owner
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.id_owner}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            localpath
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left text-path-break">
                                                            {fileData.localpath}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            name
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.name}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            os_type
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.os_type}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            remotepath
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.remotepath}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            version
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {fileData.version}
                                                        </ReactBootstrap.Col>
                                                    </ReactBootstrap.Row>
                                                </ReactBootstrap.Accordion.Body>
                                            </ReactBootstrap.Accordion.Item>
                                        </ReactBootstrap.Accordion>
                                    )
                                })
                            ) : (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                        <>
                                            {t('no-data-available')}
                                        </>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            )
                        }
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="app-monitoring" title={t('app-monitoring')}>
                        {
                            appsMonitoring.length > 0 ? (
                                appsMonitoring.map(appData => {
                                    return (
                                        <ReactBootstrap.Accordion>
                                            <ReactBootstrap.Accordion.Item eventKey={appData.id}>
                                                <ReactBootstrap.Accordion.Header>{appData.id}</ReactBootstrap.Accordion.Header>
                                                <ReactBootstrap.Accordion.Body>
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            created_at
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.created_at}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.id}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_file
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.id_file}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_owner
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.id_owner}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_template
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.id_template}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            installer
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left text-path-break">
                                                            {appData.installer}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            installer_args
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.installer_args}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            installer_type
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.installer_type}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            name
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.name}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            os_type
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.os_type}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            target
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.target}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            target_args
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.target_args}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            version
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {appData.version}
                                                        </ReactBootstrap.Col>
                                                    </ReactBootstrap.Row>
                                                </ReactBootstrap.Accordion.Body>
                                            </ReactBootstrap.Accordion.Item>
                                        </ReactBootstrap.Accordion>
                                    )
                                })
                            ) : (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-left">
                                        <>
                                            {t('no-data-available')}
                                        </>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            )
                        }
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="socket-monitoring" title={t('socket-monitoring')}>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    {t('active-websockets')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                active_websockets
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                <div>
                                    {JSON.stringify(socketsMonitoring.active_websockets)}
                                </div>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                className="text-left text-normal">
                                <h3>
                                    {t('closed-websockets')}
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                closed_websockets
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                <div>
                                    {JSON.stringify(socketsMonitoring.closed_websockets)}
                                </div>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="object-monitoring" title={t('object-monitoring')}>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    both_usage_offline
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.amount !== undefined ? objectsMonitoring.both_usage_offline.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.cpus !== undefined ? objectsMonitoring.both_usage_offline.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.disk_in !== undefined ? objectsMonitoring.both_usage_offline.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.disk_out !== undefined ? objectsMonitoring.both_usage_offline.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.disk_size !== undefined ? objectsMonitoring.both_usage_offline.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.mem_max !== undefined ? objectsMonitoring.both_usage_offline.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.mem_use !== undefined ? objectsMonitoring.both_usage_offline.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.net_in !== undefined ? objectsMonitoring.both_usage_offline.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_offline.net_out !== undefined ? objectsMonitoring.both_usage_offline.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    both_usage_online
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.amount !== undefined ? objectsMonitoring.both_usage_online.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.cpus !== undefined ? objectsMonitoring.both_usage_online.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.disk_in !== undefined ? objectsMonitoring.both_usage_online.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.disk_out !== undefined ? objectsMonitoring.both_usage_online.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.disk_size !== undefined ? objectsMonitoring.both_usage_online.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.mem_max !== undefined ? objectsMonitoring.both_usage_online.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.mem_use !== undefined ? objectsMonitoring.both_usage_online.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.net_in !== undefined ? objectsMonitoring.both_usage_online.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_online.net_out !== undefined ? objectsMonitoring.both_usage_online.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    both_usage_total
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.amount !== undefined ? objectsMonitoring.both_usage_total.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.cpus !== undefined ? objectsMonitoring.both_usage_total.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.disk_in !== undefined ? objectsMonitoring.both_usage_total.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.disk_out !== undefined ? objectsMonitoring.both_usage_total.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.disk_size !== undefined ? objectsMonitoring.both_usage_total.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.mem_max !== undefined ? objectsMonitoring.both_usage_total.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.mem_use !== undefined ? objectsMonitoring.both_usage_total.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.net_in !== undefined ? objectsMonitoring.both_usage_total.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.both_usage_total.net_out !== undefined ? objectsMonitoring.both_usage_total.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    container_usage_offline
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.amount !== undefined ? objectsMonitoring.container_usage_offline.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.cpus !== undefined ? objectsMonitoring.container_usage_offline.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.disk_in !== undefined ? objectsMonitoring.container_usage_offline.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.disk_out !== undefined ? objectsMonitoring.container_usage_offline.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.disk_size !== undefined ? objectsMonitoring.container_usage_offline.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.mem_max !== undefined ? objectsMonitoring.container_usage_offline.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.mem_use !== undefined ? objectsMonitoring.container_usage_offline.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.net_in !== undefined ? objectsMonitoring.container_usage_offline.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_offline.net_out !== undefined ? objectsMonitoring.container_usage_offline.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    container_usage_online
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.amount !== undefined ? objectsMonitoring.container_usage_online.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.cpus !== undefined ? objectsMonitoring.container_usage_online.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.disk_in !== undefined ? objectsMonitoring.container_usage_online.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.disk_out !== undefined ? objectsMonitoring.container_usage_online.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.disk_size !== undefined ? objectsMonitoring.container_usage_online.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.mem_max !== undefined ? objectsMonitoring.container_usage_online.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.mem_use !== undefined ? objectsMonitoring.container_usage_online.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.net_in !== undefined ? objectsMonitoring.container_usage_online.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_online.net_out !== undefined ? objectsMonitoring.container_usage_online.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    container_usage_total
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.amount !== undefined ? objectsMonitoring.container_usage_total.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.cpus !== undefined ? objectsMonitoring.container_usage_total.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.disk_in !== undefined ? objectsMonitoring.container_usage_total.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.disk_out !== undefined ? objectsMonitoring.container_usage_total.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.disk_size !== undefined ? objectsMonitoring.container_usage_total.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.mem_max !== undefined ? objectsMonitoring.container_usage_total.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.mem_use !== undefined ? objectsMonitoring.container_usage_total.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.net_in !== undefined ? objectsMonitoring.container_usage_total.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.container_usage_total.net_out !== undefined ? objectsMonitoring.container_usage_total.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                <h3>
                                    vms_usage_offline
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.amount !== undefined ? objectsMonitoring.vms_usage_offline.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.cpus !== undefined ? objectsMonitoring.vms_usage_offline.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.disk_in !== undefined ? objectsMonitoring.vms_usage_offline.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.disk_out !== undefined ? objectsMonitoring.vms_usage_offline.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.disk_size !== undefined ? objectsMonitoring.vms_usage_offline.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.mem_max !== undefined ? objectsMonitoring.vms_usage_offline.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.mem_use !== undefined ? objectsMonitoring.vms_usage_offline.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.net_in !== undefined ? objectsMonitoring.vms_usage_offline.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_offline.net_out !== undefined ? objectsMonitoring.vms_usage_offline.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    vms_usage_online
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.amount !== undefined ? objectsMonitoring.vms_usage_online.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.cpus !== undefined ? objectsMonitoring.vms_usage_online.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.disk_in !== undefined ? objectsMonitoring.vms_usage_online.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.disk_out !== undefined ? objectsMonitoring.vms_usage_online.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.disk_size !== undefined ? objectsMonitoring.vms_usage_online.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.mem_max !== undefined ? objectsMonitoring.vms_usage_online.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.mem_use !== undefined ? objectsMonitoring.vms_usage_online.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.net_in !== undefined ? objectsMonitoring.vms_usage_online.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_online.net_out !== undefined ? objectsMonitoring.vms_usage_online.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    vms_usage_total
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            Object.keys(objectsMonitoring).length > 0 ? (
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        amount
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.amount !== undefined ? objectsMonitoring.vms_usage_total.amount : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.cpus !== undefined ? objectsMonitoring.vms_usage_total.cpus : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.disk_in !== undefined ? objectsMonitoring.vms_usage_total.disk_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.disk_out !== undefined ? objectsMonitoring.vms_usage_total.disk_out : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        disk_size
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.disk_size !== undefined ? objectsMonitoring.vms_usage_total.disk_size : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_max
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.mem_max !== undefined ? objectsMonitoring.vms_usage_total.mem_max : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        mem_use
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.mem_use !== undefined ? objectsMonitoring.vms_usage_total.mem_use : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_in
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.net_in !== undefined ? objectsMonitoring.vms_usage_total.net_in : ""}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        net_out
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {objectsMonitoring.vms_usage_total.net_out !== undefined ? objectsMonitoring.vms_usage_total.net_out : ""}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            ) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="utilization-monitoring" title={t('utilization-monitoring')}>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                instance_images
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.instance_images}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                instance_vms
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.instance_vms}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                instances
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.instances}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                max_cpus
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.max_cpus}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                max_diskspace
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.max_diskspace}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                max_memory
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.max_memory}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                object_images
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.object_images}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                object_vms
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.object_vms}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                objects
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.objects}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                utilized_cpus
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.utilized_cpus}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                utilized_diskspace
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.utilized_diskspace}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                utilized_memory
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {utilizationsMonitoring.utilized_memory}
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="limit-monitoring" title={t('limit-monitoring')}>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left text-normal">
                                <h3>
                                    limits
                                </h3>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {
                            console.log(Object.keys(limitationsMonitoring).length)
                        }
                        {
                            Object.keys(limitationsMonitoring).length > 0 ? limitationsMonitoring.limits.map(limitData => {
                                return (
                                    <>
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                container_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.container_max !== undefined ? limitData.container_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpu_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.cpu_max !== undefined ? limitData.cpu_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                dsk_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.dsk_max !== undefined ? limitData.dsk_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                id_owner
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.id_owner !== undefined ? limitData.id_owner : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.mem_max !== undefined ? limitData.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                obj_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.obj_max !== undefined ? limitData.obj_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                vm_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitData.vm_max !== undefined ? limitData.vm_max : ""}
                                            </ReactBootstrap.Col>
                                        </ReactBootstrap.Row>
                                    </>
                                )
                            }) : (
                                <>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left">
                                        {t('no-data-available')}
                                    </ReactBootstrap.Col>
                                </>
                            )
                        }
                    </ReactBootstrap.Tab>
                    {/*<ReactBootstrap.Tab eventKey="host-monitoring" title={t('host-monitoring')}>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_cpus
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_cpus}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_disk_ceph
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_disk_ceph}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_disk_images
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_disk_images}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_disk_iso
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_disk_iso}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_disk_local
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_disk_local}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                available_memory
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.available_memory}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_cpus
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_cpus}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_disk_ceph
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_disk_ceph}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_disk_images
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_disk_images}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_disk_iso
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_disk_iso}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_disk_local
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_disk_local}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                inuse_memory
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                className="text-left">
                                {hostsMonitoring.inuse_memory}
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Tab>*/}
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
                            <Link to="/dashboard" className="link-daas-design">
                                {/*<i className="fa-solid fa-arrow-left"></i>*/}
                                <div>
                                    {t('back-link')}
                                </div>
                            </Link>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <div className="bottom-footer-fix" onClick={refreshData}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </div>
            </ReactBootstrap.Container>
        </>
    );
}

export default MonitoringUser;

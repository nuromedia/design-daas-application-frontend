import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import axios from "axios";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useMediaQuery} from "react-responsive";

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

function Monitoring() {
    const [allMonitoring, setAllMonitoring] = useState({});
    const [filesMonitoring, setFilesMonitoring] = useState([]);
    const [tasksMonitoring, setTasksMonitoring] = useState([]);
    const [appsMonitoring, setAppsMonitoring] = useState([]);
    const [socketsMonitoring, setSocketsMonitoring] = useState({});
    const [hostsMonitoring, setHostsMonitoring] = useState({});
    const [objectsMonitoring, setObjectsMonitoring] = useState({});
    const [utilizationsMonitoring, setUtilizationsMonitoring] = useState({});
    const [limitationsMonitoring, setLimitationsMonitoring] = useState({});
    const [allAdminMonitoring, setAllAdminMonitoring] = useState({});
    const [filesAdminMonitoring, setFilesAdminMonitoring] = useState([]);
    const [tasksAdminMonitoring, setTasksAdminMonitoring] = useState([]);
    const [appsAdminMonitoring, setAppsAdminMonitoring] = useState([]);
    const [socketsAdminMonitoring, setSocketsAdminMonitoring] = useState({});
    const [hostsAdminMonitoring, setHostsAdminMonitoring] = useState({});
    const [objectsAdminMonitoring, setObjectsAdminMonitoring] = useState({});
    const [utilizationsAdminMonitoring, setUtilizationsAdminMonitoring] = useState({});
    const [limitationsAdminMonitoring, setLimitationsAdminMonitoring] = useState({});
    const [allSearchMonitoring, setAllSearchMonitoring] = useState({});
    const [filesSearchMonitoring, setFilesSearchMonitoring] = useState([]);
    const [tasksSearchMonitoring, setTasksSearchMonitoring] = useState([]);
    const [appsSearchMonitoring, setAppsSearchMonitoring] = useState([]);
    const [socketsSearchMonitoring, setSocketsSearchMonitoring] = useState({});
    const [hostsSearchMonitoring, setHostsSearchMonitoring] = useState({});
    const [objectsSearchMonitoring, setObjectsSearchMonitoring] = useState({});
    const [utilizationsSearchMonitoring, setUtilizationsSearchMonitoring] = useState({});
    const [limitationsSearchMonitoring, setLimitationsSearchMonitoring] = useState({});
    const [allSearchMonitoringSubmit, setAllSearchMonitoringSubmit] = useState(false);
    const [filesSearchMonitoringSubmit, setFilesSearchMonitoringSubmit] = useState(false);
    const [tasksSearchMonitoringSubmit, setTasksSearchMonitoringSubmit] = useState(false);
    const [appsSearchMonitoringSubmit, setAppsSearchMonitoringSubmit] = useState(false);
    const [socketsSearchMonitoringSubmit, setSocketsSearchMonitoringSubmit] = useState(false);
    const [hostsSearchMonitoringSubmit, setHostsSearchMonitoringSubmit] = useState(false);
    const [objectsSearchMonitoringSubmit, setObjectsSearchMonitoringSubmit] = useState(false);
    const [utilizationsSearchMonitoringSubmit, setUtilizationsSearchMonitoringSubmit] = useState(false);
    const [limitationsSearchMonitoringSubmit, setLimitationsSearchMonitoringSubmit] = useState(false);
    const [completeSearchMonitoringSubmit, setCompleteSearchMonitoringSubmit] = useState(false);
    const [allSearchMonitoringID, setAllSearchMonitoringID] = useState("");
    const [filesSearchMonitoringID, setFilesSearchMonitoringID] = useState("");
    const [tasksSearchMonitoringID, setTasksSearchMonitoringID] = useState("");
    const [appsSearchMonitoringID, setAppsSearchMonitoringID] = useState("");
    const [socketsSearchMonitoringID, setSocketsSearchMonitoringID] = useState("");
    const [hostsSearchMonitoringID, setHostsSearchMonitoringID] = useState("");
    const [objectsSearchMonitoringID, setObjectsSearchMonitoringID] = useState("");
    const [utilizationsSearchMonitoringID, setUtilizationsSearchMonitoringID] = useState("");
    const [limitationsSearchMonitoringID, setLimitationsSearchMonitoringID] = useState("");
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

    useEffect(() => {
        axios.post(DEVELOPMENT + '/admin/get_monitor_info', {
            id_owner: "",
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
                    /*setRequestAlert(true);
                    setRequestAlertMessage(true);*/
                    setAllAdminMonitoring(response.data.response_data);

                    /*setTimeout(() => {
                      setRequestAlert(false);
                      setRequestAlertMessage(false);
                    }, 2000);*/
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    /*setRequestAlert(true);
                    setRequestAlertMessage(false);*/
                    setAllAdminMonitoring([]);

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
                setAllAdminMonitoring([]);

                /*setTimeout(() => {
                  setRequestAlert(false);
                  setRequestAlertMessage(false);
                }, 2000);*/
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_files', {
            id_owner: "",
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
                    setFilesAdminMonitoring(response.data.response_data.all);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setFilesAdminMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setFilesAdminMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_tasks', {
            id_owner: "",
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
                    setTasksAdminMonitoring(response.data.response_data.all);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setTasksAdminMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setTasksAdminMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_apps', {
            id_owner: "",
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
                    setAppsAdminMonitoring(response.data.response_data.app_list);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setAppsAdminMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setAppsAdminMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_websockets', {
            id_owner: "",
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
                    setSocketsAdminMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setSocketsAdminMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setSocketsAdminMonitoring({});
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_host', {
            id_owner: "",
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
                    setHostsAdminMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setHostsAdminMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setHostsAdminMonitoring({});
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_objects', {
            id_owner: "",
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
                    setObjectsAdminMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setObjectsAdminMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setObjectsAdminMonitoring({});
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_utilization', {
            id_owner: "",
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
                    setUtilizationsAdminMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setUtilizationsAdminMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setUtilizationsAdminMonitoring({});
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_limits', {
            id_owner: "",
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
                    setLimitationsAdminMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setLimitationsAdminMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setLimitationsAdminMonitoring({});
            });
    }, [])

    const getAllMonitorInfo = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/admin/get_monitor_info', {
            id_owner: allSearchMonitoringID,
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
                    setAllSearchMonitoring(response.data.response_data);
                    setAllSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setAllSearchMonitoring([]);
                    setAllSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setAllSearchMonitoring([]);
                setAllSearchMonitoringSubmit(false)
            });
    }

    const getFilesMonitorInfo = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_files', {
            id_owner: filesSearchMonitoringID,
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
                    setFilesSearchMonitoring(response.data.response_data.all);
                    setFilesSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setFilesSearchMonitoring([]);
                    setFilesSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setFilesSearchMonitoring([]);
                setFilesSearchMonitoringSubmit(false)
            });
    }

    const getTasksMonitorInfo = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_tasks', {
            id_owner: tasksSearchMonitoringID,
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
                    setTasksSearchMonitoring(response.data.response_data.all);
                    setTasksSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setTasksSearchMonitoring([]);
                    setTasksSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setTasksSearchMonitoring([]);
                setTasksSearchMonitoringSubmit(false)
            });
    }

    const getAppsMonitorInfo = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_apps', {
            id_owner: appsSearchMonitoringID,
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
                    setAppsSearchMonitoring(response.data.response_data.app_list);
                    setAppsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setAppsSearchMonitoring([]);
                    setAppsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setAppsSearchMonitoring([]);
                setAppsSearchMonitoringSubmit(false)
            });
    }

    const getSocketsMonitorInfo = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_websockets', {
            id_owner: socketsSearchMonitoringID,
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
                    setSocketsSearchMonitoring(response.data.response_data);
                    setSocketsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setSocketsSearchMonitoring({});
                    setSocketsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setSocketsSearchMonitoring({});
                setSocketsSearchMonitoringSubmit(false)
            });
    }

    const getHostsMonitorInfo = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_host', {}, {
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
                    setHostsSearchMonitoring(response.data.response_data);
                    setHostsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setHostsSearchMonitoring({});
                    setHostsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setHostsSearchMonitoring({});
                setHostsSearchMonitoringSubmit(false)
            });
    }

    const getObjectsMonitorInfo = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_objects', {
            id_owner: objectsSearchMonitoringID,
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
                    setObjectsSearchMonitoring(response.data.response_data);
                    setObjectsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setObjectsSearchMonitoring({});
                    setObjectsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setObjectsSearchMonitoring({});
                setObjectsSearchMonitoringSubmit(false)
            });
    }

    const getUtilizationMonitorInfo = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_utilization', {
            id_owner: utilizationsSearchMonitoringID,
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
                    setUtilizationsSearchMonitoring(response.data.response_data);
                    setUtilizationsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setUtilizationsSearchMonitoring({});
                    setUtilizationsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setUtilizationsSearchMonitoring({});
                setUtilizationsSearchMonitoringSubmit(false)
            });
    }

    const getLimitationMonitorInfo = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_limits', {
            id_owner: limitationsSearchMonitoringID,
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
                    setLimitationsSearchMonitoring(response.data.response_data);
                    setLimitationsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setLimitationsSearchMonitoring({});
                    setLimitationsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setLimitationsSearchMonitoring({});
                setLimitationsSearchMonitoringSubmit(false)
            });
    }

    const getAllMonitorInfoData = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/admin/get_monitor_info', {
            id_owner: allSearchMonitoringID,
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
                    setAllSearchMonitoring(response.data.response_data);
                    setAllSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setAllSearchMonitoring([]);
                    setAllSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setAllSearchMonitoring([]);
                setAllSearchMonitoringSubmit(false)
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_files', {
            id_owner: allSearchMonitoringID,
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
                    setFilesSearchMonitoring(response.data.response_data.all);
                    setFilesSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setFilesSearchMonitoring([]);
                    setFilesSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setFilesSearchMonitoring([]);
                setFilesSearchMonitoringSubmit(false)
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_tasks', {
            id_owner: allSearchMonitoringID,
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
                    setTasksSearchMonitoring(response.data.response_data.all);
                    setTasksSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setTasksSearchMonitoring([]);
                    setTasksSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setTasksSearchMonitoring([]);
                setTasksSearchMonitoringSubmit(false)
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_apps', {
            id_owner: allSearchMonitoringID,
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
                    setAppsSearchMonitoring(response.data.response_data.app_list);
                    setAppsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setAppsSearchMonitoring([]);
                    setAppsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setAppsSearchMonitoring([]);
                setAppsSearchMonitoringSubmit(false)
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_websockets', {
            id_owner: allSearchMonitoringID,
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
                    setSocketsSearchMonitoring(response.data.response_data);
                    setSocketsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setSocketsSearchMonitoring({});
                    setSocketsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setSocketsSearchMonitoring({});
                setSocketsSearchMonitoringSubmit(false)
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_host', {}, {
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
                    setHostsSearchMonitoring(response.data.response_data);
                    setHostsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setHostsSearchMonitoring({});
                    setHostsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setHostsSearchMonitoring({});
                setHostsSearchMonitoringSubmit(false)
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_objects', {
            id_owner: allSearchMonitoringID,
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
                    setObjectsSearchMonitoring(response.data.response_data);
                    setObjectsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setObjectsSearchMonitoring({});
                    setObjectsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setObjectsSearchMonitoring({});
                setObjectsSearchMonitoringSubmit(false)
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_utilization', {
            id_owner: allSearchMonitoringID,
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
                    setUtilizationsSearchMonitoring(response.data.response_data);
                    setUtilizationsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setUtilizationsSearchMonitoring({});
                    setUtilizationsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setUtilizationsSearchMonitoring({});
                setUtilizationsSearchMonitoringSubmit(false)
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_limits', {
            id_owner: allSearchMonitoringID,
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
                    setLimitationsSearchMonitoring(response.data.response_data);
                    setLimitationsSearchMonitoringSubmit(true)
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setLimitationsSearchMonitoring({});
                    setLimitationsSearchMonitoringSubmit(false)
                }
            })
            .catch(e => {
                console.log(e)
                setLimitationsSearchMonitoring({});
                setLimitationsSearchMonitoringSubmit(false)
            });

        setTimeout(() => {
            /*if (allSearchMonitoringSubmit && filesSearchMonitoringSubmit && tasksSearchMonitoringSubmit && appsSearchMonitoringSubmit && socketsSearchMonitoringSubmit && hostsSearchMonitoringSubmit && objectsSearchMonitoringSubmit && utilizationsSearchMonitoringSubmit && limitationsSearchMonitoringSubmit) {
                setCompleteSearchMonitoringSubmit(true)
            } else {
                setCompleteSearchMonitoringSubmit(false)
            }*/
            setCompleteSearchMonitoringSubmit(true)
        }, 10000);
    }

    const changeAllMonitorInfoID = event => {
        setAllSearchMonitoringID(event.target.value);
    };

    const changeFileMonitorInfoID = event => {
        setFilesSearchMonitoringID(event.target.value);
    };

    const changeTaskMonitorInfoID = event => {
        setTasksSearchMonitoringID(event.target.value);
    };

    const changeAppMonitorInfoID = event => {
        setAppsSearchMonitoringID(event.target.value);
    };

    const changeSocketMonitorInfoID = event => {
        setSocketsSearchMonitoringID(event.target.value);
    };

    const changeHostMonitorInfoID = event => {
        setHostsSearchMonitoringID(event.target.value);
    };

    const changeObjectMonitorInfoID = event => {
        setObjectsSearchMonitoringID(event.target.value);
    };

    const changeUtilizationMonitorInfoID = event => {
        setUtilizationsSearchMonitoringID(event.target.value);
    };

    const changeLimitationMonitorInfoID = event => {
        setLimitationsSearchMonitoringID(event.target.value);
    };

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

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_files', {
            id_owner: "",
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
                    setFilesAdminMonitoring(response.data.response_data.all);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setFilesAdminMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setFilesAdminMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_tasks', {
            id_owner: "",
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
                    setTasksAdminMonitoring(response.data.response_data.all);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setTasksAdminMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setTasksAdminMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_apps', {
            id_owner: "",
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
                    setAppsAdminMonitoring(response.data.response_data.app_list);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setAppsAdminMonitoring([]);
                }
            })
            .catch(e => {
                console.log(e)
                setAppsAdminMonitoring([]);
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_websockets', {
            id_owner: "",
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
                    setSocketsAdminMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setSocketsAdminMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setSocketsAdminMonitoring({});
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_host', {
            id_owner: "",
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
                    setHostsAdminMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setHostsAdminMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setHostsAdminMonitoring({});
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_objects', {
            id_owner: "",
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
                    setObjectsAdminMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setObjectsAdminMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setObjectsAdminMonitoring({});
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_utilization', {
            id_owner: "",
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
                    setUtilizationsAdminMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setUtilizationsAdminMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setUtilizationsAdminMonitoring({});
            });

        axios.post(DEVELOPMENT + '/admin/get_monitor_info_limits', {
            id_owner: "",
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
                    setLimitationsAdminMonitoring(response.data.response_data);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setLimitationsAdminMonitoring({});
                }
            })
            .catch(e => {
                console.log(e)
                setLimitationsAdminMonitoring({});
            });
    }

    const requestIDOwnerSchema = Yup.object().shape({
        owner_id: Yup.string()
            .required('Owner ID invalid'),
    });

    const requestNoIDOwnerSchema = Yup.object().shape({});

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
                <ReactBootstrap.Tabs defaultActiveKey="user-monitoring" id="all-monitoring-types">
                    <ReactBootstrap.Tab eventKey="user-monitoring" title={t('user')}>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                                <div>
                                    {t('count-total') + ' ' + (tasksMonitoring.length + filesMonitoring.length + appsMonitoring.length)}
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
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left text-normal">
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
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left text-normal">
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
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            fallback
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(limitationsMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                container_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.container_max !== undefined ? limitationsMonitoring.fallback.container_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpu_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.cpu_max !== undefined ? limitationsMonitoring.fallback.cpu_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                dsk_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.dsk_max !== undefined ? limitationsMonitoring.fallback.dsk_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                id_owner
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.id_owner !== undefined ? limitationsMonitoring.fallback.id_owner : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.mem_max !== undefined ? limitationsMonitoring.fallback.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                obj_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.obj_max !== undefined ? limitationsMonitoring.fallback.obj_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                vm_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.vm_max !== undefined ? limitationsMonitoring.fallback.vm_max : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            syslimit
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(limitationsMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                container_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.container_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpu_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.cpu_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                dsk_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.dsk_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                id_owner
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.id_owner}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.mem_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                obj_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.obj_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                vm_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.vm_max}
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
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
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
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
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
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
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
                            <ReactBootstrap.Tab eventKey="host-monitoring" title={t('host-monitoring')}>
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            fallback
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(limitationsMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                container_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.container_max !== undefined ? limitationsMonitoring.fallback.container_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpu_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.cpu_max !== undefined ? limitationsMonitoring.fallback.cpu_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                dsk_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.dsk_max !== undefined ? limitationsMonitoring.fallback.dsk_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                id_owner
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.id_owner !== undefined ? limitationsMonitoring.fallback.id_owner : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.mem_max !== undefined ? limitationsMonitoring.fallback.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                obj_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.obj_max !== undefined ? limitationsMonitoring.fallback.obj_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                vm_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.fallback.vm_max !== undefined ? limitationsMonitoring.fallback.vm_max : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            syslimit
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(limitationsMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                container_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.container_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpu_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.cpu_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                dsk_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.dsk_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                id_owner
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.id_owner}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.mem_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                obj_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.obj_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                vm_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsMonitoring.syslimit.vm_max}
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
                        </ReactBootstrap.Tabs>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="admin-monitoring" title={t('admin')}>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                                <div>
                                    {t('count-total') + ' ' + (tasksAdminMonitoring.length + filesAdminMonitoring.length + appsAdminMonitoring.length)}
                                </div>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                                <div>
                                    {t('count-tasks') + ' ' + tasksAdminMonitoring.length}
                                </div>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                                <div>
                                    {t('count-files') + ' ' + filesAdminMonitoring.length}
                                </div>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                                <div>
                                    {t('count-apps') + ' ' + appsAdminMonitoring.length}
                                </div>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Tabs defaultActiveKey="complete-admin-monitoring"
                                             id="all-monitoring-admin-types">
                            <ReactBootstrap.Tab eventKey="complete-admin-monitoring" title={t('complete-monitoring')}>
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
                                        <h3>
                                            {t('task-monitoring')}
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    tasksAdminMonitoring.length > 0 ? (
                                        tasksAdminMonitoring.map(taskData => {
                                            return (
                                                <ReactBootstrap.Accordion>
                                                    <ReactBootstrap.Accordion.Item eventKey={taskData.id_task}>
                                                        <ReactBootstrap.Accordion.Header>{taskData.id_task}</ReactBootstrap.Accordion.Header>
                                                        <ReactBootstrap.Accordion.Body>
                                                            <ReactBootstrap.Row>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    created_at
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.created_at}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    filesize
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.filesize}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    id
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.id}
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
                                                                    localpath
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left text-path-break">
                                                                    {taskData.localpath}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    name
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.name}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    os_type
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.os_type}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    remotepath
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.remotepath}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    version
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.version}
                                                                </ReactBootstrap.Col>
                                                            </ReactBootstrap.Row>
                                                        </ReactBootstrap.Accordion.Body>
                                                    </ReactBootstrap.Accordion.Item>
                                                </ReactBootstrap.Accordion>
                                            )
                                        })
                                    ) : (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
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
                                    filesAdminMonitoring.length > 0 ? (
                                        filesAdminMonitoring.map(fileData => {
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
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
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
                                    appsAdminMonitoring.length > 0 ? (
                                        appsAdminMonitoring.map(appData => {
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
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
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
                                        <pre>
                                            {JSON.stringify(socketsAdminMonitoring.active_websockets, null, 3)}
                                        </pre>
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
                                        <pre>
                                            {JSON.stringify(socketsAdminMonitoring.closed_websockets, null, 3)}
                                        </pre>
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
                                        {hostsAdminMonitoring.available_cpus}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_disk_ceph
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_disk_ceph}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_disk_images
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_disk_images}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_disk_iso
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_disk_iso}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_disk_local
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_disk_local}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_memory
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_memory}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_cpus}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_disk_ceph
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_disk_ceph}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_disk_images
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_disk_images}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_disk_iso
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_disk_iso}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_disk_local
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_disk_local}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_memory
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_memory}
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
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.amount !== undefined ? objectsAdminMonitoring.both_usage_offline.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.cpus !== undefined ? objectsAdminMonitoring.both_usage_offline.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.disk_in !== undefined ? objectsAdminMonitoring.both_usage_offline.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.disk_out !== undefined ? objectsAdminMonitoring.both_usage_offline.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.disk_size !== undefined ? objectsAdminMonitoring.both_usage_offline.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.mem_max !== undefined ? objectsAdminMonitoring.both_usage_offline.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.mem_use !== undefined ? objectsAdminMonitoring.both_usage_offline.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.net_in !== undefined ? objectsAdminMonitoring.both_usage_offline.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.net_out !== undefined ? objectsAdminMonitoring.both_usage_offline.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            both_usage_online
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.amount !== undefined ? objectsAdminMonitoring.both_usage_online.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.cpus !== undefined ? objectsAdminMonitoring.both_usage_online.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.disk_in !== undefined ? objectsAdminMonitoring.both_usage_online.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.disk_out !== undefined ? objectsAdminMonitoring.both_usage_online.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.disk_size !== undefined ? objectsAdminMonitoring.both_usage_online.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.mem_max !== undefined ? objectsAdminMonitoring.both_usage_online.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.mem_use !== undefined ? objectsAdminMonitoring.both_usage_online.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.net_in !== undefined ? objectsAdminMonitoring.both_usage_online.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.net_out !== undefined ? objectsAdminMonitoring.both_usage_online.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            both_usage_total
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.amount !== undefined ? objectsAdminMonitoring.both_usage_total.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.cpus !== undefined ? objectsAdminMonitoring.both_usage_total.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.disk_in !== undefined ? objectsAdminMonitoring.both_usage_total.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.disk_out !== undefined ? objectsAdminMonitoring.both_usage_total.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.disk_size !== undefined ? objectsAdminMonitoring.both_usage_total.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.mem_max !== undefined ? objectsAdminMonitoring.both_usage_total.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.mem_use !== undefined ? objectsAdminMonitoring.both_usage_total.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.net_in !== undefined ? objectsAdminMonitoring.both_usage_total.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.net_out !== undefined ? objectsAdminMonitoring.both_usage_total.net_out : ""}
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
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.amount !== undefined ? objectsAdminMonitoring.container_usage_offline.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.cpus !== undefined ? objectsAdminMonitoring.container_usage_offline.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.disk_in !== undefined ? objectsAdminMonitoring.container_usage_offline.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.disk_out !== undefined ? objectsAdminMonitoring.container_usage_offline.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.disk_size !== undefined ? objectsAdminMonitoring.container_usage_offline.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.mem_max !== undefined ? objectsAdminMonitoring.container_usage_offline.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.mem_use !== undefined ? objectsAdminMonitoring.container_usage_offline.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.net_in !== undefined ? objectsAdminMonitoring.container_usage_offline.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.net_out !== undefined ? objectsAdminMonitoring.container_usage_offline.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            container_usage_online
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.amount !== undefined ? objectsAdminMonitoring.container_usage_online.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.cpus !== undefined ? objectsAdminMonitoring.container_usage_online.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.disk_in !== undefined ? objectsAdminMonitoring.container_usage_online.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.disk_out !== undefined ? objectsAdminMonitoring.container_usage_online.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.disk_size !== undefined ? objectsAdminMonitoring.container_usage_online.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.mem_max !== undefined ? objectsAdminMonitoring.container_usage_online.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.mem_use !== undefined ? objectsAdminMonitoring.container_usage_online.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.net_in !== undefined ? objectsAdminMonitoring.container_usage_online.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.net_out !== undefined ? objectsAdminMonitoring.container_usage_online.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            container_usage_total
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.amount !== undefined ? objectsAdminMonitoring.container_usage_total.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.cpus !== undefined ? objectsAdminMonitoring.container_usage_total.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.disk_in !== undefined ? objectsAdminMonitoring.container_usage_total.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.disk_out !== undefined ? objectsAdminMonitoring.container_usage_total.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.disk_size !== undefined ? objectsAdminMonitoring.container_usage_total.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.mem_max !== undefined ? objectsAdminMonitoring.container_usage_total.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.mem_use !== undefined ? objectsAdminMonitoring.container_usage_total.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.net_in !== undefined ? objectsAdminMonitoring.container_usage_total.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.net_out !== undefined ? objectsAdminMonitoring.container_usage_total.net_out : ""}
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
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.amount !== undefined ? objectsAdminMonitoring.vms_usage_offline.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.cpus !== undefined ? objectsAdminMonitoring.vms_usage_offline.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.disk_in !== undefined ? objectsAdminMonitoring.vms_usage_offline.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.disk_out !== undefined ? objectsAdminMonitoring.vms_usage_offline.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.disk_size !== undefined ? objectsAdminMonitoring.vms_usage_offline.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.mem_max !== undefined ? objectsAdminMonitoring.vms_usage_offline.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.mem_use !== undefined ? objectsAdminMonitoring.vms_usage_offline.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.net_in !== undefined ? objectsAdminMonitoring.vms_usage_offline.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.net_out !== undefined ? objectsAdminMonitoring.vms_usage_offline.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            vms_usage_online
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.amount !== undefined ? objectsAdminMonitoring.vms_usage_online.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.cpus !== undefined ? objectsAdminMonitoring.vms_usage_online.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.disk_in !== undefined ? objectsAdminMonitoring.vms_usage_online.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.disk_out !== undefined ? objectsAdminMonitoring.vms_usage_online.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.disk_size !== undefined ? objectsAdminMonitoring.vms_usage_online.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.mem_max !== undefined ? objectsAdminMonitoring.vms_usage_online.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.mem_use !== undefined ? objectsAdminMonitoring.vms_usage_online.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.net_in !== undefined ? objectsAdminMonitoring.vms_usage_online.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.net_out !== undefined ? objectsAdminMonitoring.vms_usage_online.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            vms_usage_total
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.amount !== undefined ? objectsAdminMonitoring.vms_usage_total.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.cpus !== undefined ? objectsAdminMonitoring.vms_usage_total.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.disk_in !== undefined ? objectsAdminMonitoring.vms_usage_total.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.disk_out !== undefined ? objectsAdminMonitoring.vms_usage_total.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.disk_size !== undefined ? objectsAdminMonitoring.vms_usage_total.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.mem_max !== undefined ? objectsAdminMonitoring.vms_usage_total.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.mem_use !== undefined ? objectsAdminMonitoring.vms_usage_total.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.net_in !== undefined ? objectsAdminMonitoring.vms_usage_total.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.net_out !== undefined ? objectsAdminMonitoring.vms_usage_total.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
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
                                        {utilizationsAdminMonitoring.instance_images}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        instance_vms
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.instance_vms}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        instances
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.instances}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        max_cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.max_cpus}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        max_diskspace
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.max_diskspace}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        max_memory
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.max_memory}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        object_images
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.object_images}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        object_vms
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.object_vms}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        objects
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.objects}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        utilized_cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.utilized_cpus}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        utilized_diskspace
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.utilized_diskspace}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        utilized_memory
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.utilized_memory}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            fallback
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(limitationsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                container_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.container_max !== undefined ? limitationsAdminMonitoring.fallback.container_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpu_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.cpu_max !== undefined ? limitationsAdminMonitoring.fallback.cpu_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                dsk_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.dsk_max !== undefined ? limitationsAdminMonitoring.fallback.dsk_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                id_owner
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.id_owner !== undefined ? limitationsAdminMonitoring.fallback.id_owner : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.mem_max !== undefined ? limitationsAdminMonitoring.fallback.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                obj_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.obj_max !== undefined ? limitationsAdminMonitoring.fallback.obj_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                vm_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.vm_max !== undefined ? limitationsAdminMonitoring.fallback.vm_max : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            limits
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(limitationsAdminMonitoring).length > 0 ? limitationsAdminMonitoring.limits.map(limitData => {
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
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            syslimit
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(limitationsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                container_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.container_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpu_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.cpu_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                dsk_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.dsk_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                id_owner
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.id_owner}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.mem_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                obj_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.obj_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                vm_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.vm_max}
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
                            <ReactBootstrap.Tab eventKey="task-monitoring" title={t('task-monitoring')}>
                                {
                                    tasksAdminMonitoring.length > 0 ? (
                                        tasksAdminMonitoring.map(taskData => {
                                            return (
                                                <ReactBootstrap.Accordion>
                                                    <ReactBootstrap.Accordion.Item eventKey={taskData.id}>
                                                        <ReactBootstrap.Accordion.Header>{taskData.id}</ReactBootstrap.Accordion.Header>
                                                        <ReactBootstrap.Accordion.Body>
                                                            <ReactBootstrap.Row>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    created_at
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.created_at}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    filesize
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.filesize}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    id
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.id}
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
                                                                    localpath
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left text-path-break">
                                                                    {taskData.localpath}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    name
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.name}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    os_type
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.os_type}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    remotepath
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.remotepath}
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    version
                                                                </ReactBootstrap.Col>
                                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                    className="text-left">
                                                                    {taskData.version}
                                                                </ReactBootstrap.Col>
                                                            </ReactBootstrap.Row>
                                                        </ReactBootstrap.Accordion.Body>
                                                    </ReactBootstrap.Accordion.Item>
                                                </ReactBootstrap.Accordion>
                                            )
                                        })
                                    ) : (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
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
                                    filesAdminMonitoring.length > 0 ? (
                                        filesAdminMonitoring.map(fileData => {
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
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
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
                                    appsAdminMonitoring.length > 0 ? (
                                        appsAdminMonitoring.map(appData => {
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
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
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
                                        <pre>
                                            {JSON.stringify(socketsAdminMonitoring.active_websockets, null, 3)}
                                        </pre>
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
                                        <pre>
                                            {JSON.stringify(socketsAdminMonitoring.closed_websockets, null, 3)}
                                        </pre>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Tab>
                            <ReactBootstrap.Tab eventKey="host-monitoring" title={t('host-monitoring')}>
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_cpus}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_disk_ceph
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_disk_ceph}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_disk_images
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_disk_images}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_disk_iso
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_disk_iso}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_disk_local
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_disk_local}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        available_memory
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.available_memory}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_cpus}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_disk_ceph
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_disk_ceph}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_disk_images
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_disk_images}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_disk_iso
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_disk_iso}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_disk_local
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_disk_local}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        inuse_memory
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {hostsAdminMonitoring.inuse_memory}
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
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.amount !== undefined ? objectsAdminMonitoring.both_usage_offline.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.cpus !== undefined ? objectsAdminMonitoring.both_usage_offline.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.disk_in !== undefined ? objectsAdminMonitoring.both_usage_offline.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.disk_out !== undefined ? objectsAdminMonitoring.both_usage_offline.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.disk_size !== undefined ? objectsAdminMonitoring.both_usage_offline.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.mem_max !== undefined ? objectsAdminMonitoring.both_usage_offline.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.mem_use !== undefined ? objectsAdminMonitoring.both_usage_offline.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.net_in !== undefined ? objectsAdminMonitoring.both_usage_offline.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_offline.net_out !== undefined ? objectsAdminMonitoring.both_usage_offline.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            both_usage_online
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.amount !== undefined ? objectsAdminMonitoring.both_usage_online.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.cpus !== undefined ? objectsAdminMonitoring.both_usage_online.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.disk_in !== undefined ? objectsAdminMonitoring.both_usage_online.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.disk_out !== undefined ? objectsAdminMonitoring.both_usage_online.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.disk_size !== undefined ? objectsAdminMonitoring.both_usage_online.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.mem_max !== undefined ? objectsAdminMonitoring.both_usage_online.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.mem_use !== undefined ? objectsAdminMonitoring.both_usage_online.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.net_in !== undefined ? objectsAdminMonitoring.both_usage_online.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_online.net_out !== undefined ? objectsAdminMonitoring.both_usage_online.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            both_usage_total
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.amount !== undefined ? objectsAdminMonitoring.both_usage_total.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.cpus !== undefined ? objectsAdminMonitoring.both_usage_total.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.disk_in !== undefined ? objectsAdminMonitoring.both_usage_total.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.disk_out !== undefined ? objectsAdminMonitoring.both_usage_total.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.disk_size !== undefined ? objectsAdminMonitoring.both_usage_total.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.mem_max !== undefined ? objectsAdminMonitoring.both_usage_total.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.mem_use !== undefined ? objectsAdminMonitoring.both_usage_total.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.net_in !== undefined ? objectsAdminMonitoring.both_usage_total.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.both_usage_total.net_out !== undefined ? objectsAdminMonitoring.both_usage_total.net_out : ""}
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
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.amount !== undefined ? objectsAdminMonitoring.container_usage_offline.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.cpus !== undefined ? objectsAdminMonitoring.container_usage_offline.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.disk_in !== undefined ? objectsAdminMonitoring.container_usage_offline.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.disk_out !== undefined ? objectsAdminMonitoring.container_usage_offline.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.disk_size !== undefined ? objectsAdminMonitoring.container_usage_offline.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.mem_max !== undefined ? objectsAdminMonitoring.container_usage_offline.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.mem_use !== undefined ? objectsAdminMonitoring.container_usage_offline.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.net_in !== undefined ? objectsAdminMonitoring.container_usage_offline.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_offline.net_out !== undefined ? objectsAdminMonitoring.container_usage_offline.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            container_usage_online
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.amount !== undefined ? objectsAdminMonitoring.container_usage_online.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.cpus !== undefined ? objectsAdminMonitoring.container_usage_online.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.disk_in !== undefined ? objectsAdminMonitoring.container_usage_online.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.disk_out !== undefined ? objectsAdminMonitoring.container_usage_online.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.disk_size !== undefined ? objectsAdminMonitoring.container_usage_online.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.mem_max !== undefined ? objectsAdminMonitoring.container_usage_online.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.mem_use !== undefined ? objectsAdminMonitoring.container_usage_online.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.net_in !== undefined ? objectsAdminMonitoring.container_usage_online.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_online.net_out !== undefined ? objectsAdminMonitoring.container_usage_online.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            container_usage_total
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.amount !== undefined ? objectsAdminMonitoring.container_usage_total.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.cpus !== undefined ? objectsAdminMonitoring.container_usage_total.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.disk_in !== undefined ? objectsAdminMonitoring.container_usage_total.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.disk_out !== undefined ? objectsAdminMonitoring.container_usage_total.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.disk_size !== undefined ? objectsAdminMonitoring.container_usage_total.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.mem_max !== undefined ? objectsAdminMonitoring.container_usage_total.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.mem_use !== undefined ? objectsAdminMonitoring.container_usage_total.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.net_in !== undefined ? objectsAdminMonitoring.container_usage_total.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.container_usage_total.net_out !== undefined ? objectsAdminMonitoring.container_usage_total.net_out : ""}
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
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.amount !== undefined ? objectsAdminMonitoring.vms_usage_offline.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.cpus !== undefined ? objectsAdminMonitoring.vms_usage_offline.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.disk_in !== undefined ? objectsAdminMonitoring.vms_usage_offline.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.disk_out !== undefined ? objectsAdminMonitoring.vms_usage_offline.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.disk_size !== undefined ? objectsAdminMonitoring.vms_usage_offline.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.mem_max !== undefined ? objectsAdminMonitoring.vms_usage_offline.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.mem_use !== undefined ? objectsAdminMonitoring.vms_usage_offline.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.net_in !== undefined ? objectsAdminMonitoring.vms_usage_offline.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_offline.net_out !== undefined ? objectsAdminMonitoring.vms_usage_offline.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            vms_usage_online
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.amount !== undefined ? objectsAdminMonitoring.vms_usage_online.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.cpus !== undefined ? objectsAdminMonitoring.vms_usage_online.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.disk_in !== undefined ? objectsAdminMonitoring.vms_usage_online.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.disk_out !== undefined ? objectsAdminMonitoring.vms_usage_online.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.disk_size !== undefined ? objectsAdminMonitoring.vms_usage_online.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.mem_max !== undefined ? objectsAdminMonitoring.vms_usage_online.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.mem_use !== undefined ? objectsAdminMonitoring.vms_usage_online.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.net_in !== undefined ? objectsAdminMonitoring.vms_usage_online.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_online.net_out !== undefined ? objectsAdminMonitoring.vms_usage_online.net_out : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            vms_usage_total
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(objectsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                amount
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.amount !== undefined ? objectsAdminMonitoring.vms_usage_total.amount : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpus
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.cpus !== undefined ? objectsAdminMonitoring.vms_usage_total.cpus : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.disk_in !== undefined ? objectsAdminMonitoring.vms_usage_total.disk_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.disk_out !== undefined ? objectsAdminMonitoring.vms_usage_total.disk_out : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                disk_size
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.disk_size !== undefined ? objectsAdminMonitoring.vms_usage_total.disk_size : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.mem_max !== undefined ? objectsAdminMonitoring.vms_usage_total.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_use
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.mem_use !== undefined ? objectsAdminMonitoring.vms_usage_total.mem_use : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_in
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.net_in !== undefined ? objectsAdminMonitoring.vms_usage_total.net_in : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                net_out
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {objectsAdminMonitoring.vms_usage_total.net_out !== undefined ? objectsAdminMonitoring.vms_usage_total.net_out : ""}
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
                                        {utilizationsAdminMonitoring.instance_images}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        instance_vms
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.instance_vms}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        instances
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.instances}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        max_cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.max_cpus}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        max_diskspace
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.max_diskspace}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        max_memory
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.max_memory}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        object_images
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.object_images}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        object_vms
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.object_vms}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        objects
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.objects}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        utilized_cpus
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.utilized_cpus}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        utilized_diskspace
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.utilized_diskspace}
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        utilized_memory
                                    </ReactBootstrap.Col>
                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                        className="text-left">
                                        {utilizationsAdminMonitoring.utilized_memory}
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Tab>
                            <ReactBootstrap.Tab eventKey="limit-monitoring" title={t('limit-monitoring')}>
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            fallback
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(limitationsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                container_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.container_max !== undefined ? limitationsAdminMonitoring.fallback.container_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpu_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.cpu_max !== undefined ? limitationsAdminMonitoring.fallback.cpu_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                dsk_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.dsk_max !== undefined ? limitationsAdminMonitoring.fallback.dsk_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                id_owner
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.id_owner !== undefined ? limitationsAdminMonitoring.fallback.id_owner : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.mem_max !== undefined ? limitationsAdminMonitoring.fallback.mem_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                obj_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.obj_max !== undefined ? limitationsAdminMonitoring.fallback.obj_max : ""}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                vm_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.fallback.vm_max !== undefined ? limitationsAdminMonitoring.fallback.vm_max : ""}
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
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            limits
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(limitationsAdminMonitoring).length > 0 ? limitationsAdminMonitoring.limits.map(limitData => {
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
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                        className="text-left text-normal">
                                        <h3>
                                            syslimit
                                        </h3>
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {
                                    Object.keys(limitationsAdminMonitoring).length > 0 ? (
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                container_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.container_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                cpu_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.cpu_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                dsk_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.dsk_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                id_owner
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.id_owner}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                mem_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.mem_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                obj_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.obj_max}
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                vm_max
                                            </ReactBootstrap.Col>
                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                className="text-left">
                                                {limitationsAdminMonitoring.syslimit.vm_max}
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
                        </ReactBootstrap.Tabs>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="search-monitoring" title={t('search-owner')}>
                        <Formik
                            initialValues={{
                                id_owner: ""
                            }}
                            validationSchema={requestIDOwnerSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({errors, touched}) => (
                                <Form onSubmit={getAllMonitorInfoData} className="form-monitoring-data">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-owner-all">{t('vm-id-owner')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-owner-all" name="vm-id-owner-all"
                                                   value={allSearchMonitoringID}
                                                   onChange={changeAllMonitorInfoID}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-owner-all')}
                                            {/*<ErrorMessage name="vm-id-owner-all">
                                                    </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={allSearchMonitoringID.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                        {
                            completeSearchMonitoringSubmit ? (
                                <>
                                    <ReactBootstrap.Tabs defaultActiveKey="complete-search-monitoring"
                                                         id="all-monitoring-admin-types">
                                        <ReactBootstrap.Tab eventKey="complete-search-monitoring"
                                                            title={t('complete-monitoring')}>
                                            <>
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
                                                        <h3>
                                                            {t('task-monitoring')}
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    tasksSearchMonitoring.length > 0 ? (
                                                        tasksSearchMonitoring.map(taskData => {
                                                            return (
                                                                <ReactBootstrap.Accordion>
                                                                    <ReactBootstrap.Accordion.Item
                                                                        eventKey={taskData.id_task}>
                                                                        <ReactBootstrap.Accordion.Header>{taskData.id_task}</ReactBootstrap.Accordion.Header>
                                                                        <ReactBootstrap.Accordion.Body>
                                                                            <ReactBootstrap.Row>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id_instance
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.id_instance}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id_object
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.id_object}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id_owner
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.id_owner}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id_task
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.id_task}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    result
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left text-path-break">
                                                                                    {JSON.stringify(taskData.result)}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    task_purpose
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.task_purpose}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    task_state
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.task_state}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    task_type
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
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
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left text-normal">
                                                                <>
                                                                    {t('no-data-available')}
                                                                </>
                                                            </ReactBootstrap.Col>
                                                        </ReactBootstrap.Row>
                                                    )
                                                }
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
                                                        <h3 className="text-normal">
                                                            {t('file-monitoring')}
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    filesSearchMonitoring.length > 0 ? (
                                                        filesSearchMonitoring.map(fileData => {
                                                            return (
                                                                <ReactBootstrap.Accordion>
                                                                    <ReactBootstrap.Accordion.Item
                                                                        eventKey={fileData.id}>
                                                                        <ReactBootstrap.Accordion.Header>{fileData.id}</ReactBootstrap.Accordion.Header>
                                                                        <ReactBootstrap.Accordion.Body>
                                                                            <ReactBootstrap.Row>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    created_at
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.created_at}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    filesize
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.filesize}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.id}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id_owner
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.id_owner}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    localpath
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left text-path-break">
                                                                                    {fileData.localpath}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    name
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.name}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    os_type
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.os_type}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    remotepath
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.remotepath}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    version
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
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
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                <>
                                                                    {t('no-data-available')}
                                                                </>
                                                            </ReactBootstrap.Col>
                                                        </ReactBootstrap.Row>
                                                    )
                                                }
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
                                                        <h3 className="text-normal">
                                                            {t('app-monitoring')}
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    appsSearchMonitoring.length > 0 ? (
                                                        appsSearchMonitoring.map(appData => {
                                                            return (
                                                                <ReactBootstrap.Accordion>
                                                                    <ReactBootstrap.Accordion.Item
                                                                        eventKey={appData.id}>
                                                                        <ReactBootstrap.Accordion.Header>{appData.id}</ReactBootstrap.Accordion.Header>
                                                                        <ReactBootstrap.Accordion.Body>
                                                                            <ReactBootstrap.Row>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    created_at
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.created_at}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.id}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id_file
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.id_file}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id_owner
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.id_owner}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id_template
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.id_template}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    installer
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left text-path-break">
                                                                                    {appData.installer}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    installer_args
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.installer_args}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    installer_type
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.installer_type}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    name
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.name}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    os_type
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.os_type}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    target
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.target}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    target_args
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {appData.target_args}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    version
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
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
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                <>
                                                                    {t('no-data-available')}
                                                                </>
                                                            </ReactBootstrap.Col>
                                                        </ReactBootstrap.Row>
                                                    )
                                                }
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
                                                        <h3>
                                                            {t('socket-monitoring')}
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
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
                                        <pre>
                                            {JSON.stringify(socketsSearchMonitoring.active_websockets, null, 3)}
                                        </pre>
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
                                        <pre>
                                            {JSON.stringify(socketsSearchMonitoring.closed_websockets, null, 3)}
                                        </pre>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
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
                                                        {hostsSearchMonitoring.available_cpus}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        available_disk_ceph
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.available_disk_ceph}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        available_disk_images
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.available_disk_images}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        available_disk_iso
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.available_disk_iso}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        available_disk_local
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.available_disk_local}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        available_memory
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.available_memory}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        inuse_cpus
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.inuse_cpus}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        inuse_disk_ceph
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.inuse_disk_ceph}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        inuse_disk_images
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.inuse_disk_images}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        inuse_disk_iso
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.inuse_disk_iso}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        inuse_disk_local
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.inuse_disk_local}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        inuse_memory
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {hostsSearchMonitoring.inuse_memory}
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
                                                        <h3>
                                                            {t('object-monitoring')}
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
                                                        <h3>
                                                            both_usage_offline
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                amount
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_offline.amount !== undefined ? objectsSearchMonitoring.both_usage_offline.amount : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpus
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_offline.cpus !== undefined ? objectsSearchMonitoring.both_usage_offline.cpus : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_offline.disk_in !== undefined ? objectsSearchMonitoring.both_usage_offline.disk_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_offline.disk_out !== undefined ? objectsSearchMonitoring.both_usage_offline.disk_out : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_size
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_offline.disk_size !== undefined ? objectsSearchMonitoring.both_usage_offline.disk_size : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_offline.mem_max !== undefined ? objectsSearchMonitoring.both_usage_offline.mem_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_use
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_offline.mem_use !== undefined ? objectsSearchMonitoring.both_usage_offline.mem_use : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_offline.net_in !== undefined ? objectsSearchMonitoring.both_usage_offline.net_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_offline.net_out !== undefined ? objectsSearchMonitoring.both_usage_offline.net_out : ""}
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
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left text-normal">
                                                        <h3>
                                                            both_usage_online
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                amount
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_online.amount !== undefined ? objectsSearchMonitoring.both_usage_online.amount : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpus
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_online.cpus !== undefined ? objectsSearchMonitoring.both_usage_online.cpus : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_online.disk_in !== undefined ? objectsSearchMonitoring.both_usage_online.disk_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_online.disk_out !== undefined ? objectsSearchMonitoring.both_usage_online.disk_out : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_size
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_online.disk_size !== undefined ? objectsSearchMonitoring.both_usage_online.disk_size : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_online.mem_max !== undefined ? objectsSearchMonitoring.both_usage_online.mem_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_use
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_online.mem_use !== undefined ? objectsSearchMonitoring.both_usage_online.mem_use : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_online.net_in !== undefined ? objectsSearchMonitoring.both_usage_online.net_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_online.net_out !== undefined ? objectsSearchMonitoring.both_usage_online.net_out : ""}
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
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left text-normal">
                                                        <h3>
                                                            both_usage_total
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                amount
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_total.amount !== undefined ? objectsSearchMonitoring.both_usage_total.amount : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpus
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_total.cpus !== undefined ? objectsSearchMonitoring.both_usage_total.cpus : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_total.disk_in !== undefined ? objectsSearchMonitoring.both_usage_total.disk_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_total.disk_out !== undefined ? objectsSearchMonitoring.both_usage_total.disk_out : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_size
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_total.disk_size !== undefined ? objectsSearchMonitoring.both_usage_total.disk_size : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_total.mem_max !== undefined ? objectsSearchMonitoring.both_usage_total.mem_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_use
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_total.mem_use !== undefined ? objectsSearchMonitoring.both_usage_total.mem_use : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_total.net_in !== undefined ? objectsSearchMonitoring.both_usage_total.net_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.both_usage_total.net_out !== undefined ? objectsSearchMonitoring.both_usage_total.net_out : ""}
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
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
                                                        <h3>
                                                            container_usage_offline
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                amount
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_offline.amount !== undefined ? objectsSearchMonitoring.container_usage_offline.amount : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpus
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_offline.cpus !== undefined ? objectsSearchMonitoring.container_usage_offline.cpus : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_offline.disk_in !== undefined ? objectsSearchMonitoring.container_usage_offline.disk_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_offline.disk_out !== undefined ? objectsSearchMonitoring.container_usage_offline.disk_out : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_size
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_offline.disk_size !== undefined ? objectsSearchMonitoring.container_usage_offline.disk_size : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_offline.mem_max !== undefined ? objectsSearchMonitoring.container_usage_offline.mem_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_use
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_offline.mem_use !== undefined ? objectsSearchMonitoring.container_usage_offline.mem_use : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_offline.net_in !== undefined ? objectsSearchMonitoring.container_usage_offline.net_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_offline.net_out !== undefined ? objectsSearchMonitoring.container_usage_offline.net_out : ""}
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
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left text-normal">
                                                        <h3>
                                                            container_usage_online
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                amount
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_online.amount !== undefined ? objectsSearchMonitoring.container_usage_online.amount : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpus
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_online.cpus !== undefined ? objectsSearchMonitoring.container_usage_online.cpus : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_online.disk_in !== undefined ? objectsSearchMonitoring.container_usage_online.disk_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_online.disk_out !== undefined ? objectsSearchMonitoring.container_usage_online.disk_out : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_size
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_online.disk_size !== undefined ? objectsSearchMonitoring.container_usage_online.disk_size : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_online.mem_max !== undefined ? objectsSearchMonitoring.container_usage_online.mem_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_use
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_online.mem_use !== undefined ? objectsSearchMonitoring.container_usage_online.mem_use : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_online.net_in !== undefined ? objectsSearchMonitoring.container_usage_online.net_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_online.net_out !== undefined ? objectsSearchMonitoring.container_usage_online.net_out : ""}
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
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left text-normal">
                                                        <h3>
                                                            container_usage_total
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                amount
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_total.amount !== undefined ? objectsSearchMonitoring.container_usage_total.amount : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpus
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_total.cpus !== undefined ? objectsSearchMonitoring.container_usage_total.cpus : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_total.disk_in !== undefined ? objectsSearchMonitoring.container_usage_total.disk_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_total.disk_out !== undefined ? objectsSearchMonitoring.container_usage_total.disk_out : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_size
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_total.disk_size !== undefined ? objectsSearchMonitoring.container_usage_total.disk_size : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_total.mem_max !== undefined ? objectsSearchMonitoring.container_usage_total.mem_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_use
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_total.mem_use !== undefined ? objectsSearchMonitoring.container_usage_total.mem_use : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_total.net_in !== undefined ? objectsSearchMonitoring.container_usage_total.net_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.container_usage_total.net_out !== undefined ? objectsSearchMonitoring.container_usage_total.net_out : ""}
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
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
                                                        <h3>
                                                            vms_usage_offline
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                amount
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_offline.amount !== undefined ? objectsSearchMonitoring.vms_usage_offline.amount : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpus
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_offline.cpus !== undefined ? objectsSearchMonitoring.vms_usage_offline.cpus : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_offline.disk_in !== undefined ? objectsSearchMonitoring.vms_usage_offline.disk_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_offline.disk_out !== undefined ? objectsSearchMonitoring.vms_usage_offline.disk_out : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_size
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_offline.disk_size !== undefined ? objectsSearchMonitoring.vms_usage_offline.disk_size : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_offline.mem_max !== undefined ? objectsSearchMonitoring.vms_usage_offline.mem_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_use
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_offline.mem_use !== undefined ? objectsSearchMonitoring.vms_usage_offline.mem_use : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_offline.net_in !== undefined ? objectsSearchMonitoring.vms_usage_offline.net_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_offline.net_out !== undefined ? objectsSearchMonitoring.vms_usage_offline.net_out : ""}
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
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left text-normal">
                                                        <h3>
                                                            vms_usage_online
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                amount
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_online.amount !== undefined ? objectsSearchMonitoring.vms_usage_online.amount : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpus
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_online.cpus !== undefined ? objectsSearchMonitoring.vms_usage_online.cpus : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_online.disk_in !== undefined ? objectsSearchMonitoring.vms_usage_online.disk_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_online.disk_out !== undefined ? objectsSearchMonitoring.vms_usage_online.disk_out : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_size
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_online.disk_size !== undefined ? objectsSearchMonitoring.vms_usage_online.disk_size : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_online.mem_max !== undefined ? objectsSearchMonitoring.vms_usage_online.mem_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_use
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_online.mem_use !== undefined ? objectsSearchMonitoring.vms_usage_online.mem_use : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_online.net_in !== undefined ? objectsSearchMonitoring.vms_usage_online.net_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_online.net_out !== undefined ? objectsSearchMonitoring.vms_usage_online.net_out : ""}
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
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left text-normal">
                                                        <h3>
                                                            vms_usage_total
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                amount
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_total.amount !== undefined ? objectsSearchMonitoring.vms_usage_total.amount : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpus
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_total.cpus !== undefined ? objectsSearchMonitoring.vms_usage_total.cpus : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_total.disk_in !== undefined ? objectsSearchMonitoring.vms_usage_total.disk_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_total.disk_out !== undefined ? objectsSearchMonitoring.vms_usage_total.disk_out : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                disk_size
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_total.disk_size !== undefined ? objectsSearchMonitoring.vms_usage_total.disk_size : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_total.mem_max !== undefined ? objectsSearchMonitoring.vms_usage_total.mem_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_use
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_total.mem_use !== undefined ? objectsSearchMonitoring.vms_usage_total.mem_use : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_in
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_total.net_in !== undefined ? objectsSearchMonitoring.vms_usage_total.net_in : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                net_out
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {objectsSearchMonitoring.vms_usage_total.net_out !== undefined ? objectsSearchMonitoring.vms_usage_total.net_out : ""}
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
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left text-normal">
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
                                                        {utilizationsSearchMonitoring.instance_images}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        instance_vms
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.instance_vms}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        instances
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.instances}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        max_cpus
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.max_cpus}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        max_diskspace
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.max_diskspace}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        max_memory
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.max_memory}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        object_images
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.object_images}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        object_vms
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.object_vms}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        objects
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.objects}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        utilized_cpus
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.utilized_cpus}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        utilized_diskspace
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.utilized_diskspace}
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        utilized_memory
                                                    </ReactBootstrap.Col>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                        className="text-left">
                                                        {utilizationsSearchMonitoring.utilized_memory}
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left">
                                                        <h3>
                                                            {t('limit-monitoring')}
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left text-normal">
                                                        <h3>
                                                            fallback
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(limitationsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                container_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.fallback.container_max !== undefined ? limitationsSearchMonitoring.fallback.container_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpu_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.fallback.cpu_max !== undefined ? limitationsSearchMonitoring.fallback.cpu_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                dsk_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.fallback.dsk_max !== undefined ? limitationsSearchMonitoring.fallback.dsk_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                id_owner
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.fallback.id_owner !== undefined ? limitationsSearchMonitoring.fallback.id_owner : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.fallback.mem_max !== undefined ? limitationsSearchMonitoring.fallback.mem_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                obj_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.fallback.obj_max !== undefined ? limitationsSearchMonitoring.fallback.obj_max : ""}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                vm_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.fallback.vm_max !== undefined ? limitationsSearchMonitoring.fallback.vm_max : ""}
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
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left text-normal">
                                                        <h3>
                                                            limits
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(limitationsSearchMonitoring).length > 0 ? limitationsSearchMonitoring.limits.map(limitData => {
                                                        return (
                                                            <>
                                                                <ReactBootstrap.Row>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        container_max
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        {limitData.container_max !== undefined ? limitData.container_max : ""}
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        cpu_max
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        {limitData.cpu_max !== undefined ? limitData.cpu_max : ""}
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        dsk_max
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        {limitData.dsk_max !== undefined ? limitData.dsk_max : ""}
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        id_owner
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        {limitData.id_owner !== undefined ? limitData.id_owner : ""}
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        mem_max
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        {limitData.mem_max !== undefined ? limitData.mem_max : ""}
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        obj_max
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        {limitData.obj_max !== undefined ? limitData.obj_max : ""}
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
                                                                                        className="text-left">
                                                                        vm_max
                                                                    </ReactBootstrap.Col>
                                                                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6}
                                                                                        xl={6}
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
                                                <ReactBootstrap.Row>
                                                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                        className="text-left text-normal">
                                                        <h3>
                                                            syslimit
                                                        </h3>
                                                    </ReactBootstrap.Col>
                                                </ReactBootstrap.Row>
                                                {
                                                    Object.keys(limitationsSearchMonitoring).length > 0 ? (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                container_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.syslimit.container_max}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                cpu_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.syslimit.cpu_max}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                dsk_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.syslimit.dsk_max}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                id_owner
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.syslimit.id_owner}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                mem_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.syslimit.mem_max}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                obj_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.syslimit.obj_max}
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                vm_max
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                {limitationsSearchMonitoring.syslimit.vm_max}
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
                                            </>
                                        </ReactBootstrap.Tab>
                                        <ReactBootstrap.Tab eventKey="task-monitoring" title={t('task-monitoring')}>
                                            <>
                                                {
                                                    tasksSearchMonitoring.length > 0 ? (
                                                        tasksSearchMonitoring.map(taskData => {
                                                            return (
                                                                <ReactBootstrap.Accordion>
                                                                    <ReactBootstrap.Accordion.Item
                                                                        eventKey={taskData.id}>
                                                                        <ReactBootstrap.Accordion.Header>{taskData.id}</ReactBootstrap.Accordion.Header>
                                                                        <ReactBootstrap.Accordion.Body>
                                                                            <ReactBootstrap.Row>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    created_at
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.created_at}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    filesize
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.filesize}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.id}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id_owner
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.id_owner}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    localpath
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left text-path-break">
                                                                                    {taskData.localpath}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    name
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.name}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    os_type
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.os_type}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    remotepath
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.remotepath}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    version
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {taskData.version}
                                                                                </ReactBootstrap.Col>
                                                                            </ReactBootstrap.Row>
                                                                        </ReactBootstrap.Accordion.Body>
                                                                    </ReactBootstrap.Accordion.Item>
                                                                </ReactBootstrap.Accordion>
                                                            )
                                                        })
                                                    ) : (
                                                        <ReactBootstrap.Row>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                <>
                                                                    {t('no-data-available')}
                                                                </>
                                                            </ReactBootstrap.Col>
                                                        </ReactBootstrap.Row>
                                                    )
                                                }
                                            </>
                                        </ReactBootstrap.Tab>
                                        <ReactBootstrap.Tab eventKey="file-monitoring" title={t('file-monitoring')}>
                                            <>
                                                {
                                                    filesSearchMonitoring.length > 0 ? (
                                                        filesSearchMonitoring.map(fileData => {
                                                            return (
                                                                <ReactBootstrap.Accordion>
                                                                    <ReactBootstrap.Accordion.Item
                                                                        eventKey={fileData.id}>
                                                                        <ReactBootstrap.Accordion.Header>{fileData.id}</ReactBootstrap.Accordion.Header>
                                                                        <ReactBootstrap.Accordion.Body>
                                                                            <ReactBootstrap.Row>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    created_at
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.created_at}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    filesize
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.filesize}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.id}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    id_owner
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.id_owner}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    localpath
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left text-path-break">
                                                                                    {fileData.localpath}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    name
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.name}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    os_type
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.os_type}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    remotepath
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    {fileData.remotepath}
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
                                                                                                    className="text-left">
                                                                                    version
                                                                                </ReactBootstrap.Col>
                                                                                <ReactBootstrap.Col xs={12} sm={12}
                                                                                                    md={6} lg={6}
                                                                                                    xl={6}
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
                                                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                                className="text-left">
                                                                <>
                                                                    {t('no-data-available')}
                                                                </>
                                                            </ReactBootstrap.Col>
                                                        </ReactBootstrap.Row>
                                                    )
                                                }
                                            </>
                                        </ReactBootstrap.Tab>
                                        <ReactBootstrap.Tab eventKey="app-monitoring" title={t('app-monitoring')}>
                                            {
                                                appsSearchMonitoring.length > 0 ? (
                                                    appsSearchMonitoring.map(appData => {
                                                        return (
                                                            <ReactBootstrap.Accordion>
                                                                <ReactBootstrap.Accordion.Item eventKey={appData.id}>
                                                                    <ReactBootstrap.Accordion.Header>{appData.id}</ReactBootstrap.Accordion.Header>
                                                                    <ReactBootstrap.Accordion.Body>
                                                                        <ReactBootstrap.Row>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                created_at
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.created_at}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                id
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.id}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                id_file
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.id_file}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                id_owner
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.id_owner}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                id_template
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.id_template}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                installer
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left text-path-break">
                                                                                {appData.installer}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                installer_args
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.installer_args}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                installer_type
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.installer_type}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                name
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.name}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                os_type
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.os_type}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                target
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.target}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                target_args
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                {appData.target_args}
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
                                                                                                className="text-left">
                                                                                version
                                                                            </ReactBootstrap.Col>
                                                                            <ReactBootstrap.Col xs={12} sm={12} md={6}
                                                                                                lg={6} xl={6}
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
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
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
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left">
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
                                        <pre>
                                            {JSON.stringify(socketsSearchMonitoring.active_websockets, null, 3)}
                                        </pre>
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
                                        <pre>
                                            {JSON.stringify(socketsSearchMonitoring.closed_websockets, null, 3)}
                                        </pre>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                        </ReactBootstrap.Tab>
                                        <ReactBootstrap.Tab eventKey="host-monitoring" title={t('host-monitoring')}>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    available_cpus
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.available_cpus}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    available_disk_ceph
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.available_disk_ceph}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    available_disk_images
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.available_disk_images}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    available_disk_iso
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.available_disk_iso}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    available_disk_local
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.available_disk_local}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    available_memory
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.available_memory}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    inuse_cpus
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.inuse_cpus}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    inuse_disk_ceph
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.inuse_disk_ceph}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    inuse_disk_images
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.inuse_disk_images}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    inuse_disk_iso
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.inuse_disk_iso}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    inuse_disk_local
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.inuse_disk_local}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    inuse_memory
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {hostsSearchMonitoring.inuse_memory}
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                        </ReactBootstrap.Tab>
                                        <ReactBootstrap.Tab eventKey="object-monitoring" title={t('object-monitoring')}>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left">
                                                    <h3>
                                                        both_usage_offline
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            amount
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_offline.amount !== undefined ? objectsSearchMonitoring.both_usage_offline.amount : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpus
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_offline.cpus !== undefined ? objectsSearchMonitoring.both_usage_offline.cpus : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_offline.disk_in !== undefined ? objectsSearchMonitoring.both_usage_offline.disk_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_offline.disk_out !== undefined ? objectsSearchMonitoring.both_usage_offline.disk_out : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_size
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_offline.disk_size !== undefined ? objectsSearchMonitoring.both_usage_offline.disk_size : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_offline.mem_max !== undefined ? objectsSearchMonitoring.both_usage_offline.mem_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_use
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_offline.mem_use !== undefined ? objectsSearchMonitoring.both_usage_offline.mem_use : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_offline.net_in !== undefined ? objectsSearchMonitoring.both_usage_offline.net_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_offline.net_out !== undefined ? objectsSearchMonitoring.both_usage_offline.net_out : ""}
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
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left text-normal">
                                                    <h3>
                                                        both_usage_online
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            amount
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_online.amount !== undefined ? objectsSearchMonitoring.both_usage_online.amount : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpus
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_online.cpus !== undefined ? objectsSearchMonitoring.both_usage_online.cpus : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_online.disk_in !== undefined ? objectsSearchMonitoring.both_usage_online.disk_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_online.disk_out !== undefined ? objectsSearchMonitoring.both_usage_online.disk_out : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_size
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_online.disk_size !== undefined ? objectsSearchMonitoring.both_usage_online.disk_size : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_online.mem_max !== undefined ? objectsSearchMonitoring.both_usage_online.mem_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_use
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_online.mem_use !== undefined ? objectsSearchMonitoring.both_usage_online.mem_use : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_online.net_in !== undefined ? objectsSearchMonitoring.both_usage_online.net_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_online.net_out !== undefined ? objectsSearchMonitoring.both_usage_online.net_out : ""}
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
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left text-normal">
                                                    <h3>
                                                        both_usage_total
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            amount
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_total.amount !== undefined ? objectsSearchMonitoring.both_usage_total.amount : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpus
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_total.cpus !== undefined ? objectsSearchMonitoring.both_usage_total.cpus : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_total.disk_in !== undefined ? objectsSearchMonitoring.both_usage_total.disk_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_total.disk_out !== undefined ? objectsSearchMonitoring.both_usage_total.disk_out : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_size
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_total.disk_size !== undefined ? objectsSearchMonitoring.both_usage_total.disk_size : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_total.mem_max !== undefined ? objectsSearchMonitoring.both_usage_total.mem_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_use
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_total.mem_use !== undefined ? objectsSearchMonitoring.both_usage_total.mem_use : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_total.net_in !== undefined ? objectsSearchMonitoring.both_usage_total.net_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.both_usage_total.net_out !== undefined ? objectsSearchMonitoring.both_usage_total.net_out : ""}
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
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left">
                                                    <h3>
                                                        container_usage_offline
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            amount
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_offline.amount !== undefined ? objectsSearchMonitoring.container_usage_offline.amount : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpus
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_offline.cpus !== undefined ? objectsSearchMonitoring.container_usage_offline.cpus : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_offline.disk_in !== undefined ? objectsSearchMonitoring.container_usage_offline.disk_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_offline.disk_out !== undefined ? objectsSearchMonitoring.container_usage_offline.disk_out : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_size
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_offline.disk_size !== undefined ? objectsSearchMonitoring.container_usage_offline.disk_size : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_offline.mem_max !== undefined ? objectsSearchMonitoring.container_usage_offline.mem_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_use
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_offline.mem_use !== undefined ? objectsSearchMonitoring.container_usage_offline.mem_use : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_offline.net_in !== undefined ? objectsSearchMonitoring.container_usage_offline.net_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_offline.net_out !== undefined ? objectsSearchMonitoring.container_usage_offline.net_out : ""}
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
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left text-normal">
                                                    <h3>
                                                        container_usage_online
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            amount
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_online.amount !== undefined ? objectsSearchMonitoring.container_usage_online.amount : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpus
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_online.cpus !== undefined ? objectsSearchMonitoring.container_usage_online.cpus : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_online.disk_in !== undefined ? objectsSearchMonitoring.container_usage_online.disk_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_online.disk_out !== undefined ? objectsSearchMonitoring.container_usage_online.disk_out : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_size
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_online.disk_size !== undefined ? objectsSearchMonitoring.container_usage_online.disk_size : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_online.mem_max !== undefined ? objectsSearchMonitoring.container_usage_online.mem_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_use
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_online.mem_use !== undefined ? objectsSearchMonitoring.container_usage_online.mem_use : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_online.net_in !== undefined ? objectsSearchMonitoring.container_usage_online.net_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_online.net_out !== undefined ? objectsSearchMonitoring.container_usage_online.net_out : ""}
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
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left text-normal">
                                                    <h3>
                                                        container_usage_total
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            amount
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_total.amount !== undefined ? objectsSearchMonitoring.container_usage_total.amount : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpus
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_total.cpus !== undefined ? objectsSearchMonitoring.container_usage_total.cpus : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_total.disk_in !== undefined ? objectsSearchMonitoring.container_usage_total.disk_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_total.disk_out !== undefined ? objectsSearchMonitoring.container_usage_total.disk_out : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_size
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_total.disk_size !== undefined ? objectsSearchMonitoring.container_usage_total.disk_size : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_total.mem_max !== undefined ? objectsSearchMonitoring.container_usage_total.mem_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_use
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_total.mem_use !== undefined ? objectsSearchMonitoring.container_usage_total.mem_use : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_total.net_in !== undefined ? objectsSearchMonitoring.container_usage_total.net_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.container_usage_total.net_out !== undefined ? objectsSearchMonitoring.container_usage_total.net_out : ""}
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
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left">
                                                    <h3>
                                                        vms_usage_offline
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            amount
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_offline.amount !== undefined ? objectsSearchMonitoring.vms_usage_offline.amount : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpus
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_offline.cpus !== undefined ? objectsSearchMonitoring.vms_usage_offline.cpus : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_offline.disk_in !== undefined ? objectsSearchMonitoring.vms_usage_offline.disk_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_offline.disk_out !== undefined ? objectsSearchMonitoring.vms_usage_offline.disk_out : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_size
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_offline.disk_size !== undefined ? objectsSearchMonitoring.vms_usage_offline.disk_size : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_offline.mem_max !== undefined ? objectsSearchMonitoring.vms_usage_offline.mem_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_use
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_offline.mem_use !== undefined ? objectsSearchMonitoring.vms_usage_offline.mem_use : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_offline.net_in !== undefined ? objectsSearchMonitoring.vms_usage_offline.net_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_offline.net_out !== undefined ? objectsSearchMonitoring.vms_usage_offline.net_out : ""}
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
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left text-normal">
                                                    <h3>
                                                        vms_usage_online
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            amount
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_online.amount !== undefined ? objectsSearchMonitoring.vms_usage_online.amount : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpus
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_online.cpus !== undefined ? objectsSearchMonitoring.vms_usage_online.cpus : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_online.disk_in !== undefined ? objectsSearchMonitoring.vms_usage_online.disk_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_online.disk_out !== undefined ? objectsSearchMonitoring.vms_usage_online.disk_out : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_size
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_online.disk_size !== undefined ? objectsSearchMonitoring.vms_usage_online.disk_size : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_online.mem_max !== undefined ? objectsSearchMonitoring.vms_usage_online.mem_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_use
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_online.mem_use !== undefined ? objectsSearchMonitoring.vms_usage_online.mem_use : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_online.net_in !== undefined ? objectsSearchMonitoring.vms_usage_online.net_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_online.net_out !== undefined ? objectsSearchMonitoring.vms_usage_online.net_out : ""}
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
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left text-normal">
                                                    <h3>
                                                        vms_usage_total
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(objectsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            amount
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_total.amount !== undefined ? objectsSearchMonitoring.vms_usage_total.amount : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpus
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_total.cpus !== undefined ? objectsSearchMonitoring.vms_usage_total.cpus : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_total.disk_in !== undefined ? objectsSearchMonitoring.vms_usage_total.disk_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_total.disk_out !== undefined ? objectsSearchMonitoring.vms_usage_total.disk_out : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            disk_size
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_total.disk_size !== undefined ? objectsSearchMonitoring.vms_usage_total.disk_size : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_total.mem_max !== undefined ? objectsSearchMonitoring.vms_usage_total.mem_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_use
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_total.mem_use !== undefined ? objectsSearchMonitoring.vms_usage_total.mem_use : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_in
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_total.net_in !== undefined ? objectsSearchMonitoring.vms_usage_total.net_in : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            net_out
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {objectsSearchMonitoring.vms_usage_total.net_out !== undefined ? objectsSearchMonitoring.vms_usage_total.net_out : ""}
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
                                        <ReactBootstrap.Tab eventKey="utilization-monitoring"
                                                            title={t('utilization-monitoring')}>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    instance_images
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.instance_images}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    instance_vms
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.instance_vms}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    instances
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.instances}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    max_cpus
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.max_cpus}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    max_diskspace
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.max_diskspace}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    max_memory
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.max_memory}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    object_images
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.object_images}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    object_vms
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.object_vms}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    objects
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.objects}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    utilized_cpus
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.utilized_cpus}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    utilized_diskspace
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.utilized_diskspace}
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    utilized_memory
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                    className="text-left">
                                                    {utilizationsSearchMonitoring.utilized_memory}
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                        </ReactBootstrap.Tab>
                                        <ReactBootstrap.Tab eventKey="limit-monitoring" title={t('limit-monitoring')}>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left text-normal">
                                                    <h3>
                                                        fallback
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(limitationsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            container_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.fallback.container_max !== undefined ? limitationsSearchMonitoring.fallback.container_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpu_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.fallback.cpu_max !== undefined ? limitationsSearchMonitoring.fallback.cpu_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            dsk_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.fallback.dsk_max !== undefined ? limitationsSearchMonitoring.fallback.dsk_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_owner
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.fallback.id_owner !== undefined ? limitationsSearchMonitoring.fallback.id_owner : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.fallback.mem_max !== undefined ? limitationsSearchMonitoring.fallback.mem_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            obj_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.fallback.obj_max !== undefined ? limitationsSearchMonitoring.fallback.obj_max : ""}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            vm_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.fallback.vm_max !== undefined ? limitationsSearchMonitoring.fallback.vm_max : ""}
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
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left text-normal">
                                                    <h3>
                                                        limits
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(limitationsSearchMonitoring).length > 0 ? limitationsSearchMonitoring.limits.map(limitData => {
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
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}
                                                                    className="text-left text-normal">
                                                    <h3>
                                                        syslimit
                                                    </h3>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            {
                                                Object.keys(limitationsSearchMonitoring).length > 0 ? (
                                                    <ReactBootstrap.Row>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            container_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.syslimit.container_max}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            cpu_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.syslimit.cpu_max}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            dsk_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.syslimit.dsk_max}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            id_owner
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.syslimit.id_owner}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            mem_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.syslimit.mem_max}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            obj_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.syslimit.obj_max}
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            vm_max
                                                        </ReactBootstrap.Col>
                                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}
                                                                            className="text-left">
                                                            {limitationsSearchMonitoring.syslimit.vm_max}
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
                                    </ReactBootstrap.Tabs>
                                </>
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
                <div className="bottom-footer-fix" onClick={refreshData}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </div>
            </ReactBootstrap.Container>
        </>
    );
}

export default Monitoring;

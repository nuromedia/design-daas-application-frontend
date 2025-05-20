import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

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

import Header from "../../../components/header";
import {useMediaQuery} from "react-responsive";

function Limitation() {
    const params = useParams(); // Example: {params.id}
    const [vmIDOwner, setVMIDOwner] = useState("");
    const [vmIDOwnerGet, setVMIDOwnerGet] = useState("");
    const [vmIDOwnerRemove, setVMIDOwnerRemove] = useState("");
    const [vmMax, setVMMax] = useState("");
    const [vmContainerMax, setVMContainerMax] = useState("");
    const [vmObjectMax, setVMObjectMax] = useState("");
    const [vmCPUMax, setVMCPUMax] = useState("");
    const [vmMemoryMax, setVMMemoryMax] = useState("");
    const [vmDiskMax, setVMDiskMax] = useState("");
    const [getSubmitSuccess, setGetSubmitSuccess] = useState("");
    const [getSubmitData, setGetSubmitData] = useState({});
    const [getSubmitAllSuccess, setGetSubmitAllSuccess] = useState("");
    const [getSubmitAllData, setGetSubmitAllData] = useState({});
    const [requestAlert, setRequestAlert] = useState(false);
    const [requestAlertMessage, setRequestAlertMessage] = useState(false);
    const { t, i18n } = useTranslation();

    const isNotDesktop = useMediaQuery({
        query: '(max-width: 1200px)'
    })

    const putLimitation = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/limits/put_limit', {
            id_owner: vmIDOwner,
            vm_max: vmMax,
            container_max: vmContainerMax,
            obj_max: vmObjectMax,
            cpu_max: vmCPUMax,
            mem_max: vmMemoryMax,
            dsk_max: vmDiskMax,
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

    const getLimitation = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/limits/get_limit', {
            id_owner: vmIDOwnerGet,
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
                    setGetSubmitSuccess(true);
                    setGetSubmitData(response.data.response_data)

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);
                    setGetSubmitSuccess(false);
                    setGetSubmitData({})

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
                setGetSubmitSuccess(false);
                setGetSubmitData({})

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const removeLimitation = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/limits/remove_limit', {
            id_owner: vmIDOwnerRemove,
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

    const getAllLimitation = (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT + '/limits/list_limits', {}, {
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
                    setGetSubmitAllSuccess(true);
                    setGetSubmitAllData(response.data.response_data)

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);
                }
                if (response.status === 200 && response.data.response_code !== 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(false);
                    setGetSubmitAllSuccess(false);
                    setGetSubmitAllData({})

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
                setGetSubmitAllSuccess(false);
                setGetSubmitAllData({})

                setTimeout(() => {
                    setRequestAlert(false);
                    setRequestAlertMessage(false);
                }, 2000);
            });
    }

    const changeVMIDOwner = event => {
        setVMIDOwner(event.target.value);
    };

    const changeVMMax = event => {
        setVMMax(event.target.value);
    };

    const changeVMContainerMax = event => {
        setVMContainerMax(event.target.value);
    };

    const changeVMObjectMax = event => {
        setVMObjectMax(event.target.value);
    };

    const changeVMCPUMax = event => {
        setVMCPUMax(event.target.value);
    };

    const changeVMMemoryMax = event => {
        setVMMemoryMax(event.target.value);
    };

    const changeVMDiskMax = event => {
        setVMDiskMax(event.target.value);
    };

    const changeVMIDOwnerGet = event => {
        setVMIDOwnerGet(event.target.value);
    };

    const changeVMIDOwnerRemove = event => {
        setVMIDOwnerRemove(event.target.value);
    };

    const backToDashboard = () => {
        window.location.href = "/dashboard/admin";
    };

    const putLimitationSchema = Yup.object().shape({
        id_owner: Yup.string()
            .required('Owner invalid'),
        vm_max: Yup.string()
            .required('VM Max invalid'),
        container_max: Yup.string()
            .required('Container Max invalid'),
        obj_max: Yup.string()
            .required('Object Max invalid'),
        cpu_max: Yup.string()
            .required('CPU Max invalid'),
        mem_max: Yup.string()
            .required('Memory Max invalid'),
        dsk_max: Yup.string()
            .required('Disk Max invalid'),
    });

    const getLimitationSchema = Yup.object().shape({
        id_owner: Yup.string()
            .required('Owner invalid'),
    });

    const removeLimitationSchema = Yup.object().shape({
        id_owner: Yup.string()
            .required('Owner invalid'),
    });

    const getAllLimitationSchema = Yup.object().shape({});

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="settingsOverviewAdminAssign" fluid={true}>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <div>
                            <h2>
                                {t('limitation')}
                            </h2>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Tabs defaultActiveKey="put-limits" id="all-config-limits">
                    <ReactBootstrap.Tab eventKey="put-limits" title={t('put-limits')}>
                        <Formik
                            initialValues={{
                                id_owner: '',
                                vm_max: '',
                                container_max: '',
                                obj_max: '',
                                cpu_max: '',
                                mem_max: '',
                                dsk_max: '',
                            }}
                            validationSchema={putLimitationSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={putLimitation} id="form-limit-put">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-owner">{t('vm-id-owner')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-owner" name="vm-id-owner" value={vmIDOwner} onChange={changeVMIDOwner}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-owner')}
                                            {/*<ErrorMessage name="vm-id-owner">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-limit-max">{t('limit-max')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-limit-max" name="vm-limit-max" value={vmMax} onChange={changeVMMax}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-limit-max')}
                                            {/*<ErrorMessage name="vm-limit-max">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-container-max">{t('container-max')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-container-max" name="vm-container-max" value={vmContainerMax} onChange={changeVMContainerMax}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-container-max')}
                                            {/*<ErrorMessage name="vm-container-max">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-object-max">{t('object-max')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-object-max" name="vm-object-max" value={vmObjectMax} onChange={changeVMObjectMax}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-object-max')}
                                            {/*<ErrorMessage name="vm-object-max">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-cpu-max">{t('cpu-max')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-cpu-max" name="vm-cpu-max" value={vmCPUMax} onChange={changeVMCPUMax}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-cpu-max')}
                                            {/*<ErrorMessage name="vm-cpu-max">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-memory-max">{t('memory-max')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-memory-max" name="vm-memory-max" value={vmMemoryMax} onChange={changeVMMemoryMax}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-memory-max')}
                                            {/*<ErrorMessage name="vm-memory-max">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-disk-max">{t('disk-max')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-disk-max" name="vm-disk-max" value={vmDiskMax} onChange={changeVMDiskMax}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-disk-max')}
                                            {/*<ErrorMessage name="vm-disk-max">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmIDOwner.length > 0 && vmMax.length > 0 && vmContainerMax.length > 0 && vmObjectMax.length > 0 && vmCPUMax.length > 0 && vmMemoryMax.length > 0 && vmDiskMax.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="get-limits" title={t('get-limits')}>
                        <Formik
                            initialValues={{
                                id_owner: '',
                            }}
                            validationSchema={getLimitationSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={getLimitation} id="form-limit-get">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-owner-get">{t('vm-id-owner')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-owner-get" name="vm-id-owner-get" value={vmIDOwnerGet} onChange={changeVMIDOwnerGet}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-owner-get')}
                                            {/*<ErrorMessage name="vm-id-owner-get">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmIDOwnerGet.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                        {
                            getSubmitSuccess ? (
                                <>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            id_owner
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            {getSubmitData.id_owner}
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            vm_max
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            {getSubmitData.vm_max}
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            container_max
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            {getSubmitData.container_max}
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            object_max
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            {getSubmitData.object_max}
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            cpu_max
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            {getSubmitData.cpu_max}
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            mem_max
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            {getSubmitData.mem_max}
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            disk_max
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            {getSubmitData.dsk_max}
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </>
                            ) : (
                                <></>
                            )
                        }
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="remove-limits" title={t('remove-limits')}>
                        <Formik
                            initialValues={{
                                id_owner: '',
                            }}
                            validationSchema={removeLimitationSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={removeLimitation} id="form-limit-remove">
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <label htmlFor="vm-id-owner-remove">{t('vm-id-owner')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <Field type="text" id="vm-id-owner-remove" name="vm-id-owner-remove" value={vmIDOwnerRemove} onChange={changeVMIDOwnerRemove}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-vm-id-owner-remove')}
                                            {/*<ErrorMessage name="vm-id-owner-remove">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={vmIDOwnerRemove.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Tab>
                    <ReactBootstrap.Tab eventKey="all-limits" title={t('all-limits')}>
                        <Formik
                            initialValues={{}}
                            validationSchema={getAllLimitationSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={getAllLimitation} id="form-limit-all">
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
                            getSubmitAllSuccess ? (
                                <>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <pre>
                                                {JSON.stringify(getSubmitAllData, null, 3)}
                                            </pre>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </>
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

export default Limitation;

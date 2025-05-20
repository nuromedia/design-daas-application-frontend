import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {useMediaQuery} from "react-responsive";

import {DEVELOPMENT, TEST, LIVE, USERNAME, PASSWORD, DEVELOPMENT_INTERN, TEST_INTERN, LIVE_INTERN} from "../../../constants/constants";

import Header from "../../../components/header";
import {use} from "i18next";

function SettingsUsersDetail() {
    const [userDataInformation, setUserDataInformation] = useState({});
    const [userDataInformationUpdating, setUserDataInformationUpdating] = useState({});
    const [usernameData, setUsernameData] = useState("");
    const [emailData, setEmailData] = useState("");
    const [userIDData, setUserIDData] = useState("");
    const params = useParams(); // Example: {params.id}
    const {t, i18n} = useTranslation();

    const isSmall = useMediaQuery({
        query: '(max-width: 576px)'
    })

    const goToSettingsUserBaseImage = (id) => {
        window.location.href = "/dashboard/settings/" + id;
    };

    const backToDashboard = () => {
        window.location.href = "/dashboard/settings/users";
    };

    const changeUsernameData = event => {
        setUsernameData(event.target.value);
    };
    const changeEmailData = event => {
        setEmailData(event.target.value);
    };

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        axios.get(DEVELOPMENT_INTERN + '/users', {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
        .then(response => {
            if(response.status === 200){
                console.log(response);
                {
                    response.data.filter(
                        userData => {
                            if(userData.id == params.id){
                                setUserDataInformation(userData)
                                setUserDataInformationUpdating(userData)
                                setUserIDData(userData.id)
                                setUsernameData(userData.name)
                                setEmailData(userData.email)
                                console.log(userData)
                            }
                        }
                    );
                }
            }
        })
        .catch(e => {
            console.log(e)
        });
    }, []);

    const updateUserAccount = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("userToken");
        axios.patch(DEVELOPMENT_INTERN + '/user/' + userIDData, {
            name: usernameData,
            email: emailData,
        }, {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
            .then(response => {
                if(response.status === 200){
                    console.log(response);
                    axios.get(DEVELOPMENT_INTERN + '/users', {
                        headers: {
                            Authorization: token,
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': '*',
                        },
                        //withCredentials: true,
                    })
                        .then(response => {
                            if(response.status === 200){
                                console.log(response);
                                {
                                    response.data.filter(
                                        userData => {
                                            if(userData.id == params.id){
                                                setUserDataInformation(userData)
                                                setUserDataInformationUpdating(userData)
                                                setUserIDData(userData.id)
                                                setUsernameData(userData.name)
                                                setEmailData(userData.email)
                                                console.log(userData)
                                            }
                                        }
                                    );
                                }
                            }
                        })
                        .catch(e => {
                            console.log(e)
                        });
                }
            })
            .catch(e => {
                console.log(e)
            });
    };

    const disableUserAccount = (id) => {
        const token = localStorage.getItem("userToken");
        axios.post(DEVELOPMENT_INTERN + '/user/' + id + '/disable', {}, {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
        .then(response => {
            if(response.status === 200){
                console.log(response);
                axios.get(DEVELOPMENT_INTERN + '/users', {
                    headers: {
                        Authorization: token,
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                    },
                    //withCredentials: true,
                })
                    .then(response => {
                        if(response.status === 200){
                            console.log(response);
                            {
                                response.data.filter(
                                    userData => {
                                        if(userData.id == params.id){
                                            setUserDataInformation(userData)
                                            setUserDataInformationUpdating(userData)
                                            console.log(userData)
                                        }
                                    }
                                );
                            }
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    });
            }
        })
        .catch(e => {
            console.log(e)
        });
    };

    const enableUserAccount = (id) => {
        const token = localStorage.getItem("userToken");
        axios.post(DEVELOPMENT_INTERN + '/user/' + id + '/enable', {}, {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
            .then(response => {
                if(response.status === 200){
                    console.log(response);
                    axios.get(DEVELOPMENT_INTERN + '/users', {
                        headers: {
                            Authorization: token,
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': '*',
                        },
                        //withCredentials: true,
                    })
                        .then(response => {
                            if(response.status === 200){
                                console.log(response);
                                {
                                    response.data.filter(
                                        userData => {
                                            if(userData.id == params.id){
                                                setUserDataInformation(userData)
                                                setUserDataInformationUpdating(userData)
                                                console.log(userData)
                                            }
                                        }
                                    );
                                }
                            }
                        })
                        .catch(e => {
                            console.log(e)
                        });
                }
            })
            .catch(e => {
                console.log(e)
            });
    };

    const updateUserSchema = Yup.object().shape({
        name: Yup.string()
            .email('Invalid username')
            .required('Username invalid'),
        email: Yup.string()
            .required(t('Password invalid'))
    });

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="settingsOverviewUsers">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <div>
                            <h2>
                                {t('user-management')}
                            </h2>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={6} md={6} lg={6} xl={6}>
                        <div>
                            <ul>
                                <li>
                                    <span>
                                        {t('username')}: {userDataInformation.name}
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        {t('email')}: {userDataInformation.email}
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Status: {userDataInformation.enabled ? t('active') : t('inactive')}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={6} md={6} lg={6} xl={6} className={isSmall ? "" : "text-end"}>
                        <div>
                            <ul>
                                <li>
                                    <span>
                                        {
                                            userDataInformation.enabled ? (
                                                <ReactBootstrap.Button type="submit" variant="primary" onClick={() => disableUserAccount(userDataInformation.id)}>
                                                    {t('disable')}
                                                </ReactBootstrap.Button>
                                            ) : (
                                                <ReactBootstrap.Button type="submit" variant="primary" onClick={() => enableUserAccount(userDataInformation.id)}>
                                                    {t('enable')}
                                                </ReactBootstrap.Button>
                                            )
                                        }
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                            }}
                            validationSchema={updateUserSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={updateUserAccount}>
                                    <ReactBootstrap.Row id="updating-user-data">
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <div>
                                                <label htmlFor="name">{t('username')}</label>
                                            </div>
                                            <div>
                                                <Field type="text" id="name" name="name" value={usernameData} onChange={changeUsernameData}/>
                                            </div>
                                            <div className="error-text">
                                                {t('error-name')}
                                                {/*<ErrorMessage name="username">
                                                </ErrorMessage>*/}
                                            </div>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <div>
                                                <label htmlFor="email">{t('email')}</label>
                                            </div>
                                            <div>
                                                <Field type="email" id="email" name="email" value={emailData} onChange={changeEmailData}/>
                                            </div>
                                            <div className="error-text">
                                                {t('error-password')}
                                                {/*<ErrorMessage name="password">
                                                </ErrorMessage>*/}
                                            </div>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={usernameData.length > 0 && emailData.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
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
        </>);
}

export default SettingsUsersDetail;

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import Header from '../components/header';
import Footer from '../components/footer';

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
} from "../constants/constants";

function Registration() {
    const [emailData, setEmailData] = useState("");
    const [userCode, setUserCode] = useState("");
    const [requestAlert, setRequestAlert] = useState(false);
    const [requestAlertMessage, setRequestAlertMessage] = useState(false);
    const { t, i18n } = useTranslation();

    let userToken = localStorage.getItem("role");

    const changeEmailData = event => {
        setEmailData(event.target.value);
    };
    const changeUserCode = event => {
        setUserCode(event.target.value);
    };
    const registrationUserValidation = async (event) => {
        event.preventDefault();

        axios.post(DEVELOPMENT_INTERN + '/user/validate_email', {
            email: emailData,
            registration_code: userCode,
        }, {
            headers: {
                'Authorization': localStorage.getItem('userToken'),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "*",
            },
            // withCredentials: true,
        })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setRequestAlert(true);
                    setRequestAlertMessage(true);

                    setTimeout(() => {
                        setRequestAlert(false);
                        setRequestAlertMessage(false);
                    }, 2000);

                    setTimeout(() => {
                        window.location.href = "/";
                    }, 4000);
                }
                if (response.status !== 200) {
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
    };

    const registrationUserValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('E-Mail needed')
            .required('E-Mail invalid'),
        registration_code: Yup.string()
            .required(t('Registration code invalid'))
    });


    return (
        <>
            <Header />
            <ReactBootstrap.Container id="registration">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h2>
                            {t('validate-registration')}
                        </h2>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Formik
                            initialValues={{
                                email: '',
                                registration_code: '',
                            }}
                            validationSchema={registrationUserValidationSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={registrationUserValidation}>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <label htmlFor="email">{t('email')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field type="text" id="email" name="email" value={emailData} onChange={changeEmailData}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-username')}
                                            {/*<ErrorMessage name="username">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <label htmlFor="user-code">{t('user-code')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field type="text" id="user-code" name="user-code" value={userCode} onChange={changeUserCode}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-user-code')}
                                            {/*<ErrorMessage name="user-code">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={emailData.length > 0 && userCode.length > 0 ? false : true}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Col>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Link to="/" className="link-daas-design">
                            <div>
                                {t('back-link')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className={requestAlert ? "show-alert" : "hide-alert"}>
                            <div className={requestAlertMessage ? "request-success-alert" : "request-fail-alert"}>
                                {requestAlertMessage ? t('request-successful') : t('request-failed')}
                            </div>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
            {/*<Footer />*/}
        </>
    );
};

export default Registration;

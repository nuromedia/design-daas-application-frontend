import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import {DEVELOPMENT, TEST, LIVE, USERNAME, PASSWORD, DEVELOPMENT_INTERN, TEST_INTERN, LIVE_INTERN} from "../../../constants/constants";

import Header from "../../../components/header";

function SettingsAdmins() {
    const [createUserModal, setCreateUserModal] = useState(false);
    const [getUserDataModal, setGetUserDataModal] = useState(false);
    const [deleteUserModal, setDeleteUserModal] = useState(false);
    const [userDataID, setUserDataID] = useState("");
    const [userDataEmail, setUserDataEmail] = useState("");
    const [usernameData, setUsernameData] = useState("");
    const [passwordData, setPasswordData] = useState("");
    const [fullnameData, setFullnameData] = useState("");
    const [emailData, setEmailData] = useState("");
    const [allAdmins, setAllAdmins] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        axios.get(DEVELOPMENT_INTERN + '/admins', {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
        .then(response => {
            setAllAdmins(response.data);
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        });
    }, []);
    const showCreateUserModal = () => {
        setCreateUserModal(true);
    };
    const closeCreateUserModal = () => {
        setCreateUserModal(false);
    };
    const showGetUserModal = (id, mail) => {
        setGetUserDataModal(true);
        setUserDataID(id);
        setUserDataEmail(mail);
    };
    const closeGetUserModal = () => {
        setGetUserDataModal(false);
        setUserDataID("");
        setUserDataEmail("");
    };
    const showDeleteUserModal = (id) => {
        setDeleteUserModal(true);
        setUserDataID(id);
        setUserDataEmail("");
    };
    const closeDeleteUserModal = () => {
        setDeleteUserModal(false);
        setUserDataID("");
        setUserDataEmail("");
    };

    const changeUsernameData = event => {
        setUsernameData(event.target.value);
    };
    const changePasswordData = event => {
        setPasswordData(event.target.value);
    };
    const changeFullnameData = event => {
        setFullnameData(event.target.value);
    };
    const changeEmailData = event => {
        setEmailData(event.target.value);
    };

    const goToSettingsUser = (id) => {
        window.location.href = "/dashboard/settings/admins/" + id;
    };

    const backToDashboard = () => {
        window.location.href = "/dashboard/admin";
    };

    const createUserValidation = (event) => {
        event.preventDefault();
        if (usernameData.length > 0 && passwordData.length > 0 && fullnameData.length > 0 && emailData.length > 0) {
            document.getElementsByClassName("error-text")[0].style.display = "none";
            document.getElementsByClassName("error-text")[0].classList.remove('show-error');
            document.getElementsByClassName("error-text")[1].style.display = "none";
            document.getElementsByClassName("error-text")[1].classList.remove('show-error');
            document.getElementsByClassName("error-text")[2].style.display = "none";
            document.getElementsByClassName("error-text")[2].classList.remove('show-error');
            document.getElementsByClassName("error-text")[3].style.display = "none";
            document.getElementsByClassName("error-text")[3].classList.remove('show-error');
        } else {
            document.getElementsByClassName("error-text")[0].classList.add('show-error');
            document.getElementsByClassName("error-text")[0].style.display = "block";
            document.getElementsByClassName("error-text")[1].classList.add('show-error');
            document.getElementsByClassName("error-text")[1].style.display = "block";
            document.getElementsByClassName("error-text")[2].classList.add('show-error');
            document.getElementsByClassName("error-text")[2].style.display = "block";
            document.getElementsByClassName("error-text")[3].classList.add('show-error');
            document.getElementsByClassName("error-text")[3].style.display = "block";
        }
    };

    const createUserSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username invalid'),
        password: Yup.string()
            .required(t('Password invalid')),
        fullname: Yup.string()
            .required(t('Fullname invalid')),
        email: Yup.string()
            .email('Invalid email')
            .required(t('Email invalid'))
    });

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="dashboardAdminSettingsAdmin">
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
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h4>
                            {t('admins')}
                        </h4>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div>
                            <ul>
                                {
                                    allAdmins.map(admin => {
                                        return (
                                            <li>
                                                <span>
                                                    {admin.name}
                                                </span>
                                                <span onClick={() => goToSettingsUser(admin.name)}>
                                                    <i className="fa-solid fa-gear"></i>
                                                </span>
                                                <span onClick={() => showGetUserModal(admin.name, admin.email)}>
                                                    <i className="fa-solid fa-circle-info"></i>
                                                </span>
                                                {/*<span onClick={() => showDeleteUserModal(admin.name)}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </span>*/}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
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
                    {/*<ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div className="link-daas-design" onClick={showCreateUserModal}>
                            <div>
                                {t('create-user')}
                            </div>
                        </div>
                    </ReactBootstrap.Col>*/}
                </ReactBootstrap.Row>
                <ReactBootstrap.Modal
                    show={createUserModal}
                    onHide={closeCreateUserModal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {t('create-user')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <Formik
                            initialValues={{
                                username: '',
                                password: '',
                                fullname: '',
                                email: '',
                            }}
                            validationSchema={createUserSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={createUserValidation}>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <label htmlFor="username">{t('username')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field type="text" id="username" name="username" value={usernameData} onChange={changeUsernameData}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-username')}
                                            {/*<ErrorMessage name="username">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <label htmlFor="password">{t('password')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field type="password" id="password" name="password" value={passwordData} onChange={changePasswordData}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-password')}
                                            {/*<ErrorMessage name="password">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <label htmlFor="fullname">{t('fullname')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field type="text" id="fullname" name="fullname" value={fullnameData} onChange={changeFullnameData}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-fullname')}
                                            {/*<ErrorMessage name="password">
                                            </ErrorMessage>*/}
                                        </div>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <label htmlFor="email">{t('email')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field type="text" id="email" name="email" value={emailData} onChange={changeEmailData}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-email')}
                                            {/*<ErrorMessage name="password">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                id="submit"
                                                disabled={usernameData.length > 0 && passwordData.length > 0 && fullnameData.length > 0 && emailData.length > 0 ? false : true}
                                                onClick={closeCreateUserModal}>
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
                <ReactBootstrap.Modal
                    show={getUserDataModal}
                    onHide={closeGetUserModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {userDataID} - {t('information')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                {t('email')}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                {userDataEmail}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                {t('fullname')}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                {userDataID}
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
                <ReactBootstrap.Modal
                    show={deleteUserModal}
                    onHide={closeDeleteUserModal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {userDataID} - {t('delete')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <ReactBootstrap.Button
                                    type="submit"
                                    variant="primary"
                                    onClick={closeDeleteUserModal}>
                                    {t('no')}
                                </ReactBootstrap.Button>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <ReactBootstrap.Button
                                    type="submit"
                                    variant="danger"
                                    onClick={closeDeleteUserModal}>
                                    {t('yes')}
                                </ReactBootstrap.Button>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
            </ReactBootstrap.Container>
        </>
    );
}

export default SettingsAdmins;

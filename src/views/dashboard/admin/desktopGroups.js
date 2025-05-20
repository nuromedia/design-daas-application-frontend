import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import Header from "../../../components/header";

import {DEVELOPMENT_INTERN} from "../../../constants/constants";

function DesktopGroups() {
    const [allDesktopGroups, setAllDesktopGroups] = useState([]);
    const [allUserGroups, setAllUserGroups] = useState([]);
    const [createDesktopGroupsModal, setCreateDesktopGroupsModal] = useState(false);
    const [addUserGroupDesktopGroupModal, setAddUserGroupDesktopGroupModal] = useState(false);
    const [mainDesktopGroupsDescription, setMainDesktopGroupsDescription] = useState("");
    const [subDesktopGroupsDescription, setSubDesktopGroupsDescription] = useState("");
    const [userGroupSelectedData, setUserGroupSelectedData] = useState("");
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        axios.get(DEVELOPMENT_INTERN + '/desktop_groups', {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
        .then(response => {
            setAllDesktopGroups(response.data);
        })
        .catch(e => {
            console.log(e)
        });

        axios.get(DEVELOPMENT_INTERN + '/user_groups', {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
        .then(response => {
            console.log(response.data);

            setAllUserGroups(response.data);
            setUserGroupSelectedData(response.data[0].description);

            localStorage.setItem("user-group-id", response.data[0].id);
        })
        .catch(e => {
            console.log(e)
        });
    }, []);

    const showModalCreateDesktopGroups = () => {
        setCreateDesktopGroupsModal(true);
    };
    const closeModalCreateDesktopGroups = () => {
        setCreateDesktopGroupsModal(false);
    };

    const showModalAddUserGroups = (id) => {
        setAddUserGroupDesktopGroupModal(true);
        localStorage.setItem("desktop-group-id", id);
    };
    const closeModalAddUserGroups = () => {
        setAddUserGroupDesktopGroupModal(false);
        localStorage.removeItem("desktop-group-id");
        localStorage.removeItem("user-group-id");
    };

    const closeAndSaveModalCreateDesktopGroups = () => {
        setCreateDesktopGroupsModal(false);
        setMainDesktopGroupsDescription("");
        setSubDesktopGroupsDescription("");
    };

    const changeMainDesktopGroupsDescription = event => {
        setMainDesktopGroupsDescription(event.target.value);
    };

    const changeSubDesktopGroupsDescription = event => {
        setSubDesktopGroupsDescription(event.target.value);
    };

    const changeUserGroupData = event => {
        setUserGroupSelectedData(event.target.value);
        localStorage.setItem("user-group-id", event.target.value);
    };

    const createDesktopGroupsValidation = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("userToken");
        axios.post(DEVELOPMENT_INTERN + '/desktop_group', {
            description: mainDesktopGroupsDescription,
        }, {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
            .then(response => {
                console.log(response.data);
                axios.get(DEVELOPMENT_INTERN + '/desktop_groups', {
                    headers: {
                        Authorization: token,
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                    },
                    //withCredentials: true,
                })
                .then(response => {
                    setAllDesktopGroups(response.data);
                    console.log(response);

                    setCreateDesktopGroupsModal(false);
                    setMainDesktopGroupsDescription("");
                })
                .catch(e => {
                    console.log(e)
                });
            })
            .catch(e => {
                console.log(e)
            });
    };

    const addUserGroupToDesktopGroupValidation = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("userToken");
        axios.post(DEVELOPMENT_INTERN + '/desktop_group/' + localStorage.getItem("desktop-group-id") + '/user_group/' + localStorage.getItem("user-group-id"), {}, {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
        .then(response => {
            console.log(response.data);

            setAddUserGroupDesktopGroupModal(false);
        })
        .catch(e => {
            console.log(e)
        });
    };

    const createDesktopGroupsValidationSchema = Yup.object().shape({
        description: Yup.string()
            .required('Desktop main description invalid'),
    });

    const addUserGroupToDesktopGroupValidationSchema = Yup.object().shape({});

    return (
        <>
            <Header />
            <ReactBootstrap.Container id="desktop">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <div>
                            <h2>
                                {t('desktop-groups')}
                            </h2>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        {
                            allDesktopGroups.map(desktopGroupsData => {
                                return (
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={8} lg={8} xl={8}>
                                            <div>
                                                <ul>
                                                    <li>
                                                        <span>
                                                            {desktopGroupsData.description}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-end">
                                            <div>
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <ReactBootstrap.Button type="submit" variant="primary" onClick={() => showModalAddUserGroups(desktopGroupsData.id)}>
                                                              {t('add-user-group')}
                                                            </ReactBootstrap.Button>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                )
                            })
                        }
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
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div>
                            <div className="link-daas-design" onClick={showModalCreateDesktopGroups}>
                                {/*<i className="fa-solid fa-arrow-left"></i>*/}
                                <div>
                                    {t('desktop-groups-create')}
                                </div>
                            </div>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Modal
                    show={createDesktopGroupsModal}
                    onHide={closeModalCreateDesktopGroups}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {t('desktop-groups-create')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <Formik
                            initialValues={{
                                description: '',
                            }}
                            validationSchema={createDesktopGroupsValidationSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={createDesktopGroupsValidation}>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <label htmlFor="desktop-groups-main-description">{t('desktop-groups-main-description')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field type="text" id="desktop-groups-main-description" name="desktop-groups-main-description" value={mainDesktopGroupsDescription} onChange={changeMainDesktopGroupsDescription}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-desktop-groups-main-description')}
                                            {/*<ErrorMessage name="desktop-groups-main-description">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                disabled={mainDesktopGroupsDescription.length > 0 ? false : true}
                                                //onClick={closeAndSaveModalCreateDesktopGroups}
                                            >
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
                    show={addUserGroupDesktopGroupModal}
                    onHide={closeModalAddUserGroups}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter-two"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {t('desktop-groups-add-user-group')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <Formik
                            initialValues={{}}
                            validationSchema={addUserGroupToDesktopGroupValidationSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={addUserGroupToDesktopGroupValidation}>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <label htmlFor="select-user-group">{t('select-user-group')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <select id="select-user-group" name="select-user-group" value={userGroupSelectedData} onChange={changeUserGroupData}>
                                                {
                                                    allUserGroups.map(data => {
                                                        return(
                                                            <>
                                                                <option value={data.id}>{data.description}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-select-user-group')}
                                            {/*<ErrorMessage name="select-user-group">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                disabled={userGroupSelectedData !== "" && userGroupSelectedData !== undefined ? false : true}
                                                //onClick={closeAndSaveModalCreateDesktopGroups}
                                            >
                                                {t('submit')}
                                            </ReactBootstrap.Button>
                                        </ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                </Form>
                            )}
                        </Formik>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
            </ReactBootstrap.Container>
        </>
    );
}

export default DesktopGroups;

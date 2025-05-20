import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import Header from "../../../components/header";

import {DEVELOPMENT_INTERN} from "../../../constants/constants";

function Desktops() {
    const [allDesktops, setAllDesktops] = useState([]);
    const [createDesktopModal, setCreateDesktopModal] = useState(false);
    const [mainDesktopDescription, setMainDesktopDescription] = useState("");
    const [subDesktopDescription, setSubDesktopDescription] = useState("");
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        axios.get(DEVELOPMENT_INTERN + '/desktops', {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
        .then(response => {
            setAllDesktops(response.data);
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        });
        /*axios.get(DEVELOPMENT_INTERN + '/desktop/2', {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        });*/
    }, []);

    const showModalCreateDesktop = () => {
        setCreateDesktopModal(true);
    };
    const closeModalCreateDesktop = () => {
        setCreateDesktopModal(false);
    };
    const closeAndSaveModalCreateDesktop = () => {
        setCreateDesktopModal(false);
        setMainDesktopDescription("");
        setSubDesktopDescription("");
    };

    const goToDetailView = (id) => {
        window.location.href = "/dashboard/settings/desktops/" + id;
    };

    const changeMainDesktopDescription = event => {
        setMainDesktopDescription(event.target.value);
    };

    const changeSubDesktopDescription = event => {
        setSubDesktopDescription(event.target.value);
    };

    const createDesktopValidation = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("userToken");
        axios.post(DEVELOPMENT_INTERN + '/desktop', {
            description: mainDesktopDescription,
            groups: [
                {
                    description: subDesktopDescription,
                }
            ]
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
            axios.get(DEVELOPMENT_INTERN + '/desktops', {
                headers: {
                    Authorization: token,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                },
                //withCredentials: true,
            })
            .then(response => {
                setAllDesktops(response.data);
                console.log(response);

                setCreateDesktopModal(false);
                setMainDesktopDescription("");
                setSubDesktopDescription("");
            })
            .catch(e => {
                console.log(e)
            });
        })
        .catch(e => {
            console.log(e)
        });
    };

    const createDesktopValidationSchema = Yup.object().shape({
        description: Yup.string()
            .required('Desktop main description invalid'),
        detail_description: Yup.string()
            .required('Desktop sub description invalid'),
    });

    return (
        <>
            <Header />
            <ReactBootstrap.Container id="desktop">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <div>
                            <h2>
                                {t('desktops')}
                            </h2>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        {
                            allDesktops.map(desktopData => {
                                return (
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={10} lg={10} xl={10}>
                                            <div>
                                                <ul>
                                                    <li>
                                                        <span>
                                                            {desktopData.description}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={2} lg={2} xl={2}>
                                            <div>
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <ReactBootstrap.Button type="submit" variant="primary" onClick={() => goToDetailView(desktopData.id)}>
                                                              {t('choose')}
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
                            <div className="link-daas-design" onClick={showModalCreateDesktop}>
                                {/*<i className="fa-solid fa-arrow-left"></i>*/}
                                <div>
                                    {t('desktop-create')}
                                </div>
                            </div>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Modal
                    show={createDesktopModal}
                    onHide={closeModalCreateDesktop}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {t('desktop-create')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <Formik
                            initialValues={{
                                description: '',
                                detail_description: '',
                            }}
                            validationSchema={createDesktopValidationSchema}
                            onSubmit={values => {
                                console.log(values.text);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form onSubmit={createDesktopValidation}>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <label htmlFor="desktop-main-description">{t('desktop-main-description')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field type="text" id="desktop-main-description" name="desktop-main-description" value={mainDesktopDescription} onChange={changeMainDesktopDescription}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-desktop-main-description')}
                                            {/*<ErrorMessage name="desktop-main-description">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <label htmlFor="desktop-sub-description">{t('desktop-sub-description')}</label>
                                        </ReactBootstrap.Col>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field type="text" id="desktop-sub-description" name="desktop-sub-description" value={subDesktopDescription} onChange={changeSubDesktopDescription}/>
                                        </ReactBootstrap.Col>
                                        <div className="error-text">
                                            {t('error-desktop-sub-description')}
                                            {/*<ErrorMessage name="desktop-sub-description">
                                            </ErrorMessage>*/}
                                        </div>
                                    </ReactBootstrap.Row>
                                    <ReactBootstrap.Row>
                                        <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <ReactBootstrap.Button
                                                type="submit"
                                                variant="primary"
                                                disabled={mainDesktopDescription.length > 0 && subDesktopDescription.length > 0 ? false : true}
                                                //onClick={closeAndSaveModalCreateDesktop}
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

export default Desktops;

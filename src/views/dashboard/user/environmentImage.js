import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import Header from "../../../components/header";

function EnvironmentImage() {
    const [osName, setOsName] = useState("");
    const [osModalOpen, setOsModalOpen] = useState(false);
    const [osModalDeleteOpen, setOsModalDeleteOpen] = useState(false);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        let getOSName = localStorage.getItem('operation_system') == "linux" ? "linux" : "windows";

        setOsName(getOSName);
    }, []);

    const deleteOSNameSetting = () => {
        localStorage.removeItem('operation_system');
    };

    const showModal = () => {
        setOsModalOpen(true);
    };

    const closeModal = () => {
        setOsModalOpen(false);
    };

    const showDeleteModal = () => {
        setOsModalDeleteOpen(true);
    };

    const closeDeleteModal = () => {
        setOsModalDeleteOpen(false);
    };

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="environmentImage">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <h2>
                            {t('environment')}
                        </h2>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        <div>
                            {osName == 'linux' ? t('linux') : t('windows')} - Environment
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={1} sm={1} md={1} lg={1} xl={1} className="text-center">
                        <div onClick={showModal}>
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={1} sm={1} md={1} lg={1} xl={1} className="text-center">
                        <div onClick={showDeleteModal}>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Link to="/dashboard" className="link-daas-design" onClick={deleteOSNameSetting}>
                            <div>
                                {t('back-link')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Link to="/dashboard/snapshots" className="link-daas-design">
                            <div>
                                {t('go-to-snapshots')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Link to="/dashboard/createEnvironment" className="link-daas-design">
                            <div>
                                {t('create-environment')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Modal
                    show={osModalOpen}
                    onHide={closeModal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {osName == "linux" ? t('linux') : t('windows')} - Environment - {t('information')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                xxx
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                yyy
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                ...
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                ...
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
                <ReactBootstrap.Modal
                    show={osModalDeleteOpen}
                    onHide={closeDeleteModal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {osName == "linux" ? t('linux') : t('windows')} - Environment - {t('delete')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                {t('delete-message')}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className="base-image-configurate-button" onClick={closeDeleteModal}>
                                    <ReactBootstrap.Button
                                        type="submit"
                                        variant="primary">
                                        {t('no')}
                                    </ReactBootstrap.Button>
                                </div>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className="base-image-configurate-button" onClick={closeDeleteModal}>
                                    <ReactBootstrap.Button
                                        type="submit"
                                        variant="danger">
                                        {t('yes')}
                                    </ReactBootstrap.Button>
                                </div>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
            </ReactBootstrap.Container>
        </>
    );
}

export default EnvironmentImage;

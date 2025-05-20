import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import Header from "../../../components/header";

function RunningApplicationSystem() {
    const [osName, setOsName] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mainOpen, setMainOpen] = useState(true);
    const [baseImageOpen, setBaseImageOpen] = useState(false);
    const [configOpen, setConfigOpen] = useState(false);
    const [finalOpen, setFinalOpen] = useState(false);
    const [configParameterOpen, setConfigParameterOpen] = useState(false);
    const [configInstallerOpen, setConfigInstallerOpen] = useState(false);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        let getOSName = localStorage.getItem('operation_system') == "linux" ? "linux" : "windows";

        setOsName(getOSName)
    }, []);

    const toggleSidebar = () => {
        if (sidebarOpen) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
    };

    const toggleMain = () => {
        if (mainOpen) {
            setMainOpen(false);
        } else {
            setMainOpen(true);
        }
    };

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="runningApplicationSystem" fluid={true}>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className="design-main-container">
                            <div id="design-main-container-image" className={
                                sidebarOpen && mainOpen
                                    ? ""
                                    : !sidebarOpen && mainOpen
                                        ? "is-bigger"
                                        : sidebarOpen && !mainOpen
                                            ? "is-bigger-main"
                                            : "is-bigger is-bigger-main"
                            }>
                                <div>
                                    Container - OS
                                </div>
                                <div className="design-main-container-controls design-buttons-baseImage">
                                    <div className="design-buttons-baseImage-element">
                                        <div>
                                            {t('restart-app')}
                                        </div>
                                    </div>
                                    <div className="design-buttons-baseImage-element">
                                        <div>
                                            {t('screenshot')}
                                        </div>
                                    </div>
                                    <div className="design-buttons-baseImage-element">
                                        <div>
                                            {t('attach-usb')}
                                        </div>
                                    </div>
                                    <div className="design-buttons-baseImage-element">
                                        <div>
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="design-main-container-sidebar" className={sidebarOpen ? "" : "is-close"}>
                                <div className="right-position">
                  <span onClick={toggleSidebar}>
                    <i className="fa-solid fa-bars"></i>
                  </span>
                                </div>
                                <div className="design-main-container-baseimage">
                                    <div className="design-main-container-baseimage-details">
                                        <div
                                            className={sidebarOpen ? "design-main-container-baseimage-details-table" : "design-main-container-baseimage-details-table is-close-sidebar"}>
                                            <div className="design-main-container-baseimage-details-table-headline">
                                                Configured Apps
                                            </div>
                                            <div className="design-main-container-baseimage-details-table-subheadline">
                                                MyCalculator
                                            </div>
                                            <div className="design-main-container-baseimage-details-table-subheadline">
                                                MyMail
                                            </div>
                                            <div className="design-main-container-baseimage-details-table-subheadline">
                                                MySpreadsheet
                                            </div>
                                            <div className="design-main-container-baseimage-details-table-subheadline">
                                                MySomething
                                            </div>
                                            <div className="design-main-container-baseimage-details-table-subheadline">
                                                ...
                                            </div>
                                        </div>
                                        <div
                                            className={sidebarOpen ? "design-main-container-baseimage-details-table" : "design-main-container-baseimage-details-table is-close-sidebar"}>
                                            <div className="design-main-container-baseimage-details-table-headline">
                                                Other Config
                                            </div>
                                            <div
                                                className="design-main-container-baseimage-details-table-element-title">
                                                ...:
                                            </div>
                                            <div
                                                className="design-main-container-baseimage-details-table-element-value">
                                                ...
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={mainOpen ? "design-main-container-baseimage-system" : "design-main-container-baseimage-system more-height"}>
                                        <div
                                            className={sidebarOpen ? "design-main-container-baseimage-system-table" : "design-main-container-baseimage-system-table is-close-sidebar"}>
                                            <div className="design-main-container-baseimage-system-table-headline">
                                                Connection parameters
                                            </div>
                                            <div className="design-main-container-baseimage-system-table-element-title">
                                                Connection type:
                                            </div>
                                            <div className="design-main-container-baseimage-system-table-element-value">
                                                VNC
                                            </div>
                                            <div className="design-main-container-baseimage-system-table-element-title">
                                                ...:
                                            </div>
                                            <div className="design-main-container-baseimage-system-table-element-value">
                                                ...
                                            </div>
                                        </div>
                                        <div
                                            className={sidebarOpen ? "design-main-container-baseimage-system-start-stop" : "design-main-container-baseimage-system-start-stop is-close-sidebar"}>
                                            <div className="design-buttons-baseImage-element-custom">
                                                <div>
                                                    {t('start')}
                                                </div>
                                            </div>
                                            <div className="design-buttons-baseImage-element-custom">
                                                <div>
                                                    {t('stop')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={mainOpen ? "design-second-container" : "design-second-container is-close-main"}>
                            <div className="design-second-container-menu">
                                <div className="right-position-bottom">
                  <span onClick={toggleMain}>
                    <i className="fa-solid fa-bars"></i>
                  </span>
                                </div>
                            </div>
                            <div
                                className={mainOpen ? "design-buttons-baseImage" : "design-buttons-baseImage is-close-main-button"}>
                                <div className="design-buttons-baseImage-element">
                                    <div onClick={() => setBaseImageOpen(true)}>
                                        {t('prepare-app')}
                                    </div>
                                </div>
                                <div className="design-buttons-baseImage-element">
                                    <div onClick={() => setFinalOpen(true)}>
                                        {t('run-app')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Modal
                    show={baseImageOpen}
                    onHide={() => setBaseImageOpen(false)}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {t('prepare-app')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                ...
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
                <ReactBootstrap.Modal
                    show={finalOpen}
                    onHide={() => setFinalOpen(false)}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {t('run-app')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                {t('run-message')}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className="base-image-configurate-button" onClick={() => setFinalOpen(false)}>
                                    <ReactBootstrap.Button
                                        type="submit"
                                        variant="primary">
                                        {t('no')}
                                    </ReactBootstrap.Button>
                                </div>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className="base-image-configurate-button" onClick={() => setFinalOpen(false)}>
                                    <ReactBootstrap.Button
                                        type="submit"
                                        variant="primary">
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

export default RunningApplicationSystem;

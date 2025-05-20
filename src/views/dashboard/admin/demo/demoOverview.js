import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Header from "../../../../components/header";

function DemoOverview() {
    const { t, i18n } = useTranslation();

    const chooseDemoOS = (systemNameText) => {
        if (systemNameText === 'linux') {
            window.location.href = "/dashboard/demo/linux";
        } else if (systemNameText === 'windows') {
            window.location.href = "/dashboard/demo/windows";
        } else {
            window.location.href = "/dashboard/demo/docker";
        }
    };

    const backToDashboard = () => {
        window.location.href = "/dashboard/admin";
    };

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="demoOverview">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <h2>
                            {t('demo-overview')}
                        </h2>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                        <div onClick={() => chooseDemoOS('linux')}>
                            <i className="fa-brands fa-linux fa-xl"></i>
                        </div>
                        <Link to="/dashboard/demo/linux" className="link-daas-design">
                            <div>
                                {t('linux')} <i className="fa-brands fa-linux"></i>
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                        <div onClick={() => chooseDemoOS('windows')}>
                            <i className="fa-brands fa-microsoft fa-xl"></i>
                        </div>
                        <Link to="/dashboard/demo/windows" className="link-daas-design">
                            <div>
                                {t('windows')} <i className="fa-brands fa-microsoft"></i>
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center">
                        <div onClick={() => chooseDemoOS('docker')}>
                            <i className="fa-brands fa-docker fa-xl"></i>
                        </div>
                        <Link to="/dashboard/demo/docker" className="link-daas-design">
                            <div>
                                {t('docker')} <i className="fa-brands fa-docker"></i>
                            </div>
                        </Link>
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

export default DemoOverview;

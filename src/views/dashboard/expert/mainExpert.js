import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function MainUser() {
    const { t, i18n } = useTranslation();

    const chooseEnvironmentOS = (systemNameText) => {
        localStorage.setItem('operation_system', systemNameText)

        window.location.href = "/dashboard/startEnvironment";
    };

    return (
        <>
            <ReactBootstrap.Container id="dashboardExpert">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <h2>
                            {t('overview')}
                        </h2>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4} className="text-center">
                        <div onClick={() => chooseEnvironmentOS('linux')}>
                            <i className="fa-brands fa-linux fa-xl"></i>
                        </div>
                        <Link to="/dashboard/startEnvironment" className="link-daas-design">
                            <div>
                                {t('start-environment')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4} className="text-center">
                        <div onClick={() => chooseEnvironmentOS('windows')}>
                            <i className="fa-brands fa-microsoft fa-xl"></i>
                        </div>
                        <Link to="/dashboard/startEnvironment" className="link-daas-design">
                            <div>
                                {t('start-environment')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </>
    );
}

export default MainUser;

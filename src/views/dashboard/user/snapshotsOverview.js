import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import Header from "../../../components/header";

function SnapshotsOverview() {
    const [osName, setOsName] = useState("");
    const {t, i18n} = useTranslation();

    useEffect(() => {
        let getOSName = localStorage.getItem('operation_system') == "linux" ? "linux" : "windows";

        setOsName(getOSName)
    }, []);

    const systemOverviewData = () => {
        window.location.href = "/dashboard/createDeployment";
    };

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="snapshotsOverview">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <h2>
                            {t('snapshots')}
                        </h2>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={9} sm={9} md={9} lg={9} xl={9}>
                        <div>
                            {osName == 'linux' ? t('linux') : t('windows')} - {t('snapshots')} - XX.XX.XXXX-XX:XX:XX
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={3} sm={3} md={3} lg={3} xl={3} className="text-center">
                        <ReactBootstrap.Button
                            type="submit"
                            variant="primary"
                            onClick={systemOverviewData}>
                            {t('choose')}
                        </ReactBootstrap.Button>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/environment" className="link-daas-design">
                            <div>
                                {t('back-link')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/createDeployment" className="link-daas-design">
                            <div>
                                {t('create-new-snapshots')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </>
    );
}

export default SnapshotsOverview;

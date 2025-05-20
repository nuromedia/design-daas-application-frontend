import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import {DEVELOPMENT, TEST, LIVE, USERNAME, PASSWORD, DEVELOPMENT_INTERN, TEST_INTERN, LIVE_INTERN} from "../../../constants/constants";

import Header from "../../../components/header";

function SettingsAdminsDetails() {
    const params = useParams(); // Example: {params.id}
    const [adminUserData, setAdminUserData] = useState({});
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
            if(response.status === 200){
                console.log(response.data);
                {
                    response.data.filter(
                        userAdminData => {
                            if(userAdminData.name == params.id){
                                setAdminUserData(userAdminData)
                                console.log(userAdminData)
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

    const goToSettingsUserBaseImage = (id) => {
        window.location.href = "/dashboard/settings/" + id;
    };

    const backToDashboard = () => {
        window.location.href = "/dashboard/settings/admins";
    };

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="settingsOverviewAdmins">
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
                        <div>
                            <ul>
                                <li>
                                    <span>
                                        {t('username')}: {adminUserData.name}
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        {t('email')}: {adminUserData.email}
                                    </span>
                                </li>
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
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </>
    );
}

export default SettingsAdminsDetails;

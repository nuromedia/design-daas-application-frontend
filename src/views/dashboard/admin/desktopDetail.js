import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import Header from "../../../components/header";

import {DEVELOPMENT_INTERN} from "../../../constants/constants";

function DesktopDetail() {
    const [allDesktopDetails, setAllDesktopDetails] = useState({});
    const params = useParams(); // Example: {params.id}
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        axios.get(DEVELOPMENT_INTERN + '/desktop/' + params.id, {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
        .then(response => {
            setAllDesktopDetails(response.data);
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        });
    }, []);

    return (
        <>
            <Header />
            <ReactBootstrap.Container id="desktop-details">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <div>
                            <h2>
                                {t('desktop-details')}
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
                                        {allDesktopDetails.id}.) {allDesktopDetails.description}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div>
                            <Link to="/dashboard/settings/desktops" className="link-daas-design">
                                {/*<i className="fa-solid fa-arrow-left"></i>*/}
                                <div>
                                    {t('back-link')}
                                </div>
                            </Link>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </>
    );
}

export default DesktopDetail;

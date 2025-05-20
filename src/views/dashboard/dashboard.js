import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from '../../components/header';
//import Footer from '../../components/footer';

/* Dashboard */
import MainUser from "./user/mainUser";
import MainAdmin from "./admin/mainAdmin";
import MainExpert from "./expert/mainExpert";

function Dashboard() {
  const { t, i18n } = useTranslation();

  let userToken = localStorage.getItem("role");

  useEffect(() => {
    if (!userToken) {
      window.location.href = "/";
    }
  }, [userToken]);

  return (
    <>
      {/*<Header />*/}
      {/*
        userToken == "user"
          ? <MainUser />
          : userToken == "expert"
            ? <MainExpert />
            : <MainAdmin />
      */}
      <MainUser />
      {/*<Footer />*/}
    </>
  );
}

export default Dashboard;

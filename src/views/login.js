import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import Header from '../components/header';
import Footer from '../components/footer';

import {DEVELOPMENT, TEST, LIVE, USERNAME, PASSWORD, DEVELOPMENT_INTERN, TEST_INTERN, LIVE_INTERN} from "../constants/constants";

function Login() {
  const [usernameData, setUsernameData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [expertData, setExpertData] = useState("");
  const [passwordExpertData, setPasswordExpertData] = useState("");
  const [adminData, setAdminData] = useState("");
  const [passwordAdminData, setPasswordAdminData] = useState("");
  const [isUserTabActive, setIsUserTabActive] = useState(true);
  //const [isValidData, setIsValidData] = useState(true);
  const { t, i18n } = useTranslation();

  let userToken = localStorage.getItem("role");

  const changeUsernameData = event => {
    setUsernameData(event.target.value);
  };
  const changePasswordData = event => {
    setPasswordData(event.target.value);
  };
  const changeExpertData = event => {
    setExpertData(event.target.value);
  };
  const changePasswordExpertData = event => {
    setPasswordExpertData(event.target.value);
  };
  const changeAdminData = event => {
    setAdminData(event.target.value);
  };
  const changePasswordAdminData = event => {
    setPasswordAdminData(event.target.value);
  };

  /*const servicePartnerAuthLogin = async (tokenUser) => {
    await axios.post(DEVELOPMENT + '/login?redirect=%2F', {
      username: USERNAME,
      password: PASSWORD,
    }, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*', // Specific domain: URL_SYSTEM_WITHOUT_PORT
        'Access-Control-Allow-Headers': '*', // Specific domain: URL_SYSTEM_WITHOUT_PORT
        // 'Access-Control-Allow-Credentials': false,
        //'Referer': '*', // Specific domain: URL_SYSTEM_WITHOUT_PORT
      },
      // Only available: Specific domain and CORS credentials 'true'
      // withCredentials: true,
    })
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e)
    });
  };*/

  useEffect(() => {
    if (userToken) {
      window.location.href = "/dashboard";
    }
    // servicePartnerAuthLogin();
    setIsUserTabActive(true);
  }, []);

  useEffect(() => {
    let userRole = localStorage.getItem("role")

    const authBodyRefreshToken = {
      grant_type: 'refresh_token',
      client_id: 'test-client',
      scope: userRole === 'user' ? 'user' : userRole === 'expert' ? 'expert' : 'admin',
    };
    const intervalMode = setInterval(() => {
      const tryRefreshToken = async () => {
        if (
            (localStorage.getItem('userRefreshToken' == '') ||
                localStorage.getItem('userRefreshToken' == null)) &&
            (localStorage.getItem('userToken' == '') ||
                localStorage.getItem('userToken' == null)) &&
            (localStorage.getItem('userTimeToken' == '') ||
                localStorage.getItem('userTimeToken' == null)) &&
            (localStorage.getItem('role' == '') ||
                localStorage.getItem('role' == null))
        ) {
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        } else {
          const body = Object.entries({
            ...authBodyRefreshToken,
            refresh_token: localStorage.getItem('userRefreshToken'),
          })
              .map(arr => arr.join('='))
              .join('&');
          return new Promise((resolve, reject) => {
            axios
                .post(DEVELOPMENT_INTERN + '/oauth2/user/token', body)
                .then(
                    res => {
                      resolve(res);
                      localStorage.setItem(
                          'userRefreshToken',
                          res.data.refresh_token,
                      );
                      localStorage.setItem(
                          'userToken',
                          res.data.access_token,
                      );
                      localStorage.setItem('userTimeToken', new Date().getTime());
                      localStorage.setItem('role', localStorage.getItem('role'))
                      //setTimeout(() => {
                      //window.location.href = "/dashboard";
                      //}, 1000);
                    },
                    err => {
                      reject(err);
                      localStorage.removeItem('userRefreshToken');
                      localStorage.removeItem('userToken');
                      localStorage.removeItem('userTimeToken');
                      localStorage.removeItem('role');
                      setTimeout(() => {
                        window.location.href = "/";
                      }, 1000);
                    },
                )
                .catch(err => {
                  localStorage.removeItem('userRefreshToken');
                  localStorage.removeItem('userToken');
                  localStorage.removeItem('userTimeToken');
                  localStorage.removeItem('role');
                  setTimeout(() => {
                    window.location.href = "/";
                  }, 1000);
                });
          });
        }
      };
      tryRefreshToken();
    }, 3600000);

    return () => {
      clearInterval(intervalMode);
    };
  }, []);

  /*const loginValidation = async (event) => {
    event.preventDefault();
    if (usernameData === "testuser" && passwordData === "user1234") {
      localStorage.setItem("role", "user");

      document.getElementsByClassName("error-text")[0].style.display = "none";
      document.getElementsByClassName("error-text")[0].classList.remove('show-error');
      document.getElementsByClassName("error-text")[1].style.display = "none";
      document.getElementsByClassName("error-text")[1].classList.remove('show-error');

      window.location.href = "/dashboard";
    } else if (usernameData === "testadmin" && passwordData === "admin1234") {
      localStorage.setItem("role", "admin");

      document.getElementsByClassName("error-text")[0].style.display = "none";
      document.getElementsByClassName("error-text")[0].classList.remove('show-error');
      document.getElementsByClassName("error-text")[1].style.display = "none";
      document.getElementsByClassName("error-text")[1].classList.remove('show-error');

      //mainAuth();

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    } else {
      localStorage.removeItem("role");

      document.getElementsByClassName("error-text")[0].classList.add('show-error');
      document.getElementsByClassName("error-text")[0].style.display = "block";
      document.getElementsByClassName("error-text")[1].classList.add('show-error');
      document.getElementsByClassName("error-text")[1].style.display = "block";
    }
  };*/

  const loginUserValidation = async (event) => {
    event.preventDefault();
    const url = DEVELOPMENT_INTERN + '/oauth2/user/token';
    let authData = `grant_type=password&username=${encodeURIComponent(usernameData)}&password=${encodeURIComponent(passwordData)}&client_id=test-client&scope=user`;
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    };
    axios
        .post(url, authData)
        .then(async response => {
          if(response.status === 200){
            console.log(response);

            //localStorage.setItem('userData', JSON.stringify(response.data))
            localStorage.setItem('userToken', response.data.token_type + ' ' + response.data.access_token)
            localStorage.setItem('userRefreshToken', response.data.token_type + ' ' + response.data.refresh_token)
            localStorage.setItem('userTimeToken', new Date().getTime())
            localStorage.setItem('role', 'user');

            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 1000);
          }
        })
        .catch(e => {
          console.log(e);
        })
  };

  const loginExpertValidation = async (event) => {
    event.preventDefault();
    const url = DEVELOPMENT_INTERN + '/oauth2/user/token';
    let authData = `grant_type=password&username=${encodeURIComponent(usernameData)}&password=${encodeURIComponent(passwordData)}&client_id=test-client&scope=expert`;
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    };
    axios
        .post(url, authData)
        .then(async response => {
          if(response.status === 200){
            console.log(response);

            //localStorage.setItem('userData', JSON.stringify(response.data))
            localStorage.setItem('userToken', response.data.token_type + ' ' + response.data.access_token)
            localStorage.setItem('userRefreshToken', response.data.token_type + ' ' + response.data.refresh_token)
            localStorage.setItem('userTimeToken', new Date().getTime())
            localStorage.setItem('role', 'expert');

            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 1000);
          }
        })
        .catch(e => {
          console.log(e);
        })
  };

  const loginAdminValidation = async (event) => {
    event.preventDefault();
    const url = DEVELOPMENT_INTERN + '/oauth2/user/token';
    let authData = `grant_type=password&username=${encodeURIComponent(adminData)}&password=${encodeURIComponent(passwordAdminData)}&client_id=test-client&scope=admin`;
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    };
    axios
        .post(url, authData)
        .then(async response => {
          if(response.status === 200){
            console.log(response);

            //localStorage.setItem('userData', JSON.stringify(response.data))
            localStorage.setItem('userToken', response.data.token_type + ' ' + response.data.access_token)
            localStorage.setItem('userRefreshToken', response.data.token_type + ' ' + response.data.refresh_token)
            localStorage.setItem('userTimeToken', new Date().getTime())
            localStorage.setItem('role', 'admin');

            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 1000);
          }
        })
        .catch(e => {
          console.log(e);
        })
  };

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .email('Invalid username')
      .required('Username invalid'),
    password: Yup.string()
      .required(t('Password invalid'))
  });

  const loginExpertSchema = Yup.object().shape({
    username: Yup.string()
        .email('Invalid username')
        .required('Username invalid'),
    password: Yup.string()
        .required(t('Password invalid'))
  });

  const loginAdminSchema = Yup.object().shape({
    username: Yup.string()
        .email('Invalid username')
        .required('Username invalid'),
    password: Yup.string()
        .required(t('Password invalid'))
  });

  const userTabActive = () => {
    setIsUserTabActive(true);
  }

  const adminTabActive = () => {
    setIsUserTabActive(false);
  }

  return (
    <>
      <Header />
      <ReactBootstrap.Container id="login">
        <ReactBootstrap.Row>
          <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2>
              {t('login')}
            </h2>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        <ReactBootstrap.Tabs defaultActiveKey="user">
          <ReactBootstrap.Tab eventKey="user" title={t('user')} onClick={userTabActive}>
            <Formik
                initialValues={{
                  username: '',
                  password: '',
                }}
                validationSchema={loginSchema}
                onSubmit={values => {
                  console.log(values.text);
                }}
            >
              {({ errors, touched }) => (
                  <Form onSubmit={loginUserValidation}>
                    <ReactBootstrap.Row>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <label htmlFor="username">{t('username')}</label>
                      </ReactBootstrap.Col>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Field type="text" id="username" name="username" value={usernameData} onChange={changeUsernameData}/>
                      </ReactBootstrap.Col>
                      <div className="error-text">
                        {t('error-username')}
                        {/*<ErrorMessage name="username">
                          </ErrorMessage>*/}
                      </div>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <label htmlFor="password">{t('password')}</label>
                      </ReactBootstrap.Col>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Field type="password" id="password" name="password" value={passwordData} onChange={changePasswordData}/>
                      </ReactBootstrap.Col>
                      <div className="error-text">
                        {t('error-password')}
                        {/*<ErrorMessage name="password">
                          </ErrorMessage>*/}
                      </div>
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <ReactBootstrap.Button
                            type="submit"
                            variant="primary"
                            id="submit"
                            disabled={usernameData.length > 0 && passwordData.length > 0 ? false : true}>
                          {t('submit')}
                        </ReactBootstrap.Button>
                      </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                  </Form>
              )}
            </Formik>
          </ReactBootstrap.Tab>
          {/*<ReactBootstrap.Tab eventKey="expert" title={t('expert')}>
            <Formik
                initialValues={{
                  username: '',
                  password: '',
                }}
                validationSchema={loginExpertSchema}
                onSubmit={values => {
                  console.log(values.text);
                }}
            >
              {({ errors, touched }) => (
                  <Form onSubmit={loginExpertValidation}>
                    <ReactBootstrap.Row>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <label htmlFor="expert">{t('username')}</label>
                      </ReactBootstrap.Col>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Field type="text" id="expert" name="expert" value={expertData} onChange={changeExpertData}/>
                      </ReactBootstrap.Col>
                      <div className="error-text">
                        {t('error-username')}
                      </div>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <label htmlFor="passwordExpert">{t('password')}</label>
                      </ReactBootstrap.Col>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Field type="password" id="passwordExpert" name="passwordExpert" value={passwordExpertData} onChange={changePasswordExpertData}/>
                      </ReactBootstrap.Col>
                      <div className="error-text">
                        {t('error-password')}
                      </div>
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <ReactBootstrap.Button
                            type="submit"
                            variant="primary"
                            id="submit"
                            disabled={expertData.length > 0 && passwordExpertData.length > 0 ? false : true}>
                          {t('submit')}
                        </ReactBootstrap.Button>
                      </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                  </Form>
              )}
            </Formik>
          </ReactBootstrap.Tab>*/}
          <ReactBootstrap.Tab eventKey="admin" title={t('admin')} onClick={adminTabActive}>
            <Formik
                initialValues={{
                  username: '',
                  password: '',
                }}
                validationSchema={loginAdminSchema}
                onSubmit={values => {
                  console.log(values.text);
                }}
            >
              {({ errors, touched }) => (
                  <Form onSubmit={loginAdminValidation}>
                    <ReactBootstrap.Row>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <label htmlFor="admin">{t('username')}</label>
                      </ReactBootstrap.Col>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Field type="text" id="admin" name="admin" value={adminData} onChange={changeAdminData}/>
                      </ReactBootstrap.Col>
                      <div className="error-text">
                        {t('error-admin')}
                        {/*<ErrorMessage name="username">
                          </ErrorMessage>*/}
                      </div>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <label htmlFor="passwordAdmin">{t('password')}</label>
                      </ReactBootstrap.Col>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Field type="password" id="passwordAdmin" name="passwordAdmin" value={passwordAdminData} onChange={changePasswordAdminData}/>
                      </ReactBootstrap.Col>
                      <div className="error-text">
                        {t('error-passwordAdmin')}
                        {/*<ErrorMessage name="password">
                          </ErrorMessage>*/}
                      </div>
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>
                      <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <ReactBootstrap.Button
                            type="submit"
                            variant="primary"
                            id="submit"
                            disabled={adminData.length > 0 && passwordAdminData.length > 0 ? false : true}>
                          {t('submit')}
                        </ReactBootstrap.Button>
                      </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                  </Form>
              )}
            </Formik>
          </ReactBootstrap.Tab>
        </ReactBootstrap.Tabs>
        {
          isUserTabActive ? (
            <ReactBootstrap.Row>
              <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Link to="/registration" className="link-daas-design">
                  <div>
                    {t('validate-registration')}
                  </div>
                </Link>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
          ) : (
            <></>
          )
        }
      </ReactBootstrap.Container>
      {/*<Footer />*/}
    </>
  );
};

export default Login;

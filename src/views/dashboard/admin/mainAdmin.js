import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import {
    DEVELOPMENT,
    TEST,
    LIVE,
    USERNAME,
    PASSWORD,
    DEVELOPMENT_INTERN,
    TEST_INTERN,
    LIVE_INTERN,
    URL_SYSTEM
} from "../../../constants/constants";

import Header from "../../../components/header";

function MainAdmin() {
    const [createUserModal, setCreateUserModal] = useState(false);
    const [getUserDataModal, setGetUserDataModal] = useState(false);
    const [deleteUserModal, setDeleteUserModal] = useState(false);
    const [createUpdateModal, setCreateUpdateModal] = useState(false);
    const [successfulCreateAccount, setSuccessfulCreateAccount] = useState(false);
    const [userDataID, setUserDataID] = useState("");
    const [userDataEmail, setUserDataEmail] = useState("");
    const [usernameData, setUsernameData] = useState("");
    const [passwordData, setPasswordData] = useState("");
    const [groupData, setGroupData] = useState("");
    const [emailData, setEmailData] = useState("");
    const [usernameDataAdmin, setUsernameDataAdmin] = useState("");
    const [passwordDataAdmin, setPasswordDataAdmin] = useState("");
    const [emailDataAdmin, setEmailDataAdmin] = useState("");
    const [groupDataNew, setGroupDataNew] = useState("");
    const [groupDataUpdate, setGroupDataUpdate] = useState("");
    const [selectedGroup, setSelectedGroup] = useState("0");
    const [allAdmins, setAllAdmins] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [allGroups, setAllGroups] = useState([]);
    const [selectedGroupData, setSelectedGroupData] = useState([]);
    const [selectedGroupDataID, setSelectedGroupDataID] = useState(0);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        console.log(localStorage.getItem("userData"))
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
                const newestAdminTop = response.data.reverse();
                setAllAdmins(newestAdminTop);
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            });
        axios.get(DEVELOPMENT_INTERN + '/users', {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
            .then(response => {
                const newestUsersTop = response.data.reverse();
                setAllUsers(newestUsersTop);
            })
            .catch(e => {
                console.log(e)
            });
        axios.get(DEVELOPMENT_INTERN + '/user_groups', {
            headers: {
                Authorization: token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            //withCredentials: true,
        })
            .then(response => {
                setAllGroups(response.data);
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            });
    }, []);
    const showCreateUserModal = () => {
        setCreateUserModal(true);
    };
    const closeCreateUserModal = () => {
        setCreateUserModal(false);

        setUsernameData("")
        setEmailData("")
        setSelectedGroup("0")
        setSelectedGroupData([]);
        setSelectedGroupDataID(0);

        setUsernameDataAdmin("")
        setEmailDataAdmin("")
        setPasswordDataAdmin("")
    };
    const showGetUserModal = (id, mail) => {
        setGetUserDataModal(true);
        setUserDataID(id);
        setUserDataEmail(mail);
    };
    const closeGetUserModal = () => {
        setGetUserDataModal(false);
        setUserDataID("");
        setUserDataEmail("");
    };
    const showDeleteUserModal = (id) => {
        setDeleteUserModal(true);
        setUserDataID(id);
        setUserDataEmail("");
    };
    const closeDeleteUserModal = () => {
        setDeleteUserModal(false);
        setUserDataID("");
        setUserDataEmail("");
    };
    const showCreateUpdateModal = () => {
        setCreateUpdateModal(true);
    };
    const closeCreateUpdateModal = () => {
        setCreateUpdateModal(false);

        setGroupDataNew("");
        setGroupDataUpdate("")
        setSelectedGroup("0")
    };

    const changeUsernameData = event => {
        setUsernameData(event.target.value);
    };
    const changePasswordData = event => {
        setPasswordData(event.target.value);
    };
    const changeGroupData = event => {
        setGroupData(event.target.value);
    };
    const changeEmailData = event => {
        setEmailData(event.target.value);
    };

    const changeUsernameDataAdmin = event => {
        setUsernameDataAdmin(event.target.value);
    };
    const changePasswordDataAdmin = event => {
        setPasswordDataAdmin(event.target.value);
    };
    const changeEmailDataAdmin = event => {
        setEmailDataAdmin(event.target.value);
    };

    const changeGroupDataNew = event => {
        setGroupDataNew(event.target.value);
    };

    const changeGroupDataUpdate = event => {
        setGroupDataUpdate(event.target.value);
    };

    const selectExistingGroup = e => {
        const token = localStorage.getItem("userToken");

        setSelectedGroup(e.target.value)

        console.log(typeof e.target.value)

        if (e.target.value !== "0") {
            axios.get(DEVELOPMENT_INTERN + '/user_groups', {
                headers: {
                    Authorization: token,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                },
                //withCredentials: true,
            })
                .then(response => {
                    if (response.status === 200) {
                        console.log(response.data);
                        {
                            response.data.filter(
                                userData => {
                                    if (userData.id == Number(e.target.value)) {
                                        setSelectedGroupData(userData)
                                        setSelectedGroupDataID(userData.id)
                                        setGroupDataUpdate(userData.description);
                                        console.log(userData)
                                    }
                                }
                            );
                        }
                    }
                })
                .catch(e => {
                    console.log(e)
                });
        } else {
            console.log("No request")
        }
    };

    const goToSettingsUser = (id) => {
        window.location.href = "/dashboard/admin/settings/users/" + id;
    };

    const goToSettingsAdmin = (id) => {
        window.location.href = "/dashboard/admin/settings/admins/" + id;
    };

    const goToSettingsAdminOverview = () => {
        window.location.href = "/dashboard/admin/settings/admins";
    };

    const goToSettingsUserOverview = () => {
        window.location.href = "/dashboard/admin/settings/users";
    };

    const createUserValidation = (event) => {
        event.preventDefault();

        const token = localStorage.getItem("userToken");

        if (selectedGroupDataID !== "0" || selectedGroupDataID !== 0 || selectedGroupDataID !== undefined) {
            axios.post(DEVELOPMENT_INTERN + '/user', {
                name: usernameData,
                email: emailData,
                groups: [Number(selectedGroupDataID)],
                password: passwordData,
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

                    setUsernameData("")
                    setEmailData("")
                    setPasswordData("")
                    setSelectedGroup("0")
                    setSelectedGroupData([]);
                    setSelectedGroupDataID(0);

                    closeCreateUserModal();

                    axios.get(DEVELOPMENT_INTERN + '/users', {
                        headers: {
                            Authorization: token,
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': '*',
                        },
                        //withCredentials: true,
                    })
                        .then(response => {
                            const newestUsersTop = response.data.reverse();
                            setAllUsers(newestUsersTop);
                            console.log(response)
                        })
                        .catch(e => {
                            console.log(e)
                        });
                    //document.getElementsByClassName("error-text")[0].style.display = "none";
                    //document.getElementsByClassName("error-text")[0].classList.remove('show-error');
                    //document.getElementsByClassName("error-text")[1].style.display = "none";
                    //document.getElementsByClassName("error-text")[1].classList.remove('show-error');
                    //document.getElementsByClassName("error-text")[2].style.display = "none";
                    //document.getElementsByClassName("error-text")[2].classList.remove('show-error');
                })
                .catch(e => {
                    console.log(e)
                    //document.getElementsByClassName("error-text")[0].classList.add('show-error');
                    //document.getElementsByClassName("error-text")[0].style.display = "block";
                    //document.getElementsByClassName("error-text")[1].classList.add('show-error');
                    //document.getElementsByClassName("error-text")[1].style.display = "block";
                    //document.getElementsByClassName("error-text")[2].classList.add('show-error');
                    //document.getElementsByClassName("error-text")[2].style.display = "block";
                });
        } else {
            console.log("No request")
        }
    };

    const createAdminValidation = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("userToken");
        axios.post(DEVELOPMENT_INTERN + '/admin', {
            name: usernameDataAdmin,
            email: emailDataAdmin,
            password: passwordDataAdmin,
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
                setUsernameDataAdmin("")
                setEmailDataAdmin("")
                setPasswordDataAdmin("")

                closeCreateUserModal();

                axios.get(DEVELOPMENT_INTERN + '/admins', {
                    headers: {
                        Authorization: token,
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                    },
                    //withCredentials: true,
                })
                    .then(response => {
                        const newestAdminTop = response.data.reverse();
                        setAllAdmins(newestAdminTop);
                        console.log(response)
                    })
                    .catch(e => {
                        console.log(e)
                    });
                //document.getElementsByClassName("error-text")[3].style.display = "none";
                //document.getElementsByClassName("error-text")[3].classList.remove('show-error');
                //document.getElementsByClassName("error-text")[4].style.display = "none";
                //document.getElementsByClassName("error-text")[4].classList.remove('show-error');
                //document.getElementsByClassName("error-text")[5].style.display = "none";
                //document.getElementsByClassName("error-text")[5].classList.remove('show-error');
            })
            .catch(e => {
                console.log(e)
                //document.getElementsByClassName("error-text")[3].classList.add('show-error');
                //document.getElementsByClassName("error-text")[3].style.display = "block";
                //document.getElementsByClassName("error-text")[4].classList.add('show-error');
                //document.getElementsByClassName("error-text")[4].style.display = "block";
                //document.getElementsByClassName("error-text")[5].classList.add('show-error');
                //document.getElementsByClassName("error-text")[5].style.display = "block";
            });
    };

    const createGroupValidation = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("userToken");
        axios.post(DEVELOPMENT_INTERN + '/user_group', {
            description: groupDataNew,
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
                setGroupDataNew("");
                axios.get(DEVELOPMENT_INTERN + '/user_groups', {
                    headers: {
                        Authorization: token,
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                    },
                    //withCredentials: true,
                })
                    .then(response => {
                        if (response.status === 200) {
                            setAllGroups(response.data);
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    });
                //document.getElementsByClassName("error-text")[0].style.display = "none";
                //document.getElementsByClassName("error-text")[0].classList.remove('show-error');
            })
            .catch(e => {
                console.log(e)
                //document.getElementsByClassName("error-text")[0].classList.add('show-error');
                //document.getElementsByClassName("error-text")[0].style.display = "block";
            });
    };

    const updateGroupValidation = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("userToken");

        axios.patch(DEVELOPMENT_INTERN + '/user_group/' + selectedGroupDataID, {
            description: groupDataUpdate,
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
                setGroupDataUpdate("")
                //document.getElementsByClassName("error-text")[0].style.display = "none";
                //document.getElementsByClassName("error-text")[0].classList.remove('show-error');
            })
            .catch(e => {
                console.log(e)
                //document.getElementsByClassName("error-text")[0].classList.add('show-error');
                //document.getElementsByClassName("error-text")[0].style.display = "block";
            });
    };

    /*const createUpdateValidation = (event) => {
      event.preventDefault();
      if (groupDataNew.length > 0) {
        //document.getElementsByClassName("error-text")[0].style.display = "none";
        //document.getElementsByClassName("error-text")[0].classList.remove('show-error');
        console.log("True");
      } else {
        //document.getElementsByClassName("error-text")[0].classList.add('show-error');
        //document.getElementsByClassName("error-text")[0].style.display = "block";
        console.log("False");
      }
    };*/

    const createGroupSchema = Yup.object().shape({
        description: Yup.string()
            .required('Group description invalid'),
    });

    const updateGroupSchema = Yup.object().shape({
        description: Yup.string()
            .required('Group description invalid'),
    });

    const createAdminSchema = Yup.object().shape({
        name: Yup.string()
            .required('Username invalid'),
        password: Yup.string()
            .required(t('Password invalid')),
        email: Yup.string()
            .email('Invalid email')
            .required(t('Email invalid'))
    });

    const createUserSchema = Yup.object().shape({
        name: Yup.string()
            .required('Username invalid'),
        email: Yup.string()
            .email('Invalid email')
            .required(t('Email invalid')),
        password: Yup.string()
            .required(t('Password invalid')),
        groups: Yup.string()
            .max(1, 'Only one choice possible')
            .required(t('Email invalid'))
    });

    return (
        <>
            <Header/>
            <ReactBootstrap.Container id="dashboardAdmin">
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
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={9} sm={9} md={9} lg={9} xl={9}>
                                <h4>
                                    {t('admins')}
                                </h4>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={3} sm={3} md={3} lg={3} xl={3}
                                                className="text-end text-decoration-underline all-data">
                                <h4 onClick={goToSettingsAdminOverview}>
                                    {t('all')}
                                </h4>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div>
                            <ul>
                                {
                                    allAdmins.slice(0, 3).map(admin => {
                                        return (
                                            <li>
                          <span>
                            {admin.name}
                          </span>
                                                <span onClick={() => goToSettingsAdmin(admin.name)}>
                            <i className="fa-solid fa-gear"></i>
                          </span>
                                                <span onClick={() => showGetUserModal(admin.name, admin.email)}>
                            <i className="fa-solid fa-circle-info"></i>
                          </span>
                                                {/*<span onClick={() => showDeleteUserModal(admin.name)}>
                            <i className="fa-solid fa-trash"></i>
                          </span>*/}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={9} sm={9} md={9} lg={9} xl={9}>
                                <h4>
                                    {t('users')}
                                </h4>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={3} sm={3} md={3} lg={3} xl={3}
                                                className="text-end text-decoration-underline all-data">
                                <h4 onClick={goToSettingsUserOverview}>
                                    {t('all')}
                                </h4>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div>
                            <ul>
                                {
                                    allUsers.slice(0, 3).map(user => {
                                        return (
                                            <li>
                          <span>
                            {user.name}
                          </span>
                                                <span onClick={() => goToSettingsUser(user.id)}>
                            <i className="fa-solid fa-gear"></i>
                          </span>
                                                <span onClick={() => showGetUserModal(user.name, user.email)}>
                            <i className="fa-solid fa-circle-info"></i>
                          </span>
                                                {/*<span onClick={() => showDeleteUserModal(user.id)}>
                            <i className="fa-solid fa-trash"></i>
                          </span>*/}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div className="link-daas-design" onClick={showCreateUpdateModal}>
                            <div>
                                {t('create-update-group')}
                            </div>
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div className="link-daas-design" onClick={showCreateUserModal}>
                            <div>
                                {t('create-user')}
                            </div>
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/desktops" className="link-daas-design">
                            <div>
                                {t('desktops')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/desktop-groups" className="link-daas-design">
                            <div>
                                {t('desktop-groups')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/monitoring" className="link-daas-design">
                            <div>
                                {t('monitoring')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/limitation" className="link-daas-design">
                            <div>
                                {t('limitation')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/tasks" className="link-daas-design">
                            <div>
                                {t('tasks')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/vm-environment" className="link-daas-design">
                            <div>
                                {t('vm-setup')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/node-configuration" className="link-daas-design">
                            <div>
                                {t('vm-node-dhcp')} / {t('vm-node-iptables')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/connections" className="link-daas-design">
                            <div>
                                {t('viewer-check')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    {/*<ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/authentification" className="link-daas-design">
                            <div>
                                {t('authentification')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>*/}
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/instances" className="link-daas-design">
                            <div>
                                {t('vm-instance')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/docker" className="link-daas-design">
                            <div>
                                {t('vm-docker')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/phases" className="link-daas-design">
                            <div>
                                {t('vm-phases')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/admin-assign" className="link-daas-design">
                            <div>
                                {t('admin-assign-object-app')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/apps" className="link-daas-design">
                            <div>
                                {t('app-configuration')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard/admin/settings/files" className="link-daas-design">
                            <div>
                                {t('file-configuration')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Link to="/dashboard" className="link-daas-design">
                            <div>
                                {t('dashboard-back')}
                            </div>
                        </Link>
                    </ReactBootstrap.Col>
                    {/*<ReactBootstrap.Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Link to="/dashboard/admin/demo" className="link-daas-design">
              <div>
                {t('demo')}
              </div>
            </Link>
          </ReactBootstrap.Col>*/}
                </ReactBootstrap.Row>
                <ReactBootstrap.Modal
                    show={createUpdateModal}
                    onHide={closeCreateUpdateModal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {t('create-update-group')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Tabs defaultActiveKey="create-group" id="create-update-group">
                            <ReactBootstrap.Tab eventKey="create-group" title={t('create-group')}>
                                <Formik
                                    initialValues={{
                                        description: '',
                                    }}
                                    validationSchema={createGroupSchema}
                                    onSubmit={values => {
                                        console.log(values.text);
                                    }}
                                >
                                    {({errors, touched}) => (
                                        <Form onSubmit={createGroupValidation}>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <label htmlFor="create-group-new">{t('description-group')}</label>
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Field type="text" id="create-group-new" name="create-group-new"
                                                           value={groupDataNew} onChange={changeGroupDataNew}/>
                                                </ReactBootstrap.Col>
                                                <div className="error-text">
                                                    {t('error-create-group-new')}
                                                    {/*<ErrorMessage name="create-group-new">
                            </ErrorMessage>*/}
                                                </div>
                                            </ReactBootstrap.Row>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <ReactBootstrap.Button
                                                        type="submit"
                                                        variant="primary"
                                                        id="submit"
                                                        disabled={groupDataNew.length > 0 ? false : true}
                                                        onClick={closeCreateUpdateModal}>
                                                        {t('submit')}
                                                    </ReactBootstrap.Button>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                        </Form>
                                    )}
                                </Formik>
                            </ReactBootstrap.Tab>
                            <ReactBootstrap.Tab eventKey="update-group" title={t('update-group')}>
                                <Formik
                                    initialValues={{
                                        description: '',
                                    }}
                                    validationSchema={updateGroupSchema}
                                    onSubmit={values => {
                                        console.log(values.text);
                                    }}
                                >
                                    {({errors, touched}) => (
                                        <Form onSubmit={updateGroupValidation}>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <label htmlFor="update-group-new-select">{t('group-choice')}</label>
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Field as="select" id="update-group-new-select"
                                                           name="update-group-new-select" className="select-field"
                                                           onChange={selectExistingGroup}>
                                                        <option value="0">{t('select-group')}</option>
                                                        {
                                                            allGroups.map(group => {
                                                                return (
                                                                    <option
                                                                        value={group.id}>{group.description}</option>
                                                                )
                                                            })
                                                        }
                                                    </Field>
                                                </ReactBootstrap.Col>
                                                {
                                                    selectedGroup === "0" ? (
                                                        <></>
                                                    ) : (
                                                        <>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                                <label
                                                                    htmlFor="update-group-new">{t('description-group')}</label>
                                                            </ReactBootstrap.Col>
                                                            <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                                <Field type="text" id="update-group-new"
                                                                       name="update-group-new" value={groupDataUpdate}
                                                                       onChange={changeGroupDataUpdate}/>
                                                            </ReactBootstrap.Col>
                                                            <div className="error-text">
                                                                {t('error-update-group-new')}
                                                                {/*<ErrorMessage name="update-group-new">
                                    </ErrorMessage>*/}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </ReactBootstrap.Row>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <ReactBootstrap.Button
                                                        type="submit"
                                                        variant="primary"
                                                        id="submit"
                                                        disabled={groupDataUpdate.length > 0 ? false : true}
                                                        onClick={closeCreateUserModal}>
                                                        {t('submit')}
                                                    </ReactBootstrap.Button>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                        </Form>
                                    )}
                                </Formik>
                            </ReactBootstrap.Tab>
                        </ReactBootstrap.Tabs>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
                <ReactBootstrap.Modal
                    show={createUserModal}
                    onHide={closeCreateUserModal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {t('create-user')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Tabs defaultActiveKey="user" id="user-admin-creator">
                            <ReactBootstrap.Tab eventKey="user" title={t('user')}>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        groups: '',
                                        password: '',
                                    }}
                                    validationSchema={createUserSchema}
                                    onSubmit={values => {
                                        console.log(values.text);
                                    }}
                                >
                                    {({errors, touched}) => (
                                        <Form onSubmit={createUserValidation}>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <label htmlFor="username">{t('username')}</label>
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Field type="text" id="username" name="username"
                                                           value={usernameData} onChange={changeUsernameData}/>
                                                </ReactBootstrap.Col>
                                                <div className="error-text">
                                                    {t('error-username')}
                                                    {/*<ErrorMessage name="username">
                            </ErrorMessage>*/}
                                                </div>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <label htmlFor="email">{t('email')}</label>
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Field type="text" id="email" name="email" value={emailData}
                                                           onChange={changeEmailData}/>
                                                </ReactBootstrap.Col>
                                                <div className="error-text">
                                                    {t('error-email')}
                                                    {/*<ErrorMessage name="password">
                            </ErrorMessage>*/}
                                                </div>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <label htmlFor="password">{t('password')}</label>
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Field type="password" id="password" name="password"
                                                           value={passwordData} onChange={changePasswordData}/>
                                                </ReactBootstrap.Col>
                                                <div className="error-text">
                                                    {t('error-password')}
                                                </div>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <div>
                                                        {t('password-detail-info')}
                                                    </div>
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <label htmlFor="group">{t('group')}</label>
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Field as="select" id="group" name="group" className="select-field"
                                                           onChange={selectExistingGroup}>
                                                        <option value="0">{t('select-group')}</option>
                                                        {
                                                            allGroups.map(group => {
                                                                return (
                                                                    <option
                                                                        value={group.id}>{group.description}</option>
                                                                )
                                                            })
                                                        }
                                                    </Field>
                                                    {/*<Field type="text" id="group" name="group" value={groupData} onChange={changeGroupData}/>*/}
                                                </ReactBootstrap.Col>
                                                <div className="error-text">
                                                    {t('error-group')}
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
                                                        disabled={usernameData.length > 0 && selectedGroupDataID !== 0 && emailData.length > 0 && passwordData.length > 0 ? false : true}
                                                        onClick={createUserValidation}>
                                                        {t('submit')}
                                                    </ReactBootstrap.Button>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                        </Form>
                                    )}
                                </Formik>
                            </ReactBootstrap.Tab>
                            <ReactBootstrap.Tab eventKey="admin" title={t('admin')}>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        password: '',
                                    }}
                                    validationSchema={createAdminSchema}
                                    onSubmit={values => {
                                        console.log(values.text);
                                    }}
                                >
                                    {({errors, touched}) => (
                                        <Form onSubmit={createAdminValidation}>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <label htmlFor="username-admin">{t('username')}</label>
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Field type="text" id="username-admin" name="username-admin"
                                                           value={usernameDataAdmin}
                                                           onChange={changeUsernameDataAdmin}/>
                                                </ReactBootstrap.Col>
                                                <div className="error-text">
                                                    {t('error-username-admin')}
                                                    {/*<ErrorMessage name="username">
                            </ErrorMessage>*/}
                                                </div>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <label htmlFor="email-admin">{t('email')}</label>
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Field type="text" id="email-admin" name="email-admin"
                                                           value={emailDataAdmin} onChange={changeEmailDataAdmin}/>
                                                </ReactBootstrap.Col>
                                                <div className="error-text">
                                                    {t('error-email-admin')}
                                                    {/*<ErrorMessage name="password">
                            </ErrorMessage>*/}
                                                </div>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <label htmlFor="password-admin">{t('password')}</label>
                                                </ReactBootstrap.Col>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Field type="password" id="password-admin" name="password-admin"
                                                           value={passwordDataAdmin}
                                                           onChange={changePasswordDataAdmin}/>
                                                </ReactBootstrap.Col>
                                                <div className="error-text">
                                                    {t('error-password-admin')}
                                                </div>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <div>
                                                        {t('password-detail-info')}
                                                    </div>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                            <ReactBootstrap.Row>
                                                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <ReactBootstrap.Button
                                                        type="submit"
                                                        variant="primary"
                                                        id="submit"
                                                        disabled={usernameDataAdmin.length > 0 && passwordDataAdmin.length > 0 && emailDataAdmin.length > 0 ? false : true}
                                                        //onClick={closeCreateUserModal}
                                                    >
                                                        {t('submit')}
                                                    </ReactBootstrap.Button>
                                                </ReactBootstrap.Col>
                                            </ReactBootstrap.Row>
                                        </Form>
                                    )}
                                </Formik>
                            </ReactBootstrap.Tab>
                        </ReactBootstrap.Tabs>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
                <ReactBootstrap.Modal
                    show={getUserDataModal}
                    onHide={closeGetUserModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {userDataID} - {t('information')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                {t('email')}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                {userDataEmail}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                {t('group')}
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                {t('group')} X
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
                <ReactBootstrap.Modal
                    show={deleteUserModal}
                    onHide={closeDeleteUserModal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            {userDataID} - {t('delete')}
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <ReactBootstrap.Button
                                    type="submit"
                                    variant="primary"
                                    onClick={closeDeleteUserModal}>
                                    {t('no')}
                                </ReactBootstrap.Button>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <ReactBootstrap.Button
                                    type="submit"
                                    variant="danger"
                                    onClick={closeDeleteUserModal}>
                                    {t('yes')}
                                </ReactBootstrap.Button>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Modal.Body>
                </ReactBootstrap.Modal>
            </ReactBootstrap.Container>
        </>
    );
}

export default MainAdmin;

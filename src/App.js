import React, {useEffect} from 'react';
import './i18n';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import axios from "axios";
import {DEVELOPMENT_INTERN} from "./constants/constants";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/js/all.js';

/*import 'bootstrap-icons/font/bootstrap-icons.min.css';

import 'move-js/move.min.js';

import 'scrolling-tabs-bootstrap-5/dist/scrollable-tabs.css';
import 'scrolling-tabs-bootstrap-5/dist/scrollable-tabs.js';*/

import Login from './views/login';
import Error from './views/error';
import Registration from "./views/registration";
/* Dashboard */
import Dashboard from './views/dashboard/dashboard';
/* Admin */
import MainAdmin from "./views/dashboard/admin/mainAdmin";
import Monitoring from './views/dashboard/admin/monitoring';
import CreateBaseImage from "./views/dashboard/admin/createBaseImage";
import SettingsOverview from "./views/dashboard/admin/settingsOverview";
import SettingsUsers from "./views/dashboard/admin/settingsUsers";
import SettingsUsersDetail from "./views/dashboard/admin/settingsUsersDetail";
import SettingsAdmins from "./views/dashboard/admin/settingsAdmins";
import SettingsAdminsDetails from "./views/dashboard/admin/settingsAdminsDetails";
import SettingsVirtualEnvironment from "./views/dashboard/admin/settingsVirtualEnvironment";
import SettingsNode from "./views/dashboard/admin/settingsNode";
import SettingsInstances from "./views/dashboard/admin/settingsInstances";
import SettingsConnection from "./views/dashboard/admin/settingsConnection";
import SettingsAuthentification from "./views/dashboard/admin/settingsAuthentification";
import SettingsDocker from "./views/dashboard/admin/settingsDocker";
import SettingsPhases from "./views/dashboard/admin/settingsPhase";
import Desktops from "./views/dashboard/admin/desktops";
import DesktopDetail from "./views/dashboard/admin/desktopDetail";
import DesktopGroups from "./views/dashboard/admin/desktopGroups";
import DemoOverview from "./views/dashboard/admin/demo/demoOverview";
import DemoLinux from "./views/dashboard/admin/demo/demoLinux";
import DemoWindows from "./views/dashboard/admin/demo/demoWindows";
import DemoDocker from "./views/dashboard/admin/demo/demoDocker";
import SettingsAdminAssign from "./views/dashboard/admin/settingsAdmin";
import SettingsApps from "./views/dashboard/admin/settingsApps";
import SettingsFiles from "./views/dashboard/admin/settingsFiles";
import SettingsTasks from "./views/dashboard/admin/settingsTasks";
import Limitation from "./views/dashboard/admin/limitation";
/* User */
import EnvironmentImage from './views/dashboard/user/environmentImage';
import SnapshotsOverview from "./views/dashboard/user/snapshotsOverview";
import CreateSystem from "./views/dashboard/user/createSystem";
import CreateEnvironmentBase from "./views/dashboard/user/createEnvironmentBase";
import RunningApplicationSystem from "./views/dashboard/user/runningApplicationSystem";
import StartApplication from "./views/dashboard/user/startApplication";
import ApplicationRunning from "./views/dashboard/user/applicationRunning";
import InstanceRunning from "./views/dashboard/user/instanceRunning";
import EnvironmentRunning from "./views/dashboard/user/environmentRunning";
import ConnectionRunning from "./views/dashboard/user/connectionRunning";
import SharedRunning from "./views/dashboard/user/sharedRunning";
import ObjectBaseImageSetup from "./views/dashboard/user/objectBaseImageSetup";
import ObjectEnvironmentSetup from "./views/dashboard/user/objectEnvironmentSetup";
import ObjectEnvironmentSetupEdit from "./views/dashboard/user/objectEnvironmentSetupEdit";
import ObjectStartSetup from "./views/dashboard/user/objectStartSetup";
import MonitoringUser from "./views/dashboard/user/monitoringUser";
/* Expert */
import StartEnvironment from "./views/dashboard/expert/startEnvironment";

function App() {
  let userRole = localStorage.getItem("role")

  useEffect(() => {
    const authBodyRefreshToken = {
        grant_type: 'refresh_token',
        client_id: 'test-client',
        scope: userRole === 'user' ? 'user' : 'admin',
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

  return (
    <>
      <Router>
        <Routes>
          {
            userRole === "user"
              ?
                <>
                  <Route path="/dashboard/applicationRun" element={<ApplicationRunning/>} />
                  {/*<Route path="/dashboard/instanceRun" element={<InstanceRunning/>} />*/}
                  <Route path="/dashboard/environmentRun" element={<EnvironmentRunning/>} />
                  <Route path="/dashboard/connectionRun" element={<ConnectionRunning/>} />
                  <Route path="/dashboard/sharedRun" element={<SharedRunning/>} />
                  <Route path="/dashboard/expert-mode-base-image" element={<ObjectBaseImageSetup/> } />
                  <Route path="/dashboard/expert-mode-environment" element={<ObjectEnvironmentSetup/> } />
                  <Route path="/dashboard/expert-mode-environment-edit" element={<ObjectEnvironmentSetupEdit/> } />
                  <Route path="/dashboard/expert-mode-start-system" element={<ObjectStartSetup/> } />
                  <Route path="/dashboard/monitoring" element={<MonitoringUser/> } />
                  {/*<Route path="/dashboard/startApplication" element={<StartApplication/>} />
                  <Route path="/dashboard/environment" element={<EnvironmentImage />} />
                  <Route path="/dashboard/snapshots" element={<SnapshotsOverview />} />
                  <Route path="/dashboard/createEnvironment" element={<CreateEnvironmentBase />} />
                  <Route path="/dashboard/createDeployment" element={<CreateSystem />} />
                  <Route path="/dashboard/runningApplication" element={<RunningApplicationSystem />} />
                  */}
                </>
              :
                <Route path="*" element={<Navigate replace to="/" />} />
          }
          {
            userRole === "expert"
              ?
                <>
                  <Route path="/dashboard/startEnvironment" element={<StartEnvironment/>} />
                  {/*
                  <Route path="/dashboard/environment" element={<EnvironmentImage />} />
                  <Route path="/dashboard/snapshots" element={<SnapshotsOverview />} />
                  <Route path="/dashboard/createEnvironment" element={<CreateEnvironmentBase />} />
                  <Route path="/dashboard/createDeployment" element={<CreateSystem />} />
                  <Route path="/dashboard/runningApplication" element={<RunningApplicationSystem />} />
                  */}
                </>
              :
                <Route path="*" element={<Navigate replace to="/" />} />
          }
          {
            userRole === "admin"
              ?
                <>
                  <Route path="/dashboard/admin" element={<MainAdmin />} />
                  <Route path="/dashboard/admin/monitoring" element={<Monitoring />} />
                  <Route path="/dashboard/admin/limitation" element={<Limitation />} />
                  <Route path="/dashboard/admin/tasks" element={<SettingsTasks />}/>
                  <Route path="/dashboard/admin/settings" element={<SettingsOverview />}/>
                  <Route path="/dashboard/admin/settings/vm-environment" element={<SettingsVirtualEnvironment />}/>
                  <Route path="/dashboard/admin/settings/node-configuration" element={<SettingsNode />}/>
                  <Route path="/dashboard/admin/settings/instances" element={<SettingsInstances />}/>
                  <Route path="/dashboard/admin/settings/connections" element={<SettingsConnection />}/>
                    {/*<Route path="/dashboard/admin/settings/authentification" element={<SettingsAuthentification />}/>*/}
                  <Route path="/dashboard/admin/settings/docker" element={<SettingsDocker />}/>
                  <Route path="/dashboard/admin/settings/phases" element={<SettingsPhases />}/>
                  <Route path="/dashboard/admin/settings/users" element={<SettingsUsers />}/>
                  <Route path="/dashboard/admin/settings/users/:id" element={<SettingsUsersDetail />}/>
                  <Route path="/dashboard/admin/settings/admins" element={<SettingsAdmins />}/>
                  <Route path="/dashboard/admin/settings/admins/:id" element={<SettingsAdminsDetails />}/>
                  <Route path="/dashboard/admin/settings/desktops" element={<Desktops />}/>
                  <Route path="/dashboard/admin/settings/desktops/:id" element={<DesktopDetail />}/>
                  <Route path="/dashboard/admin/settings/desktop-groups" element={<DesktopGroups />}/>
                  <Route path="/dashboard/admin/settings/admin-assign" element={<SettingsAdminAssign />}/>
                  <Route path="/dashboard/admin/settings/apps" element={<SettingsApps />}/>
                  <Route path="/dashboard/admin/settings/files" element={<SettingsFiles />}/>

                  <Route path="/dashboard/applicationRun" element={<ApplicationRunning/>} />
                  {/*<Route path="/dashboard/instanceRun" element={<InstanceRunning/>} />*/}
                  <Route path="/dashboard/environmentRun" element={<EnvironmentRunning/>} />
                  <Route path="/dashboard/connectionRun" element={<ConnectionRunning/>} />
                  <Route path="/dashboard/sharedRun" element={<SharedRunning/>} />
                  <Route path="/dashboard/expert-mode-base-image" element={<ObjectBaseImageSetup/> } />
                  <Route path="/dashboard/expert-mode-environment" element={<ObjectEnvironmentSetup/> } />
                  <Route path="/dashboard/expert-mode-environment-edit" element={<ObjectEnvironmentSetupEdit/> } />
                  <Route path="/dashboard/expert-mode-start-system" element={<ObjectStartSetup/> } />
                  {/*<Route path="/dashboard/admin/demo" element={<DemoOverview />}/>
                  <Route path="/dashboard/admin/demo/linux" element={<DemoLinux />}/>
                  <Route path="/dashboard/admin/demo/windows" element={<DemoWindows />}/>
                  <Route path="/dashboard/admin/demo/docker" element={<DemoDocker />}/>*/}
                  {/*
                  <Route path="/dashboard/environment" element={<EnvironmentImage />} />
                  <Route path="/dashboard/snapshots" element={<SnapshotsOverview />} />
                  <Route path="/dashboard/createEnvironment" element={<CreateEnvironmentBase />} />
                  <Route path="/dashboard/createDeployment" element={<CreateSystem />} />
                  <Route path="/dashboard/runningApplication" element={<RunningApplicationSystem />} />
                  */}
                </>
              :
                <Route path="*" element={<Navigate replace to="/" />} />
          }
          {
            userRole
              ?
                <Route path="/dashboard" element={<Dashboard />}/>
              :
                <Route path="*" element={<Navigate replace to="/" />} />
          }
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

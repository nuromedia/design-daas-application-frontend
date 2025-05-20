import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import NLogo from './../assets/images/logos/nuromedia.png';
import UniversityFrankfurt from './../assets/images/logos/FRA-UAS_Logo_600.jpg';
import Government from './../assets/images/logos/BMWi_Logo.svg';

function Footer(){
  const { t, i18n } = useTranslation();
  return (
    <>
      <ReactBootstrap.Container fluid={true} id="funded">
        <ReactBootstrap.Row>
          <ReactBootstrap.Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <ReactBootstrap.Row>
                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={6} xl={5}>
                  <div className="funded--images--main">
                    <div className="funded--images--container">
                      <img src={Government} alt="BMWi" className="funded--images"/>
                    </div>
                    <div className="funded--images--container">
                      <img src={UniversityFrankfurt} alt="University of Frankfurt" className="funded--images"/>
                    </div>
                    <div className="funded--images--container">
                      <img src={NLogo} alt="Nuromedia" className="funded--images"/>
                    </div>
                  </div>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col xs={12} sm={12} md={12} lg={6} xl={7}>
                  <div>
                    {t('Funded')}
                  </div>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
            </div>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </ReactBootstrap.Container>
      <ReactBootstrap.Navbar expand="lg" id="footer">
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand className="footer">
            (c) DESIGN
          </ReactBootstrap.Navbar.Brand>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
    </>
  )
}

export default Footer;

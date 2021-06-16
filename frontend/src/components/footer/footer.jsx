import React from 'react';
import './footer.css'


class Footer extends React.Component {

    render() {

        let github = 'https://open-uri.s3.us-west-1.amazonaws.com/others/GitHub-Mark.png'
        let linkedin= 'https://open-uri.s3.us-west-1.amazonaws.com/others/LinkedIn_UI-03-512.png'
        return (
            <footer className='footer' >
                <div className="footer-component-block">
                    <div className="footer-component">
                        <div className="footer-column">
                            <h3 className="footer-header">Jonathan Hill</h3>
                            <ul className="footer-list">
                                <p><a href={"https://github.com/kerapace"} className='footer-links'><img className="footer-logo"src={github}  />GitHub</a></p>
                                <p className='text-block'><img className="footer-logo" src={linkedin} /> Coming soon</p>
                                
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-header">David Ross</h3>
                            <ul className="footer-list">
                                <p><a href={"https://github.com/david-ross1"} className='footer-links'><img className="footer-logo"src={github}  />GitHub</a></p>
                                <p className="text-block"><img className="footer-logo" src={linkedin} /> Coming soon</p>

                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-header">Mohammad Ali</h3>
                            <ul className="footer-list">

                                <p><a href={"https://github.com/mataghva"} className='footer-links'><img className="footer-logo"src={github}  />GitHub</a></p>

                                
                                <p><a href={"www.linkedin.com/in/mohammad-ali-taghva-4b06b237"} className='footer-links'><img className="footer-logo" src={linkedin} />LinkedIn</a></p>

                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-header">Alfredo Ramirez Mendez</h3>
                            <ul className="footer-list">

                                <p><a href={"https://github.com/alfredorz6"} className='footer-links'><img className="footer-logo" src={github}  />GitHub</a></p>

                                
                                <p><a href={"https://www.linkedin.com/in/alfredo-alejandro-ramirez-mendez-7aa552129/"} className='footer-links'><img className="footer-logo" src={linkedin} />LinkedIn</a></p>
 
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="country-currency">
                            <p>United States   </p>
                            <p> |</p>
                            <p>   English (US) </p>
                        </div>
                        <div className="terms-of-use">
                            <p><a href={"https://github.com/david-ross1/ViewFinder"} className='footer-links'><img className="footer-logo"src={github}  />Git Repo</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
import './footer.css';

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="col-lg-12 text-center align-self-center mb-5 mt-5">
                    <div className="social-medias text-center" style={{position: "static !important"}}></div>
                </div>
            </div>
            <div className="footer-menu col-lg-12 text-center">
                <a href="/" className="d-block d-md-inline-block ">Cambios y Devoluciones</a>
                <a href="/" className="d-block d-md-inline-block ">Contacto</a>
                <a href="/" className="d-block d-md-inline-block ">Mayoristas</a>
                <div className="afip">
                    <img src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg" alt="afip"/>
                </div>
            </div>
            <div className="footer-copy col-lg-12 text-center">
                <p>
                    <small>© 2022 - Todos los derechos reservados | <a href='https://github.com/ImaaValenzuela'>ENLTD</a></small>
                </p>
            </div>
        </footer>
    )
};
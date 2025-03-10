import "../../../node_modules/bootstrap/dist/js/bootstrap.js"
export default function NavBar(){
    return(
        <nav className="bg-blue text-white d-flex justify-content-evenly align-items-center p-1" id="nav">
            <div className="w-25 d-flex align-items-center">
                <img src="/JoyLearn.png" alt="" style={{width:'38%'}}/>
            </div>
            <div className="d-flex justify-content-center gap-5">
                <a href="/" className="LinksNav">Home</a>
                <a href="/sobre" className="LinksNav">Sobre</a>
                <a href="/recursos" className="LinksNav">Recursos</a>
                <a href="/contato" className="LinksNav">Contato</a>
            </div>
            
            {/*  */}

            <button className="d-none btn bg-blue text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>

            <div className="bg-blue text-white offcanvas offcanvas-start" tabIndex={-1}  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fs-1" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex flex-column gap-2">
                        <a href="/" className="LinksNav">Home</a>
                        <a href="/sobre" className="LinksNav">Sobre</a>
                        <a href="/recursos" className="LinksNav">Recursos</a>
                        <a href="/contato" className="LinksNav">Contato</a>
                    </div>
                </div>
            </div>
            {/*  */}
        </nav> 
    )
}

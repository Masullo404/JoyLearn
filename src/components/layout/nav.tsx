export default function NavBar(){
    return(
        <nav className="bg-blue text-white d-flex justify-content-around align-items-center p-4" id="nav">
            <div className="w-25 d-flex align-items-center">
                <img src="/JoyLearn.png" alt="" className="w-25 h-25"/>
                <h1 className="m-0">JoyLearn</h1>
            </div>
            <div className="d-flex fs-4 justify-content-around LinksNav">
                <a href="/" className="text-decoration-none text-white">Home</a>
                <a href="#sobre" className="text-decoration-none text-white">Sobre</a>
                <a href="#contato" className="text-decoration-none text-white">Contato</a>
            </div>
        </nav> 
    )
}
export default function ContatoPage(){
    return(
        <main className="DPad d-flex flex-column align-items-center gap-5 Contato text-white">
            <h1 className="display-3 text-bold">Entre em contato Conosco</h1>
            <p className="fs-5">Estamos aqui para ajudar no seu aprendizado especial.</p>
            <div className="d-flex justify-content-center w-75 align-items-center">
                <form action="" className="d-flex flex-column w-50 p-5 text-black justify-content-center rounded text-white fs-5">
                    <label htmlFor="name">Seu nome completo</label>
                    <input type="text" placeholder="Digite seu nome aqui"/>
                    <br />
                    <label htmlFor="email">Seu email</label>
                    <input type="text" name="nome" placeholder="Digite seu nome aqui"/>
                    <br />
                    <label htmlFor="message">Sua mensagem</label>
                    <textarea name="message" id="" cols={20} rows={5} placeholder="Digite sua mensagem aqui"></textarea>
                    <br />
                    <button className="button">Enviar</button>
                </form>
                <img src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f" alt="" className="w-50"/>
            </div>
        </main>
    )
}
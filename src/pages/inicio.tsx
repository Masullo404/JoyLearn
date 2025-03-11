
export default function Inicio() {
  return (
    <main className="bg-light">
        
        <section className="d-flex flex-column justify-content-center align-items-center gap-5 text-white FirstSection position-relative">
          <video className="w-100 h-100 object-fit-cover" preload="metadata" autoPlay={true} loop src="https://videos.pexels.com/video-files/3209663/3209663-uhd_2560_1440_25fps.mp4">
          Your browser does not support the video tag.</video>
          <div className="position-absolute w-100 d-flex flex-column gap-5 pt-5 align-items-center text-white DPad">
            <p className="text-center display-1" >Desbloqueando o Potencial <br />de Cada Criança</p>
            <p className="w-50 top-50">O JoyLearn é um aplicativo de aprendizado revolucionário, desenvolvido para ajudar 
            crianças com necessidades especiais a compreender conceitos de forma mais rápida e fácil. 
            Com caminhos de aprendizado personalizados, lições interativas e um ambiente acolhedor, 
            o JoyLearn torna a educação divertida e acessível para todos.</p>
            <a href="/recursos"><button className="button">Veja mais</button></a>
          </div>
        </section>

        <section className="d-flex justify-content-center gap-5 align-items-center DPad SecondSection" style={{marginTop:"5rem"}}>
          <div className="d-flex flex-column w-25 align-items-center justify-content-center">
            <p className="display-4" >O JoyLearn oferece diversas funcionalidades, incluindo:</p>
            <ul>
              <li>
              Aprendizado Adaptativo – Lições personalizadas de acordo com as necessidades únicas de cada criança.
              </li>
              <li>
              Conteúdo Envolvente – Vídeos interativos, jogos e exercícios que tornam o aprendizado divertido.
              </li>
              <li>
              Métodos Validados por Especialistas – Desenvolvido com educadores, terapeutas e especialistas.
              </li>
              <li>
              Ambiente Seguro e Acolhedor – Um espaço livre de distrações, onde as crianças se sentem incentivadas e confiantes.
              </li>
            </ul>
            <a href="/recursos"><button className="button white">Ver mais</button></a>
          </div>
          <img src="https://images.unsplash.com/photo-1568585219057-9206080e6c74" alt="" className="w-50 h-100 rounded object-fit-cover"/>
        </section> 

        <section className="d-flex flex-column align-items-center justify-content-center gap-5 DPad text-white ThirdSection" style={{backgroundColor:"rgb(15, 26, 94)"}}>
          <p className="display-3">Inovação e inclusão</p>
          <p>Oferecemos suporte educacional para crianças com necessidades especiais, promovendo aprendizado e desenvolvimento inclusivo.</p>

          <div className="w-75 d-flex justify-content-center gap-3">
            <div className="w-50 d-flex flex-column align-items-center">
                <img src="https://images.unsplash.com/photo-1496239982426-9f0575444c52?auto=format&fit=crop&w=606&h=304" alt="" className="rounded w-100  " />
                <div className="bg-white p-5 text-black text-center Cards w-75 ">
                  <p className="h1">Recursos Didáticos</p>
                  <p>Disponibilizamos materiais e ferramentas educativas que facilitam o aprendizado e a interação de crianças especiais.</p>
                </div>
            </div>

            <div className="w-50 d-flex flex-column align-items-center">
                <img src="https://images.unsplash.com/photo-1694532409273-b26e2ce266ea?auto=format&fit=crop&w=606&h=304" alt="" className="rounded w-100 " />
                <div className="bg-white p-5 text-black text-center Cards w-75 ">
                  <p className="h1">Apoio Personalizado</p>
                  <p>Nossos serviços incluem atendimento individualizado, adaptando atividades para atender às necessidades de cada criança.</p>
                </div>
            </div>
          </div>
        </section>

        <section className="DPad FourthSection">
            <p className="text-bold h1 text-center">Avaliações de instrutores e responsáveis</p>
    
            <div className="d-flex justify-content-center gap-5 mt-5">
              <div className="text-center w-25">
                <p className="fs-4">”Every day, they strive to improve their service to the clients by developing 
                the right blend of technology and creativity to make sure every job done is done as efficiently as possible.”</p>
                <p className="mt-5 fs-6">- Clarice Turner</p>
              </div>

              <div className="text-center w-25">
                <p className="fs-4">”Every day, they strive to improve their service to the clients by developing the right blend of 
                technology and creativity to make sure every job done is done as efficiently as possible.”</p>
                <p className="mt-5 fs-6">- Brian Moten</p>
              </div>
            </div>
        </section>

        <section className="FooterSectionHome position-relative">
          <img src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f" alt="" className="h-100 w-100 relative object-fit-cover FixedImg" />
          <div className="text-white position-absolute">
            <p className="display-3">Dúvidas?</p>
            <p className="fs-5">CLique no botão abaixo para mais informações sobre o joyLearn.</p>
            <a href="/sobre"><button className="button">Ver Mais</button></a>
          </div>          
        </section>

    </main>
  )
}
import "../styles/homepage.scss"
import "../styles/arrow-down.scss"
export default function App() {
  return (
    <main className="bg-light">
      
      <section className="FirstSection d-flex  align-items-center justify-content-center bg-blue text-white p-5 flex-column" >
        <div className="d-flex justify-content-between flex-column align-items-center mb-5">
          <p className="display-1 w-100 text-center">JoyLearn – Desbloqueando o Potencial de Cada Criança</p>
          <p className="w-75 text-center fs-3">
          O JoyLearn é um aplicativo de aprendizado revolucionário, desenvolvido para ajudar crianças com necessidades especiais a compreender conceitos de 
          forma mais rápida e fácil. Com caminhos de aprendizado personalizados, lições interativas e um ambiente acolhedor, o JoyLearn torna a educação
          divertida e acessível para todos.
          </p>
        </div>
        <div className="arrow-down mt-5"></div>
      </section>
      
      <section className="d-flex flex-column align-items-center justify-content-center py-5">
          <p className="display-2 pt-5">Por que JoyLearn?</p>
          <p className="text-center fs-5 w-50">O JoyLearn é uma nova forma de educação, tornando o ensino um processo único ao criar um ambiente dinâmico e divertido para a aprendizagem.</p>
          <img src="https://images.pexels.com/photos/4260482/pexels-photo-4260482.jpeg"
          alt="image" className="rounded ImageSecondSection object-fit-cover mt-5" />
      </section>

      <section className="d-flex justify-cotent-center p-5 Funcionalidades align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center grow-1">
          <p className="display-3 text-center">O JoyLearn oferece diversas funcionalidades, incluindo:</p>
          <ul className="text-start w-75">
            <li>Aprendizado Adaptativo – Lições personalizadas de acordo com as necessidades únicas de cada criança.</li>
            <li>Conteúdo Envolvente – Vídeos interativos, jogos e exercícios que tornam o aprendizado divertido.</li>
            <li>Métodos Validados por Especialistas – Desenvolvido com educadores, terapeutas e especialistas.</li>
            <li>Ambiente Seguro e Acolhedor – Um espaço livre de distrações, onde as crianças se sentem incentivadas e confiantes.</li>
          </ul>
        </div>
        <img src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image"  className=" h-auto rounded object-fit-cover grow-1"/>
      </section>

      <p className="display-3 text-center mt-5 pt-5">Como JoyLearn funciona?</p>
      
      <section className="d-flex p-5 mt-5 gap-5 flex-wrap Features justify-content-center">
        <div className="text-center bg-light shadow-lg p-5 rounded d-flex flex-column align-items-center justify-content-center">
          <span>Plano de Aprendizado Personalizado – Nossa inteligência artificial avançada avalia os pontos fortes da criança e as áreas que precisam de aprimoramento.</span>
          <img src="https://img.freepik.com/free-photo/still-life-colorful-overloaded-bullet-journal_23-2150168650.jpg"
          alt="image" className="rounded pt-4"/>
        </div>
        
        <div className="text-center bg-light shadow-lg p-5 rounded d-flex flex-column align-items-center justify-content-center">
          <span>Lições Interativas – Uma combinação de elementos visuais divertidos, exercícios práticos e conteúdo gamificado.</span>
          <img src="https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg"
          alt="image" className="rounded pt-4"/>
        </div>
        
        <div className="text-center bg-light shadow-lg p-5 rounded d-flex flex-column align-items-center justify-content-center">
          <span>Acompanhamento de Progresso – Pais e professores podem monitorar o desenvolvimento da aprendizagem com insights detalhados.</span>
          <img src="https://img.freepik.com/free-photo/people-working-elegant-cozy-office-space_23-2149548797.jpg"
          alt="image" className="rounded pt-4"/>
        </div>
      </section>

      <section className="d-flex ComunidadeSection">
        <img src="https://plus.unsplash.com/premium_photo-1663099231979-8783a39dfad0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29sJTIwY29tbXVuaXR5fGVufDB8fDB8fHww"
        alt="image" className=" h-100 object-fit-cover Image" />
        <div className="bg-yellow  fs-5 d-flex flex-column justify-content-center align-items-center text-white">
          <span className="h2">Entre na nossa comunidade digital!</span> <br />
          <p className="text-center px-5 w-75">
          Dê ao seu filho as ferramentas necessárias para o sucesso. Entre em contato conosco hoje mesmo e descubra a alegria de aprender como nunca antes!
          </p>
          <button className="Contact-btn p-2 rounded">Contate-nos</button>
        </div>
      </section>

      <section className="p-5 bg-light text-center">
        <p className="h1">Avaliações</p>
        <div className="d-flex p-5 fs-5 flex-wrap Avaliacoes gap-5">
          <div className="bg-white rounded shadow p-5 d-flex flex-column justify-content-center align-items-center">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hlcnMlMjBmYWNlfGVufDB8fDB8fHww" 
            alt="" className="ProfileImage"/>
            <div className="d-flex pt-5 justify-content-center stars">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <span className="h3 pt-5">Alexa S. – Psicopedagoga</span>
            <p className="fs-6 w-100">"Como educadora especializada no ensino para crianças com necessidades especiais, sempre busco ferramentas que realmente façam a diferença. 
            Esse aplicativo é incrível! Ele traz atividades interativas que se adaptam ao ritmo de aprendizado de cada criança, 
            promovendo autonomia e engajamento. A interface intuitiva e os recursos visuais tornam o ensino mais acessível e motivador."</p>
          </div>
          <div className="bg-white rounded shadow p-5 d-flex flex-column justify-content-center align-items-center">
            <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhY2hlcnMlMjBmYWNlfGVufDB8fDB8fHww" 
            alt="" className="ProfileImage"/>
            <div className="d-flex pt-5 justify-content-center stars">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <span className="h3 pt-5"> Chris M. – Mãe de uma criança com TEA (Transtorno do Espectro Autista)</span>
            <p className="fs-6 w-100">"Minha filha sempre teve dificuldade em manter o foco em atividades tradicionais, mas esse app mudou tudo! 
            Ela se diverte enquanto aprende, e a personalização das tarefas ajuda a evitar frustrações. Percebi avanços na comunicação e na 
            interação dela com o mundo ao redor. É uma ferramenta indispensável para o nosso dia a dia!"</p>
          </div>
          <div className="bg-white rounded shadow p-5 d-flex flex-column justify-content-center align-items-center">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHx8fDA%3D" 
            alt="" className="ProfileImage"/>
            <div className="d-flex pt-5 justify-content-center stars">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <span className="h3 pt-5"> Terry L. – Terapeuta Ocupacional</span>
            <p className="fs-6 w-100">"Trabalho com crianças com TEA, TDAH e Síndrome de Down há anos, e raramente vejo um aplicativo tão bem pensado. 
            Ele não apenas ensina, mas também incentiva habilidades sociais e emocionais. O design adaptável e as recompensas 
            visuais são ótimos para manter as crianças engajadas. Recomendo fortemente para pais, professores e terapeutas!"</p>
          </div>
        </div>
      </section>
      
      {/*  */}

      <section className="text-center p-5 bg-second text-white" id="sobre">
                <p className="display-1">Sobre JoyLearn</p>
                <div className="d-flex justify-content-center">
                    <p className="w-75 fs-5">No JoyLearn, acreditamos que toda criança merece a oportunidade de aprender da maneira que melhor
                    funciona para ela. Nossa missão é criar uma plataforma de aprendizado inclusiva, envolvente e eficaz, ajudando crianças
                    com necessidades especiais a desbloquear todo o seu potencial. Somos apaixonados por reduzir as barreiras do aprendizado
                    e por capacitar as crianças a desenvolver confiança, independência e amor pelo conhecimento.</p>
                </div>
                <div className="d-flex w-100 justify-content-center gap-5 p-5 align-items-center">
                    <img src="https://skyblue-shark-646086.hostingersite.com/wp-content/uploads/2025/02/business-strategy-success-target-goals-1024x683.jpg"
                    alt="image" className="rounded"/>
                    <img src="https://skyblue-shark-646086.hostingersite.com/wp-content/uploads/2025/02/group-multinational-busy-people-working-office-1-1024x683.jpg"
                    alt="image" className="rounded"/>
                </div>
            </section>


            <section className="d-flex p-5 bg-light gap-5 Futuro">
                <div className="text-center align-content-center">
                    <p className="display-2">Nossa história</p>
                    <p className="text-center">
                      Nós imaginamos um mundo onde o aprendizado seja verdadeiramente inclusivo, onde cada criança — independentemente 
                      de seus desafios de aprendizagem — tenha acesso a uma educação de qualidade que se adapte às suas necessidades. 
                      À medida que continuamos a crescer, permanecemos comprometidos em aprimorar nossa plataforma, incorporando as pesquisas 
                      mais recentes e fomentando uma comunidade de apoio composta por alunos, pais e educadores.
                    </p>
                </div>
                <img src="https://images.pexels.com/photos/5428148/pexels-photo-5428148.jpeg" 
                alt="image" className=" rounded object-fit-cover" />
            </section>
            

            <section className="d-flex p-5 gap-5 Visao">
                <img src="https://images.pexels.com/photos/8466704/pexels-photo-8466704.jpeg"
                alt="mulher ensinando em sala de aula" className=" img-fluid rounded object-fit-cover"/>
                <div className="bg-light p-5 align-content-center text-center">
                    <p className="display-2">Nossa visão para o futuro</p>
                    <p className="">
                      Nós imaginamos um mundo onde o aprendizado seja verdadeiramente inclusivo, onde cada criança — independentemente 
                      de seus desafios de aprendizagem — tenha acesso a uma educação de qualidade que se adapte às suas necessidades. 
                      À medida que continuamos a crescer, seguimos comprometidos em aprimorar nossa plataforma, incorporando as pesquisas 
                      mais recentes e promovendo uma comunidade de apoio para alunos, pais e educadores.
                    </p>
                </div>
            </section>

              
            {/*  */}

            <main className="p-5 d-flex justify-content-center gap-5 fs-3 bg-second" id="contato">
                <div className=" align-content-center rounded p-5 text-white bg-second">
                    <p className="h1">Get in Touch With Us</p>
                    <p>Have a question, need assistance, or just want to say hello? We’re here to help! Whether you’re looking for more information,
                    have a specific request, or want to provide feedback, we’d love to hear from you. Fill out the form below, and our team will
                    get back to you as soon as possible. You can also reach us through the contact details provided.</p>
                </div>
                <div className=" align-content-center bg-second text-white  p-5 d-flex flex-column justify-content-center align-items-center   ">
                    <form>
                        <label htmlFor="">Nome</label> <br />
                        <input type="text" className="w-100" /> <br />
                        <label htmlFor="">Email</label> <br />
                        <input type="text" className="w-100" /> <br />
                        <label htmlFor="">Mensagem</label> <br />
                        <textarea name="" id="" cols={40} rows={4}></textarea> <br />
                        <button type="submit" className="button rounded">Enviar</button>
                    </form>
                </div>
            </main>
    </main>
  )
}
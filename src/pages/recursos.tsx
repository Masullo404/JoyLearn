export default function RecursosPage(){
    return(
        <main>
            <section className="DPad d-flex flex-column align-items-center RecursosFirstSection text-white">
                <p className="display-3 text-bold px-3">Recursos Educacionais Inclusivos</p>
                <p className="fs-5 px-3">Oferecemos ferramentas para apoiar crianças com necessidades especiais em seu aprendizado.</p>
                <div className="d-flex justify-content-center gap-5 mt-5 p-5">
                    <img src="https://images.unsplash.com/photo-1653412442323-6dc7d73531bf" alt="" className="w-50 object-fit-cover" />
                    <div>
                        <p className="text-bold fs-2">Material Didático Adaptado</p>
                        <p>Recursos adaptados para facilitar o aprendizado de crianças com dificuldades cognitivas.</p>
                        <br />
                        <p className="text-bold fs-2">Atividades Interativas e Lúdicas</p>
                        <p>Desenvolva habilidades através de jogos educativos e interativos.</p>
                        <br />
                        <p className="text-bold fs-2">Suporte Personalizado</p>
                        <p>Apoio individualizado para atender às necessidades específicas de cada criança.</p>
                    </div>
                </div>
            </section>

            <section className="d-flex flex-column align-items-center DPad">
                <p className="display-1">Galeria JoyLearn</p>
                <p className="fs-5 ps-2">Explore recursos visuais para apoiar a educação especial infantil.</p>
                <div className="Galeria w-75 p-5 justify-content-center">
                    <img src="https://images.unsplash.com/photo-1588075592405-d3d4f0846961?auto=format&fit=crop&w=656&h=649" alt=""  />
                    <img src="https://images.unsplash.com/photo-1597933471507-1ca5765185d8?auto=format&fit=crop&w=656&h=649" alt="" />
                    <img src="https://images.unsplash.com/photo-1613151096599-b234757eb4d2?auto=format&fit=crop&w=656&h=649" alt="" />
                    <img src="https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?auto=format&fit=crop&w=656&h=649" alt="" />
                    <img src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&w=656&h=649" alt="" />
                    <img src="https://images.unsplash.com/photo-1612117189122-6b065b74f4bd?auto=format&fit=crop&w=656&h=649" alt="" />
                </div>
            </section>

            <section className="FAQ d-flex justify-content-center DPad gap-5 text-white px-5">
                <div className="d-flex justify-content-center w-75">

                    <div className="d-flex flex-column justify-content-center align-items-center w-50  FaqMain">
                        <p className="text-bold fs-1">Perguntas frequentes sobre JoyLearn</p>
                        <div className="mt-5">
                            <p className="h2 text-bold">Os pais e professores podem acompanhar o progresso dos alunos na plataforma?</p>
                            <p className="fs-5">Sim, o JoyLearn oferece um painel de acompanhamento que 
                            permite que pais e professores monitorem o desenvolvimento 
                            dos alunos. Relatórios detalhados e insights personalizados 
                            ajudam a identificar avanços e áreas que precisam de mais atenção, 
                            promovendo um aprendizado mais eficiente e direcionado.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-start w-50 h-50">
                        <div>
                            <p className="h3 text-bold">O que é o JoyLearn e como ele auxilia na educação especial?</p>
                            <p className="fs-6">O JoyLearn é um aplicativo desenvolvido para apoiar a educação especial, 
                            proporcionando um ambiente de aprendizado inclusivo e adaptável às necessidades
                            de cada aluno. Ele utiliza tecnologia interativa, atividades personalizadas e 
                            acompanhamento contínuo para estimular o desenvolvimento cognitivo, motor e social.!</p>
                        </div>
                        <div className="py-5">
                            <p className="h3 text-bold">Quais recursos o JoyLearn oferece para acompanhar o desenvolvimento dos alunos?</p>
                            <p className="fs-6">O JoyLearn conta com avaliações periódicas, relatórios de progresso,
                            atividades adaptativas e suporte para múltiplas formas de aprendizado,
                            incluindo jogos educativos, comunicação alternativa e estímulos sensoriais.
                            Essas ferramentas permitem que educadores e familiares acompanhem a evolução
                            do aluno de forma detalhada.</p>
                        </div>
                        <div>
                            <p className="h3 text-bold">O JoyLearn pode ser personalizado para as necessidades específicas de cada estudante?</p>
                            <p className="fs-6">Sim! O JoyLearn permite a personalização do conteúdo de acordo com as habilidades e dificuldades 
                            de cada aluno. Professores e responsáveis podem ajustar atividades, acompanhar o desempenho e 
                            adaptar a plataforma para atender melhor às necessidades individuais.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
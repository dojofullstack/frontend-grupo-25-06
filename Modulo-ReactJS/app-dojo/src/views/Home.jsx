import Footer from "../components/Footer"
import Header from "../components/Header"



const Home = () => {

    const data = {
        titleArticle: "Juegue temporanda navidad",
        imageJuguete: "https://oechsle.vteximg.com.br/arquivos/ids/11225913-1000-1000/image-b06101cb3e814ec3b3f13b0d7d8074df.jpg?v=637982042583800000"
    }

    return (
        <>
            <Header props={data} />

            <main>

                <section>
                    <h2>Articulo Autos Jueguetes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus aspernatur quod non, molestiae enim animi consectetur commodi aliquam alias odit hic qui a nemo, aperiam neque labore perferendis illo.
                    </p>
                </section>
                <section>
                    <h2>Articulo Autos Jueguetes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus aspernatur quod non, molestiae enim animi consectetur commodi aliquam alias odit hic qui a nemo, aperiam neque labore perferendis illo.
                    </p>
                </section>

            </main>


            <Footer/>
        
        </>
    )
}



export default Home;
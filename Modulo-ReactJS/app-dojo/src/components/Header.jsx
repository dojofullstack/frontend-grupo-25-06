


const Header = ({props}) => {
    
    console.log(props.titleArticle);
    console.log(props.imageJuguete);


    return (
        <>
            <header>
                <img height="80px" src={props.imageJuguete} alt="" />
                <input type="text" placeholder="buscar articulos" />
                <h3>{props.titleArticle}</h3>
                {/* <p>{props.props}</p> */}
            </header>
        </>
    )
}



export default Header;
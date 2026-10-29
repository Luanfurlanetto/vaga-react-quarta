function Hero(props) {
    return (
        <section className="hero">
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
       
      </section>
    )
}

export default Hero
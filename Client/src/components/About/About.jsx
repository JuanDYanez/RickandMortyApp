import s from './About.module.css'

const About = () => {
  return (
    <div className={s.Contenedor}>
      <img className={s.imgJD} src="./src/assets/img/JuanDYanez.jpg" alt="" />
      <div className={s.infoJD}>
        <h1>{"<Juan D Yanez/>"}</h1>
        <p>Este soy yo</p>
      </div>
    </div>
  );
}

export default About;

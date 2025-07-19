import styles from './HeroStyles.module.css';
import pic from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import MYCV from '../../assets/CV Farah azizii.pdf';
import MYCV2 from '../../assets/new cv.pdf';
import { useTheme } from '../../common/ThemeContext';

export default function Hero() {
    const {theme,toggleTheme}=useTheme();
    const themeIcon =theme==='light' ? sun : moon;
    const githubIcon =theme==='light' ? githubLight : githubDark;
    const linkedinIcon =theme==='light' ? linkedinLight : linkedinDark;
    
  return (
    <section id="hero" className={styles.container}>
     
      <div className={styles.info}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={pic} alt="my pic" />
        <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
      </div>
        <h1>Azizi Farah</h1>
        <span>
          <a href="https://github.com/16farahaz">
            <img src={githubIcon} alt="github" />
          </a>
          <a href="https://linkedin.com/in/azizi-farah">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </span>
        <p className={styles.description}>
        Professional and Motivated Software Engineer.
        A highly skilled and dedicated web developer. 
        Experienced in a wide range of development projects, 
        Known for being dynamic, curious, and autonomous, 
        with a passion for learning and staying up-to-date with the latest industry trends. 
        Adept at problem-solving and working both independently and collaboratively within a team. 
        Committed to delivering high-quality, user-friendly web solutions.


        </p>
        <a href={MYCV} download>
          <button className="hover">
            Mon CV 
          </button>
        </a>
        <a href={MYCV2} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

import Styles from './ProjectsStyles.module.css';
import amanha from '../../assets/amanha.jpg';
import simo from '../../assets/simo.png';
import jurse from '../../assets/jurse.png';
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png';
import auditcamp from '../../assets/AuditCamp.png';
import letsgo from '../../assets/logo.png';
import xpert from '../../assets/Xpert.png';


function Projects() {
  return (
    <section id='projects' className={Styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={Styles.projectsContainer}>


      <ProjectCard 
       src={xpert} 
       link="https://github.com/16farahaz/Pojet--PFE-Farah-Azizi.git"
       h3="SFM Xpert" 
       p="Intelligent Task Manager with AI Assistance"/> 
       <br />
      <ProjectCard 
       src={letsgo} 
       link="https://github.com/16farahaz/letsgo.git"
       h3="LET'S GO" 
       p="long-distance carpooling platform in Tunisia"/> 
       <br />
      <ProjectCard 
       src={auditcamp} 
       link="https://github.com/16farahaz/auditcamp.git"
       h3="AUDITCAMP" 
       p="Audit tracking platform"/> 
       <br />
       <ProjectCard 
       src={amanha} 
       link="https://github.com/16farahaz/ApplicationAmanha.git"
       h3="Amanha" 
       p="Insurance Application"/> 
       <br />
       <ProjectCard 
       src={jurse} 
       link="https://github.com/16farahaz/Jursesiteweb.git"
       h3="Jurse" 
       p="Festival Application"/>
       <br />




       <ProjectCard 
       src={freshBurger} 
       link="https://github.com/16farahaz/AppBiblio-java-mvc-.git"
       h3="Library mangement " 
       p="  Application for a library "/>
              <br />

       <ProjectCard 
       src={simo} 
       link="https://github.com/16farahaz/Simo-Faster.git"
       h3="SimoFaster" 
       p="  Application for foundation"/>
       

      </div>
    </section>
  )
}

export default Projects

import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>

        <h1>Skills</h1>
        <br />
        <br />
        <h2>LANGUAGES</h2>
        <br />

        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="PHP"/>
            <SkillList src={checkMarkIcon} skill="JAVASCRIPT"/>
            <SkillList src={checkMarkIcon} skill="NODE JS"/>
            <SkillList src={checkMarkIcon} skill="JAVA"/>
            <SkillList src={checkMarkIcon} skill="PYTHON"/>
        </div>
        
        <hr />
        <h2>FRAMWORKS</h2>
        <br />

        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="SYMPHONY 5"/>
            <SkillList src={checkMarkIcon} skill="LARAVEL"/>
            <SkillList src={checkMarkIcon} skill="EXPRESS JS"/>
            <SkillList src={checkMarkIcon} skill="Next JS"/>
            <SkillList src={checkMarkIcon} skill="DJANGO"/>
            <SkillList src={checkMarkIcon} skill="SPRINGBOOT"/>
        </div>
        <hr />
       <h2>FRONTEND</h2>
       <br />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="REACT JS"/>
            <SkillList src={checkMarkIcon} skill="BOOTSTRAP"/>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="TAILWIND"/>
        </div>
         <hr />
       <h2>DEVOPS</h2>
       <br />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="DOCKER"/>
            <SkillList src={checkMarkIcon} skill="JENKINS"/>
            <SkillList src={checkMarkIcon} skill="NGROK"/>
            <SkillList src={checkMarkIcon} skill="WEBHOOK"/>
            <SkillList src={checkMarkIcon} skill="GITLAB"/>

        </div>
        <hr />
       <h2>IA and  Machine Learning</h2>
       <br />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Camembert"/>
            <SkillList src={checkMarkIcon} skill="Spacy"/>
            <SkillList src={checkMarkIcon} skill="Flair"/>
            <SkillList src={checkMarkIcon} skill="Mistral"/>
            <SkillList src={checkMarkIcon} skill="Whisper"/>

        </div>
        <hr />
           
     <h2>SGBD</h2>
<SkillList src={checkMarkIcon} skill="SQL – MySQL, Oracle, PostgreSQL" />
<SkillList src={checkMarkIcon} skill="NoSQL – MongoDB" />

<h2>Tools</h2>
<SkillList src={checkMarkIcon} skill="phpMyAdmin, SQL Developer" />

    </section>
  )
}

export default Skills

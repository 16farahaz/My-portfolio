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
    </section>
  )
}

export default Skills

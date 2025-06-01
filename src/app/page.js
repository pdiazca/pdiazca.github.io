import styles from './page.module.scss'
import Header from './components/Header/Header'
import WorkList from './components/WorkList/WorkList'

import {headerData} from './data'
import {workData} from './data'
import {projectsData} from './data'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <aside className={styles.aside}>
        <div className={styles.aboutMe}>
        <h2>About Me</h2>
        <p dangerouslySetInnerHTML={{ __html: headerData.firstParagraph }}></p>
        </div>
        {/* <WorkList 
          title="Work"
          data={workData} /> */}
        
        <WorkList 
          title="Selected Works"
          data={projectsData} />
      </aside>
    </div>
  )
}

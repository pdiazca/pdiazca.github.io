import styles from './Header.module.scss'
import { headerData, socialData } from '../../data.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCodepen, 
  faLinkedin, 
  faBehance } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

  const test = (name) => {
    switch(name) {
      case "mail": 
        return <FontAwesomeIcon icon={faEnvelope} />
      case "linkedin":
        return <FontAwesomeIcon icon={faLinkedin} />
      case "behance":
        return <FontAwesomeIcon icon={faBehance} />
      case "codepen":
        return <FontAwesomeIcon icon={faCodepen} />
    }
  }

  return (
    <header className={styles.header}>
      <h1>
        {headerData.hi}<br /><span className="highlight">{headerData.name}</span>
      </h1>

      <div className={styles.content}>
      <p dangerouslySetInnerHTML={{ __html: headerData.meBlurb }}></p>

        <a href="#" className={styles.resumeLink}>
          {headerData.fullResume}

          <span>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </span>
        </a>
      </div>

      <ul className={styles.socialLinks}>
        {
          socialData.map((social) => {
            return (
              <li key={social.id}>
                <a 
                  aria-label={social.name} 
                  href={social.url}
                  noopener="true"
                  noreferrer="true"
                  target="_blank">
                  {test(social.name)}
                </a>
              </li>
            )
          })
        }
      </ul>
    </header>
  )
}

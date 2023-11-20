import styles from './WorkBit.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function WorkBit({
  id,
  title,
  company,
  url,
  tags,
  description,
  years,
  onHover,
  onLeave,
  isHovered,
  isId,
  imagePath
}) {
  return (
    <>
      <div
        onMouseEnter={() => onHover(id)}
        onMouseLeave={() => onLeave()}
        onFocus={() => onHover(id)}
        onBlur={() => onLeave()}

        className={clsx(styles.container, {
          // [styles.hover]: true,
          [styles.hover]: isId === id,
          [styles.opacity]: isHovered && isId != id,
        }
        )}
      >
        <div className={styles.dates}>
          <span>{years}</span>
          {imagePath &&
            <Image
              src={imagePath}
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={500}
              alt={title}
            />}
        </div>
        <div className={styles.content}>
          <h3>
            {url ? 
            <a href={url} noopener="true" noreferrer="true" target="_blank">{title}
              <span className={styles.company}> - {company}</span>
              <span className={clsx(styles.iconLink)}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
            </a>
            :
            <>
            {title}
            <span className={styles.company}> - {company}</span>
              <span className={clsx(styles.iconLink)}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
            </>
            }

          </h3>
          <p>{description}</p>
          <div className={styles.skills}>
            {
              tags?.map((tag) => {
                return <span key={tag}>{tag}</span>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

import styles from './WorkBit.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

export default function WorkBit({
  id,
  title,
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
              width={1020}
              height={500}
              alt={title}
            />}
        </div>
      </div>
    </>
  )
}

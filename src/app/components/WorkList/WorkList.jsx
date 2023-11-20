"use client"; 
import { useState, useEffect } from 'react';
import WorkBit from '../WorkBit/WorkBit'

export default function WorkList({
  data,
  title
}) {
  const [isId, setId] = useState("");
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {

  }, [isHovered])

  const onHover = (id) => {
    setId(id)
    setIsHovered(true)
  }

  const onLeave = () => {
    setId("")
    setIsHovered(false)
  }
  return (
    <>
      <div>
        <h2>{title}</h2>

        {
          data.map((work) => {
            return <WorkBit
              onHover={() => onHover(work.id)}
              onLeave={() => onLeave()}
              isHovered={isHovered}
              isId={isId}
              id={work.id}
              title={work.title}
              company={work.company}
              years={work.years}
              url={work.url}
              description={work.description}
              tags={work.tags}
              key={work.id}
              imagePath={work.imagePath} />
          })
        }
      </div>
    </>
  )
}

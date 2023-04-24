import React, { FC, ReactNode } from 'react'

type Props = {
    children?: ReactNode; 
}

const WhiteBox: FC<Props> = ({children}: Props) => {
  return (
    <div className="p-3 bg-white rounded-3">
        {children}
    </div>
  )
}

export default WhiteBox
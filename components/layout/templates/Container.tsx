import React from 'react'

type Props = {
    children: React.ReactNode;
    extraClass?: string;
}

const Container = ({children, extraClass = ""}: Props) => {
  return (
    <div className={`mx-auto container ${extraClass}`}>
        {children}
    </div>
  )
}

export default Container
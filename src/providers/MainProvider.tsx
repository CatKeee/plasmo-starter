import React, { type HTMLAttributes } from "react"

import "@/styles/index.scss"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const MainProvider: React.FC<Props> = ({ children }) => {
  return <>{children}</>
}

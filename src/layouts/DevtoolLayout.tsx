import { MainProvider } from "@/providers/MainProvider"
import React, { type HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const DevtoolLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainProvider>
      <div className="min-h-screen w-full">{children}</div>
    </MainProvider>
  )
}

import { MainProvider } from "@/providers/MainProvider"
import React, { type HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const SideLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainProvider>
      <div className="h-screen w-full">{children}</div>
    </MainProvider>
  )
}

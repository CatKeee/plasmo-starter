import { MainProvider } from "@/providers/MainProvider"
import React, { type HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const PopupLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainProvider>
      <div className="w-[400px]">{children}</div>
    </MainProvider>
  )
}

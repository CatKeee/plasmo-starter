import { SideLayout } from "@/layouts/SideLayout"
import React from "react"

import { getLocales } from "./utils/helper"

const SidePanel = () => {
  return (
    <SideLayout>
      <div className="flex h-full items-center justify-center">
        <h1 className="text-3xl">{getLocales("sidepanel")}</h1>
      </div>
    </SideLayout>
  )
}

export default SidePanel

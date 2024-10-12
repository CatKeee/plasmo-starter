import { NewTabLayout } from "@/layouts/NewTabLayout"
import React from "react"

import { getLocales } from "./utils/helper"

const Newtab = () => {
  return (
    <NewTabLayout>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-3xl">{getLocales("newtab")}</h1>
      </div>
    </NewTabLayout>
  )
}

export default Newtab

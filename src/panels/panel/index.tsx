import { DevtoolLayout } from "@/layouts/DevtoolLayout"
import { createRoot } from "react-dom/client"

import "@/styles/index.scss"

const Panel = () => {
  return (
    <DevtoolLayout>
      <div className="">
        <h1>Devtool Panel</h1>
      </div>
    </DevtoolLayout>
  )
}

createRoot(document.getElementById("root")).render(<Panel />)

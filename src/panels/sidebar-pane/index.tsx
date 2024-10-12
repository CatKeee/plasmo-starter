import { createRoot } from "react-dom/client"

import "@/styles/index.scss"

const SidebarPane = () => {
  return (
    <div>
      <h2>Sidebar Pane</h2>
      <p>HI THERE</p>
    </div>
  )
}

createRoot(document.getElementById("root")).render(<SidebarPane />)

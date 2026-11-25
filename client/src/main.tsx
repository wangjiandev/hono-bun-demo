import ReactDOM from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { getRouter } from "./router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const router = getRouter()

const rootElement = document.getElementById("app")!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
}

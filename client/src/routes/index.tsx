import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { hc } from "hono/client"
import type { AppType } from "../../../server/index"

const client = hc<AppType>("/")

export const Route = createFileRoute("/")({ component: Home })

function Home() {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await client.api.people.$get()
      if (!response.ok) throw new Error("failed to fetch people")
      return await response.json()
    },
    initialData: [],
  })
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start 1</h1>
      <ul>
        {data.map((d) => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </div>
  )
}

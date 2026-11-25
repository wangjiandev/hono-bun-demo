import { db, pool } from "../server/db"
import * as schema from "../server/db/schema"
import { seed } from "drizzle-seed"

const seedDb = async () => {
  await seed(db, schema)
}

seedDb()
  .then(() => {
    console.log("seeded database successfully")
    return pool.end()
  })
  .catch((err) => {
    console.log(`failed to seed database:\n${err}`)
    return pool.end()
  })

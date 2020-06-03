import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import "https://deno.land/x/denv/mod.ts";
import {
  createDog,
  fetchAllDogs,
  fetchOneDog,
  updateDog,
  deleteDog,
} from "./controllers/users.ts";

const app = new Application();

app
  .get("/users", fetchAllDogs)
  .post("/user", createDog)
  .get("/user/:id", fetchOneDog)
  .put("/user/:id", updateDog)
  .delete("/user/:id", deleteDog)
  .start({ port: 6666 });
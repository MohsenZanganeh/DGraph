import Gverse from "gverse"
import { User } from './user.vertex';
const graph = new Gverse.Graph(
  new Gverse.Connection({ host: "localhost", port: 9080, debug: true })
)
async function create() {

  const user = new User()
  user.age = 18;
  user.name = "mohsen"
  const result = await graph.create(user)
  console.log('---result:', result);

  return result
}
create()
getUesr();
async function getUesr() {
  const user = (await graph.get('0x4e24')) as User
  console.log(user.name) // = "Zak"
return user
}
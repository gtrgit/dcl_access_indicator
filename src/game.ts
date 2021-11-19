import resources from "./resources"
import { picker } from "./modules/picker"

const wall = new Entity()
wall.addComponent(resources.models.wall)
wall.addComponent(
  new Transform({
    position: new Vector3(8, 2.1, 8),
    scale: new Vector3(4,2,2)
  })
)


export let wallId = wall.uuid 

engine.addEntity(wall)

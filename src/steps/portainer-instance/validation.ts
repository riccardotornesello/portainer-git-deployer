import {
  getPortainerInstanceStatus,
  getPortainerInstanceInfo,
} from "../../api/portainer"
import { PortainerConfig } from "../../types/portainer"

export async function checkPortainerConnection(
  portainerInstance: PortainerConfig
) {
  try {
    const res = await getPortainerInstanceStatus(portainerInstance)

    if (res.InstanceID === undefined) {
      throw new Error("Missing InstanceId")
    }

    return null
  } catch (error) {
    return "Portainer connection failed"
  }
}

export async function checkPortainerAuthentication(
  portainerInstance: PortainerConfig
) {
  try {
    const res = await getPortainerInstanceInfo(portainerInstance)

    if (res.platform === undefined) {
      throw new Error("Missing Platform")
    }

    return null
  } catch (error) {
    return "Portainer authentication failed"
  }
}

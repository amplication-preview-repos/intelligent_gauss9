import { AccessPermission } from "../accessPermission/AccessPermission";
import { User } from "../user/User";

export type List = {
  accessPermissions?: Array<AccessPermission>;
  createdAt: Date;
  description: string | null;
  expiresAt: Date | null;
  id: string;
  name: string | null;
  privacy?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};

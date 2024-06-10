import { AccessPermission } from "../accessPermission/AccessPermission";
import { Invitation } from "../invitation/Invitation";

export type Group = {
  accessPermissions?: Array<AccessPermission>;
  createdAt: Date;
  description: string | null;
  id: string;
  invitations?: Array<Invitation>;
  name: string | null;
  owner: string | null;
  updatedAt: Date;
};

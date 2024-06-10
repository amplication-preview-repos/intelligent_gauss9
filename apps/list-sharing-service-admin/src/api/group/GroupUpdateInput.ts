import { AccessPermissionUpdateManyWithoutGroupsInput } from "./AccessPermissionUpdateManyWithoutGroupsInput";
import { InvitationUpdateManyWithoutGroupsInput } from "./InvitationUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  accessPermissions?: AccessPermissionUpdateManyWithoutGroupsInput;
  description?: string | null;
  invitations?: InvitationUpdateManyWithoutGroupsInput;
  name?: string | null;
  owner?: string | null;
};

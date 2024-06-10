import { AccessPermissionCreateNestedManyWithoutGroupsInput } from "./AccessPermissionCreateNestedManyWithoutGroupsInput";
import { InvitationCreateNestedManyWithoutGroupsInput } from "./InvitationCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  accessPermissions?: AccessPermissionCreateNestedManyWithoutGroupsInput;
  description?: string | null;
  invitations?: InvitationCreateNestedManyWithoutGroupsInput;
  name?: string | null;
  owner?: string | null;
};

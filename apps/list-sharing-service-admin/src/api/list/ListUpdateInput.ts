import { AccessPermissionUpdateManyWithoutListsInput } from "./AccessPermissionUpdateManyWithoutListsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListUpdateInput = {
  accessPermissions?: AccessPermissionUpdateManyWithoutListsInput;
  description?: string | null;
  expiresAt?: Date | null;
  name?: string | null;
  privacy?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};

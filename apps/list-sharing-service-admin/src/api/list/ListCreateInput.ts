import { AccessPermissionCreateNestedManyWithoutListsInput } from "./AccessPermissionCreateNestedManyWithoutListsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListCreateInput = {
  accessPermissions?: AccessPermissionCreateNestedManyWithoutListsInput;
  description?: string | null;
  expiresAt?: Date | null;
  name?: string | null;
  privacy?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};

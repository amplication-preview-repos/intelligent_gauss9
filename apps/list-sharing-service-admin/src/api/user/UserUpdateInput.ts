import { AccessPermissionUpdateManyWithoutUsersInput } from "./AccessPermissionUpdateManyWithoutUsersInput";
import { ListUpdateManyWithoutUsersInput } from "./ListUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  accessPermissions?: AccessPermissionUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  lists?: ListUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};

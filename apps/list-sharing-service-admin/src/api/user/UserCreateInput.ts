import { AccessPermissionCreateNestedManyWithoutUsersInput } from "./AccessPermissionCreateNestedManyWithoutUsersInput";
import { ListCreateNestedManyWithoutUsersInput } from "./ListCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  accessPermissions?: AccessPermissionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  lists?: ListCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};

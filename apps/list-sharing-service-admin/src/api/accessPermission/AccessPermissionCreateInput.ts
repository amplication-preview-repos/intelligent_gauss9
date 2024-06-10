import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessPermissionCreateInput = {
  group?: GroupWhereUniqueInput | null;
  list?: ListWhereUniqueInput | null;
  permission?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};

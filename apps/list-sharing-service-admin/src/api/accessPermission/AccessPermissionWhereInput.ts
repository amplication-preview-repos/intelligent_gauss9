import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessPermissionWhereInput = {
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  list?: ListWhereUniqueInput;
  permission?: "Option1";
  user?: UserWhereUniqueInput;
};

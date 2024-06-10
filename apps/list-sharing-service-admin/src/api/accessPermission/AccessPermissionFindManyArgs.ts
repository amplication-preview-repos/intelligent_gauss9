import { AccessPermissionWhereInput } from "./AccessPermissionWhereInput";
import { AccessPermissionOrderByInput } from "./AccessPermissionOrderByInput";

export type AccessPermissionFindManyArgs = {
  where?: AccessPermissionWhereInput;
  orderBy?: Array<AccessPermissionOrderByInput>;
  skip?: number;
  take?: number;
};

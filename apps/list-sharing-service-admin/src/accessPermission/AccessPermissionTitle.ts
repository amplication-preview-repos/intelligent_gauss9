import { AccessPermission as TAccessPermission } from "../api/accessPermission/AccessPermission";

export const ACCESSPERMISSION_TITLE_FIELD = "id";

export const AccessPermissionTitle = (record: TAccessPermission): string => {
  return record.id?.toString() || String(record.id);
};

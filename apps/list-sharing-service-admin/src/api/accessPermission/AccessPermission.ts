import { Group } from "../group/Group";
import { List } from "../list/List";
import { User } from "../user/User";

export type AccessPermission = {
  createdAt: Date;
  group?: Group | null;
  id: string;
  list?: List | null;
  permission?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};

import { Group } from "../group/Group";

export type Invitation = {
  createdAt: Date;
  email: string | null;
  group?: Group | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};

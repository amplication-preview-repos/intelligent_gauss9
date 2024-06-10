/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Group } from "../../group/base/Group";
import { List } from "../../list/base/List";
import { EnumAccessPermissionPermission } from "./EnumAccessPermissionPermission";
import { User } from "../../user/base/User";

@ObjectType()
class AccessPermission {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Group,
  })
  @ValidateNested()
  @Type(() => Group)
  @IsOptional()
  group?: Group | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => List,
  })
  @ValidateNested()
  @Type(() => List)
  @IsOptional()
  list?: List | null;

  @ApiProperty({
    required: false,
    enum: EnumAccessPermissionPermission,
  })
  @IsEnum(EnumAccessPermissionPermission)
  @IsOptional()
  @Field(() => EnumAccessPermissionPermission, {
    nullable: true,
  })
  permission?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { AccessPermission as AccessPermission };

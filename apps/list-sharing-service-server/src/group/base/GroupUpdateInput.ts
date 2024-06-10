/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccessPermissionUpdateManyWithoutGroupsInput } from "./AccessPermissionUpdateManyWithoutGroupsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { InvitationUpdateManyWithoutGroupsInput } from "./InvitationUpdateManyWithoutGroupsInput";

@InputType()
class GroupUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AccessPermissionUpdateManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => AccessPermissionUpdateManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => AccessPermissionUpdateManyWithoutGroupsInput, {
    nullable: true,
  })
  accessPermissions?: AccessPermissionUpdateManyWithoutGroupsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => InvitationUpdateManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => InvitationUpdateManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => InvitationUpdateManyWithoutGroupsInput, {
    nullable: true,
  })
  invitations?: InvitationUpdateManyWithoutGroupsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  owner?: string | null;
}

export { GroupUpdateInput as GroupUpdateInput };

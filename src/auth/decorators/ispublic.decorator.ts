import { SetMetadata } from "@nestjs/common/decorators";

export const IS_PUBLIC_KEY ='isPublic';
export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true);
import { JSONSchema as JsonSchemaType } from 'json-schema-to-ts';

declare global {
  declare namespace PrismaJson {
    type JsonSchema = JSONSchema;
  }
}

declare const $JSONSchema: unique symbol;
type $JSONSchema = typeof $JSONSchema;
type JSONSchemaType = 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array' | 'null';
type JSONSchema =
  | boolean
  | Readonly<{
      [$JSONSchema]?: $JSONSchema;
      $id?: string | undefined;
      $ref?: string | undefined;
      $schema?: string | undefined;
      $comment?: string | undefined;
      type?: JSONSchemaType | readonly JSONSchemaType[];
      const?: unknown;
      enum?: unknown;
      multipleOf?: number | undefined;
      maximum?: number | undefined;
      exclusiveMaximum?: number | undefined;
      minimum?: number | undefined;
      exclusiveMinimum?: number | undefined;
      maxLength?: number | undefined;
      minLength?: number | undefined;
      pattern?: string | undefined;
      items?: JSONSchema | readonly JSONSchema[];
      additionalItems?: JSONSchema;
      contains?: JSONSchema;
      maxItems?: number | undefined;
      minItems?: number | undefined;
      uniqueItems?: boolean | undefined;
      maxProperties?: number | undefined;
      minProperties?: number | undefined;
      required?: readonly string[];
      properties?: Readonly<Record<string, JSONSchema>>;
      patternProperties?: Readonly<Record<string, JSONSchema>>;
      additionalProperties?: JSONSchema;
      unevaluatedProperties?: JSONSchema;
      dependencies?: Readonly<Record<string, JSONSchema | readonly string[]>>;
      propertyNames?: JSONSchema;
      if?: JSONSchema;
      then?: JSONSchema;
      else?: JSONSchema;
      allOf?: readonly JSONSchema[];
      anyOf?: readonly JSONSchema[];
      oneOf?: readonly JSONSchema[];
      not?: JSONSchema;
      format?: string | undefined;
      contentMediaType?: string | undefined;
      contentEncoding?: string | undefined;
      definitions?: Readonly<Record<string, JSONSchema>>;
      title?: string | undefined;
      description?: string | undefined;
      default?: unknown;
      readOnly?: boolean | undefined;
      writeOnly?: boolean | undefined;
      examples?: readonly unknown[];
      nullable?: boolean;
    }>;
export type JSONSchemaReference = JSONSchema &
  Readonly<{
    $id: string;
  }>;

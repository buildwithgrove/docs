export type MethodType = {
  name: string
  summary?: string
  description?: string
  params: ParamType[]
  result: ResultType
}

export type ResultType =
  | $Ref
  | {
      name: string
      description?: string
      schema: Schema
    }

export type ParamType =
  | $Ref
  | {
      name: string
      required: boolean
      description: string
      schema: Schema
    }

export type SchemaType =
  | $Ref
  | {
      title: string
      description: string
      type?: string
      items?: $Ref | Schema
      oneOf?: OneOf
      pattern?: string
      properties?: {
        [key: string]: Schema
      }
    }

export type PropertyType = $Ref & {
  title?: string
  description?: string
}

export type OneOfType = OneOfItemType[]

export type OneOfItemType =
  | $Ref
  | {
      title: string
      type?: string
      description?: string
      properties?: {
        [key: string]: Schema
      }
    }

export type $RefType = {
  $ref: string
}

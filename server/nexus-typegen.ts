/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Champion: { // root type
    blurb: string; // String!
    id: string; // String!
    key: string; // String!
    name: string; // String!
    partype: string; // String!
    tags?: Array<string | null> | null; // [String]
    title: string; // String!
    version: string; // String!
  }
  Link: { // root type
    description: string; // String!
    id: string; // String!
    url: string; // String!
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Champion: { // field return type
    blurb: string; // String!
    id: string; // String!
    key: string; // String!
    name: string; // String!
    partype: string; // String!
    tags: Array<string | null> | null; // [String]
    title: string; // String!
    version: string; // String!
  }
  Link: { // field return type
    description: string; // String!
    id: string; // String!
    url: string; // String!
  }
  Mutation: { // field return type
    addChamp: string; // String!
    post: NexusGenRootTypes['Link']; // Link!
    posting: NexusGenRootTypes['Link']; // Link!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Link'][]; // [Link!]!
  }
}

export interface NexusGenFieldTypeNames {
  Champion: { // field return type name
    blurb: 'String'
    id: 'String'
    key: 'String'
    name: 'String'
    partype: 'String'
    tags: 'String'
    title: 'String'
    version: 'String'
  }
  Link: { // field return type name
    description: 'String'
    id: 'String'
    url: 'String'
  }
  Mutation: { // field return type name
    addChamp: 'String'
    post: 'Link'
    posting: 'Link'
  }
  Query: { // field return type name
    feed: 'Link'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    post: { // args
      description: string; // String!
      url: string; // String!
    }
    posting: { // args
      description: string; // String!
      url: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}
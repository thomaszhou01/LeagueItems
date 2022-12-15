/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type * as prisma from "./node_modules/.prisma/client/index"
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
  Champion: prisma.Champion;
  ChampionStats: prisma.ChampionStats;
  Item: prisma.Item;
  ItemStats: prisma.ItemStats;
  Link: prisma.Link;
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
    id: string; // String!
    imageURL: string; // String!
    key: string; // String!
    name: string; // String!
    objectID: string; // String!
    partype: string; // String!
    stats: NexusGenRootTypes['ChampionStats'] | null; // ChampionStats
    tags: Array<string | null>; // [String]!
    title: string; // String!
    version: string; // String!
  }
  ChampionStats: { // field return type
    armor: number; // Float!
    armorperlevel: number; // Float!
    attackdamage: number; // Float!
    attackdamageperlevel: number; // Float!
    attackrange: number; // Float!
    attackspeed: number; // Float!
    attackspeedperlevel: number; // Float!
    champion: NexusGenRootTypes['Champion'] | null; // Champion
    championId: string | null; // String
    crit: number; // Float!
    critperlevel: number; // Float!
    hp: number; // Float!
    hpperlevel: number; // Float!
    hpregen: number; // Float!
    hpregenperlevel: number; // Float!
    movespeed: number; // Float!
    mp: number; // Float!
    mpperlevel: number; // Float!
    mpregen: number; // Float!
    mpregenperlevel: number; // Float!
    spellblock: number; // Float!
    spellblockperlevel: number; // Float!
  }
  Item: { // field return type
    description: Array<string | null>; // [String]!
    from: Array<string | null>; // [String]!
    goldTotalCost: string; // String!
    id: string; // String!
    imageURL: string; // String!
    into: Array<string | null>; // [String]!
    name: string; // String!
    objectID: string; // String!
    plaintext: string; // String!
    stats: NexusGenRootTypes['ItemStats'] | null; // ItemStats
    tags: Array<string | null>; // [String]!
  }
  ItemStats: { // field return type
    ad: number; // Float!
    ap: number; // Float!
    armor: number; // Float!
    armorPen: number; // Float!
    as: number; // Float!
    crit: number; // Float!
    flatMagicPen: number; // Float!
    haste: number; // Float!
    healthRegen: number; // Float!
    hp: number; // Float!
    item: NexusGenRootTypes['Item'] | null; // Item
    itemId: string | null; // String
    lethality: number; // Float!
    lifeSteal: number; // Float!
    mana: number; // Float!
    mr: number; // Float!
    ms: number; // Float!
    omnivamp: number; // Float!
    percentMagicPen: number; // Float!
    physicalVamp: number; // Float!
    range: number; // Float!
    resourceRegen: number; // Float!
    tenacity: number; // Float!
  }
  Link: { // field return type
    description: string; // String!
    id: string; // String!
    url: string; // String!
  }
  Mutation: { // field return type
    addChamp: string; // String!
    post: NexusGenRootTypes['Link']; // Link!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Link'][]; // [Link!]!
    getAllChampions: NexusGenRootTypes['Champion'][]; // [Champion!]!
    getAllItems: NexusGenRootTypes['Item'][]; // [Item!]!
    getSpecificChampions: NexusGenRootTypes['Champion'] | null; // Champion
    getSpecificItems: NexusGenRootTypes['Item'] | null; // Item
  }
}

export interface NexusGenFieldTypeNames {
  Champion: { // field return type name
    id: 'String'
    imageURL: 'String'
    key: 'String'
    name: 'String'
    objectID: 'String'
    partype: 'String'
    stats: 'ChampionStats'
    tags: 'String'
    title: 'String'
    version: 'String'
  }
  ChampionStats: { // field return type name
    armor: 'Float'
    armorperlevel: 'Float'
    attackdamage: 'Float'
    attackdamageperlevel: 'Float'
    attackrange: 'Float'
    attackspeed: 'Float'
    attackspeedperlevel: 'Float'
    champion: 'Champion'
    championId: 'String'
    crit: 'Float'
    critperlevel: 'Float'
    hp: 'Float'
    hpperlevel: 'Float'
    hpregen: 'Float'
    hpregenperlevel: 'Float'
    movespeed: 'Float'
    mp: 'Float'
    mpperlevel: 'Float'
    mpregen: 'Float'
    mpregenperlevel: 'Float'
    spellblock: 'Float'
    spellblockperlevel: 'Float'
  }
  Item: { // field return type name
    description: 'String'
    from: 'String'
    goldTotalCost: 'String'
    id: 'String'
    imageURL: 'String'
    into: 'String'
    name: 'String'
    objectID: 'String'
    plaintext: 'String'
    stats: 'ItemStats'
    tags: 'String'
  }
  ItemStats: { // field return type name
    ad: 'Float'
    ap: 'Float'
    armor: 'Float'
    armorPen: 'Float'
    as: 'Float'
    crit: 'Float'
    flatMagicPen: 'Float'
    haste: 'Float'
    healthRegen: 'Float'
    hp: 'Float'
    item: 'Item'
    itemId: 'String'
    lethality: 'Float'
    lifeSteal: 'Float'
    mana: 'Float'
    mr: 'Float'
    ms: 'Float'
    omnivamp: 'Float'
    percentMagicPen: 'Float'
    physicalVamp: 'Float'
    range: 'Float'
    resourceRegen: 'Float'
    tenacity: 'Float'
  }
  Link: { // field return type name
    description: 'String'
    id: 'String'
    url: 'String'
  }
  Mutation: { // field return type name
    addChamp: 'String'
    post: 'Link'
  }
  Query: { // field return type name
    feed: 'Link'
    getAllChampions: 'Champion'
    getAllItems: 'Item'
    getSpecificChampions: 'Champion'
    getSpecificItems: 'Item'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    post: { // args
      description: string; // String!
      url: string; // String!
    }
  }
  Query: {
    getSpecificChampions: { // args
      championName: string; // String!
    }
    getSpecificItems: { // args
      itemName: string; // String!
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
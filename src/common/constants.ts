
// SECTION - CLIENT PROPERTIES

const ClientProperties = { };

// SECTION - SETTINGS SCHEMA

export enum ClientSettingType {
  // TODO  - Define the setting types
}


export interface ClientSettings {
  [id: string]: string | number | boolean;
}

// !SECTION - SETTINGS SCHEMA
// SECTION  - DATABASE SCHEMA

export enum ParsingErrorCategory {
  // TODO - Define the error categories
}

export interface ScribeSightDatabaseDocumentv1 {
    [id: string]: {
      jsonRaw: string;
      conflicts: {
        additionalInfo?: string;
        category: ParsingErrorCategory;
      }[];
      processedOn: {
        timestamp: string;
        //event: string;
      }
    };

}

// !SECTION  - DATABASE SCHEMA

Object.freeze(ClientProperties);
export default ClientProperties;

// !SECTION  - CLIENT PROPERTIES
import localVarRequest from 'request';

export * from './affiliationsInner';
export * from './apc';
export * from './associatedInstitution';
export * from './author';
export * from './authorsResponseSchema';
export * from './autoCompleteResultItem';
export * from './autoCompleteResultSchema';
export * from './baseSelectionAttributes';
export * from './concept';
export * from './conceptIds';
export * from './conceptSchema';
export * from './conceptsResponseSchema';
export * from './dehydratedConcept';
export * from './dehydratedInstitution';
export * from './errorMessage';
export * from './funderSchema';
export * from './fundersArray';
export * from './geo';
export * from './ids';
export * from './institutionSchema';
export * from './institutionsResponseSchema';
export * from './internationalDescription';
export * from './internationalDisplayName';
export * from './internationalDisplayNameAndDescription';
export * from './internationalisation';
export * from './location';
export * from './locationSource';
export * from './meta';
export * from './ngramMeta';
export * from './personResponseSchema';
export * from './publisherSchema';
export * from './publisherSchemaParentPublisher';
export * from './publishersResponseSchema';
export * from './role';
export * from './rootResponseSchema';
export * from './sourceSchema';
export * from './sourcesArray';
export * from './summaryStats';
export * from './workAttributes';
export * from './workNgramsSchema';
export * from './workSchema';
export * from './workSchemaBiblio';
export * from './workSchemaCitedByPercentileYear';
export * from './workSchemaOpenAccess';
export * from './worksResponseSchema';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AffiliationsInner } from './affiliationsInner';
import { Apc } from './apc';
import { AssociatedInstitution } from './associatedInstitution';
import { Author } from './author';
import { AuthorsResponseSchema } from './authorsResponseSchema';
import { AutoCompleteResultItem } from './autoCompleteResultItem';
import { AutoCompleteResultSchema } from './autoCompleteResultSchema';
import { BaseSelectionAttributes } from './baseSelectionAttributes';
import { Concept } from './concept';
import { ConceptIds } from './conceptIds';
import { ConceptSchema } from './conceptSchema';
import { ConceptsResponseSchema } from './conceptsResponseSchema';
import { DehydratedConcept } from './dehydratedConcept';
import { DehydratedInstitution } from './dehydratedInstitution';
import { ErrorMessage } from './errorMessage';
import { FunderSchema } from './funderSchema';
import { FundersArray } from './fundersArray';
import { Geo } from './geo';
import { Ids } from './ids';
import { InstitutionSchema } from './institutionSchema';
import { InstitutionsResponseSchema } from './institutionsResponseSchema';
import { InternationalDescription } from './internationalDescription';
import { InternationalDisplayName } from './internationalDisplayName';
import { InternationalDisplayNameAndDescription } from './internationalDisplayNameAndDescription';
import { Internationalisation } from './internationalisation';
import { Location } from './location';
import { LocationSource } from './locationSource';
import { Meta } from './meta';
import { NgramMeta } from './ngramMeta';
import { PersonResponseSchema } from './personResponseSchema';
import { PublisherSchema } from './publisherSchema';
import { PublisherSchemaParentPublisher } from './publisherSchemaParentPublisher';
import { PublishersResponseSchema } from './publishersResponseSchema';
import { Role } from './role';
import { RootResponseSchema } from './rootResponseSchema';
import { SourceSchema } from './sourceSchema';
import { SourcesArray } from './sourcesArray';
import { SummaryStats } from './summaryStats';
import { WorkAttributes } from './workAttributes';
import { WorkNgramsSchema } from './workNgramsSchema';
import { WorkSchema } from './workSchema';
import { WorkSchemaBiblio } from './workSchemaBiblio';
import { WorkSchemaCitedByPercentileYear } from './workSchemaCitedByPercentileYear';
import { WorkSchemaOpenAccess } from './workSchemaOpenAccess';
import { WorksResponseSchema } from './worksResponseSchema';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "AffiliationsInner": AffiliationsInner,
    "Apc": Apc,
    "AssociatedInstitution": AssociatedInstitution,
    "Author": Author,
    "AuthorsResponseSchema": AuthorsResponseSchema,
    "AutoCompleteResultItem": AutoCompleteResultItem,
    "AutoCompleteResultSchema": AutoCompleteResultSchema,
    "BaseSelectionAttributes": BaseSelectionAttributes,
    "Concept": Concept,
    "ConceptIds": ConceptIds,
    "ConceptSchema": ConceptSchema,
    "ConceptsResponseSchema": ConceptsResponseSchema,
    "DehydratedConcept": DehydratedConcept,
    "DehydratedInstitution": DehydratedInstitution,
    "ErrorMessage": ErrorMessage,
    "FunderSchema": FunderSchema,
    "FundersArray": FundersArray,
    "Geo": Geo,
    "Ids": Ids,
    "InstitutionSchema": InstitutionSchema,
    "InstitutionsResponseSchema": InstitutionsResponseSchema,
    "InternationalDescription": InternationalDescription,
    "InternationalDisplayName": InternationalDisplayName,
    "InternationalDisplayNameAndDescription": InternationalDisplayNameAndDescription,
    "Internationalisation": Internationalisation,
    "Location": Location,
    "LocationSource": LocationSource,
    "Meta": Meta,
    "NgramMeta": NgramMeta,
    "PersonResponseSchema": PersonResponseSchema,
    "PublisherSchema": PublisherSchema,
    "PublisherSchemaParentPublisher": PublisherSchemaParentPublisher,
    "PublishersResponseSchema": PublishersResponseSchema,
    "Role": Role,
    "RootResponseSchema": RootResponseSchema,
    "SourceSchema": SourceSchema,
    "SourcesArray": SourcesArray,
    "SummaryStats": SummaryStats,
    "WorkAttributes": WorkAttributes,
    "WorkNgramsSchema": WorkNgramsSchema,
    "WorkSchema": WorkSchema,
    "WorkSchemaBiblio": WorkSchemaBiblio,
    "WorkSchemaCitedByPercentileYear": WorkSchemaCitedByPercentileYear,
    "WorkSchemaOpenAccess": WorkSchemaOpenAccess,
    "WorksResponseSchema": WorksResponseSchema,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);

import localVarRequest from 'request';

export * from './apc';
export * from './associatedInstitution';
export * from './author';
export * from './authors';
export * from './autoCompleteResultItem';
export * from './autoCompleteResultSchema';
export * from './baseSelectionAttributes';
export * from './concept';
export * from './conceptIds';
export * from './concepts';
export * from './dehydratedConcept';
export * from './dehydratedInstitution';
export * from './domain';
export * from './errorMessage';
export * from './field';
export * from './funder';
export * from './funderSchema';
export * from './fundersArray';
export * from './geo';
export * from './ids';
export * from './institution';
export * from './institutionSchema';
export * from './institutions';
export * from './internationalDescription';
export * from './internationalDisplayName';
export * from './internationalDisplayNameAndDescription';
export * from './internationalisation';
export * from './location';
export * from './locationSource';
export * from './meta';
export * from './ngramMeta';
export * from './ngrams';
export * from './person';
export * from './publisher';
export * from './publisherParentPublisher';
export * from './publisherSchema';
export * from './publishers';
export * from './role';
export * from './rootResponseSchema';
export * from './source';
export * from './sourceSchema';
export * from './sources';
export * from './subfield';
export * from './summaryStats';
export * from './topic';
export * from './topicLevelArraySchema';
export * from './topicLevelSchema';
export * from './topicLevelSchemaId';
export * from './topics';
export * from './topicsMeta';
export * from './work';
export * from './workAttributes';
export * from './workBiblio';
export * from './workCitedByPercentileYear';
export * from './workOpenAccess';
export * from './workSchema';
export * from './worksResponse';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Apc } from './apc';
import { AssociatedInstitution } from './associatedInstitution';
import { Author } from './author';
import { Authors } from './authors';
import { AutoCompleteResultItem } from './autoCompleteResultItem';
import { AutoCompleteResultSchema } from './autoCompleteResultSchema';
import { BaseSelectionAttributes } from './baseSelectionAttributes';
import { Concept } from './concept';
import { ConceptIds } from './conceptIds';
import { Concepts } from './concepts';
import { DehydratedConcept } from './dehydratedConcept';
import { DehydratedInstitution } from './dehydratedInstitution';
import { Domain } from './domain';
import { ErrorMessage } from './errorMessage';
import { Field } from './field';
import { Funder } from './funder';
import { FunderSchema } from './funderSchema';
import { FundersArray } from './fundersArray';
import { Geo } from './geo';
import { Ids } from './ids';
import { Institution } from './institution';
import { InstitutionSchema } from './institutionSchema';
import { Institutions } from './institutions';
import { InternationalDescription } from './internationalDescription';
import { InternationalDisplayName } from './internationalDisplayName';
import { InternationalDisplayNameAndDescription } from './internationalDisplayNameAndDescription';
import { Internationalisation } from './internationalisation';
import { Location } from './location';
import { LocationSource } from './locationSource';
import { Meta } from './meta';
import { NgramMeta } from './ngramMeta';
import { Ngrams } from './ngrams';
import { Person } from './person';
import { Publisher } from './publisher';
import { PublisherParentPublisher } from './publisherParentPublisher';
import { PublisherSchema } from './publisherSchema';
import { Publishers } from './publishers';
import { Role } from './role';
import { RootResponseSchema } from './rootResponseSchema';
import { Source } from './source';
import { SourceSchema } from './sourceSchema';
import { Sources } from './sources';
import { Subfield } from './subfield';
import { SummaryStats } from './summaryStats';
import { Topic } from './topic';
import { TopicLevelArraySchema } from './topicLevelArraySchema';
import { TopicLevelSchema } from './topicLevelSchema';
import { TopicLevelSchemaId } from './topicLevelSchemaId';
import { Topics } from './topics';
import { TopicsMeta } from './topicsMeta';
import { Work } from './work';
import { WorkAttributes } from './workAttributes';
import { WorkBiblio } from './workBiblio';
import { WorkCitedByPercentileYear } from './workCitedByPercentileYear';
import { WorkOpenAccess } from './workOpenAccess';
import { WorkSchema } from './workSchema';
import { WorksResponse } from './worksResponse';

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
    "Apc": Apc,
    "AssociatedInstitution": AssociatedInstitution,
    "Author": Author,
    "Authors": Authors,
    "AutoCompleteResultItem": AutoCompleteResultItem,
    "AutoCompleteResultSchema": AutoCompleteResultSchema,
    "BaseSelectionAttributes": BaseSelectionAttributes,
    "Concept": Concept,
    "ConceptIds": ConceptIds,
    "Concepts": Concepts,
    "DehydratedConcept": DehydratedConcept,
    "DehydratedInstitution": DehydratedInstitution,
    "Domain": Domain,
    "ErrorMessage": ErrorMessage,
    "Field": Field,
    "Funder": Funder,
    "FunderSchema": FunderSchema,
    "FundersArray": FundersArray,
    "Geo": Geo,
    "Ids": Ids,
    "Institution": Institution,
    "InstitutionSchema": InstitutionSchema,
    "Institutions": Institutions,
    "InternationalDescription": InternationalDescription,
    "InternationalDisplayName": InternationalDisplayName,
    "InternationalDisplayNameAndDescription": InternationalDisplayNameAndDescription,
    "Internationalisation": Internationalisation,
    "Location": Location,
    "LocationSource": LocationSource,
    "Meta": Meta,
    "NgramMeta": NgramMeta,
    "Ngrams": Ngrams,
    "Person": Person,
    "Publisher": Publisher,
    "PublisherParentPublisher": PublisherParentPublisher,
    "PublisherSchema": PublisherSchema,
    "Publishers": Publishers,
    "Role": Role,
    "RootResponseSchema": RootResponseSchema,
    "Source": Source,
    "SourceSchema": SourceSchema,
    "Sources": Sources,
    "Subfield": Subfield,
    "SummaryStats": SummaryStats,
    "Topic": Topic,
    "TopicLevelArraySchema": TopicLevelArraySchema,
    "TopicLevelSchema": TopicLevelSchema,
    "TopicLevelSchemaId": TopicLevelSchemaId,
    "Topics": Topics,
    "TopicsMeta": TopicsMeta,
    "Work": Work,
    "WorkAttributes": WorkAttributes,
    "WorkBiblio": WorkBiblio,
    "WorkCitedByPercentileYear": WorkCitedByPercentileYear,
    "WorkOpenAccess": WorkOpenAccess,
    "WorkSchema": WorkSchema,
    "WorksResponse": WorksResponse,
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

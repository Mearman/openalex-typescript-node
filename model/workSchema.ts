/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.0.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Apc } from './apc';
import { Ids } from './ids';
import { Location } from './location';
import { WorkSchemaBiblio } from './workSchemaBiblio';
import { WorkSchemaCitedByPercentileYear } from './workSchemaCitedByPercentileYear';
import { WorkSchemaOpenAccess } from './workSchemaOpenAccess';

export class WorkSchema {
    'abstractInvertedIndex'?: any | null;
    'apcList'?: Apc;
    'apcPaid'?: Apc;
    'authorships'?: any | null;
    'bestOaLocation'?: Location;
    'biblio'?: WorkSchemaBiblio;
    'citedByApiUrl'?: any | null;
    'citedByCount'?: any | null;
    'citedByPercentileYear'?: WorkSchemaCitedByPercentileYear;
    'concepts'?: any | null;
    'correspondingAuthorIds'?: any | null;
    'correspondingInstitutionIds'?: any | null;
    'countriesDistinctCount'?: any | null;
    'countsByYear'?: any | null;
    'createdDate'?: any | null;
    'displayName': any | null;
    'doi'?: any | null;
    'grants'?: any | null;
    'hasFulltext'?: any | null;
    'id': any | null;
    'ids'?: Ids;
    'institutionsDistinctCount'?: any | null;
    'isParatext'?: any | null;
    'isRetracted'?: any | null;
    'keywords'?: any | null;
    'language'?: any | null;
    'locations'?: any | null;
    'locationsCount'?: any | null;
    'mesh'?: any | null;
    'ngramsUrl'?: any | null;
    'openAccess'?: WorkSchemaOpenAccess;
    'primaryLocation'?: Location;
    'publicationDate'?: any | null;
    'publicationYear'?: any | null;
    'referencedWorks'?: any | null;
    'referencedWorksCount'?: any | null;
    'relatedWorks'?: any | null;
    'sustainableDevelopmentGoals'?: any | null;
    'title'?: any | null;
    'type'?: any | null;
    'typeCrossref'?: any | null;
    'updatedDate'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "abstractInvertedIndex",
            "baseName": "abstract_inverted_index",
            "type": "any"
        },
        {
            "name": "apcList",
            "baseName": "apc_list",
            "type": "Apc"
        },
        {
            "name": "apcPaid",
            "baseName": "apc_paid",
            "type": "Apc"
        },
        {
            "name": "authorships",
            "baseName": "authorships",
            "type": "any"
        },
        {
            "name": "bestOaLocation",
            "baseName": "best_oa_location",
            "type": "Location"
        },
        {
            "name": "biblio",
            "baseName": "biblio",
            "type": "WorkSchemaBiblio"
        },
        {
            "name": "citedByApiUrl",
            "baseName": "cited_by_api_url",
            "type": "any"
        },
        {
            "name": "citedByCount",
            "baseName": "cited_by_count",
            "type": "any"
        },
        {
            "name": "citedByPercentileYear",
            "baseName": "cited_by_percentile_year",
            "type": "WorkSchemaCitedByPercentileYear"
        },
        {
            "name": "concepts",
            "baseName": "concepts",
            "type": "any"
        },
        {
            "name": "correspondingAuthorIds",
            "baseName": "corresponding_author_ids",
            "type": "any"
        },
        {
            "name": "correspondingInstitutionIds",
            "baseName": "corresponding_institution_ids",
            "type": "any"
        },
        {
            "name": "countriesDistinctCount",
            "baseName": "countries_distinct_count",
            "type": "any"
        },
        {
            "name": "countsByYear",
            "baseName": "counts_by_year",
            "type": "any"
        },
        {
            "name": "createdDate",
            "baseName": "created_date",
            "type": "any"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "any"
        },
        {
            "name": "doi",
            "baseName": "doi",
            "type": "any"
        },
        {
            "name": "grants",
            "baseName": "grants",
            "type": "any"
        },
        {
            "name": "hasFulltext",
            "baseName": "has_fulltext",
            "type": "any"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "any"
        },
        {
            "name": "ids",
            "baseName": "ids",
            "type": "Ids"
        },
        {
            "name": "institutionsDistinctCount",
            "baseName": "institutions_distinct_count",
            "type": "any"
        },
        {
            "name": "isParatext",
            "baseName": "is_paratext",
            "type": "any"
        },
        {
            "name": "isRetracted",
            "baseName": "is_retracted",
            "type": "any"
        },
        {
            "name": "keywords",
            "baseName": "keywords",
            "type": "any"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "any"
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "any"
        },
        {
            "name": "locationsCount",
            "baseName": "locations_count",
            "type": "any"
        },
        {
            "name": "mesh",
            "baseName": "mesh",
            "type": "any"
        },
        {
            "name": "ngramsUrl",
            "baseName": "ngrams_url",
            "type": "any"
        },
        {
            "name": "openAccess",
            "baseName": "open_access",
            "type": "WorkSchemaOpenAccess"
        },
        {
            "name": "primaryLocation",
            "baseName": "primary_location",
            "type": "Location"
        },
        {
            "name": "publicationDate",
            "baseName": "publication_date",
            "type": "any"
        },
        {
            "name": "publicationYear",
            "baseName": "publication_year",
            "type": "any"
        },
        {
            "name": "referencedWorks",
            "baseName": "referenced_works",
            "type": "any"
        },
        {
            "name": "referencedWorksCount",
            "baseName": "referenced_works_count",
            "type": "any"
        },
        {
            "name": "relatedWorks",
            "baseName": "related_works",
            "type": "any"
        },
        {
            "name": "sustainableDevelopmentGoals",
            "baseName": "sustainable_development_goals",
            "type": "any"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "any"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "any"
        },
        {
            "name": "typeCrossref",
            "baseName": "type_crossref",
            "type": "any"
        },
        {
            "name": "updatedDate",
            "baseName": "updated_date",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return WorkSchema.attributeTypeMap;
    }
}


/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AssociatedInstitution } from './associatedInstitution';
import { CountsByYearInner } from './countsByYearInner';
import { DehydratedConcept } from './dehydratedConcept';
import { Geo } from './geo';
import { Ids } from './ids';
import { InternationalDisplayName } from './internationalDisplayName';
import { RepositoriesArrayInner } from './repositoriesArrayInner';
import { Role } from './role';
import { SummaryStats } from './summaryStats';

export class Institution {
    'associatedInstitutions'?: Array<AssociatedInstitution>;
    'citedByCount'?: number;
    'countryCode'?: string;
    'countsByYear'?: Array<CountsByYearInner>;
    'createdDate'?: string;
    'displayName': string;
    'displayNameAcronyms'?: Array<string>;
    'displayNameAlternatives'?: Array<string>;
    'geo'?: Geo;
    'homepageUrl'?: string;
    'id': string;
    'ids'?: Ids;
    'imageThumbnailUrl'?: string;
    'imageUrl'?: string;
    'international'?: InternationalDisplayName;
    'lineage'?: Array<string>;
    'repositories'?: Array<RepositoriesArrayInner>;
    'roles'?: Array<Role>;
    'ror'?: string;
    'summaryStats'?: SummaryStats;
    'type'?: string;
    'updatedDate'?: string;
    'worksApiUrl'?: string;
    'worksCount'?: number;
    'xConcepts'?: Array<DehydratedConcept>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "associatedInstitutions",
            "baseName": "associated_institutions",
            "type": "Array<AssociatedInstitution>"
        },
        {
            "name": "citedByCount",
            "baseName": "cited_by_count",
            "type": "number"
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string"
        },
        {
            "name": "countsByYear",
            "baseName": "counts_by_year",
            "type": "Array<CountsByYearInner>"
        },
        {
            "name": "createdDate",
            "baseName": "created_date",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "displayNameAcronyms",
            "baseName": "display_name_acronyms",
            "type": "Array<string>"
        },
        {
            "name": "displayNameAlternatives",
            "baseName": "display_name_alternatives",
            "type": "Array<string>"
        },
        {
            "name": "geo",
            "baseName": "geo",
            "type": "Geo"
        },
        {
            "name": "homepageUrl",
            "baseName": "homepage_url",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "ids",
            "baseName": "ids",
            "type": "Ids"
        },
        {
            "name": "imageThumbnailUrl",
            "baseName": "image_thumbnail_url",
            "type": "string"
        },
        {
            "name": "imageUrl",
            "baseName": "image_url",
            "type": "string"
        },
        {
            "name": "international",
            "baseName": "international",
            "type": "InternationalDisplayName"
        },
        {
            "name": "lineage",
            "baseName": "lineage",
            "type": "Array<string>"
        },
        {
            "name": "repositories",
            "baseName": "repositories",
            "type": "Array<RepositoriesArrayInner>"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<Role>"
        },
        {
            "name": "ror",
            "baseName": "ror",
            "type": "string"
        },
        {
            "name": "summaryStats",
            "baseName": "summary_stats",
            "type": "SummaryStats"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "updatedDate",
            "baseName": "updated_date",
            "type": "string"
        },
        {
            "name": "worksApiUrl",
            "baseName": "works_api_url",
            "type": "string"
        },
        {
            "name": "worksCount",
            "baseName": "works_count",
            "type": "number"
        },
        {
            "name": "xConcepts",
            "baseName": "x_concepts",
            "type": "Array<DehydratedConcept>"
        }    ];

    static getAttributeTypeMap() {
        return Institution.attributeTypeMap;
    }
}


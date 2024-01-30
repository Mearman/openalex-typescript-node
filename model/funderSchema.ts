/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Ids } from './ids';
import { SummaryStats } from './summaryStats';

export class FunderSchema {
    'alternateTitles': any | null;
    'citedByCount'?: any | null;
    'countryCode'?: any | null;
    'countsByYear'?: any | null;
    'createdDate'?: any | null;
    'description'?: any | null;
    'displayName': any | null;
    'grantsCount'?: any | null;
    'homepageUrl'?: any | null;
    'id': any | null;
    'ids'?: Ids;
    'imageThumbnailUrl'?: any | null;
    'imageUrl'?: any | null;
    'relevanceScore'?: any | null;
    'roles'?: any | null;
    'summaryStats'?: SummaryStats;
    'updatedDate'?: any | null;
    'worksCount'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alternateTitles",
            "baseName": "alternate_titles",
            "type": "any"
        },
        {
            "name": "citedByCount",
            "baseName": "cited_by_count",
            "type": "any"
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
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
            "name": "description",
            "baseName": "description",
            "type": "any"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "any"
        },
        {
            "name": "grantsCount",
            "baseName": "grants_count",
            "type": "any"
        },
        {
            "name": "homepageUrl",
            "baseName": "homepage_url",
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
            "name": "imageThumbnailUrl",
            "baseName": "image_thumbnail_url",
            "type": "any"
        },
        {
            "name": "imageUrl",
            "baseName": "image_url",
            "type": "any"
        },
        {
            "name": "relevanceScore",
            "baseName": "relevance_score",
            "type": "any"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "any"
        },
        {
            "name": "summaryStats",
            "baseName": "summary_stats",
            "type": "SummaryStats"
        },
        {
            "name": "updatedDate",
            "baseName": "updated_date",
            "type": "any"
        },
        {
            "name": "worksCount",
            "baseName": "works_count",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return FunderSchema.attributeTypeMap;
    }
}


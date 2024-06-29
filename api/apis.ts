export * from './authorsApi';
import { AuthorsApi } from './authorsApi';
export * from './autocompleteApi';
import { AutocompleteApi } from './autocompleteApi';
export * from './conceptsApi';
import { ConceptsApi } from './conceptsApi';
export * from './fundersApi';
import { FundersApi } from './fundersApi';
export * from './infoApi';
import { InfoApi } from './infoApi';
export * from './institutionsApi';
import { InstitutionsApi } from './institutionsApi';
export * from './listApi';
import { ListApi } from './listApi';
export * from './multipleApi';
import { MultipleApi } from './multipleApi';
export * from './ngramsApi';
import { NgramsApi } from './ngramsApi';
export * from './openAlexApi';
import { OpenAlexApi } from './openAlexApi';
export * from './peopleApi';
import { PeopleApi } from './peopleApi';
export * from './publishersApi';
import { PublishersApi } from './publishersApi';
export * from './randomApi';
import { RandomApi } from './randomApi';
export * from './singleApi';
import { SingleApi } from './singleApi';
export * from './sourcesApi';
import { SourcesApi } from './sourcesApi';
export * from './topicsApi';
import { TopicsApi } from './topicsApi';
export * from './worksApi';
import { WorksApi } from './worksApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthorsApi, AutocompleteApi, ConceptsApi, FundersApi, InfoApi, InstitutionsApi, ListApi, MultipleApi, NgramsApi, OpenAlexApi, PeopleApi, PublishersApi, RandomApi, SingleApi, SourcesApi, TopicsApi, WorksApi];

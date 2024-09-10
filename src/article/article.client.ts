import { BaseClient } from '../base.client';
import {
  PagingParameters,
  ArticleForCreate,
  ArticleCreateResponse,
  ArticleRetrieveResponse,
  ArticleForUpdate,
  ArticleUpdateResponse, OptionalFilters, ArticleOptionalFilters,
} from '../index';
import { Err, Ok, Result } from 'ts-results';
import { handleRequestError, RequestError } from '../request-error';
import { ArticleFilterRetrieveResponse } from './article.type';
import uri from 'uri-tag';

export class ArticlesClient extends BaseClient {
  async createArticle(
    article: ArticleForCreate,
  ): Promise<Result<ArticleCreateResponse, RequestError>> {
    return this.axios
      .post<ArticleCreateResponse>('/articles', article)
      .then((result) => Ok(result.data))
      .catch((error) => {
        return Err(handleRequestError(error));
      });
  }

  async retrieveArticle(id: string): Promise<Result<ArticleRetrieveResponse, RequestError>> {
    return this.axios
      .get<ArticleRetrieveResponse>(uri`/articles/${id}`)
      .then((result) => Ok(result.data))
      .catch((error) => {
        return Err(handleRequestError(error));
      });
  }

  async updateArticle(
    id: string,
    article: ArticleForUpdate,
  ): Promise<Result<ArticleUpdateResponse, RequestError>> {
    return this.axios
      .put<ArticleUpdateResponse>(uri`/articles/${id}`, article)
      .then((result) => Ok(result.data))
      .catch((error) => {
        return Err(handleRequestError(error));
      });
  }

  async deleteArticle(
    id: string,
  ): Promise<Result<null, RequestError>> {
    return this.axios
      .delete(uri`/articles/${id}`)
      .then(() => Ok(null))
      .catch((error) => {
        return Err(handleRequestError(error));
      });
  }

  async filterArticle(
    filter?: ArticleOptionalFilters & Partial<PagingParameters>,
  ): Promise<Result<ArticleFilterRetrieveResponse, RequestError>> {
    return this.axios
      .get<ArticleFilterRetrieveResponse>(uri`/articles`, { params: filter })
      .then((result) => Ok(result.data))
      .catch((error) => {
        return Err(handleRequestError(error));
      });
  }
}

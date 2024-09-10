import { PagingOfRessources } from '../recurringTemplate/recurringTemplate.type';
import { InvoiceCreateResponse } from '../invoice/invoice-dto.type';

export type Article = {
  id: string;
  organizationId: string;
  createdDate: string;
  updatedDate: string;
  archived: boolean;
  title: string;
  description: string;
  type: "PRODUCT" | "SERVICE";
  articleNumber: string;
  gtin: string;
  note: string;
  unitName: string;
  price: ArticlePrice;
  version: number;
}

export type ArticlePrice = {
  netPrice: number;
  grossPrice: number;
  leadingPrice: "NET" | "GROSS";
  taxRate: 0 | 7 | 19;
}

export type ArticleForCreate = Omit<Article, "price"> & {
  price: ArticlePriceForCreate;
};

export type ArticlePriceForCreate = {
  netPrice?: number;
  grossPrice?: number;
  leadingPrice: "NET" | "GROSS";
  taxRate: 0 | 7 | 19;
};

export type ArticleForUpdate = ArticleForCreate;

export type ArticleFilterRetrieveResponse = {
  content: Partial<Article>[] & Partial<PagingOfRessources>;
};

export type ArticleCreateResponse = InvoiceCreateResponse;
export type ArticleRetrieveResponse = Partial<Article>;
export type ArticleUpdateResponse = ArticleCreateResponse;

export type ArticleOptionalFilters = {
  articleNumber?: string;
  gtin?: string;
  type?: "PRODUCT" | "SERVICE";
}
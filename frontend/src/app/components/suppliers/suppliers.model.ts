export interface Supplier {
  id?: number | string | undefined;
  code: number | undefined;
  name: string | undefined;
  shortname: string | undefined;
  cnpj: string | undefined;
  state_inscription?: string | undefined;
  city_inscription?: string | undefined;
  telephone: string | undefined;
  whatsapp?: string | undefined;
  address: string | undefined;
  city: string | undefined;
  neighborhood: string | undefined;
  state: States[] | string | undefined;
  zip_code: string | undefined;
  representative_sales?: string | undefined;
  representative_whatsapp?: string | undefined;
}

export interface States {
  uf: string;
}

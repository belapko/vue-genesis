export type Entity = {
  id: number
  name: EntityOptions
}

export enum EntityOptions {
  companies = 'Компания',
  leads = 'Сделка',
  contacts = 'Контакт'
}

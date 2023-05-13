export interface IMenu {
  items: IMenuItem[],
  slug: string,
  term_id: number,
  count: number
}

export interface IMenuItem {
  ID: number,
  title: string,
  slug: string,
  child_items: IChildItem[],
  url: string

}

export interface IChildItem {
  title: string,
  url: string,
  ID: number
}
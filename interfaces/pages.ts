interface IPage {
  title: string,
  content: string,
  slug: string
}

export type IRenderedPage = {
  [K in keyof IPage]: { rendered: IPage[K] }
};

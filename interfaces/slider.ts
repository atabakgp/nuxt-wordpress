export interface ISliderItem {
  id: number,
  slug: string,
  title: {
    rendered: string,
  },
  excerpt: {
    rendered: string,
  },
  featured_media: number,
  media: ISliderMedia

}

export interface ISliderMedia {
  id: number,
  media_type: string,
  source_url: string
}
import { IRenderedPage } from "@/interfaces/pages";
import { IMenu, IMenuItem, IChildItem } from "@/interfaces/menu";

export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  const getMainMenu = async () => {
    return useFetch<IMenu>(`${wpUri}/menus/v1/menus/main-menu`);
  }

  // Get All Pages
  // const getPages = async () => get("/wp/v2/pages", {
  //   transform: (pages: IRenderedPage[]) =>
  //     pages.map((page: IRenderedPage) => ({
  //       title: page.title.rendered,
  //       content: page.content.rendered,
  //       slug: page.slug
  //     })),
  // });


  // Get All Posts
  // const getPosts = async (categories: number, page: number = 1, perPage: number = 9) => {
  //   let query = `posts?_embed&perPage=${perPage}&page=${page}`;
  //   if (categories) {
  //     query += `&categories=${categories};`
  //   }
  //   return get(query);
  // }

  // Get Single Post
  // const getSinglePost = async (slug: string) => get(`posts?slug=${slug}$_embed`);

  // Get All Categories
  // const getCategories = async () => get("categories");

  // Get single Category

  // const getSingleCategory = async (slug: string) => (`categories?slug=${slug}`);

  return {
    getMainMenu
  }

}
export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  const get = async (endpoint: string) => {
    return useFetch(`${wpUri}/${endpoint}`);
  }

  // Get All Pages
  const getPages = async () => get("pages");

  // Get All Posts
  const getPosts = async (categories: number, page: number = 1, perPage: number = 9) => {
    let query = `posts?_embed&perPage=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories};`
    }
    return get(query);
  }

  // Get Single Post
  const getSinglePost = async (slug: string) => get(`posts?slug=${slug}$_embed`);

  // Get All Categories
  const getCategories = async () => get("categories");

  // Get single Category

  const getSingleCategory = async (slug: string) => (`categories?slug=${slug}`);

  return {
    getPages,
    getPosts,
    getSinglePost,
    getCategories,
    getSingleCategory
  }

}
import { useQuery } from "react-query";
import { getPosts } from "../api";

const usePosts = () => {
  return useQuery(["posts"], async () => {
    const response = await getPosts();
    return response.data;
  });
};

export default usePosts;

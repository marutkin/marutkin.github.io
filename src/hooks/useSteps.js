import { useQuery } from "react-query";
import { getSteps } from "../api";

const useSteps = () => {
  return useQuery(["steps"], async () => {
    const response = await getSteps();
    return response.data;
  });
};

export default useSteps;

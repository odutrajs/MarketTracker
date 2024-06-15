import { useQuery } from "@tanstack/react-query";

export const useProcessImage = () => {
  const query = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {},
  });
};

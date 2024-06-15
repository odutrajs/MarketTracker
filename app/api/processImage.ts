import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProcessImage = (imageFile: any) => {
  const query = useQuery({
    queryKey: ["processImage", imageFile],
    queryFn: async () => {
      const formData = new FormData();
      formData.append("nfPhoto", imageFile);

      const response = await axios.post(
        "http://localhost:4454/process",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    },
    enabled: !!imageFile, // Run the query only if imageFile is provided
  });

  return query;
};

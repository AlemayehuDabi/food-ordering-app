import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: String;
  email: String;
};

export const useCreateMyUser = () => {
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isError,
    isLoading,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isError,
    isLoading,
    isSuccess,
  };
};

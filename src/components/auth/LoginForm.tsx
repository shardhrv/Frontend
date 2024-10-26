import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdAccountCircle, MdPassword } from "react-icons/md";

import BaseButton from "../ui/BaseButton";
import BaseInput from "../ui/BaseInput";


const LoginForm: React.FC = () => {
  interface FormData {
    username: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({
		username: "",
		password: "",
	});

  const queryClient = useQueryClient();

  const {
		mutate: loginMutation,
		isPending,
		isError,
		error,
	} = useMutation({
		mutationFn: async (credentials: FormData) => {
      const { username, password } = credentials;
			
      try {
				const res = await fetch("/api/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ username, password }),
				});

				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
        console.log(data);
        return data;
			} catch (error: any) {
				console.error(error);
        throw error;
			}
		},
		onSuccess: () => {
			// refetch the authUser
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
	});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  return (
    <div>
      <div className="w-full text-left text-[#4A9B74] whitespace-nowrap overflow-hidden text-ellipsis mb-6">
          Sign in to your account
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="flex flex-col items-start space-y-2 py-2">
        <label className='input input-bordered rounded flex items-center gap-2 w-full'>
          <BaseInput
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <MdAccountCircle className="text-3xl" />
        </label>
      </div>
      <div className="flex flex-col items-start space-y-2 py-2">
        <label className='input input-bordered rounded flex items-center gap-2 w-full'>
        <BaseInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <MdPassword className="text-3xl"/>
        </label>
      </div>
      <div className="flex flex-col items-start space-y-2 py-2">
        <BaseButton type="submit">
          {isPending ? "Loading..." : "Login"}
        </BaseButton>
        {isError && <p className='text-red-500'>{error.message}</p>}
      </div>
      </form>
    </div>
  );
};
  
  export default LoginForm;
import { toast } from "react-hot-toast";

export const handleError = (error: unknown) => {
  // Check if the error is an instance of Error (thrown by fetch or custom logic)
  if (error instanceof Error) {
    const errorMessage = error.message;

    // Parse the error message for custom error structures if needed
    if (errorMessage.includes("401")) {
      toast.error("Please login");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (errorMessage.includes("403")) {
      toast.error("You are not authorised to perform this action.");
    } else if (errorMessage.includes("500")) {
      toast.error("Internal server error. Please try again later.");
    } else {
      toast.error(errorMessage || "An unknown error occurred.");
    }
  } else {
    // Generic fallback for unknown error structures
    toast.error("An unknown error occurred. Please try again.");
  }
};

import { FaSpinner } from "react-icons/fa";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <FaSpinner className="animate-spin"/>
      <p className="text-sm text-muted-foreground">
        Generating...
      </p>
    </div>
  );
};

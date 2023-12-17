import MagnifyingGlassIcon from "@/assets/icons/magnifying-glass.svg?react";
import { cn } from "@/utils/tailwind";

export type SearchInputProps = JSX.IntrinsicElements["input"];

export default function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        className={cn("block w-full py-2 pr-2 pl-8 focus:outline-none bg-gray-100 text-gray-500 text-sm", className)}
        {...props}
      />
    </div>
  );
}

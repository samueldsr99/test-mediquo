import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { useSearchParams } from "react-router-dom";

import { HomeLoader } from "@/app/loader";

import RoomsList from "./rooms-list";
import SearchInput from "./search-input";

export default function Drawer() {
  const { rooms } = useLoaderData() as HomeLoader;
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [searchState, setSearchState] = useState<string | null>(search);

  useEffect(() => {
    const id = setTimeout(() => {
      setSearchParams({ search: searchState ?? "" });
    }, 350);

    return () => {
      clearTimeout(id);
    };
  }, [searchState, setSearchParams]);

  const handleSearchInputChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value);
  };

  return (
    <aside className="w-72 px-4 py-2 border-r min-h-screen">
      <SearchInput placeholder="Search" defaultValue={search ?? ""} onChange={handleSearchInputChage} />
      <RoomsList rooms={rooms} />
    </aside>
  );
}

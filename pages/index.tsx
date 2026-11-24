import { useState } from "react";
import { mockTeams } from "../data/mockTeams";
import SearchBar from "../components/SearchBar";
import StandingsTable from "../components/StandingsTable";

// Home Dashboard demonstrating lifted state shared between SearchBar and StandingsTable
export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter teams based on the lifted searchQuery state
  const filteredTeams = mockTeams.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
  );

  const handleReset = () => {
    setSearchQuery("");
  };

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Premier League Standings
        </h1>
        <p className="text-slate-600 mt-1">
          Phase 1 UI Skeleton using component architecture and lifted state.
        </p>
      </header>

      {/* Interactive SearchBar updates parent state */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onReset={handleReset}
      />

      {/* StandingsTable receives filtered results via props */}
      <StandingsTable teams={filteredTeams} />
    </div>
  );
}

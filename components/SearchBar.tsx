interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
}

// Controlled search input component receiving state and handlers via props
export default function SearchBar({
  searchQuery,
  onSearchChange,
  onReset,
}: SearchBarProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-6">
      <label
        htmlFor="club-search"
        className="block text-sm font-semibold text-slate-700 mb-2"
      >
        Filter Clubs by Name
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="club-search"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Type a club name (e.g., Arsenal, Liverpool)..."
          className="grow px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          type="button"
          onClick={onReset}
          className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium rounded-md transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { mockTeams } from "../../data/mockTeams";

// Dynamic route displaying club details and an interactive favorite toggle
export default function TeamDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  // Local interactive state for following/favoriting the club
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const team = mockTeams.find((t) => t.id === id);

  if (!router.isReady) {
    return <p className="text-slate-500">Loading club details...</p>;
  }

  if (!team) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-bold text-slate-800">Club not found</h2>
        <Link
          href="/"
          className="text-purple-600 hover:underline mt-4 inline-block"
        >
          &larr; Back to Standings
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        href="/"
        className="text-sm font-medium text-purple-600 hover:underline mb-6 inline-block"
      >
        &larr; Back to Standings
      </Link>

      {/* Club Header Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
            Rank #{team.position}
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            {team.name} ({team.shortName})
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Stadium: {team.stadium} &bull; City: {team.city} &bull; Founded:{" "}
            {team.founded}
          </p>
        </div>

        {/* Interactive component requirement for Page 2 */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors ${
            isFavorite
              ? "bg-amber-400 text-slate-900"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {isFavorite ? "★ Following Club" : "☆ Follow Club"}
        </button>
      </div>

      {/* Season Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
          <p className="text-xs text-slate-500 uppercase">Points</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">
            {team.points}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
          <p className="text-xs text-slate-500 uppercase">Matches Played</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">
            {team.played}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
          <p className="text-xs text-slate-500 uppercase">
            Wins / Draws / Losses
          </p>
          <p className="text-lg font-bold text-slate-900 mt-1">
            {team.won}W - {team.drawn}D - {team.lost}L
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
          <p className="text-xs text-slate-500 uppercase">Goal Difference</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">
            {team.goalDifference > 0
              ? `+${team.goalDifference}`
              : team.goalDifference}
          </p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Team } from "../data/mockTeams";

interface StandingsTableProps {
  teams: Team[];
}

// Reusable table component rendering filtered club data passed via props
export default function StandingsTable({ teams }: StandingsTableProps) {
  if (teams.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 text-center text-slate-500">
        No clubs found matching your search criteria.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-100 border-b border-slate-200 text-xs uppercase text-slate-600">
            <th className="py-3 px-4">Pos</th>
            <th className="py-3 px-4">Club</th>
            <th className="py-3 px-4 text-center">MP</th>
            <th className="py-3 px-4 text-center">W</th>
            <th className="py-3 px-4 text-center">D</th>
            <th className="py-3 px-4 text-center">L</th>
            <th className="py-3 px-4 text-center">GD</th>
            <th className="py-3 px-4 text-center">Pts</th>
            <th className="py-3 px-4 text-right">Details</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 text-sm">
          {teams.map((team) => (
            <tr key={team.id} className="hover:bg-slate-50 transition-colors">
              <td className="py-3 px-4 font-semibold">{team.position}</td>
              <td className="py-3 px-4 font-medium text-slate-900">
                {team.name}
              </td>
              <td className="py-3 px-4 text-center">{team.played}</td>
              <td className="py-3 px-4 text-center">{team.won}</td>
              <td className="py-3 px-4 text-center">{team.drawn}</td>
              <td className="py-3 px-4 text-center">{team.lost}</td>
              <td className="py-3 px-4 text-center">
                {team.goalDifference > 0
                  ? `+${team.goalDifference}`
                  : team.goalDifference}
              </td>
              <td className="py-3 px-4 text-center font-bold text-purple-700">
                {team.points}
              </td>
              <td className="py-3 px-4 text-right">
                <Link
                  href={`/teams/${team.id}`}
                  className="text-xs font-semibold text-purple-600 hover:underline"
                >
                  View &rarr;
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

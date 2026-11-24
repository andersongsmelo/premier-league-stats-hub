// TypeScript interface defining the structure of a Premier League club
export interface Team {
  id: string;
  position: number;
  name: string;
  shortName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalDifference: number;
  points: number;
  stadium: string;
  founded: number;
  city: string;
}

// Mock data for Phase 1 UI skeleton and routing tests
// Will be replaced by live Football API fetch calls in Phase 2
export const mockTeams: Team[] = [
  {
    id: "arsenal",
    position: 1,
    name: "Arsenal FC",
    shortName: "ARS",
    played: 11,
    won: 8,
    drawn: 2,
    lost: 1,
    goalDifference: 15,
    points: 26,
    stadium: "Emirates Stadium",
    founded: 1886,
    city: "London",
  },
  {
    id: "man-city",
    position: 2,
    name: "Manchester City",
    shortName: "MCI",
    played: 11,
    won: 8,
    drawn: 1,
    lost: 2,
    goalDifference: 12,
    points: 25,
    stadium: "Etihad Stadium",
    founded: 1880,
    city: "Manchester",
  },
  {
    id: "liverpool",
    position: 3,
    name: "Liverpool FC",
    shortName: "LIV",
    played: 11,
    won: 7,
    drawn: 3,
    lost: 1,
    goalDifference: 11,
    points: 24,
    stadium: "Anfield",
    founded: 1892,
    city: "Liverpool",
  },
  {
    id: "chelsea",
    position: 4,
    name: "Chelsea FC",
    shortName: "CHE",
    played: 11,
    won: 6,
    drawn: 3,
    lost: 2,
    goalDifference: 8,
    points: 21,
    stadium: "Stamford Bridge",
    founded: 1905,
    city: "London",
  },
];

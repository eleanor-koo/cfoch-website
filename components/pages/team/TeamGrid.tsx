import { team } from "@lib/data/team";
import TeamPerson from "./TeamPerson";

export default function TeamGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 p-5 gap-8 padded-section">
      {team.map((person) => (
        <TeamPerson key={person.name} person={person} />
      ))}
    </div>
  );
}

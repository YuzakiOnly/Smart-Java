import TeamMemberCard from "./team-member-card";
import { teamMembers } from "@/lib/data/team-data";

export default function TeamGrid() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center mb-20">
                    <div className="h-px w-32 bg-linear-to-r from-transparent to-slate-700"></div>
                    <div className="px-6 text-sm tracking-[0.3em] text-slate-500 uppercase">
                        Our Team
                    </div>
                    <div className="h-px w-32 bg-linear-to-l from-transparent to-slate-700"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                    {teamMembers.map((member, i) => (
                        <TeamMemberCard
                            key={i}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            specialty={member.specialty}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
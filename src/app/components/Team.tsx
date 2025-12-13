import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function Team() {
  const team = [
    {
      name: "Sarah Chen",
      role: "President",
      initials: "SC",
      bio: "Computer Science major passionate about AI and machine learning.",
    },
    {
      name: "James Wilson",
      role: "Vice President",
      initials: "JW",
      bio: "Full-stack developer with a love for building impactful products.",
    },
    {
      name: "Emma Rodriguez",
      role: "Events Coordinator",
      initials: "ER",
      bio: "Organizing amazing tech events and bringing the community together.",
    },
    {
      name: "Michael Lee",
      role: "Technical Lead",
      initials: "ML",
      bio: "Leading workshops and hackathons to empower fellow students.",
    },
    {
      name: "Olivia Brown",
      role: "Marketing Director",
      initials: "OB",
      bio: "Spreading the word about TechSoc and growing our community.",
    },
    {
      name: "David Kim",
      role: "Treasurer",
      initials: "DK",
      bio: "Managing finances and securing sponsorships for our initiatives.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            Dedicated students working to make TechSoc the best tech community on campus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl mb-1">{member.name}</h3>
              <div className="text-blue-600 mb-3">{member.role}</div>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="GitHub">
                  <Github className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Email">
                  <Mail className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

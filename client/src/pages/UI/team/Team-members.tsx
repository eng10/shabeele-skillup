import { Card, CardContent } from "../../../components/ui/card";
import { Share2 } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Nuradin Osman",
    role: "CEO OWNER",
    image: "/img/team1.png",
  },
  {
    name: "Badri",
    role: "SUPERVISOR",
    image: "/img/team2.png",
  },
  {
    name: "Cadeeed ahmed",
    role: "MANAGER",
    image: "/img/team3.png",
  },
  {
    name: "Suhayb Gadhle",
    role: "MARKETING",
    image: "/img/team4.png",
  },
];

export function TeamMembers() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-none">
              <div className="relative aspect-square  ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover transition-transform rounded-3xl duration-300 overflow-hidden hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                {index === 0 && (
                  <div className="absolute bottom-4 right-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-yellow-300 relative -left-3 hover:bg-yellow-400 transition-colors"
                    >
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">
                        Share {member.name}'s profile
                      </span>
                    </Button>
                  </div>
                )}
              </div>
              <CardContent className="pt-4">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2">
                  <div className="py-1 px-1 rounded-full bg-[#5B8C51] "></div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {member.role}
                  </span>
                  </div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

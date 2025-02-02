"use client";

import { Card } from "@/components/ui/card";
import { Coins, TrendingUp, Users, Code } from "lucide-react";

const stats = [
  {
    title: "Dolaşım",
    value: "450M",
    icon: Coins,
    gradient: "from-primary/10 to-secondary/10",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    title: "Pazarlama",
    value: "60M",
    icon: TrendingUp,
    gradient: "from-secondary/10 to-accent/10",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    title: "Geliştirme",
    value: "21.6M",
    icon: Code,
    gradient: "from-accent/10 to-muted/10",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    title: "Takım",
    value: "84M",
    icon: Users,
    gradient: "from-muted/10 to-primary/10",
    iconBg: "bg-muted/20",
    iconColor: "text-muted",
  },
];

export default function StatsCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Card key={i} className={`bg-gradient-to-br ${stat.gradient} border-0`}>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className={`rounded-xl ${stat.iconBg} p-3`}>
                <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
}

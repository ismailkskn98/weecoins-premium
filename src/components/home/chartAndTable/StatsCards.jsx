"use client";

import { Card } from "@/components/ui/card";
import { Coins, TrendingUp, Users, Code } from "lucide-react";
import { useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import CountUp from "react-countup";

export default function StatsCards() {
  const t = useTranslations("HomePage");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const stats = [
    {
      title: t("chartAndTable.table.categories.projectSustainability"),
      value: "30",
      icon: Coins,
      gradient: "from-primary/10 to-secondary/10 ",
      iconBg: "bg-zinc-200",
      iconColor: "text-zinc-500",
    },
    {
      title: t("chartAndTable.table.categories.marketing"),
      value: "510",
      icon: TrendingUp,
      gradient: "from-secondary/10 to-accent/10 ",
      iconBg: "bg-green-200",
      iconColor: "text-green-400",
    },
    {
      title: t("chartAndTable.table.categories.development"),
      value: "18",
      icon: Code,
      gradient: "from-accent/10 to-muted/10 ",
      iconBg: "bg-yellow-200",
      iconColor: "text-yellow-500",
    },
    {
      title: t("chartAndTable.table.categories.teamAdvisor"),
      value: "42",
      icon: Users,
      gradient: "from-muted/10 to-primary/10 ",
      iconBg: "bg-red-200",
      iconColor: "text-red-400",
    },
  ];

  return (
    <section ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Card key={i} className={`border border-solid dark:border-gray-800 dark:bg-[#0A0A0A] ${stat.gradient}`}>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className={`rounded-xl ${stat.iconBg} p-3`}>
                <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground">
                  {isInView && <CountUp end={Number(stat.value)} duration={5} />}
                  <span className="uppercase">m</span>
                </p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
}

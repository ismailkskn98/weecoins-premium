"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { useTheme } from "next-themes";
import StatsCards from "./StatsCards";
import SectionTitle from "@/components/common/SectionTitle";
import { useTranslations } from "next-intl";
import { FaPercentage } from "react-icons/fa";

export default function ChartAndTableMain() {
  const t = useTranslations("HomePage");
  const chartRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const dataValues = [18, 510, 30, 42]; // Orijinal veriler
    const total = dataValues.reduce((sum, value) => sum + value, 0); // Toplamı hesapla

    const percentageData = dataValues.map((value) => ((value / total) * 100).toFixed(2));

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          t("chartAndTable.table.categories.development"),
          t("chartAndTable.table.categories.marketing"),
          t("chartAndTable.table.categories.projectSustainability"),
          t("chartAndTable.table.categories.teamAdvisor"),
        ],
        datasets: [
          {
            data: percentageData,
            backgroundColor: ["#4ADE80", "#EFC229", "#222222", "#F87171"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: "60%",
        layout: {
          padding: 10,
        },
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: isDark ? "#fff" : "#000",
              font: {
                size: 13,
                family: "Inter",
              },
              padding: 20,
              usePointStyle: true,
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, [theme]);

  const distributionData = [
    { category: t("chartAndTable.table.categories.marketing"), amount: "510,000,000" },
    { category: t("chartAndTable.table.categories.projectSustainability"), amount: "30,000,000" },
    { category: t("chartAndTable.table.categories.teamAdvisor"), amount: "42,000,000" },
    { category: t("chartAndTable.table.categories.development"), amount: "18,000,000" },
    // { category: t("chartAndTable.table.categories.circulation"), amount: "450,000,000" },
  ];

  const totalAmount = "600,000,000";

  return (
    <main className="pageSection w-full space-y-8">
      <SectionTitle title={t("chartAndTable.title")} description={t("chartAndTable.description")} />
      <StatsCards />
      <section className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <article className="to-dark w-full flex-1 rounded-lg border bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-[#0A0A0A]">
          <h2 className="mb-4 text-center text-lg font-semibold text-zinc-900 dark:text-zinc-200 md:text-start">
            {t("chartAndTable.table.title")}
          </h2>
          <div className="overflow-x-auto lg:py-6">
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-300 hover:bg-transparent dark:border-gray-800">
                  <TableHead className="text-zinc-900 dark:text-zinc-200">{t("chartAndTable.table.category")}</TableHead>
                  <TableHead className="text-right text-zinc-900 dark:text-zinc-200">{t("chartAndTable.table.mount")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {distributionData.map((item, index) => (
                  <TableRow key={index} className="border-zinc-300 hover:bg-dark-0d0d0d/10 dark:border-gray-800">
                    <TableCell className="text-zinc-900 dark:text-zinc-200">{item.category}</TableCell>
                    <TableCell className="text-right font-mono text-zinc-900 dark:text-zinc-200">{item.amount}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-t-2 border-zinc-300 hover:bg-dark-0d0d0d/10 dark:border-gray-800">
                  <TableCell className="font-bold text-zinc-900 dark:text-zinc-200">{t("chartAndTable.table.total")}</TableCell>
                  <TableCell className="text-right font-mono font-bold text-zinc-900 dark:text-zinc-200">{totalAmount}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </article>

        <article className="max-w-9/12 w-full rounded-lg border bg-white p-3 shadow-lg dark:border-gray-800 dark:bg-[#0A0A0A] sm:max-w-full sm:p-6 lg:w-auto lg:min-w-[600px]">
          <h2 className="mb-0 flex items-center gap-1 text-center text-lg font-semibold text-foreground sm:mb-4 md:text-start">
            {t("chartAndTable.chartTitle")} <FaPercentage />
          </h2>
          <div className="relative mx-auto aspect-square max-w-[300px] sm:max-w-[500px] lg:max-w-[365px]">
            <canvas ref={chartRef} />
          </div>
        </article>
      </section>
    </main>
  );
}

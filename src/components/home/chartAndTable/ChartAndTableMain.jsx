"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { useTheme } from "next-themes";
import StatsCards from "./StatsCards";
import SectionTitle from "@/components/common/SectionTitle";

export default function ChartAndTableMain() {
  const chartRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Dolaşım", "Pazarlama", "Proje/Sürdürülebilirlik", "Takım/Danışman"],
        datasets: [
          {
            data: [75, 10, 10, 1.4],
            backgroundColor: ["#833e15", "#f7cf68", "#222222", "#6F6C90"],
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
  }, [isDark]);

  return (
    <main className="w-full space-y-8">
      <SectionTitle title="WEECOINS PREMIUM" description="TOPLAM ARZ VE DAĞILIMI" />
      <StatsCards />
      <section className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <article className="to-dark w-full flex-1 rounded-lg border bg-gradient-to-tr from-primary p-6 shadow-lg dark:border-gray-800">
          <h2 className="mb-4 text-center text-lg font-semibold text-white md:text-start">Detaylı Dağılım</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-white">Kategori</TableHead>
                  <TableHead className="text-right text-white">Miktar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Pazarlama", "60,000,000"],
                  ["Proje/sürdürülebilirlik", "60,000,000"],
                  ["Takım/Danışman", "84,000,000"],
                  ["Geliştirme", "21,600,000"],
                  ["Dolaşım", "450,000,000"],
                ].map(([category, amount], i) => (
                  <TableRow key={i} className="border-gray-700">
                    <TableCell className="text-white">{category}</TableCell>
                    <TableCell className="text-right font-mono text-white">{amount}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-t-2 border-gray-700">
                  <TableCell className="font-bold text-white">Toplam</TableCell>
                  <TableCell className="text-right font-mono font-bold text-white">600,000,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </article>

        <article className="max-w-9/12 w-full rounded-lg border bg-card p-3 shadow-lg dark:border-gray-800 sm:max-w-full sm:p-6 lg:w-auto lg:min-w-[600px]">
          <h2 className="mb-0 text-center text-lg font-semibold text-foreground sm:mb-4 md:text-start">Dağılım Grafiği</h2>
          <div className="relative mx-auto aspect-square max-w-[300px] sm:max-w-[500px] lg:max-w-[365px]">
            <canvas ref={chartRef} />
          </div>
        </article>
      </section>
    </main>
  );
}

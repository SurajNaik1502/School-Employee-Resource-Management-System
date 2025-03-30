"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Users,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      icon: BarChart3,
      href: "/dashboard",
      color: "text-sky-500",
    },
    {
      label: "Attendance",
      icon: CalendarDays,
      href: "/attendance",
      color: "text-violet-500",
    },
    {
      label: "Leave",
      icon: Users,
      href: "/employees",
      color: "text-pink-700",
    },
    {
      label: "TimeTable",
      icon: CalendarDays,
      href: "/timetable",
      color: "text-yellow-700",
    },
    {
      label: "Tasks",
      icon: ClipboardList,
      href: "/tasks",
      color: "text-orange-700",
    },
    {
      label: "Communication",
      icon: MessageSquare,
      href: "/communication",
      color: "text-emerald-500",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
    },
  ];

  return (
    <div className="space-y-4 py-4 flex flex-col h-screen bg-white/10 backdrop-blur-lg border-r border-white/20 w-72">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">Resourcify</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "bg-white/10" : "transparent",
                route.color
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3">
        <Button variant="ghost" size="lg" className="w-full justify-start text-muted-foreground">
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  Calendar,
} from "lucide-react";

export default function TasksPage() {
  return (
    <div className="h-full relative">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" /> New Task
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-500/10 rounded-full">
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Pending Tasks</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-500/10 rounded-full">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Completed</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-500/10 rounded-full">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Overdue</p>
                <h3 className="text-2xl font-bold">2</h3>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="p-6 border-none bg-white/10 backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-4">Today's Tasks</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Review Exam Papers",
                  deadline: "2:00 PM",
                  priority: "High",
                  status: "pending",
                },
                {
                  title: "Staff Meeting",
                  deadline: "3:30 PM",
                  priority: "Medium",
                  status: "pending",
                },
                {
                  title: "Update Attendance Records",
                  deadline: "5:00 PM",
                  priority: "Low",
                  status: "completed",
                },
              ].map((task, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        task.priority === "High"
                          ? "bg-red-500"
                          : task.priority === "Medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    />
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Due at {task.deadline}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className={
                      task.status === "completed"
                        ? "text-green-500"
                        : "text-blue-500"
                    }
                  >
                    {task.status === "completed" ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      "Complete"
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-none bg-white/10 backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-4">Upcoming Tasks</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Parent-Teacher Meeting",
                  date: "Tomorrow",
                  time: "10:00 AM",
                },
                {
                  title: "Submit Monthly Report",
                  date: "Mar 25, 2024",
                  time: "4:00 PM",
                },
                {
                  title: "Curriculum Planning",
                  date: "Mar 27, 2024",
                  time: "2:00 PM",
                },
              ].map((task, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5"
                >
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {task.date} at {task.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
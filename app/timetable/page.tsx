"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Users, BookOpen } from "lucide-react";

export default function TimetablePage() {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];

  return (
    <div className="h-full relative">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">Timetable</h2>
          <Button className="bg-purple-500 hover:bg-purple-600">
            Download Schedule
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-500/10 rounded-full">
                <Clock className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Total Hours</p>
                <h3 className="text-2xl font-bold">30</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-500/10 rounded-full">
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Classes</p>
                <h3 className="text-2xl font-bold">6</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-500/10 rounded-full">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Students</p>
                <h3 className="text-2xl font-bold">180</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-500/10 rounded-full">
                <Calendar className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Working Days</p>
                <h3 className="text-2xl font-bold">5</h3>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 border-none bg-white/10 backdrop-blur-lg overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4">Weekly Schedule</h3>
          <div className="min-w-[800px]">
            <div className="grid grid-cols-6 gap-2">
              <div className="p-3 font-medium">Time</div>
              {weekDays.map((day) => (
                <div key={day} className="p-3 font-medium">
                  {day}
                </div>
              ))}
            </div>
            {timeSlots.map((time, i) => (
              <div key={i} className="grid grid-cols-6 gap-2">
                <div className="p-3 text-sm font-medium">{time}</div>
                {weekDays.map((day, j) => (
                  <div
                    key={`${i}-${j}`}
                    className="p-3 rounded-lg bg-white/5 text-sm"
                  >
                    {Math.random() > 0.5 ? (
                      <div>
                        <p className="font-medium">Class {Math.floor(Math.random() * 5) + 1}</p>
                        <p className="text-xs text-muted-foreground">Room {Math.floor(Math.random() * 10) + 101}</p>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
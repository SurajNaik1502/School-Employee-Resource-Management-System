"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function AttendancePage() {
  const [isWithinGeofence] = useState(true);
  const [currentTime] = useState(new Date().toLocaleTimeString());

  return (
    <div className="h-full relative">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">Attendance</h2>
          <Button 
            className="bg-green-500 hover:bg-green-600"
            disabled={!isWithinGeofence}
          >
            Mark Attendance
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-500/10 rounded-full">
                <MapPin className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Location Status</p>
                <h3 className="text-2xl font-bold">{isWithinGeofence ? "Within Campus" : "Outside Campus"}</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-500/10 rounded-full">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Current Time</p>
                <h3 className="text-2xl font-bold">{currentTime}</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-500/10 rounded-full">
                <CheckCircle className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Today's Status</p>
                <h3 className="text-2xl font-bold">Present</h3>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 border-none bg-white/10 backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-4">Monthly Attendance Overview</h3>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 31 }, (_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg flex items-center justify-center text-sm font-medium bg-white/5"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border-none bg-white/10 backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { date: "2024-03-20", time: "08:30 AM", status: "Check In" },
              { date: "2024-03-20", time: "05:30 PM", status: "Check Out" },
              { date: "2024-03-19", time: "08:45 AM", status: "Check In" },
              { date: "2024-03-19", time: "05:15 PM", status: "Check Out" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                <Calendar className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="font-medium">{activity.status}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.date} at {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
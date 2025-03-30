"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";

export default function LeavePage() {
  return (
    <div className="h-full relative">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">Leave Management</h2>
          <Button className="bg-blue-500 hover:bg-blue-600">
            Request Leave
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-500/10 rounded-full">
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Total Leave Days</p>
                <h3 className="text-2xl font-bold">20</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-500/10 rounded-full">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Approved Leaves</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-500/10 rounded-full">
                <Clock3 className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Pending Requests</p>
                <h3 className="text-2xl font-bold">2</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-500/10 rounded-full">
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Rejected Leaves</p>
                <h3 className="text-2xl font-bold">1</h3>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 border-none bg-white/10 backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-4">Recent Leave Requests</h3>
          <div className="space-y-4">
            {[
              {
                type: "Sick Leave",
                date: "Mar 25-26, 2024",
                status: "Pending",
                statusColor: "text-yellow-500",
              },
              {
                type: "Vacation",
                date: "Apr 10-15, 2024",
                status: "Approved",
                statusColor: "text-green-500",
              },
              {
                type: "Personal Leave",
                date: "Mar 18, 2024",
                status: "Rejected",
                statusColor: "text-red-500",
              },
            ].map((leave, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium">{leave.type}</p>
                    <p className="text-sm text-muted-foreground">{leave.date}</p>
                  </div>
                </div>
                <span className={`font-medium ${leave.statusColor}`}>
                  {leave.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
import { Card } from "@/components/ui/card";
import {
  Users,
  UserCheck,
  Clock,
  Calendar,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="h-full relative">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-500/10 rounded-full">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Total Employees</p>
                <h3 className="text-2xl font-bold">156</h3>
              </div>
            </div>
          </Card>
          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-500/10 rounded-full">
                <UserCheck className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Present Today</p>
                <h3 className="text-2xl font-bold">142</h3>
              </div>
            </div>
          </Card>
          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-500/10 rounded-full">
                <Clock className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Late Arrivals</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 p-6 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">Recent Activities</h3>
              <div className="space-y-4 mt-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm">
                    <div className="p-2 bg-blue-500/10 rounded-full">
                      <Calendar className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">New leave request from John Doe</p>
                      <p className="text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="col-span-3 p-6 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">Tasks Overview</h3>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-500/10 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed Tasks</p>
                    <h4 className="text-2xl font-bold">24</h4>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-yellow-500/10 rounded-full">
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Pending Tasks</p>
                    <h4 className="text-2xl font-bold">12</h4>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
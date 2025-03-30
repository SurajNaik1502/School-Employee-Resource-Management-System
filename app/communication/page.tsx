"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Bell,
  Users,
  Send,
  Plus,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function CommunicationPage() {
  return (
    <div className="h-full relative">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">Communication</h2>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" /> New Message
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-500/10 rounded-full">
                <MessageSquare className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Unread Messages</p>
                <h3 className="text-2xl font-bold">5</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-500/10 rounded-full">
                <Bell className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Notifications</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-500/10 rounded-full">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Active Chats</p>
                <h3 className="text-2xl font-bold">3</h3>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-7">
          <Card className="lg:col-span-3 p-6 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex flex-col h-[400px]">
              <h3 className="text-xl font-semibold mb-4">Recent Chats</h3>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search messages..."
                    className="pl-9 bg-white/5"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-4 overflow-y-auto">
                {[
                  {
                    name: "John Smith",
                    message: "When is the next staff meeting?",
                    time: "5m ago",
                    unread: true,
                  },
                  {
                    name: "Sarah Johnson",
                    message: "I've submitted the monthly report",
                    time: "30m ago",
                    unread: true,
                  },
                  {
                    name: "Mike Wilson",
                    message: "Thanks for the update",
                    time: "2h ago",
                    unread: false,
                  },
                ].map((chat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      {chat.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{chat.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {chat.time}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {chat.message}
                      </p>
                    </div>
                    {chat.unread && (
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-4 p-6 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex flex-col h-[400px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Announcements</h3>
                <Button variant="outline">View All</Button>
              </div>
              <div className="flex-1 space-y-4 overflow-y-auto">
                {[
                  {
                    title: "Staff Meeting Reminder",
                    content:
                      "Monthly staff meeting tomorrow at 10 AM in the conference room.",
                    time: "1 hour ago",
                    priority: "high",
                  },
                  {
                    title: "New Curriculum Update",
                    content:
                      "Please review the updated curriculum guidelines for the next semester.",
                    time: "3 hours ago",
                    priority: "medium",
                  },
                  {
                    title: "Holiday Notice",
                    content:
                      "School will be closed next Monday for the public holiday.",
                    time: "1 day ago",
                    priority: "low",
                  },
                ].map((announcement, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-white/5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{announcement.title}</h4>
                      <span className="text-xs text-muted-foreground">
                        {announcement.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {announcement.content}
                    </p>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          announcement.priority === "high"
                            ? "bg-red-500/10 text-red-500"
                            : announcement.priority === "medium"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-green-500/10 text-green-500"
                        }`}
                      >
                        {announcement.priority.charAt(0).toUpperCase() +
                          announcement.priority.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
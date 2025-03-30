"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Bell,
  Moon,
  Sun,
  Lock,
  User,
  Mail,
  Shield,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="h-full relative">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5" />
              <h3 className="text-xl font-semibold">Profile Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Smith"
                  className="bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@school.com"
                  className="bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 890"
                  className="bg-white/5"
                />
              </div>
              <Button className="w-full">Save Changes</Button>
            </div>
          </Card>

          <Card className="p-6 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="w-5 h-5" />
              <h3 className="text-xl font-semibold">Security</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  className="bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  className="bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  className="bg-white/5"
                />
              </div>
              <Button className="w-full">Update Password</Button>
            </div>
          </Card>

          <Card className="p-6 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-2 mb-6">
              <Bell className="w-5 h-5" />
              <h3 className="text-xl font-semibold">Notifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email updates
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Task Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Get reminded about tasks
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none bg-white/10 backdrop-blur-lg">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5" />
              <h3 className="text-xl font-semibold">Privacy</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Profile Visibility</Label>
                  <p className="text-sm text-muted-foreground">
                    Make profile visible to others
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Online Status</Label>
                  <p className="text-sm text-muted-foreground">
                    Show when you're online
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Activity Status</Label>
                  <p className="text-sm text-muted-foreground">
                    Share your activity status
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
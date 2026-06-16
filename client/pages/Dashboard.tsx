import { useLocation } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import {
  Flame,
  CheckCircle2,
  Clock,
  TrendingUp,
  Plus,
  ArrowRight,
  Star,
  Activity,
} from "lucide-react";
import { useState, useEffect } from "react";

interface LearningStats {
  streak: number;
  completedToday: number;
  pendingTopics: number;
  upcomingReminders: number;
}

interface RecentActivity {
  id: string;
  action: string;
  topic: string;
  time: string;
}

export default function Dashboard() {
  const location = useLocation();
  const [stats, setStats] = useState<LearningStats>({
    streak: 12,
    completedToday: 3,
    pendingTopics: 8,
    upcomingReminders: 5,
  });

  const [recentActivity] = useState<RecentActivity[]>([
    {
      id: "1",
      action: "Completed",
      topic: "React Hooks",
      time: "2 hours ago",
    },
    {
      id: "2",
      action: "Added resource",
      topic: "TypeScript Generics",
      time: "5 hours ago",
    },
    {
      id: "3",
      action: "Created note",
      topic: "Next.js App Router",
      time: "1 day ago",
    },
    {
      id: "4",
      action: "Started topic",
      topic: "Web Performance",
      time: "2 days ago",
    },
    {
      id: "5",
      action: "Completed",
      topic: "CSS Flexbox",
      time: "3 days ago",
    },
  ]);

  const [weeklyProgress] = useState([
    { day: "Mon", completed: 2, pending: 3 },
    { day: "Tue", completed: 3, pending: 2 },
    { day: "Wed", completed: 1, pending: 4 },
    { day: "Thu", completed: 4, pending: 1 },
    { day: "Fri", completed: 3, pending: 2 },
    { day: "Sat", completed: 2, pending: 3 },
    { day: "Sun", completed: 5, pending: 0 },
  ]);

  return (
    <MainLayout currentPath="/">
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Main content */}
        <div className="mx-auto max-w-7xl p-6 lg:p-8">
          {/* Welcome section */}
          <div className="mb-12 animate-slide-up">
            <div className="mb-2 text-primary font-semibold text-sm">
              Welcome to LifeOS
            </div>
            <h1 className="heading-xl mb-3 text-white">
              Your Learning Journey Awaits
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Organize your knowledge, track your progress, and master new skills
              with our AI-powered personal knowledge management platform.
            </p>
          </div>

          {/* Stats grid */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Streak card */}
            <div className="glass-card p-6 group cursor-pointer animate-slide-up">
              <div className="flex items-start justify-between mb-4">
                <div className="rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 p-3">
                  <Flame className="h-5 w-5 text-orange-400" />
                </div>
                <span className="text-xs font-semibold text-primary">
                  Active
                </span>
              </div>
              <div className="mb-1">
                <p className="text-4xl font-bold text-white">
                  {stats.streak}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">Day Streak</p>
              <div className="mt-4 h-1 w-full rounded-full bg-white/10">
                <div
                  className="h-1 rounded-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-500"
                  style={{ width: `${Math.min(stats.streak * 8, 100)}%` }}
                />
              </div>
            </div>

            {/* Completed today */}
            <div className="glass-card p-6 group cursor-pointer animate-slide-up">
              <div className="flex items-start justify-between mb-4">
                <div className="rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-xs font-semibold text-green-400">
                  +1 Today
                </span>
              </div>
              <div className="mb-1">
                <p className="text-4xl font-bold text-white">
                  {stats.completedToday}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">Topics Completed</p>
            </div>

            {/* Pending topics */}
            <div className="glass-card p-6 group cursor-pointer animate-slide-up">
              <div className="flex items-start justify-between mb-4">
                <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-xs font-semibold text-blue-400">
                  In Progress
                </span>
              </div>
              <div className="mb-1">
                <p className="text-4xl font-bold text-white">
                  {stats.pendingTopics}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">Pending Topics</p>
            </div>

            {/* Upcoming reminders */}
            <div className="glass-card p-6 group cursor-pointer animate-slide-up">
              <div className="flex items-start justify-between mb-4">
                <div className="rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3">
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-xs font-semibold text-purple-400">
                  This Week
                </span>
              </div>
              <div className="mb-1">
                <p className="text-4xl font-bold text-white">
                  {stats.upcomingReminders}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">Reminders</p>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid gap-6 lg:grid-cols-3 mb-12">
            {/* Weekly progress */}
            <div className="glass-card p-8 lg:col-span-2 animate-slide-up">
              <div className="mb-6">
                <h2 className="heading-md text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Weekly Progress
                </h2>
              </div>
              <div className="flex items-end justify-between gap-2 h-64">
                {weeklyProgress.map((day, index) => {
                  const maxValue = 5;
                  const completedHeight = (day.completed / maxValue) * 100;
                  const pendingHeight = (day.pending / maxValue) * 100;
                  return (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      <div className="flex gap-1 h-40 items-end justify-center flex-1">
                        <div className="flex flex-col justify-end gap-0.5 w-4">
                          <div
                            className="w-4 rounded-t-lg bg-gradient-to-t from-green-500 to-emerald-400 transition-all duration-300"
                            style={{ height: `${completedHeight}%` }}
                            title={`Completed: ${day.completed}`}
                          />
                          <div
                            className="w-4 rounded-t-lg bg-gradient-to-t from-blue-500 to-cyan-400 transition-all duration-300"
                            style={{ height: `${pendingHeight}%` }}
                            title={`Pending: ${day.pending}`}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        {day.day}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-400" />
                  <span className="text-xs text-muted-foreground">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  <span className="text-xs text-muted-foreground">Pending</span>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="glass-card p-8 flex flex-col animate-slide-up">
              <h2 className="heading-md text-white mb-6 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Quick Actions
              </h2>
              <div className="space-y-3 flex-1">
                <button className="w-full flex items-center justify-between group glass-button text-white hover:text-primary-foreground p-4">
                  <span className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    New Topic
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center justify-between group glass-button text-white hover:text-primary-foreground p-4">
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Add Note
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center justify-between group glass-button text-white hover:text-primary-foreground p-4">
                  <span className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Save Resource
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center justify-between group glass-button text-white hover:text-primary-foreground p-4">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Set Reminder
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          </div>

          {/* Recent activity */}
          <div className="glass-card p-8 animate-slide-up">
            <div className="mb-6">
              <h2 className="heading-md text-white flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Recent Activity
              </h2>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={activity.id}
                  className={`flex items-center justify-between py-3 ${
                    index !== recentActivity.length - 1
                      ? "border-b border-white/10 pb-4"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="rounded-full bg-primary/20 p-2">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {activity.action}{" "}
                        <span className="text-primary">{activity.topic}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {activity.action === "Completed" && (
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

import { FileText, Zap } from "lucide-react";

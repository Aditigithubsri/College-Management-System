import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart, BookOpen, GraduationCap, LayoutDashboard, Settings, Users } from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("Dashboard")

  const sidebarItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="w-4 h-4 mr-2" /> },
    { name: "Students", icon: <Users className="w-4 h-4 mr-2" /> },
    { name: "Courses", icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { name: "Faculty", icon: <GraduationCap className="w-4 h-4 mr-2" /> },
    { name: "Analytics", icon: <BarChart className="w-4 h-4 mr-2" /> },
    { name: "Settings", icon: <Settings className="w-4 h-4 mr-2" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">College MS</h1>
        </div>
        <nav className="mt-4">
          {sidebarItems.map((item) => (
            <Button
              key={item.name}
              variant={activeTab === item.name ? "secondary" : "ghost"}
              className="w-full justify-start px-4 py-2 text-left"
              onClick={() => setActiveTab(item.name)}
            >
              {item.icon}
              {item.name}
            </Button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <h2 className="text-3xl font-bold mb-6">{activeTab}</h2>
        {activeTab === "Dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+10% from last semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">56</div>
                <p className="text-xs text-muted-foreground">+3 new courses this semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Faculty Members</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98</div>
                <p className="text-xs text-muted-foreground">+5 new hires this year</p>
              </CardContent>
            </Card>
          </div>
        )}
        {activeTab !== "Dashboard" && (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Content for {activeTab} goes here.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
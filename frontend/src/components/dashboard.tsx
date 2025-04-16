import { useState } from "react";
import {
  BarChart2,
  Users,
  Briefcase,
  FileText,
  PieChart,
  Settings,
  LogOut,
  Menu,
  Bell,
  ChevronDown,
  Search,
  Filter,
  Download,
  Star,
  CalendarCheck,
  UserPlus,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = ({ setShowDashboard, studentSkillsData }) => {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Helper component for User icon
  const User = ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm border-r border-gray-200 hidden lg:block">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              IIT-IIM Resume
            </span>
          </div>
        </div>
        <nav className="mt-6">
          <div className="px-4 mb-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Main
            </p>
          </div>
          <a
            href="#"
            className={`flex items-center px-6 py-3 text-sm ${
              activeSection === "dashboard"
                ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveSection("dashboard")}
          >
            <BarChart2 className="h-5 w-5 mr-3" />
            Dashboard
          </a>
          <a
            href="#"
            className={`flex items-center px-6 py-3 text-sm ${
              activeSection === "candidates"
                ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveSection("candidates")}
          >
            <Users className="h-5 w-5 mr-3" />
            Candidates
          </a>
          <a
            href="#"
            className={`flex items-center px-6 py-3 text-sm ${
              activeSection === "jobs"
                ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveSection("jobs")}
          >
            <Briefcase className="h-5 w-5 mr-3" />
            Jobs
          </a>

          <div className="px-4 mt-6 mb-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Analytics
            </p>
          </div>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setActiveSection("reports")}
          >
            <FileText className="h-5 w-5 mr-3" />
            Reports
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setActiveSection("analytics")}
          >
            <PieChart className="h-5 w-5 mr-3" />
            Analytics
          </a>

          <div className="px-4 mt-6 mb-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Settings
            </p>
          </div>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setActiveSection("settings")}
          >
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-sm text-red-600 hover:bg-red-50"
            onClick={() => setShowDashboard(false)}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </a>
        </nav>
      </aside>

      {/* Mobile sidebar menu button */}
      <div className="lg:hidden fixed bottom-4 left-4 z-50">
        <Button className="rounded-full p-3 h-12 w-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 shadow-lg">
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm border-b border-gray-200 py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center lg:hidden">
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                IIT-IIM Resume
              </span>
            </div>

            <div className="hidden md:flex items-center rounded-md border border-gray-300 px-3 py-1 w-64 bg-white">
              <Search className="h-4 w-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="border-none bg-transparent focus:outline-none text-sm flex-1"
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
                </button>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                      src="/api/placeholder/32/32"
                      alt="User"
                      className="rounded-full"
                    />
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium">Recruiter Admin</p>
                      <p className="text-xs text-gray-500">HR Manager</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center space-x-2 p-2">
                    <img
                      src="/api/placeholder/32/32"
                      alt="User"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">Recruiter Admin</p>
                      <p className="text-xs text-gray-500">admin@company.com</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setShowDashboard(false)}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome Back, Recruiter
                </h1>
                <p className="text-gray-600 mt-1">
                  Here's what's happening with your recruitment pipeline today.
                </p>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <Button variant="outline" className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  New Job
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat Cards */}
              <Card className="hover:shadow-md transition-shadow border-t-4 border-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FileText className="text-blue-500 h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Resumes Processed</p>
                      <div className="flex items-baseline space-x-2">
                        <h3 className="font-bold text-2xl">245</h3>
                        <span className="text-xs text-green-600 flex items-center">
                          +14% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-t-4 border-amber-500">
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-3 rounded-lg mr-4">
                      <Star className="text-amber-500 h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Potential Matches</p>
                      <div className="flex items-baseline space-x-2">
                        <h3 className="font-bold text-2xl">87</h3>
                        <span className="text-xs text-green-600 flex items-center">
                          +5% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-t-4 border-green-500">
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <CalendarCheck className="text-green-500 h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">
                        Interviews Scheduled
                      </p>
                      <div className="flex items-baseline space-x-2">
                        <h3 className="font-bold text-2xl">32</h3>
                        <span className="text-xs text-green-600 flex items-center">
                          +8% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-t-4 border-purple-500">
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <UserPlus className="text-purple-500 h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">New Candidates</p>
                      <div className="flex items-baseline space-x-2">
                        <h3 className="font-bold text-2xl">58</h3>
                        <span className="text-xs text-green-600 flex items-center">
                          +12% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Candidates Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Candidates
              </h2>
              <Button
                variant="ghost"
                className="text-blue-600 hover:text-blue-800"
              >
                View All
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Position
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Skills Match
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Sample candidates - in a real app this would be mapped from data */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="/api/placeholder/40/40"
                              alt="Candidate"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Rahul Sharma
                            </div>
                            <div className="text-sm text-gray-500">
                              rahul.sharma@iitb.ac.in
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          Software Engineer
                        </div>
                        <div className="text-sm text-gray-500">Engineering</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-green-600 h-2.5 rounded-full"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-700">
                            85%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Interview Scheduled
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="/api/placeholder/40/40"
                              alt="Candidate"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Priya Patel
                            </div>
                            <div className="text-sm text-gray-500">
                              priya.p@iima.ac.in
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          Product Manager
                        </div>
                        <div className="text-sm text-gray-500">Management</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-green-600 h-2.5 rounded-full"
                              style={{ width: "92%" }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-700">
                            92%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Application Review
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="/api/placeholder/40/40"
                              alt="Candidate"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Amit Kumar
                            </div>
                            <div className="text-sm text-gray-500">
                              amit.k@iitd.ac.in
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          Data Scientist
                        </div>
                        <div className="text-sm text-gray-500">Analytics</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-amber-500 h-2.5 rounded-full"
                              style={{ width: "78%" }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-700">
                            78%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                          Technical Assessment
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Skill Analytics Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Candidate Skills Analytics
              </h2>
              <Button
                variant="ghost"
                className="text-blue-600 hover:text-blue-800"
              >
                View Detailed Report
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Skills Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Skills in Demand</CardTitle>
                  <CardDescription>
                    Based on current job openings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">React.js</span>
                        <span className="text-sm text-gray-500">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Python</span>
                        <span className="text-sm text-gray-500">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Data Analysis
                        </span>
                        <span className="text-sm text-gray-500">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Project Management
                        </span>
                        <span className="text-sm text-gray-500">62%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: "62%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Machine Learning
                        </span>
                        <span className="text-sm text-gray-500">58%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: "58%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Gap Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills Gap Analysis</CardTitle>
                  <CardDescription>
                    Skills with highest demand vs. supply gap
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          AI Engineering
                        </span>
                        <span className="text-sm text-red-500">-42%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "42%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">DevOps</span>
                        <span className="text-sm text-red-500">-38%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "38%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Cloud Architecture
                        </span>
                        <span className="text-sm text-red-500">-35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Cybersecurity
                        </span>
                        <span className="text-sm text-red-500">-30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Product Design
                        </span>
                        <span className="text-sm text-red-500">-25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

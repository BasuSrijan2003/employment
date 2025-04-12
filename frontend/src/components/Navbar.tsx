// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import {
//   Menu,
//   X,
//   FileText,
//   Star,
//   CalendarCheck,
//   UserPlus,
//   Eye,
//   MessageSquare,
//   CheckSquare,
//   Calendar,
//   Mail,
//   Upload,
// } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);

//   // State for login form
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   // State for signup form
//   const [signupEmail, setSignupEmail] = useState("");
//   const [signupPassword, setSignupPassword] = useState("");
//   const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

//   // Sample data for skill distribution
//   const studentSkillsData = [
//     { skill: "Data Analysis", average: 85, color: "blue" },
//     { skill: "Machine Learning", average: 72, color: "green" },
//     { skill: "Web Development", average: 78, color: "indigo" },
//     { skill: "UI/UX Design", average: 65, color: "amber" },
//     { skill: "Project Management", average: 70, color: "red" },
//   ];

//   // Login handler
//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would call your authentication API
//     console.log("Login attempted with:", loginEmail, loginPassword);
//     // Reset fields after submission
//     setLoginEmail("");
//     setLoginPassword("");
//     // Show dashboard after successful login
//     setShowDashboard(true);
//   };

//   // Signup handler
//   const handleSignup = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (signupPassword !== signupConfirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }
//     // Here you would call your registration API
//     console.log("Signup attempted with:", signupEmail, signupPassword);
//     // Reset fields after submission
//     setSignupEmail("");
//     setSignupPassword("");
//     setSignupConfirmPassword("");
//     // Show dashboard after successful signup
//     setShowDashboard(true);
//   };

//   if (showDashboard) {
//     return (
//       <div className="bg-gray-50 min-h-screen">
//         {/* Dashboard Navigation */}
//         <nav className="bg-white border-b border-gray-200 py-4 shadow-sm mb-6">
//           <div className="container mx-auto px-4 flex justify-between items-center">
//             <div className="flex items-center space-x-2">
//               <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
//                 IIT-IIM Resume
//               </span>
//             </div>

//             <div className="hidden md:flex space-x-6">
//               <a href="#" className="text-blue-600 font-medium">
//                 Dashboard
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-blue-600 transition"
//               >
//                 Candidates
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-blue-600 transition"
//               >
//                 Jobs
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-blue-600 transition"
//               >
//                 Analytics
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-blue-600 transition"
//               >
//                 Reports
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-blue-600 transition"
//               >
//                 Settings
//               </a>
//             </div>

//             <div className="flex items-center space-x-2">
//               <img
//                 src="https://via.placeholder.com/32"
//                 alt="Profile"
//                 className="rounded-full"
//               />
//               <button
//                 onClick={() => setShowDashboard(false)}
//                 className="text-gray-700 hover:text-blue-600 transition"
//               >
//                 User Profile
//               </button>
//             </div>
//           </div>
//         </nav>

//         <div className="container mx-auto px-4">
//           {/* Welcome Section */}
//           <div className="mb-8">
//             <h1 className="text-2xl font-bold mb-6">Welcome to DASHBOARD</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {/* Stat Cards */}
//               <div className="bg-white rounded-xl shadow-sm border-l-4 border-blue-500 p-4 hover:shadow-md transition-shadow">
//                 <div className="flex items-center">
//                   <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                     <FileText className="text-blue-500 h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="text-gray-500 text-sm">Resumes Processed</p>
//                     <h3 className="font-bold text-2xl">245</h3>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border-l-4 border-amber-500 p-4 hover:shadow-md transition-shadow">
//                 <div className="flex items-center">
//                   <div className="bg-amber-100 p-3 rounded-lg mr-4">
//                     <Star className="text-amber-500 h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="text-gray-500 text-sm">Potential Matches</p>
//                     <h3 className="font-bold text-2xl">87</h3>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border-l-4 border-green-500 p-4 hover:shadow-md transition-shadow">
//                 <div className="flex items-center">
//                   <div className="bg-green-100 p-3 rounded-lg mr-4">
//                     <CalendarCheck className="text-green-500 h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="text-gray-500 text-sm">Interview Requests</p>
//                     <h3 className="font-bold text-2xl">32</h3>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border-l-4 border-purple-500 p-4 hover:shadow-md transition-shadow">
//                 <div className="flex items-center">
//                   <div className="bg-purple-100 p-3 rounded-lg mr-4">
//                     <UserPlus className="text-purple-500 h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="text-gray-500 text-sm">New Applications</p>
//                     <h3 className="font-bold text-2xl">124</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//             {/* Recent Candidates - Takes 2/3 width on large screens */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-xl shadow-sm p-6 h-full">
//                 <div className="flex justify-between items-center mb-6">
//                   <h4 className="font-bold text-lg">Recent Candidates</h4>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="text-blue-600 border-blue-600 hover:bg-blue-50"
//                   >
//                     View All
//                   </Button>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead>
//                       <tr className="border-b">
//                         <th className="text-left pb-3 font-semibold">
//                           Candidate
//                         </th>
//                         <th className="text-left pb-3 font-semibold">
//                           Position
//                         </th>
//                         <th className="text-left pb-3 font-semibold">Match</th>
//                         <th className="text-left pb-3 font-semibold">Status</th>
//                         <th className="text-left pb-3 font-semibold">
//                           Actions
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {[
//                         {
//                           name: "Ananya Sharma",
//                           position: "Data Scientist",
//                           match: 95,
//                           status: "Shortlisted",
//                         },
//                         {
//                           name: "Rahul Kumar",
//                           position: "Full-stack Developer",
//                           match: 87,
//                           status: "New",
//                         },
//                         {
//                           name: "Priya Patel",
//                           position: "ML Engineer",
//                           match: 92,
//                           status: "Interview",
//                         },
//                         {
//                           name: "Vikram Singh",
//                           position: "Product Manager",
//                           match: 78,
//                           status: "Assessment",
//                         },
//                         {
//                           name: "Neha Gupta",
//                           position: "UX Designer",
//                           match: 83,
//                           status: "New",
//                         },
//                       ].map((candidate, index) => (
//                         <tr key={index} className="hover:bg-gray-50 border-b">
//                           <td className="py-3">
//                             <div className="flex items-center">
//                               <img
//                                 src={`https://via.placeholder.com/36?text=${candidate.name.charAt(
//                                   0
//                                 )}`}
//                                 alt={candidate.name}
//                                 className="rounded-full mr-2"
//                               />
//                               {candidate.name}
//                             </div>
//                           </td>
//                           <td className="py-3">{candidate.position}</td>
//                           <td className="py-3">
//                             <span
//                               className={`text-xs px-2 py-1 rounded-md ${
//                                 candidate.match > 90
//                                   ? "bg-green-100 text-green-800"
//                                   : candidate.match > 80
//                                   ? "bg-blue-100 text-blue-800"
//                                   : "bg-amber-100 text-amber-800"
//                               }`}
//                             >
//                               {candidate.match}%
//                             </span>
//                           </td>
//                           <td className="py-3">
//                             <span
//                               className={`text-xs px-2 py-1 rounded-md ${
//                                 candidate.status === "Shortlisted"
//                                   ? "bg-green-100 text-green-800"
//                                   : candidate.status === "Interview"
//                                   ? "bg-blue-100 text-blue-800"
//                                   : candidate.status === "Assessment"
//                                   ? "bg-amber-100 text-amber-800"
//                                   : "bg-gray-100 text-gray-800"
//                               }`}
//                             >
//                               {candidate.status}
//                             </span>
//                           </td>
//                           <td className="py-3">
//                             <div className="flex space-x-2">
//                               <button className="p-1 border border-gray-300 rounded hover:bg-gray-100 transition">
//                                 <Eye className="h-4 w-4 text-gray-600" />
//                               </button>
//                               <button className="p-1 border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-300 transition">
//                                 <MessageSquare className="h-4 w-4 text-blue-600" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>

//             {/* Recruitment Pipeline - Takes 1/3 width on large screens */}
//             <div>
//               <div className="bg-white rounded-xl shadow-sm p-6 h-full">
//                 <div className="flex justify-between items-center mb-6">
//                   <h4 className="font-bold text-lg">Recruitment Pipeline</h4>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="text-blue-600 border-blue-600 hover:bg-blue-50"
//                   >
//                     Details
//                   </Button>
//                 </div>
//                 {[
//                   {
//                     stage: "New Applications",
//                     count: 124,
//                     color: "bg-blue-500",
//                     max: 124,
//                   },
//                   {
//                     stage: "Screening",
//                     count: 78,
//                     color: "bg-amber-500",
//                     max: 124,
//                   },
//                   {
//                     stage: "Interview",
//                     count: 45,
//                     color: "bg-indigo-500",
//                     max: 124,
//                   },
//                   {
//                     stage: "Assessment Test",
//                     count: 32,
//                     color: "bg-gray-500",
//                     max: 124,
//                   },
//                   {
//                     stage: "Final Interview",
//                     count: 18,
//                     color: "bg-gray-800",
//                     max: 124,
//                   },
//                   {
//                     stage: "Offer Extended",
//                     count: 12,
//                     color: "bg-green-500",
//                     max: 124,
//                   },
//                 ].map((stage, index) => (
//                   <div className="mb-4" key={index}>
//                     <div className="flex justify-between mb-1">
//                       <span className="text-sm">{stage.stage}</span>
//                       <span className="text-sm font-bold">{stage.count}</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div
//                         className={`${stage.color} h-2 rounded-full`}
//                         style={{ width: `${(stage.count / stage.max) * 100}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             {/* Skill Distribution */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h4 className="font-bold text-lg">Skill Distribution</h4>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="text-blue-600 border-blue-600 hover:bg-blue-50"
//                 >
//                   Export
//                 </Button>
//               </div>
//               {studentSkillsData.map((skill, index) => (
//                 <div className="mb-4" key={index}>
//                   <div className="flex justify-between mb-1">
//                     <span className="text-sm">{skill.skill}</span>
//                     <span className="text-sm font-bold">{skill.average}%</span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <div
//                       className={`${
//                         skill.color === "blue"
//                           ? "bg-blue-500"
//                           : skill.color === "green"
//                           ? "bg-green-500"
//                           : skill.color === "indigo"
//                           ? "bg-indigo-500"
//                           : skill.color === "amber"
//                           ? "bg-amber-500"
//                           : "bg-red-500"
//                       } h-2 rounded-full`}
//                       style={{ width: `${skill.average}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Recent Activity */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h4 className="font-bold text-lg">Recent Activity</h4>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="text-blue-600 border-blue-600 hover:bg-blue-50"
//                 >
//                   View All
//                 </Button>
//               </div>
//               <div className="space-y-4">
//                 {[
//                   {
//                     action: "Rahul Kumar's resume was analyzed",
//                     time: "15 minutes ago",
//                     icon: FileText,
//                     color: "blue",
//                   },
//                   {
//                     action: "Interview scheduled with Priya Patel",
//                     time: "2 hours ago",
//                     icon: Calendar,
//                     color: "green",
//                   },
//                   {
//                     action: "Assessment sent to Vikram Singh",
//                     time: "5 hours ago",
//                     icon: CheckSquare,
//                     color: "amber",
//                   },
//                   {
//                     action: "Offer extended to Ananya Sharma",
//                     time: "Yesterday",
//                     icon: Mail,
//                     color: "indigo",
//                   },
//                   {
//                     action: "5 new resumes uploaded",
//                     time: "2 days ago",
//                     icon: Upload,
//                     color: "gray",
//                   },
//                 ].map((activity, index) => (
//                   <div className="flex" key={index}>
//                     <div
//                       className={`${
//                         activity.color === "blue"
//                           ? "bg-blue-100"
//                           : activity.color === "green"
//                           ? "bg-green-100"
//                           : activity.color === "amber"
//                           ? "bg-amber-100"
//                           : activity.color === "indigo"
//                           ? "bg-indigo-100"
//                           : "bg-gray-100"
//                       } rounded-full p-2 mr-3 flex items-center justify-center h-10 w-10`}
//                     >
//                       <activity.icon
//                         className={`${
//                           activity.color === "blue"
//                             ? "text-blue-500"
//                             : activity.color === "green"
//                             ? "text-green-500"
//                             : activity.color === "amber"
//                             ? "text-amber-500"
//                             : activity.color === "indigo"
//                             ? "text-indigo-500"
//                             : "text-gray-500"
//                         } h-5 w-5`}
//                       />
//                     </div>
//                     <div>
//                       <p className="text-sm">{activity.action}</p>
//                       <span className="text-xs text-gray-500">
//                         {activity.time}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Original Navbar when not showing dashboard
//   return (
//     <nav className="bg-white border-b border-gray-200 py-4">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         <div className="flex items-center space-x-8">
//           <div className="flex items-center space-x-2">
//             <span className="font-bold text-xl">IIT</span>
//             <span className="font-bold text-xl">IIM</span>
//             <span className="font-bold text-xl">Resume</span>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex space-x-6">
//             <NavLinks />
//           </div>
//         </div>

//         <div className="hidden md:flex items-center space-x-4">
//           {/* Login Dialog */}
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button variant="outline">Login</Button>
//             </DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Login</DialogTitle>
//               </DialogHeader>
//               <form onSubmit={handleLogin} className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={loginEmail}
//                     onChange={(e) => setLoginEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="password">Password</Label>
//                   <Input
//                     id="password"
//                     type="password"
//                     value={loginPassword}
//                     onChange={(e) => setLoginPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     required
//                   />
//                 </div>
//                 <Button type="submit" className="w-full">
//                   Login
//                 </Button>
//               </form>
//             </DialogContent>
//           </Dialog>

//           {/* Signup Dialog */}
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button variant="outline">Sign Up</Button>
//             </DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Create an Account</DialogTitle>
//               </DialogHeader>
//               <form onSubmit={handleSignup} className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="signup-email">Email</Label>
//                   <Input
//                     id="signup-email"
//                     type="email"
//                     value={signupEmail}
//                     onChange={(e) => setSignupEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="signup-password">Password</Label>
//                   <Input
//                     id="signup-password"
//                     type="password"
//                     value={signupPassword}
//                     onChange={(e) => setSignupPassword(e.target.value)}
//                     placeholder="Create a password"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="confirm-password">Confirm Password</Label>
//                   <Input
//                     id="confirm-password"
//                     type="password"
//                     value={signupConfirmPassword}
//                     onChange={(e) => setSignupConfirmPassword(e.target.value)}
//                     placeholder="Confirm your password"
//                     required
//                   />
//                 </div>
//                 <Button type="submit" className="w-full">
//                   Sign Up
//                 </Button>
//               </form>
//             </DialogContent>
//           </Dialog>

//           <Button>Get Started</Button>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-gray-700 p-2 md:hidden"
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4 md:hidden">
//             <div className="flex flex-col space-y-4">
//               <NavLinks mobile />

//               {/* Login and Signup buttons for mobile */}
//               <Dialog>
//                 <DialogTrigger asChild>
//                   <Button variant="outline" className="w-full">
//                     Login
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>Login</DialogTitle>
//                   </DialogHeader>
//                   <form onSubmit={handleLogin} className="space-y-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="mobile-email">Email</Label>
//                       <Input
//                         id="mobile-email"
//                         type="email"
//                         value={loginEmail}
//                         onChange={(e) => setLoginEmail(e.target.value)}
//                         placeholder="Enter your email"
//                         required
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="mobile-password">Password</Label>
//                       <Input
//                         id="mobile-password"
//                         type="password"
//                         value={loginPassword}
//                         onChange={(e) => setLoginPassword(e.target.value)}
//                         placeholder="Enter your password"
//                         required
//                       />
//                     </div>
//                     <Button type="submit" className="w-full">
//                       Login
//                     </Button>
//                   </form>
//                 </DialogContent>
//               </Dialog>

//               <Dialog>
//                 <DialogTrigger asChild>
//                   <Button variant="outline" className="w-full">
//                     Sign Up
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>Create an Account</DialogTitle>
//                   </DialogHeader>
//                   <form onSubmit={handleSignup} className="space-y-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="mobile-signup-email">Email</Label>
//                       <Input
//                         id="mobile-signup-email"
//                         type="email"
//                         value={signupEmail}
//                         onChange={(e) => setSignupEmail(e.target.value)}
//                         placeholder="Enter your email"
//                         required
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="mobile-signup-password">Password</Label>
//                       <Input
//                         id="mobile-signup-password"
//                         type="password"
//                         value={signupPassword}
//                         onChange={(e) => setSignupPassword(e.target.value)}
//                         placeholder="Create a password"
//                         required
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="mobile-confirm-password">
//                         Confirm Password
//                       </Label>
//                       <Input
//                         id="mobile-confirm-password"
//                         type="password"
//                         value={signupConfirmPassword}
//                         onChange={(e) =>
//                           setSignupConfirmPassword(e.target.value)
//                         }
//                         placeholder="Confirm your password"
//                         required
//                       />
//                     </div>
//                     <Button type="submit" className="w-full">
//                       Sign Up
//                     </Button>
//                   </form>
//                 </DialogContent>
//               </Dialog>

//               <Button className="w-full">Get Started</Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
//   const linkClass = mobile
//     ? "py-2 text-gray-700 hover:text-iit-blue transition"
//     : "text-gray-700 hover:text-iit-blue transition";

//   return (
//     <>
//       <a href="#features" className={linkClass}>
//         Features
//       </a>
//       <a href="#templates" className={linkClass}>
//         Templates
//       </a>
//       <a href="#testimonials" className={linkClass}>
//         Testimonials
//       </a>
//       <a href="#pricing" className={linkClass}>
//         Pricing
//       </a>
//     </>
//   );
// };

// export default Navbar;

import { useState } from "react";
import {
  Menu,
  X,
  FileText,
  Star,
  CalendarCheck,
  UserPlus,
  Eye,
  MessageSquare,
  CheckSquare,
  Calendar,
  Mail,
  Upload,
  BarChart2,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
  Search,
  Filter,
  Download,
  Briefcase,
  Users,
  PieChart,
  Clock,
  ArrowUpRight,
  ChevronRight,
  Github,
  Linkedin,
  Phone,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  // State for login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // State for signup form
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");

  // Sample data for skill distribution
  const studentSkillsData = [
    { skill: "Data Analysis", average: 85, color: "blue" },
    { skill: "Machine Learning", average: 72, color: "green" },
    { skill: "Web Development", average: 78, color: "indigo" },
    { skill: "UI/UX Design", average: 65, color: "amber" },
    { skill: "Project Management", average: 70, color: "red" },
  ];

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would call your authentication API
    console.log("Login attempted with:", loginEmail, loginPassword);
    // Reset fields after submission
    setLoginEmail("");
    setLoginPassword("");
    // Show dashboard after successful login
    setShowDashboard(true);
  };

  // Signup handler
  const handleSignup = (e) => {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Here you would call your registration API
    console.log(
      "Signup attempted with:",
      fullName,
      signupEmail,
      signupPassword,
      phoneNumber
    );
    // Reset fields after submission
    setSignupEmail("");
    setSignupPassword("");
    setSignupConfirmPassword("");
    setFullName("");
    setPhoneNumber("");
    // Show dashboard after successful signup
    setShowDashboard(true);
  };

  // Social login handlers
  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement OAuth logic here
    setShowDashboard(true);
  };

  const handlePhoneLogin = () => {
    console.log("Login with phone number:", phoneNumber);
    // Implement phone verification logic here
    setShowDashboard(true);
  };

  if (showDashboard) {
    return (
      <Dashboard
        setShowDashboard={setShowDashboard}
        studentSkillsData={studentSkillsData}
      />
    );
  }

  // Original Navbar when not showing dashboard
  return (
    <nav className="bg-white border-b border-gray-200 py-3 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              IIT-IIM Resume
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <NavLinks />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* Login Dialog */}
          <AuthDialog
            type="login" // or whatever type you're using
            mobile={true}
            onSignup={(e) => handleSignup(e)}
            onSocialLogin={(provider) => {
              /* your social login logic */
            }}
            // Add these missing props:
            onLogin={(e) => handleLogin(e)} // Use your existing login handler
            onPhoneLogin={(phone) => {
              /* handle phone login */
            }}
          />

          {/* Signup Dialog */}
          <AuthDialog
            type="signup" // or whatever type you're using
            mobile={true}
            onSignup={(e) => handleSignup(e)}
            onSocialLogin={(provider) => {
              /* your social login logic */
            }}
            // Add these missing props:
            onLogin={(e) => handleLogin(e)} // Use your existing login handler
            onPhoneLogin={(phone) => {
              /* handle phone login */
            }}
          />

          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 p-2 md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4 md:hidden z-50 shadow-md">
            <div className="flex flex-col space-y-4">
              <NavLinks mobile />

              {/* Login and Signup buttons for mobile */}
              <AuthDialog
                type="login" // or whatever type you're using
                mobile={true}
                onSignup={(e) => handleSignup(e)}
                onSocialLogin={(provider) => {
                  /* your social login logic */
                }}
                // Add these missing props:
                onLogin={(e) => handleLogin(e)} // Use your existing login handler
                onPhoneLogin={(phone) => {
                  /* handle phone login */
                }}
              />

              <AuthDialog
                type="signup" // or whatever type you're using
                mobile={true}
                onSignup={(e) => handleSignup(e)}
                onSocialLogin={(provider) => {
                  /* your social login logic */
                }}
                // Add these missing props:
                onLogin={(e) => handleLogin(e)} // Use your existing login handler
                onPhoneLogin={(phone) => {
                  /* handle phone login */
                }}
              />

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile = false }) => {
  const linkClass = mobile
    ? "py-2 text-gray-700 hover:text-blue-600 transition font-medium"
    : "text-gray-700 hover:text-blue-600 transition font-medium";

  return (
    <>
      <a href="#features" className={linkClass}>
        Features
      </a>
      <a href="#templates" className={linkClass}>
        Templates
      </a>
      <a href="#testimonials" className={linkClass}>
        Testimonials
      </a>
      <a href="#pricing" className={linkClass}>
        Pricing
      </a>
      <a href="#blog" className={linkClass}>
        Resources
      </a>
    </>
  );
};

const AuthDialog = ({
  type,
  mobile = false,
  onLogin,
  onSignup,
  onSocialLogin,
  onPhoneLogin,
}) => {
  const [activeTab, setActiveTab] = useState("email");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        {type === "login" ? (
          <Button variant="outline" className={mobile ? "w-full" : ""}>
            Login
          </Button>
        ) : (
          <Button variant="outline" className={mobile ? "w-full" : ""}>
            Sign Up
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {type === "login" ? "Welcome Back" : "Create an Account"}
          </DialogTitle>
        </DialogHeader>

        {type === "login" ? (
          <Tabs
            defaultValue="email"
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>
            <TabsContent value="email" className="mt-4">
              <form onSubmit={onLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Login
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="phone" className="mt-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onPhoneLogin();
                }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Send OTP
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        ) : (
          <form onSubmit={onSignup} className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-phone">Phone Number (optional)</Label>
              <Input
                id="signup-phone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input
                id="signup-password"
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="Create a password"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Create Account
            </Button>
          </form>
        )}

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-sm text-gray-500">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onSocialLogin("Google")}
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="text-red-500"
            >
              <path
                fill="currentColor"
                d="M12.545 12.151c0 1.054-.855 1.909-1.909 1.909H9.909v1.909h.727c.5 0 .909.409.909.909v1.909h-.727c-.5 0-.909-.409-.909-.909v-.727H6v.727c0 .5-.409.909-.909.909H3.273v-1.909c0-.5.409-.909.909-.909h.727v-1.909h-.727c-1.054 0-1.909-.855-1.909-1.909V9.454c0-1.054.855-1.909 1.909-1.909h.727V5.636h-.727c-.5 0-.909-.409-.909-.909V2.818h1.818c.5 0 .909.409.909.909v.727h3.818v-.727c0-.5.409-.909.909-.909h1.818v1.909c0 .5-.409.909-.909.909h-.727v1.909h.727c1.054 0 1.909.855 1.909 1.909v2.697z"
              />
            </svg>
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => onSocialLogin("Github")}
            className="flex items-center justify-center"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => onSocialLogin("LinkedIn")}
            className="flex items-center justify-center"
          >
            <Linkedin className="h-5 w-5 text-blue-500" />
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => onSocialLogin("Facebook")}
            className="flex items-center justify-center"
          >
            <Facebook className="h-5 w-5 text-blue-600" />
          </Button>
        </div>

        <DialogFooter className="sm:justify-center mt-2">
          <p className="text-sm text-center text-gray-500">
            {type === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <a href="#" className="text-blue-600 hover:underline">
              {type === "login" ? "Sign up" : "Log in"}
            </a>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const Dashboard = ({ setShowDashboard, studentSkillsData }) => {
  const [activeSection, setActiveSection] = useState("dashboard");

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
            className={`flex items-center px-6 py-3 text-sm ${
              activeSection === "reports"
                ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveSection("reports")}
          >
            <FileText className="h-5 w-5 mr-3" />
            Reports
          </a>
          <a
            href="#"
            className={`flex items-center px-6 py-3 text-sm ${
              activeSection === "analytics"
                ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
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
            className={`flex items-center px-6 py-3 text-sm ${
              activeSection === "settings"
                ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
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
                        Interview Requests
                      </p>
                      <div className="flex items-baseline space-x-2">
                        <h3 className="font-bold text-2xl">32</h3>
                        <span className="text-xs text-green-600 flex items-center">
                          +12% <ArrowUpRight className="h-3 w-3 ml-0.5" />
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
                      <p className="text-gray-500 text-sm">New Applications</p>
                      <div className="flex items-baseline space-x-2">
                        <h3 className="font-bold text-2xl">124</h3>
                        <span className="text-xs text-green-600 flex items-center">
                          +18% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Recent Candidates - Takes 2/3 width on large screens */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>Recent Candidates</CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <CardDescription>
                    Top candidates based on resume analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left pb-3 font-semibold">
                            Candidate
                          </th>
                          <th className="text-left pb-3 font-semibold">
                            Position
                          </th>
                          <th className="text-left pb-3 font-semibold">
                            Match
                          </th>
                          <th className="text-left pb-3 font-semibold hidden md:table-cell">
                            Status
                          </th>
                          <th className="text-left pb-3 font-semibold">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: "Ananya Sharma",
                            position: "Data Scientist",
                            match: 95,
                            status: "Shortlisted",
                            institution: "IIT Delhi",
                          },
                          {
                            name: "Rahul Kumar",
                            position: "Full-stack Developer",
                            match: 87,
                            status: "New",
                            institution: "IIT Bombay",
                          },
                          {
                            name: "Priya Patel",
                            position: "ML Engineer",
                            match: 92,
                            status: "Interview",
                            institution: "IIM Ahmedabad",
                          },
                          {
                            name: "Vikram Singh",
                            position: "Product Manager",
                            match: 78,
                            status: "Assessment",
                            institution: "IIM Bangalore",
                          },
                          {
                            name: "Neha Gupta",
                            position: "UX Designer",
                            match: 83,
                            status: "New",
                            institution: "IIT Madras",
                          },
                        ].map((candidate, index) => (
                          <tr key={index} className="hover:bg-gray-50 border-b">
                            <td className="py-3">
                              <div className="flex items-center">
                                <img
                                  src="/api/placeholder/36/36"
                                  alt={candidate.name}
                                  className="rounded-full mr-2"
                                />
                                <div>
                                  <p className="font-medium">
                                    {candidate.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {candidate.institution}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3">{candidate.position}</td>
                            <td className="py-3">
                              <span
                                className={`text-xs px-2 py-1 rounded-md ${
                                  candidate.match > 90
                                    ? "bg-green-100 text-green-800"
                                    : candidate.match > 80
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-amber-100 text-amber-800"
                                }`}
                              >
                                {candidate.match}%
                              </span>
                            </td>
                            <td className="py-3 hidden md:table-cell">
                              <span
                                className={`text-xs px-2 py-1 rounded-md ${
                                  candidate.status === "Shortlisted"
                                    ? "bg-green-100 text-green-800"
                                    : candidate.status === "Interview"
                                    ? "bg-blue-100 text-blue-800"
                                    : candidate.status === "Assessment"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {candidate.status}
                              </span>
                            </td>
                            <td className="py-3">
                              <div className="flex space-x-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 rounded-full"
                                >
                                  <Eye className="h-4 w-4 text-gray-600" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 rounded-full"
                                >
                                  <MessageSquare className="h-4 w-4 text-blue-600" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recruitment Pipeline - Takes 1/3 width on large screens */}
            <div>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>Recruitment Pipeline</CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      Details
                    </Button>
                  </div>
                  <CardDescription>Current recruitment status</CardDescription>
                </CardHeader>
                <CardContent>
                  {[
                    {
                      stage: "New Applications",
                      count: 124,
                      color: "bg-blue-500",
                      max: 124,
                    },
                    {
                      stage: "Resume Screening",
                      count: 78,
                      color: "bg-amber-500",
                      max: 124,
                    },
                    {
                      stage: "Technical Interview",
                      count: 45,
                      color: "bg-indigo-500",
                      max: 124,
                    },
                    {
                      stage: "Assessment Test",
                      count: 32,
                      color: "bg-gray-500",
                      max: 124,
                    },
                    {
                      stage: "HR Interview",
                      count: 18,
                      color: "bg-gray-800",
                      max: 124,
                    },
                    {
                      stage: "Offer Extended",
                      count: 12,
                      color: "bg-green-500",
                      max: 124,
                    },
                  ].map((stage, index) => (
                    <div className="mb-4" key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          {stage.stage}
                        </span>
                        <span className="text-sm font-bold">{stage.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${stage.color} h-2 rounded-full`}
                          style={{
                            width: `${(stage.count / stage.max) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-0 pb-3">
                  <Button
                    variant="ghost"
                    className="w-full text-blue-600 hover:bg-blue-50 text-sm"
                  >
                    Manage All Candidates
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Skill Distribution */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Candidate Skill Distribution</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Average skills from analyzed resumes
                </CardDescription>
              </CardHeader>
              <CardContent>
                {studentSkillsData.map((skill, index) => (
                  <div className="mb-4" key={index}>
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full mr-2 ${
                            skill.color === "blue"
                              ? "bg-blue-500"
                              : skill.color === "green"
                              ? "bg-green-500"
                              : skill.color === "indigo"
                              ? "bg-indigo-500"
                              : skill.color === "amber"
                              ? "bg-amber-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                        <span className="text-sm font-medium">
                          {skill.skill}
                        </span>
                      </div>
                      <span className="text-sm font-bold">
                        {skill.average}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${
                          skill.color === "blue"
                            ? "bg-blue-500"
                            : skill.color === "green"
                            ? "bg-green-500"
                            : skill.color === "indigo"
                            ? "bg-indigo-500"
                            : skill.color === "amber"
                            ? "bg-amber-500"
                            : "bg-red-500"
                        } h-2 rounded-full`}
                        style={{ width: `${skill.average}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-0 pb-3">
                <Button
                  variant="ghost"
                  className="w-full text-blue-600 hover:bg-blue-50 text-sm"
                >
                  View Detailed Analysis
                </Button>
              </CardFooter>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Activity</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    View All
                  </Button>
                </div>
                <CardDescription>Latest recruitment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Rahul Kumar's resume was analyzed",
                      time: "15 minutes ago",
                      icon: FileText,
                      color: "blue",
                    },
                    {
                      action: "Interview scheduled with Priya Patel",
                      time: "2 hours ago",
                      icon: Calendar,
                      color: "green",
                    },
                    {
                      action: "Assessment sent to Vikram Singh",
                      time: "5 hours ago",
                      icon: CheckSquare,
                      color: "amber",
                    },
                    {
                      action: "Offer extended to Ananya Sharma",
                      time: "Yesterday",
                      icon: Mail,
                      color: "indigo",
                    },
                    {
                      action: "5 new resumes uploaded",
                      time: "2 days ago",
                      icon: Upload,
                      color: "gray",
                    },
                  ].map((activity, index) => (
                    <div className="flex" key={index}>
                      <div
                        className={`${
                          activity.color === "blue"
                            ? "bg-blue-100"
                            : activity.color === "green"
                            ? "bg-green-100"
                            : activity.color === "amber"
                            ? "bg-amber-100"
                            : activity.color === "indigo"
                            ? "bg-indigo-100"
                            : "bg-gray-100"
                        } rounded-full p-2 mr-3 flex items-center justify-center h-10 w-10 shrink-0`}
                      >
                        <activity.icon
                          className={`${
                            activity.color === "blue"
                              ? "text-blue-500"
                              : activity.color === "green"
                              ? "text-green-500"
                              : activity.color === "amber"
                              ? "text-amber-500"
                              : activity.color === "indigo"
                              ? "text-indigo-500"
                              : "text-gray-500"
                          } h-5 w-5`}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{activity.action}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-3">
                <Button
                  variant="ghost"
                  className="w-full text-blue-600 hover:bg-blue-50 text-sm"
                >
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Upcoming Interviews Section */}
          <div className="mb-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Upcoming Interviews</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    Schedule New
                  </Button>
                </div>
                <CardDescription>
                  Interviews scheduled for the next 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Priya Patel",
                      position: "ML Engineer",
                      date: "Today, 2:00 PM",
                      status: "Technical",
                      interviewer: "Dr. Amit Verma",
                    },
                    {
                      name: "Rahul Kumar",
                      position: "Full-stack Developer",
                      date: "Tomorrow, 11:00 AM",
                      status: "HR",
                      interviewer: "Ms. Sneha Gupta",
                    },
                    {
                      name: "Vikram Singh",
                      position: "Product Manager",
                      date: "Apr 11, 3:30 PM",
                      status: "Final",
                      interviewer: "Mr. Rajesh Kumar",
                    },
                  ].map((interview, index) => (
                    <Card
                      key={index}
                      className="bg-gray-50 border hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center">
                            <img
                              src="/api/placeholder/36/36"
                              alt={interview.name}
                              className="rounded-full mr-2"
                            />
                            <div>
                              <p className="font-medium">{interview.name}</p>
                              <p className="text-xs text-gray-500">
                                {interview.position}
                              </p>
                            </div>
                          </div>
                          <Badge
                            className={
                              interview.status === "Technical"
                                ? "bg-indigo-100 text-indigo-800 hover:bg-indigo-100"
                                : interview.status === "HR"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            }
                          >
                            {interview.status}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{interview.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{interview.interviewer}</span>
                          </div>
                        </div>
                        <div className="flex justify-between mt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs"
                          >
                            Reschedule
                          </Button>
                          <Button
                            size="sm"
                            className="text-xs bg-blue-600 hover:bg-blue-700"
                          >
                            Join Meeting
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-3">
                <Button
                  variant="ghost"
                  className="w-full text-blue-600 hover:bg-blue-50 text-sm"
                >
                  View All Interviews
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

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

export default Navbar;

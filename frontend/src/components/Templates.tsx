// //Professional Resume Templates

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Eye,
//   Upload,
//   CheckCircle,
//   FileText,
//   Calendar,
//   AlertCircle,
//   X,
//   Download,
//   FileSearch,
// } from "lucide-react";
// import Pricing from "@/components/Pricing";

// const Templates = () => {
//   const [showUploadSection, setShowUploadSection] = useState(false);
//   const [uploadedFileName, setUploadedFileName] = useState("");
//   const [selectedTemplate, setSelectedTemplate] = useState(0);
//   const [resumeDescription, setResumeDescription] = useState("");
//   const [showProcessedResult, setShowProcessedResult] = useState(false);
//   const [showPricing, setShowPricing] = useState(false);

//   // Template categories for the tabs
//   const templateCategories = [
//     { id: "iit", label: "IIT- Templates" },
//     { id: "iim", label: "IIM -Templates" },
//     { id: "combined", label: "Combined Format" },
//     { id: "specialized", label: "Specialized" },
//   ];

//   // Mock templates data
//   const templates = {
//     iit: [
//       {
//         id: 1,
//         name: "IIT Engineering Classic",
//         popularity: "Most Popular",
//         color: "bg-blue-100",
//       },
//       {
//         id: 2,
//         name: "IIT Technical Modern",
//         popularity: "Technical Roles",
//         color: "bg-cyan-100",
//       },
//       {
//         id: 3,
//         name: "IIT Research Focus",
//         popularity: "Research Positions",
//         color: "bg-indigo-100",
//       },
//     ],
//     iim: [
//       {
//         id: 4,
//         name: "IIM Management Pro",
//         popularity: "Management Roles",
//         color: "bg-red-100",
//       },
//       {
//         id: 5,
//         name: "IIM Consulting Edge",
//         popularity: "Consulting Jobs",
//         color: "bg-pink-100",
//       },
//       {
//         id: 6,
//         name: "IIM Finance Expert",
//         popularity: "Finance Sector",
//         color: "bg-purple-100",
//       },
//     ],
//     combined: [
//       {
//         id: 7,
//         name: "Tech-Management Hybrid",
//         popularity: "Tech Management",
//         color: "bg-green-100",
//       },
//       {
//         id: 8,
//         name: "Research-Business Combo",
//         popularity: "R&D Management",
//         color: "bg-teal-100",
//       },
//       {
//         id: 9,
//         name: "Engineering-MBA Blend",
//         popularity: "Product Management",
//         color: "bg-emerald-100",
//       },
//     ],
//     specialized: [
//       {
//         id: 10,
//         name: "Data Science Focus",
//         popularity: "Data Roles",
//         color: "bg-yellow-100",
//       },
//       {
//         id: 11,
//         name: "Product Design Emphasis",
//         popularity: "Design Positions",
//         color: "bg-amber-100",
//       },
//       {
//         id: 12,
//         name: "Startup Pitcher",
//         popularity: "Startup Jobs",
//         color: "bg-orange-100",
//       },
//     ],
//   };

//   // Handle file upload
//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setUploadedFileName(e.target.files[0].name);
//     }
//   };

//   // Handle direct file browsing from the Browse Template Collection section
//   const handleBrowseTemplateUpload = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (e.target.files && e.target.files[0]) {
//       setUploadedFileName(e.target.files[0].name);
//       setShowUploadSection(true);
//     }
//   };

//   // Handle template selection
//   const handleTemplateSelect = (id: number) => {
//     setSelectedTemplate(id);
//   };

//   // Handle back to steps
//   const handleBackToSteps = () => {
//     setShowUploadSection(false);
//     setShowProcessedResult(false);
//   };

//   // Handle resume submission
//   const handleSubmitResume = () => {
//     // This would connect to your backend processing
//     setShowProcessedResult(true);
//   };

//   // Handle resume download
//   const handleDownloadResume = () => {
//     setShowPricing(true);
//   };

//   // Handle view resume
//   const handleViewResume = () => {
//     // Functionality to view resume
//     alert("Viewing resume in template: " + selectedTemplate);
//   };

//   return (
//     <div className="relative py-16 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95 z-0"></div>
//       <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>

//       {/* Geometric Shapes */}
//       <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500/30 rotate-45"></div>
//       <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-purple-500/30 rotate-12 rounded-lg"></div>

//       <div className="container relative z-10 px-4 mx-auto">
//         {showPricing ? (
//           <div>
//             <Button
//               variant="outline"
//               onClick={() => setShowPricing(false)}
//               className="mb-8 border-white/20 text-white hover:bg-white/10"
//             >
//               <X className="mr-2 h-4 w-4" />
//               Back to Resume
//             </Button>
//             <Pricing />
//           </div>
//         ) : (
//           <>
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
//                 Professional Resume Templates
//               </h2>
//               <p className="text-blue-100/80 max-w-3xl mx-auto">
//                 Choose from our collection of professionally designed templates
//                 specific to IIT and IIM formatting standards.
//               </p>
//             </div>

//             {/* How It Works Section */}
//             <div id="how-it-works" className="mb-16">
//               {!showUploadSection ? (
//                 <>
//                   <div className="text-center mb-12">
//                     <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
//                       Three simple steps to create your perfect resume
//                     </h2>
//                     <p className="text-blue-100/80 max-w-2xl mx-auto">
//                       Get started in minutes, not days
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
//                     <div className="flex flex-col items-center md:items-start">
//                       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center mb-6 w-16 h-16">
//                         <span className="text-2xl font-bold">1</span>
//                       </div>
//                       <h3 className="text-xl font-bold text-white mb-4">
//                         Upload Resumes
//                       </h3>
//                       <p className="text-blue-100/70 mb-6 text-center md:text-left">
//                         Upload candidate resumes in any format and get instant
//                         AI analysis
//                       </p>
//                       <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl mb-6 w-full">
//                         <p className="font-medium text-white mb-2">
//                           Supported formats:
//                         </p>
//                         <p className="text-blue-100/80">
//                           PDF, DOCX, TXT (Max size: 5MB)
//                         </p>
//                       </div>
//                       <Button
//                         className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-6 py-2"
//                         onClick={() => setShowUploadSection(true)}
//                       >
//                         <Upload className="mr-2 h-4 w-4" />
//                         Try It Now
//                       </Button>
//                     </div>

//                     <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 transition-transform hover:-translate-y-1 duration-300">
//                       <img
//                         src="https://www.qsourcing.com/wp-content/uploads/2024/11/why-revamp-your-resume-now-1080x675.jpg"
//                         alt="Upload Resume"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 md:flex-row-reverse">
//                     <div className="flex flex-col items-center md:items-start md:order-2">
//                       <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center mb-6 w-16 h-16">
//                         <span className="text-2xl font-bold">2</span>
//                       </div>
//                       <h3 className="text-xl font-bold text-white mb-4">
//                         Select Template
//                       </h3>
//                       <p className="text-blue-100/70 mb-6 text-center md:text-left">
//                         Choose from our collection of professionally designed
//                         resume templates
//                       </p>
//                       <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl mb-6 w-full">
//                         <p className="font-medium text-white mb-2">
//                           Template categories:
//                         </p>
//                         <p className="text-blue-100/80">
//                           IIT, IIM, Combined, Specialized
//                         </p>
//                       </div>
//                     </div>

//                     <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 transition-transform hover:-translate-y-2 duration-300 md:order-1">
//                       <img
//                         src="https://brandpacks.com/wp-content/uploads/2021/09/best-resume-templates-for-adobe-indesign.jpg"
//                         alt="Select Template"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                     <div className="flex flex-col items-center md:items-start">
//                       <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full flex items-center justify-center mb-6 w-16 h-16">
//                         <span className="text-2xl font-bold">3</span>
//                       </div>
//                       <h3 className="text-xl font-bold text-white mb-4">
//                         Get Analysis
//                       </h3>
//                       <p className="text-blue-100/70 mb-6 text-center md:text-left">
//                         Receive detailed insights, skill analysis, and
//                         improvement suggestions
//                       </p>
//                       <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl mb-6 w-full">
//                         <p className="font-medium text-white mb-2">
//                           Analysis includes:
//                         </p>
//                         <p className="text-blue-100/80">
//                           Skill matching, keyword optimization, ATS
//                           compatibility score
//                         </p>
//                       </div>
//                     </div>

//                     <div className="rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 transition-transform hover:-translate-y-2 duration-300">
//                       <img
//                         src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
//                         alt="Get Analysis"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
//                   <div className="flex justify-between items-center mb-8">
//                     <h3 className="text-2xl font-bold text-white">
//                       Create Your Professional Resume
//                     </h3>
//                     <Button
//                       variant="outline"
//                       onClick={handleBackToSteps}
//                       className="border-white/20 text-white hover:bg-white/10"
//                     >
//                       <X className="mr-2 h-4 w-4" />
//                       Back
//                     </Button>
//                   </div>

//                   {showProcessedResult ? (
//                     <>
//                       <div className="mb-8 text-center">
//                         <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-4" />
//                         <h2 className="text-2xl font-bold text-white mb-2">
//                           Resume Successfully Processed!
//                         </h2>
//                         <p className="text-blue-100/80 mb-6">
//                           Your resume has been reformatted with the selected
//                           template.
//                         </p>

//                         <div className="border-2 border-dashed border-white/20 rounded-xl p-8 bg-white/5 mb-8">
//                           <div className="w-40 h-56 bg-white rounded-md shadow-lg mx-auto relative">
//                             <div className="w-full h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-md"></div>
//                             <div className="p-2">
//                               <div className="w-full h-3 bg-gray-300 rounded-sm mb-2"></div>
//                               <div className="w-3/4 h-2 bg-gray-300 rounded-sm mb-2"></div>
//                               <div className="w-full h-2 bg-gray-300 rounded-sm mb-2"></div>
//                               <div className="w-full h-1 bg-gray-300 rounded-sm mb-2"></div>
//                               <div className="w-5/6 h-1 bg-gray-300 rounded-sm mb-2"></div>
//                               <div className="w-full h-1 bg-gray-300 rounded-sm mb-2"></div>
//                               <div className="w-3/4 h-1 bg-gray-300 rounded-sm mb-2"></div>
//                               <div className="w-full h-1 bg-gray-300 rounded-sm mb-2"></div>
//                               <div className="w-5/6 h-3 bg-gray-300 rounded-sm mt-4 mb-2"></div>
//                               <div className="w-full h-1 bg-gray-300 rounded-sm mb-1"></div>
//                               <div className="w-full h-1 bg-gray-300 rounded-sm mb-1"></div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="flex justify-center space-x-4">
//                           <Button
//                             className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
//                             onClick={handleViewResume}
//                           >
//                             <FileSearch className="mr-2 h-4 w-4" />
//                             View Resume
//                           </Button>
//                           <Button
//                             className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
//                             onClick={handleDownloadResume}
//                           >
//                             <Download className="mr-2 h-4 w-4" />
//                             Download Resume
//                           </Button>
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <div className="mb-8">
//                         <h4 className="text-xl font-bold text-white mb-4">
//                           Step 1: Upload your existing resume
//                         </h4>
//                         <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center bg-white/5">
//                           {!uploadedFileName ? (
//                             <div>
//                               <Upload className="h-16 w-16 text-blue-400 mx-auto mb-4" />
//                               <p className="text-blue-100 mb-4">
//                                 Drag and drop your resume file here, or click to
//                                 browse
//                               </p>
//                               <label className="cursor-pointer">
//                                 <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
//                                   Browse Files
//                                 </Button>
//                                 <input
//                                   type="file"
//                                   className="hidden"
//                                   accept=".pdf,.docx,.doc,.txt"
//                                   onChange={handleFileUpload}
//                                 />
//                               </label>
//                             </div>
//                           ) : (
//                             <div>
//                               <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
//                               <p className="text-green-100 mb-4">
//                                 File uploaded successfully!
//                               </p>
//                               <div className="flex items-center justify-center">
//                                 <FileText className="mr-2 h-5 w-5 text-white" />
//                                 <span className="text-white mr-3">
//                                   {uploadedFileName}
//                                 </span>
//                                 <Button
//                                   variant="outline"
//                                   size="sm"
//                                   className="border-red-400/30 text-red-400 hover:bg-red-900/20"
//                                   onClick={() => setUploadedFileName("")}
//                                 >
//                                   <X className="h-4 w-4" />
//                                 </Button>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       <div className="mb-8">
//                         <h4 className="text-xl font-bold text-white mb-4">
//                           Step 2: Select a template
//                         </h4>
//                         <Tabs defaultValue="iit" className="w-full">
//                           <TabsList className="grid grid-cols-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-1 mb-6">
//                             {templateCategories.map((category) => (
//                               <TabsTrigger
//                                 key={category.id}
//                                 value={category.id}
//                                 className="text-blue-100/90 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white rounded-lg"
//                               >
//                                 {category.label}
//                               </TabsTrigger>
//                             ))}
//                           </TabsList>

//                           {Object.entries(templates).map(
//                             ([category, items]) => (
//                               <TabsContent
//                                 key={category}
//                                 value={category}
//                                 className="mt-0"
//                               >
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                   {items.map((template) => (
//                                     <div
//                                       key={template.id}
//                                       className={`cursor-pointer ${
//                                         selectedTemplate === template.id
//                                           ? "ring-2 ring-blue-500 scale-[1.02]"
//                                           : ""
//                                       } transition-all duration-200`}
//                                       onClick={() =>
//                                         handleTemplateSelect(template.id)
//                                       }
//                                     >
//                                       <Card className="overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10">
//                                         <div
//                                           className={`h-36 ${template.color} relative flex items-center justify-center`}
//                                         >
//                                           <div className="absolute top-2 left-2">
//                                             <span className="px-2 py-1 text-xs font-medium bg-black/30 backdrop-blur-md text-white rounded-full">
//                                               {template.popularity}
//                                             </span>
//                                           </div>
//                                           <div className="w-20 h-28 bg-white rounded-md shadow-md transform rotate-3 transition-transform"></div>
//                                           <div className="w-20 h-28 bg-white rounded-md shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-3 transition-transform">
//                                             <div className="w-full h-1 bg-blue-500 rounded-t-md"></div>
//                                             <div className="p-1">
//                                               <div className="w-full h-2 bg-gray-200 rounded-sm mb-1"></div>
//                                               <div className="w-3/4 h-1 bg-gray-200 rounded-sm mb-1"></div>
//                                               <div className="w-full h-1 bg-gray-200 rounded-sm mb-1"></div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                         <CardContent className="p-4">
//                                           <h3 className="font-medium text-white text-center">
//                                             {template.name}
//                                           </h3>
//                                         </CardContent>
//                                       </Card>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </TabsContent>
//                             )
//                           )}
//                         </Tabs>
//                       </div>

//                       <div className="mb-8">
//                         <h4 className="text-xl font-bold text-white mb-4">
//                           Step 3: Additional information
//                         </h4>
//                         <div className="bg-white/5 backdrop-blur-md rounded-xl p-4">
//                           <label className="block text-white mb-2">
//                             Target Position or Description
//                           </label>
//                           <textarea
//                             className="w-full bg-slate-800/70 border border-white/10 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             rows={3}
//                             placeholder="Example: 'Software Engineer with 5+ years React experience'"
//                             value={resumeDescription}
//                             onChange={(e) =>
//                               setResumeDescription(e.target.value)
//                             }
//                           />
//                           <p className="text-blue-100/60 mt-2 text-sm">
//                             Helps our AI tailor your resume to specific jobs
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex justify-end space-x-4">
//                         <Button
//                           variant="outline"
//                           className="border-white/20 text-white hover:bg-white/10"
//                           onClick={handleBackToSteps}
//                         >
//                           Cancel
//                         </Button>
//                         <Button
//                           className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
//                           onClick={handleSubmitResume}
//                           disabled={!uploadedFileName || !selectedTemplate}
//                         >
//                           <Calendar className="mr-2 h-4 w-4" />
//                           Process Resume
//                         </Button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Template Showcase Section (only shown when not in upload mode) */}
//             {!showUploadSection && (
//               <>
//                 <div className="text-center mb-12">
//                   <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
//                     Browse Our Template Collection
//                   </h2>
//                   <p className="text-blue-100/80 max-w-3xl mx-auto">
//                     Find the perfect template for your career goals
//                   </p>
//                 </div>

//                 <div className="text-center mb-8">
//                   <label className="cursor-pointer">
//                     <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full">
//                       <Upload className="mr-2 h-5 w-5" />
//                       Upload Your Resume
//                     </Button>
//                     <input
//                       type="file"
//                       className="hidden"
//                       accept=".pdf,.docx,.doc,.txt"
//                       onChange={handleBrowseTemplateUpload}
//                     />
//                   </label>
//                 </div>

//                 <Tabs defaultValue="iit" className="w-full">
//                   <TabsList className="grid grid-cols-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-1 mb-8">
//                     {templateCategories.map((category) => (
//                       <TabsTrigger
//                         key={category.id}
//                         value={category.id}
//                         className="text-blue-100/90 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white rounded-lg"
//                       >
//                         {category.label}
//                       </TabsTrigger>
//                     ))}
//                   </TabsList>

//                   {Object.entries(templates).map(([category, items]) => (
//                     <TabsContent
//                       key={category}
//                       value={category}
//                       className="mt-0"
//                     >
//                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {items.map((template) => (
//                           <div key={template.id} className="group">
//                             <Card className="overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10">
//                               <div
//                                 className={`h-48 ${template.color} relative`}
//                               >
//                                 <div className="absolute top-3 left-3">
//                                   <span className="px-3 py-1 text-xs font-semibold bg-black/30 backdrop-blur-md text-white rounded-full">
//                                     {template.popularity}
//                                   </span>
//                                 </div>
//                                 <div className="absolute inset-0 flex items-center justify-center">
//                                   <div className="w-28 h-40 bg-white/90 rounded-md shadow-md transform rotate-3 transition-transform group-hover:rotate-0"></div>
//                                   <div className="w-28 h-40 bg-white rounded-md shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-3 transition-transform group-hover:rotate-0">
//                                     <div className="w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-md"></div>
//                                     <div className="p-2">
//                                       <div className="w-full h-3 bg-gray-300 rounded-sm mb-2"></div>
//                                       <div className="w-3/4 h-2 bg-gray-300 rounded-sm mb-2"></div>
//                                       <div className="w-full h-2 bg-gray-300 rounded-sm mb-2"></div>
//                                       <div className="w-5/6 h-2 bg-gray-300 rounded-sm mb-2"></div>
//                                       <div className="w-full h-2 bg-gray-300 rounded-sm"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                               <CardContent className="p-6">
//                                 <div className="flex justify-between items-center mb-2">
//                                   <h3 className="font-bold text-lg text-white">
//                                     {template.name}
//                                   </h3>
//                                   <Button
//                                     variant="ghost"
//                                     size="sm"
//                                     className="text-blue-100/80 hover:text-white hover:bg-white/10"
//                                     onClick={() => {
//                                       handleTemplateSelect(template.id);
//                                       setShowUploadSection(true);
//                                     }}
//                                   >
//                                     <Eye size={16} className="mr-1" /> Use
//                                     Template
//                                   </Button>
//                                 </div>
//                               </CardContent>
//                             </Card>
//                           </div>
//                         ))}
//                       </div>
//                     </TabsContent>
//                   ))}
//                 </Tabs>

//                 <div className="mt-12 text-center">
//                   <Button
//                     className="relative overflow-hidden px-8 py-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold group"
//                     onClick={() => setShowUploadSection(true)}
//                   >
//                     <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                     <span className="relative z-10 flex items-center">
//                       <FileSearch className="mr-2 h-5 w-5" />
//                       Get Started With Your Resume
//                     </span>
//                   </Button>
//                 </div>
//               </>
//             )}

//             {/* Testimonials */}
//             {!showUploadSection && !showProcessedResult && (
//               <div className="mt-24">
//                 <div className="text-center mb-16">
//                   <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
//                     What Our Users Say
//                   </h2>
//                   <p className="text-blue-100/80 max-w-2xl mx-auto">
//                     Join thousands of professionals who've upgraded their
//                     resumes
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/5">
//                     <CardContent className="p-6">
//                       <div className="flex items-center mb-4">
//                         <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mr-4 flex items-center justify-center text-white font-bold text-xl">
//                           AK
//                         </div>
//                         <div>
//                           <h4 className="text-white font-medium">
//                             Anjali Kumar
//                           </h4>
//                           <p className="text-blue-100/70 text-sm">
//                             IIT Delhi Graduate
//                           </p>
//                         </div>
//                       </div>
//                       <p className="text-blue-100/80 mb-4">
//                         "The IIT Engineering template helped me showcase my
//                         technical skills in a structured format. I received
//                         interview calls from 3 top tech companies within a
//                         week!"
//                       </p>
//                       <div className="flex text-yellow-400">
//                         <span>★</span>
//                         <span>★</span>
//                         <span>★</span>
//                         <span>★</span>
//                         <span>★</span>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-purple-500/5">
//                     <CardContent className="p-6">
//                       <div className="flex items-center mb-4">
//                         <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4 flex items-center justify-center text-white font-bold text-xl">
//                           RS
//                         </div>
//                         <div>
//                           <h4 className="text-white font-medium">
//                             Rahul Sharma
//                           </h4>
//                           <p className="text-blue-100/70 text-sm">
//                             IIM Ahmedabad Alumnus
//                           </p>
//                         </div>
//                       </div>
//                       <p className="text-blue-100/80 mb-4">
//                         "The IIM Consulting template perfectly highlighted my
//                         business acumen and leadership experience. Secured a
//                         position at a leading consulting firm!"
//                       </p>
//                       <div className="flex text-yellow-400">
//                         <span>★</span>
//                         <span>★</span>
//                         <span>★</span>
//                         <span>★</span>
//                         <span>★</span>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-emerald-500/5">
//                     <CardContent className="p-6">
//                       <div className="flex items-center mb-4">
//                         <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mr-4 flex items-center justify-center text-white font-bold text-xl">
//                           PS
//                         </div>
//                         <div>
//                           <h4 className="text-white font-medium">
//                             Priya Singh
//                           </h4>
//                           <p className="text-blue-100/70 text-sm">
//                             IIT-IIM Graduate
//                           </p>
//                         </div>
//                       </div>
//                       <p className="text-blue-100/80 mb-4">
//                         "The Tech-Management Hybrid template was perfect for my
//                         background. The AI suggestions helped me optimize my
//                         resume for product management roles!"
//                       </p>
//                       <div className="flex text-yellow-400">
//                         <span>★</span>
//                         <span>★</span>
//                         <span>★</span>
//                         <span>★</span>
//                         <span>★</span>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             )}

//             {/* FAQ Section */}
//             {!showUploadSection && !showProcessedResult && (
//               <div className="mt-24">
//                 <div className="text-center mb-16">
//                   <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
//                     Frequently Asked Questions
//                   </h2>
//                   <p className="text-blue-100/80 max-w-2xl mx-auto">
//                     Everything you need to know about our resume templates
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4">
//                         <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0">
//                           <AlertCircle size={18} />
//                         </div>
//                         <div>
//                           <h4 className="text-white font-medium mb-2">
//                             What makes these templates special for IIT/IIM
//                             graduates?
//                           </h4>
//                           <p className="text-blue-100/80">
//                             Our templates are specifically designed to highlight
//                             the unique academic and professional achievements of
//                             IIT and IIM graduates, with formats that emphasize
//                             technical skills, leadership experience, and project
//                             work in ways that appeal to top employers.
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4">
//                         <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0">
//                           <AlertCircle size={18} />
//                         </div>
//                         <div>
//                           <h4 className="text-white font-medium mb-2">
//                             Can I customize the templates after selection?
//                           </h4>
//                           <p className="text-blue-100/80">
//                             Yes, all templates are fully customizable. After
//                             processing, you can edit sections, colors, fonts,
//                             and layout to match your preferences while
//                             maintaining the professional structure and ATS
//                             compatibility.
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4">
//                         <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0">
//                           <AlertCircle size={18} />
//                         </div>
//                         <div>
//                           <h4 className="text-white font-medium mb-2">
//                             Are these templates ATS-friendly?
//                           </h4>
//                           <p className="text-blue-100/80">
//                             Absolutely! All our templates are designed to pass
//                             through Applicant Tracking Systems with ease. We use
//                             clean formatting, appropriate keywords, and standard
//                             section headings that ATS algorithms can easily
//                             parse.
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4">
//                         <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0">
//                           <AlertCircle size={18} />
//                         </div>
//                         <div>
//                           <h4 className="text-white font-medium mb-2">
//                             What file formats can I upload and download?
//                           </h4>
//                           <p className="text-blue-100/80">
//                             You can upload your existing resume in PDF, DOCX,
//                             DOC, or TXT formats. After processing, you can
//                             download your new resume as PDF or DOCX, making it
//                             easy to share with employers or make future edits.
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             )}

//             {/* CTA Section */}
//             {!showUploadSection && !showProcessedResult && (
//               <div className="mt-24 text-center bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
//                   Ready to transform your resume?
//                 </h2>
//                 <p className="text-blue-100/90 max-w-3xl mx-auto mb-8 text-lg">
//                   Join thousands of IIT and IIM graduates who've landed their
//                   dream jobs with our templates
//                 </p>
//                 <Button
//                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-blue-500/20"
//                   onClick={() => setShowUploadSection(true)}
//                 >
//                   <Upload className="mr-2 h-5 w-5" />
//                   Get Started Now
//                 </Button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Templates;

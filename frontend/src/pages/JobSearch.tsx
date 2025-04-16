// src/pages/JobSearch.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    locations: [],
    jobTypes: [],
    experience: [0, 10],
    salary: [0, 50],
  });

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Innovations",
      location: "Bangalore",
      salary: "₹18-25 LPA",
      experience: "2-4 years",
      type: "Full-time",
      skills: ["React", "Node.js", "MongoDB"],
      posted: "2 days ago",
      deadline: "April 30, 2025",
      description:
        "We are looking for a skilled software engineer to join our team...",
      matchScore: 92,
      isSaved: false,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Mumbai",
      salary: "₹22-28 LPA",
      experience: "4-6 years",
      type: "Full-time",
      skills: ["Product Strategy", "Agile", "User Research"],
      posted: "1 week ago",
      deadline: "May 15, 2025",
      description: "Leading product manager role for our flagship product...",
      matchScore: 78,
      isSaved: true,
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Delhi NCR",
      salary: "₹20-26 LPA",
      experience: "3-5 years",
      type: "Full-time",
      skills: ["Python", "ML", "TensorFlow", "Data Visualization"],
      posted: "3 days ago",
      deadline: "May 5, 2025",
      description: "Join our data science team to build predictive models...",
      matchScore: 85,
      isSaved: false,
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "WebSolutions",
      location: "Hyderabad",
      salary: "₹14-18 LPA",
      experience: "1-3 years",
      type: "Full-time",
      skills: ["React", "JavaScript", "CSS", "UI/UX"],
      posted: "5 days ago",
      deadline: "May 10, 2025",
      description:
        "Looking for frontend developers to build responsive web applications...",
      matchScore: 90,
      isSaved: false,
    },
  ];

  const locations = [
    "Bangalore",
    "Mumbai",
    "Delhi NCR",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Remote",
  ];
  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Remote",
  ];

  const handleLocationFilter = (location) => {
    setFilters((prevFilters) => {
      if (prevFilters.locations.includes(location)) {
        return {
          ...prevFilters,
          locations: prevFilters.locations.filter((loc) => loc !== location),
        };
      } else {
        return {
          ...prevFilters,
          locations: [...prevFilters.locations, location],
        };
      }
    });
  };

  const handleJobTypeFilter = (type) => {
    setFilters((prevFilters) => {
      if (prevFilters.jobTypes.includes(type)) {
        return {
          ...prevFilters,
          jobTypes: prevFilters.jobTypes.filter((t) => t !== type),
        };
      } else {
        return {
          ...prevFilters,
          jobTypes: [...prevFilters.jobTypes, type],
        };
      }
    });
  };

  const toggleSaveJob = (jobId) => {
    // Implementation would update the jobs array with the saved state
    console.log(`Toggle save job ${jobId}`);
  };

  const applyForJob = (jobId) => {
    // Implementation would handle the apply process
    console.log(`Apply for job ${jobId}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl font-bold mb-6">Find Your Ideal Role</h1>

        <div className="flex gap-6 flex-col lg:flex-row">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Location</h3>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <div key={location} className="flex items-center">
                        <Checkbox
                          id={`location-${location}`}
                          checked={filters.locations.includes(location)}
                          onCheckedChange={() => handleLocationFilter(location)}
                        />
                        <label
                          htmlFor={`location-${location}`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Job Type</h3>
                  <div className="space-y-2">
                    {jobTypes.map((type) => (
                      <div key={type} className="flex items-center">
                        <Checkbox
                          id={`type-${type}`}
                          checked={filters.jobTypes.includes(type)}
                          onCheckedChange={() => handleJobTypeFilter(type)}
                        />
                        <label
                          htmlFor={`type-${type}`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Experience (years)</h3>
                  <Slider
                    defaultValue={[0, 10]}
                    max={15}
                    step={1}
                    value={filters.experience}
                    onValueChange={(value) =>
                      setFilters({ ...filters, experience: value })
                    }
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>{filters.experience[0]} years</span>
                    <span>{filters.experience[1]} years</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Salary Range (LPA)</h3>
                  <Slider
                    defaultValue={[0, 50]}
                    max={100}
                    step={5}
                    value={filters.salary}
                    onValueChange={(value) =>
                      setFilters({ ...filters, salary: value })
                    }
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>₹{filters.salary[0]} LPA</span>
                    <span>₹{filters.salary[1]}+ LPA</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    setFilters({
                      locations: [],
                      jobTypes: [],
                      experience: [0, 10],
                      salary: [0, 50],
                    })
                  }
                >
                  Reset Filters
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="mb-6">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <Input
                  type="text"
                  placeholder="Search for jobs, skills, or companies"
                  className="pl-12 pr-4 py-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="matched">Best Matches</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
                <TabsTrigger value="applied">Applied</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <Card key={job.id} className="overflow-hidden">
                      <div className="flex-1">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">
                                {job.title}
                              </CardTitle>
                              <p className="text-gray-600">
                                {job.company} • {job.location}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <Badge
                                className={`${
                                  job.matchScore >= 90
                                    ? "bg-green-100 text-green-800"
                                    : job.matchScore >= 70
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {job.matchScore}% Match
                              </Badge>
                              <Button
                                variant="ghost"
                                size="icon"
                                className={`ml-2 ${
                                  job.isSaved
                                    ? "text-blue-600"
                                    : "text-gray-400"
                                }`}
                                onClick={() => toggleSaveJob(job.id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill={job.isSaved ? "currentColor" : "none"}
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-3">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 mb-4">
                            <div>
                              <span className="text-sm text-gray-500">
                                Salary:
                              </span>
                              <p className="font-medium">{job.salary}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">
                                Experience:
                              </span>
                              <p className="font-medium">{job.experience}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">
                                Job Type:
                              </span>
                              <p className="font-medium">{job.type}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">
                                Posted:
                              </span>
                              <p className="font-medium">{job.posted}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm text-gray-500 mb-2">
                              Required Skills:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill) => (
                                <Badge key={skill} variant="secondary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <p className="text-sm text-gray-700 line-clamp-2">
                            {job.description}
                          </p>
                        </CardContent>
                        <CardFooter className="pt-0 flex justify-between">
                          <p className="text-sm text-gray-500">
                            Apply before: {job.deadline}
                          </p>
                          <div className="space-x-2">
                            <Button
                              variant="outline"
                              onClick={() => toggleSaveJob(job.id)}
                            >
                              {job.isSaved ? "Saved" : "Save"}
                            </Button>
                            <Button
                              className="bg-blue-600 hover:bg-blue-700"
                              onClick={() => applyForJob(job.id)}
                            >
                              Apply Now
                            </Button>
                          </div>
                        </CardFooter>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Other tab contents similar to "all" */}
              <TabsContent value="matched" className="mt-6">
                {/* Similar structure, filtered for best matches */}
              </TabsContent>

              <TabsContent value="saved" className="mt-6">
                {/* Similar structure, filtered for saved jobs */}
              </TabsContent>

              <TabsContent value="applied" className="mt-6">
                {/* Similar structure, filtered for applied jobs */}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSearch;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

  // Sample jobs data
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Mumbai, India",
      salary: "₹15-20 LPA",
      description:
        "We are looking for a skilled Frontend Developer to join our team...",
      requirements: ["React", "JavaScript", "TypeScript", "CSS"],
      matchScore: 92,
      posted: "2 days ago",
      applied: false,
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Bangalore, India",
      salary: "₹18-25 LPA",
      description:
        "Join our data science team to work on cutting-edge projects...",
      requirements: ["Python", "Machine Learning", "SQL", "Statistics"],
      matchScore: 85,
      posted: "1 week ago",
      applied: true,
    },
    {
      id: 3,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Remote",
      salary: "₹20-30 LPA",
      description:
        "Looking for an experienced Product Manager to lead our product development...",
      requirements: [
        "Product Strategy",
        "User Research",
        "Agile",
        "Roadmapping",
      ],
      matchScore: 78,
      posted: "3 days ago",
      applied: false,
    },
  ];

  // Filter jobs based on selected tab
  const filteredJobs = jobs.filter((job) => {
    if (selectedTab === "applied") return job.applied;
    if (selectedTab === "saved") return job.saved;
    return true; // All jobs
  });

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Job Search</h1>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for jobs, skills, companies..."
              className="pr-10"
            />
            <Button size="sm" className="absolute right-1 top-1 h-8">
              Search
            </Button>
          </div>

          <Tabs
            defaultValue="all"
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full md:w-auto"
          >
            <TabsList className="grid grid-cols-3 w-full md:w-auto">
              <TabsTrigger value="all">All Jobs</TabsTrigger>
              <TabsTrigger value="applied">Applied</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card key={job.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-gray-600">
                      {job.company} • {job.location}
                    </p>
                    <p className="text-gray-600 mt-1">
                      {job.salary} • {job.posted}
                    </p>

                    <p className="mt-4">{job.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} variant="secondary">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-4">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                      {job.matchScore}% Match
                    </Badge>

                    {job.applied ? (
                      <Button variant="outline" disabled>
                        Applied
                      </Button>
                    ) : (
                      <Button>Apply Now</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;

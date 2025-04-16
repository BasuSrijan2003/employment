// src/pages/ResumeAnalysis.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const ResumeAnalysis = () => {
  const [analysisData] = useState({
    overallScore: 82,
    atsScore: 78,
    keywordMatch: 68,
    sections: {
      contact: 100,
      education: 90,
      experience: 85,
      skills: 75,
      projects: 80,
      formatting: 70,
    },
    keywords: {
      matched: [
        "React",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "AWS",
        "SQL",
        "Python",
      ],
      missing: ["Docker", "Kubernetes", "CI/CD", "GraphQL"],
    },
    suggestions: [
      {
        section: "Overall",
        suggestions: [
          "Consider using more active verbs in your experience descriptions",
          "Include metrics and achievements to quantify your impact",
        ],
      },
      {
        section: "Experience",
        suggestions: [
          "Add more details about your specific role in team projects",
          "Elaborate on technologies used in each role",
        ],
      },
      {
        section: "Education",
        suggestions: [
          "Include relevant coursework for your target positions",
          "Add any notable academic achievements",
        ],
      },
      {
        section: "Skills",
        suggestions: [
          "Group skills by category (e.g., Programming Languages, Tools, Frameworks)",
          "Consider adding proficiency levels",
        ],
      },
    ],
    jobFit: [
      { position: "Software Engineer", match: 87 },
      { position: "Frontend Developer", match: 92 },
      { position: "Full Stack Developer", match: 85 },
      { position: "DevOps Engineer", match: 62 },
    ],
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Resume Analysis</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Download Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Overall Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div
                  className={`text-4xl font-bold ${
                    analysisData.overallScore >= 80
                      ? "text-green-500"
                      : analysisData.overallScore >= 60
                      ? "text-amber-500"
                      : "text-red-500"
                  }`}
                >
                  {analysisData.overallScore}
                </div>
                <div className="text-2xl font-bold text-gray-300 ml-1">
                  /100
                </div>
              </div>
              <Progress
                value={analysisData.overallScore}
                className="h-2 mt-2"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                ATS Compatibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div
                  className={`text-4xl font-bold ${
                    analysisData.atsScore >= 80
                      ? "text-green-500"
                      : analysisData.atsScore >= 60
                      ? "text-amber-500"
                      : "text-red-500"
                  }`}
                >
                  {analysisData.atsScore}
                </div>
                <div className="text-2xl font-bold text-gray-300 ml-1">
                  /100
                </div>
              </div>
              <Progress value={analysisData.atsScore} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Keyword Match
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div
                  className={`text-4xl font-bold ${
                    analysisData.keywordMatch >= 80
                      ? "text-green-500"
                      : analysisData.keywordMatch >= 60
                      ? "text-amber-500"
                      : "text-red-500"
                  }`}
                >
                  {analysisData.keywordMatch}
                </div>
                <div className="text-2xl font-bold text-gray-300 ml-1">%</div>
              </div>
              <Progress
                value={analysisData.keywordMatch}
                className="h-2 mt-2"
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="keywords">Keywords</TabsTrigger>
                <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                <TabsTrigger value="jobFit">Job Fit</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Section Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {Object.entries(analysisData.sections).map(
                        ([section, score]) => (
                          <div key={section}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium capitalize">
                                {section}
                              </span>
                              <span className="text-sm font-medium">
                                {score}%
                              </span>
                            </div>
                            <Progress value={score} className="h-2" />
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="keywords" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Keyword Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-3">
                        Matched Keywords
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {analysisData.keywords.matched.map((keyword) => (
                          <Badge
                            key={keyword}
                            className="bg-green-100 text-green-800 hover:bg-green-200"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">
                        Recommended Keywords
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {analysisData.keywords.missing.map((keyword) => (
                          <Badge
                            key={keyword}
                            variant="outline"
                            className="border-amber-300 text-amber-600"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="suggestions" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Improvement Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {analysisData.suggestions.map((item, index) => (
                        <div key={index}>
                          <h3 className="text-lg font-medium mb-2">
                            {item.section}
                          </h3>
                          <ul className="space-y-2">
                            {item.suggestions.map((suggestion, i) => (
                              <li key={i} className="flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-amber-500 mr-2 flex-shrink-0"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line
                                    x1="12"
                                    y1="16"
                                    x2="12.01"
                                    y2="16"
                                  ></line>
                                </svg>
                                <span>{suggestion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="jobFit" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Fit Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {analysisData.jobFit.map((job) => (
                        <div key={job.position}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{job.position}</span>
                            <span className="font-medium">{job.match}%</span>
                          </div>
                          <Progress
                            value={job.match}
                            className={`h-2 ${
                              job.match >= 80
                                ? "bg-green-600"
                                : job.match >= 60
                                ? "bg-amber-500"
                                : "bg-red-500"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Strengths
                    </h3>
                    <ul className="mt-2 space-y-2">
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500 mr-2 flex-shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Strong technical skill set</span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500 mr-2 flex-shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Clear work experience descriptions</span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500 mr-2 flex-shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Excellent educational background</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Areas for Improvement
                    </h3>
                    <ul className="mt-2 space-y-2">
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-500 mr-2 flex-shrink-0"
                        >
                          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <span>Add more quantifiable achievements</span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-500 mr-2 flex-shrink-0"
                        >
                          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <span>Include more industry-specific keywords</span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-500 mr-2 flex-shrink-0"
                        >
                          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <span>Improve formatting consistency</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Get Detailed Report
                    </Button>
                    <Button variant="outline" className="w-full mt-2">
                      Request Expert Review
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeAnalysis;

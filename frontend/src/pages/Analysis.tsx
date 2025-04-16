import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";

const Analysis = () => {
  // Sample data for analysis visualization
  const skillsData = [
    { skill: "Technical Skills", score: 85, color: "bg-blue-500" },
    { skill: "Work Experience", score: 70, color: "bg-green-500" },
    { skill: "Education", score: 90, color: "bg-purple-500" },
    { skill: "Projects", score: 75, color: "bg-yellow-500" },
    { skill: "Certifications", score: 60, color: "bg-red-500" },
  ];

  const improvementSuggestions = [
    "Add more quantifiable achievements to your work experience",
    "Include relevant skills that match job descriptions",
    "Add certifications to strengthen your profile",
    "Make sure your resume is ATS-friendly",
    "Include keywords from job postings you're interested in",
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Resume Analysis</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Resume Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="8"
                      strokeDasharray={`${76 * 2.83} 283`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                    76%
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600">
                Your resume is good, but there's room for improvement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Section Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillsData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{item.skill}</span>
                      <span>{item.score}%</span>
                    </div>
                    <Progress value={item.score} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Improvement Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {improvementSuggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Keyword Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-medium mb-2">Missing Keywords</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "leadership",
                    "project management",
                    "agile",
                    "scrum",
                    "teamwork",
                  ].map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <h3 className="font-medium mb-2">Present Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {["react", "javascript", "typescript", "css", "html"].map(
                    (keyword, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                      >
                        {keyword}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;

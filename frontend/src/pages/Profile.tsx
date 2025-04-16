import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    location: "Mumbai, India",
    about: "IIT graduate with experience in software development.",
    education: [
      {
        institution: "IIT Bombay",
        degree: "B.Tech in Computer Science",
        year: "2018-2022",
      },
    ],
    experience: [
      {
        company: "Tech Solutions",
        role: "Software Engineer",
        duration: "2022-Present",
        description: "Developing web applications using React and Node.js",
      },
    ],
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                  <h2 className="text-xl font-semibold">
                    {profileData.fullName}
                  </h2>
                  <p className="text-gray-600">{profileData.location}</p>
                </div>

                <div className="mt-6 space-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p>{profileData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p>{profileData.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={profileData.about}
                  onChange={(e) =>
                    setProfileData({ ...profileData, about: e.target.value })
                  }
                  className="min-h-[100px]"
                />
                <Button className="mt-4">Save</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.education.map((edu, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-md">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{edu.institution}</h3>
                      <span>{edu.year}</span>
                    </div>
                    <p>{edu.degree}</p>
                  </div>
                ))}
                <Button className="mt-2">Add Education</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.experience.map((exp, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-md">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{exp.company}</h3>
                      <span>{exp.duration}</span>
                    </div>
                    <p className="font-medium">{exp.role}</p>
                    <p className="mt-2 text-gray-700">{exp.description}</p>
                  </div>
                ))}
                <Button className="mt-2">Add Experience</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

import { useState, useEffect } from "react";
import { Menu, X, LogOut, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Facebook } from "lucide-react";
import Dashboard from "./dashboard";
// import Templates from "./Templates";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [userType, setUserType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  // Check for existing login on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUserType(userData.userType);

      // Set appropriate view based on user type
      if (userData.userType === "candidate") {
        setShowTemplates(true);
        setShowDashboard(false);
      } else if (userData.userType === "institute") {
        setShowDashboard(true);
        setShowTemplates(false);
      }
    }
  }, []);

  // Login handler with user type consideration
  const handleLogin = (e, selectedUserType) => {
    e.preventDefault();
    console.log(
      "Login attempted with:",
      loginEmail,
      loginPassword,
      "as",
      selectedUserType
    );

    // Store auth info in localStorage to persist login
    localStorage.setItem(
      "authUser",
      JSON.stringify({
        userType: selectedUserType,
        timestamp: new Date().getTime(),
      })
    );

    // Reset fields after submission
    setLoginEmail("");
    setLoginPassword("");

    // Set user type and login state
    setUserType(selectedUserType);
    setIsLoggedIn(true);

    // Navigate based on user type
    if (selectedUserType === "candidate") {
      setShowTemplates(true);
      setShowDashboard(false);
    } else if (selectedUserType === "institute") {
      setShowDashboard(true);
      setShowTemplates(false);
    }
  };

  // Signup handler with user type consideration
  const handleSignup = (e, selectedUserType) => {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log(
      "Signup attempted with:",
      fullName,
      signupEmail,
      signupPassword,
      phoneNumber,
      "as",
      selectedUserType
    );

    // Store auth info in localStorage to persist login
    localStorage.setItem(
      "authUser",
      JSON.stringify({
        userType: selectedUserType,
        timestamp: new Date().getTime(),
      })
    );

    // Reset fields after submission
    setSignupEmail("");
    setSignupPassword("");
    setSignupConfirmPassword("");
    setFullName("");
    setPhoneNumber("");

    // Set user type and login state
    setUserType(selectedUserType);
    setIsLoggedIn(true);

    // Navigate based on user type
    if (selectedUserType === "candidate") {
      setShowTemplates(true);
      setShowDashboard(false);
    } else if (selectedUserType === "institute") {
      setShowDashboard(true);
      setShowTemplates(false);
    }
  };

  // Social login handlers with user type consideration
  const handleSocialLogin = (provider, selectedUserType) => {
    console.log(`Login with ${provider} as ${selectedUserType}`);

    // Store auth info in localStorage to persist login
    localStorage.setItem(
      "authUser",
      JSON.stringify({
        userType: selectedUserType,
        timestamp: new Date().getTime(),
      })
    );

    // Set user type and login state
    setUserType(selectedUserType);
    setIsLoggedIn(true);

    // Navigate based on user type
    if (selectedUserType === "candidate") {
      setShowTemplates(true);
      setShowDashboard(false);
    } else if (selectedUserType === "institute") {
      setShowDashboard(true);
      setShowTemplates(false);
    }
  };

  const handlePhoneLogin = (selectedUserType) => {
    console.log(
      "Login with phone number:",
      phoneNumber,
      "as",
      selectedUserType
    );

    // Store auth info in localStorage to persist login
    localStorage.setItem(
      "authUser",
      JSON.stringify({
        userType: selectedUserType,
        timestamp: new Date().getTime(),
      })
    );

    // Set user type and login state
    setUserType(selectedUserType);
    setIsLoggedIn(true);

    // Navigate based on user type
    if (selectedUserType === "candidate") {
      setShowTemplates(true);
      setShowDashboard(false);
    } else if (selectedUserType === "institute") {
      setShowDashboard(true);
      setShowTemplates(false);
    }
  };

  // Logout handler
  const handleLogout = () => {
    // Clear stored auth info
    localStorage.removeItem("authUser");

    setIsLoggedIn(false);
    setShowDashboard(false);
    setShowTemplates(false);
    setUserType(null);
    navigate("/");
  };

  // Always render the navbar
  const renderNavbar = () => {
    return (
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="font-bold text-xl text-blue-600">
            IIT-IIM Resume
          </Link>

          {/* Navigation links - Desktop */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="px-4 py-2 hover:text-blue-600">
              Home
            </Link>

            {isLoggedIn && (
              <>
                <Link to="/profile" className="px-4 py-2 hover:text-blue-600">
                  Profile
                </Link>
                <Link
                  to="/resume-builder"
                  className="px-4 py-2 hover:text-blue-600"
                >
                  Resume Builder
                </Link>
                <Link to="/analysis" className="px-4 py-2 hover:text-blue-600">
                  Analysis
                </Link>
                <Link to="/jobs" className="px-4 py-2 hover:text-blue-600">
                  Jobs
                </Link>
                <Link to="/settings" className="px-4 py-2 hover:text-blue-600">
                  Settings
                </Link>
              </>
            )}

            {isLoggedIn ? (
              <Button
                variant="outline"
                className="ml-4 flex items-center gap-2"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                Logout
              </Button>
            ) : (
              <>
                <AuthDialog
                  type="login"
                  onSignup={(e, selectedUserType) =>
                    handleSignup(e, selectedUserType)
                  }
                  onSocialLogin={(provider, selectedUserType) =>
                    handleSocialLogin(provider, selectedUserType)
                  }
                  onLogin={(e, selectedUserType) =>
                    handleLogin(e, selectedUserType)
                  }
                  onPhoneLogin={handlePhoneLogin}
                />
                <AuthDialog
                  type="signup"
                  onSignup={(e, selectedUserType) =>
                    handleSignup(e, selectedUserType)
                  }
                  onSocialLogin={(provider, selectedUserType) =>
                    handleSocialLogin(provider, selectedUserType)
                  }
                  onLogin={(e, selectedUserType) =>
                    handleLogin(e, selectedUserType)
                  }
                  onPhoneLogin={handlePhoneLogin}
                />
                <Button>Get Started</Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 p-2 md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6 space-y-4">
            <Link to="/" className="block py-2 hover:text-blue-600">
              Home
            </Link>

            {isLoggedIn && (
              <>
                <Link to="/profile" className="block py-2 hover:text-blue-600">
                  Profile
                </Link>
                <Link
                  to="/resume-builder"
                  className="block py-2 hover:text-blue-600"
                >
                  Resume Builder
                </Link>
                <Link to="/analysis" className="block py-2 hover:text-blue-600">
                  Analysis
                </Link>
                <Link to="/jobs" className="block py-2 hover:text-blue-600">
                  Jobs
                </Link>
                <Link to="/settings" className="block py-2 hover:text-blue-600">
                  Settings
                </Link>
              </>
            )}

            {isLoggedIn ? (
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                Logout
              </Button>
            ) : (
              <>
                <AuthDialog
                  type="login"
                  mobile={true}
                  onSignup={(e, selectedUserType) =>
                    handleSignup(e, selectedUserType)
                  }
                  onSocialLogin={(provider, selectedUserType) =>
                    handleSocialLogin(provider, selectedUserType)
                  }
                  onLogin={(e, selectedUserType) =>
                    handleLogin(e, selectedUserType)
                  }
                  onPhoneLogin={handlePhoneLogin}
                />
                <AuthDialog
                  type="signup"
                  mobile={true}
                  onSignup={(e, selectedUserType) =>
                    handleSignup(e, selectedUserType)
                  }
                  onSocialLogin={(provider, selectedUserType) =>
                    handleSocialLogin(provider, selectedUserType)
                  }
                  onLogin={(e, selectedUserType) =>
                    handleLogin(e, selectedUserType)
                  }
                  onPhoneLogin={handlePhoneLogin}
                />
                <Button className="w-full">Get Started</Button>
              </>
            )}
          </div>
        )}
      </nav>
    );
  };

  // Render the appropriate content based on state
  return (
    <>
      {renderNavbar()}
      {showDashboard && userType === "institute" && (
        <Dashboard setShowDashboard={undefined} studentSkillsData={undefined} />
      )}
      {/* {showTemplates && userType === "candidate" && <Templates />} */}
    </>
  );
};

// AuthDialog component
const AuthDialog = ({
  type,
  mobile = false,
  onLogin,
  onSignup,
  onSocialLogin,
  onPhoneLogin,
}) => {
  const [activeTab, setActiveTab] = useState("email");
  const [userType, setUserType] = useState(null); // State for user type selection
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  // Reset user type selection when dialog is closed
  const resetUserType = () => {
    setUserType(null);
  };

  return (
    <Dialog onOpenChange={(open) => !open && resetUserType()}>
      <DialogTrigger asChild>
        <Button
          variant={type === "login" ? "outline" : "default"}
          className={mobile ? "w-full" : ""}
        >
          {type === "login" ? "Login" : "Sign Up"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {!userType
              ? type === "login"
                ? "Login as"
                : "Sign Up as"
              : type === "login"
              ? "Welcome Back"
              : "Create an Account"}
          </DialogTitle>
        </DialogHeader>

        {/* Step 1: Show user type selection first */}
        {!userType ? (
          <div className="grid grid-cols-2 gap-4 py-4">
            <Button
              variant="outline"
              className="w-full p-4 h-auto flex flex-col items-center gap-2"
              onClick={() => setUserType("candidate")}
            >
              <User className="h-12 w-12" />
              Candidate
            </Button>
            <Button
              variant="outline"
              className="w-full p-4 h-auto flex flex-col items-center gap-2"
              onClick={() => setUserType("institute")}
            >
              <User className="h-12 w-12" />
              Institute
            </Button>
          </div>
        ) : (
          // Step 2: After selecting user type, show appropriate forms
          <>
            {/* Back button to change user type */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-4"
              onClick={() => setUserType(null)}
            >
              Change user type
            </Button>

            {/* Login Form */}
            {type === "login" ? (
              <Tabs defaultValue="email" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="phone">Phone</TabsTrigger>
                </TabsList>
                <TabsContent value="email">
                  <form
                    onSubmit={(e) => onLogin(e, userType)}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder={`Enter your email`}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
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
                    <Button type="submit" className="w-full">
                      Login as{" "}
                      {userType.charAt(0).toUpperCase() + userType.slice(1)}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="phone">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      onPhoneLogin(userType);
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
                    <Button type="submit" className="w-full">
                      Send OTP
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            ) : (
              // Signup Form - Different fields based on user type
              <form
                onSubmit={(e) => onSignup(e, userType)}
                className="space-y-4 mt-2"
              >
                {userType === "candidate" && (
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
                )}
                {userType === "institute" && (
                  <div className="space-y-2">
                    <Label htmlFor="instituteName">Institute Name</Label>
                    <Input
                      id="instituteName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter institute name"
                      required
                      className="w-full"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder={`Enter ${userType} email`}
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    {userType === "candidate"
                      ? "Phone Number (optional)"
                      : "Contact Phone Number"}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full"
                    required={userType === "institute"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="Create a password"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={signupConfirmPassword}
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Create {userType.charAt(0).toUpperCase() + userType.slice(1)}{" "}
                  Account
                </Button>
              </form>
            )}
          </>
        )}

        {/* Only show social login options after user type selection */}
        {userType && (
          <>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <Button
                variant="outline"
                onClick={() => onSocialLogin("Google", userType)}
                className="flex items-center justify-center"
              >
                Google
              </Button>
              <Button
                variant="outline"
                onClick={() => onSocialLogin("Github", userType)}
                className="flex items-center justify-center"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => onSocialLogin("LinkedIn", userType)}
                className="flex items-center justify-center"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => onSocialLogin("Facebook", userType)}
                className="flex items-center justify-center"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}

        <DialogFooter className="mt-4 flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
          <span className="text-center text-sm text-gray-500">
            {type === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <a href="#" className="text-blue-600 hover:underline">
              {type === "login" ? "Sign up" : "Log in"}
            </a>
          </span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Helper component for User icon
const User = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
};

export default Navbar;

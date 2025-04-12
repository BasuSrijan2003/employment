import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  AlertCircle,
  CreditCard,
  Landmark,
  BadgeCheck,
  Smartphone,
  Globe,
  Wallet,
  ChevronDown,
  ArrowRight,
  Shield,
  Lock,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [paymentCategory, setPaymentCategory] = useState<string>("cards");
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  const plans = [
    {
      id: "free",
      name: "Free",
      price: billingCycle === "monthly" ? "₹0" : "₹0",
      period: "",
      description: "Basic resume creation for students",
      features: [
        "1 IIT/IIM formatted resume",
        "Basic templates",
        "Download as PDF",
        "Email support",
      ],
      limitations: [
        "Limited template options",
        "No premium features",
        "Basic formatting only",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      price: billingCycle === "monthly" ? "₹199" : "₹1,999",
      period: billingCycle === "monthly" ? "per month" : "per year",
      description: "Perfect for active job seekers",
      features: [
        "Unlimited resumes",
        "All premium templates",
        "ATS optimization features",
        "Export in multiple formats",
        "Industry-specific guidance",
        "1 month priority support",
        "Cover letter templates",
      ],
      limitations: [],
      buttonText: "Choose Premium",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      id: "pro",
      name: "Placement Pro",
      price: billingCycle === "monthly" ? "₹499" : "₹4,999",
      period: billingCycle === "monthly" ? "per month" : "per year",
      description: "Complete placement preparation",
      features: [
        "Everything in Premium",
        "Resume review by alumni",
        "LinkedIn profile optimization",
        "Mock interview preparation",
        "Lifetime access to templates",
        "6 months priority support",
        "Job application tracking",
      ],
      limitations: [],
      buttonText: "Choose Placement Pro",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ];

  const paymentMethods = {
    cards: [
      { id: "visa", name: "Visa", logo: "💳" },
      { id: "mastercard", name: "Mastercard", logo: "💳" },
      { id: "rupay", name: "RuPay", logo: "💳" },
      { id: "amex", name: "American Express", logo: "💳" },
    ],
    upi: [
      { id: "googlepay", name: "Google Pay", logo: "📱" },
      { id: "phonepe", name: "PhonePe", logo: "📱" },
      { id: "paytm", name: "Paytm UPI", logo: "📱" },
      { id: "bhim", name: "BHIM UPI", logo: "📱" },
    ],
    netbanking: [
      { id: "sbi", name: "State Bank of India", logo: "🏦" },
      { id: "hdfc", name: "HDFC Bank", logo: "🏦" },
      { id: "icici", name: "ICICI Bank", logo: "🏦" },
      { id: "axis", name: "Axis Bank", logo: "🏦" },
      { id: "other_banks", name: "Other Banks", logo: "🏦" },
    ],
    wallets: [
      { id: "paytm_wallet", name: "Paytm Wallet", logo: "👛" },
      { id: "amazon_pay", name: "Amazon Pay", logo: "👛" },
      { id: "mobikwik", name: "MobiKwik", logo: "👛" },
    ],
  };

  const handleSelectPlan = (planId: string) => {
    if (selectedPlan === planId) {
      setSelectedPlan(null);
      setShowPaymentDetails(false);
    } else {
      setSelectedPlan(planId);
      setShowPaymentDetails(false);
    }
  };

  const handlePaymentCategoryChange = (category: string) => {
    setPaymentCategory(category);
    setPaymentMethod(
      paymentMethods[category as keyof typeof paymentMethods][0].id
    );
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setPaymentMethod(methodId);
    setShowPaymentDetails(true);
  };

  const getSelectedPlanDetails = () => {
    return plans.find((plan) => plan.id === selectedPlan);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Unique background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 opacity-95 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiAwaC02di02aDZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 z-0"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose the plan that's right for your career stage. All plans come
            with our institution-specific templates.
          </p>

          {/* Billing cycle toggle */}
          <div className="mt-8 inline-flex bg-white/10 p-1 rounded-lg backdrop-blur-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                billingCycle === "monthly"
                  ? "bg-blue-600 text-white"
                  : "text-blue-100 hover:bg-white/10"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                billingCycle === "yearly"
                  ? "bg-blue-600 text-white"
                  : "text-blue-100 hover:bg-white/10"
              }`}
            >
              Yearly{" "}
              <span className="text-xs font-normal opacity-80">Save 15%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:translate-y-[-8px] ${
                plan.popular
                  ? "border-blue-500 bg-white/10 backdrop-blur-xl shadow-xl shadow-blue-500/10"
                  : "border-white/10 bg-white/5 backdrop-blur-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader
                className={`pb-4 ${plan.popular ? "bg-blue-600/20" : ""}`}
              >
                <CardTitle className="text-2xl font-bold text-white">
                  {plan.name}
                </CardTitle>
                <div className="mt-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-blue-100 ml-2">{plan.period}</span>
                  )}
                </div>
                <CardDescription className="text-blue-200 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-blue-100 mb-3">
                      Features include:
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-blue-100 mb-3">
                        Limitations:
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-start">
                            <AlertCircle className="w-5 h-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/80">
                              {limitation}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col">
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-white/20 text-white hover:bg-white/10"
                  }`}
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  {plan.buttonText}
                </Button>

                {/* Only show payment options for paid plans */}
                {plan.id !== "free" && selectedPlan === plan.id && (
                  <div className="mt-4 w-full bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300">
                    <h4 className="text-sm font-medium text-white mb-3 flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      Secure Payment
                    </h4>

                    {/* Payment category selection */}
                    <Tabs
                      defaultValue="cards"
                      value={paymentCategory}
                      onValueChange={handlePaymentCategoryChange}
                      className="w-full mb-4"
                    >
                      <TabsList className="grid grid-cols-4 mb-4 bg-black/30">
                        <TabsTrigger
                          value="cards"
                          className="flex items-center"
                        >
                          <CreditCard className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">Cards</span>
                        </TabsTrigger>
                        <TabsTrigger value="upi" className="flex items-center">
                          <Smartphone className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">UPI</span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="netbanking"
                          className="flex items-center"
                        >
                          <Landmark className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">NetBanking</span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="wallets"
                          className="flex items-center"
                        >
                          <Wallet className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">Wallets</span>
                        </TabsTrigger>
                      </TabsList>

                      {Object.entries(paymentMethods).map(
                        ([category, methods]) => (
                          <TabsContent
                            key={category}
                            value={category}
                            className="mt-0"
                          >
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              {methods.map((method) => (
                                <button
                                  key={method.id}
                                  className={`flex items-center justify-start p-3 rounded-lg text-left ${
                                    paymentMethod === method.id
                                      ? "bg-blue-600"
                                      : "bg-white/10 hover:bg-white/20"
                                  }`}
                                  onClick={() =>
                                    handlePaymentMethodSelect(method.id)
                                  }
                                >
                                  <span className="text-lg mr-2">
                                    {method.logo}
                                  </span>
                                  <span
                                    className={`text-sm ${
                                      paymentMethod === method.id
                                        ? "text-white"
                                        : "text-blue-100"
                                    }`}
                                  >
                                    {method.name}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </TabsContent>
                        )
                      )}
                    </Tabs>

                    {/* Payment details */}
                    {showPaymentDetails && (
                      <div className="bg-black/20 p-4 rounded-lg mb-4 border border-white/10">
                        {paymentCategory === "cards" && (
                          <div className="space-y-3">
                            <div>
                              <label className="text-xs text-blue-200 block mb-1">
                                Card Number
                              </label>
                              <input
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                className="w-full bg-black/30 border border-white/20 rounded-md p-2 text-white placeholder:text-white/50 text-sm"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="text-xs text-blue-200 block mb-1">
                                  Expiry Date
                                </label>
                                <input
                                  type="text"
                                  placeholder="MM/YY"
                                  className="w-full bg-black/30 border border-white/20 rounded-md p-2 text-white placeholder:text-white/50 text-sm"
                                />
                              </div>
                              <div>
                                <label className="text-xs text-blue-200 block mb-1">
                                  CVV
                                </label>
                                <input
                                  type="text"
                                  placeholder="123"
                                  className="w-full bg-black/30 border border-white/20 rounded-md p-2 text-white placeholder:text-white/50 text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="text-xs text-blue-200 block mb-1">
                                Name on Card
                              </label>
                              <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-black/30 border border-white/20 rounded-md p-2 text-white placeholder:text-white/50 text-sm"
                              />
                            </div>
                          </div>
                        )}

                        {paymentCategory === "upi" && (
                          <div className="space-y-3">
                            <div>
                              <label className="text-xs text-blue-200 block mb-1">
                                UPI ID
                              </label>
                              <input
                                type="text"
                                placeholder="yourname@upi"
                                className="w-full bg-black/30 border border-white/20 rounded-md p-2 text-white placeholder:text-white/50 text-sm"
                              />
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-blue-200">
                                Or scan QR code with your UPI app
                              </p>
                              <div className="bg-white mx-auto my-2 w-24 h-24 rounded-md flex items-center justify-center">
                                <span className="text-black text-xs">
                                  QR Placeholder
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {paymentCategory === "netbanking" && (
                          <div className="text-center py-2">
                            <p className="text-xs text-blue-200 mb-2">
                              You will be redirected to your bank's secure
                              payment page
                            </p>
                            <img
                              src="/api/placeholder/200/60"
                              alt="Bank secure gateway"
                              className="mx-auto rounded"
                            />
                          </div>
                        )}

                        {paymentCategory === "wallets" && (
                          <div className="text-center py-2">
                            <p className="text-xs text-blue-200 mb-2">
                              You'll be redirected to complete the payment
                            </p>
                            <img
                              src="/api/placeholder/150/60"
                              alt="Wallet provider"
                              className="mx-auto rounded"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Order summary */}
                    <div className="bg-black/30 p-3 rounded-lg mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-blue-200">Plan</span>
                        <span className="text-sm text-white font-medium">
                          {getSelectedPlanDetails()?.name} ({billingCycle})
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-blue-200">Price</span>
                        <span className="text-sm text-white font-medium">
                          {getSelectedPlanDetails()?.price}
                        </span>
                      </div>
                      <div className="border-t border-white/10 my-2"></div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-blue-200">
                          Total (inc. GST)
                        </span>
                        <span className="text-sm text-white font-bold">
                          {getSelectedPlanDetails()?.price}
                        </span>
                      </div>
                    </div>

                    {/* Security badges */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-xs text-blue-200">
                        <Shield className="w-3 h-3 mr-1" />
                        <span>256-bit SSL Secure</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="bg-white/90 h-4 w-8 rounded"></div>
                        <div className="bg-white/90 h-4 w-8 rounded"></div>
                        <div className="bg-white/90 h-4 w-8 rounded"></div>
                      </div>
                    </div>

                    {/* Payment button */}
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 flex items-center justify-center">
                      <span>Pay {getSelectedPlanDetails()?.price}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Institutional callout */}
        <div className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a custom solution for your placement cell?
          </h3>
          <p className="text-blue-100 mb-6">
            We offer special institutional packages for colleges and placement
            offices. Get custom templates, bulk student accounts, and detailed
            analytics.
          </p>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Contact for Institutional Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

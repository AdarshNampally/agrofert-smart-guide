
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, Lightbulb, Clock, Droplets, ShoppingCart } from "lucide-react";

// Mock recommendation data
const cropRecommendations = {
  rice: {
    fertilizers: [
      {
        name: "NPK 10-26-26",
        reason: "Perfect balance for rice during grain filling stage",
        dosage: "150-200 kg/hectare",
        timing: "Apply during tillering and panicle initiation",
        price: 45.99
      },
      {
        name: "Urea 46-0-0",
        reason: "High nitrogen for vegetative growth",
        dosage: "100-120 kg/hectare",
        timing: "Split application: 50% at transplanting, 25% at tillering, 25% at panicle initiation",
        price: 32.50
      }
    ],
    tips: [
      "Apply fertilizers when soil moisture is adequate",
      "Avoid over-fertilization to prevent lodging",
      "Consider soil testing before application"
    ]
  },
  wheat: {
    fertilizers: [
      {
        name: "DAP 18-46-0",
        reason: "Excellent phosphorus content for root development",
        dosage: "100-125 kg/hectare",
        timing: "Apply at sowing time",
        price: 52.75
      },
      {
        name: "Urea 46-0-0",
        reason: "Nitrogen for tillering and grain development",
        dosage: "80-100 kg/hectare",
        timing: "Split: 50% at sowing, 50% at crown root initiation",
        price: 32.50
      }
    ],
    tips: [
      "Apply phosphorus fertilizer at sowing for better root establishment",
      "Top dress nitrogen during active tillering",
      "Monitor weather conditions before application"
    ]
  },
  corn: {
    fertilizers: [
      {
        name: "NPK 10-26-26",
        reason: "Balanced nutrition for corn throughout growth stages",
        dosage: "200-250 kg/hectare",
        timing: "Apply at planting and side-dress at V6 stage",
        price: 45.99
      },
      {
        name: "Urea 46-0-0",
        reason: "High nitrogen requirement for corn",
        dosage: "150-180 kg/hectare",
        timing: "Split application: 30% at planting, 70% at V6-V8 stage",
        price: 32.50
      }
    ],
    tips: [
      "Corn has high nitrogen requirements",
      "Side-dress nitrogen when plants are 6-8 inches tall",
      "Ensure adequate soil moisture for nutrient uptake"
    ]
  }
};

const Recommendations = () => {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [soilType, setSoilType] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [region, setRegion] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [recommendations, setRecommendations] = useState<any>(null);

  const generateRecommendations = () => {
    if (!selectedCrop) return;
    
    const cropKey = selectedCrop.toLowerCase();
    const cropRecs = cropRecommendations[cropKey as keyof typeof cropRecommendations];
    
    if (cropRecs) {
      setRecommendations({
        crop: selectedCrop,
        ...cropRecs
      });
    }
  };

  const addToCart = (fertilizer: any) => {
    console.log("Adding to cart:", fertilizer);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">AgroFert Portal</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
              <Link to="/catalog" className="text-gray-700 hover:text-green-600">Catalog</Link>
              <Link to="/recommendations" className="text-green-600 font-medium">Recommendations</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="outline" size="icon">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Fertilizer Recommendations</h2>
          <p className="text-lg text-gray-600">Get personalized fertilizer recommendations based on your crop and farming conditions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                Tell Us About Your Farm
              </CardTitle>
              <CardDescription>
                Provide details about your crop and farming conditions for personalized recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="crop">Primary Crop</Label>
                <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Rice">Rice</SelectItem>
                    <SelectItem value="Wheat">Wheat</SelectItem>
                    <SelectItem value="Corn">Corn</SelectItem>
                    <SelectItem value="Cotton">Cotton</SelectItem>
                    <SelectItem value="Sugarcane">Sugarcane</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="soilType">Soil Type</Label>
                <Select value={soilType} onValueChange={setSoilType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="loam">Loam</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="silt">Silt</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="farmSize">Farm Size (hectares)</Label>
                <Input
                  id="farmSize"
                  type="number"
                  placeholder="e.g., 5"
                  value={farmSize}
                  onChange={(e) => setFarmSize(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="region">Region/Location</Label>
                <Input
                  id="region"
                  placeholder="e.g., Punjab, India"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Any specific concerns or requirements..."
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                />
              </div>

              <Button onClick={generateRecommendations} className="w-full" disabled={!selectedCrop}>
                Get Recommendations
              </Button>
            </CardContent>
          </Card>

          {/* Recommendations Display */}
          <div className="space-y-6">
            {recommendations ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">
                      Recommendations for {recommendations.crop}
                    </CardTitle>
                    <CardDescription>
                      Based on your crop selection and farming conditions
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Fertilizer Recommendations */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Recommended Fertilizers</h3>
                  {recommendations.fertilizers.map((fertilizer: any, index: number) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-semibold">{fertilizer.name}</h4>
                            <p className="text-green-600 font-bold">${fertilizer.price}</p>
                          </div>
                          <Button size="sm" onClick={() => addToCart(fertilizer)}>
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <Badge variant="outline" className="mb-2">Why This Works</Badge>
                            <p className="text-sm text-gray-600">{fertilizer.reason}</p>
                          </div>
                          
                          <div className="flex items-start space-x-4">
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <Droplets className="h-4 w-4 text-blue-500 mr-1" />
                                <span className="text-sm font-medium">Dosage</span>
                              </div>
                              <p className="text-sm text-gray-600">{fertilizer.dosage}</p>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <Clock className="h-4 w-4 text-orange-500 mr-1" />
                                <span className="text-sm font-medium">Timing</span>
                              </div>
                              <p className="text-sm text-gray-600">{fertilizer.timing}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Expert Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {recommendations.tips.map((tip: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg text-gray-500 mb-2">Ready to get recommendations?</p>
                    <p className="text-sm text-gray-400">Fill in the form to receive personalized fertilizer recommendations for your crop.</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;

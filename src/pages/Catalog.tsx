
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, ShoppingCart, Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for fertilizers
const mockFertilizers = [
  {
    id: 1,
    name: "NPK 10-26-26",
    composition: "Nitrogen 10%, Phosphorus 26%, Potassium 26%",
    suitableCrops: ["Rice", "Wheat", "Corn"],
    price: 45.99,
    quantity: "50kg bag",
    seller: "Green Valley Supplies",
    image: "/placeholder.svg",
    description: "Balanced fertilizer perfect for grain crops during flowering stage."
  },
  {
    id: 2,
    name: "Urea 46-0-0",
    composition: "Nitrogen 46%",
    suitableCrops: ["All crops"],
    price: 32.50,
    quantity: "50kg bag",
    seller: "Farm Direct Co.",
    image: "/placeholder.svg",
    description: "High nitrogen content fertilizer for vegetative growth."
  },
  {
    id: 3,
    name: "DAP 18-46-0",
    composition: "Nitrogen 18%, Phosphorus 46%",
    suitableCrops: ["Cotton", "Sugarcane", "Vegetables"],
    price: 52.75,
    quantity: "50kg bag",
    seller: "AgroTech Solutions",
    image: "/placeholder.svg",
    description: "Excellent for root development and early plant growth."
  },
  {
    id: 4,
    name: "Potash 0-0-60",
    composition: "Potassium 60%",
    suitableCrops: ["Fruits", "Vegetables", "Sugarcane"],
    price: 38.25,
    quantity: "50kg bag",
    seller: "Natural Nutrients Ltd",
    image: "/placeholder.svg",
    description: "High potassium fertilizer for fruit quality and disease resistance."
  },
  {
    id: 5,
    name: "Organic Compost",
    composition: "Organic matter 85%, NPK 4-2-2",
    suitableCrops: ["All organic crops"],
    price: 28.99,
    quantity: "50kg bag",
    seller: "EcoFarm Supplies",
    image: "/placeholder.svg",
    description: "100% organic fertilizer made from decomposed plant matter."
  },
  {
    id: 6,
    name: "Micronutrient Mix",
    composition: "Zinc, Iron, Manganese, Boron",
    suitableCrops: ["All crops"],
    price: 65.00,
    quantity: "25kg bag",
    seller: "Precision Agriculture Co.",
    image: "/placeholder.svg",
    description: "Essential micronutrients for optimal crop health."
  }
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const { toast } = useToast();

  const filteredFertilizers = mockFertilizers.filter(fertilizer => {
    const matchesSearch = fertilizer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fertilizer.composition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCrop = !selectedCrop || fertilizer.suitableCrops.some(crop => 
      crop.toLowerCase().includes(selectedCrop.toLowerCase())
    );
    const matchesPrice = !priceFilter || 
                        (priceFilter === "low" && fertilizer.price < 40) ||
                        (priceFilter === "medium" && fertilizer.price >= 40 && fertilizer.price < 60) ||
                        (priceFilter === "high" && fertilizer.price >= 60);
    
    return matchesSearch && matchesCrop && matchesPrice;
  });

  const addToCart = (fertilizer: any) => {
    try {
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = existingCart.find((item: any) => item.id === fertilizer.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        existingCart.push({ ...fertilizer, quantity: 1 });
      }
      
      localStorage.setItem('cart', JSON.stringify(existingCart));
      
      toast({
        title: "Added to Cart",
        description: `${fertilizer.name} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    }
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
              <Link to="/catalog" className="text-green-600 font-medium">Catalog</Link>
              <Link to="/recommendations" className="text-gray-700 hover:text-green-600">Recommendations</Link>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Fertilizer Catalog</h2>
          <p className="text-lg text-gray-600">Browse our wide selection of quality fertilizers from verified sellers</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <h3 className="text-lg font-semibold">Filters</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search fertilizers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCrop} onValueChange={setSelectedCrop}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by crop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Crops</SelectItem>
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="corn">Corn</SelectItem>
                <SelectItem value="cotton">Cotton</SelectItem>
                <SelectItem value="sugarcane">Sugarcane</SelectItem>
                <SelectItem value="vegetables">Vegetables</SelectItem>
                <SelectItem value="fruits">Fruits</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $40</SelectItem>
                <SelectItem value="medium">$40 - $60</SelectItem>
                <SelectItem value="high">Above $60</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFertilizers.map((fertilizer) => (
            <Card key={fertilizer.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                  <Leaf className="h-12 w-12 text-green-400" />
                </div>
                <CardTitle className="text-xl">{fertilizer.name}</CardTitle>
                <CardDescription>{fertilizer.composition}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">{fertilizer.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {fertilizer.suitableCrops.slice(0, 3).map((crop) => (
                      <Badge key={crop} variant="secondary" className="text-xs">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold text-green-600">${fertilizer.price}</p>
                      <p className="text-sm text-gray-500">{fertilizer.quantity}</p>
                    </div>
                    <Button onClick={() => addToCart(fertilizer)} size="sm">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500">Sold by: {fertilizer.seller}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFertilizers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No fertilizers found matching your criteria.</p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCrop("");
                setPriceFilter("");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, ShoppingCart, Users, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">AgroFert Portal</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/catalog" className="text-gray-700 hover:text-green-600">Catalog</Link>
              <Link to="/recommendations" className="text-gray-700 hover:text-green-600">Recommendations</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600">Sellers Contact</Link>
            </nav>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
              <Link to="/cart">
                <Button variant="outline" size="icon">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Smart Fertilizer Solutions for Modern Farmers
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get personalized fertilizer recommendations, browse verified products, and boost your crop yields with our AI-powered platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/catalog">
              <Button size="lg" className="px-8 py-3">
                Browse Fertilizers
              </Button>
            </Link>
            <Link to="/recommendations">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Get Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AgroFert Portal?</h3>
          <p className="text-lg text-gray-600">Everything you need for successful farming in one place</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Leaf className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Smart Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get AI-powered fertilizer recommendations based on your crops, soil, and region.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShoppingCart className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Easy Shopping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Browse and purchase fertilizers from verified sellers with secure payment options.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-purple-600 mb-2" />
              <CardTitle>Verified Sellers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                All sellers are verified by our admin team to ensure product quality and authenticity.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-orange-600 mb-2" />
              <CardTitle>Track Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Monitor your purchase history and get insights to improve your farming outcomes.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-lg font-bold">AgroFert Portal</span>
              </div>
              <p className="text-gray-400">Empowering farmers with smart fertilizer solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Farmers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/catalog" className="hover:text-white">Browse Catalog</Link></li>
                <li><Link to="/recommendations" className="hover:text-white">Get Recommendations</Link></li>
                <li><Link to="/cart" className="hover:text-white">My Cart</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Sellers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white">List Products</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Admin</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AgroFert Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

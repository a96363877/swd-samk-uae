import { AllProductsSection } from "./all-products-section"
import { CartBar } from "./cart-bar"
import { CategoryCarousel } from "./category-carousel"
import { FilterPresets } from "./filter-presets"
import { SiteFooter } from "./footer"
import { SiteHeader } from "./header"
import { MerchantDetails } from "./merchant-details"
import { OffersSection } from "./offers-section"


interface LandingPageProps {
  handleNextPage: () => void
}

export default function LandingPage({ handleNextPage }: LandingPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800">National Fish</h1>
          <p className="text-lg text-gray-600 mt-2">
            Discover our high-quality products of fresh and imported fish and premium shrimp. Order now with the best
            and fastest online delivery service.
          </p>
        </div>
        <CategoryCarousel />
        <FilterPresets />
        <MerchantDetails />
        <OffersSection />
        <AllProductsSection />
      </main>
      <CartBar onGoToCart={handleNextPage} />
      <SiteFooter />
      {/* Add an empty div to account for CartBar height to prevent content overlap */}
      <div className="h-20 md:h-24" />
    </div>
  )
}

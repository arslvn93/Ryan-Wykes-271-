import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, LinkedinIcon as LinkedIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      {/* Header/Navigation */}
      <header className="bg-[#2c2c2c] text-white py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm font-light tracking-widest uppercase">
            <Link href="/" className="text-white">
              <h1 className="text-xl md:text-2xl font-normal tracking-wide font-serif">Ryan Wykes</h1>
              <p className="text-xs tracking-[0.3em]">FIRST-TIME HOME BUYING SPECIALIST</p>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-wider">
            <Link href="#" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-300">
              About
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Market Insights
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Buyer's Guide
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Seller's Guide
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white">Menu</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Ryan Wykes, First-Time Home Buying Specialist in Toronto"
            fill
            priority
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide leading-tight">
              YOUR TRUSTED GUIDE
              <br />
              FOR FIRST-TIME
              <br />
              HOME BUYERS
            </h1>
            <p className="mt-6 text-sm md:text-base font-light tracking-wider max-w-md mx-auto">
              Expert guidance, integrity, and personalized service for first-time homebuyers in Toronto, Ontario.
            </p>
            <div className="mt-12 space-y-4">
              <Button className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-xs tracking-widest uppercase">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-none px-8 py-6 text-xs tracking-widest uppercase"
              >
                Download Market Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Bar */}
      <section className="py-6 bg-[#af9f94]/30 border-t border-b border-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <span className="text-center font-light text-sm md:text-base">FINANCIAL ADVICE</span>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <span className="text-center font-light text-sm md:text-base">HOME INSPECTION GUIDANCE</span>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <span className="text-center font-light text-sm md:text-base">NEIGHBORHOOD INSIGHTS</span>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <span className="text-center font-light text-sm md:text-base">CLOSING SUPPORT</span>
          </div>
        </div>
      </section>

      {/* About Ryan Section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Ryan Wykes, First-Time Home Buying Specialist"
                width={600}
                height={800}
                className="w-full h-full object-cover mix-blend-normal"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="uppercase tracking-widest text-sm mb-4">MEET RYAN WYKES</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Your Trusted Advisor for First-Time Home Buying in Toronto</h2>
              <p className="text-sm leading-relaxed mb-4">
                With over 10 years of experience in the Toronto real estate market, I've built a reputation for providing
                exceptional service and expert guidance to first-time homebuyers.
              </p>
              <p className="text-sm leading-relaxed mb-8">
                My approach combines in-depth market knowledge, strategic negotiation skills, and a commitment to
                understanding each client's unique needs. Whether you're buying your first home or seeking advice on
                navigating the local market, I'm here to ensure your success.
              </p>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 self-start">
                LEARN MORE ABOUT RYAN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Market Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <p className="uppercase tracking-widest text-sm mb-4">MARKET INSIGHTS</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Understanding Today's
                <br />
                <span className="italic">Toronto Real Estate Market</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                The Toronto real estate market is constantly evolving, influenced by economic trends, lifestyle changes,
                and local developments. Stay informed with our latest market analysis and insights tailored for first-time homebuyers.
              </p>
              <p className="text-sm leading-relaxed mb-8">
                From emerging neighborhoods to the impact of market trends on affordability, our comprehensive market report covers everything you need to know to make informed decisions as a first-time homebuyer in Toronto.
              </p>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 self-start">
                DOWNLOAD MARKET REPORT
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Toronto real estate market graph"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buyer's Guide Section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">First-Time Homebuyer's Guide</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-serif mb-4">Define Your Vision</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Clarify your needs, desired neighborhoods, and long-term goals to focus your home search effectively.
                </p>
                <div className="w-20 h-px bg-black/70 my-4"></div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-serif mb-4">Financial Preparation</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Understand mortgage options, budgeting, and incentives available for first-time buyers.
                </p>
                <div className="w-20 h-px bg-black/70 my-4"></div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-serif mb-4">Due Diligence</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Learn about home inspections, legal processes, and other critical steps to secure your new home.
                </p>
                <div className="w-20 h-px bg-black/70 my-4"></div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6">
                GET FULL BUYER'S GUIDE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-6">CLIENT TESTIMONIALS</p>
            <blockquote className="text-xl md:text-2xl font-serif italic mb-6">
              "Ryan's expertise and dedication made our home buying experience truly exceptional."
            </blockquote>
            <p className="text-sm text-gray-600 mb-6">
              Working with Ryan was an absolute pleasure. His in-depth knowledge of the Toronto market, attention to detail,
              and unwavering commitment to our needs made the entire process smooth and enjoyable. We couldn’t be happier
              with our new home and the support he provided along the way.
            </p>
            <p className="text-sm font-medium italic">— The Andersons, Toronto</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#f5f3ef]" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Ryan Wykes consulting with clients"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Let's Discuss Your Home Buying Goals</h2>
              <p className="text-lg md:text-xl font-serif mb-6">
                Whether you're a first-time homebuyer looking to settle in Toronto, I'm here to provide expert guidance tailored to your needs.
              </p>
              <p className="text-sm text-gray-600 mb-8">
                Schedule a consultation today and take the first step towards achieving your home ownership dreams.
                I’ll offer personalized advice and exclusive insights into the local market.
              </p>
              <div className="space-y-4">
                <Input type="text" placeholder="Your Name" className="rounded-none focus:ring-black" />
                <Input type="email" placeholder="Your Email" className="rounded-none focus:ring-black" />
                <Input type="tel" placeholder="Your Phone" className="rounded-none focus:ring-black" />
                <Button className="w-full bg-black text-white hover:bg-black/90 rounded-none px-8 py-6 text-xs tracking-widest uppercase">
                  SCHEDULE CONSULTATION
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c2c2c] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="bg-white text-black p-6 mb-8">
                <h3 className="text-xl font-serif mb-1">Ryan Wykes</h3>
                <p className="text-xs uppercase tracking-widest">FIRST-TIME HOME BUYING SPECIALIST</p>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Providing expert guidance and personalized service to first-time homebuyers in Toronto.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  Home
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  About
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Market Insights
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Buyer's Guide
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Seller's Guide
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-6">Stay Informed</h3>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to our newsletter for exclusive insights and first-time homebuyer tips.
              </p>
              <div className="flex mb-4">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-white/30 rounded-none focus:border-white"
                />
                <Button className="bg-white text-black hover:bg-white/90 rounded-none ml-2">Subscribe</Button>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link href="#" className="text-white hover:text-gray-300">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <LinkedIn size={18} />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 text-xs text-gray-400">
            © RYAN WYKES FIRST-TIME HOME BUYING SPECIALIST 2025. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  )
}
import { FaArrowRight, FaGithub, FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';
import { CollaboratorCard } from '../components/CollaboratorCard';
import { FeatureCard } from '../components/FeatureCard';
import coral from '../assets/coral.png';
import sol from '../assets/sol.jpg';
import { TestimonialCard } from "../components/TestimonalCard";
import {ProjectHighlight} from "../components/ProjectHighlight";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <header className="relative container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-100">gib.work</div>
        <nav className="flex space-x-6">
          <a href="https://www.youtube.com/@gibwork_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors duration-200">
            <FaYoutube className="h-6 w-6" />
            <span className="sr-only">Youtube</span>
          </a>
          <a href="https://discord.gg/U3kEda4b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors duration-200">
            <FaDiscord className="h-6 w-6" />
            <span className="sr-only">Discord</span>
          </a>
          <a href="https://x.com/gib_work" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors duration-200">
            <FaTwitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </nav>
      </header>

      <main className="relative container mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-100 leading-tight">
            Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Open Source</span>
          </h1>
          <p className="text-xl mb-10 text-gray-400 max-w-2xl mx-auto">Empowering developers with on-chain bounties</p>
          <a
            href="https://app.gib.work"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-500 text-gray-100 font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-200 transform hover:-translate-y-1"
          >
            Go to App
            <FaArrowRight className="ml-2" />
          </a>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            title="Create Bounties"
            description="Easily create bounties for GitHub issues and drive open-source development."
            icon={FaGithub}
          />
          <FeatureCard
            title="Earn Rewards"
            description="Contribute to projects and earn cryptocurrency for your work."
            icon={FaDiscord}
          />
          <FeatureCard
            title="Build Community"
            description="Connect with developers and grow the decentralized gig economy."
            icon={FaTwitter}
          />
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectHighlight
              title="DeFi Integration"
              description="Successfully integrated decentralized finance protocols into an existing open-source project."
              stats={[
                { value: "500+", label: "Commits" },
                { value: "$50K", label: "Bounty Value" },
                { value: "30", label: "Contributors" }
              ]}
            />
            <ProjectHighlight
              title="NFT Marketplace"
              description="Developed a community-driven NFT marketplace for digital artists."
              stats={[
                { value: "1000+", label: "Transactions" },
                { value: "$100K", label: "Total Volume" },
                { value: "50", label: "Artists Onboarded" }
              ]}
            />
            <ProjectHighlight
              title="Open Source Ecosystem"
              description="Built a comprehensive ecosystem for open-source contributions with robust tools and integrations."
              stats={[
                { value: "200+", label: "Projects" },
                { value: "$200K", label: "Total Bounties" },
                { value: "75", label: "Active Contributors" }
              ]}
            />
          </div>
          <div className="text-center mt-10">
            <a
              href="https://app.gib.work"
              className="inline-flex items-center bg-gray-700 text-gray-100 font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition-all duration-200 transform hover:-translate-y-1"
            >
              Explore Bounties
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TestimonialCard
              quote="Gibwork has transformed how we manage our open-source projects. The bounty system is a game-changer!"
              author="Alex Johnson"
              role="Lead Developer, TechCorp"
            />
            <TestimonialCard
              quote="As a freelance developer, Gibwork has opened up exciting opportunities for me in the Web3 space."
              author="Sarah Lee"
              role="Blockchain Developer"
            />
            <TestimonialCard
              quote="The integration with various blockchain protocols has been smooth and effective, thanks to Gibwork."
              author="Michael Smith"
              role="CTO, DevTeam"
            />
            <TestimonialCard
              quote="Gibwork's platform has significantly boosted my productivity and engagement in the open-source community."
              author="Emma Davis"
              role="Open Source Contributor"
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">Collaborating with Top Open Source Initiatives</h2>
          <p className="text-center mb-10 text-gray-400 max-w-2xl mx-auto">Explore cutting-edge projects and shape the future of technology.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CollaboratorCard
              name="SolanaCiv"
              description="Fully on-chain strategy game inspired by Civilization. Built on @Solana."
              logo={sol}
            />
            <CollaboratorCard
              name="Anchor"
              description="Anchor is a framework for Solana providing several <br /> convenient tools for writing smart contracts."
              logo={coral}
            />
          </div>
        </section>

      </main>

      <footer className="relative container mx-auto px-4 py-6 flex justify-between items-center border-t border-gray-800">
        <p className="text-gray-500">© 2024 GibWork. All rights reserved.</p>
        <nav className="flex space-x-4">
          <a href="https://www.youtube.com/@gibwork_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors duration-200">
            <FaYoutube className="h-6 w-6" />
            <span className="sr-only">Youtube</span>
          </a>
          <a href="https://discord.gg/U3kEda4b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors duration-200">
            <FaDiscord className="h-6 w-6" />
            <span className="sr-only">Discord</span>
          </a>
          <a href="https://x.com/gib_work" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors duration-200">
            <FaTwitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </nav>
      </footer>
    </div>
  );
}

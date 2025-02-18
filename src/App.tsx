import React from 'react';
import { Github, Container, Terminal, Shield, Code2, Boxes, ArrowRight, Pocket as Docker, Workflow, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Container className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Starknet Dev Container
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            A clean and isolated workspace environment for open-source Starknet projects
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/starknet-fortress/starknet-dev-container" 
               className="flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
            <a href="#get-started" 
               className="flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors">
              <Terminal className="w-5 h-5 mr-2" />
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Key Features */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Components</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-700/30 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-transform">
              <Docker className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Docker Image</h3>
              <p className="text-gray-300">Pre-configured container with essential Starknet development tools, managed by ASDF for seamless version control.</p>
            </div>
            <div className="bg-gray-700/30 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-transform">
              <Code2 className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">VSCode Dev Container</h3>
              <p className="text-gray-300">Ready-to-use VS Code development environment ensuring consistent and isolated development across your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pre-installed Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'NodeJs', 'Yarn', 'Rust', 'Scarb',
              'Starkli', 'Starknet Foundry', 'Starknet Devnet', 'ASDF'
            ].map((tool) => (
              <div key={tool} className="flex items-center space-x-2 bg-gray-700/30 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="get-started" className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Started</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-gray-700/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  <span>Docker Desktop installed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  <span>Visual Studio Code installed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  <span>Remote Development Extension Pack for VS Code</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-700/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
              <ol className="space-y-4 list-decimal list-inside">
                <li>Open your project folder in VS Code</li>
                <li>Press <kbd className="px-2 py-1 bg-gray-600 rounded">F1</kbd> or <kbd className="px-2 py-1 bg-gray-600 rounded">Cmd/Ctrl + Shift + P</kbd></li>
                <li>Type "Dev Containers: Open Folder in Container"</li>
                <li>Wait for the container to build and configure</li>
                <li>Start developing!</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Security Note */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-2">Security Note</h3>
                <p className="text-gray-300">
                  While this containerized setup provides an additional layer of protection, each developer remains responsible for their own cryptographic security. Always follow blockchain security best practices, sensitive data should never be stored in development environments, including dev containers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/starknet-fortress/starknet-dev-container" 
               className="hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://hub.docker.com/r/starknet-fortress/starknet-dev-container" 
               className="hover:text-white transition-colors">
              <Docker className="w-6 h-6" />
            </a>
          </div>
          <p>© 2024 Starknet Dev Container. Open source project.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
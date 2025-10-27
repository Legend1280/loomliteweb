import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Database, 
  Brain, 
  Network, 
  Zap, 
  Shield, 
  Users, 
  FileText,
  Search,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import WavingFabric from "@/components/WavingFabric";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
}

export default function Home() {
  const problemSection = useInView();
  const solutionSection = useInView();
  const comparisonSection = useInView();
  const integrationSection = useInView();
  const philosophySection = useInView();
  const ctaSection = useInView();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative" style={{ position: 'relative', zIndex: 1 }}>
      <WavingFabric />
      {/* Hero Section */}
      <motion.section 
        className="container py-32 md:py-48"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h1 
            className="text-5xl md:text-7xl font-light tracking-tight leading-tight"
            variants={fadeInUp}
          >
            <span className="glow-text">Structure the unstructured.</span>
            <br />
            <span className="glow-text">Understand everything.</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
            variants={fadeInUp}
          >
            Loom Lite turns documents, notes, and data chaos into a living web of meaning — readable by humans, navigable by machines.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            variants={fadeInUp}
          >
            <Button size="lg" className="text-base px-8 py-6 font-normal">
              See the Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 font-normal">
              Request Enterprise Access
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Section */}
      <motion.section 
        ref={problemSection.ref}
        className="container py-32 md:py-48"
        initial={{ opacity: 0, y: 50 }}
        animate={problemSection.isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-light text-center leading-tight">
            <span className="glow-text">90% of enterprise data is unstructured</span> — and invisible to your systems.
          </h2>
          <div className="text-base md:text-lg text-muted-foreground space-y-6 text-center max-w-2xl mx-auto font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              animate={problemSection.isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Emails, PDFs, chats, images, and reports hold your institutional memory. Yet they remain disconnected.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={problemSection.isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Search engines read text, not context.
            </motion.p>
            <motion.p 
              className="text-primary font-normal text-xl pt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={problemSection.isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Loom Lite reads meaning.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section 
        ref={solutionSection.ref}
        className="container py-32 md:py-48"
        initial={{ opacity: 0 }}
        animate={solutionSection.isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              A semantic engine built for <span className="glow-text">understanding</span>.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Loom Lite ingests any file — text, image, PDF, even voice transcripts — and generates a structured ontology behind the scenes.
              Every sentence becomes a concept, every document a constellation.
              Search becomes discovery.
            </p>
          </div>

          {/* Animated Graph Placeholder */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={solutionSection.isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="glow-box aspect-video bg-black rounded-lg flex items-center justify-center">
              <div className="text-center space-y-6 p-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Network className="h-12 w-12 mx-auto text-primary" />
                </motion.div>
                <p className="text-muted-foreground text-sm font-light">
                  Document → Paragraph → Concept → Relation → Ontology
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* For Humans. For Machines. */}
      <motion.section 
        ref={comparisonSection.ref}
        className="container py-32 md:py-48"
        initial={{ opacity: 0 }}
        animate={comparisonSection.isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-5xl font-light text-center leading-tight">
            For Humans. <span className="glow-text">For Machines.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Humans Column */}
            <motion.div 
              className="space-y-8 p-10 rounded-lg bg-card border border-border"
              initial={{ opacity: 0, x: -50 }}
              animate={comparisonSection.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-normal">Humans</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Navigate ideas through intuitive mind maps and visual readers
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Brain className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Understand the <em>why</em> behind your data
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Collaborate on shared understanding
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Machines Column */}
            <motion.div 
              className="space-y-8 p-10 rounded-lg bg-card border border-border"
              initial={{ opacity: 0, x: 50 }}
              animate={comparisonSection.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-normal">Machines</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Search className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Query meaning directly through APIs and vector search
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Network className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Integrate with your AI and analytics pipelines
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Database className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Build dynamic ontologies from real data
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enterprise Integration */}
      <motion.section 
        ref={integrationSection.ref}
        className="container py-32 md:py-48"
        initial={{ opacity: 0 }}
        animate={integrationSection.isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              Plug into your stack — <span className="glow-text">securely</span>.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Deploy Loom Lite on-prem or in the cloud.
              Connect with Notion, Confluence, SharePoint, and Palantir Foundry.
              APIs and n8n workflows give you control over ingestion, semantic mapping, and governance.
            </p>
          </div>

          {/* Integration Diagram Placeholder */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={integrationSection.isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="glow-box aspect-video bg-black rounded-lg flex items-center justify-center">
              <div className="text-center space-y-6 p-8">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  >
                    <FileText className="h-10 w-10 text-muted-foreground" />
                  </motion.div>
                  <ArrowRight className="h-6 w-6 text-primary" />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <Shield className="h-10 w-10 text-primary" />
                  </motion.div>
                  <ArrowRight className="h-6 w-6 text-primary" />
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Network className="h-10 w-10 text-muted-foreground" />
                  </motion.div>
                  <ArrowRight className="h-6 w-6 text-primary" />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <Database className="h-10 w-10 text-muted-foreground" />
                  </motion.div>
                </div>
                <p className="text-muted-foreground text-sm font-light">
                  Data Sources → Loom Lite → Ontology → Foundry / BI Tools / AI Models
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section 
        ref={philosophySection.ref}
        className="container py-32 md:py-48"
        initial={{ opacity: 0, y: 50 }}
        animate={philosophySection.isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            <span className="glow-text">Meaning</span> is the new infrastructure.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Loom Lite isn't another search tool. It's the foundation for a semantic enterprise — where context becomes computable, and insight becomes architecture.
          </p>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        ref={ctaSection.ref}
        className="container py-32 md:py-48"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={ctaSection.isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Bring <span className="glow-text">structure</span> to your story.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-base px-8 py-6 font-normal">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 font-normal">
              Download Technical Brief
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-light">
            <p>© 2025 Loom Lite</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Security</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="container py-20 md:py-32"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight"
            variants={fadeInUp}
          >
            <span className="glow-text">Structure the unstructured.</span>
            <br />
            <span className="glow-text">Understand everything.</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Loom Lite turns documents, notes, and data chaos into a living web of meaning — readable by humans, navigable by machines.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            variants={fadeInUp}
          >
            <Button size="lg" className="text-lg px-8 py-6">
              See the Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Request Enterprise Access
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Section */}
      <motion.section 
        ref={problemSection.ref}
        className="container py-20 md:py-32"
        initial={{ opacity: 0, y: 50 }}
        animate={problemSection.isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="glow-text">90% of enterprise data is unstructured</span> — and invisible to your systems.
          </h2>
          <div className="text-lg md:text-xl text-muted-foreground space-y-4 text-center max-w-3xl mx-auto">
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
              className="text-primary font-semibold text-2xl"
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
        className="container py-20 md:py-32"
        initial={{ opacity: 0 }}
        animate={solutionSection.isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              A semantic engine built for <span className="glow-text">understanding</span>.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
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
              <div className="text-center space-y-4 p-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Network className="h-16 w-16 mx-auto text-primary" />
                </motion.div>
                <p className="text-muted-foreground">
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
        className="container py-20 md:py-32"
        initial={{ opacity: 0 }}
        animate={comparisonSection.isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            For Humans. <span className="glow-text">For Machines.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Humans Column */}
            <motion.div 
              className="space-y-6 p-8 rounded-lg bg-card border border-border"
              initial={{ opacity: 0, x: -50 }}
              animate={comparisonSection.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Humans</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Navigate ideas through intuitive mind maps and visual readers
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Understand the <em>why</em> behind your data
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Collaborate on shared understanding
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Machines Column */}
            <motion.div 
              className="space-y-6 p-8 rounded-lg bg-card border border-border"
              initial={{ opacity: 0, x: 50 }}
              animate={comparisonSection.isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Machines</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Search className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Query meaning directly through APIs and vector search
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Network className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Integrate with your AI and analytics pipelines
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
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
        className="container py-20 md:py-32"
        initial={{ opacity: 0 }}
        animate={integrationSection.isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Plug into your stack — <span className="glow-text">securely</span>.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
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
              <div className="text-center space-y-4 p-8">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  >
                    <FileText className="h-12 w-12 text-muted-foreground" />
                  </motion.div>
                  <ArrowRight className="h-8 w-8 text-primary" />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <Shield className="h-12 w-12 text-primary" />
                  </motion.div>
                  <ArrowRight className="h-8 w-8 text-primary" />
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Network className="h-12 w-12 text-muted-foreground" />
                  </motion.div>
                  <ArrowRight className="h-8 w-8 text-primary" />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <Database className="h-12 w-12 text-muted-foreground" />
                  </motion.div>
                </div>
                <p className="text-muted-foreground text-sm">
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
        className="container py-20 md:py-32"
        initial={{ opacity: 0, y: 50 }}
        animate={philosophySection.isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="glow-text">Meaning</span> is the new infrastructure.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Loom Lite isn't another search tool. It's the foundation for a semantic enterprise — where context becomes computable, and insight becomes architecture.
          </p>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        ref={ctaSection.ref}
        className="container py-20 md:py-32"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={ctaSection.isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Bring <span className="glow-text">structure</span> to your story.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Download Technical Brief
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Loom Lite</p>
            <div className="flex gap-6">
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


import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "./home";
import { useState } from "react";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id;

  const project = PROJECTS.find((p) => p.id === projectId);
  const storeLabel =
    project?.appStoreLink?.includes("play.google.com") ? "View on Google Play" : "View on App Store";
  const [imageFailed, setImageFailed] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center px-6 md:px-12 backdrop-blur-md bg-background/50 border-b border-white/5">
        <Link href="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {project.type}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {project.longDescription || project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-secondary/30 border border-white/10 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.appStoreLink && (
              <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  {storeLabel}
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {Array.isArray((project as any).relation) && (project as any).relation.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-3xl border border-white/10 bg-secondary/20 p-8">
              <h2 className="text-2xl font-bold mb-4">My Role & Impact</h2>
              <ul className="text-muted-foreground leading-relaxed text-lg space-y-2 list-disc list-inside">
                {(project as any).relation.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Project Image */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-[9/16] md:aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary/50 border border-white/5 shadow-2xl">
              {project.image && !imageFailed ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={() => setImageFailed(true)}
                />
              ) : project.imageComponent ? (
                <project.imageComponent />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-muted-foreground border-t border-white/5 bg-background/50 backdrop-blur-sm">
        <Link href="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </Link>
      </footer>
    </div>
  );
}


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutMeGallery() {
  const images = [
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:griksd-cols-2 gap-6">
            <div className="space-y-4">
              <img
                src="/images/placeholder.svg"
                alt="Your Name"
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="flex flex-wrap">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="rounded-lg w-1/2 object-cover"
                  />
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Name</h1>
              <h2 className="text-xl text-muted-foreground mb-4">
                Your Title / Position
              </h2>
              <p className="mb-4">
                Welcome to my portfolio! I&apos;m a passionate [your profession]
                with X years of experience in [your field]. I specialize in
                [your key skills or areas of expertise]. My goal is to [brief
                statement about your professional aspirations].
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Key Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Skill 1</Badge>
                  <Badge>Skill 2</Badge>
                  <Badge>Skill 3</Badge>
                  <Badge>Skill 4</Badge>
                  <Badge>Skill 5</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

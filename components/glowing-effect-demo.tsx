"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <section className="py-0">
      <div className="container mx-auto px-4">
        {/* <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Unlock the Glow
        </h2> */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4 text-white" />}
            title="Do things the right way"
            description="Running out of copy so I'll write anything."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-4 w-4 text-white" />}
            title="The best AI code editor ever."
            description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4 text-white" />}
            title="You should buy Aceternity UI Pro"
            description="It's the best money you'll ever spend"
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4 text-white" />}
            title="This card is also built by Cursor"
            description="I'm not even kidding. Ask my mom if you don't believe me."
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-4 w-4 text-white" />}
            title="Coming soon on Aceternity UI"
            description="I'm writing the code as I record this, no shit."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      {/* 1. Reduced Outer Radius: Changed `rounded-[1.25rem]` to `rounded-2xl` (16px) or `rounded-xl` (12px).
         Let's go with `rounded-xl` for a sharper look.
      */}
      <div className="relative h-full rounded-xl border-[0.75px] border-transparent p-2 md:rounded-2xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {/* 2. Reduced Inner Radius: Changed `rounded-xl` to `rounded-lg` (8px). 
        */}
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-lg border-[0.75px] border-neutral-800 bg-black p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {/* 3. Icon Box Radius: Changed `rounded-lg` to `rounded-md` (6px) */}
            <div className="w-fit rounded-md border-[0.75px] border-neutral-800 bg-neutral-900 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-semibold leading-[1.375rem] tracking-[-0.04em] text-white md:text-2xl md:leading-[1.875rem] font-sans">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
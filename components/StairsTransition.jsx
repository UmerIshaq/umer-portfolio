"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairsTransition = () => {
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="h-screen w-screen fixed right-0 left-0 top-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairsTransition;

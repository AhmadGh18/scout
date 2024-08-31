import React from "react";
import { useInView } from "react-intersection-observer";

const Statistic = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Start animation when 10% of the element is visible
  });

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-white mt-16 font-Aljazeera md:relative">
      <div className="flex items-center md:top-4 md:left-[50%] md:right-[50%] md:absolute justify-center md:mt-[-80px] mb-10">
        <div className="bg-primary text-2xl tracking-widest p-[12px] text-white px-4 py-2 rounded-b-full rounded-tl-none rounded-tr-none text-center">
          إحصائيات
        </div>
      </div>
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Users */}
        <StatisticCard
          title="المستخدمين"
          count={2000}
          color="text-blue-500"
          inView={inView}
        />

        {/* Leaders */}
        <StatisticCard
          title="القادة"
          count={400}
          color="text-green-500"
          inView={inView}
        />

        {/* Activities */}
        <StatisticCard
          title="الأنشطة"
          count={2333}
          color="text-red-500"
          inView={inView}
        />

        {/* Days */}
        <StatisticCard
          title="الأيام"
          count={4000}
          color="text-purple-500"
          inView={inView}
        />
      </div>
    </div>
  );
};

const StatisticCard = ({ title, count, color, inView }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <motion.div
        className={`text-4xl font-bold ${color}`}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <CountUp end={inView ? count : 0} duration={2} />
      </motion.div>
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  );
};

// CountUp Component for number animation
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) return; // No need to animate if the end value is 0

    const start = 0;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const newCount = Math.floor(start + (end - start) * progress);
      setCount(newCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [end, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </motion.span>
  );
};

export default Statistic;
